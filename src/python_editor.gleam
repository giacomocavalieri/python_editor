import gleam/bit_array
import gleam/dynamic.{type Dynamic}
import gleam/int
import gleam/javascript/promise.{type Promise}
import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/result
import gleam/string
import lustre
import lustre/attribute.{type Attribute, attribute}
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import lustre/event

pub fn main() {
  let model =
    read_from_session_storage("model")
    |> deserialise
    |> result.unwrap(default())

  let app = lustre.application(init, update, view)
  let assert Ok(_) = lustre.start(app, "#app", model)
  Nil
}

// --- MODEL -------------------------------------------------------------------

type Model {
  Model(
    code: String,
    output: Option(Output),
    outcome: Option(Outcome),
    times_edited: Int,
    times_ran: Int,
  )
}

fn default() -> Model {
  let code = "print(\"Hello, Python!\")"
  Model(code:, outcome: None, output: None, times_edited: 0, times_ran: 0)
}

fn serialise(model: Model) -> String {
  let Model(code:, times_edited:, times_ran:, ..) = model
  { int.to_string(times_edited) <> "-" }
  <> { int.to_string(times_ran) <> "-" }
  <> code
}

fn deserialise(value: String) -> Result(Model, Nil) {
  use #(times_edited, rest) <- result.try(string.split_once(value, on: "-"))
  use #(times_ran, code) <- result.try(string.split_once(rest, on: "-"))
  use times_edited <- result.try(int.parse(times_edited))
  use times_ran <- result.try(int.parse(times_ran))
  Ok(Model(code:, times_edited:, times_ran:, output: None, outcome: None))
}

type Outcome {
  Success
  Failure(error: String)
}

type Output {
  FromPreviousRun(output: String)
  FromCurrentRun(output: String)
}

fn init(model) -> #(Model, Effect(Msg)) {
  #(model, effect.none())
}

// --- UPDATE ------------------------------------------------------------------

type Msg {
  UserTypedCode(code: String)
  UserPressedRunButton
  UserPressedSaveButton

  SkulptProducedOutputString(string: String)
  SkulptRanCode(outcome: Outcome)
}

fn update(model: Model, msg: Msg) -> #(Model, Effect(Msg)) {
  case msg {
    UserPressedSaveButton -> #(model, save_code(model))

    UserPressedRunButton -> {
      let output = case model.output {
        Some(FromCurrentRun(output)) | Some(FromPreviousRun(output)) ->
          Some(FromPreviousRun(output))
        None -> None
      }
      let model = Model(..model, output:)
      #(model, run_code(model.code))
    }

    UserTypedCode(code) -> {
      let times_edited = model.times_edited + 1
      let model = Model(..model, code:, times_edited:)
      #(model, save_model(model))
    }

    SkulptProducedOutputString(string) -> {
      let output = case model.output {
        Some(FromCurrentRun(output)) -> FromCurrentRun(output <> string)
        None | Some(FromPreviousRun(_)) -> FromCurrentRun(string)
      }

      let model = Model(..model, output: Some(output), outcome: None)
      #(model, effect.none())
    }

    SkulptRanCode(outcome) -> {
      let times_ran = model.times_ran + 1
      let output = case model.output {
        None | Some(FromPreviousRun(_)) -> None
        Some(FromCurrentRun(_)) as output -> output
      }
      let model = Model(..model, outcome: Some(outcome), times_ran:, output:)
      #(model, save_model(model))
    }
  }
}

// --- EFFECTS -----------------------------------------------------------------

fn run_code(code: String) -> Effect(Msg) {
  use dispatch <- effect.from
  let on_output = fn(output) { dispatch(SkulptProducedOutputString(output)) }

  do_run_code(code, on_output)
  |> promise.map(fn(_) { Success })
  |> promise.rescue(fn(error) { Failure(skulpt_error_to_string(error)) })
  |> promise.map(SkulptRanCode)
  |> promise.tap(dispatch)

  Nil
}

