import { toBitArray } from "./gleam.mjs";

export function do_run_code(code, on_output) {
  Sk.configure({
    output: on_output,
    // This is needed to add the input text to the prompt that
    // pops up in the page.
    inputfunTakesPrompt: true,
  });

  const canvas_field = document.getElementById("canvas");
  canvas_field.innerHTML = "";
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "canvas";

  // To run the code we call the `importMainWithBody`, it's just
  // a promise, so in case we need to do something with its error
  // we jave to use `.then`!
  return Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("esercizio", false, code, true));
}

export function skulpt_error_to_string(error) {
  return error.toString();
}

export function save_file(file_name, content) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
  link.download = file_name;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(link.href);
}

export function now() {
  return Date.now();
}

export async function sha256_hash(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  return window.crypto.subtle.digest("SHA-256", data).then((buffer) => toBitArray(new Uint8Array(buffer)));
}

export function save_to_session_storage(key, value) {
  sessionStorage.setItem(key, value);
}

export function read_from_session_storage(key) {
  return sessionStorage.getItem(key) ?? "";
}