fn save_code(model: Model) -> Effect(msg) {
  use _dispatch <- effect.from

  let now = now()
  let metadata =
    [model.times_edited, model.times_ran, now]
    |> list.map(int.to_string)
    |> string.join(with: "-")

  promise.tap(sha256_hash(metadata), fn(hash) {
    let hash = bit_array.base16_encode(hash)
    let heading =
      ["# exported from python editor", "# " <> metadata <> "-" <> hash]
      |> string.join(with: "\n")

    let content = heading <> "\n\n" <> model.code
    save_file("solution.txt", content)
  })

  Nil
}

fn save_model(model: Model) -> Effect(Msg) {
  use _dispatch <- effect.from
  save_to_session_storage("model", serialise(model))
}

// --- VIEW --------------------------------------------------------------------

fn view(model: Model) -> Element(Msg) {
  html.div([attribute.class("limit-max-width-and-center")], [
    html.h1([], [html.text("Python editor")]),
    code_editor(model),
    controls(),
    html.pre([attribute.id("output")], []),
    html.div([attribute.id("canvas")], []),
    page_footer(),
  ])
}

fn code_editor(model: Model) -> Element(Msg) {
  let class = case model.outcome {
    Some(Failure(_)) -> attribute.class("failure")
    Some(Success) -> attribute.class("success")
    None -> attribute.none()
  }

  let output_text = case model.output {
    Some(FromPreviousRun(output)) | Some(FromCurrentRun(output)) -> output
    None -> ""
  }
  let output_text = case model.outcome {
    None | Some(Success) -> output_text
    Some(Failure(error)) ->
      case output_text {
        "" -> error
        _ -> output_text <> "\n" <> error
      }
  }

  html.div([attribute.class("code"), class], [
    code_mirror([
      event.on_input(UserTypedCode),
      attribute.id("code-editor"),
      attribute.class("code-editor"),
      attribute.value(model.code),
    ]),
    case output_text {
      "" -> element.none()
      output ->
        html.div([attribute.class("code-result")], [
          html.pre([], [html.code([], [html.text(output)])]),
          element.none(),
        ])
    },
  ])
}

fn code_mirror(attributes: List(Attribute(Msg))) {
  element.element("code-mirror", attributes, [])
}

fn controls() -> Element(Msg) {
  html.div([attribute.class("controls")], [
    html.button([event.on_click(UserPressedRunButton)], [html.text("Run")]),
    html.button([event.on_click(UserPressedSaveButton)], [html.text("Save")]),
  ])
}

fn page_footer() -> Element(msg) {
  html.footer([], [
    html.text("This website is made with "),
    html.a([attribute.href("https://gleam.run")], [html.text("Gleam")]),
    html.text(" and the Python code runs in the browser thanks to "),
    html.a([attribute.href("https://skulpt.org")], [html.text("Skulpt")]),
  ])
}

// --- FFI ---------------------------------------------------------------------

@external(javascript, "./python_editor.ffi.mjs", "do_run_code")
fn do_run_code(code: String, on_output: fn(String) -> Nil) -> Promise(Nil)

@external(javascript, "./python_editor.ffi.mjs", "skulpt_error_to_string")
fn skulpt_error_to_string(error: Dynamic) -> String

@external(javascript, "./python_editor.ffi.mjs", "now")
fn now() -> Int

@external(javascript, "./python_editor.ffi.mjs", "sha256_hash")
fn sha256_hash(data: String) -> Promise(BitArray)

@external(javascript, "./python_editor.ffi.mjs", "save_file")
fn save_file(file_name: String, content: String) -> Nil

@external(javascript, "./python_editor.ffi.mjs", "read_from_session_storage")
fn read_from_session_storage(key: String) -> String

@external(javascript, "./python_editor.ffi.mjs", "save_to_session_storage")
fn save_to_session_storage(key: String, value: String) -> Nil
