let ys = [], Al = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
  for (let t = 0, e = 0; t < s.length; t++)
    (t % 2 ? Al : ys).push(e = e + s[t]);
})();
function af(s) {
  if (s < 768)
    return !1;
  for (let t = 0, e = ys.length; ; ) {
    let i = t + e >> 1;
    if (s < ys[i])
      e = i;
    else if (s >= Al[i])
      t = i + 1;
    else
      return !0;
    if (t == e)
      return !1;
  }
}
function Nr(s) {
  return s >= 127462 && s <= 127487;
}
const Ir = 8205;
function hf(s, t, e = !0, i = !0) {
  return (e ? Rl : ff)(s, t, i);
}
function Rl(s, t, e) {
  if (t == s.length)
    return t;
  t && Ml(s.charCodeAt(t)) && Dl(s.charCodeAt(t - 1)) && t--;
  let i = Xn(s, t);
  for (t += Xr(i); t < s.length; ) {
    let n = Xn(s, t);
    if (i == Ir || n == Ir || e && af(n))
      t += Xr(n), i = n;
    else if (Nr(n)) {
      let r = 0, o = t - 2;
      for (; o >= 0 && Nr(Xn(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      t += 2;
    } else
      break;
  }
  return t;
}
function ff(s, t, e) {
  for (; t > 0; ) {
    let i = Rl(s, t - 2, e);
    if (i < t)
      return i;
    t--;
  }
  return 0;
}
function Xn(s, t) {
  let e = s.charCodeAt(t);
  if (!Dl(e) || t + 1 == s.length)
    return e;
  let i = s.charCodeAt(t + 1);
  return Ml(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function Ml(s) {
  return s >= 56320 && s < 57344;
}
function Dl(s) {
  return s >= 55296 && s < 56320;
}
function Xr(s) {
  return s < 65536 ? 1 : 2;
}
class q {
  lineAt(t) {
    if (t < 0 || t > this.length)
      throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, !1, 1, 0);
  }
  line(t) {
    if (t < 1 || t > this.lines)
      throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, !0, 1, 0);
  }
  replace(t, e, i) {
    [t, e] = We(this, t, e);
    let n = [];
    return this.decompose(0, t, n, 2), i.length && i.decompose(0, i.length, n, 3), this.decompose(e, this.length, n, 1), zt.from(n, this.length - (e - t) + i.length);
  }
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  slice(t, e = this.length) {
    [t, e] = We(this, t, e);
    let i = [];
    return this.decompose(t, e, i, 0), zt.from(i, e - t);
  }
  eq(t) {
    if (t == this)
      return !0;
    if (t.length != this.length || t.lines != this.lines)
      return !1;
    let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), n = new si(this), r = new si(t);
    for (let o = e, l = e; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  iter(t = 1) {
    return new si(this, t);
  }
  iterRange(t, e = this.length) {
    return new El(this, t, e);
  }
  iterLines(t, e) {
    let i;
    if (t == null)
      i = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let n = this.line(t).from;
      i = this.iterRange(n, Math.max(n, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new ql(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  constructor() {
  }
  static of(t) {
    if (t.length == 0)
      throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? q.empty : t.length <= 32 ? new U(t) : zt.from(U.split(t, []));
  }
}
class U extends q {
  constructor(t, e = cf(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((e ? i : l) >= t)
        return new uf(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(t, e, i, n) {
    let r = t <= 0 && e >= this.length ? this : new U(Fr(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (n & 1) {
      let o = i.pop(), l = Yi(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new U(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new U(l.slice(0, a)), new U(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(t, e, i) {
    if (!(i instanceof U))
      return super.replace(t, e, i);
    [t, e] = We(this, t, e);
    let n = Yi(this.text, Yi(i.text, Fr(this.text, 0, t)), e), r = this.length + i.length - (e - t);
    return n.length <= 32 ? new U(n, r) : zt.from(U.split(n, []), r);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = We(this, t, e);
    let n = "";
    for (let r = 0, o = 0; r <= e && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > t && o && (n += i), t < a && e > r && (n += l.slice(Math.max(0, t - r), e - r)), r = a + 1;
    }
    return n;
  }
  flatten(t) {
    for (let e of this.text)
      t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let i = [], n = -1;
    for (let r of t)
      i.push(r), n += r.length + 1, i.length == 32 && (e.push(new U(i, n)), i = [], n = -1);
    return n > -1 && e.push(new U(i, n)), e;
  }
}
class zt extends q {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let i of t)
      this.lines += i.lines;
  }
  lineInner(t, e, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((e ? a : l) >= t)
        return o.lineInner(t, e, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(t, e, i, n) {
    for (let r = 0, o = 0; o <= e && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (t <= a && e >= o) {
        let f = n & ((o <= t ? 1 : 0) | (a >= e ? 2 : 0));
        o >= t && a <= e && !f ? i.push(l) : l.decompose(t - o, e - o, i, f);
      }
      o = a + 1;
    }
  }
  replace(t, e, i) {
    if ([t, e] = We(this, t, e), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (t >= r && e <= l) {
          let a = o.replace(t - r, e - r, i), f = this.lines - o.lines + a.lines;
          if (a.lines < f >> 5 - 1 && a.lines > f >> 5 + 1) {
            let h = this.children.slice();
            return h[n] = a, new zt(h, this.length - (e - t) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(t, e, i);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = We(this, t, e);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= e; r++) {
      let l = this.children[r], a = o + l.length;
      o > t && r && (n += i), t < a && e > o && (n += l.sliceString(t - o, e - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(t) {
    for (let e of this.children)
      e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof zt))
      return 0;
    let i = 0, [n, r, o, l] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; n += e, r += e) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], f = t.children[r];
      if (a != f)
        return i + a.scanIdentical(f, e);
      i += a.length + 1;
    }
  }
  static from(t, e = t.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of t)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of t)
        p.flatten(d);
      return new U(d, e);
    }
    let n = Math.max(32, i >> 5), r = n << 1, o = n >> 1, l = [], a = 0, f = -1, h = [];
    function c(d) {
      let p;
      if (d.lines > r && d instanceof zt)
        for (let g of d.children)
          c(g);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof U && a && (p = h[h.length - 1]) instanceof U && d.lines + p.lines <= 32 ? (a += d.lines, f += d.length + 1, h[h.length - 1] = new U(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, f += d.length + 1, h.push(d));
    }
    function u() {
      a != 0 && (l.push(h.length == 1 ? h[0] : zt.from(h, f)), f = -1, a = h.length = 0);
    }
    for (let d of t)
      c(d);
    return u(), l.length == 1 ? l[0] : new zt(l, e);
  }
}
q.empty = /* @__PURE__ */ new U([""], 0);
function cf(s) {
  let t = -1;
  for (let e of s)
    t += e.length + 1;
  return t;
}
function Yi(s, t, e = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= e && (a > i && (l = l.slice(0, i - n)), n < e && (l = l.slice(e - n)), o ? (t[t.length - 1] += l, o = !1) : t.push(l)), n = a + 1;
  }
  return t;
}
function Fr(s, t, e) {
  return Yi(s, [""], t, e);
}
class si {
  constructor(t, e = 1) {
    this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof U ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof U ? n.text.length : n.children.length;
      if (o == (e > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[i] += e, t == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        t--;
      } else if (n instanceof U) {
        let a = n.text[o + (e < 0 ? -1 : 0)];
        if (this.offsets[i] += e, a.length > Math.max(0, t))
          return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
        t -= a.length;
      } else {
        let a = n.children[o + (e < 0 ? -1 : 0)];
        t > a.length ? (t -= a.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof U ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class El {
  constructor(t, e, i) {
    this.value = "", this.done = !1, this.cursor = new si(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let i = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > i && (t = i), i -= t;
    let { value: n } = this.cursor.next(t);
    return this.pos += (n.length + t) * e, this.value = n.length <= i ? n : e < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class ql {
  constructor(t) {
    this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(t = 0) {
    let { done: e, lineBreak: i, value: n } = this.inner.next(t);
    return e && this.afterBreak ? (this.value = "", this.afterBreak = !1) : e ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (q.prototype[Symbol.iterator] = function() {
  return this.iter();
}, si.prototype[Symbol.iterator] = El.prototype[Symbol.iterator] = ql.prototype[Symbol.iterator] = function() {
  return this;
});
class uf {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.number = i, this.text = n;
  }
  get length() {
    return this.to - this.from;
  }
}
function We(s, t, e) {
  return t = Math.max(0, Math.min(s.length, t)), [t, Math.max(t, Math.min(s.length, e))];
}
function lt(s, t, e = !0, i = !0) {
  return hf(s, t, e, i);
}
function df(s) {
  return s >= 56320 && s < 57344;
}
function pf(s) {
  return s >= 55296 && s < 56320;
}
function mt(s, t) {
  let e = s.charCodeAt(t);
  if (!pf(e) || t + 1 == s.length)
    return e;
  let i = s.charCodeAt(t + 1);
  return df(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function lr(s) {
  return s <= 65535 ? String.fromCharCode(s) : (s -= 65536, String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320));
}
function Wt(s) {
  return s < 65536 ? 1 : 2;
}
const Ss = /\r\n?|\n/;
var nt = /* @__PURE__ */ function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
}(nt || (nt = {}));
class Ft {
  constructor(t) {
    this.sections = t;
  }
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2)
      t += this.sections[e];
    return t;
  }
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e + 1];
      t += i < 0 ? this.sections[e] : i;
    }
    return t;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(t) {
    for (let e = 0, i = 0, n = 0; e < this.sections.length; ) {
      let r = this.sections[e++], o = this.sections[e++];
      o < 0 ? (t(i, n, r), n += r) : n += o, i += r;
    }
  }
  iterChangedRanges(t, e = !1) {
    bs(this, t, e);
  }
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], n = this.sections[e++];
      n < 0 ? t.push(i, n) : t.push(n, i);
    }
    return new Ft(t);
  }
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : $l(this, t);
  }
  mapDesc(t, e = !1) {
    return t.empty ? this : xs(this, t, e);
  }
  mapPos(t, e = -1, i = nt.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], f = n + l;
      if (a < 0) {
        if (f > t)
          return r + (t - n);
        r += l;
      } else {
        if (i != nt.Simple && f >= t && (i == nt.TrackDel && n < t && f > t || i == nt.TrackBefore && n < t || i == nt.TrackAfter && f > t))
          return null;
        if (f > t || f == t && e < 0 && !l)
          return t == n || e < 0 ? r : r + a;
        r += a;
      }
      n = f;
    }
    if (t > n)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`);
    return r;
  }
  touchesRange(t, e = t) {
    for (let i = 0, n = 0; i < this.sections.length && n <= e; ) {
      let r = this.sections[i++], o = this.sections[i++], l = n + r;
      if (o >= 0 && n <= e && l >= t)
        return n < t && l > e ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], n = this.sections[e++];
      t += (t ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return t;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Ft(t);
  }
  static create(t) {
    return new Ft(t);
  }
}
class Y extends Ft {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  apply(t) {
    if (this.length != t.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return bs(this, (e, i, n, r, o) => t = t.replace(n, n + (i - e), o), !1), t;
  }
  mapDesc(t, e = !1) {
    return xs(this, t, e, !0);
  }
  invert(t) {
    let e = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < e.length; n += 2) {
      let o = e[n], l = e[n + 1];
      if (l >= 0) {
        e[n] = l, e[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(q.empty);
        i.push(o ? t.slice(r, r + o) : q.empty);
      }
      r += o;
    }
    return new Y(e, i);
  }
  compose(t) {
    return this.empty ? t : t.empty ? this : $l(this, t, !0);
  }
  map(t, e = !1) {
    return t.empty ? this : xs(this, t, e, !0);
  }
  iterChanges(t, e = !1) {
    bs(this, t, e);
  }
  get desc() {
    return Ft.create(this.sections);
  }
  filter(t) {
    let e = [], i = [], n = [], r = new fi(this);
    t:
      for (let o = 0, l = 0; ; ) {
        let a = o == t.length ? 1e9 : t[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break t;
          let h = Math.min(r.len, a - l);
          it(n, h, -1);
          let c = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          it(e, h, c), c > 0 && ae(i, e, r.text), r.forward(h), l += h;
        }
        let f = t[o++];
        for (; l < f; ) {
          if (r.done)
            break t;
          let h = Math.min(r.len, f - l);
          it(e, h, -1), it(n, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h;
        }
      }
    return {
      changes: new Y(e, i),
      filtered: Ft.create(n)
    };
  }
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e], n = this.sections[e + 1];
      n < 0 ? t.push(i) : n == 0 ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  static of(t, e, i) {
    let n = [], r = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !n.length)
        return;
      o < e && it(n, e - o, -1);
      let c = new Y(n, r);
      l = l ? l.compose(c.map(l)) : c, n = [], r = [], o = 0;
    }
    function f(h) {
      if (Array.isArray(h))
        for (let c of h)
          f(c);
      else if (h instanceof Y) {
        if (h.length != e)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${e})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: c, to: u = c, insert: d } = h;
        if (c > u || c < 0 || u > e)
          throw new RangeError(`Invalid change range ${c} to ${u} (in doc of length ${e})`);
        let p = d ? typeof d == "string" ? q.of(d.split(i || Ss)) : d : q.empty, g = p.length;
        if (c == u && g == 0)
          return;
        c < o && a(), c > o && it(n, c - o, -1), it(n, u - c, g), ae(r, n, p), o = u;
      }
    }
    return f(t), a(!l), l;
  }
  static empty(t) {
    return new Y(t ? [t, -1] : [], []);
  }
  static fromJSON(t) {
    if (!Array.isArray(t))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], i = [];
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (typeof r == "number")
        e.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          e.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(q.empty);
          i[n] = q.of(r.slice(1)), e.push(r[0], i[n].length);
        }
      }
    }
    return new Y(e, i);
  }
  static createSet(t, e) {
    return new Y(t, e);
  }
}
function it(s, t, e, i = !1) {
  if (t == 0 && e <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && e <= 0 && e == s[n + 1] ? s[n] += t : n >= 0 && t == 0 && s[n] == 0 ? s[n + 1] += e : i ? (s[n] += t, s[n + 1] += e) : s.push(t, e);
}
function ae(s, t, e) {
  if (e.length == 0)
    return;
  let i = t.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(e);
  else {
    for (; s.length < i; )
      s.push(q.empty);
    s.push(e);
  }
}
function bs(s, t, e) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let f = n, h = r, c = q.empty;
      for (; f += l, h += a, a && i && (c = c.append(i[o - 2 >> 1])), !(e || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      t(n, f, r, h, c), n = f, r = h;
    }
  }
}
function xs(s, t, e, i = !1) {
  let n = [], r = i ? [] : null, o = new fi(s), l = new fi(t);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let f = Math.min(o.len, l.len);
      it(n, f, -1), o.forward(f), l.forward(f);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
      let f = l.len;
      for (it(n, l.ins, -1); f; ) {
        let h = Math.min(o.len, f);
        o.ins >= 0 && a < o.i && o.len <= h && (it(n, 0, o.ins), r && ae(r, n, o.text), a = o.i), o.forward(h), f -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let f = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let c = Math.min(h, l.len);
          f += c, h -= c, l.forward(c);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      it(n, f, a < o.i ? o.ins : 0), r && a < o.i && ae(r, n, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return r ? Y.createSet(n, r) : Ft.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function $l(s, t, e = !1) {
  let i = [], n = e ? [] : null, r = new fi(s), o = new fi(t);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? Y.createSet(i, n) : Ft.create(i);
    if (r.ins == 0)
      it(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      it(i, 0, o.ins, l), n && ae(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), f = i.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          it(i, a, h, l), n && h && ae(n, i, o.text);
        } else
          o.ins == -1 ? (it(i, r.off ? 0 : r.len, a, l), n && ae(n, i, r.textBit(a))) : (it(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && ae(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > f), r.forward2(a), o.forward(a);
      }
    }
  }
}
class fi {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? q.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, i = this.i - 2 >> 1;
    return i >= e.length && !t ? q.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class be {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.flags = i;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let t = this.flags & 7;
    return t == 7 ? null : t;
  }
  get goalColumn() {
    let t = this.flags >> 6;
    return t == 16777215 ? void 0 : t;
  }
  map(t, e = -1) {
    let i, n;
    return this.empty ? i = n = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), n = t.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new be(i, n, this.flags);
  }
  extend(t, e = t) {
    if (t <= this.anchor && e >= this.anchor)
      return S.range(t, e);
    let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return S.range(this.anchor, i);
  }
  eq(t, e = !1) {
    return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return S.range(t.anchor, t.head);
  }
  static create(t, e, i) {
    return new be(t, e, i);
  }
}
class S {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  map(t, e = -1) {
    return t.empty ? this : S.create(this.ranges.map((i) => i.map(t, e)), this.mainIndex);
  }
  eq(t, e = !1) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(t.ranges[i], e))
        return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new S([this.main], 0);
  }
  addRange(t, e = !0) {
    return S.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  replaceRange(t, e = this.mainIndex) {
    let i = this.ranges.slice();
    return i[e] = t, S.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new S(t.ranges.map((e) => be.fromJSON(e)), t.main);
  }
  static single(t, e = t) {
    return new S([S.range(t, e)], 0);
  }
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < t.length; n++) {
      let r = t[n];
      if (r.empty ? r.from <= i : r.from < i)
        return S.normalized(t.slice(), e);
      i = r.to;
    }
    return new S(t, e);
  }
  static cursor(t, e = 0, i, n) {
    return be.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n != null ? n : 16777215) << 6);
  }
  static range(t, e, i, n) {
    let r = (i != null ? i : 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return e < t ? be.create(e, t, 48 | r) : be.create(t, e, (e > t ? 8 : 0) | r);
  }
  static normalized(t, e = 0) {
    let i = t[e];
    t.sort((n, r) => n.from - r.from), e = t.indexOf(i);
    for (let n = 1; n < t.length; n++) {
      let r = t[n], o = t[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= e && e--, t.splice(--n, 2, r.anchor > r.head ? S.range(a, l) : S.range(l, a));
      }
    }
    return new S(t, e);
  }
}
function Bl(s, t) {
  for (let e of s.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let ar = 0;
class P {
  constructor(t, e, i, n, r) {
    this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = n, this.id = ar++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  get reader() {
    return this;
  }
  static define(t = {}) {
    return new P(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : hr), !!t.static, t.enables);
  }
  of(t) {
    return new Ki([], this, 0, t);
  }
  compute(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Ki(t, this, 1, e);
  }
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Ki(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (i) => i), this.compute([t], (i) => e(i.field(t)));
  }
}
function hr(s, t) {
  return s == t || s.length == t.length && s.every((e, i) => e === t[i]);
}
class Ki {
  constructor(t, e, i, n) {
    this.dependencies = t, this.facet = e, this.type = i, this.value = n, this.id = ar++;
  }
  dynamicSlot(t) {
    var e;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = t[r] >> 1, l = this.type == 2, a = !1, f = !1, h = [];
    for (let c of this.dependencies)
      c == "doc" ? a = !0 : c == "selection" ? f = !0 : (((e = t[c.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && h.push(t[c.id]);
    return {
      create(c) {
        return c.values[o] = i(c), 1;
      },
      update(c, u) {
        if (a && u.docChanged || f && (u.docChanged || u.selection) || ks(c, h)) {
          let d = i(c);
          if (l ? !_r(d, c.values[o], n) : !n(d, c.values[o]))
            return c.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (c, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let g = cn(u, p);
          if (this.dependencies.every((m) => m instanceof P ? u.facet(m) === c.facet(m) : m instanceof wt ? u.field(m, !1) == c.field(m, !1) : !0) || (l ? _r(d = i(c), g, n) : n(d = i(c), g)))
            return c.values[o] = g, 0;
        } else
          d = i(c);
        return c.values[o] = d, 1;
      }
    };
  }
}
function _r(s, t, e) {
  if (s.length != t.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!e(s[i], t[i]))
      return !1;
  return !0;
}
function ks(s, t) {
  let e = !1;
  for (let i of t)
    ri(s, i) & 1 && (e = !0);
  return e;
}
function gf(s, t, e) {
  let i = e.map((a) => s[a.id]), n = e.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = s[t.id] >> 1;
  function l(a) {
    let f = [];
    for (let h = 0; h < i.length; h++) {
      let c = cn(a, i[h]);
      if (n[h] == 2)
        for (let u of c)
          f.push(u);
      else
        f.push(c);
    }
    return t.combine(f);
  }
  return {
    create(a) {
      for (let f of i)
        ri(a, f);
      return a.values[o] = l(a), 1;
    },
    update(a, f) {
      if (!ks(a, r))
        return 0;
      let h = l(a);
      return t.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, f) {
      let h = ks(a, i), c = f.config.facets[t.id], u = f.facet(t);
      if (c && !h && hr(e, c))
        return a.values[o] = u, 0;
      let d = l(a);
      return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const Ur = /* @__PURE__ */ P.define({ static: !0 });
class wt {
  constructor(t, e, i, n, r) {
    this.id = t, this.createF = e, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  static define(t) {
    let e = new wt(ar++, t.create, t.update, t.compare || ((i, n) => i === n), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(Ur).find((i) => i.field == this);
    return ((e == null ? void 0 : e.create) || this.createF)(t);
  }
  slot(t) {
    let e = t[this.id] >> 1;
    return {
      create: (i) => (i.values[e] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[e], o = this.updateF(r, n);
        return this.compareF(r, o) ? 0 : (i.values[e] = o, 1);
      },
      reconfigure: (i, n) => n.config.address[this.id] != null ? (i.values[e] = n.field(this), 0) : (i.values[e] = this.create(i), 1)
    };
  }
  init(t) {
    return [this, Ur.of({ field: this, create: t })];
  }
  get extension() {
    return this;
  }
}
const Se = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ge(s) {
  return (t) => new zl(t, s);
}
const Pn = {
  highest: /* @__PURE__ */ Ge(Se.highest),
  high: /* @__PURE__ */ Ge(Se.high),
  default: /* @__PURE__ */ Ge(Se.default),
  low: /* @__PURE__ */ Ge(Se.low),
  lowest: /* @__PURE__ */ Ge(Se.lowest)
};
class zl {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class An {
  of(t) {
    return new ws(this, t);
  }
  reconfigure(t) {
    return An.reconfigure.of({ compartment: this, extension: t });
  }
  get(t) {
    return t.config.compartments.get(this);
  }
}
class ws {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class fn {
  constructor(t, e, i, n, r, o) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of mf(t, e, o))
      u instanceof wt ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], f = [];
    for (let u of n)
      l[u.id] = f.length << 1, f.push((d) => u.slot(d));
    let h = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = h && h[u] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = a.length << 1 | 1, hr(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((O) => O.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = f.length << 1, f.push((O) => m.dynamicSlot(O)));
        l[p.id] = f.length << 1, f.push((m) => gf(m, p, d));
      }
    }
    let c = f.map((u) => u(l));
    return new fn(t, o, c, l, a, r);
  }
}
function mf(s, t, e) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let f = i[a].indexOf(o);
      f > -1 && i[a].splice(f, 1), o instanceof ws && e.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let f of o)
        r(f, l);
    else if (o instanceof ws) {
      if (e.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let f = t.get(o.compartment) || o.inner;
      e.set(o.compartment, f), r(f, l);
    } else if (o instanceof zl)
      r(o.inner, o.prec);
    else if (o instanceof wt)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Ki)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, Se.default);
    else {
      let f = o.extension;
      if (!f)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(f, l);
    }
  }
  return r(s, Se.default), i.reduce((o, l) => o.concat(l));
}
function ri(s, t) {
  if (t & 1)
    return 2;
  let e = t >> 1, i = s.status[e];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[e] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[e]);
  return s.status[e] = 2 | n;
}
function cn(s, t) {
  return t & 1 ? s.config.staticValues[t >> 1] : s.values[t >> 1];
}
const Wl = /* @__PURE__ */ P.define(), vs = /* @__PURE__ */ P.define({
  combine: (s) => s.some((t) => t),
  static: !0
}), Ll = /* @__PURE__ */ P.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), Vl = /* @__PURE__ */ P.define(), Nl = /* @__PURE__ */ P.define(), Il = /* @__PURE__ */ P.define(), Xl = /* @__PURE__ */ P.define({
  combine: (s) => s.length ? s[0] : !1
});
class ne {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  static define() {
    return new Of();
  }
}
class Of {
  of(t) {
    return new ne(this, t);
  }
}
class yf {
  constructor(t) {
    this.map = t;
  }
  of(t) {
    return new W(this, t);
  }
}
class W {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new W(this.type, e);
  }
  is(t) {
    return this.type == t;
  }
  static define(t = {}) {
    return new yf(t.map || ((e) => e));
  }
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let i = [];
    for (let n of t) {
      let r = n.map(e);
      r && i.push(r);
    }
    return i;
  }
}
W.reconfigure = /* @__PURE__ */ W.define();
W.appendConfig = /* @__PURE__ */ W.define();
class H {
  constructor(t, e, i, n, r, o) {
    this.startState = t, this.changes = e, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Bl(i, e.newLength), r.some((l) => l.type == H.time) || (this.annotations = r.concat(H.time.of(Date.now())));
  }
  static create(t, e, i, n, r, o) {
    return new H(t, e, i, n, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(t) {
    for (let e of this.annotations)
      if (e.type == t)
        return e.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t) {
    let e = this.annotation(H.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
H.time = /* @__PURE__ */ ne.define();
H.userEvent = /* @__PURE__ */ ne.define();
H.addToHistory = /* @__PURE__ */ ne.define();
H.remote = /* @__PURE__ */ ne.define();
function Sf(s, t) {
  let e = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == t.length || t[n] >= s[i]))
      r = s[i++], o = s[i++];
    else if (n < t.length)
      r = t[n++], o = t[n++];
    else
      return e;
    !e.length || e[e.length - 1] < r ? e.push(r, o) : e[e.length - 1] < o && (e[e.length - 1] = o);
  }
}
function Fl(s, t, e) {
  var i;
  let n, r, o;
  return e ? (n = t.changes, r = Y.empty(t.changes.length), o = s.changes.compose(t.changes)) : (n = t.changes.map(s.changes), r = s.changes.mapDesc(t.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: t.selection ? t.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: W.mapEffects(s.effects, n).concat(W.mapEffects(t.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: s.scrollIntoView || t.scrollIntoView
  };
}
function Ts(s, t, e) {
  let i = t.selection, n = qe(t.annotations);
  return t.userEvent && (n = n.concat(H.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof Y ? t.changes : Y.of(t.changes || [], e, s.facet(Ll)),
    selection: i && (i instanceof S ? i : S.single(i.anchor, i.head)),
    effects: qe(t.effects),
    annotations: n,
    scrollIntoView: !!t.scrollIntoView
  };
}
function _l(s, t, e) {
  let i = Ts(s, t.length ? t[0] : {}, s.doc.length);
  t.length && t[0].filter === !1 && (e = !1);
  for (let r = 1; r < t.length; r++) {
    t[r].filter === !1 && (e = !1);
    let o = !!t[r].sequential;
    i = Fl(i, Ts(s, t[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = H.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return xf(e ? bf(n) : n);
}
function bf(s) {
  let t = s.startState, e = !0;
  for (let n of t.facet(Vl)) {
    let r = n(s);
    if (r === !1) {
      e = !1;
      break;
    }
    Array.isArray(r) && (e = e === !0 ? r : Sf(e, r));
  }
  if (e !== !0) {
    let n, r;
    if (e === !1)
      r = s.changes.invertedDesc, n = Y.empty(t.doc.length);
    else {
      let o = s.changes.filter(e);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = H.create(t, n, s.selection && s.selection.map(r), W.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = t.facet(Nl);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof H ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof H ? s = r[0] : s = _l(t, qe(r), !1);
  }
  return s;
}
function xf(s) {
  let t = s.startState, e = t.facet(Il), i = s;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n](s);
    r && Object.keys(r).length && (i = Fl(i, Ts(t, r, s.changes.newLength), !0));
  }
  return i == s ? s : H.create(t, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const kf = [];
function qe(s) {
  return s == null ? kf : Array.isArray(s) ? s : [s];
}
var rt = /* @__PURE__ */ function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
}(rt || (rt = {}));
const wf = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Qs;
try {
  Qs = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function vf(s) {
  if (Qs)
    return Qs.test(s);
  for (let t = 0; t < s.length; t++) {
    let e = s[t];
    if (/\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || wf.test(e)))
      return !0;
  }
  return !1;
}
function Tf(s) {
  return (t) => {
    if (!/\S/.test(t))
      return rt.Space;
    if (vf(t))
      return rt.Word;
    for (let e = 0; e < s.length; e++)
      if (t.indexOf(s[e]) > -1)
        return rt.Word;
    return rt.Other;
  };
}
class B {
  constructor(t, e, i, n, r, o) {
    this.config = t, this.doc = e, this.selection = i, this.values = n, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      ri(this, l << 1);
    this.computeSlot = null;
  }
  field(t, e = !0) {
    let i = this.config.address[t.id];
    if (i == null) {
      if (e)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ri(this, i), cn(this, i);
  }
  update(...t) {
    return _l(this, t, !0);
  }
  applyTransaction(t) {
    let e = this.config, { base: i, compartments: n } = e;
    for (let l of t.effects)
      l.is(An.reconfigure) ? (e && (n = /* @__PURE__ */ new Map(), e.compartments.forEach((a, f) => n.set(f, a)), e = null), n.set(l.value.compartment, l.value.extension)) : l.is(W.reconfigure) ? (e = null, i = l.value) : l.is(W.appendConfig) && (e = null, i = qe(i).concat(l.value));
    let r;
    e ? r = t.startState.values.slice() : (e = fn.resolve(i, n, this), r = new B(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (a, f) => f.reconfigure(a, this), null).values);
    let o = t.startState.facet(vs) ? t.newSelection : t.newSelection.asSingle();
    new B(e, t.newDoc, o, r, (l, a) => a.update(l, t), t);
  }
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
      changes: { from: e.from, to: e.to, insert: t },
      range: S.cursor(e.from + t.length)
    }));
  }
  changeByRange(t) {
    let e = this.selection, i = t(e.ranges[0]), n = this.changes(i.changes), r = [i.range], o = qe(i.effects);
    for (let l = 1; l < e.ranges.length; l++) {
      let a = t(e.ranges[l]), f = this.changes(a.changes), h = f.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(h);
      let c = n.mapDesc(f, !0);
      r.push(a.range.map(c)), n = n.compose(h), o = W.mapEffects(o, h).concat(W.mapEffects(qe(a.effects), c));
    }
    return {
      changes: n,
      selection: S.create(r, e.mainIndex),
      effects: o
    };
  }
  changes(t = []) {
    return t instanceof Y ? t : Y.of(t, this.doc.length, this.facet(B.lineSeparator));
  }
  toText(t) {
    return q.of(t.split(this.facet(B.lineSeparator) || Ss));
  }
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (ri(this, e), cn(this, e));
  }
  toJSON(t) {
    let e = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (t)
      for (let i in t) {
        let n = t[i];
        n instanceof wt && this.config.address[n.id] != null && (e[i] = n.spec.toJSON(this.field(t[i]), this));
      }
    return e;
  }
  static fromJSON(t, e = {}, i) {
    if (!t || typeof t.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          let o = i[r], l = t[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return B.create({
      doc: t.doc,
      selection: S.fromJSON(t.selection),
      extensions: e.extensions ? n.concat([e.extensions]) : n
    });
  }
  static create(t = {}) {
    let e = fn.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof q ? t.doc : q.of((t.doc || "").split(e.staticFacet(B.lineSeparator) || Ss)), n = t.selection ? t.selection instanceof S ? t.selection : S.single(t.selection.anchor, t.selection.head) : S.single(0);
    return Bl(n, i.length), e.staticFacet(vs) || (n = n.asSingle()), new B(e, i, n, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  get tabSize() {
    return this.facet(B.tabSize);
  }
  get lineBreak() {
    return this.facet(B.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Xl);
  }
  phrase(t, ...e) {
    for (let i of this.facet(B.phrases))
      if (Object.prototype.hasOwnProperty.call(i, t)) {
        t = i[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > e.length ? i : e[r - 1];
    })), t;
  }
  languageDataAt(t, e, i = -1) {
    let n = [];
    for (let r of this.facet(Wl))
      for (let o of r(this, e, i))
        Object.prototype.hasOwnProperty.call(o, t) && n.push(o[t]);
    return n;
  }
  charCategorizer(t) {
    return Tf(this.languageDataAt("wordChars", t).join(""));
  }
  wordAt(t) {
    let { text: e, from: i, length: n } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - i, l = t - i;
    for (; o > 0; ) {
      let a = lt(e, o, !1);
      if (r(e.slice(a, o)) != rt.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = lt(e, l);
      if (r(e.slice(l, a)) != rt.Word)
        break;
      l = a;
    }
    return o == l ? null : S.range(o + i, l + i);
  }
}
B.allowMultipleSelections = vs;
B.tabSize = /* @__PURE__ */ P.define({
  combine: (s) => s.length ? s[0] : 4
});
B.lineSeparator = Ll;
B.readOnly = Xl;
B.phrases = /* @__PURE__ */ P.define({
  compare(s, t) {
    let e = Object.keys(s), i = Object.keys(t);
    return e.length == i.length && e.every((n) => s[n] == t[n]);
  }
});
B.languageData = Wl;
B.changeFilter = Vl;
B.transactionFilter = Nl;
B.transactionExtender = Il;
An.reconfigure = /* @__PURE__ */ W.define();
function wi(s, t, e = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(e, r))
          i[r] = e[r](l, o);
        else
          throw new Error("Config merge conflict for field " + r);
    }
  for (let n in t)
    i[n] === void 0 && (i[n] = t[n]);
  return i;
}
class ve {
  eq(t) {
    return this == t;
  }
  range(t, e = t) {
    return ci.create(t, e, this);
  }
}
ve.prototype.startSide = ve.prototype.endSide = 0;
ve.prototype.point = !1;
ve.prototype.mapMode = nt.TrackDel;
class ci {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.value = i;
  }
  static create(t, e, i) {
    return new ci(t, e, i);
  }
}
function Cs(s, t) {
  return s.from - t.from || s.value.startSide - t.value.startSide;
}
class fr {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(t, e, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, f = r[a] - t || (i ? this.value[a].endSide : this.value[a].startSide) - e;
      if (a == o)
        return f >= 0 ? o : l;
      f >= 0 ? l = a : o = a + 1;
    }
  }
  between(t, e, i, n) {
    for (let r = this.findIndex(e, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + t, this.to[r] + t, this.value[r]) === !1)
        return !1;
  }
  map(t, e) {
    let i = [], n = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let f = this.value[a], h = this.from[a] + t, c = this.to[a] + t, u, d;
      if (h == c) {
        let p = e.mapPos(h, f.startSide, f.mapMode);
        if (p == null || (u = d = p, f.startSide != f.endSide && (d = e.mapPos(h, f.endSide), d < u)))
          continue;
      } else if (u = e.mapPos(h, f.startSide), d = e.mapPos(c, f.endSide), u > d || u == d && f.startSide > 0 && f.endSide <= 0)
        continue;
      (d - u || f.endSide - f.startSide) < 0 || (o < 0 && (o = u), f.point && (l = Math.max(l, d - u)), i.push(f), n.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new fr(n, r, i, l) : null, pos: o };
  }
}
class z {
  constructor(t, e, i, n) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = n;
  }
  static create(t, e, i, n) {
    return new z(t, e, i, n);
  }
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk)
      t += e.value.length;
    return t;
  }
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  update(t) {
    let { add: e = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = t, o = t.filter;
    if (e.length == 0 && !o)
      return this;
    if (i && (e = e.slice().sort(Cs)), this.isEmpty)
      return e.length ? z.of(e) : this;
    let l = new Ul(this, null, -1).goto(0), a = 0, f = [], h = new ui();
    for (; l.value || a < e.length; )
      if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
        let c = e[a++];
        h.addInner(c.from, c.to, c.value) || f.push(c);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || f.push(ci.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !f.length ? z.empty : this.nextLayer.update({ add: f, filter: o, filterFrom: n, filterTo: r }));
  }
  map(t) {
    if (t.empty || this.isEmpty)
      return this;
    let e = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], f = t.touchesRange(l, l + a.length);
      if (f === !1)
        n = Math.max(n, a.maxPoint), e.push(a), i.push(t.mapPos(l));
      else if (f === !0) {
        let { mapped: h, pos: c } = a.map(l, t);
        h && (n = Math.max(n, h.maxPoint), e.push(h), i.push(c));
      }
    }
    let r = this.nextLayer.map(t);
    return e.length == 0 ? r : new z(i, e, r || z.empty, n);
  }
  between(t, e, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (e >= r && t <= r + o.length && o.between(r, t - r, e - r, i) === !1)
          return;
      }
      this.nextLayer.between(t, e, i);
    }
  }
  iter(t = 0) {
    return di.from([this]).goto(t);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(t, e = 0) {
    return di.from(t).goto(e);
  }
  static compare(t, e, i, n, r = -1) {
    let o = t.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= r), l = e.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= r), a = jr(o, l, i), f = new He(o, a, r), h = new He(l, a, r);
    i.iterGaps((c, u, d) => Gr(f, c, h, u, d, n)), i.empty && i.length == 0 && Gr(f, 0, h, 0, 0, n);
  }
  static eq(t, e, i = 0, n) {
    n == null && (n = 1e9 - 1);
    let r = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0), o = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = jr(r, o), a = new He(r, l, 0).goto(i), f = new He(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != f.to || !Ps(a.active, f.active) || a.point && (!f.point || !a.point.eq(f.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), f.next();
    }
  }
  static spans(t, e, i, n, r = -1) {
    let o = new He(t, null, r).goto(e), l = e, a = o.openStart;
    for (; ; ) {
      let f = Math.min(o.to, i);
      if (o.point) {
        let h = o.activeForPoint(o.to), c = o.pointFrom < e ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, a);
        n.point(l, f, o.point, h, c, o.pointRank), a = Math.min(o.openEnd(f), h.length);
      } else
        f > l && (n.span(l, f, o.active, a), a = o.openEnd(f));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(t, e = !1) {
    let i = new ui();
    for (let n of t instanceof ci ? [t] : e ? Qf(t) : t)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  static join(t) {
    if (!t.length)
      return z.empty;
    let e = t[t.length - 1];
    for (let i = t.length - 2; i >= 0; i--)
      for (let n = t[i]; n != z.empty; n = n.nextLayer)
        e = new z(n.chunkPos, n.chunk, e, Math.max(n.maxPoint, e.maxPoint));
    return e;
  }
}
z.empty = /* @__PURE__ */ new z([], [], null, -1);
function Qf(s) {
  if (s.length > 1)
    for (let t = s[0], e = 1; e < s.length; e++) {
      let i = s[e];
      if (Cs(t, i) > 0)
        return s.slice().sort(Cs);
      t = i;
    }
  return s;
}
z.empty.nextLayer = z.empty;
class ui {
  finishChunk(t) {
    this.chunks.push(new fr(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t, e, i) {
    this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new ui())).add(t, e, i);
  }
  addInner(t, e, i) {
    let n = t - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0);
  }
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let i = e.value.length - 1;
    return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, !0;
  }
  finish() {
    return this.finishInner(z.empty);
  }
  finishInner(t) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return t;
    let e = z.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function jr(s, t, e) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of t)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (e ? e.mapPos(l) : l) == r.chunkPos[o] && !(e != null && e.touchesRange(l, l + r.chunk[o].length)) && n.add(r.chunk[o]);
    }
  return n;
}
class Ul {
  constructor(t, e, i, n = 0) {
    this.layer = t, this.skip = e, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this;
  }
  gotoInner(t, e, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < t || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], i = t + e.from[this.rangeIndex];
        if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class di {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, i = -1) {
    let n = [];
    for (let r = 0; r < t.length; r++)
      for (let o = t[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new Ul(o, e, i, r));
    return n.length == 1 ? n[0] : new di(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let i of this.heap)
      i.goto(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Fn(this.heap, i);
    return this.next(), this;
  }
  forward(t, e) {
    for (let i of this.heap)
      i.forward(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Fn(this.heap, i);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Fn(this.heap, 0);
    }
  }
}
function Fn(s, t) {
  for (let e = s[t]; ; ) {
    let i = (t << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), e.compare(n) < 0)
      break;
    s[i] = e, s[t] = n, t = i;
  }
}
class He {
  constructor(t, e, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = di.from(t, e, i);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    Di(this.active, t), Di(this.activeTo, t), Di(this.activeRank, t), this.minActive = Hr(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; e < this.activeRank.length && (r - this.activeRank[e] || n - this.activeTo[e]) > 0; )
      e++;
    Ei(this.active, e, i), Ei(this.activeTo, e, n), Ei(this.activeRank, e, r), t && Ei(t, e, this.cursor.from), this.minActive = Hr(this.active, this.activeTo);
  }
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > t) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && Di(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < t; n--)
        this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length)
      return this.active;
    let e = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--)
      e++;
    return e;
  }
}
function Gr(s, t, e, i, n, r) {
  s.goto(t), e.goto(i);
  let o = i + n, l = i, a = i - t;
  for (; ; ) {
    let f = s.to + a - e.to, h = f || s.endSide - e.endSide, c = h < 0 ? s.to + a : e.to, u = Math.min(c, o);
    if (s.point || e.point ? s.point && e.point && (s.point == e.point || s.point.eq(e.point)) && Ps(s.activeForPoint(s.to), e.activeForPoint(e.to)) || r.comparePoint(l, u, s.point, e.point) : u > l && !Ps(s.active, e.active) && r.compareRange(l, u, s.active, e.active), c > o)
      break;
    (f || s.openEnd != e.openEnd) && r.boundChange && r.boundChange(c), l = c, h <= 0 && s.next(), h >= 0 && e.next();
  }
}
function Ps(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++)
    if (s[e] != t[e] && !s[e].eq(t[e]))
      return !1;
  return !0;
}
function Di(s, t) {
  for (let e = t, i = s.length - 1; e < i; e++)
    s[e] = s[e + 1];
  s.pop();
}
function Ei(s, t, e) {
  for (let i = s.length - 1; i >= t; i--)
    s[i + 1] = s[i];
  s[t] = e;
}
function Hr(s, t) {
  let e = -1, i = 1e9;
  for (let n = 0; n < t.length; n++)
    (t[n] - i || s[n].endSide - s[e].endSide) < 0 && (e = n, i = t[n]);
  return e;
}
function Rn(s, t, e = s.length) {
  let i = 0;
  for (let n = 0; n < e; )
    s.charCodeAt(n) == 9 ? (i += t - i % t, n++) : (i++, n = lt(s, n));
  return i;
}
function Cf(s, t, e, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= t)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? e - r % e : 1, n = lt(s, n);
  }
  return i === !0 ? -1 : s.length;
}
const As = "\u037C", Zr = typeof Symbol > "u" ? "__" + As : Symbol.for(As), Rs = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class fe {
  constructor(t, e) {
    this.rules = [];
    let { finish: i } = e || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, f) {
      let h = [], c = /^@(\w+)\b/.exec(o[0]), u = c && c[1] == "keyframes";
      if (c && l == null)
        return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!c)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, h, u);
        } else
          p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && a.push((i && !c && !f ? o.map(i) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in t)
      r(n(o), t[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let t = Yr[Zr] || 1;
    return Yr[Zr] = t + 1, As + t.toString(36);
  }
  static mount(t, e, i) {
    let n = t[Rs], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new Pf(t, r), n.mount(Array.isArray(e) ? e : [e], t);
  }
}
let Kr = /* @__PURE__ */ new Map();
class Pf {
  constructor(t, e) {
    let i = t.ownerDocument || t, n = i.defaultView;
    if (!t.head && t.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = Kr.get(i);
      if (r)
        return t[Rs] = r;
      this.sheet = new n.CSSStyleSheet(), Kr.set(i, this);
    } else
      this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
    this.modules = [], t[Rs] = this;
  }
  mount(t, e) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < t.length; o++) {
      let l = t[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i)
          for (let f = 0; f < l.rules.length; f++)
            i.insertRule(l.rules[f], n++);
      } else {
        for (; r < a; )
          n += this.modules[r++].rules.length;
        n += l.rules.length, r++;
      }
    }
    if (i)
      e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = e.head || e;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(t) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
  }
}
var ce = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, pi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Af = typeof navigator < "u" && /Mac/.test(navigator.platform), Rf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var et = 0; et < 10; et++)
  ce[48 + et] = ce[96 + et] = String(et);
for (var et = 1; et <= 24; et++)
  ce[et + 111] = "F" + et;
for (var et = 65; et <= 90; et++)
  ce[et] = String.fromCharCode(et + 32), pi[et] = String.fromCharCode(et);
for (var _n in ce)
  pi.hasOwnProperty(_n) || (pi[_n] = ce[_n]);
function Mf(s) {
  var t = Af && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || Rf && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", e = !t && s.key || (s.shiftKey ? pi : ce)[s.keyCode] || s.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function gi(s) {
  let t;
  return s.nodeType == 11 ? t = s.getSelection ? s : s.ownerDocument : t = s, t.getSelection();
}
function Ms(s, t) {
  return t ? s == t || s.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function Ji(s, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return Ms(s, t.anchorNode);
  } catch {
    return !1;
  }
}
function mi(s) {
  return s.nodeType == 3 ? Qe(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function oi(s, t, e, i) {
  return e ? Jr(s, t, e, i, -1) || Jr(s, t, e, i, 1) : !1;
}
function Te(s) {
  for (var t = 0; ; t++)
    if (s = s.previousSibling, !s)
      return t;
}
function un(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function Jr(s, t, e, i, n) {
  for (; ; ) {
    if (s == e && t == i)
      return !0;
    if (t == (n < 0 ? 0 : _t(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      t = Te(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[t + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      t = n < 0 ? _t(s) : 0;
    } else
      return !1;
  }
}
function _t(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function Mn(s, t) {
  let e = t ? s.left : s.right;
  return { left: e, right: e, top: s.top, bottom: s.bottom };
}
function Df(s) {
  let t = s.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function jl(s, t) {
  let e = t.width / s.offsetWidth, i = t.height / s.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - s.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - s.offsetHeight) < 1) && (i = 1), { scaleX: e, scaleY: i };
}
function Ef(s, t, e, i, n, r, o, l) {
  let a = s.ownerDocument, f = a.defaultView || window;
  for (let h = s, c = !1; h && !c; )
    if (h.nodeType == 1) {
      let u, d = h == a.body, p = 1, g = 1;
      if (d)
        u = Df(f);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (c = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let b = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = jl(h, b)), u = {
          left: b.left,
          right: b.left + h.clientWidth * p,
          top: b.top,
          bottom: b.top + h.clientHeight * g
        };
      }
      let m = 0, O = 0;
      if (n == "nearest")
        t.top < u.top ? (O = -(u.top - t.top + o), e > 0 && t.bottom > u.bottom + O && (O = t.bottom - u.bottom + O + o)) : t.bottom > u.bottom && (O = t.bottom - u.bottom + o, e < 0 && t.top - O < u.top && (O = -(u.top + O - t.top + o)));
      else {
        let b = t.bottom - t.top, x = u.bottom - u.top;
        O = (n == "center" && b <= x ? t.top + b / 2 - x / 2 : n == "start" || n == "center" && e < 0 ? t.top - o : t.bottom - x + o) - u.top;
      }
      if (i == "nearest" ? t.left < u.left ? (m = -(u.left - t.left + r), e > 0 && t.right > u.right + m && (m = t.right - u.right + m + r)) : t.right > u.right && (m = t.right - u.right + r, e < 0 && t.left < u.left + m && (m = -(u.left + m - t.left + r))) : m = (i == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, m || O)
        if (d)
          f.scrollBy(m, O);
        else {
          let b = 0, x = 0;
          if (O) {
            let k = h.scrollTop;
            h.scrollTop += O / g, x = (h.scrollTop - k) * g;
          }
          if (m) {
            let k = h.scrollLeft;
            h.scrollLeft += m / p, b = (h.scrollLeft - k) * p;
          }
          t = {
            left: t.left - b,
            top: t.top - x,
            right: t.right - b,
            bottom: t.bottom - x
          }, b && Math.abs(b - m) < 1 && (i = "nearest"), x && Math.abs(x - O) < 1 && (n = "nearest");
        }
      if (d)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function qf(s) {
  let t = s.ownerDocument, e, i;
  for (let n = s.parentNode; n && !(n == t.body || e && i); )
    if (n.nodeType == 1)
      !i && n.scrollHeight > n.clientHeight && (i = n), !e && n.scrollWidth > n.clientWidth && (e = n), n = n.assignedSlot || n.parentNode;
    else if (n.nodeType == 11)
      n = n.host;
    else
      break;
  return { x: e, y: i };
}
class $f {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: i } = t;
    this.set(e, Math.min(t.anchorOffset, e ? _t(e) : 0), i, Math.min(t.focusOffset, i ? _t(i) : 0));
  }
  set(t, e, i, n) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = n;
  }
}
let Re = null;
function Gl(s) {
  if (s.setActive)
    return s.setActive();
  if (Re)
    return s.focus(Re);
  let t = [];
  for (let e = s; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
    ;
  if (s.focus(Re == null ? {
    get preventScroll() {
      return Re = { preventScroll: !0 }, !0;
    }
  } : void 0), !Re) {
    Re = !1;
    for (let e = 0; e < t.length; ) {
      let i = t[e++], n = t[e++], r = t[e++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let to;
function Qe(s, t, e = t) {
  let i = to || (to = document.createRange());
  return i.setEnd(s, e), i.setStart(s, t), i;
}
function $e(s, t, e, i) {
  let n = { key: t, code: t, keyCode: e, which: e, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function Bf(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function Hl(s) {
  for (; s.attributes.length; )
    s.removeAttributeNode(s.attributes[0]);
}
function zf(s, t) {
  let e = t.focusNode, i = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != i)
    return !1;
  for (i = Math.min(i, _t(e)); ; )
    if (i) {
      if (e.nodeType != 1)
        return !1;
      let n = e.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (e = n, i = _t(e));
    } else {
      if (e == s)
        return !0;
      i = Te(e), e = e.parentNode;
    }
}
function Zl(s) {
  return s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function Yl(s, t) {
  for (let e = s, i = t; ; ) {
    if (e.nodeType == 3 && i > 0)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i - 1], i = _t(e);
    } else if (e.parentNode && !un(e))
      i = Te(e), e = e.parentNode;
    else
      return null;
  }
}
function Kl(s, t) {
  for (let e = s, i = t; ; ) {
    if (e.nodeType == 3 && i < e.nodeValue.length)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i], i = 0;
    } else if (e.parentNode && !un(e))
      i = Te(e) + 1, e = e.parentNode;
    else
      return null;
  }
}
class st {
  constructor(t, e, i = !0) {
    this.node = t, this.offset = e, this.precise = i;
  }
  static before(t, e) {
    return new st(t.parentNode, Te(t), e);
  }
  static after(t, e) {
    return new st(t.parentNode, Te(t) + 1, e);
  }
}
const cr = [];
class V {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t) {
    let e = this.posAtStart;
    for (let i of this.children) {
      if (i == t)
        return e;
      e += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  sync(t, e) {
    if (this.flags & 2) {
      let i = this.dom, n = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = n ? n.nextSibling : i.firstChild)) {
            let l = V.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(t, e), o.flags &= -8;
        }
        if (r = n ? n.nextSibling : i.firstChild, e && !e.written && e.node == i && r != o.dom && (e.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = eo(r);
        else
          i.insertBefore(o.dom, r);
        n = o.dom;
      }
      for (r = n ? n.nextSibling : i.firstChild, r && e && e.node == i && (e.written = !0); r; )
        r = eo(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(t, e), i.flags &= -8);
  }
  reuseDOM(t) {
  }
  localPosFromDOM(t, e) {
    let i;
    if (t == this.dom)
      i = this.dom.childNodes[e];
    else {
      let n = _t(t) == 0 ? 0 : e == 0 ? -1 : 1;
      for (; ; ) {
        let r = t.parentNode;
        if (r == this.dom)
          break;
        n == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? n = -1 : n = 1), t = r;
      }
      n < 0 ? i = t : i = t.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !V.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let n = 0, r = 0; ; n++) {
      let o = this.children[n];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(t, e, i = 0) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, f = i, h = i; a < this.children.length; a++) {
      let c = this.children[a], u = f + c.length;
      if (f < t && u > e)
        return c.domBoundsAround(t, e, f);
      if (u >= t && n == -1 && (n = a, r = f), f > e && c.dom.parentNode == this.dom) {
        o = a, l = h;
        break;
      }
      h = u, f = u + c.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(t = !1) {
    this.flags |= 2, this.markParentsDirty(t);
  }
  markParentsDirty(t) {
    for (let e = this.parent; e; e = e.parent) {
      if (t && (e.flags |= 2), e.flags & 1)
        return;
      e.flags |= 1, t = !1;
    }
  }
  setParent(t) {
    this.parent != t && (this.parent = t, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(t) {
    this.dom != t && (this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this);
  }
  get rootView() {
    for (let t = this; ; ) {
      let e = t.parent;
      if (!e)
        return t;
      t = e;
    }
  }
  replaceChildren(t, e, i = cr) {
    this.markDirty();
    for (let n = t; n < e; n++) {
      let r = this.children[n];
      r.parent == this && i.indexOf(r) < 0 && r.destroy();
    }
    i.length < 250 ? this.children.splice(t, e - t, ...i) : this.children = [].concat(this.children.slice(0, t), i, this.children.slice(e));
    for (let n = 0; n < i.length; n++)
      i[n].setParent(this);
  }
  ignoreMutation(t) {
    return !1;
  }
  ignoreEvent(t) {
    return !1;
  }
  childCursor(t = this.length) {
    return new Jl(this.children, t, this.children.length);
  }
  childPos(t, e = 1) {
    return this.childCursor().findPos(t, e);
  }
  toString() {
    let t = this.constructor.name.replace("View", "");
    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t) {
    return t.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(t, e, i, n, r, o) {
    return !1;
  }
  become(t) {
    return !1;
  }
  canReuseDOM(t) {
    return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t of this.children)
      t.parent == this && t.destroy();
    this.parent = null;
  }
}
V.prototype.breakAfter = 0;
function eo(s) {
  let t = s.nextSibling;
  return s.parentNode.removeChild(s), t;
}
class Jl {
  constructor(t, e, i) {
    this.children = t, this.pos = e, this.i = i, this.off = 0;
  }
  findPos(t, e = 1) {
    for (; ; ) {
      if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = t - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function ta(s, t, e, i, n, r, o, l, a) {
  let { children: f } = s, h = f.length ? f[t] : null, c = r.length ? r[r.length - 1] : null, u = c ? c.breakAfter : o;
  if (!(t == i && h && !o && !u && r.length < 2 && h.merge(e, n, r.length ? c : null, e == 0, l, a))) {
    if (i < f.length) {
      let d = f[i];
      d && (n < d.length || d.breakAfter && (c == null ? void 0 : c.breakAfter)) ? (t == i && (d = d.split(n), n = 0), !u && c && d.merge(0, n, c, !0, 0, a) ? r[r.length - 1] = d : ((n || d.children.length && !d.children[0].length) && d.merge(0, n, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (c ? c.breakAfter = 1 : o = 1), i++;
    }
    for (h && (h.breakAfter = o, e > 0 && (!o && r.length && h.merge(e, h.length, r[0], !1, l, 0) ? h.breakAfter = r.shift().breakAfter : (e < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(e, h.length, null, !1, l, 0), t++)); t < i && r.length; )
      if (f[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (f[t].become(r[0]))
        t++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && t && i < f.length && !f[t - 1].breakAfter && f[i].merge(0, 0, f[t - 1], !1, l, a) && t--, (t < i || r.length) && s.replaceChildren(t, i, r);
  }
}
function ea(s, t, e, i, n, r) {
  let o = s.childCursor(), { i: l, off: a } = o.findPos(e, 1), { i: f, off: h } = o.findPos(t, -1), c = t - e;
  for (let u of i)
    c += u.length;
  s.length += c, ta(s, f, h, l, a, i, 0, n, r);
}
let ft = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Ds = typeof document < "u" ? document : { documentElement: { style: {} } };
const Es = /* @__PURE__ */ /Edge\/(\d+)/.exec(ft.userAgent), ia = /* @__PURE__ */ /MSIE \d/.test(ft.userAgent), qs = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ft.userAgent), Dn = !!(ia || qs || Es), io = !Dn && /* @__PURE__ */ /gecko\/(\d+)/i.test(ft.userAgent), Un = !Dn && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ft.userAgent), no = "webkitFontSmoothing" in Ds.documentElement.style, na = !Dn && /* @__PURE__ */ /Apple Computer/.test(ft.vendor), so = na && (/* @__PURE__ */ /Mobile\/\w+/.test(ft.userAgent) || ft.maxTouchPoints > 2);
var T = {
  mac: so || /* @__PURE__ */ /Mac/.test(ft.platform),
  windows: /* @__PURE__ */ /Win/.test(ft.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ft.platform),
  ie: Dn,
  ie_version: ia ? Ds.documentMode || 6 : qs ? +qs[1] : Es ? +Es[1] : 0,
  gecko: io,
  gecko_version: io ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ft.userAgent) || [0, 0])[1] : 0,
  chrome: !!Un,
  chrome_version: Un ? +Un[1] : 0,
  ios: so,
  android: /* @__PURE__ */ /Android\b/.test(ft.userAgent),
  webkit: no,
  safari: na,
  webkit_version: no ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(ft.userAgent) || [0, 0])[1] : 0,
  tabSize: Ds.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Wf = 256;
class Pt extends V {
  constructor(t) {
    super(), this.text = t;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t) {
    this.setDOM(t || document.createTextNode(this.text));
  }
  sync(t, e) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(t) {
    t.nodeType == 3 && this.createDOM(t);
  }
  merge(t, e, i) {
    return this.flags & 8 || i && (!(i instanceof Pt) || this.length - (e - t) + i.length > Wf || i.flags & 8) ? !1 : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0);
  }
  split(t) {
    let e = new Pt(this.text.slice(t));
    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e;
  }
  localPosFromDOM(t, e) {
    return t == this.dom ? e : e ? this.text.length : 0;
  }
  domAtPos(t) {
    return new st(this.dom, t);
  }
  domBoundsAround(t, e, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t, e) {
    return Lf(this.dom, t, e);
  }
}
class ie extends V {
  constructor(t, e = [], i = 0) {
    super(), this.mark = t, this.children = e, this.length = i;
    for (let n of e)
      n.setParent(this);
  }
  setAttrs(t) {
    if (Hl(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
      for (let e in this.mark.attrs)
        t.setAttribute(e, this.mark.attrs[e]);
    return t;
  }
  canReuseDOM(t) {
    return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
  }
  reuseDOM(t) {
    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e);
  }
  merge(t, e, i, n, r, o) {
    return i && (!(i instanceof ie && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? !1 : (ea(this, t, e, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(t) {
    let e = [], i = 0, n = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > t && e.push(i < t ? l.split(t - i) : l), n < 0 && i >= t && (n = r), i = a, r++;
    }
    let o = this.length - t;
    return this.length = t, n > -1 && (this.children.length = n, this.markDirty()), new ie(this.mark, e, o);
  }
  domAtPos(t) {
    return sa(this, t);
  }
  coordsAt(t, e) {
    return oa(this, t, e);
  }
}
function Lf(s, t, e) {
  let i = s.nodeValue.length;
  t > i && (t = i);
  let n = t, r = t, o = 0;
  t == 0 && e < 0 || t == i && e >= 0 ? T.chrome || T.gecko || (t ? (n--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? n-- : r < i && r++;
  let l = Qe(s, n, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
  return T.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (f) => f.width) || a), o ? Mn(a, o < 0) : a || null;
}
class xe extends V {
  static create(t, e, i) {
    return new xe(t, e, i);
  }
  constructor(t, e, i) {
    super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null;
  }
  split(t) {
    let e = xe.create(this.widget, this.length - t, this.side);
    return this.length -= t, e;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t, e, i, n, r, o) {
    return i && (!(i instanceof xe) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
  }
  become(t) {
    return t instanceof xe && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return q.empty;
    let t = this;
    for (; t.parent; )
      t = t.parent;
    let { view: e } = t, i = e && e.state.doc, n = this.posAtStart;
    return i ? i.slice(n, n + this.length) : q.empty;
  }
  domAtPos(t) {
    return (this.length ? t == 0 : this.side > 0) ? st.before(this.dom) : st.after(this.dom, t == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t, e) {
    let i = this.widget.coordsAt(this.dom, t, e);
    if (i)
      return i;
    let n = this.dom.getClientRects(), r = null;
    if (!n.length)
      return null;
    let o = this.side ? this.side < 0 : t > 0;
    for (let l = o ? n.length - 1 : 0; r = n[l], !(t > 0 ? l == 0 : l == n.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Mn(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Le extends V {
  constructor(t) {
    super(), this.side = t;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(t) {
    return t instanceof Le && t.side == this.side;
  }
  split() {
    return new Le(this.side);
  }
  sync() {
    if (!this.dom) {
      let t = document.createElement("img");
      t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t) {
    return this.side > 0 ? st.before(this.dom) : st.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return q.empty;
  }
  get isHidden() {
    return !0;
  }
}
Pt.prototype.children = xe.prototype.children = Le.prototype.children = cr;
function sa(s, t) {
  let e = s.dom, { children: i } = s, n = 0;
  for (let r = 0; n < i.length; n++) {
    let o = i[n], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (t > r && t < l && o.dom.parentNode == e)
        return o.domAtPos(t - r);
      if (t <= r)
        break;
      r = l;
    }
  }
  for (let r = n; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == e)
      return o.domAtPos(o.length);
  }
  for (let r = n; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == e)
      return o.domAtPos(0);
  }
  return new st(e, 0);
}
function ra(s, t, e) {
  let i, { children: n } = s;
  e > 0 && t instanceof ie && n.length && (i = n[n.length - 1]) instanceof ie && i.mark.eq(t.mark) ? ra(i, t.children[0], e - 1) : (n.push(t), t.setParent(s)), s.length += t.length;
}
function oa(s, t, e) {
  let i = null, n = -1, r = null, o = -1;
  function l(f, h) {
    for (let c = 0, u = 0; c < f.children.length && u <= h; c++) {
      let d = f.children[c], p = u + d.length;
      p >= h && (d.children.length ? l(d, h - u) : (!r || r.isHidden && e > 0) && (p > h || u == p && d.getSide() > 0) ? (r = d, o = h - u) : (u < h || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, n = h - u)), u = p;
    }
  }
  l(s, t);
  let a = (e < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? n : o), e) : Vf(s);
}
function Vf(s) {
  let t = s.dom.lastChild;
  if (!t)
    return s.dom.getBoundingClientRect();
  let e = mi(t);
  return e[e.length - 1] || null;
}
function $s(s, t) {
  for (let e in s)
    e == "class" && t.class ? t.class += " " + s.class : e == "style" && t.style ? t.style += ";" + s.style : t[e] = s[e];
  return t;
}
const ro = /* @__PURE__ */ Object.create(null);
function dn(s, t, e) {
  if (s == t)
    return !0;
  s || (s = ro), t || (t = ro);
  let i = Object.keys(s), n = Object.keys(t);
  if (i.length - (e && i.indexOf(e) > -1 ? 1 : 0) != n.length - (e && n.indexOf(e) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != e && (n.indexOf(r) == -1 || s[r] !== t[r]))
      return !1;
  return !0;
}
function Bs(s, t, e) {
  let i = !1;
  if (t)
    for (let n in t)
      e && n in e || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (e)
    for (let n in e)
      t && t[n] == e[n] || (i = !0, n == "style" ? s.style.cssText = e[n] : s.setAttribute(n, e[n]));
  return i;
}
function Nf(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < s.attributes.length; e++) {
    let i = s.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class En {
  eq(t) {
    return !1;
  }
  updateDOM(t, e) {
    return !1;
  }
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t) {
    return !0;
  }
  coordsAt(t, e, i) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(t) {
  }
}
var bt = /* @__PURE__ */ function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
}(bt || (bt = {}));
class M extends ve {
  constructor(t, e, i, n) {
    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = n;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(t) {
    return new vi(t);
  }
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new ue(t, e, e, i, t.widget || null, !1);
  }
  static replace(t) {
    let e = !!t.block, i, n;
    if (t.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: o } = la(t, e);
      i = (r ? e ? -3e8 : -1 : 5e8) - 1, n = (o ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new ue(t, i, n, e, t.widget || null, !0);
  }
  static line(t) {
    return new Ti(t);
  }
  static set(t, e = !1) {
    return z.of(t, e);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
M.none = z.empty;
class vi extends M {
  constructor(t) {
    let { start: e, end: i } = la(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
  }
  eq(t) {
    var e, i;
    return this == t || t instanceof vi && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((i = t.attrs) === null || i === void 0 ? void 0 : i.class)) && dn(this.attrs, t.attrs, "class");
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
vi.prototype.point = !1;
class Ti extends M {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof Ti && this.spec.class == t.spec.class && dn(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
Ti.prototype.mapMode = nt.TrackBefore;
Ti.prototype.point = !0;
class ue extends M {
  constructor(t, e, i, n, r, o) {
    super(e, i, r, t), this.block = n, this.isReplace = o, this.mapMode = n ? e <= 0 ? nt.TrackBefore : nt.TrackAfter : nt.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? bt.WidgetRange : this.startSide <= 0 ? bt.WidgetBefore : bt.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof ue && If(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
ue.prototype.point = !0;
function la(s, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: i } = s;
  return e == null && (e = s.inclusive), i == null && (i = s.inclusive), { start: e != null ? e : t, end: i != null ? i : t };
}
function If(s, t) {
  return s == t || !!(s && t && s.compare(t));
}
function tn(s, t, e, i = 0) {
  let n = e.length - 1;
  n >= 0 && e[n] + i >= s ? e[n] = Math.max(e[n], t) : e.push(s, t);
}
class G extends V {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(t, e, i, n, r, o) {
    if (i) {
      if (!(i instanceof G))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return n && this.setDeco(i ? i.attrs : null), ea(this, t, e, i ? i.children.slice() : [], r, o), !0;
  }
  split(t) {
    let e = new G();
    if (e.breakAfter = this.breakAfter, this.length == 0)
      return e;
    let { i, off: n } = this.childPos(t);
    n && (e.append(this.children[i].split(n), 0), this.children[i].merge(n, this.children[i].length, null, !1, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      e.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = t, e;
  }
  transferDOM(t) {
    !this.dom || (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t) {
    dn(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
  }
  append(t, e) {
    ra(this, t, e);
  }
  addLineDeco(t) {
    let e = t.spec.attributes, i = t.spec.class;
    e && (this.attrs = $s(e, this.attrs || {})), i && (this.attrs = $s({ class: i }, this.attrs || {}));
  }
  domAtPos(t) {
    return sa(this, t);
  }
  reuseDOM(t) {
    t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    var i;
    this.dom ? this.flags & 4 && (Hl(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Bs(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
    let n = this.dom.lastChild;
    for (; n && V.get(n) instanceof ie; )
      n = n.lastChild;
    if (!n || !this.length || n.nodeName != "BR" && ((i = V.get(n)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!T.ios || !this.children.some((r) => r instanceof Pt))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let t = 0, e;
    for (let i of this.children) {
      if (!(i instanceof Pt) || /[^ -~]/.test(i.text))
        return null;
      let n = mi(i.dom);
      if (n.length != 1)
        return null;
      t += n[0].width, e = n[0].height;
    }
    return t ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: t / this.length,
      textHeight: e
    } : null;
  }
  coordsAt(t, e) {
    let i = oa(this, t, e);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: n } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - n.lineHeight) < 2 && n.textHeight < r) {
        let o = (r - n.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(t) {
    return t instanceof G && this.children.length == 0 && t.children.length == 0 && dn(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(t, e) {
    for (let i = 0, n = 0; i < t.children.length; i++) {
      let r = t.children[i], o = n + r.length;
      if (o >= e) {
        if (r instanceof G)
          return r;
        if (o > e)
          break;
      }
      n = o + r.breakAfter;
    }
    return null;
  }
}
class ee extends V {
  constructor(t, e, i) {
    super(), this.widget = t, this.length = e, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t, e, i, n, r, o) {
    return i && (!(i instanceof ee) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
  }
  domAtPos(t) {
    return t == 0 ? st.before(this.dom) : st.after(this.dom, t == this.length);
  }
  split(t) {
    let e = this.length - t;
    this.length = t;
    let i = new ee(this.widget, e, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return cr;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : q.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t) {
    return t instanceof ee && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(t, e) {
    let i = this.widget.coordsAt(this.dom, t, e);
    return i || (this.widget instanceof zs ? null : Mn(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t) {
    let { startSide: e, endSide: i } = this.deco;
    return e == i ? !1 : t < 0 ? e < 0 : i > 0;
  }
}
class zs extends En {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class li {
  constructor(t, e, i, n) {
    this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t = this.content[this.content.length - 1];
    return !(t.breakAfter || t instanceof ee && t.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new G()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(t = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(qi(new Le(-1), t), t.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t) {
    this.flushBuffer(), this.curLine = null, this.content.push(t);
  }
  finish(t) {
    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof ee) && this.getLine();
  }
  buildText(t, e, i) {
    for (; t > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let n = Math.min(this.text.length - this.textOff, t, 512);
      this.flushBuffer(e.slice(e.length - i)), this.getLine().append(qi(new Pt(this.text.slice(this.textOff, this.textOff + n)), e), i), this.atCursorPos = !0, this.textOff += n, t -= n, i = 0;
    }
  }
  span(t, e, i, n) {
    this.buildText(e - t, i, n), this.pos = e, this.openStart < 0 && (this.openStart = n);
  }
  point(t, e, i, n, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof ue) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (e > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = e - t;
    if (i instanceof ue)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new ee(i.widget || Ve.block, l, i));
      else {
        let a = xe.create(i.widget || Ve.inline, l, l ? 0 : i.startSide), f = this.atCursorPos && !a.isEditable && r <= n.length && (t < e || i.startSide > 0), h = !a.isEditable && (t < e || r > n.length || i.startSide <= 0), c = this.getLine();
        this.pendingBuffer == 2 && !f && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(n), f && (c.append(qi(new Le(1), n), r), r = n.length + Math.max(0, r - n.length)), c.append(qi(a, n), r), this.atCursorPos = h, this.pendingBuffer = h ? t < e || r > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
  }
  static build(t, e, i, n, r) {
    let o = new li(t, e, i, r);
    return o.openEnd = z.spans(n, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function qi(s, t) {
  for (let e of t)
    s = new ie(e, [s], s.length);
  return s;
}
class Ve extends En {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Ve.inline = /* @__PURE__ */ new Ve("span");
Ve.block = /* @__PURE__ */ new Ve("div");
var j = /* @__PURE__ */ function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
}(j || (j = {}));
const Ce = j.LTR, ur = j.RTL;
function aa(s) {
  let t = [];
  for (let e = 0; e < s.length; e++)
    t.push(1 << +s[e]);
  return t;
}
const Xf = /* @__PURE__ */ aa("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Ff = /* @__PURE__ */ aa("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ws = /* @__PURE__ */ Object.create(null), Et = [];
for (let s of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ s.charCodeAt(0), e = /* @__PURE__ */ s.charCodeAt(1);
  Ws[t] = e, Ws[e] = -t;
}
function ha(s) {
  return s <= 247 ? Xf[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? Ff[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const _f = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class he {
  get dir() {
    return this.level % 2 ? ur : Ce;
  }
  constructor(t, e, i) {
    this.from = t, this.to = e, this.level = i;
  }
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  forward(t, e) {
    return t == (this.dir == e);
  }
  static find(t, e, i, n) {
    let r = -1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      if (l.from <= e && l.to >= e) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function fa(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++) {
    let i = s[e], n = t[e];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !fa(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const L = [];
function Uf(s, t, e, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : t, l = r < i.length ? i[r].from : e, a = r ? 256 : n;
    for (let f = o, h = a, c = a; f < l; f++) {
      let u = ha(s.charCodeAt(f));
      u == 512 ? u = h : u == 8 && c == 4 && (u = 16), L[f] = u == 4 ? 2 : u, u & 7 && (c = u), h = u;
    }
    for (let f = o, h = a, c = a; f < l; f++) {
      let u = L[f];
      if (u == 128)
        f < l - 1 && h == L[f + 1] && h & 24 ? u = L[f] = h : L[f] = 256;
      else if (u == 64) {
        let d = f + 1;
        for (; d < l && L[d] == 64; )
          d++;
        let p = f && h == 8 || d < e && L[d] == 8 ? c == 1 ? 1 : 8 : 256;
        for (let g = f; g < d; g++)
          L[g] = p;
        f = d - 1;
      } else
        u == 8 && c == 1 && (L[f] = 1);
      h = u, u & 7 && (c = u);
    }
  }
}
function jf(s, t, e, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let f = o ? i[o - 1].to : t, h = o < i.length ? i[o].from : e;
    for (let c = f, u, d, p; c < h; c++)
      if (d = Ws[u = s.charCodeAt(c)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (Et[g + 1] == -d) {
              let m = Et[g + 2], O = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              O && (L[c] = L[Et[g]] = O), l = g;
              break;
            }
        } else {
          if (Et.length == 189)
            break;
          Et[l++] = c, Et[l++] = u, Et[l++] = a;
        }
      else if ((p = L[c]) == 2 || p == 1) {
        let g = p == n;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let O = Et[m + 2];
          if (O & 2)
            break;
          if (g)
            Et[m + 2] |= 2;
          else {
            if (O & 4)
              break;
            Et[m + 2] |= 4;
          }
        }
      }
  }
}
function Gf(s, t, e, i) {
  for (let n = 0, r = i; n <= e.length; n++) {
    let o = n ? e[n - 1].to : s, l = n < e.length ? e[n].from : t;
    for (let a = o; a < l; ) {
      let f = L[a];
      if (f == 256) {
        let h = a + 1;
        for (; ; )
          if (h == l) {
            if (n == e.length)
              break;
            h = e[n++].to, l = n < e.length ? e[n].from : t;
          } else if (L[h] == 256)
            h++;
          else
            break;
        let c = r == 1, u = (h < t ? L[h] : i) == 1, d = c == u ? c ? 1 : 2 : i;
        for (let p = h, g = n, m = g ? e[g - 1].to : s; p > a; )
          p == m && (p = e[--g].from, m = g ? e[g - 1].to : s), L[--p] = d;
        a = h;
      } else
        r = f, a++;
    }
  }
}
function Ls(s, t, e, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = t, f = 0; a < e; ) {
      let h = !0, c = !1;
      if (f == r.length || a < r[f].from) {
        let g = L[a];
        g != l && (h = !1, c = g == 16);
      }
      let u = !h && l == 1 ? [] : null, d = h ? i : i + 1, p = a;
      t:
        for (; ; )
          if (f < r.length && p == r[f].from) {
            if (c)
              break t;
            let g = r[f];
            if (!h)
              for (let m = g.to, O = f + 1; ; ) {
                if (m == e)
                  break t;
                if (O < r.length && r[O].from == m)
                  m = r[O++].to;
                else {
                  if (L[m] == l)
                    break t;
                  break;
                }
              }
            if (f++, u)
              u.push(g);
            else {
              g.from > a && o.push(new he(a, g.from, d));
              let m = g.direction == Ce != !(d % 2);
              Vs(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.to;
            }
            p = g.to;
          } else {
            if (p == e || (h ? L[p] != l : L[p] == l))
              break;
            p++;
          }
      u ? Ls(s, a, p, i + 1, n, u, o) : a < p && o.push(new he(a, p, d)), a = p;
    }
  else
    for (let a = e, f = r.length; a > t; ) {
      let h = !0, c = !1;
      if (!f || a > r[f - 1].to) {
        let g = L[a - 1];
        g != l && (h = !1, c = g == 16);
      }
      let u = !h && l == 1 ? [] : null, d = h ? i : i + 1, p = a;
      t:
        for (; ; )
          if (f && p == r[f - 1].to) {
            if (c)
              break t;
            let g = r[--f];
            if (!h)
              for (let m = g.from, O = f; ; ) {
                if (m == t)
                  break t;
                if (O && r[O - 1].to == m)
                  m = r[--O].from;
                else {
                  if (L[m - 1] == l)
                    break t;
                  break;
                }
              }
            if (u)
              u.push(g);
            else {
              g.to < a && o.push(new he(g.to, a, d));
              let m = g.direction == Ce != !(d % 2);
              Vs(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.from;
            }
            p = g.from;
          } else {
            if (p == t || (h ? L[p - 1] != l : L[p - 1] == l))
              break;
            p--;
          }
      u ? Ls(s, p, a, i + 1, n, u, o) : p < a && o.push(new he(p, a, d)), a = p;
    }
}
function Vs(s, t, e, i, n, r, o) {
  let l = t % 2 ? 2 : 1;
  Uf(s, n, r, i, l), jf(s, n, r, i, l), Gf(n, r, i, l), Ls(s, n, r, t, e, i, o);
}
function Hf(s, t, e) {
  if (!s)
    return [new he(0, 0, t == ur ? 1 : 0)];
  if (t == Ce && !e.length && !_f.test(s))
    return ca(s.length);
  if (e.length)
    for (; s.length > L.length; )
      L[L.length] = 256;
  let i = [], n = t == Ce ? 0 : 1;
  return Vs(s, n, n, e, 0, s.length, i), i;
}
function ca(s) {
  return [new he(0, s, 0)];
}
let ua = "";
function Zf(s, t, e, i, n) {
  var r;
  let o = i.head - s.from, l = he.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = t[l], f = a.side(n, e);
  if (o == f) {
    let u = l += n ? 1 : -1;
    if (u < 0 || u >= t.length)
      return null;
    a = t[l = u], o = a.side(!n, e), f = a.side(n, e);
  }
  let h = lt(s.text, o, a.forward(n, e));
  (h < a.from || h > a.to) && (h = f), ua = s.text.slice(Math.min(o, h), Math.max(o, h));
  let c = l == (n ? t.length - 1 : 0) ? null : t[l + (n ? 1 : -1)];
  return c && h == f && c.level + (n ? 0 : 1) < a.level ? S.cursor(c.side(!n, e) + s.from, c.forward(n, e) ? 1 : -1, c.level) : S.cursor(h + s.from, a.forward(n, e) ? -1 : 1, a.level);
}
function Yf(s, t, e) {
  for (let i = t; i < e; i++) {
    let n = ha(s.charCodeAt(i));
    if (n == 1)
      return Ce;
    if (n == 2 || n == 4)
      return ur;
  }
  return Ce;
}
const da = /* @__PURE__ */ P.define(), pa = /* @__PURE__ */ P.define(), ga = /* @__PURE__ */ P.define(), ma = /* @__PURE__ */ P.define(), Ns = /* @__PURE__ */ P.define(), Oa = /* @__PURE__ */ P.define(), ya = /* @__PURE__ */ P.define(), dr = /* @__PURE__ */ P.define(), pr = /* @__PURE__ */ P.define(), Sa = /* @__PURE__ */ P.define({
  combine: (s) => s.some((t) => t)
}), Kf = /* @__PURE__ */ P.define({
  combine: (s) => s.some((t) => t)
}), ba = /* @__PURE__ */ P.define();
class Be {
  constructor(t, e = "nearest", i = "nearest", n = 5, r = 5, o = !1) {
    this.range = t, this.y = e, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(t) {
    return t.empty ? this : new Be(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Be(S.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const $i = /* @__PURE__ */ W.define({ map: (s, t) => s.map(t) }), xa = /* @__PURE__ */ W.define();
function Tt(s, t, e) {
  let i = s.facet(ma);
  i.length ? i[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t);
}
const te = /* @__PURE__ */ P.define({ combine: (s) => s.length ? s[0] : !0 });
let Jf = 0;
const ti = /* @__PURE__ */ P.define();
class At {
  constructor(t, e, i, n, r) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = n, this.extension = r(this);
  }
  static define(t, e) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: o } = e || {};
    return new At(Jf++, t, i, n, (l) => {
      let a = [ti.of(l)];
      return o && a.push(Oi.of((f) => {
        let h = f.plugin(l);
        return h ? o(h) : M.none;
      })), r && a.push(r(l)), a;
    });
  }
  static fromClass(t, e) {
    return At.define((i) => new t(i), e);
  }
}
class jn {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (i) {
            if (Tt(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(t);
      } catch (e) {
        Tt(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Tt(t.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const ka = /* @__PURE__ */ P.define(), gr = /* @__PURE__ */ P.define(), Oi = /* @__PURE__ */ P.define(), wa = /* @__PURE__ */ P.define(), mr = /* @__PURE__ */ P.define(), va = /* @__PURE__ */ P.define();
function oo(s, t) {
  let e = s.state.facet(va);
  if (!e.length)
    return e;
  let i = e.map((r) => r instanceof Function ? r(s) : r), n = [];
  return z.spans(i, t.from, t.to, {
    point() {
    },
    span(r, o, l, a) {
      let f = r - t.from, h = o - t.from, c = n;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = Yf(t.text, f, h)), a > 0 && c.length && (p = c[c.length - 1]).to == f && p.direction == d)
          p.to = h, c = p.inner;
        else {
          let g = { from: f, to: h, direction: d, inner: [] };
          c.push(g), c = g.inner;
        }
      }
    }
  }), n;
}
const Ta = /* @__PURE__ */ P.define();
function Or(s) {
  let t = 0, e = 0, i = 0, n = 0;
  for (let r of s.state.facet(Ta)) {
    let o = r(s);
    o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: t, right: e, top: i, bottom: n };
}
const ei = /* @__PURE__ */ P.define();
class xt {
  constructor(t, e, i, n) {
    this.fromA = t, this.toA = e, this.fromB = i, this.toB = n;
  }
  join(t) {
    return new xt(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, i = this;
    for (; e > 0; e--) {
      let n = t[e - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, i), t;
  }
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let i = [];
    for (let n = 0, r = 0, o = 0, l = 0; ; n++) {
      let a = n == t.length ? null : t[n], f = o - l, h = a ? a.fromB : 1e9;
      for (; r < e.length && e[r] < h; ) {
        let c = e[r], u = e[r + 1], d = Math.max(l, c), p = Math.min(h, u);
        if (d <= p && new xt(d + f, p + f, d, p).addToSet(i), u > h)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new xt(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class pn {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = Y.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new xt(r, o, l, a))), this.changedRanges = n;
  }
  static create(t, e, i) {
    return new pn(t, e, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class lo extends V {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t) {
    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = M.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new G()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new xt(0, 0, 0, t.state.doc.length)], 0, null);
  }
  update(t) {
    var e;
    let i = t.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: f, toA: h }) => h < this.minWidthFrom || f > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? n = this.domChanged.newSel.head : !oc(t.changes, this.hasComposition) && !t.selectionSet && (n = t.state.selection.main.head));
    let r = n > -1 ? ec(this.view, t.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: f, to: h } = this.hasComposition;
      i = new xt(f, h, t.changes.mapPos(f, -1), t.changes.mapPos(h, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (T.ie || T.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = sc(o, l, t.changes);
    return i = xt.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, t.startState.doc.length, r), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(t, e, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e, i);
    let { observer: n } = this.view;
    n.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = T.chrome || T.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || n.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof ee && o.widget instanceof zs && r.push(o.dom);
    n.updateGaps(r);
  }
  updateChildren(t, e, i) {
    let n = i ? i.range.addToSet(t.slice()) : t, r = this.childCursor(e);
    for (let o = n.length - 1; ; o--) {
      let l = o >= 0 ? n[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: f, fromB: h, toB: c } = l, u, d, p, g;
      if (i && i.range.fromB < c && i.range.toB > h) {
        let k = li.build(this.view.state.doc, h, i.range.fromB, this.decorations, this.dynamicDecorationMap), v = li.build(this.view.state.doc, i.range.toB, c, this.decorations, this.dynamicDecorationMap);
        d = k.breakAtStart, p = k.openStart, g = v.openEnd;
        let Q = this.compositionView(i);
        v.breakAtStart ? Q.breakAfter = 1 : v.content.length && Q.merge(Q.length, Q.length, v.content[0], !1, v.openStart, 0) && (Q.breakAfter = v.content[0].breakAfter, v.content.shift()), k.content.length && Q.merge(0, 0, k.content[k.content.length - 1], !0, 0, k.openEnd) && k.content.pop(), u = k.content.concat(Q).concat(v.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: g } = li.build(this.view.state.doc, h, c, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: O } = r.findPos(f, 1), { i: b, off: x } = r.findPos(a, -1);
      ta(this, b, x, m, O, u, d, p, g);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(xa) && (this.editContextFormatting = i.value);
  }
  compositionView(t) {
    let e = new Pt(t.text.nodeValue);
    e.flags |= 8;
    for (let { deco: n } of t.marks)
      e = new ie(n, [e], e.length);
    let i = new G();
    return i.append(e, 0), i;
  }
  fixCompositionDOM(t) {
    let e = (r, o) => {
      o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0), this.markedForComposition.add(o);
      let l = V.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(t.range.fromB, 1), n = this.children[i.i];
    e(t.line, n);
    for (let r = t.marks.length - 1; r >= -1; r--)
      i = n.childPos(i.off, 1), n = n.children[i.i], e(r >= 0 ? t.marks[r].node : t.text, n);
  }
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, n = i == this.dom, r = !n && !(this.view.state.facet(te) || this.dom.tabIndex > -1) && Ji(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(n || e || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), f = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (T.gecko && l.empty && !this.hasComposition && tc(a)) {
      let c = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(c, a.node.childNodes[a.offset] || null)), a = f = new st(c, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || (!oi(a.node, a.offset, h.anchorNode, h.anchorOffset) || !oi(f.node, f.offset, h.focusNode, h.focusOffset)) && !this.suppressWidgetCursorChange(h, l)) && (this.view.observer.ignore(() => {
      T.android && T.chrome && this.dom.contains(h.focusNode) && rc(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let c = gi(this.view.root);
      if (c)
        if (l.empty) {
          if (T.gecko) {
            let u = ic(a.node, a.offset);
            if (u && u != 3) {
              let d = (u == 1 ? Yl : Kl)(a.node, a.offset);
              d && (a = new st(d.node, d.offset));
            }
          }
          c.collapse(a.node, a.offset), l.bidiLevel != null && c.caretBidiLevel !== void 0 && (c.caretBidiLevel = l.bidiLevel);
        } else if (c.extend) {
          c.collapse(a.node, a.offset);
          try {
            c.extend(f.node, f.offset);
          } catch {
          }
        } else {
          let u = document.createRange();
          l.anchor > l.head && ([a, f] = [f, a]), u.setEnd(f.node, f.offset), u.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(u);
        }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, f)), this.impreciseAnchor = a.precise ? null : new st(h.anchorNode, h.anchorOffset), this.impreciseHead = f.precise ? null : new st(h.focusNode, h.focusOffset);
  }
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && oi(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = gi(t.root), { anchorNode: n, anchorOffset: r } = t.observer.selectionRange;
    if (!i || !e.empty || !e.assoc || !i.modify)
      return;
    let o = G.find(this, e.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (e.head == l || e.head == l + o.length)
      return;
    let a = this.coordsAt(e.head, -1), f = this.coordsAt(e.head, 1);
    if (!a || !f || a.bottom > f.top)
      return;
    let h = this.domAtPos(e.head + e.assoc);
    i.collapse(h.node, h.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let c = t.observer.selectionRange;
    t.docView.posFromDOM(c.anchorNode, c.anchorOffset) != e.from && i.collapse(n, r);
  }
  moveToLine(t) {
    let e = this.dom, i;
    if (t.node != e)
      return t;
    for (let n = t.offset; !i && n < e.childNodes.length; n++) {
      let r = V.get(e.childNodes[n]);
      r instanceof G && (i = r.domAtPos(0));
    }
    for (let n = t.offset - 1; !i && n >= 0; n--) {
      let r = V.get(e.childNodes[n]);
      r instanceof G && (i = r.domAtPos(r.length));
    }
    return i ? new st(i.node, i.offset, !0) : t;
  }
  nearest(t) {
    for (let e = t; e; ) {
      let i = V.get(e);
      if (i && i.rootView == this)
        return i;
      e = e.parentNode;
    }
    return null;
  }
  posFromDOM(t, e) {
    let i = this.nearest(t);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(t, e) + i.posAtStart;
  }
  domAtPos(t) {
    let { i: e, off: i } = this.childCursor().findPos(t, -1);
    for (; e < this.children.length - 1; ) {
      let n = this.children[e];
      if (i < n.length || n instanceof G)
        break;
      e++, i = 0;
    }
    return this.children[e].domAtPos(i);
  }
  coordsAt(t, e) {
    let i = null, n = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, f = a - l.length;
      if (a < t)
        break;
      if (f <= t && (f < t || l.covers(-1)) && (a > t || l.covers(1)) && (!i || l instanceof G && !(i instanceof G && e >= 0)))
        i = l, n = f;
      else if (i && f == t && a == t && l instanceof ee && Math.abs(e) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (i = null);
      }
      r = f;
    }
    return i ? i.coordsAt(t - n, e) : null;
  }
  coordsForChar(t) {
    let { i: e, off: i } = this.childPos(t, 1), n = this.children[e];
    if (!(n instanceof G))
      return null;
    for (; n.children.length; ) {
      let { i: l, off: a } = n.childPos(i, 1);
      for (; ; l++) {
        if (l == n.children.length)
          return null;
        if ((n = n.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(n instanceof Pt))
      return null;
    let r = lt(n.text, i);
    if (r == i)
      return null;
    let o = Qe(n.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: i, to: n } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == j.LTR;
    for (let f = 0, h = 0; h < this.children.length; h++) {
      let c = this.children[h], u = f + c.length;
      if (u > n)
        break;
      if (f >= i) {
        let d = c.dom.getBoundingClientRect();
        if (e.push(d.height), o) {
          let p = c.dom.lastChild, g = p ? mi(p) : [];
          if (g.length) {
            let m = g[g.length - 1], O = a ? m.right - d.left : d.right - m.left;
            O > l && (l = O, this.minWidth = r, this.minWidthFrom = f, this.minWidthTo = u);
          }
        }
      }
      f = u + c.breakAfter;
    }
    return e;
  }
  textDirectionAt(t) {
    let { i: e } = this.childPos(t, 1);
    return getComputedStyle(this.children[e].dom).direction == "rtl" ? j.RTL : j.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof G) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let t = document.createElement("div"), e, i, n;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t);
      let r = mi(t.firstChild)[0];
      e = t.getBoundingClientRect().height, i = r ? r.width / 27 : 7, n = r ? r.height : e, t.remove();
    }), { lineHeight: e, charWidth: i, textHeight: n };
  }
  childCursor(t = this.length) {
    let e = this.children.length;
    return e && (t -= this.children[--e].length), new Jl(this.children, t, e);
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == e.viewports.length ? null : e.viewports[n], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (e.lineBlockAt(o).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
        t.push(M.replace({
          widget: new zs(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return M.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(Oi).map((r) => (this.dynamicDecorationMap[t++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(wa).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[t++] = i, e.push(z.join(n))), this.decorations = [
      this.editContextFormatting,
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = !1;
    return this.decorations;
  }
  scrollIntoView(t) {
    if (t.isSnapshot) {
      let f = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = f.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let f of this.view.state.facet(ba))
      try {
        if (f(this.view, t.range, t))
          return !0;
      } catch (h) {
        Tt(this.view.state, h, "scroll handler");
      }
    let { range: e } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), n;
    if (!i)
      return;
    !e.empty && (n = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, n.left),
      top: Math.min(i.top, n.top),
      right: Math.max(i.right, n.right),
      bottom: Math.max(i.bottom, n.bottom)
    });
    let r = Or(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Ef(this.view.scrollDOM, o, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, l), -l), Math.max(Math.min(t.yMargin, a), -a), this.view.textDirection == j.LTR);
  }
}
function tc(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function Qa(s, t) {
  let e = s.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let i = Yl(e.focusNode, e.focusOffset), n = Kl(e.focusNode, e.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let l = V.get(n.node);
    if (!l || l instanceof Pt && l.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let a = V.get(i.node);
      !a || a instanceof Pt && a.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = t - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function ec(s, t, e) {
  let i = Qa(s, e);
  if (!i)
    return null;
  let { node: n, from: r, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || s.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = t.invertedDesc, f = new xt(a.mapPos(r), a.mapPos(o), r, o), h = [];
  for (let c = n.parentNode; ; c = c.parentNode) {
    let u = V.get(c);
    if (u instanceof ie)
      h.push({ node: c, deco: u.mark });
    else {
      if (u instanceof G || c.nodeName == "DIV" && c.parentNode == s.contentDOM)
        return { range: f, text: n, marks: h, line: c };
      if (c != s.contentDOM)
        h.push({ node: c, deco: new vi({
          inclusive: !0,
          attributes: Nf(c),
          tagName: c.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function ic(s, t) {
  return s.nodeType != 1 ? 0 : (t && s.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < s.childNodes.length && s.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let nc = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    tn(t, e, this.changes);
  }
  comparePoint(t, e) {
    tn(t, e, this.changes);
  }
  boundChange(t) {
    tn(t, t, this.changes);
  }
};
function sc(s, t, e) {
  let i = new nc();
  return z.compare(s, t, e, i), i.changes;
}
function rc(s, t) {
  for (let e = s; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function oc(s, t) {
  let e = !1;
  return t && s.iterChangedRanges((i, n) => {
    i < t.to && n > t.from && (e = !0);
  }), e;
}
function lc(s, t, e = 1) {
  let i = s.charCategorizer(t), n = s.doc.lineAt(t), r = t - n.from;
  if (n.length == 0)
    return S.cursor(t);
  r == 0 ? e = 1 : r == n.length && (e = -1);
  let o = r, l = r;
  e < 0 ? o = lt(n.text, r, !1) : l = lt(n.text, r);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let f = lt(n.text, o, !1);
    if (i(n.text.slice(f, o)) != a)
      break;
    o = f;
  }
  for (; l < n.length; ) {
    let f = lt(n.text, l);
    if (i(n.text.slice(l, f)) != a)
      break;
    l = f;
  }
  return S.range(o + n.from, l + n.from);
}
function ac(s, t) {
  return t.left > s ? t.left - s : Math.max(0, s - t.right);
}
function hc(s, t) {
  return t.top > s ? t.top - s : Math.max(0, s - t.bottom);
}
function Gn(s, t) {
  return s.top < t.bottom - 1 && s.bottom > t.top + 1;
}
function ao(s, t) {
  return t < s.top ? { top: t, left: s.left, right: s.right, bottom: s.bottom } : s;
}
function ho(s, t) {
  return t > s.bottom ? { top: s.top, left: s.left, right: s.right, bottom: t } : s;
}
function Is(s, t, e) {
  let i, n, r, o, l = !1, a, f, h, c;
  for (let p = s.firstChild; p; p = p.nextSibling) {
    let g = mi(p);
    for (let m = 0; m < g.length; m++) {
      let O = g[m];
      n && Gn(n, O) && (O = ao(ho(O, n.bottom), n.top));
      let b = ac(t, O), x = hc(e, O);
      if (b == 0 && x == 0)
        return p.nodeType == 3 ? fo(p, t, e) : Is(p, t, e);
      if (!i || o > x || o == x && r > b) {
        i = p, n = O, r = b, o = x;
        let k = x ? e < O.top ? -1 : 1 : b ? t < O.left ? -1 : 1 : 0;
        l = !k || (k > 0 ? m < g.length - 1 : m > 0);
      }
      b == 0 ? e > O.bottom && (!h || h.bottom < O.bottom) ? (a = p, h = O) : e < O.top && (!c || c.top > O.top) && (f = p, c = O) : h && Gn(h, O) ? h = ho(h, O.bottom) : c && Gn(c, O) && (c = ao(c, O.top));
    }
  }
  if (h && h.bottom >= e ? (i = a, n = h) : c && c.top <= e && (i = f, n = c), !i)
    return { node: s, offset: 0 };
  let u = Math.max(n.left, Math.min(n.right, t));
  if (i.nodeType == 3)
    return fo(i, u, e);
  if (l && i.contentEditable != "false")
    return Is(i, u, e);
  let d = Array.prototype.indexOf.call(s.childNodes, i) + (t >= (n.left + n.right) / 2 ? 1 : 0);
  return { node: s, offset: d };
}
function fo(s, t, e) {
  let i = s.nodeValue.length, n = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = Qe(s, l, l + 1).getClientRects();
    for (let f = 0; f < a.length; f++) {
      let h = a[f];
      if (h.top == h.bottom)
        continue;
      o || (o = t - h.left);
      let c = (h.top > e ? h.top - e : e - h.bottom) - 1;
      if (h.left - 1 <= t && h.right + 1 >= t && c < r) {
        let u = t >= (h.left + h.right) / 2, d = u;
        if ((T.chrome || T.gecko) && Qe(s, l).getBoundingClientRect().left == h.right && (d = !u), c <= 0)
          return { node: s, offset: l + (d ? 1 : 0) };
        n = l + (d ? 1 : 0), r = c;
      }
    }
  }
  return { node: s, offset: n > -1 ? n : o > 0 ? s.nodeValue.length : 0 };
}
function Ca(s, t, e, i = -1) {
  var n, r;
  let o = s.contentDOM.getBoundingClientRect(), l = o.top + s.viewState.paddingTop, a, { docHeight: f } = s.viewState, { x: h, y: c } = t, u = c - l;
  if (u < 0)
    return 0;
  if (u > f)
    return s.state.doc.length;
  for (let k = s.viewState.heightOracle.textHeight / 2, v = !1; a = s.elementAtHeight(u), a.type != bt.Text; )
    for (; u = i > 0 ? a.bottom + k : a.top - k, !(u >= 0 && u <= f); ) {
      if (v)
        return e ? null : 0;
      v = !0, i = -i;
    }
  c = l + u;
  let d = a.from;
  if (d < s.viewport.from)
    return s.viewport.from == 0 ? 0 : e ? null : co(s, o, a, h, c);
  if (d > s.viewport.to)
    return s.viewport.to == s.state.doc.length ? s.state.doc.length : e ? null : co(s, o, a, h, c);
  let p = s.dom.ownerDocument, g = s.root.elementFromPoint ? s.root : p, m = g.elementFromPoint(h, c);
  m && !s.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = g.elementFromPoint(h, c), m && !s.contentDOM.contains(m) && (m = null));
  let O, b = -1;
  if (m && ((n = s.docView.nearest(m)) === null || n === void 0 ? void 0 : n.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let k = p.caretPositionFromPoint(h, c);
      k && ({ offsetNode: O, offset: b } = k);
    } else if (p.caretRangeFromPoint) {
      let k = p.caretRangeFromPoint(h, c);
      k && ({ startContainer: O, startOffset: b } = k, (!s.contentDOM.contains(O) || T.safari && fc(O, b, h) || T.chrome && cc(O, b, h)) && (O = void 0));
    }
    O && (b = Math.min(_t(O), b));
  }
  if (!O || !s.docView.dom.contains(O)) {
    let k = G.find(s.docView, d);
    if (!k)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: O, offset: b } = Is(k.dom, h, c));
  }
  let x = s.docView.nearest(O);
  if (!x)
    return null;
  if (x.isWidget && ((r = x.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let k = x.dom.getBoundingClientRect();
    return t.y < k.top || t.y <= k.bottom && t.x <= (k.left + k.right) / 2 ? x.posAtStart : x.posAtEnd;
  } else
    return x.localPosFromDOM(O, b) + x.posAtStart;
}
function co(s, t, e, i, n) {
  let r = Math.round((i - t.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && e.height > s.defaultLineHeight * 1.5) {
    let l = s.viewState.heightOracle.textHeight, a = Math.floor((n - e.top - (s.defaultLineHeight - l) * 0.5) / l);
    r += a * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(e.from, e.to);
  return e.from + Cf(o, r, s.state.tabSize);
}
function fc(s, t, e) {
  let i;
  if (s.nodeType != 3 || t != (i = s.nodeValue.length))
    return !1;
  for (let n = s.nextSibling; n; n = n.nextSibling)
    if (n.nodeType != 1 || n.nodeName != "BR")
      return !1;
  return Qe(s, i - 1, i).getBoundingClientRect().left > e;
}
function cc(s, t, e) {
  if (t != 0)
    return !1;
  for (let n = s; ; ) {
    let r = n.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != n)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    n = r;
  }
  let i = s.nodeType == 1 ? s.getBoundingClientRect() : Qe(s, 0, Math.max(s.nodeValue.length, 1)).getBoundingClientRect();
  return e - i.left > 5;
}
function uc(s, t) {
  let e = s.lineBlockAt(t);
  if (Array.isArray(e.type)) {
    for (let i of e.type)
      if (i.to > t || i.to == t && (i.to == e.to || i.type == bt.Text))
        return i;
  }
  return e;
}
function dc(s, t, e, i) {
  let n = uc(s, t.head), r = !i || n.type != bt.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(t.assoc < 0 && t.head > n.from ? t.head - 1 : t.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), l = s.textDirectionAt(n.from), a = s.posAtCoords({
      x: e == (l == j.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return S.cursor(a, e ? -1 : 1);
  }
  return S.cursor(e ? n.to : n.from, e ? -1 : 1);
}
function uo(s, t, e, i) {
  let n = s.state.doc.lineAt(t.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = t, a = null; ; ) {
    let f = Zf(n, r, o, l, e), h = ua;
    if (!f) {
      if (n.number == (e ? s.state.doc.lines : 1))
        return l;
      h = `
`, n = s.state.doc.line(n.number + (e ? 1 : -1)), r = s.bidiSpans(n), f = s.visualLineSide(n, !e);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!i)
        return f;
      a = i(h);
    }
    l = f;
  }
}
function pc(s, t, e) {
  let i = s.state.charCategorizer(t), n = i(e);
  return (r) => {
    let o = i(r);
    return n == rt.Space && (n = o), n == o;
  };
}
function gc(s, t, e, i) {
  let n = t.head, r = e ? 1 : -1;
  if (n == (e ? s.state.doc.length : 0))
    return S.cursor(n, t.assoc);
  let o = t.goalColumn, l, a = s.contentDOM.getBoundingClientRect(), f = s.coordsAtPos(n, t.assoc || -1), h = s.documentTop;
  if (f)
    o == null && (o = f.left - a.left), l = r < 0 ? f.top : f.bottom;
  else {
    let d = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, s.defaultCharacterWidth * (n - d.from))), l = (r < 0 ? d.top : d.bottom) + h;
  }
  let c = a.left + o, u = i != null ? i : s.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, g = Ca(s, { x: c, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? g < n : g > n)) {
      let m = s.docView.coordsForChar(g), O = !m || p < m.top ? -1 : 1;
      return S.cursor(g, O, void 0, o);
    }
  }
}
function en(s, t, e) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(t - 1, t + 1, (r, o, l) => {
        if (t > r && t < o) {
          let a = i || e || (t - r < o - t ? -1 : 1);
          t = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return t;
  }
}
function Hn(s, t, e) {
  let i = en(s.state.facet(mr).map((n) => n(s)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : S.cursor(i, i < e.from ? 1 : -1);
}
const ii = "\uFFFF";
class mc {
  constructor(t, e) {
    this.points = t, this.text = "", this.lineSeparator = e.facet(B.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += ii;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let i = t.parentNode;
    for (let n = t; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = n.nextSibling;
      if (o == e)
        break;
      let l = V.get(n), a = V.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : un(n)) || un(o) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > r) && this.lineBreak(), n = o;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(i, r < 0 ? e.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == t && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(t) {
    if (t.cmIgnore)
      return;
    let e = V.get(t), i = e && e.overrideDOMText;
    if (i != null) {
      this.findPointInside(t, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else
      t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let i of this.points)
      i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let i of this.points)
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (Oc(t, i.node, i.offset) ? e : 0));
  }
}
function Oc(s, t, e) {
  for (; ; ) {
    if (!t || e < _t(t))
      return !1;
    if (t == s)
      return !0;
    e = Te(t) + 1, t = t.parentNode;
  }
}
class po {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class yc {
  constructor(t, e, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: r, impreciseAnchor: o } = t.docView;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
      let l = r || o ? [] : xc(t), a = new mc(l, t.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = kc(l, this.bounds.from);
    } else {
      let l = t.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Ms(t.contentDOM, l.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(l.focusNode, l.focusOffset), f = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Ms(t.contentDOM, l.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(l.anchorNode, l.anchorOffset), h = t.viewport;
      if ((T.ios || T.chrome) && t.state.selection.main.empty && a != f && (h.from > 0 || h.to < t.state.doc.length)) {
        let c = Math.min(a, f), u = Math.max(a, f), d = h.from - c, p = h.to - u;
        (d == 0 || d == 1 || c == 0) && (p == 0 || p == -1 || u == t.state.doc.length) && (a = 0, f = t.state.doc.length);
      }
      this.newSel = S.single(f, a);
    }
  }
}
function Pa(s, t) {
  let e, { newSel: i } = t, n = s.state.selection.main, r = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: o, to: l } = t.bounds, a = n.from, f = null;
    (r === 8 || T.android && t.text.length < l - o) && (a = n.to, f = "end");
    let h = bc(s.state.doc.sliceString(o, l, ii), t.text, a - o, f);
    h && (T.chrome && r == 13 && h.toB == h.from + 2 && t.text.slice(h.from, h.toB) == ii + ii && h.toB--, e = {
      from: o + h.from,
      to: o + h.toA,
      insert: q.of(t.text.slice(h.from, h.toB).split(ii))
    });
  } else
    i && (!s.hasFocus && s.state.facet(te) || i.main.eq(n)) && (i = null);
  if (!e && !i)
    return !1;
  if (!e && t.typeOver && !n.empty && i && i.main.empty ? e = { from: n.from, to: n.to, insert: s.state.doc.slice(n.from, n.to) } : e && e.from >= n.from && e.to <= n.to && (e.from != n.from || e.to != n.to) && n.to - n.from - (e.to - e.from) <= 4 ? e = {
    from: n.from,
    to: n.to,
    insert: s.state.doc.slice(n.from, e.from).append(e.insert).append(s.state.doc.slice(e.to, n.to))
  } : (T.mac || T.android) && e && e.from == e.to && e.from == n.head - 1 && /^\. ?$/.test(e.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = S.single(i.main.anchor - 1, i.main.head - 1)), e = { from: n.from, to: n.to, insert: q.of([" "]) }) : T.chrome && e && e.from == e.to && e.from == n.head && e.insert.toString() == `
 ` && s.lineWrapping && (i && (i = S.single(i.main.anchor - 1, i.main.head - 1)), e = { from: n.from, to: n.to, insert: q.of([" "]) }), e)
    return yr(s, e, i, r);
  if (i && !i.main.eq(n)) {
    let o = !1, l = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (o = !0), l = s.inputState.lastSelectionOrigin), s.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function yr(s, t, e, i = -1) {
  if (T.ios && s.inputState.flushIOSKey(t))
    return !0;
  let n = s.state.selection.main;
  if (T.android && (t.to == n.to && (t.from == n.from || t.from == n.from - 1 && s.state.sliceDoc(t.from, n.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && $e(s.contentDOM, "Enter", 13) || (t.from == n.from - 1 && t.to == n.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > n.head) && $e(s.contentDOM, "Backspace", 8) || t.from == n.from && t.to == n.to + 1 && t.insert.length == 0 && $e(s.contentDOM, "Delete", 46)))
    return !0;
  let r = t.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let o, l = () => o || (o = Sc(s, t, e));
  return s.state.facet(Oa).some((a) => a(s, t.from, t.to, r, l)) || s.dispatch(l()), !0;
}
function Sc(s, t, e) {
  let i, n = s.state, r = n.selection.main;
  if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && s.inputState.composing < 0) {
    let l = r.from < t.from ? n.sliceDoc(r.from, t.from) : "", a = r.to > t.to ? n.sliceDoc(t.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(l + t.insert.sliceString(0, void 0, s.state.lineBreak) + a));
  } else {
    let l = n.changes(t), a = e && e.main.to <= l.newLength ? e.main : void 0;
    if (n.selection.ranges.length > 1 && s.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
      let f = s.state.sliceDoc(t.from, t.to), h, c = e && Qa(s, e.main.head);
      if (c) {
        let p = t.insert.length - (t.to - t.from);
        h = { from: c.from, to: c.to - p };
      } else
        h = s.state.doc.lineAt(r.head);
      let u = r.to - t.to, d = r.to - r.from;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let g = p.to - u, m = g - f.length;
        if (p.to - p.from != d || s.state.sliceDoc(m, g) != f || p.to >= h.from && p.from <= h.to)
          return { range: p };
        let O = n.changes({ from: m, to: g, insert: t.insert }), b = p.to - r.to;
        return {
          changes: O,
          range: a ? S.range(Math.max(0, a.anchor + b), Math.max(0, a.head + b)) : p.map(O)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && n.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, o += ".compose", s.inputState.compositionFirstChange && (o += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: o, scrollIntoView: !0 });
}
function bc(s, t, e, i) {
  let n = Math.min(s.length, t.length), r = 0;
  for (; r < n && s.charCodeAt(r) == t.charCodeAt(r); )
    r++;
  if (r == n && s.length == t.length)
    return null;
  let o = s.length, l = t.length;
  for (; o > 0 && l > 0 && s.charCodeAt(o - 1) == t.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    e -= o + a - r;
  }
  if (o < r && s.length < t.length) {
    let a = e <= r && e >= o ? r - e : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = e <= r && e >= l ? r - e : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function xc(s) {
  let t = [];
  if (s.root.activeElement != s.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return e && (t.push(new po(e, i)), (n != e || r != i) && t.push(new po(n, r))), t;
}
function kc(s, t) {
  if (s.length == 0)
    return null;
  let e = s[0].pos, i = s.length == 2 ? s[1].pos : e;
  return e > -1 && i > -1 ? S.single(e + t, i + t) : null;
}
class wc {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, T.safari && t.contentDOM.addEventListener("input", () => null), T.gecko && Lc(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !Mc(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || this.runHandlers(t.type, t);
  }
  runHandlers(t, e) {
    let i = this.handlers[t];
    if (i) {
      for (let n of i.observers)
        n(this.view, e);
      for (let n of i.handlers) {
        if (e.defaultPrevented)
          break;
        if (n(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = vc(t), i = this.handlers, n = this.view.contentDOM;
    for (let r in e)
      if (r != "scroll") {
        let o = !e[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (n.removeEventListener(r, this.handleEvent), l = null), l || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !e[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && Ra.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), T.android && T.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let e;
    return T.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = Aa.find((i) => i.keyCode == t.keyCode)) && !t.ctrlKey || Tc.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), !0) : (t.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, $e(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return /^key/.test(t.type) ? this.composing > 0 ? !0 : T.safari && !T.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function go(s, t) {
  return (e, i) => {
    try {
      return t.call(s, i, e);
    } catch (n) {
      Tt(e.state, n);
    }
  };
}
function vc(s) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(i) {
    return t[i] || (t[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec;
    if (n && n.domEventHandlers)
      for (let r in n.domEventHandlers) {
        let o = n.domEventHandlers[r];
        o && e(r).handlers.push(go(i.value, o));
      }
    if (n && n.domEventObservers)
      for (let r in n.domEventObservers) {
        let o = n.domEventObservers[r];
        o && e(r).observers.push(go(i.value, o));
      }
  }
  for (let i in Rt)
    e(i).handlers.push(Rt[i]);
  for (let i in kt)
    e(i).observers.push(kt[i]);
  return t;
}
const Aa = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Tc = "dthko", Ra = [16, 17, 18, 20, 91, 92, 224, 225], Bi = 6;
function zi(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function Qc(s, t) {
  return Math.max(Math.abs(s.clientX - t.clientX), Math.abs(s.clientY - t.clientY));
}
class Cc {
  constructor(t, e, i, n) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = qf(t.contentDOM), this.atoms = t.state.facet(mr).map((o) => o(t));
    let r = t.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(B.allowMultipleSelections) && Pc(t, e), this.dragging = Rc(t, e) && Ea(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Qc(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, i = 0, n = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Or(this.view);
    t.clientX - a.left <= n + Bi ? e = -zi(n - t.clientX) : t.clientX + a.right >= o - Bi && (e = zi(t.clientX - o)), t.clientY - a.top <= r + Bi ? i = -zi(r - t.clientY) : t.clientY + a.bottom >= l - Bi && (i = zi(t.clientY - l)), this.setScrollSpeed(e, i);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(t) {
    let e = null;
    for (let i = 0; i < t.ranges.length; i++) {
      let n = t.ranges[i], r = null;
      if (n.empty) {
        let o = en(this.atoms, n.from, 0);
        o != n.from && (r = S.cursor(o, -1));
      } else {
        let o = en(this.atoms, n.from, -1), l = en(this.atoms, n.to, 1);
        (o != n.from || l != n.to) && (r = S.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
      }
      r && (e || (e = t.ranges.slice()), e[i] = r);
    }
    return e ? S.create(e, t.mainIndex) : t;
  }
  select(t) {
    let { view: e } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Pc(s, t) {
  let e = s.state.facet(da);
  return e.length ? e[0](t) : T.mac ? t.metaKey : t.ctrlKey;
}
function Ac(s, t) {
  let e = s.state.facet(pa);
  return e.length ? e[0](t) : T.mac ? !t.altKey : !t.ctrlKey;
}
function Rc(s, t) {
  let { main: e } = s.state.selection;
  if (e.empty)
    return !1;
  let i = gi(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function Mc(s, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, i; e != s.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = V.get(e)) && i.ignoreEvent(t))
      return !1;
  return !0;
}
const Rt = /* @__PURE__ */ Object.create(null), kt = /* @__PURE__ */ Object.create(null), Ma = T.ie && T.ie_version < 15 || T.ios && T.webkit_version < 604;
function Dc(s) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    s.focus(), e.remove(), Da(s, e.value);
  }, 50);
}
function qn(s, t, e) {
  for (let i of s.facet(t))
    e = i(e, s);
  return e;
}
function Da(s, t) {
  t = qn(s.state, dr, t);
  let { state: e } = s, i, n = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
  if (Xs != null && e.selection.ranges.every((a) => a.empty) && Xs == r.toString()) {
    let a = -1;
    i = e.changeByRange((f) => {
      let h = e.doc.lineAt(f.from);
      if (h.from == a)
        return { range: f };
      a = h.from;
      let c = e.toText((o ? r.line(n++).text : t) + e.lineBreak);
      return {
        changes: { from: h.from, insert: c },
        range: S.cursor(f.from + c.length)
      };
    });
  } else
    o ? i = e.changeByRange((a) => {
      let f = r.line(n++);
      return {
        changes: { from: a.from, to: a.to, insert: f.text },
        range: S.cursor(a.from + f.length)
      };
    }) : i = e.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
kt.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
Rt.keydown = (s, t) => (s.inputState.setSelectionOrigin("select"), t.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
kt.touchstart = (s, t) => {
  s.inputState.lastTouchTime = Date.now(), s.inputState.setSelectionOrigin("select.pointer");
};
kt.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
Rt.mousedown = (s, t) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let e = null;
  for (let i of s.state.facet(ga))
    if (e = i(s, t), e)
      break;
  if (!e && t.button == 0 && (e = $c(s, t)), e) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new Cc(s, t, e, i)), i && s.observer.ignore(() => {
      Gl(s.contentDOM);
      let r = s.root.activeElement;
      r && !r.contains(s.contentDOM) && r.blur();
    });
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(t), n.dragging === !1;
  }
  return !1;
};
function mo(s, t, e, i) {
  if (i == 1)
    return S.cursor(t, e);
  if (i == 2)
    return lc(s.state, t, e);
  {
    let n = G.find(s.docView, t), r = s.state.doc.lineAt(n ? n.posAtEnd : t), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, S.range(o, l);
  }
}
let Oo = (s, t, e) => t >= e.top && t <= e.bottom && s >= e.left && s <= e.right;
function Ec(s, t, e, i) {
  let n = G.find(s.docView, t);
  if (!n)
    return 1;
  let r = t - n.posAtStart;
  if (r == 0)
    return 1;
  if (r == n.length)
    return -1;
  let o = n.coordsAt(r, -1);
  if (o && Oo(e, i, o))
    return -1;
  let l = n.coordsAt(r, 1);
  return l && Oo(e, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function yo(s, t) {
  let e = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1);
  return { pos: e, bias: Ec(s, e, t.clientX, t.clientY) };
}
const qc = T.ie && T.ie_version <= 11;
let So = null, bo = 0, xo = 0;
function Ea(s) {
  if (!qc)
    return s.detail;
  let t = So, e = xo;
  return So = s, xo = Date.now(), bo = !t || e > Date.now() - 400 && Math.abs(t.clientX - s.clientX) < 2 && Math.abs(t.clientY - s.clientY) < 2 ? (bo + 1) % 3 : 1;
}
function $c(s, t) {
  let e = yo(s, t), i = Ea(t), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (e.pos = r.changes.mapPos(e.pos), n = n.map(r.changes));
    },
    get(r, o, l) {
      let a = yo(s, r), f, h = mo(s, a.pos, a.bias, i);
      if (e.pos != a.pos && !o) {
        let c = mo(s, e.pos, e.bias, i), u = Math.min(c.from, h.from), d = Math.max(c.to, h.to);
        h = u < h.from ? S.range(u, d) : S.range(d, u);
      }
      return o ? n.replaceRange(n.main.extend(h.from, h.to)) : l && i == 1 && n.ranges.length > 1 && (f = Bc(n, a.pos)) ? f : l ? n.addRange(h) : S.create([h]);
    }
  };
}
function Bc(s, t) {
  for (let e = 0; e < s.ranges.length; e++) {
    let { from: i, to: n } = s.ranges[e];
    if (i <= t && n >= t)
      return S.create(s.ranges.slice(0, e).concat(s.ranges.slice(e + 1)), s.mainIndex == e ? 0 : s.mainIndex - (s.mainIndex > e ? 1 : 0));
  }
  return null;
}
Rt.dragstart = (s, t) => {
  let { selection: { main: e } } = s.state;
  if (t.target.draggable) {
    let n = s.docView.nearest(t.target);
    if (n && n.isWidget) {
      let r = n.posAtStart, o = r + n.length;
      (r >= e.to || o <= e.from) && (e = S.range(r, o));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", qn(s.state, pr, s.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
};
Rt.dragend = (s) => (s.inputState.draggedContent = null, !1);
function ko(s, t, e, i) {
  if (e = qn(s.state, dr, e), !e)
    return;
  let n = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && Ac(s, t) ? { from: r.from, to: r.to } : null, l = { from: n, insert: e }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
Rt.drop = (s, t) => {
  if (!t.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let i = Array(e.length), n = 0, r = () => {
      ++n == e.length && ko(s, t, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < e.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(e[o]);
    }
    return !0;
  } else {
    let i = t.dataTransfer.getData("Text");
    if (i)
      return ko(s, t, i, !0), !0;
  }
  return !1;
};
Rt.paste = (s, t) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let e = Ma ? null : t.clipboardData;
  return e ? (Da(s, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (Dc(s), !1);
};
function zc(s, t) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function Wc(s) {
  let t = [], e = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (t.push(s.sliceDoc(n.from, n.to)), e.push(n));
  if (!t.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let o = s.doc.lineAt(r);
      o.number > n && (t.push(o.text), e.push({ from: o.from, to: Math.min(s.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: qn(s, pr, t.join(s.lineBreak)), ranges: e, linewise: i };
}
let Xs = null;
Rt.copy = Rt.cut = (s, t) => {
  let { text: e, ranges: i, linewise: n } = Wc(s.state);
  if (!e && !n)
    return !1;
  Xs = n ? e : null, t.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Ma ? null : t.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", e), !0) : (zc(s, e), !1);
};
const qa = /* @__PURE__ */ ne.define();
function $a(s, t) {
  let e = [];
  for (let i of s.facet(ya)) {
    let n = i(s, t);
    n && e.push(n);
  }
  return e ? s.update({ effects: e, annotations: qa.of(!0) }) : null;
}
function Ba(s) {
  setTimeout(() => {
    let t = s.hasFocus;
    if (t != s.inputState.notifiedFocused) {
      let e = $a(s.state, t);
      e ? s.dispatch(e) : s.update([]);
    }
  }, 10);
}
kt.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), Ba(s);
};
kt.blur = (s) => {
  s.observer.clearSelectionRange(), Ba(s);
};
kt.compositionstart = kt.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
kt.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, T.chrome && T.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
kt.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
Rt.beforeinput = (s, t) => {
  var e, i;
  if (t.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), o = t.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = s.posAtDOM(l.startContainer, l.startOffset), f = s.posAtDOM(l.endContainer, l.endOffset);
      return yr(s, { from: a, to: f, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (T.chrome && T.android && (n = Aa.find((r) => r.inputType == t.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return T.ios && t.inputType == "deleteContentForward" && s.observer.flushSoon(), T.safari && t.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => kt.compositionend(s, t), 20), !1;
};
const wo = /* @__PURE__ */ new Set();
function Lc(s) {
  wo.has(s) || (wo.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const vo = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ne = !1;
function To() {
  Ne = !1;
}
class Vc {
  constructor(t) {
    this.lineWrapping = t, this.doc = q.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return vo.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (e = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, i, n, r, o) {
    let l = vo.indexOf(t) > -1, a = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let f = 0; f < o.length; f++) {
        let h = o[f];
        h < 0 ? f++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return a;
  }
}
class Nc {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Lt {
  constructor(t, e, i, n, r) {
    this.from = t, this.length = e, this.top = i, this.height = n, this._content = r;
  }
  get type() {
    return typeof this._content == "number" ? bt.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof ue ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new Lt(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var I = /* @__PURE__ */ function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
}(I || (I = {}));
const nn = 1e-3;
class at {
  constructor(t, e, i = 2) {
    this.length = t, this.height = e, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > nn && (Ne = !0), this.height = t);
  }
  replace(t, e, i) {
    return at.of(i);
  }
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: f, fromB: h, toB: c } = n[l], u = r.lineAt(a, I.ByPosNoHeight, i.setDoc(e), 0, 0), d = u.to >= f ? u : r.lineAt(f, I.ByPosNoHeight, i, 0, 0);
      for (c += d.to - f, f = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, h = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, I.ByPosNoHeight, i, 0, 0));
      h += u.from - a, a = u.from;
      let p = Sr.build(i.setDoc(o), t, h, c);
      r = gn(r, r.replace(a, f, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new gt(0, 0);
  }
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, i = t.length, n = 0, r = 0;
    for (; ; )
      if (e == i)
        if (n > r * 2) {
          let l = t[e - 1];
          l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (r > n * 2) {
          let l = t[i];
          l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (n < r) {
        let l = t[e++];
        l && (n += l.size);
      } else {
        let l = t[--i];
        l && (r += l.size);
      }
    let o = 0;
    return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new Ic(at.of(t.slice(0, e)), o, at.of(t.slice(i)));
  }
}
function gn(s, t) {
  return s == t ? s : (s.constructor != t.constructor && (Ne = !0), t);
}
at.prototype.size = 1;
class za extends at {
  constructor(t, e, i) {
    super(t, e), this.deco = i;
  }
  blockAt(t, e, i, n) {
    return new Lt(n, this.length, i, this.height, this.deco || 0);
  }
  lineAt(t, e, i, n, r) {
    return this.blockAt(0, i, n, r);
  }
  forEachLine(t, e, i, n, r, o) {
    t <= r + this.length && e >= r && o(this.blockAt(0, i, n, r));
  }
  updateHeight(t, e = 0, i = !1, n) {
    return n && n.from <= e && n.more && this.setHeight(n.heights[n.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class gt extends za {
  constructor(t, e) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t, e, i, n) {
    return new Lt(n, this.length, i, this.height, this.breaks);
  }
  replace(t, e, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof gt || n instanceof tt && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof tt ? n = new gt(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : at.of(i);
  }
  updateHeight(t, e = 0, i = !1, n) {
    return n && n.from <= e && n.more ? this.setHeight(n.heights[n.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class tt extends at {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let i = t.doc.lineAt(e).number, n = t.doc.lineAt(e + this.length).number, r = n - i + 1, o, l = 0;
    if (t.lineWrapping) {
      let a = Math.min(this.height, t.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(t, e, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(e, n);
    if (e.lineWrapping) {
      let f = n + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), h = e.doc.lineAt(f), c = l + h.length * a, u = Math.max(i, t - c / 2);
      return new Lt(h.from, h.length, u, c, 0);
    } else {
      let f = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: h, length: c } = e.doc.line(r + f);
      return new Lt(h, c, i + l * f, l, 0);
    }
  }
  lineAt(t, e, i, n, r) {
    if (e == I.ByHeight)
      return this.blockAt(t, i, n, r);
    if (e == I.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(t);
      return new Lt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), f = i.doc.lineAt(t), h = l + f.length * a, c = f.number - o, u = n + l * c + a * (f.from - r - c);
    return new Lt(f.from, f.length, Math.max(n, Math.min(u, n + this.height - h)), h, 0);
  }
  forEachLine(t, e, i, n, r, o) {
    t = Math.max(t, r), e = Math.min(e, r + this.length);
    let { firstLine: l, perLine: a, perChar: f } = this.heightMetrics(i, r);
    for (let h = t, c = n; h <= e; ) {
      let u = i.doc.lineAt(h);
      if (h == t) {
        let p = u.number - l;
        c += a * p + f * (t - r - p);
      }
      let d = a + f * u.length;
      o(new Lt(u.from, u.length, c, d, 0)), c += d, h = u.to + 1;
    }
  }
  replace(t, e, i) {
    let n = this.length - e;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof tt ? i[i.length - 1] = new tt(r.length + n) : i.push(null, new tt(n - 1));
    }
    if (t > 0) {
      let r = i[0];
      r instanceof tt ? i[0] = new tt(t + r.length) : i.unshift(new tt(t - 1), null);
    }
    return at.of(i);
  }
  decomposeLeft(t, e) {
    e.push(new tt(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new tt(this.length - t - 1));
  }
  updateHeight(t, e = 0, i = !1, n) {
    let r = e + this.length;
    if (n && n.from <= e + this.length && n.more) {
      let o = [], l = Math.max(e, n.from), a = -1;
      for (n.from > e && o.push(new tt(n.from - e - 1).updateHeight(t, e)); l <= r && n.more; ) {
        let h = t.doc.lineAt(l).length;
        o.length && o.push(null);
        let c = n.heights[n.index++];
        a == -1 ? a = c : Math.abs(c - a) >= nn && (a = -2);
        let u = new gt(h, c);
        u.outdated = !1, o.push(u), l += h + 1;
      }
      l <= r && o.push(null, new tt(r - l).updateHeight(t, l));
      let f = at.of(o);
      return (a < 0 || Math.abs(f.height - this.height) >= nn || Math.abs(a - this.heightMetrics(t, e).perLine) >= nn) && (Ne = !0), gn(this, f);
    } else
      (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Ic extends at {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, n) {
    let r = i + this.left.height;
    return t < r ? this.left.blockAt(t, e, i, n) : this.right.blockAt(t, e, r, n + this.left.length + this.break);
  }
  lineAt(t, e, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = e == I.ByHeight ? t < o : t < l, f = a ? this.left.lineAt(t, e, i, n, r) : this.right.lineAt(t, e, i, o, l);
    if (this.break || (a ? f.to < l : f.from > l))
      return f;
    let h = e == I.ByPosNoHeight ? I.ByPosNoHeight : I.ByPos;
    return a ? f.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, n, r).join(f);
  }
  forEachLine(t, e, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      t < a && this.left.forEachLine(t, e, i, n, r, o), e >= a && this.right.forEachLine(t, e, i, l, a, o);
    else {
      let f = this.lineAt(a, I.ByPos, i, n, r);
      t < f.from && this.left.forEachLine(t, f.from - 1, i, n, r, o), f.to >= t && f.from <= e && o(f), e > f.to && this.right.forEachLine(f.to + 1, e, i, l, a, o);
    }
  }
  replace(t, e, i) {
    let n = this.left.length + this.break;
    if (e < n)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - n, e - n, i));
    let r = [];
    t > 0 && this.decomposeLeft(t, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (t > 0 && Qo(r, o - 1), e < this.length) {
      let l = r.length;
      this.decomposeRight(e, r), Qo(r, l);
    }
    return at.of(r);
  }
  decomposeLeft(t, e) {
    let i = this.left.length;
    if (t <= i)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
  }
  decomposeRight(t, e) {
    let i = this.left.length, n = i + this.break;
    if (t >= n)
      return this.right.decomposeRight(t - n, e);
    t < i && this.left.decomposeRight(t, e), this.break && t < n && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? at.of(this.break ? [t, null, e] : [t, e]) : (this.left = gn(this.left, t), this.right = gn(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = !1, n) {
    let { left: r, right: o } = this, l = e + r.length + this.break, a = null;
    return n && n.from <= e + r.length && n.more ? a = r = r.updateHeight(t, e, i, n) : r.updateHeight(t, e, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(t, l, i, n) : o.updateHeight(t, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Qo(s, t) {
  let e, i;
  s[t] == null && (e = s[t - 1]) instanceof tt && (i = s[t + 1]) instanceof tt && s.splice(t - 1, 3, new tt(e.length + 1 + i.length));
}
const Xc = 5;
class Sr {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let i = Math.min(e, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof gt ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new gt(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, i) {
    if (t < e || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = e - t;
      i.block ? this.addBlock(new za(o, n, i)) : (o || r || n >= Xc) && this.addLineDeco(n, r, o);
    } else
      e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new gt(this.pos - t, -1)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let i = new tt(e - t);
    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof gt)
      return t;
    let e = new gt(0, -1);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, t), n.breaks += e, this.writtenTo = this.pos = this.pos + i;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof gt) && !this.isCovered ? this.nodes.push(new gt(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = t;
    for (let n of this.nodes)
      n instanceof gt && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  static build(t, e, i, n) {
    let r = new Sr(i, t);
    return z.spans(e, i, n, r, 0), r.finish(i);
  }
}
function Fc(s, t, e) {
  let i = new _c();
  return z.compare(s, t, e, i, 0), i.changes;
}
class _c {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, n) {
    (t < e || i && i.heightRelevant || n && n.heightRelevant) && tn(t, e, this.changes, 5);
  }
}
function Uc(s, t) {
  let e = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, e.left), o = Math.min(n.innerWidth, e.right), l = Math.max(0, e.top), a = Math.min(n.innerHeight, e.bottom);
  for (let f = s.parentNode; f && f != i.body; )
    if (f.nodeType == 1) {
      let h = f, c = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && c.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(f == s.parentNode ? n.innerHeight : a, u.bottom);
      }
      f = c.position == "absolute" || c.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (f.nodeType == 11)
      f = f.host;
    else
      break;
  return {
    left: r - e.left,
    right: Math.max(r, o) - e.left,
    top: l - (e.top + t),
    bottom: Math.max(l, a) - (e.top + t)
  };
}
function jc(s, t) {
  let e = s.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class Zn {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.size = i, this.displaySize = n;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let i = 0; i < t.length; i++) {
      let n = t[i], r = e[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(t, e) {
    return M.replace({
      widget: new Gc(this.displaySize * (e ? t.scaleY : t.scaleX), e)
    }).range(this.from, this.to);
  }
}
class Gc extends En {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Co {
  constructor(t) {
    this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Po, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = j.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let e = t.facet(gr).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Vc(e), this.stateDeco = t.facet(Oi).filter((i) => typeof i != "function"), this.heightMap = at.empty().applyChanges(this.stateDeco, q.empty, this.heightOracle.setDoc(t.doc), [new xt(0, 0, 0, t.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = M.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? e.head : e.anchor;
      if (!t.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        t.push(new Wi(r, o));
      }
    }
    return this.viewports = t.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Po : new br(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(ni(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Oi).filter((h) => typeof h != "function");
    let n = t.changedRanges, r = xt.extendWithRanges(n, Fc(i, this.stateDeco, t ? t.changes : Y.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    To(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || Ne) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
    let f = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, t.flags |= this.updateForViewport(), (f || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Kf) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(t) {
    let e = t.contentDOM, i = window.getComputedStyle(e), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? j.RTL : j.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = e.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let f = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: k, scaleY: v } = jl(e, l);
      (k > 5e-3 && Math.abs(this.scaleX - k) > 5e-3 || v > 5e-3 && Math.abs(this.scaleY - v) > 5e-3) && (this.scaleX = k, this.scaleY = v, f |= 16, o = a = !0);
    }
    let c = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != c || this.paddingBottom != u) && (this.paddingTop = c, this.paddingBottom = u, f |= 18), this.editorWidth != t.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = t.scrollDOM.clientWidth, f |= 16);
    let d = t.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Zl(t.scrollDOM);
    let p = (this.printing ? jc : Uc)(e, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let O = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (O != this.inView && (this.inView = O, O && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, f |= 16), a) {
      let k = t.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(k) && (o = !0), o || n.lineWrapping && Math.abs(b - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: v, charWidth: Q, textHeight: C } = t.docView.measureTextSize();
        o = v > 0 && n.refresh(r, v, Q, C, b / Q, k), o && (t.docView.minWidth = 0, f |= 16);
      }
      g > 0 && m > 0 ? h = Math.max(g, m) : g < 0 && m < 0 && (h = Math.min(g, m)), To();
      for (let v of this.viewports) {
        let Q = v.from == this.viewport.from ? k : t.docView.measureVisibleLineHeights(v);
        this.heightMap = (o ? at.empty().applyChanges(this.stateDeco, q.empty, this.heightOracle, [new xt(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Nc(v.from, Q));
      }
      Ne && (f |= 2);
    }
    let x = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return x && (f & 2 && (f |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), f |= this.updateForViewport()), (f & 2 || x) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), f |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), f;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Wi(n.lineAt(o - i * 1e3, I.ByHeight, r, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, I.ByHeight, r, 0, 0).to);
    if (e) {
      let { head: f } = e.range;
      if (f < a.from || f > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), c = n.lineAt(f, I.ByPos, r, 0, 0), u;
        e.y == "center" ? u = (c.top + c.bottom) / 2 - h / 2 : e.y == "start" || e.y == "nearest" && f < a.from ? u = c.top : u = c.bottom - h, a = new Wi(n.lineAt(u - 1e3 / 2, I.ByHeight, r, 0, 0).from, n.lineAt(u + h + 1e3 / 2, I.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), n = e.mapPos(t.to, 1);
    return new Wi(this.heightMap.lineAt(i, I.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, I.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(t, I.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (t == 0 || n <= o - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && n > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let n of t)
      e.touchesRange(n.from, n.to) || i.push(new Zn(e.mapPos(n.from), e.mapPos(n.to), n.size, n.displaySize));
    return i;
  }
  ensureLineGaps(t, e) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != j.LTR && !i)
      return [];
    let l = [], a = (h, c, u, d) => {
      if (c - h < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let O of g)
        if (O > h && O < c) {
          a(h, O - 10, u, d), a(O + 10, c, u, d);
          return;
        }
      let m = Zc(t, (O) => O.from >= u.from && O.to <= u.to && Math.abs(O.from - h) < r && Math.abs(O.to - c) < r && !g.some((b) => O.from < b && O.to > b));
      if (!m) {
        if (c < u.to && e && i && e.visibleRanges.some((x) => x.from <= c && x.to >= c)) {
          let x = e.moveToLineBoundary(S.cursor(c), !1, !0).head;
          x > h && (c = x);
        }
        let O = this.gapSize(u, h, c, d), b = i || O < 2e6 ? O : 2e6;
        m = new Zn(h, c, O, b);
      }
      l.push(m);
    }, f = (h) => {
      if (h.length < o || h.type != bt.Text)
        return;
      let c = Hc(h.from, h.to, this.stateDeco);
      if (c.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let g = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, O;
        if (u != null) {
          let b = Vi(c, u), x = ((this.visibleBottom - this.visibleTop) / 2 + g) / h.height;
          m = b - x, O = b + x;
        } else
          m = (this.visibleTop - h.top - g) / h.height, O = (this.visibleBottom - h.top + g) / h.height;
        d = Li(c, m), p = Li(c, O);
      } else {
        let g = c.total * this.heightOracle.charWidth, m = n * this.heightOracle.charWidth, O = 0;
        if (g > 2e6)
          for (let Q of t)
            Q.from >= h.from && Q.from < h.to && Q.size != Q.displaySize && Q.from * this.heightOracle.charWidth + O < this.pixelViewport.left && (O = Q.size - Q.displaySize);
        let b = this.pixelViewport.left + O, x = this.pixelViewport.right + O, k, v;
        if (u != null) {
          let Q = Vi(c, u), C = ((x - b) / 2 + m) / g;
          k = Q - C, v = Q + C;
        } else
          k = (b - m) / g, v = (x + m) / g;
        d = Li(c, k), p = Li(c, v);
      }
      d > h.from && a(h.from, d, h, c), p < h.to && a(p, h.to, h, c);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(f) : f(h);
    return l;
  }
  gapSize(t, e, i, n) {
    let r = Vi(n, i) - Vi(n, e);
    return this.heightOracle.lineWrapping ? t.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(t) {
    Zn.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = M.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let i = [];
    z.spans(e, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let r = 0; r < i.length && !(n & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (n |= 4, t && t.mapPos(o.from, -1) == l.from && t.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || ni(this.heightMap.lineAt(t, I.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || ni(this.heightMap.lineAt(this.scaler.fromDOM(t), I.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return ni(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Wi {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function Hc(s, t, e) {
  let i = [], n = s, r = 0;
  return z.spans(e, s, t, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
    }
  }, 20), n < t && (i.push({ from: n, to: t }), r += t - n), { total: r, ranges: i };
}
function Li({ total: s, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(s * e);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = t[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Vi(s, t) {
  let e = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (t <= n) {
      e += t - i;
      break;
    }
    e += n - i;
  }
  return e / s.total;
}
function Zc(s, t) {
  for (let e of s)
    if (t(e))
      return e;
}
const Po = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
class br {
  constructor(t, e, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let f = e.lineAt(l, I.ByPos, t, 0, 0).top, h = e.lineAt(a, I.ByPos, t, 0, 0).bottom;
      return n += h - f, { from: l, to: a, top: f, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (e.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, n = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.top)
        return n + (t - i) * this.scale;
      if (t <= r.bottom)
        return r.domTop + (t - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, n = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.domTop)
        return i + (t - n) / this.scale;
      if (t <= r.domBottom)
        return r.top + (t - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
  eq(t) {
    return t instanceof br ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : !1;
  }
}
function ni(s, t) {
  if (t.scale == 1)
    return s;
  let e = t.toDOM(s.top), i = t.toDOM(s.bottom);
  return new Lt(s.from, s.length, e, i - e, Array.isArray(s._content) ? s._content.map((n) => ni(n, t)) : s._content);
}
const Ni = /* @__PURE__ */ P.define({ combine: (s) => s.join(" ") }), Fs = /* @__PURE__ */ P.define({ combine: (s) => s.indexOf(!0) > -1 }), _s = /* @__PURE__ */ fe.newName(), Wa = /* @__PURE__ */ fe.newName(), La = /* @__PURE__ */ fe.newName(), Va = { "&light": "." + Wa, "&dark": "." + La };
function Us(s, t, e) {
  return new fe(t, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!e || !e[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return e[n];
      }) : s + " " + i;
    }
  });
}
const Yc = /* @__PURE__ */ Us("." + _s, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Va), Kc = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Yn = T.ie && T.ie_version <= 11;
class Jc {
  constructor(t) {
    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new $f(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      (T.ie && T.ie_version <= 11 || T.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && t.constructor.EDIT_CONTEXT !== !1 && !(T.chrome && T.chrome_version < 126) && (this.editContext = new eu(t), t.state.facet(te) && (t.contentDOM.editContext = this.editContext.editContext)), Yn && (this.onCharData = (e) => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(te) ? i.root.activeElement != this.dom : !Ji(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.nearest(n.anchorNode);
    if (r && r.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    (T.ie && T.ie_version <= 11 || T.android && T.chrome) && !i.state.selection.main.empty && n.focusNode && oi(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = gi(t.root);
    if (!e)
      return !1;
    let i = T.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && tu(this.view, e) || e;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = Ji(this.dom, i);
    return n && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && zf(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = e)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Kc), Yn && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    !this.active || (this.active = !1, this.observer.disconnect(), Yn && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(t, e) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && $e(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
      key: t,
      keyCode: e,
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, i = -1, n = !1;
    for (let r of t) {
      let o = this.readMutation(r);
      !o || (o.typeOver && (n = !0), e == -1 ? { from: e, to: i } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)));
    }
    return { from: e, to: i, typeOver: n };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), n = this.selectionChanged && Ji(this.dom, this.selectionRange);
    if (t < 0 && !n)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new yc(this.view, t, e, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = Pa(this.view, e);
    return this.view.state == i && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n;
  }
  readMutation(t) {
    let e = this.view.docView.nearest(t.target);
    if (!e || e.ignoreMutation(t))
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
      let i = Ao(e, t.previousSibling || t.target.previousSibling, -1), n = Ao(e, t.nextSibling || t.target.nextSibling, 1);
      return {
        from: i ? e.posAfter(i) : e.posAtStart,
        to: n ? e.posBefore(n) : e.posAtEnd,
        typeOver: !1
      };
    } else
      return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(te) != t.state.facet(te) && (t.view.contentDOM.editContext = t.state.facet(te) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, i;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Ao(s, t, e) {
  for (; t; ) {
    let i = V.get(t);
    if (i && i.parent == s)
      return i;
    let n = t.parentNode;
    t = n != s.dom ? n : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function Ro(s, t) {
  let e = t.startContainer, i = t.startOffset, n = t.endContainer, r = t.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor);
  return oi(o.node, o.offset, n, r) && ([e, i, n, r] = [n, r, e, i]), { anchorNode: e, anchorOffset: i, focusNode: n, focusOffset: r };
}
function tu(s, t) {
  if (t.getComposedRanges) {
    let n = t.getComposedRanges(s.root)[0];
    if (n)
      return Ro(s, n);
  }
  let e = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), e = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), e ? Ro(s, e) : null;
}
class eu {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({
      text: t.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(t.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let { anchor: n } = t.state.selection.main, r = this.toEditorPos(i.updateRangeStart), o = this.toEditorPos(i.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: r, drifted: !1 });
      let l = { from: r, to: o, insert: q.of(i.text.split(`
`)) };
      if (l.from == this.from && n < this.from ? l.from = n : l.to == this.to && n > this.to && (l.to = n), !(l.from == l.to && !l.insert.length)) {
        if (this.pendingContextChange = l, !t.state.readOnly) {
          let a = this.to - this.from + (l.to - l.from + l.insert.length);
          yr(t, l, S.single(this.toEditorPos(i.selectionStart, a), this.toEditorPos(i.selectionEnd, a)));
        }
        this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state));
      }
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = t.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), n.push(r);
      }
      e.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(r.rangeStart), f = this.toEditorPos(r.rangeEnd);
          if (a < f) {
            let h = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            n.push(M.mark({ attributes: { style: h } }).range(a, f));
          }
        }
      }
      t.dispatch({ effects: xa.of(M.set(n)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(t.state);
      }
    };
    for (let i in this.handlers)
      e.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let n = gi(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, i = !1, n = this.pendingContextChange;
    return t.changes.iterChanges((r, o, l, a, f) => {
      if (i)
        return;
      let h = f.length - (o - r);
      if (n && o >= n.to)
        if (n.from == r && n.to == o && n.insert.eq(f)) {
          n = this.pendingContextChange = null, e += h, this.to += h;
          return;
        } else
          n = null, this.revertPending(t.state);
      if (r += e, o += e, o <= this.from)
        this.from += h, this.to += h;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + f.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), f.toString()), this.to += h;
      }
      e += h;
    }), n && !i && this.revertPending(t.state), !i;
  }
  update(t) {
    let e = this.pendingContextChange;
    this.composing && (this.composing.drifted || t.transactions.some((i) => !i.isUserEvent("input.type") && i.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(0, e - 1e4), this.to = Math.min(t.doc.length, e + 1e4);
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), n = this.toContextPos(e.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (t - i.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers)
      this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class A {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: i } = t;
    this.dispatchTransactions = t.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = t.root || Bf(t.parent) || document, this.viewState = new Co(t.state || B.create(t)), t.scrollTo && t.scrollTo.is($i) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ti).map((n) => new jn(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Jc(this), this.inputState = new wc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new lo(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof H ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = !1, i = !1, n, r = this.state;
    for (let u of t) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    t.some((u) => u.annotation(qa)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = $a(r, o), a || (l = 1));
    let f = this.observer.delayedAndroidKey, h = null;
    if (f ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(B.phrases) != this.state.facet(B.phrases))
      return this.setState(r);
    n = pn.create(this, r, t), n.flags |= l;
    let c = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of t) {
        if (c && (c = c.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          c = new Be(d.empty ? d : S.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is($i) && (c = d.value.clip(this.state));
      }
      this.viewState.update(n, c), this.bidiCache = mn.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), e = this.docView.update(n), this.state.facet(ei) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Ni) != n.state.facet(Ni) && (this.viewState.mustMeasureContent = !0), (e || i || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(Ns))
        try {
          u(n);
        } catch (d) {
          Tt(this.state, d, "update listener");
        }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !Pa(this, h) && f.force && $e(this.contentDOM, f.key, f.keyCode);
    });
  }
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Co(t), this.plugins = t.facet(ti).map((i) => new jn(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new lo(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(ti), i = t.state.facet(ti);
    if (e != i) {
      let n = [];
      for (let r of i) {
        let o = e.indexOf(r);
        if (o < 0)
          n.push(new jn(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = t, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != t && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = t;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    e != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate)
        try {
          e.docViewUpdate(this);
        } catch (i) {
          Tt(this.state, i, "doc view update listener");
        }
    }
  }
  measure(t = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, i = this.scrollDOM, n = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Zl(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let f = [];
        a & 4 || ([this.measureRequests, f] = [f, this.measureRequests]);
        let h = f.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Tt(this.state, p), Mo;
          }
        }), c = pn.create(this, this.state, []), u = !1;
        c.flags |= a, e ? e.flags |= a : e = c, this.updateState = 2, c.empty || (this.updatePlugins(c), this.inputState.update(c), this.updateAttrs(), u = this.docView.update(c), u && this.docViewUpdate());
        for (let d = 0; d < f.length; d++)
          if (h[d] != Mo)
            try {
              let p = f[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              Tt(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !c.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                n = n + p, i.scrollTop = n / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let l of this.state.facet(Ns))
        l(e);
  }
  get themeClasses() {
    return _s + " " + (this.state.facet(Fs) ? La : Wa) + " " + this.state.facet(Ni);
  }
  updateAttrs() {
    let t = Do(this, ka, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(te) ? "true" : "false",
      class: "cm-content",
      style: `${T.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), Do(this, gr, e);
    let i = this.observer.ignore(() => {
      let n = Bs(this.contentDOM, this.contentAttrs, e), r = Bs(this.dom, this.editorAttrs, t);
      return n || r;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let i of t)
      for (let n of i.effects)
        if (n.is(A.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(ei);
    let t = this.state.facet(A.cspNonce);
    fe.mount(this.root, this.styleModules.concat(Yc).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.spec == t) || null), e && e.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t, e, i) {
    return Hn(this, t, uo(this, t, e, i));
  }
  moveByGroup(t, e) {
    return Hn(this, t, uo(this, t, e, (i) => pc(this, t.head, i)));
  }
  visualLineSide(t, e) {
    let i = this.bidiSpans(t), n = this.textDirectionAt(t.from), r = i[e ? i.length - 1 : 0];
    return S.cursor(r.side(e, n) + t.from, r.forward(!e, n) ? 1 : -1);
  }
  moveToLineBoundary(t, e, i = !0) {
    return dc(this, t, e, i);
  }
  moveVertically(t, e, i) {
    return Hn(this, t, gc(this, t, e, i));
  }
  domAtPos(t) {
    return this.docView.domAtPos(t);
  }
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = !0) {
    return this.readMeasured(), Ca(this, t, e);
  }
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(t, e);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(t), r = this.bidiSpans(n), o = r[he.find(r, t - n.from, -1, e)];
    return Mn(i, o.dir == j.LTR == e > 0);
  }
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(t) {
    return !this.state.facet(Sa) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t) {
    if (t.length > iu)
      return ca(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let r of this.bidiCache)
      if (r.from == t.from && r.dir == e && (r.fresh || fa(r.isolates, i = oo(this, t))))
        return r.order;
    i || (i = oo(this, t));
    let n = Hf(t.text, e, i);
    return this.bidiCache.push(new mn(t.from, t.to, e, i, !0, n)), n;
  }
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || T.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      Gl(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  static scrollIntoView(t, e = {}) {
    return $i.of(new Be(typeof t == "number" ? S.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
    return $i.of(new Be(S.cursor(i.from), "start", "start", i.top - t, e, !0));
  }
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  static domEventHandlers(t) {
    return At.define(() => ({}), { eventHandlers: t });
  }
  static domEventObservers(t) {
    return At.define(() => ({}), { eventObservers: t });
  }
  static theme(t, e) {
    let i = fe.newName(), n = [Ni.of(i), ei.of(Us(`.${i}`, t))];
    return e && e.dark && n.push(Fs.of(!0)), n;
  }
  static baseTheme(t) {
    return Pn.lowest(ei.of(Us("." + _s, t, Va)));
  }
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), n = i && V.get(i) || V.get(t);
    return ((e = n == null ? void 0 : n.rootView) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
A.styleModule = ei;
A.inputHandler = Oa;
A.clipboardInputFilter = dr;
A.clipboardOutputFilter = pr;
A.scrollHandler = ba;
A.focusChangeEffect = ya;
A.perLineTextDirection = Sa;
A.exceptionSink = ma;
A.updateListener = Ns;
A.editable = te;
A.mouseSelectionStyle = ga;
A.dragMovesSelection = pa;
A.clickAddsSelectionRange = da;
A.decorations = Oi;
A.outerDecorations = wa;
A.atomicRanges = mr;
A.bidiIsolatedRanges = va;
A.scrollMargins = Ta;
A.darkTheme = Fs;
A.cspNonce = /* @__PURE__ */ P.define({ combine: (s) => s.length ? s[0] : "" });
A.contentAttributes = gr;
A.editorAttributes = ka;
A.lineWrapping = /* @__PURE__ */ A.contentAttributes.of({ class: "cm-lineWrapping" });
A.announce = /* @__PURE__ */ W.define();
const iu = 4096, Mo = {};
class mn {
  constructor(t, e, i, n, r, o) {
    this.from = t, this.to = e, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(t, e) {
    if (e.empty && !t.some((r) => r.fresh))
      return t;
    let i = [], n = t.length ? t[t.length - 1].dir : j.LTR;
    for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
      let o = t[r];
      o.dir == n && !e.touchesRange(o.from, o.to) && i.push(new mn(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function Do(s, t, e) {
  for (let i = s.state.facet(t), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && $s(o, e);
  }
  return e;
}
const nu = T.mac ? "mac" : T.windows ? "win" : T.linux ? "linux" : "key";
function su(s, t) {
  const e = s.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, l;
  for (let a = 0; a < e.length - 1; ++a) {
    const f = e[a];
    if (/^(cmd|meta|m)$/i.test(f))
      l = !0;
    else if (/^a(lt)?$/i.test(f))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(f))
      r = !0;
    else if (/^s(hift)?$/i.test(f))
      o = !0;
    else if (/^mod$/i.test(f))
      t == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + f);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Ii(s, t, e) {
  return t.altKey && (s = "Alt-" + s), t.ctrlKey && (s = "Ctrl-" + s), t.metaKey && (s = "Meta-" + s), e !== !1 && t.shiftKey && (s = "Shift-" + s), s;
}
const ru = /* @__PURE__ */ Pn.default(/* @__PURE__ */ A.domEventHandlers({
  keydown(s, t) {
    return hu(ou(t.state), s, t, "editor");
  }
})), xr = /* @__PURE__ */ P.define({ enables: ru }), Eo = /* @__PURE__ */ new WeakMap();
function ou(s) {
  let t = s.facet(xr), e = Eo.get(t);
  return e || Eo.set(t, e = au(t.reduce((i, n) => i.concat(n), []))), e;
}
let le = null;
const lu = 4e3;
function au(s, t = nu) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, f, h) => {
    var c, u;
    let d = e[o] || (e[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((O) => su(O, t));
    for (let O = 1; O < p.length; O++) {
      let b = p.slice(0, O).join(" ");
      n(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(x) => {
          let k = le = { view: x, prefix: b, scope: o };
          return setTimeout(() => {
            le == k && (le = null);
          }, lu), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = d[g] || (d[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (c = d._any) === null || c === void 0 ? void 0 : c.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && m.run.push(a), f && (m.preventDefault = !0), h && (m.stopPropagation = !0);
  };
  for (let o of s) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let f of l) {
        let h = e[f] || (e[f] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: c } = o;
        for (let u in h)
          h[u].run.push((d) => c(d, js));
      }
    let a = o[t] || o.key;
    if (!!a)
      for (let f of l)
        r(f, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(f, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return e;
}
let js = null;
function hu(s, t, e, i) {
  js = t;
  let n = Mf(t), r = mt(n, 0), o = Wt(r) == n.length && n != " ", l = "", a = !1, f = !1, h = !1;
  le && le.view == e && le.scope == i && (l = le.prefix + " ", Ra.indexOf(t.keyCode) < 0 && (f = !0, le = null));
  let c = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let O of m.run)
        if (!c.has(O) && (c.add(O), O(e)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), f = !0);
    }
    return !1;
  }, d = s[i], p, g;
  return d && (u(d[l + Ii(n, t, !o)]) ? a = !0 : o && (t.altKey || t.metaKey || t.ctrlKey) && !(T.windows && t.ctrlKey && t.altKey) && (p = ce[t.keyCode]) && p != n ? (u(d[l + Ii(p, t, !0)]) || t.shiftKey && (g = pi[t.keyCode]) != n && g != p && u(d[l + Ii(g, t, !1)])) && (a = !0) : o && t.shiftKey && u(d[l + Ii(n, t, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), f && (a = !0), a && h && t.stopPropagation(), js = null, a;
}
const fu = !(T.ios && T.webkit && T.webkit_version < 534), qo = {
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" }
  },
  ".cm-content": {
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
};
fu && (qo[".cm-line"].caretColor = qo[".cm-content"].caretColor = "transparent !important");
function cu() {
  return du;
}
const uu = /* @__PURE__ */ M.line({ class: "cm-activeLine" }), du = /* @__PURE__ */ At.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.docChanged || s.selectionSet) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let t = -1, e = [];
    for (let i of s.state.selection.ranges) {
      let n = s.lineBlockAt(i.head);
      n.from > t && (e.push(uu.range(n.from)), t = n.from);
    }
    return M.set(e);
  }
}, {
  decorations: (s) => s.decorations
}), Ze = "-10000px";
class pu {
  constructor(t, e, i, n) {
    this.facet = e, this.createTooltipView = i, this.removeTooltipView = n, this.input = t.state.facet(e), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(t, e) {
    var i;
    let n = t.state.facet(this.facet), r = n.filter((a) => a);
    if (n === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(t);
      return !1;
    }
    let o = [], l = e ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let f = r[a], h = -1;
      if (!!f) {
        for (let c = 0; c < this.tooltips.length; c++) {
          let u = this.tooltips[c];
          u && u.create == f.create && (h = c);
        }
        if (h < 0)
          o[a] = this.createTooltipView(f, a ? o[a - 1] : null), l && (l[a] = !!f.above);
        else {
          let c = o[a] = this.tooltipViews[h];
          l && (l[a] = e[h]), c.update && c.update(t);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return e && (l.forEach((a, f) => e[f] = a), e.length = l.length), this.input = n, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function gu(s) {
  let { win: t } = s;
  return { top: 0, left: 0, bottom: t.innerHeight, right: t.innerWidth };
}
const Kn = /* @__PURE__ */ P.define({
  combine: (s) => {
    var t, e, i;
    return {
      position: T.ios ? "absolute" : ((t = s.find((n) => n.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = s.find((n) => n.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((i = s.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || gu
    };
  }
}), $o = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ At.fromClass(class {
  constructor(s) {
    this.view = s, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = s.state.facet(Kn);
    this.position = t.position, this.parent = t.parent, this.classes = s.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new pu(s, Ia, (e, i) => this.createTooltip(e, i), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s of this.manager.tooltipViews)
        this.intersectionObserver.observe(s.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s) {
    s.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(s, this.above);
    t && this.observeIntersection();
    let e = t || s.geometryChanged, i = s.state.facet(Kn);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      e = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      e = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(s, t) {
    let e = s.create(this.view), i = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), s.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", e.dom.appendChild(n);
    }
    return e.dom.style.position = this.position, e.dom.style.top = Ze, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var s, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (s = i.destroy) === null || s === void 0 || s.call(i);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s = 1, t = 1, e = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (T.gecko)
        e = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == Ze && r.style.left == "0px") {
        let o = r.getBoundingClientRect();
        e = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (s = r.width / this.parent.offsetWidth, t = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: s, scaleY: t } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), n = Or(this.view);
    return {
      visible: {
        left: i.left + n.left,
        top: i.top + n.top,
        right: i.right - n.right,
        bottom: i.bottom - n.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Kn).tooltipSpace(this.view),
      scaleX: s,
      scaleY: t,
      makeAbsolute: e
    };
  }
  writeMeasure(s) {
    var t;
    if (s.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: e, space: i, scaleX: n, scaleY: r } = s, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], f = this.manager.tooltipViews[l], { dom: h } = f, c = s.pos[l], u = s.size[l];
      if (!c || a.clip !== !1 && (c.bottom <= Math.max(e.top, i.top) || c.top >= Math.min(e.bottom, i.bottom) || c.right < Math.max(e.left, i.left) - 0.1 || c.left > Math.min(e.right, i.right) + 0.1)) {
        h.style.top = Ze;
        continue;
      }
      let d = a.arrow ? f.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (t = $o.get(f)) !== null && t !== void 0 ? t : u.bottom - u.top, O = f.offset || Ou, b = this.view.textDirection == j.LTR, x = u.width > i.right - i.left ? b ? i.left : i.right - u.width : b ? Math.max(i.left, Math.min(c.left - (d ? 14 : 0) + O.x, i.right - g)) : Math.min(Math.max(i.left, c.left - g + (d ? 14 : 0) - O.x), i.right - g), k = this.above[l];
      !a.strictSide && (k ? c.top - m - p - O.y < i.top : c.bottom + m + p + O.y > i.bottom) && k == i.bottom - c.bottom > c.top - i.top && (k = this.above[l] = !k);
      let v = (k ? c.top - i.top : i.bottom - c.bottom) - p;
      if (v < m && f.resize !== !1) {
        if (v < this.view.defaultLineHeight) {
          h.style.top = Ze;
          continue;
        }
        $o.set(f, m), h.style.height = (m = v) / r + "px";
      } else
        h.style.height && (h.style.height = "");
      let Q = k ? c.top - m - p - O.y : c.bottom + p + O.y, C = x + g;
      if (f.overlap !== !0)
        for (let $ of o)
          $.left < C && $.right > x && $.top < Q + m && $.bottom > Q && (Q = k ? $.top - m - 2 - p : $.bottom + p + 2);
      if (this.position == "absolute" ? (h.style.top = (Q - s.parent.top) / r + "px", Bo(h, (x - s.parent.left) / n)) : (h.style.top = Q / r + "px", Bo(h, x / n)), d) {
        let $ = c.left + (b ? O.x : -O.x) - (x + 14 - 7);
        d.style.left = $ / n + "px";
      }
      f.overlap !== !0 && o.push({ left: x, top: Q, right: C, bottom: Q + m }), h.classList.toggle("cm-tooltip-above", k), h.classList.toggle("cm-tooltip-below", !k), f.positioned && f.positioned(s.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let s of this.manager.tooltipViews)
        s.dom.style.top = Ze;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function Bo(s, t) {
  let e = parseInt(s.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (s.style.left = t + "px");
}
const mu = /* @__PURE__ */ A.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: `${7}px`,
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: `${7}px solid transparent`,
      borderRight: `${7}px solid transparent`
    },
    ".cm-tooltip-above &": {
      bottom: `-${7}px`,
      "&:before": {
        borderTop: `${7}px solid #bbb`
      },
      "&:after": {
        borderTop: `${7}px solid #f5f5f5`,
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: `-${7}px`,
      "&:before": {
        borderBottom: `${7}px solid #bbb`
      },
      "&:after": {
        borderBottom: `${7}px solid #f5f5f5`,
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), Ou = { x: 0, y: 0 }, Ia = /* @__PURE__ */ P.define({
  enables: [Na, mu]
});
function yu(s, t) {
  let e = s.plugin(Na);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
class de extends ve {
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  eq(t) {
    return !1;
  }
  destroy(t) {
  }
}
de.prototype.elementClass = "";
de.prototype.toDOM = void 0;
de.prototype.mapMode = nt.TrackBefore;
de.prototype.startSide = de.prototype.endSide = -1;
de.prototype.point = !0;
const sn = /* @__PURE__ */ P.define(), Su = /* @__PURE__ */ P.define(), rn = /* @__PURE__ */ P.define(), Gs = /* @__PURE__ */ P.define({
  combine: (s) => s.some((t) => t)
});
function bu(s) {
  let t = [
    xu
  ];
  return s && s.fixed === !1 && t.push(Gs.of(!0)), t;
}
const xu = /* @__PURE__ */ At.fromClass(class {
  constructor(s) {
    this.view = s, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet(rn).map((t) => new Wo(s, t));
    for (let t of this.gutters)
      this.dom.appendChild(t.dom);
    this.fixed = !s.state.facet(Gs), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  update(s) {
    if (this.updateGutters(s)) {
      let t = this.prevViewport, e = s.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(i < (e.to - e.from) * 0.8);
    }
    s.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(Gs) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let t = this.dom.nextSibling;
    s && this.dom.remove();
    let e = z.iter(this.view.state.facet(sn), this.view.viewport.from), i = [], n = this.gutters.map((r) => new ku(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == bt.Text && o) {
            Hs(e, i, l.from);
            for (let a of n)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (r.type == bt.Text) {
        Hs(e, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of n)
          o.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && this.view.scrollDOM.insertBefore(this.dom, t);
  }
  updateGutters(s) {
    let t = s.startState.facet(rn), e = s.state.facet(rn), i = s.docChanged || s.heightChanged || s.viewportChanged || !z.eq(s.startState.facet(sn), s.state.facet(sn), s.view.viewport.from, s.view.viewport.to);
    if (t == e)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of e) {
        let o = t.indexOf(r);
        o < 0 ? n.push(new Wo(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove();
  }
}, {
  provide: (s) => A.scrollMargins.of((t) => {
    let e = t.plugin(s);
    return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == j.LTR ? { left: e.dom.offsetWidth * t.scaleX } : { right: e.dom.offsetWidth * t.scaleX };
  })
});
function zo(s) {
  return Array.isArray(s) ? s : [s];
}
function Hs(s, t, e) {
  for (; s.value && s.from <= e; )
    s.from == e && t.push(s.value), s.next();
}
class ku {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = z.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: n } = this, r = (e.top - this.height) / t.scaleY, o = e.height / t.scaleY;
    if (this.i == n.elements.length) {
      let l = new Xa(t, o, r, i);
      n.elements.push(l), n.dom.appendChild(l.dom);
    } else
      n.elements[this.i].update(t, o, r, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let n = [];
    Hs(this.cursor, n, e.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(t, e, n);
    r && n.unshift(r);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, n);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e), n = i ? [i] : null;
    for (let r of t.state.facet(Su)) {
      let o = r(t, e.widget, e);
      o && (n || (n = [])).push(o);
    }
    n && this.addElement(t, e, n);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class Wo {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = n.clientY;
        let l = t.lineBlockAtHeight(o - t.documentTop);
        e.domEventHandlers[i](t, l, n) && n.preventDefault();
      });
    this.markers = zo(e.markers(t)), e.initialSpacer && (this.spacer = new Xa(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = zo(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], t);
      n != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [n]);
    }
    let i = t.view.viewport;
    return !z.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class Xa {
  constructor(t, e, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, n);
  }
  update(t, e, i, n) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), wu(this.markers, n) || this.setMarkers(t, n);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < e.length ? e[r++] : null, f = !1;
      if (a) {
        let h = a.elementClass;
        h && (i += " " + h);
        for (let c = o; c < this.markers.length; c++)
          if (this.markers[c].compare(a)) {
            l = c, f = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(n);
          let c = n.nextSibling;
          n.remove(), n = c;
        }
      }
      if (!a)
        break;
      a.toDOM && (f ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(t), n)), f && o++;
    }
    this.dom.className = i, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function wu(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++)
    if (!s[e].compare(t[e]))
      return !1;
  return !0;
}
const vu = /* @__PURE__ */ P.define(), Tu = /* @__PURE__ */ P.define(), Me = /* @__PURE__ */ P.define({
  combine(s) {
    return wi(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let n in e) {
          let r = i[n], o = e[n];
          i[n] = r ? (l, a, f) => r(l, a, f) || o(l, a, f) : o;
        }
        return i;
      }
    });
  }
});
class Jn extends de {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ts(s, t) {
  return s.state.facet(Me).formatNumber(t, s.state);
}
const Qu = /* @__PURE__ */ rn.compute([Me], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(vu);
  },
  lineMarker(t, e, i) {
    return i.some((n) => n.toDOM) ? null : new Jn(ts(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: (t, e, i) => {
    for (let n of t.state.facet(Tu)) {
      let r = n(t, e, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (t) => t.startState.facet(Me) != t.state.facet(Me),
  initialSpacer(t) {
    return new Jn(ts(t, Lo(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let i = ts(e.view, Lo(e.view.state.doc.lines));
    return i == t.number ? t : new Jn(i);
  },
  domEventHandlers: s.facet(Me).domEventHandlers
}));
function Cu(s = {}) {
  return [
    Me.of(s),
    bu(),
    Qu
  ];
}
function Lo(s) {
  let t = 9;
  for (; t < s; )
    t = t * 10 + 9;
  return t;
}
const Pu = /* @__PURE__ */ new class extends de {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Au = /* @__PURE__ */ sn.compute(["selection"], (s) => {
  let t = [], e = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.head).from;
    n > e && (e = n, t.push(Pu.range(n)));
  }
  return z.of(t);
});
function Ru() {
  return Au;
}
const Fa = 1024;
let Mu = 0;
class es {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class D {
  constructor(t = {}) {
    this.id = Mu++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(t) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = dt.match(t)), (e) => {
      let i = t(e);
      return i === void 0 ? null : [this, i];
    };
  }
}
D.closedBy = new D({ deserialize: (s) => s.split(" ") });
D.openedBy = new D({ deserialize: (s) => s.split(" ") });
D.group = new D({ deserialize: (s) => s.split(" ") });
D.isolate = new D({ deserialize: (s) => {
  if (s && s != "rtl" && s != "ltr" && s != "auto")
    throw new RangeError("Invalid value for isolate: " + s);
  return s || "auto";
} });
D.contextHash = new D({ perNode: !0 });
D.lookAhead = new D({ perNode: !0 });
D.mounted = new D({ perNode: !0 });
class On {
  constructor(t, e, i) {
    this.tree = t, this.overlay = e, this.parser = i;
  }
  static get(t) {
    return t && t.props && t.props[D.mounted.id];
  }
}
const Du = /* @__PURE__ */ Object.create(null);
class dt {
  constructor(t, e, i, n = 0) {
    this.name = t, this.props = e, this.id = i, this.flags = n;
  }
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : Du, i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), n = new dt(t.name || "", e, t.id, i);
    if (t.props) {
      for (let r of t.props)
        if (Array.isArray(r) || (r = r(n)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[r[0].id] = r[1];
        }
    }
    return n;
  }
  prop(t) {
    return this.props[t.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(t) {
    if (typeof t == "string") {
      if (this.name == t)
        return !0;
      let e = this.prop(D.group);
      return e ? e.indexOf(t) > -1 : !1;
    }
    return this.id == t;
  }
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let i in t)
      for (let n of i.split(" "))
        e[n] = t[i];
    return (i) => {
      for (let n = i.prop(D.group), r = -1; r < (n ? n.length : 0); r++) {
        let o = e[r < 0 ? i.name : n[r]];
        if (o)
          return o;
      }
    };
  }
}
dt.none = new dt("", /* @__PURE__ */ Object.create(null), 0, 8);
class kr {
  constructor(t) {
    this.types = t;
    for (let e = 0; e < t.length; e++)
      if (t[e].id != e)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend(...t) {
    let e = [];
    for (let i of this.types) {
      let n = null;
      for (let r of t) {
        let o = r(i);
        o && (n || (n = Object.assign({}, i.props)), n[o[0].id] = o[1]);
      }
      e.push(n ? new dt(i.name, n, i.id, i.flags) : i);
    }
    return new kr(e);
  }
}
const Xi = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap();
var K;
(function(s) {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays";
})(K || (K = {}));
class Z {
  constructor(t, e, i, n, r) {
    if (this.type = t, this.children = e, this.positions = i, this.length = n, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let t = On.get(this);
    if (t && !t.overlay)
      return t.tree.toString();
    let e = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (e && (e += ","), e += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  cursor(t = 0) {
    return new Ys(this.topNode, t);
  }
  cursorAt(t, e = 0, i = 0) {
    let n = Xi.get(this) || this.topNode, r = new Ys(n);
    return r.moveTo(t, e), Xi.set(this, r._tree), r;
  }
  get topNode() {
    return new ut(this, 0, 0, null);
  }
  resolve(t, e = 0) {
    let i = yi(Xi.get(this) || this.topNode, t, e, !1);
    return Xi.set(this, i), i;
  }
  resolveInner(t, e = 0) {
    let i = yi(Vo.get(this) || this.topNode, t, e, !0);
    return Vo.set(this, i), i;
  }
  resolveStack(t, e = 0) {
    return $u(this, t, e);
  }
  iterate(t) {
    let { enter: e, leave: i, from: n = 0, to: r = this.length } = t, o = t.mode || 0, l = (o & K.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | K.IncludeAnonymous); ; ) {
      let f = !1;
      if (a.from <= r && a.to >= n && (!l && a.type.isAnonymous || e(a) !== !1)) {
        if (a.firstChild())
          continue;
        f = !0;
      }
      for (; f && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        f = !0;
      }
    }
  }
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  get propValues() {
    let t = [];
    if (this.props)
      for (let e in this.props)
        t.push([+e, this.props[e]]);
    return t;
  }
  balance(t = {}) {
    return this.children.length <= 8 ? this : Tr(dt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, i, n) => new Z(this.type, e, i, n, this.propValues), t.makeTree || ((e, i, n) => new Z(dt.none, e, i, n)));
  }
  static build(t) {
    return Bu(t);
  }
}
Z.empty = new Z(dt.none, [], [], 0);
class wr {
  constructor(t, e) {
    this.buffer = t, this.index = e;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new wr(this.buffer, this.index);
  }
}
class pe {
  constructor(t, e, i) {
    this.buffer = t, this.length = e, this.set = i;
  }
  get type() {
    return dt.none;
  }
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; )
      t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  childString(t) {
    let e = this.buffer[t], i = this.buffer[t + 3], n = this.set.types[e], r = n.name;
    if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), t += 4, i == t)
      return r;
    let o = [];
    for (; t < i; )
      o.push(this.childString(t)), t = this.buffer[t + 3];
    return r + "(" + o.join(",") + ")";
  }
  findChild(t, e, i, n, r) {
    let { buffer: o } = this, l = -1;
    for (let a = t; a != e && !(_a(r, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  slice(t, e, i) {
    let n = this.buffer, r = new Uint16Array(e - t), o = 0;
    for (let l = t, a = 0; l < e; ) {
      r[a++] = n[l++], r[a++] = n[l++] - i;
      let f = r[a++] = n[l++] - i;
      r[a++] = n[l++] - t, o = Math.max(o, f);
    }
    return new pe(r, o, this.set);
  }
}
function _a(s, t, e, i) {
  switch (s) {
    case -2:
      return e < t;
    case -1:
      return i >= t && e < t;
    case 0:
      return e < t && i > t;
    case 1:
      return e <= t && i > t;
    case 2:
      return i > t;
    case 4:
      return !0;
  }
}
function yi(s, t, e, i) {
  for (var n; s.from == s.to || (e < 1 ? s.from >= t : s.from > t) || (e > -1 ? s.to <= t : s.to < t); ) {
    let o = !i && s instanceof ut && s.index < 0 ? null : s.parent;
    if (!o)
      return s;
    s = o;
  }
  let r = i ? 0 : K.IgnoreOverlays;
  if (i)
    for (let o = s, l = o.parent; l; o = l, l = o.parent)
      o instanceof ut && o.index < 0 && ((n = l.enter(t, e, r)) === null || n === void 0 ? void 0 : n.from) != o.from && (s = l);
  for (; ; ) {
    let o = s.enter(t, e, r);
    if (!o)
      return s;
    s = o;
  }
}
class Ua {
  cursor(t = 0) {
    return new Ys(this, t);
  }
  getChild(t, e = null, i = null) {
    let n = No(this, t, e, i);
    return n.length ? n[0] : null;
  }
  getChildren(t, e = null, i = null) {
    return No(this, t, e, i);
  }
  resolve(t, e = 0) {
    return yi(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return yi(this, t, e, !0);
  }
  matchContext(t) {
    return Zs(this.parent, t);
  }
  enterUnfinishedNodesBefore(t) {
    let e = this.childBefore(t), i = this;
    for (; e; ) {
      let n = e.lastChild;
      if (!n || n.to != e.to)
        break;
      n.type.isError && n.from == n.to ? (i = e, e = n.prevSibling) : e = n;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class ut extends Ua {
  constructor(t, e, i, n) {
    super(), this._tree = t, this.from = e, this.index = i, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t, e, i, n, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, f = e > 0 ? l.length : -1; t != f; t += e) {
        let h = l[t], c = a[t] + o.from;
        if (!!_a(n, i, c, c + h.length)) {
          if (h instanceof pe) {
            if (r & K.ExcludeBuffers)
              continue;
            let u = h.findChild(0, h.buffer.length, e, i - c, n);
            if (u > -1)
              return new Nt(new Eu(o, h, t, c), null, u);
          } else if (r & K.IncludeAnonymous || !h.type.isAnonymous || vr(h)) {
            let u;
            if (!(r & K.IgnoreMounts) && (u = On.get(h)) && !u.overlay)
              return new ut(u.tree, c, t, o);
            let d = new ut(h, c, t, o);
            return r & K.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(e < 0 ? h.children.length - 1 : 0, e, i, n);
          }
        }
      }
      if (r & K.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? t = o.index + e : t = e < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(t) {
    return this.nextChild(0, 1, t, 2);
  }
  childBefore(t) {
    return this.nextChild(this._tree.children.length - 1, -1, t, -2);
  }
  enter(t, e, i = 0) {
    let n;
    if (!(i & K.IgnoreOverlays) && (n = On.get(this._tree)) && n.overlay) {
      let r = t - this.from;
      for (let { from: o, to: l } of n.overlay)
        if ((e > 0 ? o <= r : o < r) && (e < 0 ? l >= r : l > r))
          return new ut(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, i);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; )
      t = t._parent;
    return t;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function No(s, t, e, i) {
  let n = s.cursor(), r = [];
  if (!n.firstChild())
    return r;
  if (e != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(e), !n.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return r;
    if (n.type.is(t) && r.push(n.node), !n.nextSibling())
      return i == null ? r : [];
  }
}
function Zs(s, t, e = t.length - 1) {
  for (let i = s; e >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (t[e] && t[e] != i.name)
        return !1;
      e--;
    }
  }
  return !0;
}
class Eu {
  constructor(t, e, i, n) {
    this.parent = t, this.buffer = e, this.index = i, this.start = n;
  }
}
class Nt extends Ua {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, i) {
    super(), this.context = t, this._parent = e, this.index = i, this.type = t.buffer.set.types[t.buffer.buffer[i]];
  }
  child(t, e, i) {
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.context.start, i);
    return r < 0 ? null : new Nt(this.context, this, r);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(t) {
    return this.child(1, t, 2);
  }
  childBefore(t) {
    return this.child(-1, t, -2);
  }
  enter(t, e, i = 0) {
    if (i & K.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return r < 0 ? null : new Nt(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + t, t, 0, 4);
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Nt(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new Nt(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t = [], e = [], { buffer: i } = this.context, n = this.index + 4, r = i.buffer[this.index + 3];
    if (r > n) {
      let o = i.buffer[this.index + 1];
      t.push(i.slice(n, r, o)), e.push(0);
    }
    return new Z(this.type, t, e, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function ja(s) {
  if (!s.length)
    return null;
  let t = 0, e = s[0];
  for (let r = 1; r < s.length; r++) {
    let o = s[r];
    (o.from > e.from || o.to < e.to) && (e = o, t = r);
  }
  let i = e instanceof ut && e.index < 0 ? null : e.parent, n = s.slice();
  return i ? n[t] = i : n.splice(t, 1), new qu(n, e);
}
class qu {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return ja(this.heads);
  }
}
function $u(s, t, e) {
  let i = s.resolveInner(t, e), n = null;
  for (let r = i instanceof ut ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (n || (n = [i])).push(o.resolve(t, e)), r = o;
    } else {
      let o = On.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= t && o.overlay[o.overlay.length - 1].to >= t) {
        let l = new ut(o.tree, o.overlay[0].from + r.from, -1, r);
        (n || (n = [i])).push(yi(l, t, e, !1));
      }
    }
  return n ? ja(n) : i;
}
class Ys {
  get name() {
    return this.type.name;
  }
  constructor(t, e = 0) {
    if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof ut)
      this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let i = t._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0) : !1;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: i, buffer: n } = this.buffer;
    return this.type = e || n.set.types[n.buffer[t]], this.from = i + n.buffer[t + 1], this.to = i + n.buffer[t + 2], !0;
  }
  yield(t) {
    return t ? t instanceof ut ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(t, e, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
    let { buffer: n } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(t) {
    return this.enterChild(1, t, 2);
  }
  childBefore(t) {
    return this.enterChild(-1, t, -2);
  }
  enter(t, e, i = this.mode) {
    return this.buffer ? i & K.ExcludeBuffers ? !1 : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & K.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t = this.mode & K.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  sibling(t) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : !1;
    let { buffer: e } = this.buffer, i = this.stack.length - 1;
    if (t < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(e.findChild(n, this.index, -1, 0, 4));
    } else {
      let n = e.buffer[this.index + 3];
      if (n < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t) {
    let e, i, { buffer: n } = this;
    if (n) {
      if (t > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (n.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: e, parent: i } = n);
    } else
      ({ index: e, _parent: i } = this._tree);
    for (; i; { index: e, _parent: i } = i)
      if (e > -1)
        for (let r = e + t, o = t < 0 ? -1 : i._tree.children.length; r != o; r += t) {
          let l = i._tree.children[r];
          if (this.mode & K.IncludeAnonymous || l instanceof pe || !l.type.isAnonymous || vr(l))
            return !1;
        }
    return !0;
  }
  move(t, e) {
    if (e && this.enterChild(t, 0, 4))
      return !0;
    for (; ; ) {
      if (this.sibling(t))
        return !0;
      if (this.atLastNode(t) || !this.parent())
        return !1;
    }
  }
  next(t = !0) {
    return this.move(1, t);
  }
  prev(t = !0) {
    return this.move(-1, t);
  }
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
      ;
    for (; this.enterChild(1, t, e); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let t = this.bufferNode, e = null, i = 0;
    if (t && t.context == this.buffer) {
      t:
        for (let n = this.index, r = this.stack.length; r >= 0; ) {
          for (let o = t; o; o = o._parent)
            if (o.index == n) {
              if (n == this.index)
                return o;
              e = o, i = r + 1;
              break t;
            }
          n = this.stack[--r];
        }
    }
    for (let n = i; n < this.stack.length; n++)
      e = new Nt(this.buffer, e, this.stack[n]);
    return this.bufferNode = new Nt(this.buffer, e, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(t, e) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || t(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && e && e(this), n = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, n = !0;
      }
    }
  }
  matchContext(t) {
    if (!this.buffer)
      return Zs(this.node.parent, t);
    let { buffer: e } = this.buffer, { types: i } = e.set;
    for (let n = t.length - 1, r = this.stack.length - 1; n >= 0; r--) {
      if (r < 0)
        return Zs(this._tree, t, n);
      let o = i[e.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (t[n] && t[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function vr(s) {
  return s.children.some((t) => t instanceof pe || !t.type.isAnonymous || vr(t));
}
function Bu(s) {
  var t;
  let { buffer: e, nodeSet: i, maxBufferLength: n = Fa, reused: r = [], minRepeatType: o = i.types.length } = s, l = Array.isArray(e) ? new wr(e, e.length) : e, a = i.types, f = 0, h = 0;
  function c(v, Q, C, $, N, _) {
    let { id: E, start: R, end: X, size: F } = l, J = h, se = f;
    for (; F < 0; )
      if (l.next(), F == -1) {
        let jt = r[E];
        C.push(jt), $.push(R - v);
        return;
      } else if (F == -3) {
        f = E;
        return;
      } else if (F == -4) {
        h = E;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${F}`);
    let je = a[E], Ri, me, Lr = R - v;
    if (X - R <= n && (me = m(l.pos - Q, N))) {
      let jt = new Uint16Array(me.size - me.skip), Ot = l.pos - me.size, Dt = jt.length;
      for (; l.pos > Ot; )
        Dt = O(me.start, jt, Dt);
      Ri = new pe(jt, X - me.start, i), Lr = me.start - v;
    } else {
      let jt = l.pos - F;
      l.next();
      let Ot = [], Dt = [], Oe = E >= o ? E : -1, Ae = 0, Mi = X;
      for (; l.pos > jt; )
        Oe >= 0 && l.id == Oe && l.size >= 0 ? (l.end <= Mi - n && (p(Ot, Dt, R, Ae, l.end, Mi, Oe, J, se), Ae = Ot.length, Mi = l.end), l.next()) : _ > 2500 ? u(R, jt, Ot, Dt) : c(R, jt, Ot, Dt, Oe, _ + 1);
      if (Oe >= 0 && Ae > 0 && Ae < Ot.length && p(Ot, Dt, R, Ae, R, Mi, Oe, J, se), Ot.reverse(), Dt.reverse(), Oe > -1 && Ae > 0) {
        let Vr = d(je, se);
        Ri = Tr(je, Ot, Dt, 0, Ot.length, 0, X - R, Vr, Vr);
      } else
        Ri = g(je, Ot, Dt, X - R, J - X, se);
    }
    C.push(Ri), $.push(Lr);
  }
  function u(v, Q, C, $) {
    let N = [], _ = 0, E = -1;
    for (; l.pos > Q; ) {
      let { id: R, start: X, end: F, size: J } = l;
      if (J > 4)
        l.next();
      else {
        if (E > -1 && X < E)
          break;
        E < 0 && (E = F - n), N.push(R, X, F), _++, l.next();
      }
    }
    if (_) {
      let R = new Uint16Array(_ * 4), X = N[N.length - 2];
      for (let F = N.length - 3, J = 0; F >= 0; F -= 3)
        R[J++] = N[F], R[J++] = N[F + 1] - X, R[J++] = N[F + 2] - X, R[J++] = J;
      C.push(new pe(R, N[2] - X, i)), $.push(X - v);
    }
  }
  function d(v, Q) {
    return (C, $, N) => {
      let _ = 0, E = C.length - 1, R, X;
      if (E >= 0 && (R = C[E]) instanceof Z) {
        if (!E && R.type == v && R.length == N)
          return R;
        (X = R.prop(D.lookAhead)) && (_ = $[E] + R.length + X);
      }
      return g(v, C, $, N, _, Q);
    };
  }
  function p(v, Q, C, $, N, _, E, R, X) {
    let F = [], J = [];
    for (; v.length > $; )
      F.push(v.pop()), J.push(Q.pop() + C - N);
    v.push(g(i.types[E], F, J, _ - N, R - _, X)), Q.push(N - C);
  }
  function g(v, Q, C, $, N, _, E) {
    if (_) {
      let R = [D.contextHash, _];
      E = E ? [R].concat(E) : [R];
    }
    if (N > 25) {
      let R = [D.lookAhead, N];
      E = E ? [R].concat(E) : [R];
    }
    return new Z(v, Q, C, $, E);
  }
  function m(v, Q) {
    let C = l.fork(), $ = 0, N = 0, _ = 0, E = C.end - n, R = { size: 0, start: 0, skip: 0 };
    t:
      for (let X = C.pos - v; C.pos > X; ) {
        let F = C.size;
        if (C.id == Q && F >= 0) {
          R.size = $, R.start = N, R.skip = _, _ += 4, $ += 4, C.next();
          continue;
        }
        let J = C.pos - F;
        if (F < 0 || J < X || C.start < E)
          break;
        let se = C.id >= o ? 4 : 0, je = C.start;
        for (C.next(); C.pos > J; ) {
          if (C.size < 0)
            if (C.size == -3)
              se += 4;
            else
              break t;
          else
            C.id >= o && (se += 4);
          C.next();
        }
        N = je, $ += F, _ += se;
      }
    return (Q < 0 || $ == v) && (R.size = $, R.start = N, R.skip = _), R.size > 4 ? R : void 0;
  }
  function O(v, Q, C) {
    let { id: $, start: N, end: _, size: E } = l;
    if (l.next(), E >= 0 && $ < o) {
      let R = C;
      if (E > 4) {
        let X = l.pos - (E - 4);
        for (; l.pos > X; )
          C = O(v, Q, C);
      }
      Q[--C] = R, Q[--C] = _ - v, Q[--C] = N - v, Q[--C] = $;
    } else
      E == -3 ? f = $ : E == -4 && (h = $);
    return C;
  }
  let b = [], x = [];
  for (; l.pos > 0; )
    c(s.start || 0, s.bufferStart || 0, b, x, -1, 0);
  let k = (t = s.length) !== null && t !== void 0 ? t : b.length ? x[0] + b[0].length : 0;
  return new Z(a[s.topID], b.reverse(), x.reverse(), k);
}
const Io = /* @__PURE__ */ new WeakMap();
function on(s, t) {
  if (!s.isAnonymous || t instanceof pe || t.type != s)
    return 1;
  let e = Io.get(t);
  if (e == null) {
    e = 1;
    for (let i of t.children) {
      if (i.type != s || !(i instanceof Z)) {
        e = 1;
        break;
      }
      e += on(s, i);
    }
    Io.set(t, e);
  }
  return e;
}
function Tr(s, t, e, i, n, r, o, l, a) {
  let f = 0;
  for (let p = i; p < n; p++)
    f += on(s, t[p]);
  let h = Math.ceil(f * 1.5 / 8), c = [], u = [];
  function d(p, g, m, O, b) {
    for (let x = m; x < O; ) {
      let k = x, v = g[x], Q = on(s, p[x]);
      for (x++; x < O; x++) {
        let C = on(s, p[x]);
        if (Q + C >= h)
          break;
        Q += C;
      }
      if (x == k + 1) {
        if (Q > h) {
          let C = p[k];
          d(C.children, C.positions, 0, C.children.length, g[k] + b);
          continue;
        }
        c.push(p[k]);
      } else {
        let C = g[x - 1] + p[x - 1].length - v;
        c.push(Tr(s, p, g, k, x, v, C, null, a));
      }
      u.push(v + b - r);
    }
  }
  return d(t, e, i, n, 0), (l || a)(c, u, o);
}
class zu {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(t, e, i) {
    let n = this.map.get(t);
    n || this.map.set(t, n = /* @__PURE__ */ new Map()), n.set(e, i);
  }
  getBuffer(t, e) {
    let i = this.map.get(t);
    return i && i.get(e);
  }
  set(t, e) {
    t instanceof Nt ? this.setBuffer(t.context.buffer, t.index, e) : t instanceof ut && this.map.set(t.tree, e);
  }
  get(t) {
    return t instanceof Nt ? this.getBuffer(t.context.buffer, t.index) : t instanceof ut ? this.map.get(t.tree) : void 0;
  }
  cursorSet(t, e) {
    t.buffer ? this.setBuffer(t.buffer.buffer, t.index, e) : this.map.set(t.tree, e);
  }
  cursorGet(t) {
    return t.buffer ? this.getBuffer(t.buffer.buffer, t.index) : this.map.get(t.tree);
  }
}
class we {
  constructor(t, e, i, n, r = !1, o = !1) {
    this.from = t, this.to = e, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(t, e = [], i = !1) {
    let n = [new we(0, t.length, t, 0, !1, i)];
    for (let r of e)
      r.to > t.length && n.push(r);
    return n;
  }
  static applyChanges(t, e, i = 128) {
    if (!e.length)
      return t;
    let n = [], r = 1, o = t.length ? t[0] : null;
    for (let l = 0, a = 0, f = 0; ; l++) {
      let h = l < e.length ? e[l] : null, c = h ? h.fromA : 1e9;
      if (c - a >= i)
        for (; o && o.from < c; ) {
          let u = o;
          if (a >= u.from || c <= u.to || f) {
            let d = Math.max(u.from, a) - f, p = Math.min(u.to, c) - f;
            u = d >= p ? null : new we(d, p, u.tree, u.offset + f, l > 0, !!h);
          }
          if (u && n.push(u), o.to > c)
            break;
          o = r < t.length ? t[r++] : null;
        }
      if (!h)
        break;
      a = h.toA, f = h.toA - h.toB;
    }
    return n;
  }
}
class Ga {
  startParse(t, e, i) {
    return typeof t == "string" && (t = new Wu(t)), i = i ? i.length ? i.map((n) => new es(n.from, n.to)) : [new es(0, 0)] : [new es(0, t.length)], this.createParse(t, e || [], i);
  }
  parse(t, e, i) {
    let n = this.startParse(t, e, i);
    for (; ; ) {
      let r = n.advance();
      if (r)
        return r;
    }
  }
}
class Wu {
  constructor(t) {
    this.string = t;
  }
  get length() {
    return this.string.length;
  }
  chunk(t) {
    return this.string.slice(t);
  }
  get lineChunks() {
    return !1;
  }
  read(t, e) {
    return this.string.slice(t, e);
  }
}
new D({ perNode: !0 });
let Lu = 0;
class yt {
  constructor(t, e, i, n) {
    this.name = t, this.set = e, this.base = i, this.modified = n, this.id = Lu++;
  }
  toString() {
    let { name: t } = this;
    for (let e of this.modified)
      e.name && (t = `${e.name}(${t})`);
    return t;
  }
  static define(t, e) {
    let i = typeof t == "string" ? t : "?";
    if (t instanceof yt && (e = t), e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let n = new yt(i, [], null, []);
    if (n.set.push(n), e)
      for (let r of e.set)
        n.set.push(r);
    return n;
  }
  static defineModifier(t) {
    let e = new yn(t);
    return (i) => i.modified.indexOf(e) > -1 ? i : yn.get(i.base || i, i.modified.concat(e).sort((n, r) => n.id - r.id));
  }
}
let Vu = 0;
class yn {
  constructor(t) {
    this.name = t, this.instances = [], this.id = Vu++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let i = e[0].instances.find((l) => l.base == t && Nu(e, l.modified));
    if (i)
      return i;
    let n = [], r = new yt(t.name, n, t, e);
    for (let l of e)
      l.instances.push(r);
    let o = Iu(e);
    for (let l of t.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(yn.get(l, a));
    return r;
  }
}
function Nu(s, t) {
  return s.length == t.length && s.every((e, i) => e == t[i]);
}
function Iu(s) {
  let t = [[]];
  for (let e = 0; e < s.length; e++)
    for (let i = 0, n = t.length; i < n; i++)
      t.push(t[i].concat(s[e]));
  return t.sort((e, i) => i.length - e.length);
}
function Ha(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in s) {
    let i = s[e];
    Array.isArray(i) || (i = [i]);
    for (let n of e.split(" "))
      if (n) {
        let r = [], o = 2, l = n;
        for (let c = 0; ; ) {
          if (l == "..." && c > 0 && c + 3 == n.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + n);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), c += u[0].length, c == n.length)
            break;
          let d = n[c++];
          if (c == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(c);
        }
        let a = r.length - 1, f = r[a];
        if (!f)
          throw new RangeError("Invalid path: " + n);
        let h = new Sn(i, o, a > 0 ? r.slice(0, a) : null);
        t[f] = h.sort(t[f]);
      }
  }
  return Za.add(t);
}
const Za = new D();
class Sn {
  constructor(t, e, i, n) {
    this.tags = t, this.mode = e, this.context = i, this.next = n;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Sn.empty = new Sn([], 2, null);
function Ya(s, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let r of s)
    if (!Array.isArray(r.tag))
      e[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        e[o.id] = r.class;
  let { scope: i, all: n = null } = t || {};
  return {
    style: (r) => {
      let o = n;
      for (let l of r)
        for (let a of l.set) {
          let f = e[a.id];
          if (f) {
            o = o ? o + " " + f : f;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function Xu(s, t) {
  let e = null;
  for (let i of s) {
    let n = i.style(t);
    n && (e = e ? e + " " + n : n);
  }
  return e;
}
function Fu(s, t, e, i = 0, n = s.length) {
  let r = new _u(i, Array.isArray(t) ? t : [t], e);
  r.highlightRange(s.cursor(), i, n, "", r.highlighters), r.flush(n);
}
class _u {
  constructor(t, e, i) {
    this.at = t, this.highlighters = e, this.span = i, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, i, n, r) {
    let { type: o, from: l, to: a } = t;
    if (l >= i || a <= e)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let f = n, h = Uu(t) || Sn.empty, c = Xu(r, h.tags);
    if (c && (f && (f += " "), f += c, h.mode == 1 && (n += (n ? " " : "") + c)), this.startSpan(Math.max(e, l), f), h.opaque)
      return;
    let u = t.tree && t.tree.prop(D.mounted);
    if (u && u.overlay) {
      let d = t.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)), g = t.firstChild();
      for (let m = 0, O = l; ; m++) {
        let b = m < u.overlay.length ? u.overlay[m] : null, x = b ? b.from + l : a, k = Math.max(e, O), v = Math.min(i, x);
        if (k < v && g)
          for (; t.from < v && (this.highlightRange(t, k, v, n, r), this.startSpan(Math.min(v, t.to), f), !(t.to >= x || !t.nextSibling())); )
            ;
        if (!b || x > i)
          break;
        O = b.to + l, O > e && (this.highlightRange(d.cursor(), Math.max(e, b.from + l), Math.min(i, O), "", p), this.startSpan(Math.min(i, O), f));
      }
      g && t.parent();
    } else if (t.firstChild()) {
      u && (n = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= i)
            break;
          this.highlightRange(t, e, i, n, r), this.startSpan(Math.min(i, t.to), f);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function Uu(s) {
  let t = s.type.prop(Za);
  for (; t && t.context && !s.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const w = yt.define, Fi = w(), re = w(), Xo = w(re), Fo = w(re), oe = w(), _i = w(oe), is = w(oe), Bt = w(), ye = w(Bt), qt = w(), $t = w(), Ks = w(), Ye = w(Ks), Ui = w(), y = {
  comment: Fi,
  lineComment: w(Fi),
  blockComment: w(Fi),
  docComment: w(Fi),
  name: re,
  variableName: w(re),
  typeName: Xo,
  tagName: w(Xo),
  propertyName: Fo,
  attributeName: w(Fo),
  className: w(re),
  labelName: w(re),
  namespace: w(re),
  macroName: w(re),
  literal: oe,
  string: _i,
  docString: w(_i),
  character: w(_i),
  attributeValue: w(_i),
  number: is,
  integer: w(is),
  float: w(is),
  bool: w(oe),
  regexp: w(oe),
  escape: w(oe),
  color: w(oe),
  url: w(oe),
  keyword: qt,
  self: w(qt),
  null: w(qt),
  atom: w(qt),
  unit: w(qt),
  modifier: w(qt),
  operatorKeyword: w(qt),
  controlKeyword: w(qt),
  definitionKeyword: w(qt),
  moduleKeyword: w(qt),
  operator: $t,
  derefOperator: w($t),
  arithmeticOperator: w($t),
  logicOperator: w($t),
  bitwiseOperator: w($t),
  compareOperator: w($t),
  updateOperator: w($t),
  definitionOperator: w($t),
  typeOperator: w($t),
  controlOperator: w($t),
  punctuation: Ks,
  separator: w(Ks),
  bracket: Ye,
  angleBracket: w(Ye),
  squareBracket: w(Ye),
  paren: w(Ye),
  brace: w(Ye),
  content: Bt,
  heading: ye,
  heading1: w(ye),
  heading2: w(ye),
  heading3: w(ye),
  heading4: w(ye),
  heading5: w(ye),
  heading6: w(ye),
  contentSeparator: w(Bt),
  list: w(Bt),
  quote: w(Bt),
  emphasis: w(Bt),
  strong: w(Bt),
  link: w(Bt),
  monospace: w(Bt),
  strikethrough: w(Bt),
  inserted: w(),
  deleted: w(),
  changed: w(),
  invalid: w(),
  meta: Ui,
  documentMeta: w(Ui),
  annotation: w(Ui),
  processingInstruction: w(Ui),
  definition: yt.defineModifier("definition"),
  constant: yt.defineModifier("constant"),
  function: yt.defineModifier("function"),
  standard: yt.defineModifier("standard"),
  local: yt.defineModifier("local"),
  special: yt.defineModifier("special")
};
for (let s in y) {
  let t = y[s];
  t instanceof yt && (t.name = s);
}
Ya([
  { tag: y.link, class: "tok-link" },
  { tag: y.heading, class: "tok-heading" },
  { tag: y.emphasis, class: "tok-emphasis" },
  { tag: y.strong, class: "tok-strong" },
  { tag: y.keyword, class: "tok-keyword" },
  { tag: y.atom, class: "tok-atom" },
  { tag: y.bool, class: "tok-bool" },
  { tag: y.url, class: "tok-url" },
  { tag: y.labelName, class: "tok-labelName" },
  { tag: y.inserted, class: "tok-inserted" },
  { tag: y.deleted, class: "tok-deleted" },
  { tag: y.literal, class: "tok-literal" },
  { tag: y.string, class: "tok-string" },
  { tag: y.number, class: "tok-number" },
  { tag: [y.regexp, y.escape, y.special(y.string)], class: "tok-string2" },
  { tag: y.variableName, class: "tok-variableName" },
  { tag: y.local(y.variableName), class: "tok-variableName tok-local" },
  { tag: y.definition(y.variableName), class: "tok-variableName tok-definition" },
  { tag: y.special(y.variableName), class: "tok-variableName2" },
  { tag: y.definition(y.propertyName), class: "tok-propertyName tok-definition" },
  { tag: y.typeName, class: "tok-typeName" },
  { tag: y.namespace, class: "tok-namespace" },
  { tag: y.className, class: "tok-className" },
  { tag: y.macroName, class: "tok-macroName" },
  { tag: y.propertyName, class: "tok-propertyName" },
  { tag: y.operator, class: "tok-operator" },
  { tag: y.comment, class: "tok-comment" },
  { tag: y.meta, class: "tok-meta" },
  { tag: y.invalid, class: "tok-invalid" },
  { tag: y.punctuation, class: "tok-punctuation" }
]);
var ns;
const De = /* @__PURE__ */ new D();
function ju(s) {
  return P.define({
    combine: s ? (t) => t.concat(s) : void 0
  });
}
const Gu = /* @__PURE__ */ new D();
class Qt {
  constructor(t, e, i = [], n = "") {
    this.data = t, this.name = n, B.prototype.hasOwnProperty("tree") || Object.defineProperty(B.prototype, "tree", { get() {
      return ht(this);
    } }), this.parser = e, this.extension = [
      Xe.of(this),
      B.languageData.of((r, o, l) => {
        let a = _o(r, o, l), f = a.type.prop(De);
        if (!f)
          return [];
        let h = r.facet(f), c = a.type.prop(Gu);
        if (c) {
          let u = a.resolve(o - a.from, l);
          for (let d of c)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(h);
            }
        }
        return h;
      })
    ].concat(i);
  }
  isActiveAt(t, e, i = -1) {
    return _o(t, e, i).type.prop(De) == this.data;
  }
  findRegions(t) {
    let e = t.facet(Xe);
    if ((e == null ? void 0 : e.data) == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let i = [], n = (r, o) => {
      if (r.prop(De) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(D.mounted);
      if (l) {
        if (l.tree.prop(De) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let f = r.children[a];
        f instanceof Z && n(f, r.positions[a] + o);
      }
    };
    return n(ht(t), 0), i;
  }
  get allowsNesting() {
    return !0;
  }
}
Qt.setState = /* @__PURE__ */ W.define();
function _o(s, t, e) {
  let i = s.facet(Xe), n = ht(s).topNode;
  if (!i || i.allowsNesting)
    for (let r = n; r; r = r.enter(t, e, K.ExcludeBuffers))
      r.type.isTop && (n = r);
  return n;
}
class bn extends Qt {
  constructor(t, e, i) {
    super(t, e, [], i), this.parser = e;
  }
  static define(t) {
    let e = ju(t.languageData);
    return new bn(e, t.parser.configure({
      props: [De.add((i) => i.isTop ? e : void 0)]
    }), t.name);
  }
  configure(t, e) {
    return new bn(this.data, this.parser.configure(t), e || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function ht(s) {
  let t = s.field(Qt.state, !1);
  return t ? t.tree : Z.empty;
}
class Hu {
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(t, e) {
    let i = this.cursorPos - this.string.length;
    return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i);
  }
}
let Ke = null;
class xn {
  constructor(t, e, i = [], n, r, o, l, a) {
    this.parser = t, this.state = e, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(t, e, i) {
    return new xn(t, e, [], Z.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Hu(this.state.doc), this.fragments);
  }
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != Z.empty && this.isDone(e != null ? e : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof t == "number") {
        let n = Date.now() + t;
        t = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(we.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (e != null ? e : this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (t())
          return !1;
      }
    });
  }
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(we.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(t) {
    let e = Ke;
    Ke = this;
    try {
      return t();
    } finally {
      Ke = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = Uo(t, e.from, e.to);
    return t;
  }
  changes(t, e) {
    let { fragments: i, tree: n, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !t.empty) {
      let a = [];
      if (t.iterChangedRanges((f, h, c, u) => a.push({ fromA: f, toA: h, fromB: c, toB: u })), i = we.applyChanges(i, a), n = Z.empty, r = 0, o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let f of this.skipped) {
          let h = t.mapPos(f.from, 1), c = t.mapPos(f.to, -1);
          h < c && l.push({ from: h, to: c });
        }
      }
    }
    return new xn(this.parser, e, i, n, r, o, l, this.scheduleOn);
  }
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return !1;
    this.viewport = t;
    let e = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: r } = this.skipped[i];
      n < t.to && r > t.from && (this.fragments = Uo(this.fragments, n, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= e ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  static getSkippingParser(t) {
    return new class extends Ga {
      createParse(e, i, n) {
        let r = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Ke;
            if (a) {
              for (let f of n)
                a.tempSkipped.push(f);
              t && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, t]) : t);
            }
            return this.parsedPos = o, new Z(dt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  static get() {
    return Ke;
  }
}
function Uo(s, t, e) {
  return we.applyChanges(s, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class Ie {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, i) || e.takeTree(), new Ie(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), i = xn.create(t.facet(Xe).parser, t, { from: 0, to: e });
    return i.work(20, e) || i.takeTree(), new Ie(i);
  }
}
Qt.state = /* @__PURE__ */ wt.define({
  create: Ie.init,
  update(s, t) {
    for (let e of t.effects)
      if (e.is(Qt.setState))
        return e.value;
    return t.startState.facet(Xe) != t.state.facet(Xe) ? Ie.init(t.state) : s.apply(t);
  }
});
let Ka = (s) => {
  let t = setTimeout(() => s(), 500);
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (Ka = (s) => {
  let t = -1, e = setTimeout(() => {
    t = requestIdleCallback(s, { timeout: 500 - 100 });
  }, 100);
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const ss = typeof navigator < "u" && ((ns = navigator.scheduling) === null || ns === void 0 ? void 0 : ns.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Zu = /* @__PURE__ */ At.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(Qt.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(Qt.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = Ka(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, r = i.field(Qt.state);
    if (r.tree == r.context.tree && r.context.isDone(n + 1e5))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, t && !ss ? Math.max(25, t.timeRemaining() - 5) : 1e9), l = r.context.treeLen < n && i.doc.length > n + 1e3, a = r.context.work(() => ss && ss() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Qt.setState.of(new Ie(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Tt(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), Xe = /* @__PURE__ */ P.define({
  combine(s) {
    return s.length ? s[0] : null;
  },
  enables: (s) => [
    Qt.state,
    Zu,
    A.contentAttributes.compute([s], (t) => {
      let e = t.facet(s);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
});
class Yu {
  constructor(t, e = []) {
    this.language = t, this.support = e, this.extension = [t, e];
  }
}
const Ku = /* @__PURE__ */ P.define(), Qi = /* @__PURE__ */ P.define({
  combine: (s) => {
    if (!s.length)
      return "  ";
    let t = s[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
    return t;
  }
});
function kn(s) {
  let t = s.facet(Qi);
  return t.charCodeAt(0) == 9 ? s.tabSize * t.length : t.length;
}
function Si(s, t) {
  let e = "", i = s.tabSize, n = s.facet(Qi)[0];
  if (n == "	") {
    for (; t >= i; )
      e += "	", t -= i;
    n = " ";
  }
  for (let r = 0; r < t; r++)
    e += n;
  return e;
}
function Qr(s, t) {
  s instanceof B && (s = new $n(s));
  for (let i of s.state.facet(Ku)) {
    let n = i(s, t);
    if (n !== void 0)
      return n;
  }
  let e = ht(s.state);
  return e.length >= t ? Ju(s, e, t) : null;
}
class $n {
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = kn(t);
  }
  lineAt(t, e = 1) {
    let i = this.state.doc.lineAt(t), { simulateBreak: n, simulateDoubleBreak: r } = this.options;
    return n != null && n >= i.from && n <= i.to ? r && n == t ? { text: "", from: t } : (e < 0 ? n < t : n <= t) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(t, e);
    return i.slice(t - n, Math.min(i.length, t + 100 - n));
  }
  column(t, e = 1) {
    let { text: i, from: n } = this.lineAt(t, e), r = this.countColumn(i, t - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  countColumn(t, e = t.length) {
    return Rn(t, this.state.tabSize, e);
  }
  lineIndent(t, e = 1) {
    let { text: i, from: n } = this.lineAt(t, e), r = this.options.overrideIndentation;
    if (r) {
      let o = r(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Ja = /* @__PURE__ */ new D();
function Ju(s, t, e) {
  let i = t.resolveStack(e), n = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (n != i.node) {
    let r = [];
    for (let o = n; o && !(o.from == i.node.from && o.type == i.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return th(i, s, e);
}
function th(s, t, e) {
  for (let i = s; i; i = i.next) {
    let n = ed(i.node);
    if (n)
      return n(Cr.create(t, e, i));
  }
  return 0;
}
function td(s) {
  return s.pos == s.options.simulateBreak && s.options.simulateDoubleBreak;
}
function ed(s) {
  let t = s.type.prop(Ja);
  if (t)
    return t;
  let e = s.firstChild, i;
  if (e && (i = e.type.prop(D.closedBy))) {
    let n = s.lastChild, r = n && i.indexOf(n.name) > -1;
    return (o) => eh(o, !0, 1, void 0, r && !td(o) ? n.from : void 0);
  }
  return s.parent == null ? id : null;
}
function id() {
  return 0;
}
class Cr extends $n {
  constructor(t, e, i) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(t, e, i) {
    return new Cr(t, e, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let i = t.resolve(e.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (nd(i, t))
        break;
      e = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(e.from);
  }
  continue() {
    return th(this.context.next, this.base, this.pos);
  }
}
function nd(s, t) {
  for (let e = t; e; e = e.parent)
    if (s == e)
      return !0;
  return !1;
}
function sd(s) {
  let t = s.node, e = t.childAfter(t.from), i = t.lastChild;
  if (!e)
    return null;
  let n = s.options.simulateBreak, r = s.state.doc.lineAt(e.from), o = n == null || n <= r.from ? r.to : Math.min(r.to, n);
  for (let l = e.to; ; ) {
    let a = t.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let f = /^ */.exec(r.text.slice(e.to - r.from))[0].length;
      return { from: e.from, to: e.to + f };
    }
    l = a.to;
  }
}
function rs({ closing: s, align: t = !0, units: e = 1 }) {
  return (i) => eh(i, t, e, s);
}
function eh(s, t, e, i, n) {
  let r = s.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || n == s.pos + o, a = t ? sd(s) : null;
  return a ? l ? s.column(a.from) : s.column(a.to) : s.baseIndent + (l ? 0 : s.unit * e);
}
const rd = 200;
function od() {
  return B.transactionFilter.of((s) => {
    if (!s.docChanged || !s.isUserEvent("input.type") && !s.isUserEvent("input.complete"))
      return s;
    let t = s.startState.languageDataAt("indentOnInput", s.startState.selection.main.head);
    if (!t.length)
      return s;
    let e = s.newDoc, { head: i } = s.newSelection.main, n = e.lineAt(i);
    if (i > n.from + rd)
      return s;
    let r = e.sliceString(n.from, i);
    if (!t.some((f) => f.test(r)))
      return s;
    let { state: o } = s, l = -1, a = [];
    for (let { head: f } of o.selection.ranges) {
      let h = o.doc.lineAt(f);
      if (h.from == l)
        continue;
      l = h.from;
      let c = Qr(o, h.from);
      if (c == null)
        continue;
      let u = /^\s*/.exec(h.text)[0], d = Si(o, c);
      u != d && a.push({ from: h.from, to: h.from + u.length, insert: d });
    }
    return a.length ? [s, { changes: a, sequential: !0 }] : s;
  });
}
const ld = /* @__PURE__ */ new D();
function ad(s) {
  let t = s.firstChild, e = s.lastChild;
  return t && t.to < e.from ? { from: t.to, to: e.type.isError ? s.to : e.from } : null;
}
class Ci {
  constructor(t, e) {
    this.specs = t;
    let i;
    function n(l) {
      let a = fe.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof e.all == "string" ? e.all : e.all ? n(e.all) : void 0, o = e.scope;
    this.scope = o instanceof Qt ? (l) => l.prop(De) == o.data : o ? (l) => l == o : void 0, this.style = Ya(t.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new fe(i) : null, this.themeType = e.themeType;
  }
  static define(t, e) {
    return new Ci(t, e || {});
  }
}
const Js = /* @__PURE__ */ P.define(), ih = /* @__PURE__ */ P.define({
  combine(s) {
    return s.length ? [s[0]] : null;
  }
});
function os(s) {
  let t = s.facet(Js);
  return t.length ? t : s.facet(ih);
}
function hd(s, t) {
  let e = [cd], i;
  return s instanceof Ci && (s.module && e.push(A.styleModule.of(s.module)), i = s.themeType), t != null && t.fallback ? e.push(ih.of(s)) : i ? e.push(Js.computeN([A.darkTheme], (n) => n.facet(A.darkTheme) == (i == "dark") ? [s] : [])) : e.push(Js.of(s)), e;
}
class fd {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = ht(t.state), this.decorations = this.buildDeco(t, os(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = ht(t.state), i = os(t.state), n = i != os(t.startState), { viewport: r } = t.view, o = t.changes.mapPos(this.decoratedTo, 1);
    e.length < r.to && !n && e.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = o) : (e != this.tree || t.viewportChanged || n) && (this.tree = e, this.decorations = this.buildDeco(t.view, i), this.decoratedTo = r.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return M.none;
    let i = new ui();
    for (let { from: n, to: r } of t.visibleRanges)
      Fu(this.tree, e, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = M.mark({ class: a })));
      }, n, r);
    return i.finish();
  }
}
const cd = /* @__PURE__ */ Pn.high(/* @__PURE__ */ At.fromClass(fd, {
  decorations: (s) => s.decorations
}));
y.meta, y.link, y.heading, y.emphasis, y.strong, y.strikethrough, y.keyword, y.atom, y.bool, y.url, y.contentSeparator, y.labelName, y.literal, y.inserted, y.string, y.deleted, y.regexp, y.escape, y.string, y.variableName, y.variableName, y.typeName, y.namespace, y.className, y.variableName, y.macroName, y.propertyName, y.comment, y.invalid;
const ud = /* @__PURE__ */ A.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), nh = 1e4, sh = "()[]{}", rh = /* @__PURE__ */ P.define({
  combine(s) {
    return wi(s, {
      afterCursor: !0,
      brackets: sh,
      maxScanDistance: nh,
      renderMatch: gd
    });
  }
}), dd = /* @__PURE__ */ M.mark({ class: "cm-matchingBracket" }), pd = /* @__PURE__ */ M.mark({ class: "cm-nonmatchingBracket" });
function gd(s) {
  let t = [], e = s.matched ? dd : pd;
  return t.push(e.range(s.start.from, s.start.to)), s.end && t.push(e.range(s.end.from, s.end.to)), t;
}
const md = /* @__PURE__ */ wt.define({
  create() {
    return M.none;
  },
  update(s, t) {
    if (!t.docChanged && !t.selection)
      return s;
    let e = [], i = t.state.facet(rh);
    for (let n of t.state.selection.ranges) {
      if (!n.empty)
        continue;
      let r = It(t.state, n.head, -1, i) || n.head > 0 && It(t.state, n.head - 1, 1, i) || i.afterCursor && (It(t.state, n.head, 1, i) || n.head < t.state.doc.length && It(t.state, n.head + 1, -1, i));
      r && (e = e.concat(i.renderMatch(r, t.state)));
    }
    return M.set(e, !0);
  },
  provide: (s) => A.decorations.from(s)
}), Od = [
  md,
  ud
];
function yd(s = {}) {
  return [rh.of(s), Od];
}
const Sd = /* @__PURE__ */ new D();
function tr(s, t, e) {
  let i = s.prop(t < 0 ? D.openedBy : D.closedBy);
  if (i)
    return i;
  if (s.name.length == 1) {
    let n = e.indexOf(s.name);
    if (n > -1 && n % 2 == (t < 0 ? 1 : 0))
      return [e[n + t]];
  }
  return null;
}
function er(s) {
  let t = s.type.prop(Sd);
  return t ? t(s.node) : s;
}
function It(s, t, e, i = {}) {
  let n = i.maxScanDistance || nh, r = i.brackets || sh, o = ht(s), l = o.resolveInner(t, e);
  for (let a = l; a; a = a.parent) {
    let f = tr(a.type, e, r);
    if (f && a.from < a.to) {
      let h = er(a);
      if (h && (e > 0 ? t >= h.from && t < h.to : t > h.from && t <= h.to))
        return bd(s, t, e, a, h, f, r);
    }
  }
  return xd(s, t, e, o, l.type, n, r);
}
function bd(s, t, e, i, n, r, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, f = 0, h = l == null ? void 0 : l.cursor();
  if (h && (e < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
    do
      if (e < 0 ? h.to <= i.from : h.from >= i.to) {
        if (f == 0 && r.indexOf(h.type.name) > -1 && h.from < h.to) {
          let c = er(h);
          return { start: a, end: c ? { from: c.from, to: c.to } : void 0, matched: !0 };
        } else if (tr(h.type, e, o))
          f++;
        else if (tr(h.type, -e, o)) {
          if (f == 0) {
            let c = er(h);
            return {
              start: a,
              end: c && c.from < c.to ? { from: c.from, to: c.to } : void 0,
              matched: !1
            };
          }
          f--;
        }
      }
    while (e < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function xd(s, t, e, i, n, r, o) {
  let l = e < 0 ? s.sliceDoc(t - 1, t) : s.sliceDoc(t, t + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != e > 0)
    return null;
  let f = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, h = s.doc.iterRange(t, e > 0 ? s.doc.length : 0), c = 0;
  for (let u = 0; !h.next().done && u <= r; ) {
    let d = h.value;
    e < 0 && (u += d.length);
    let p = t + u * e;
    for (let g = e > 0 ? 0 : d.length - 1, m = e > 0 ? d.length : -1; g != m; g += e) {
      let O = o.indexOf(d[g]);
      if (!(O < 0 || i.resolveInner(p + g, 1).type != n))
        if (O % 2 == 0 == e > 0)
          c++;
        else {
          if (c == 1)
            return { start: f, end: { from: p + g, to: p + g + 1 }, matched: O >> 1 == a >> 1 };
          c--;
        }
    }
    e > 0 && (u += d.length);
  }
  return h.done ? { start: f, matched: !1 } : null;
}
const kd = /* @__PURE__ */ Object.create(null), jo = [dt.none], Go = [], Ho = /* @__PURE__ */ Object.create(null), wd = /* @__PURE__ */ Object.create(null);
for (let [s, t] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  wd[s] = /* @__PURE__ */ vd(kd, t);
function ls(s, t) {
  Go.indexOf(s) > -1 || (Go.push(s), console.warn(t));
}
function vd(s, t) {
  let e = [];
  for (let l of t.split(" ")) {
    let a = [];
    for (let f of l.split(".")) {
      let h = s[f] || y[f];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : ls(f, `Modifier ${f} used at start of tag`) : a.length ? ls(f, `Tag ${f} used as modifier`) : a = Array.isArray(h) ? h : [h] : ls(f, `Unknown highlighting tag ${f}`);
    }
    for (let f of a)
      e.push(f);
  }
  if (!e.length)
    return 0;
  let i = t.replace(/ /g, "_"), n = i + " " + e.map((l) => l.id), r = Ho[n];
  if (r)
    return r.id;
  let o = Ho[n] = dt.define({
    id: jo.length,
    name: i,
    props: [Ha({ [i]: e })]
  });
  return jo.push(o), o.id;
}
j.RTL, j.LTR;
const Td = (s) => {
  let { state: t } = s, e = t.doc.lineAt(t.selection.main.from), i = Ar(s.state, e.from);
  return i.line ? Qd(s) : i.block ? Pd(s) : !1;
};
function Pr(s, t) {
  return ({ state: e, dispatch: i }) => {
    if (e.readOnly)
      return !1;
    let n = s(t, e);
    return n ? (i(e.update(n)), !0) : !1;
  };
}
const Qd = /* @__PURE__ */ Pr(Md, 0), Cd = /* @__PURE__ */ Pr(oh, 0), Pd = /* @__PURE__ */ Pr((s, t) => oh(s, t, Rd(t)), 0);
function Ar(s, t) {
  let e = s.languageDataAt("commentTokens", t);
  return e.length ? e[0] : {};
}
const Je = 50;
function Ad(s, { open: t, close: e }, i, n) {
  let r = s.sliceDoc(i - Je, i), o = s.sliceDoc(n, n + Je), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, f = r.length - l;
  if (r.slice(f - t.length, f) == t && o.slice(a, a + e.length) == e)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let h, c;
  n - i <= 2 * Je ? h = c = s.sliceDoc(i, n) : (h = s.sliceDoc(i, i + Je), c = s.sliceDoc(n - Je, n));
  let u = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(c)[0].length, p = c.length - d - e.length;
  return h.slice(u, u + t.length) == t && c.slice(p, p + e.length) == e ? {
    open: {
      pos: i + u + t.length,
      margin: /\s/.test(h.charAt(u + t.length)) ? 1 : 0
    },
    close: {
      pos: n - d - e.length,
      margin: /\s/.test(c.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function Rd(s) {
  let t = [];
  for (let e of s.selection.ranges) {
    let i = s.doc.lineAt(e.from), n = e.to <= i.to ? i : s.doc.lineAt(e.to);
    n.from > i.from && n.from == e.to && (n = e.to == i.to + 1 ? i : s.doc.lineAt(e.to - 1));
    let r = t.length - 1;
    r >= 0 && t[r].to > i.from ? t[r].to = n.to : t.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: n.to });
  }
  return t;
}
function oh(s, t, e = t.selection.ranges) {
  let i = e.map((r) => Ar(t, r.from).block);
  if (!i.every((r) => r))
    return null;
  let n = e.map((r, o) => Ad(t, i[o], r.from, r.to));
  if (s != 2 && !n.every((r) => r))
    return { changes: t.changes(e.map((r, o) => n[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (s != 1 && n.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < n.length; o++)
      if (l = n[o]) {
        let a = i[o], { open: f, close: h } = l;
        r.push({ from: f.pos - a.open.length, to: f.pos + f.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function Md(s, t, e = t.selection.ranges) {
  let i = [], n = -1;
  for (let { from: r, to: o } of e) {
    let l = i.length, a = 1e9, f = Ar(t, r).line;
    if (!!f) {
      for (let h = r; h <= o; ) {
        let c = t.doc.lineAt(h);
        if (c.from > n && (r == o || o > c.from)) {
          n = c.from;
          let u = /^\s*/.exec(c.text)[0].length, d = u == c.length, p = c.text.slice(u, u + f.length) == f ? u : -1;
          u < c.text.length && u < a && (a = u), i.push({ line: c, comment: p, token: f, indent: u, empty: d, single: !1 });
        }
        h = c.to + 1;
      }
      if (a < 1e9)
        for (let h = l; h < i.length; h++)
          i[h].indent < i[h].line.text.length && (i[h].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (s != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: f, empty: h, single: c } of i)
      (c || !h) && r.push({ from: l.from + f, insert: a + " " });
    let o = t.changes(r);
    return { changes: o, selection: t.selection.map(o, 1) };
  } else if (s != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let f = o.from + l, h = f + a.length;
        o.text[h - o.from] == " " && h++, r.push({ from: f, to: h });
      }
    return { changes: r };
  }
  return null;
}
const ir = /* @__PURE__ */ ne.define(), Dd = /* @__PURE__ */ ne.define(), Ed = /* @__PURE__ */ P.define(), lh = /* @__PURE__ */ P.define({
  combine(s) {
    return wi(s, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (t, e) => e
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (t, e) => (i, n) => t(i, n) || e(i, n)
    });
  }
}), ah = /* @__PURE__ */ wt.define({
  create() {
    return Xt.empty;
  },
  update(s, t) {
    let e = t.state.facet(lh), i = t.annotation(ir);
    if (i) {
      let a = ct.fromTransaction(t, i.selection), f = i.side, h = f == 0 ? s.undone : s.done;
      return a ? h = wn(h, h.length, e.minDepth, a) : h = ch(h, t.startState.selection), new Xt(f == 0 ? i.rest : h, f == 0 ? h : i.rest);
    }
    let n = t.annotation(Dd);
    if ((n == "full" || n == "before") && (s = s.isolate()), t.annotation(H.addToHistory) === !1)
      return t.changes.empty ? s : s.addMapping(t.changes.desc);
    let r = ct.fromTransaction(t), o = t.annotation(H.time), l = t.annotation(H.userEvent);
    return r ? s = s.addChanges(r, o, l, e, t) : t.selection && (s = s.addSelection(t.startState.selection, o, l, e.newGroupDelay)), (n == "full" || n == "after") && (s = s.isolate()), s;
  },
  toJSON(s) {
    return { done: s.done.map((t) => t.toJSON()), undone: s.undone.map((t) => t.toJSON()) };
  },
  fromJSON(s) {
    return new Xt(s.done.map(ct.fromJSON), s.undone.map(ct.fromJSON));
  }
});
function qd(s = {}) {
  return [
    ah,
    lh.of(s),
    A.domEventHandlers({
      beforeinput(t, e) {
        let i = t.inputType == "historyUndo" ? hh : t.inputType == "historyRedo" ? nr : null;
        return i ? (t.preventDefault(), i(e)) : !1;
      }
    })
  ];
}
function Bn(s, t) {
  return function({ state: e, dispatch: i }) {
    if (!t && e.readOnly)
      return !1;
    let n = e.field(ah, !1);
    if (!n)
      return !1;
    let r = n.pop(s, e, t);
    return r ? (i(r), !0) : !1;
  };
}
const hh = /* @__PURE__ */ Bn(0, !1), nr = /* @__PURE__ */ Bn(1, !1), $d = /* @__PURE__ */ Bn(0, !0), Bd = /* @__PURE__ */ Bn(1, !0);
class ct {
  constructor(t, e, i, n, r) {
    this.changes = t, this.effects = e, this.mapped = i, this.startSelection = n, this.selectionsAfter = r;
  }
  setSelAfter(t) {
    return new ct(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, e, i;
    return {
      changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
      mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((n) => n.toJSON())
    };
  }
  static fromJSON(t) {
    return new ct(t.changes && Y.fromJSON(t.changes), [], t.mapped && Ft.fromJSON(t.mapped), t.startSelection && S.fromJSON(t.startSelection), t.selectionsAfter.map(S.fromJSON));
  }
  static fromTransaction(t, e) {
    let i = St;
    for (let n of t.startState.facet(Ed)) {
      let r = n(t);
      r.length && (i = i.concat(r));
    }
    return !i.length && t.changes.empty ? null : new ct(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, St);
  }
  static selection(t) {
    return new ct(void 0, St, void 0, void 0, t);
  }
}
function wn(s, t, e, i) {
  let n = t + 1 > e + 20 ? t - e - 1 : 0, r = s.slice(n, t);
  return r.push(i), r;
}
function zd(s, t) {
  let e = [], i = !1;
  return s.iterChangedRanges((n, r) => e.push(n, r)), t.iterChangedRanges((n, r, o, l) => {
    for (let a = 0; a < e.length; ) {
      let f = e[a++], h = e[a++];
      l >= f && o <= h && (i = !0);
    }
  }), i;
}
function Wd(s, t) {
  return s.ranges.length == t.ranges.length && s.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0;
}
function fh(s, t) {
  return s.length ? t.length ? s.concat(t) : s : t;
}
const St = [], Ld = 200;
function ch(s, t) {
  if (s.length) {
    let e = s[s.length - 1], i = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - Ld));
    return i.length && i[i.length - 1].eq(t) ? s : (i.push(t), wn(s, s.length - 1, 1e9, e.setSelAfter(i)));
  } else
    return [ct.selection([t])];
}
function Vd(s) {
  let t = s[s.length - 1], e = s.slice();
  return e[s.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function as(s, t) {
  if (!s.length)
    return s;
  let e = s.length, i = St;
  for (; e; ) {
    let n = Nd(s[e - 1], t, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let r = s.slice(0, e);
      return r[e - 1] = n, r;
    } else
      t = n.mapped, e--, i = n.selectionsAfter;
  }
  return i.length ? [ct.selection(i)] : St;
}
function Nd(s, t, e) {
  let i = fh(s.selectionsAfter.length ? s.selectionsAfter.map((l) => l.map(t)) : St, e);
  if (!s.changes)
    return ct.selection(i);
  let n = s.changes.map(t), r = t.mapDesc(s.changes, !0), o = s.mapped ? s.mapped.composeDesc(r) : r;
  return new ct(n, W.mapEffects(s.effects, t), o, s.startSelection.map(r), i);
}
const Id = /^(input\.type|delete)($|\.)/;
class Xt {
  constructor(t, e, i = 0, n = void 0) {
    this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new Xt(this.done, this.undone) : this;
  }
  addChanges(t, e, i, n, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && t.changes && (!i || Id.test(i)) && (!l.selectionsAfter.length && e - this.prevTime < n.newGroupDelay && n.joinToEvent(r, zd(l.changes, t.changes)) || i == "input.type.compose") ? o = wn(o, o.length - 1, n.minDepth, new ct(t.changes.compose(l.changes), fh(W.mapEffects(t.effects, l.changes), l.effects), l.mapped, l.startSelection, St)) : o = wn(o, o.length, n.minDepth, t), new Xt(o, St, e, i);
  }
  addSelection(t, e, i, n) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : St;
    return r.length > 0 && e - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Wd(r[r.length - 1], t) ? this : new Xt(ch(this.done, t), this.undone, e, i);
  }
  addMapping(t) {
    return new Xt(as(this.done, t), as(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, i) {
    let n = t == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let r = n[n.length - 1], o = r.selectionsAfter[0] || e.selection;
    if (i && r.selectionsAfter.length)
      return e.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: ir.of({ side: t, rest: Vd(n), selection: o }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = n.length == 1 ? St : n.slice(0, n.length - 1);
      return r.mapped && (l = as(l, r.mapped)), e.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: ir.of({ side: t, rest: l, selection: o }),
        filter: !1,
        userEvent: t == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Xt.empty = /* @__PURE__ */ new Xt(St, St);
const Xd = [
  { key: "Mod-z", run: hh, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: nr, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: nr, preventDefault: !0 },
  { key: "Mod-u", run: $d, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Bd, preventDefault: !0 }
];
function Fe(s, t) {
  return S.create(s.ranges.map(t), s.mainIndex);
}
function Ut(s, t) {
  return s.update({ selection: t, scrollIntoView: !0, userEvent: "select" });
}
function Mt({ state: s, dispatch: t }, e) {
  let i = Fe(s.selection, e);
  return i.eq(s.selection, !0) ? !1 : (t(Ut(s, i)), !0);
}
function zn(s, t) {
  return S.cursor(t ? s.to : s.from);
}
function uh(s, t) {
  return Mt(s, (e) => e.empty ? s.moveByChar(e, t) : zn(e, t));
}
function ot(s) {
  return s.textDirectionAt(s.state.selection.main.head) == j.LTR;
}
const dh = (s) => uh(s, !ot(s)), ph = (s) => uh(s, ot(s));
function gh(s, t) {
  return Mt(s, (e) => e.empty ? s.moveByGroup(e, t) : zn(e, t));
}
const Fd = (s) => gh(s, !ot(s)), _d = (s) => gh(s, ot(s));
function Ud(s, t, e) {
  if (t.type.prop(e))
    return !0;
  let i = t.to - t.from;
  return i && (i > 2 || /[^\s,.;:]/.test(s.sliceDoc(t.from, t.to))) || t.firstChild;
}
function Wn(s, t, e) {
  let i = ht(s).resolveInner(t.head), n = e ? D.closedBy : D.openedBy;
  for (let a = t.head; ; ) {
    let f = e ? i.childAfter(a) : i.childBefore(a);
    if (!f)
      break;
    Ud(s, f, n) ? i = f : a = e ? f.to : f.from;
  }
  let r = i.type.prop(n), o, l;
  return r && (o = e ? It(s, i.from, 1) : It(s, i.to, -1)) && o.matched ? l = e ? o.end.to : o.end.from : l = e ? i.to : i.from, S.cursor(l, e ? -1 : 1);
}
const jd = (s) => Mt(s, (t) => Wn(s.state, t, !ot(s))), Gd = (s) => Mt(s, (t) => Wn(s.state, t, ot(s)));
function mh(s, t) {
  return Mt(s, (e) => {
    if (!e.empty)
      return zn(e, t);
    let i = s.moveVertically(e, t);
    return i.head != e.head ? i : s.moveToLineBoundary(e, t);
  });
}
const Oh = (s) => mh(s, !1), yh = (s) => mh(s, !0);
function Sh(s) {
  let t = s.scrollDOM.clientHeight < s.scrollDOM.scrollHeight - 2, e = 0, i = 0, n;
  if (t) {
    for (let r of s.state.facet(A.scrollMargins)) {
      let o = r(s);
      o != null && o.top && (e = Math.max(o == null ? void 0 : o.top, e)), o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    n = s.scrollDOM.clientHeight - e - i;
  } else
    n = (s.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: e,
    marginBottom: i,
    selfScroll: t,
    height: Math.max(s.defaultLineHeight, n - 5)
  };
}
function bh(s, t) {
  let e = Sh(s), { state: i } = s, n = Fe(i.selection, (o) => o.empty ? s.moveVertically(o, t, e.height) : zn(o, t));
  if (n.eq(i.selection))
    return !1;
  let r;
  if (e.selfScroll) {
    let o = s.coordsAtPos(i.selection.main.head), l = s.scrollDOM.getBoundingClientRect(), a = l.top + e.marginTop, f = l.bottom - e.marginBottom;
    o && o.top > a && o.bottom < f && (r = A.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return s.dispatch(Ut(i, n), { effects: r }), !0;
}
const Zo = (s) => bh(s, !1), sr = (s) => bh(s, !0);
function ge(s, t, e) {
  let i = s.lineBlockAt(t.head), n = s.moveToLineBoundary(t, e);
  if (n.head == t.head && n.head != (e ? i.to : i.from) && (n = s.moveToLineBoundary(t, e, !1)), !e && n.head == i.from && i.length) {
    let r = /^\s*/.exec(s.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && t.head != i.from + r && (n = S.cursor(i.from + r));
  }
  return n;
}
const Hd = (s) => Mt(s, (t) => ge(s, t, !0)), Zd = (s) => Mt(s, (t) => ge(s, t, !1)), Yd = (s) => Mt(s, (t) => ge(s, t, !ot(s))), Kd = (s) => Mt(s, (t) => ge(s, t, ot(s))), Jd = (s) => Mt(s, (t) => S.cursor(s.lineBlockAt(t.head).from, 1)), tp = (s) => Mt(s, (t) => S.cursor(s.lineBlockAt(t.head).to, -1));
function ep(s, t, e) {
  let i = !1, n = Fe(s.selection, (r) => {
    let o = It(s, r.head, -1) || It(s, r.head, 1) || r.head > 0 && It(s, r.head - 1, 1) || r.head < s.doc.length && It(s, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return e ? S.range(r.anchor, l) : S.cursor(l);
  });
  return i ? (t(Ut(s, n)), !0) : !1;
}
const ip = ({ state: s, dispatch: t }) => ep(s, t, !1);
function vt(s, t) {
  let e = Fe(s.state.selection, (i) => {
    let n = t(i);
    return S.range(i.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return e.eq(s.state.selection) ? !1 : (s.dispatch(Ut(s.state, e)), !0);
}
function xh(s, t) {
  return vt(s, (e) => s.moveByChar(e, t));
}
const kh = (s) => xh(s, !ot(s)), wh = (s) => xh(s, ot(s));
function vh(s, t) {
  return vt(s, (e) => s.moveByGroup(e, t));
}
const np = (s) => vh(s, !ot(s)), sp = (s) => vh(s, ot(s)), rp = (s) => vt(s, (t) => Wn(s.state, t, !ot(s))), op = (s) => vt(s, (t) => Wn(s.state, t, ot(s)));
function Th(s, t) {
  return vt(s, (e) => s.moveVertically(e, t));
}
const Qh = (s) => Th(s, !1), Ch = (s) => Th(s, !0);
function Ph(s, t) {
  return vt(s, (e) => s.moveVertically(e, t, Sh(s).height));
}
const Yo = (s) => Ph(s, !1), Ko = (s) => Ph(s, !0), lp = (s) => vt(s, (t) => ge(s, t, !0)), ap = (s) => vt(s, (t) => ge(s, t, !1)), hp = (s) => vt(s, (t) => ge(s, t, !ot(s))), fp = (s) => vt(s, (t) => ge(s, t, ot(s))), cp = (s) => vt(s, (t) => S.cursor(s.lineBlockAt(t.head).from)), up = (s) => vt(s, (t) => S.cursor(s.lineBlockAt(t.head).to)), Jo = ({ state: s, dispatch: t }) => (t(Ut(s, { anchor: 0 })), !0), tl = ({ state: s, dispatch: t }) => (t(Ut(s, { anchor: s.doc.length })), !0), el = ({ state: s, dispatch: t }) => (t(Ut(s, { anchor: s.selection.main.anchor, head: 0 })), !0), il = ({ state: s, dispatch: t }) => (t(Ut(s, { anchor: s.selection.main.anchor, head: s.doc.length })), !0), dp = ({ state: s, dispatch: t }) => (t(s.update({ selection: { anchor: 0, head: s.doc.length }, userEvent: "select" })), !0), pp = ({ state: s, dispatch: t }) => {
  let e = Ln(s).map(({ from: i, to: n }) => S.range(i, Math.min(n + 1, s.doc.length)));
  return t(s.update({ selection: S.create(e), userEvent: "select" })), !0;
}, gp = ({ state: s, dispatch: t }) => {
  let e = Fe(s.selection, (i) => {
    let n = ht(s), r = n.resolveStack(i.from, 1);
    if (i.empty) {
      let o = n.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return S.range(l.to, l.from);
    }
    return i;
  });
  return e.eq(s.selection) ? !1 : (t(Ut(s, e)), !0);
}, mp = ({ state: s, dispatch: t }) => {
  let e = s.selection, i = null;
  return e.ranges.length > 1 ? i = S.create([e.main]) : e.main.empty || (i = S.create([S.cursor(e.main.head)])), i ? (t(Ut(s, i)), !0) : !1;
};
function Pi(s, t) {
  if (s.state.readOnly)
    return !1;
  let e = "delete.selection", { state: i } = s, n = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = t(r);
      a < o ? (e = "delete.backward", a = ji(s, a, !1)) : a > o && (e = "delete.forward", a = ji(s, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = ji(s, o, !1), l = ji(s, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: S.cursor(o, o < r.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (s.dispatch(i.update(n, {
    scrollIntoView: !0,
    userEvent: e,
    effects: e == "delete.selection" ? A.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function ji(s, t, e) {
  if (s instanceof A)
    for (let i of s.state.facet(A.atomicRanges).map((n) => n(s)))
      i.between(t, t, (n, r) => {
        n < t && r > t && (t = e ? r : n);
      });
  return t;
}
const Ah = (s, t, e) => Pi(s, (i) => {
  let n = i.from, { state: r } = s, o = r.doc.lineAt(n), l, a;
  if (e && !t && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let f = Rn(l, r.tabSize), h = f % kn(r) || kn(r);
    for (let c = 0; c < h && l[l.length - 1 - c] == " "; c++)
      n--;
    a = n;
  } else
    a = lt(o.text, n - o.from, t, t) + o.from, a == n && o.number != (t ? r.doc.lines : 1) ? a += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = lt(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), rr = (s) => Ah(s, !1, !0), Rh = (s) => Ah(s, !0, !1), Mh = (s, t) => Pi(s, (e) => {
  let i = e.head, { state: n } = s, r = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (t ? r.to : r.from)) {
      i == e.head && r.number != (t ? n.doc.lines : 1) && (i += t ? 1 : -1);
      break;
    }
    let a = lt(r.text, i - r.from, t) + r.from, f = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), h = o(f);
    if (l != null && h != l)
      break;
    (f != " " || i != e.head) && (l = h), i = a;
  }
  return i;
}), Dh = (s) => Mh(s, !1), Op = (s) => Mh(s, !0), yp = (s) => Pi(s, (t) => {
  let e = s.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(s.state.doc.length, t.head + 1);
}), Sp = (s) => Pi(s, (t) => {
  let e = s.moveToLineBoundary(t, !1).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), bp = (s) => Pi(s, (t) => {
  let e = s.moveToLineBoundary(t, !0).head;
  return t.head < e ? e : Math.min(s.state.doc.length, t.head + 1);
}), xp = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let e = s.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: q.of(["", ""]) },
    range: S.cursor(i.from)
  }));
  return t(s.update(e, { scrollIntoView: !0, userEvent: "input" })), !0;
}, kp = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let e = s.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == s.doc.length)
      return { range: i };
    let n = i.from, r = s.doc.lineAt(n), o = n == r.from ? n - 1 : lt(r.text, n - r.from, !1) + r.from, l = n == r.to ? n + 1 : lt(r.text, n - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: s.doc.slice(n, l).append(s.doc.slice(o, n)) },
      range: S.cursor(l)
    };
  });
  return e.changes.empty ? !1 : (t(s.update(e, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Ln(s) {
  let t = [], e = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.from), r = s.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = s.doc.lineAt(i.to - 1)), e >= n.number) {
      let o = t[t.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      t.push({ from: n.from, to: r.to, ranges: [i] });
    e = r.number + 1;
  }
  return t;
}
function Eh(s, t, e) {
  if (s.readOnly)
    return !1;
  let i = [], n = [];
  for (let r of Ln(s)) {
    if (e ? r.to == s.doc.length : r.from == 0)
      continue;
    let o = s.doc.lineAt(e ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (e) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + s.lineBreak });
      for (let a of r.ranges)
        n.push(S.range(Math.min(s.doc.length, a.anchor + l), Math.min(s.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: s.lineBreak + o.text });
      for (let a of r.ranges)
        n.push(S.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (t(s.update({
    changes: i,
    scrollIntoView: !0,
    selection: S.create(n, s.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const wp = ({ state: s, dispatch: t }) => Eh(s, t, !1), vp = ({ state: s, dispatch: t }) => Eh(s, t, !0);
function qh(s, t, e) {
  if (s.readOnly)
    return !1;
  let i = [];
  for (let n of Ln(s))
    e ? i.push({ from: n.from, insert: s.doc.slice(n.from, n.to) + s.lineBreak }) : i.push({ from: n.to, insert: s.lineBreak + s.doc.slice(n.from, n.to) });
  return t(s.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Tp = ({ state: s, dispatch: t }) => qh(s, t, !1), Qp = ({ state: s, dispatch: t }) => qh(s, t, !0), Cp = (s) => {
  if (s.state.readOnly)
    return !1;
  let { state: t } = s, e = t.changes(Ln(t).map(({ from: n, to: r }) => (n > 0 ? n-- : r < t.doc.length && r++, { from: n, to: r }))), i = Fe(t.selection, (n) => {
    let r;
    if (s.lineWrapping) {
      let o = s.lineBlockAt(n.head), l = s.coordsAtPos(n.head, n.assoc || 1);
      l && (r = o.bottom + s.documentTop - l.bottom + s.defaultLineHeight / 2);
    }
    return s.moveVertically(n, !0, r);
  }).map(e);
  return s.dispatch({ changes: e, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Pp(s, t) {
  if (/\(\)|\[\]|\{\}/.test(s.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let e = ht(s).resolveInner(t), i = e.childBefore(t), n = e.childAfter(t), r;
  return i && n && i.to <= t && n.from >= t && (r = i.type.prop(D.closedBy)) && r.indexOf(n.name) > -1 && s.doc.lineAt(i.to).from == s.doc.lineAt(n.from).from && !/\S/.test(s.sliceDoc(i.to, n.from)) ? { from: i.to, to: n.from } : null;
}
const nl = /* @__PURE__ */ $h(!1), Ap = /* @__PURE__ */ $h(!0);
function $h(s) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly)
      return !1;
    let i = t.changeByRange((n) => {
      let { from: r, to: o } = n, l = t.doc.lineAt(r), a = !s && r == o && Pp(t, r);
      s && (r = o = (o <= l.to ? l : t.doc.lineAt(o)).to);
      let f = new $n(t, { simulateBreak: r, simulateDoubleBreak: !!a }), h = Qr(f, r);
      for (h == null && (h = Rn(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let c = ["", Si(t, h)];
      return a && c.push(Si(t, f.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: q.of(c) },
        range: S.cursor(r + 1 + c[1].length)
      };
    });
    return e(t.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Rr(s, t) {
  let e = -1;
  return s.changeByRange((i) => {
    let n = [];
    for (let o = i.from; o <= i.to; ) {
      let l = s.doc.lineAt(o);
      l.number > e && (i.empty || i.to > l.from) && (t(l, n, i), e = l.number), o = l.to + 1;
    }
    let r = s.changes(n);
    return {
      changes: n,
      range: S.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const Rp = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let e = /* @__PURE__ */ Object.create(null), i = new $n(s, { overrideIndentation: (r) => {
    let o = e[r];
    return o == null ? -1 : o;
  } }), n = Rr(s, (r, o, l) => {
    let a = Qr(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let f = /^\s*/.exec(r.text)[0], h = Si(s, a);
    (f != h || l.from < r.from + f.length) && (e[r.from] = a, o.push({ from: r.from, to: r.from + f.length, insert: h }));
  });
  return n.changes.empty || t(s.update(n, { userEvent: "indent" })), !0;
}, Bh = ({ state: s, dispatch: t }) => s.readOnly ? !1 : (t(s.update(Rr(s, (e, i) => {
  i.push({ from: e.from, insert: s.facet(Qi) });
}), { userEvent: "input.indent" })), !0), zh = ({ state: s, dispatch: t }) => s.readOnly ? !1 : (t(s.update(Rr(s, (e, i) => {
  let n = /^\s*/.exec(e.text)[0];
  if (!n)
    return;
  let r = Rn(n, s.tabSize), o = 0, l = Si(s, Math.max(0, r - kn(s)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: e.from + o, to: e.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Mp = (s) => (s.setTabFocusMode(), !0), Dp = [
  { key: "Ctrl-b", run: dh, shift: kh, preventDefault: !0 },
  { key: "Ctrl-f", run: ph, shift: wh },
  { key: "Ctrl-p", run: Oh, shift: Qh },
  { key: "Ctrl-n", run: yh, shift: Ch },
  { key: "Ctrl-a", run: Jd, shift: cp },
  { key: "Ctrl-e", run: tp, shift: up },
  { key: "Ctrl-d", run: Rh },
  { key: "Ctrl-h", run: rr },
  { key: "Ctrl-k", run: yp },
  { key: "Ctrl-Alt-h", run: Dh },
  { key: "Ctrl-o", run: xp },
  { key: "Ctrl-t", run: kp },
  { key: "Ctrl-v", run: sr }
], Ep = /* @__PURE__ */ [
  { key: "ArrowLeft", run: dh, shift: kh, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Fd, shift: np, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Yd, shift: hp, preventDefault: !0 },
  { key: "ArrowRight", run: ph, shift: wh, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: _d, shift: sp, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Kd, shift: fp, preventDefault: !0 },
  { key: "ArrowUp", run: Oh, shift: Qh, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Jo, shift: el },
  { mac: "Ctrl-ArrowUp", run: Zo, shift: Yo },
  { key: "ArrowDown", run: yh, shift: Ch, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: tl, shift: il },
  { mac: "Ctrl-ArrowDown", run: sr, shift: Ko },
  { key: "PageUp", run: Zo, shift: Yo },
  { key: "PageDown", run: sr, shift: Ko },
  { key: "Home", run: Zd, shift: ap, preventDefault: !0 },
  { key: "Mod-Home", run: Jo, shift: el },
  { key: "End", run: Hd, shift: lp, preventDefault: !0 },
  { key: "Mod-End", run: tl, shift: il },
  { key: "Enter", run: nl, shift: nl },
  { key: "Mod-a", run: dp },
  { key: "Backspace", run: rr, shift: rr },
  { key: "Delete", run: Rh },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Dh },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Op },
  { mac: "Mod-Backspace", run: Sp },
  { mac: "Mod-Delete", run: bp }
].concat(/* @__PURE__ */ Dp.map((s) => ({ mac: s.key, run: s.run, shift: s.shift }))), qp = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: jd, shift: rp },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Gd, shift: op },
  { key: "Alt-ArrowUp", run: wp },
  { key: "Shift-Alt-ArrowUp", run: Tp },
  { key: "Alt-ArrowDown", run: vp },
  { key: "Shift-Alt-ArrowDown", run: Qp },
  { key: "Escape", run: mp },
  { key: "Mod-Enter", run: Ap },
  { key: "Alt-l", mac: "Ctrl-l", run: pp },
  { key: "Mod-i", run: gp, preventDefault: !0 },
  { key: "Mod-[", run: zh },
  { key: "Mod-]", run: Bh },
  { key: "Mod-Alt-\\", run: Rp },
  { key: "Shift-Mod-k", run: Cp },
  { key: "Shift-Mod-\\", run: ip },
  { key: "Mod-/", run: Td },
  { key: "Alt-A", run: Cd },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Mp }
].concat(Ep), $p = { key: "Tab", run: Bh, shift: zh }, sl = typeof String.prototype.normalize == "function" ? (s) => s.normalize("NFKD") : (s) => s;
class Wh {
  constructor(t, e, i = 0, n = t.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(i, n), this.bufferStart = i, this.normalize = r ? (l) => r(sl(l)) : sl, this.query = this.normalize(e);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return mt(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let t = this.peek();
      if (t < 0)
        return this.done = !0, this;
      let e = lr(t), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Wt(t);
      let n = this.normalize(e);
      if (n.length)
        for (let r = 0, o = i; ; r++) {
          let l = n.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == n.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == i && r < e.length && e.charCodeAt(r) == l && o++;
        }
    }
  }
  match(t, e, i) {
    let n = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == t && (o == this.query.length - 1 ? n = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? n = { from: e, to: i } : this.matches.push(1, e)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferStart) && (n = null), n;
  }
}
typeof Symbol < "u" && (Wh.prototype[Symbol.iterator] = function() {
  return this;
});
const Bp = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Lh = /* @__PURE__ */ P.define({
  combine(s) {
    return wi(s, Bp, {
      highlightWordAroundCursor: (t, e) => t || e,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function zp(s) {
  let t = [Ip, Np];
  return s && t.push(Lh.of(s)), t;
}
const Wp = /* @__PURE__ */ M.mark({ class: "cm-selectionMatch" }), Lp = /* @__PURE__ */ M.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function rl(s, t, e, i) {
  return (e == 0 || s(t.sliceDoc(e - 1, e)) != rt.Word) && (i == t.doc.length || s(t.sliceDoc(i, i + 1)) != rt.Word);
}
function Vp(s, t, e, i) {
  return s(t.sliceDoc(e, e + 1)) == rt.Word && s(t.sliceDoc(i - 1, i)) == rt.Word;
}
const Np = /* @__PURE__ */ At.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.selectionSet || s.docChanged || s.viewportChanged) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let t = s.state.facet(Lh), { state: e } = s, i = e.selection;
    if (i.ranges.length > 1)
      return M.none;
    let n = i.main, r, o = null;
    if (n.empty) {
      if (!t.highlightWordAroundCursor)
        return M.none;
      let a = e.wordAt(n.head);
      if (!a)
        return M.none;
      o = e.charCategorizer(n.head), r = e.sliceDoc(a.from, a.to);
    } else {
      let a = n.to - n.from;
      if (a < t.minSelectionLength || a > 200)
        return M.none;
      if (t.wholeWords) {
        if (r = e.sliceDoc(n.from, n.to), o = e.charCategorizer(n.head), !(rl(o, e, n.from, n.to) && Vp(o, e, n.from, n.to)))
          return M.none;
      } else if (r = e.sliceDoc(n.from, n.to), !r)
        return M.none;
    }
    let l = [];
    for (let a of s.visibleRanges) {
      let f = new Wh(e.doc, r, a.from, a.to);
      for (; !f.next().done; ) {
        let { from: h, to: c } = f.value;
        if ((!o || rl(o, e, h, c)) && (n.empty && h <= n.from && c >= n.to ? l.push(Lp.range(h, c)) : (h >= n.to || c <= n.from) && l.push(Wp.range(h, c)), l.length > t.maxMatches))
          return M.none;
      }
    }
    return M.set(l);
  }
}, {
  decorations: (s) => s.decorations
}), Ip = /* @__PURE__ */ A.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
});
class Xp {
  constructor(t, e, i, n) {
    this.state = t, this.pos = e, this.explicit = i, this.view = n, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  tokenBefore(t) {
    let e = ht(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; )
      e = e.parent;
    return e ? {
      from: e.from,
      to: this.pos,
      text: this.state.sliceDoc(e.from, this.pos),
      type: e.type
    } : null;
  }
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), n = e.text.slice(i - e.from, this.pos - e.from), r = n.search(Nh(t, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: n.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(t, e, i) {
    t == "abort" && this.abortListeners && (this.abortListeners.push(e), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function ol(s) {
  let t = Object.keys(s).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Fp(s) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of s) {
    t[n[0]] = !0;
    for (let r = 1; r < n.length; r++)
      e[n[r]] = !0;
  }
  let i = ol(t) + ol(e) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function Vh(s) {
  let t = s.map((n) => typeof n == "string" ? { label: n } : n), [e, i] = t.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : Fp(t);
  return (n) => {
    let r = n.matchBefore(i);
    return r || n.explicit ? { from: r ? r.from : n.pos, options: t, validFor: e } : null;
  };
}
function _p(s, t) {
  return (e) => {
    for (let i = ht(e.state).resolveInner(e.pos, -1); i; i = i.parent) {
      if (s.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return t(e);
  };
}
class ll {
  constructor(t, e, i, n) {
    this.completion = t, this.source = e, this.match = i, this.score = n;
  }
}
function ai(s) {
  return s.selection.main.from;
}
function Nh(s, t) {
  var e;
  let { source: i } = s, n = t && i[0] != "^", r = i[i.length - 1] != "$";
  return !n && !r ? s : new RegExp(`${n ? "^" : ""}(?:${i})${r ? "$" : ""}`, (e = s.flags) !== null && e !== void 0 ? e : s.ignoreCase ? "i" : "");
}
const Mr = /* @__PURE__ */ ne.define();
function Up(s, t, e, i) {
  let { main: n } = s.selection, r = e - n.from, o = i - n.from;
  return Object.assign(Object.assign({}, s.changeByRange((l) => {
    if (l != n && e != i && s.sliceDoc(l.from + r, l.from + o) != s.sliceDoc(e, i))
      return { range: l };
    let a = s.toText(t);
    return {
      changes: { from: l.from + r, to: i == n.from ? l.to : l.from + o, insert: a },
      range: S.cursor(l.from + r + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const al = /* @__PURE__ */ new WeakMap();
function jp(s) {
  if (!Array.isArray(s))
    return s;
  let t = al.get(s);
  return t || al.set(s, t = Vh(s)), t;
}
const Ih = /* @__PURE__ */ W.define(), Dr = /* @__PURE__ */ W.define();
class Gp {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let i = mt(t, e), n = Wt(i);
      this.chars.push(i);
      let r = t.slice(e, e + n), o = r.toUpperCase();
      this.folded.push(mt(o == r ? r.toLowerCase() : o, 0)), e += n;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, this;
  }
  match(t) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (t.length < this.pattern.length)
      return null;
    let { chars: e, folded: i, any: n, precise: r, byWord: o } = this;
    if (e.length == 1) {
      let b = mt(t, 0), x = Wt(b), k = x == t.length ? 0 : -100;
      if (b != e[0])
        if (b == i[0])
          k += -200;
        else
          return null;
      return this.ret(k, [0, x]);
    }
    let l = t.indexOf(this.pattern);
    if (l == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = e.length, f = 0;
    if (l < 0) {
      for (let b = 0, x = Math.min(t.length, 200); b < x && f < a; ) {
        let k = mt(t, b);
        (k == e[f] || k == i[f]) && (n[f++] = b), b += Wt(k);
      }
      if (f < a)
        return null;
    }
    let h = 0, c = 0, u = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(t), O = !0;
    for (let b = 0, x = Math.min(t.length, 200), k = 0; b < x && c < a; ) {
      let v = mt(t, b);
      l < 0 && (h < a && v == e[h] && (r[h++] = b), d < a && (v == e[d] || v == i[d] ? (d == 0 && (p = b), g = b + 1, d++) : d = 0));
      let Q, C = v < 255 ? v >= 48 && v <= 57 || v >= 97 && v <= 122 ? 2 : v >= 65 && v <= 90 ? 1 : 0 : (Q = lr(v)) != Q.toLowerCase() ? 1 : Q != Q.toUpperCase() ? 2 : 0;
      (!b || C == 1 && m || k == 0 && C != 0) && (e[c] == v || i[c] == v && (u = !0) ? o[c++] = b : o.length && (O = !1)), k = C, b += Wt(v);
    }
    return c == a && o[0] == 0 && O ? this.result(-100 + (u ? -200 : 0), o, t) : d == a && p == 0 ? this.ret(-200 - t.length + (g == t.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - t.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - t.length, [p, g]) : c == a ? this.result(-100 + (u ? -200 : 0) + -700 + (O ? 0 : -1100), o, t) : e.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, t);
  }
  result(t, e, i) {
    let n = [], r = 0;
    for (let o of e) {
      let l = o + (this.astral ? Wt(mt(i, o)) : 1);
      r && n[r - 1] == o ? n[r - 1] = l : (n[r++] = o, n[r++] = l);
    }
    return this.ret(t - i.length, n);
  }
}
class Hp {
  constructor(t) {
    this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
  }
  match(t) {
    if (t.length < this.pattern.length)
      return null;
    let e = t.slice(0, this.pattern.length), i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, e.length], this.score = i + (t.length == this.pattern.length ? 0 : -100), this);
  }
}
const Vt = /* @__PURE__ */ P.define({
  combine(s) {
    return wi(s, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: Zp,
      filterStrict: !1,
      compareCompletions: (t, e) => t.label.localeCompare(e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => (i) => hl(t(i), e(i)),
      optionClass: (t, e) => (i) => hl(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    });
  }
});
function hl(s, t) {
  return s ? t ? s + " " + t : s : t;
}
function Zp(s, t, e, i, n, r) {
  let o = s.textDirection == j.RTL, l = o, a = !1, f = "top", h, c, u = t.left - n.left, d = n.right - t.right, p = i.right - i.left, g = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    h = Math.max(n.top, Math.min(e.top, n.bottom - g)) - t.top, c = Math.min(400, l ? u : d);
  else {
    a = !0, c = Math.min(400, (o ? t.right : n.right - t.left) - 30);
    let b = n.bottom - t.bottom;
    b >= g || b > t.top ? h = e.bottom - t.top : (f = "bottom", h = t.bottom - e.top);
  }
  let m = (t.bottom - t.top) / r.offsetHeight, O = (t.right - t.left) / r.offsetWidth;
  return {
    style: `${f}: ${h / m}px; max-width: ${c / O}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function Yp(s) {
  let t = s.addToOptions.slice();
  return s.icons && t.push({
    render(e) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((n) => "cm-completionIcon-" + n)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), t.push({
    render(e, i, n, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = e.displayLabel || e.label, a = 0;
      for (let f = 0; f < r.length; ) {
        let h = r[f++], c = r[f++];
        h > a && o.appendChild(document.createTextNode(l.slice(a, h)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(h, c))), u.className = "cm-completionMatchedText", a = c;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = e.detail, i;
    },
    position: 80
  }), t.sort((e, i) => e.position - i.position).map((e) => e.render);
}
function hs(s, t, e) {
  if (s <= e)
    return { from: 0, to: s };
  if (t < 0 && (t = 0), t <= s >> 1) {
    let n = Math.floor(t / e);
    return { from: n * e, to: (n + 1) * e };
  }
  let i = Math.floor((s - t) / e);
  return { from: s - (i + 1) * e, to: s - i * e };
}
class Kp {
  constructor(t, e, i) {
    this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = t.state.field(e), { options: r, selected: o } = n.open, l = t.state.facet(Vt);
    this.optionContent = Yp(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = hs(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: f } = t.state.field(e).open;
      for (let h = a.target, c; h && h != this.dom; h = h.parentNode)
        if (h.nodeName == "LI" && (c = /-(\d+)$/.exec(h.id)) && +c[1] < f.length) {
          this.applyCompletion(t, f[+c[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let f = t.state.field(this.stateField, !1);
      f && f.tooltip && t.state.facet(Vt).closeOnBlur && a.relatedTarget != t.contentDOM && t.dispatch({ effects: Dr.of(null) });
    }), this.showOptions(r, n.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t, e) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t, e, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t) {
    var e;
    let i = t.state.field(this.stateField), n = t.startState.field(this.stateField);
    if (this.updateTooltipClass(t.state), i != n) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!n.open || n.open.options != r) && (this.range = hs(r.length, o, t.state.facet(Vt).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((e = n.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of e.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    if ((e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = hs(e.options.length, e.selected, this.view.state.facet(Vt).maxRenderedOptions), this.showOptions(e.options, t.id)), this.updateSelectedOption(e.selected)) {
      this.destroyInfo();
      let { completion: i } = e.options[e.selected], { info: n } = i;
      if (!n)
        return;
      let r = typeof n == "string" ? document.createTextNode(n) : n(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == t && this.addInfoPane(o, i);
      }).catch((o) => Tt(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", t.nodeType != null)
      i.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: n, destroy: r } = t;
      i.appendChild(n), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++)
      i.nodeName != "LI" || !i.id ? n-- : n == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return e && tg(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), n = t.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return n.top > Math.min(r.bottom, e.bottom) - 10 || n.bottom < Math.max(r.top, e.top) + 10 ? null : this.view.state.facet(Vt).positionInfo(this.view, e, n, i, r, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, i) {
    const n = document.createElement("ul");
    n.id = e, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = t[o], { section: f } = l;
      if (f) {
        let u = typeof f == "string" ? f : f.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof f != "string" && f.header)
            n.appendChild(f.header(f));
          else {
            let d = n.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const h = n.appendChild(document.createElement("li"));
      h.id = e + "-" + o, h.setAttribute("role", "option");
      let c = this.optionClass(l);
      c && (h.className = c);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && h.appendChild(d);
      }
    }
    return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < t.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Jp(s, t) {
  return (e) => new Kp(e, s, t);
}
function tg(s, t) {
  let e = s.getBoundingClientRect(), i = t.getBoundingClientRect(), n = e.height / s.offsetHeight;
  i.top < e.top ? s.scrollTop -= (e.top - i.top) / n : i.bottom > e.bottom && (s.scrollTop += (i.bottom - e.bottom) / n);
}
function fl(s) {
  return (s.boost || 0) * 100 + (s.apply ? 10 : 0) + (s.info ? 5 : 0) + (s.type ? 1 : 0);
}
function eg(s, t) {
  let e = [], i = null, n = (f) => {
    e.push(f);
    let { section: h } = f.completion;
    if (h) {
      i || (i = []);
      let c = typeof h == "string" ? h : h.name;
      i.some((u) => u.name == c) || i.push(typeof h == "string" ? { name: c } : h);
    }
  }, r = t.facet(Vt);
  for (let f of s)
    if (f.hasResult()) {
      let h = f.result.getMatch;
      if (f.result.filter === !1)
        for (let c of f.result.options)
          n(new ll(c, f.source, h ? h(c) : [], 1e9 - e.length));
      else {
        let c = t.sliceDoc(f.from, f.to), u, d = r.filterStrict ? new Hp(c) : new Gp(c);
        for (let p of f.result.options)
          if (u = d.match(p.label)) {
            let g = p.displayLabel ? h ? h(p, u.matched) : [] : u.matched;
            n(new ll(p, f.source, g, u.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let f = /* @__PURE__ */ Object.create(null), h = 0, c = (u, d) => {
      var p, g;
      return ((p = u.rank) !== null && p !== void 0 ? p : 1e9) - ((g = d.rank) !== null && g !== void 0 ? g : 1e9) || (u.name < d.name ? -1 : 1);
    };
    for (let u of i.sort(c))
      h -= 1e5, f[u.name] = h;
    for (let u of e) {
      let { section: d } = u.completion;
      d && (u.score += f[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = r.compareCompletions;
  for (let f of e.sort((h, c) => c.score - h.score || a(h.completion, c.completion))) {
    let h = f.completion;
    !l || l.label != h.label || l.detail != h.detail || l.type != null && h.type != null && l.type != h.type || l.apply != h.apply || l.boost != h.boost ? o.push(f) : fl(f.completion) > fl(l) && (o[o.length - 1] = f), l = f.completion;
  }
  return o;
}
class Ee {
  constructor(t, e, i, n, r, o) {
    this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = n, this.selected = r, this.disabled = o;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new Ee(this.options, cl(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, i, n, r, o) {
    if (n && !o && t.some((f) => f.isPending))
      return n.setDisabled();
    let l = eg(t, e);
    if (!l.length)
      return n && t.some((f) => f.isPending) ? n.setDisabled() : null;
    let a = e.facet(Vt).selectOnOpen ? 0 : -1;
    if (n && n.selected != a && n.selected != -1) {
      let f = n.options[n.selected].completion;
      for (let h = 0; h < l.length; h++)
        if (l[h].completion == f) {
          a = h;
          break;
        }
    }
    return new Ee(l, cl(i, a), {
      pos: t.reduce((f, h) => h.hasResult() ? Math.min(f, h.from) : f, 1e8),
      create: ag,
      above: r.aboveCursor
    }, n ? n.timestamp : Date.now(), a, !1);
  }
  map(t) {
    return new Ee(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: t.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Ee(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class vn {
  constructor(t, e, i) {
    this.active = t, this.id = e, this.open = i;
  }
  static start() {
    return new vn(rg, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, i = e.facet(Vt), r = (i.override || e.languageDataAt("autocomplete", ai(e)).map(jp)).map((a) => (this.active.find((h) => h.source == a) || new Ct(a, this.active.some((h) => h.state != 0) ? 1 : 0)).update(t, i));
    r.length == this.active.length && r.every((a, f) => a == this.active[f]) && (r = this.active);
    let o = this.open, l = t.effects.some((a) => a.is(Xh));
    o && t.docChanged && (o = o.map(t.changes)), t.selection || r.some((a) => a.hasResult() && t.changes.touchesRange(a.from, a.to)) || !ig(r, this.active) || l ? o = Ee.build(r, e, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new Ct(a.source, 0) : a));
    for (let a of t.effects)
      a.is(Fh) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new vn(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? ng : sg;
  }
}
function ig(s, t) {
  if (s == t)
    return !0;
  for (let e = 0, i = 0; ; ) {
    for (; e < s.length && !s[e].hasResult(); )
      e++;
    for (; i < t.length && !t[i].hasResult(); )
      i++;
    let n = e == s.length, r = i == t.length;
    if (n || r)
      return n == r;
    if (s[e++].result != t[i++].result)
      return !1;
  }
}
const ng = {
  "aria-autocomplete": "list"
}, sg = {};
function cl(s, t) {
  let e = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": s
  };
  return t > -1 && (e["aria-activedescendant"] = s + "-" + t), e;
}
const rg = [];
function og(s, t) {
  if (s.isUserEvent("input.complete")) {
    let i = s.annotation(Mr);
    if (i && t.activateOnCompletion(i))
      return 12;
  }
  let e = s.isUserEvent("input.type");
  return e && t.activateOnTyping ? 5 : e ? 1 : s.isUserEvent("delete.backward") ? 2 : s.selection ? 8 : s.docChanged ? 16 : 0;
}
class Ct {
  constructor(t, e, i = !1) {
    this.source = t, this.state = e, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t, e) {
    let i = og(t, e), n = this;
    (i & 8 || i & 16 && this.touches(t)) && (n = new Ct(n.source, 0)), i & 4 && n.state == 0 && (n = new Ct(this.source, 1)), n = n.updateFor(t, i);
    for (let r of t.effects)
      if (r.is(Ih))
        n = new Ct(n.source, 1, r.value);
      else if (r.is(Dr))
        n = new Ct(n.source, 0);
      else if (r.is(Xh))
        for (let o of r.value)
          o.source == n.source && (n = o);
    return n;
  }
  updateFor(t, e) {
    return this.map(t.changes);
  }
  map(t) {
    return this;
  }
  touches(t) {
    return t.changes.touchesRange(ai(t.state));
  }
}
class hi extends Ct {
  constructor(t, e, i, n, r, o) {
    super(t, 3, e), this.limit = i, this.result = n, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(t, e) {
    var i;
    if (!(e & 3))
      return this.map(t.changes);
    let n = this.result;
    n.map && !t.changes.empty && (n = n.map(n, t.changes));
    let r = t.changes.mapPos(this.from), o = t.changes.mapPos(this.to, 1), l = ai(t.state);
    if (l > o || !n || e & 2 && (ai(t.startState) == this.from || l < this.limit))
      return new Ct(this.source, e & 4 ? 1 : 0);
    let a = t.changes.mapPos(this.limit);
    return lg(n.validFor, t.state, r, o) ? new hi(this.source, this.explicit, a, n, r, o) : n.update && (n = n.update(n, r, o, new Xp(t.state, l, !1))) ? new hi(this.source, this.explicit, a, n, n.from, (i = n.to) !== null && i !== void 0 ? i : ai(t.state)) : new Ct(this.source, 1, this.explicit);
  }
  map(t) {
    return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new hi(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new Ct(this.source, 0);
  }
  touches(t) {
    return t.changes.touchesRange(this.from, this.to);
  }
}
function lg(s, t, e, i) {
  if (!s)
    return !1;
  let n = t.sliceDoc(e, i);
  return typeof s == "function" ? s(n, e, i, t) : Nh(s, !0).test(n);
}
const Xh = /* @__PURE__ */ W.define({
  map(s, t) {
    return s.map((e) => e.map(t));
  }
}), Fh = /* @__PURE__ */ W.define(), _e = /* @__PURE__ */ wt.define({
  create() {
    return vn.start();
  },
  update(s, t) {
    return s.update(t);
  },
  provide: (s) => [
    Ia.from(s, (t) => t.tooltip),
    A.contentAttributes.from(s, (t) => t.attrs)
  ]
});
function _h(s, t) {
  const e = t.completion.apply || t.completion.label;
  let i = s.state.field(_e).active.find((n) => n.source == t.source);
  return i instanceof hi ? (typeof e == "string" ? s.dispatch(Object.assign(Object.assign({}, Up(s.state, e, i.from, i.to)), { annotations: Mr.of(t.completion) })) : e(s, t.completion, i.from, i.to), !0) : !1;
}
const ag = /* @__PURE__ */ Jp(_e, _h);
function Gi(s, t = "option") {
  return (e) => {
    let i = e.state.field(_e, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(Vt).interactionDelay)
      return !1;
    let n = 1, r;
    t == "page" && (r = yu(e, i.open.tooltip)) && (n = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + n * (s ? 1 : -1) : s ? 0 : o - 1;
    return l < 0 ? l = t == "page" ? 0 : o - 1 : l >= o && (l = t == "page" ? o - 1 : 0), e.dispatch({ effects: Fh.of(l) }), !0;
  };
}
const hg = (s) => {
  let t = s.state.field(_e, !1);
  return s.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < s.state.facet(Vt).interactionDelay ? !1 : _h(s, t.open.options[t.open.selected]);
}, ul = (s) => s.state.field(_e, !1) ? (s.dispatch({ effects: Ih.of(!0) }), !0) : !1, fg = (s) => {
  let t = s.state.field(_e, !1);
  return !t || !t.active.some((e) => e.state != 0) ? !1 : (s.dispatch({ effects: Dr.of(null) }), !0);
}, cg = /* @__PURE__ */ A.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"\xB7\xB7\xB7"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: `${400}px`,
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${30}px` },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${30}px` },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'\u0192'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'\u25CB'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'\u25CC'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'\u{1D465}'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'\u{1D436}'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'\u{1D461}'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'\u222A'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'\u25A1'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'\u{1F511}\uFE0E'" }
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'\u25A2'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class ug {
  constructor(t, e, i, n) {
    this.field = t, this.line = e, this.from = i, this.to = n;
  }
}
class Er {
  constructor(t, e, i) {
    this.field = t, this.from = e, this.to = i;
  }
  map(t) {
    let e = t.mapPos(this.from, -1, nt.TrackDel), i = t.mapPos(this.to, 1, nt.TrackDel);
    return e == null || i == null ? null : new Er(this.field, e, i);
  }
}
class qr {
  constructor(t, e) {
    this.lines = t, this.fieldPositions = e;
  }
  instantiate(t, e) {
    let i = [], n = [e], r = t.doc.lineAt(e), o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let f = o, h = /^\t*/.exec(a)[0].length;
        for (let c = 0; c < h; c++)
          f += t.facet(Qi);
        n.push(e + f.length - h), a = f + a.slice(h);
      }
      i.push(a), e += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new Er(a.field, n[a.line] + a.from, n[a.line] + a.to));
    return { text: i, ranges: l };
  }
  static parse(t) {
    let e = [], i = [], n = [], r;
    for (let o of t.split(/\r\n?|\n/)) {
      for (; r = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o); ) {
        let l = r[1] ? +r[1] : null, a = r[2] || r[3] || "", f = -1, h = a.replace(/\\[{}]/g, (c) => c[1]);
        for (let c = 0; c < e.length; c++)
          (l != null ? e[c].seq == l : h ? e[c].name == h : !1) && (f = c);
        if (f < 0) {
          let c = 0;
          for (; c < e.length && (l == null || e[c].seq != null && e[c].seq < l); )
            c++;
          e.splice(c, 0, { seq: l, name: h }), f = c;
          for (let u of n)
            u.field >= f && u.field++;
        }
        n.push(new ug(f, i.length, r.index, r.index + h.length)), o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, f) => {
        for (let h of n)
          h.line == i.length && h.from > f && (h.from--, h.to--);
        return a;
      }), i.push(o);
    }
    return new qr(i, n);
  }
}
let dg = /* @__PURE__ */ M.widget({ widget: /* @__PURE__ */ new class extends En {
  toDOM() {
    let s = document.createElement("span");
    return s.className = "cm-snippetFieldPosition", s;
  }
  ignoreEvent() {
    return !1;
  }
}() }), pg = /* @__PURE__ */ M.mark({ class: "cm-snippetField" });
class Ue {
  constructor(t, e) {
    this.ranges = t, this.active = e, this.deco = M.set(t.map((i) => (i.from == i.to ? dg : pg).range(i.from, i.to)));
  }
  map(t) {
    let e = [];
    for (let i of this.ranges) {
      let n = i.map(t);
      if (!n)
        return null;
      e.push(n);
    }
    return new Ue(e, this.active);
  }
  selectionInsideField(t) {
    return t.ranges.every((e) => this.ranges.some((i) => i.field == this.active && i.from <= e.from && i.to >= e.to));
  }
}
const Ai = /* @__PURE__ */ W.define({
  map(s, t) {
    return s && s.map(t);
  }
}), gg = /* @__PURE__ */ W.define(), bi = /* @__PURE__ */ wt.define({
  create() {
    return null;
  },
  update(s, t) {
    for (let e of t.effects) {
      if (e.is(Ai))
        return e.value;
      if (e.is(gg) && s)
        return new Ue(s.ranges, e.value);
    }
    return s && t.docChanged && (s = s.map(t.changes)), s && t.selection && !s.selectionInsideField(t.selection) && (s = null), s;
  },
  provide: (s) => A.decorations.from(s, (t) => t ? t.deco : M.none)
});
function $r(s, t) {
  return S.create(s.filter((e) => e.field == t).map((e) => S.range(e.from, e.to)));
}
function mg(s) {
  let t = qr.parse(s);
  return (e, i, n, r) => {
    let { text: o, ranges: l } = t.instantiate(e.state, n), { main: a } = e.state.selection, f = {
      changes: { from: n, to: r == a.from ? a.to : r, insert: q.of(o) },
      scrollIntoView: !0,
      annotations: i ? [Mr.of(i), H.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (f.selection = $r(l, 0)), l.some((h) => h.field > 0)) {
      let h = new Ue(l, 0), c = f.effects = [Ai.of(h)];
      e.state.field(bi, !1) === void 0 && c.push(W.appendConfig.of([bi, xg, kg, cg]));
    }
    e.dispatch(e.state.update(f));
  };
}
function Uh(s) {
  return ({ state: t, dispatch: e }) => {
    let i = t.field(bi, !1);
    if (!i || s < 0 && i.active == 0)
      return !1;
    let n = i.active + s, r = s > 0 && !i.ranges.some((o) => o.field == n + s);
    return e(t.update({
      selection: $r(i.ranges, n),
      effects: Ai.of(r ? null : new Ue(i.ranges, n)),
      scrollIntoView: !0
    })), !0;
  };
}
const Og = ({ state: s, dispatch: t }) => s.field(bi, !1) ? (t(s.update({ effects: Ai.of(null) })), !0) : !1, yg = /* @__PURE__ */ Uh(1), Sg = /* @__PURE__ */ Uh(-1), bg = [
  { key: "Tab", run: yg, shift: Sg },
  { key: "Escape", run: Og }
], dl = /* @__PURE__ */ P.define({
  combine(s) {
    return s.length ? s[0] : bg;
  }
}), xg = /* @__PURE__ */ Pn.highest(/* @__PURE__ */ xr.compute([dl], (s) => s.facet(dl)));
function Gt(s, t) {
  return Object.assign(Object.assign({}, t), { apply: mg(s) });
}
const kg = /* @__PURE__ */ A.domEventHandlers({
  mousedown(s, t) {
    let e = t.state.field(bi, !1), i;
    if (!e || (i = t.posAtCoords({ x: s.clientX, y: s.clientY })) == null)
      return !1;
    let n = e.ranges.find((r) => r.from <= i && r.to >= i);
    return !n || n.field == e.active ? !1 : (t.dispatch({
      selection: $r(e.ranges, n.field),
      effects: Ai.of(e.ranges.some((r) => r.field > n.field) ? new Ue(e.ranges, n.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), xi = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, ke = /* @__PURE__ */ W.define({
  map(s, t) {
    let e = t.mapPos(s, -1, nt.TrackAfter);
    return e == null ? void 0 : e;
  }
}), Br = /* @__PURE__ */ new class extends ve {
}();
Br.startSide = 1;
Br.endSide = -1;
const jh = /* @__PURE__ */ wt.define({
  create() {
    return z.empty;
  },
  update(s, t) {
    if (s = s.map(t.changes), t.selection) {
      let e = t.state.doc.lineAt(t.selection.main.head);
      s = s.update({ filter: (i) => i >= e.from && i <= e.to });
    }
    for (let e of t.effects)
      e.is(ke) && (s = s.update({ add: [Br.range(e.value, e.value + 1)] }));
    return s;
  }
});
function wg() {
  return [Tg, jh];
}
const fs = "()[]{}<>";
function Gh(s) {
  for (let t = 0; t < fs.length; t += 2)
    if (fs.charCodeAt(t) == s)
      return fs.charAt(t + 1);
  return lr(s < 128 ? s : s + 1);
}
function Hh(s, t) {
  return s.languageDataAt("closeBrackets", t)[0] || xi;
}
const vg = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Tg = /* @__PURE__ */ A.inputHandler.of((s, t, e, i) => {
  if ((vg ? s.composing : s.compositionStarted) || s.state.readOnly)
    return !1;
  let n = s.state.selection.main;
  if (i.length > 2 || i.length == 2 && Wt(mt(i, 0)) == 1 || t != n.from || e != n.to)
    return !1;
  let r = Pg(s.state, i);
  return r ? (s.dispatch(r), !0) : !1;
}), Qg = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let i = Hh(s, s.selection.main.head).brackets || xi.brackets, n = null, r = s.changeByRange((o) => {
    if (o.empty) {
      let l = Ag(s.doc, o.head);
      for (let a of i)
        if (a == l && Vn(s.doc, o.head) == Gh(mt(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: S.cursor(o.head - a.length)
          };
    }
    return { range: n = o };
  });
  return n || t(s.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !n;
}, Cg = [
  { key: "Backspace", run: Qg }
];
function Pg(s, t) {
  let e = Hh(s, s.selection.main.head), i = e.brackets || xi.brackets;
  for (let n of i) {
    let r = Gh(mt(n, 0));
    if (t == n)
      return r == n ? Dg(s, n, i.indexOf(n + n + n) > -1, e) : Rg(s, n, r, e.before || xi.before);
    if (t == r && Zh(s, s.selection.main.from))
      return Mg(s, n, r);
  }
  return null;
}
function Zh(s, t) {
  let e = !1;
  return s.field(jh).between(0, s.doc.length, (i) => {
    i == t && (e = !0);
  }), e;
}
function Vn(s, t) {
  let e = s.sliceString(t, t + 2);
  return e.slice(0, Wt(mt(e, 0)));
}
function Ag(s, t) {
  let e = s.sliceString(t - 2, t);
  return Wt(mt(e, 0)) == e.length ? e : e.slice(1);
}
function Rg(s, t, e, i) {
  let n = null, r = s.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: t, from: o.from }, { insert: e, from: o.to }],
        effects: ke.of(o.to + t.length),
        range: S.range(o.anchor + t.length, o.head + t.length)
      };
    let l = Vn(s.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: t + e, from: o.head },
      effects: ke.of(o.head + t.length),
      range: S.cursor(o.head + t.length)
    } : { range: n = o };
  });
  return n ? null : s.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Mg(s, t, e) {
  let i = null, n = s.changeByRange((r) => r.empty && Vn(s.doc, r.head) == e ? {
    changes: { from: r.head, to: r.head + e.length, insert: e },
    range: S.cursor(r.head + e.length)
  } : i = { range: r });
  return i ? null : s.update(n, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Dg(s, t, e, i) {
  let n = i.stringPrefixes || xi.stringPrefixes, r = null, o = s.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: t, from: l.from }, { insert: t, from: l.to }],
        effects: ke.of(l.to + t.length),
        range: S.range(l.anchor + t.length, l.head + t.length)
      };
    let a = l.head, f = Vn(s.doc, a), h;
    if (f == t) {
      if (pl(s, a))
        return {
          changes: { insert: t + t, from: a },
          effects: ke.of(a + t.length),
          range: S.cursor(a + t.length)
        };
      if (Zh(s, a)) {
        let u = e && s.sliceDoc(a, a + t.length * 3) == t + t + t ? t + t + t : t;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: S.cursor(a + u.length)
        };
      }
    } else {
      if (e && s.sliceDoc(a - 2 * t.length, a) == t + t && (h = gl(s, a - 2 * t.length, n)) > -1 && pl(s, h))
        return {
          changes: { insert: t + t + t + t, from: a },
          effects: ke.of(a + t.length),
          range: S.cursor(a + t.length)
        };
      if (s.charCategorizer(a)(f) != rt.Word && gl(s, a, n) > -1 && !Eg(s, a, t, n))
        return {
          changes: { insert: t + t, from: a },
          effects: ke.of(a + t.length),
          range: S.cursor(a + t.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : s.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function pl(s, t) {
  let e = ht(s).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function Eg(s, t, e, i) {
  let n = ht(s).resolveInner(t, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = s.sliceDoc(n.from, Math.min(n.to, n.from + e.length + r)), a = l.indexOf(e);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let h = n.firstChild;
      for (; h && h.from == n.from && h.to - h.from > e.length + a; ) {
        if (s.sliceDoc(h.to - e.length, h.to) == e)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let f = n.to == t && n.parent;
    if (!f)
      break;
    n = f;
  }
  return !1;
}
function gl(s, t, e) {
  let i = s.charCategorizer(t);
  if (i(s.sliceDoc(t - 1, t)) != rt.Word)
    return t;
  for (let n of e) {
    let r = t - n.length;
    if (s.sliceDoc(r, t) == n && i(s.sliceDoc(r - 1, r)) != rt.Word)
      return r;
  }
  return -1;
}
const qg = [
  { key: "Ctrl-Space", run: ul },
  { mac: "Alt-`", run: ul },
  { key: "Escape", run: fg },
  { key: "ArrowDown", run: /* @__PURE__ */ Gi(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Gi(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Gi(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Gi(!1, "page") },
  { key: "Enter", run: hg }
];
class Tn {
  constructor(t, e, i, n, r, o, l, a, f, h = 0, c) {
    this.p = t, this.stack = e, this.state = i, this.reducePos = n, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = f, this.lookAhead = h, this.parent = c;
  }
  toString() {
    return `[${this.stack.filter((t, e) => e % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(t, e, i = 0) {
    let n = t.parser.context;
    return new Tn(t, [], e, i, i, 0, [], 0, n ? new ml(n, n.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(t, e) {
    this.stack.push(this.state, e, this.bufferBase + this.buffer.length), this.state = t;
  }
  reduce(t) {
    var e;
    let i = t >> 19, n = t & 65535, { parser: r } = this.p, o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = r.dynamicPrecedence(n);
    if (l && (this.score += l), i == 0) {
      this.pushState(r.getGoto(this.state, n, !0), this.reducePos), n < r.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(n, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (t & 262144 ? 6 : 0), f = a ? this.stack[a - 2] : this.p.ranges[0].from, h = this.reducePos - f;
    h >= 2e3 && !(!((e = this.p.parser.nodeSet.types[n]) === null || e === void 0) && e.isAnonymous) && (f == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = h) : this.p.lastBigReductionSize < h && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = f, this.p.lastBigReductionSize = h));
    let c = a ? this.stack[a - 1] : 0, u = this.bufferBase + this.buffer.length - c;
    if (n < r.minRepeatTerm || t & 131072) {
      let d = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(n, f, d, u + 4, !0);
    }
    if (t & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, n, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(n, f);
  }
  storeNode(t, e, i, n = 4, r = !1) {
    if (t == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (e == i)
          return;
        if (o.buffer[l - 2] >= e) {
          o.buffer[l - 2] = i;
          return;
        }
      }
    }
    if (!r || this.pos == i)
      this.buffer.push(t, e, i, n);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > i; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > i; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, n > 4 && (n -= 4);
      }
      this.buffer[o] = t, this.buffer[o + 1] = e, this.buffer[o + 2] = i, this.buffer[o + 3] = n;
    }
  }
  shift(t, e, i, n) {
    if (t & 131072)
      this.pushState(t & 65535, this.pos);
    else if ((t & 262144) == 0) {
      let r = t, { parser: o } = this.p;
      (n > this.pos || e <= o.maxNode) && (this.pos = n, o.stateFlag(r, 1) || (this.reducePos = n)), this.pushState(r, i), this.shiftContext(e, i), e <= o.maxNode && this.buffer.push(e, i, n, 4);
    } else
      this.pos = n, this.shiftContext(e, i), e <= this.p.parser.maxNode && this.buffer.push(e, i, n, 4);
  }
  apply(t, e, i, n) {
    t & 65536 ? this.reduce(t) : this.shift(t, e, i, n);
  }
  useNode(t, e) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != t) && (this.p.reused.push(t), i++);
    let n = this.pos;
    this.reducePos = this.pos = n + t.length, this.pushState(e, n), this.buffer.push(i, n, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)));
  }
  split() {
    let t = this, e = t.buffer.length;
    for (; e > 0 && t.buffer[e - 2] > t.reducePos; )
      e -= 4;
    let i = t.buffer.slice(e), n = t.bufferBase + e;
    for (; t && n == t.bufferBase; )
      t = t.parent;
    return new Tn(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, n, this.curContext, this.lookAhead, t);
  }
  recoverByDelete(t, e) {
    let i = t <= this.p.parser.maxNode;
    i && this.storeNode(t, this.pos, e, 4), this.storeNode(0, this.pos, e, i ? 8 : 4), this.pos = this.reducePos = e, this.score -= 190;
  }
  canShift(t) {
    for (let e = new $g(this); ; ) {
      let i = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, t);
      if (i == 0)
        return !1;
      if ((i & 65536) == 0)
        return !0;
      e.reduce(i);
    }
  }
  recoverByInsert(t) {
    if (this.stack.length >= 300)
      return [];
    let e = this.p.parser.nextStates(this.state);
    if (e.length > 4 << 1 || this.stack.length >= 120) {
      let n = [];
      for (let r = 0, o; r < e.length; r += 2)
        (o = e[r + 1]) != this.state && this.p.parser.hasAction(o, t) && n.push(e[r], o);
      if (this.stack.length < 120)
        for (let r = 0; n.length < 4 << 1 && r < e.length; r += 2) {
          let o = e[r + 1];
          n.some((l, a) => a & 1 && l == o) || n.push(e[r], o);
        }
      e = n;
    }
    let i = [];
    for (let n = 0; n < e.length && i.length < 4; n += 2) {
      let r = e[n + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(e[n], this.pos), o.reducePos = this.pos, o.score -= 200, i.push(o);
    }
    return i;
  }
  forceReduce() {
    let { parser: t } = this.p, e = t.stateSlot(this.state, 5);
    if ((e & 65536) == 0)
      return !1;
    if (!t.validAction(this.state, e)) {
      let i = e >> 19, n = e & 65535, r = this.stack.length - i * 3;
      if (r < 0 || t.getGoto(this.stack[r], n, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        e = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e), !0;
  }
  findForcedReduction() {
    let { parser: t } = this.p, e = [], i = (n, r) => {
      if (!e.includes(n))
        return e.push(n), t.allActions(n, (o) => {
          if (!(o & 393216))
            if (o & 65536) {
              let l = (o >> 19) - r;
              if (l > 1) {
                let a = o & 65535, f = this.stack.length - l * 3;
                if (f >= 0 && t.getGoto(this.stack[f], a, !1) >= 0)
                  return l << 19 | 65536 | a;
              }
            } else {
              let l = i(o, r + 1);
              if (l != null)
                return l;
            }
        });
    };
    return i(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: t } = this.p;
    return t.data[t.stateSlot(this.state, 1)] == 65535 && !t.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(t) {
    if (this.state != t.state || this.stack.length != t.stack.length)
      return !1;
    for (let e = 0; e < this.stack.length; e += 3)
      if (this.stack[e] != t.stack[e])
        return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(t) {
    return this.p.parser.dialect.flags[t];
  }
  shiftContext(t, e) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)));
  }
  reduceContext(t, e) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)));
  }
  emitContext() {
    let t = this.buffer.length - 1;
    (t < 0 || this.buffer[t] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let t = this.buffer.length - 1;
    (t < 0 || this.buffer[t] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(t) {
    if (t != this.curContext.context) {
      let e = new ml(this.curContext.tracker, t);
      e.hash != this.curContext.hash && this.emitContext(), this.curContext = e;
    }
  }
  setLookAhead(t) {
    t > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ml {
  constructor(t, e) {
    this.tracker = t, this.context = e, this.hash = t.strict ? t.hash(e) : 0;
  }
}
class $g {
  constructor(t) {
    this.start = t, this.state = t.state, this.stack = t.stack, this.base = this.stack.length;
  }
  reduce(t) {
    let e = t & 65535, i = t >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let n = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
    this.state = n;
  }
}
class Qn {
  constructor(t, e, i) {
    this.stack = t, this.pos = e, this.index = i, this.buffer = t.buffer, this.index == 0 && this.maybeNext();
  }
  static create(t, e = t.bufferBase + t.buffer.length) {
    return new Qn(t, e, e - t.bufferBase);
  }
  maybeNext() {
    let t = this.stack.parent;
    t != null && (this.index = this.stack.bufferBase - t.bufferBase, this.stack = t, this.buffer = t.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new Qn(this.stack, this.pos, this.index);
  }
}
function Hi(s, t = Uint16Array) {
  if (typeof s != "string")
    return s;
  let e = null;
  for (let i = 0, n = 0; i < s.length; ) {
    let r = 0;
    for (; ; ) {
      let o = s.charCodeAt(i++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    e ? e[n++] = r : e = new t(r);
  }
  return e;
}
class ln {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const Ol = new ln();
class Bg {
  constructor(t, e) {
    this.input = t, this.ranges = e, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Ol, this.rangeIndex = 0, this.pos = this.chunkPos = e[0].from, this.range = e[0], this.end = e[e.length - 1].to, this.readNext();
  }
  resolveOffset(t, e) {
    let i = this.range, n = this.rangeIndex, r = this.pos + t;
    for (; r < i.from; ) {
      if (!n)
        return null;
      let o = this.ranges[--n];
      r -= i.from - o.to, i = o;
    }
    for (; e < 0 ? r > i.to : r >= i.to; ) {
      if (n == this.ranges.length - 1)
        return null;
      let o = this.ranges[++n];
      r += o.from - i.to, i = o;
    }
    return r;
  }
  clipPos(t) {
    if (t >= this.range.from && t < this.range.to)
      return t;
    for (let e of this.ranges)
      if (e.to > t)
        return Math.max(t, e.from);
    return this.end;
  }
  peek(t) {
    let e = this.chunkOff + t, i, n;
    if (e >= 0 && e < this.chunk.length)
      i = this.pos + t, n = this.chunk.charCodeAt(e);
    else {
      let r = this.resolveOffset(t, 1);
      if (r == null)
        return -1;
      if (i = r, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        n = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= i; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)), n = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), n;
  }
  acceptToken(t, e = 0) {
    let i = e ? this.resolveOffset(e, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = t, this.token.end = i;
  }
  acceptTokenTo(t, e) {
    this.token.value = t, this.token.end = e;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: t, chunkPos: e } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t, this.chunk2Pos = e, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let t = this.input.chunk(this.pos), e = this.pos + t.length;
      this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance(t = 1) {
    for (this.chunkOff += t; this.pos + t >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      t -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += t, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  reset(t, e) {
    if (e ? (this.token = e, e.start = t, e.lookAhead = t + 1, e.value = e.extended = -1) : this.token = Ol, this.pos != t) {
      if (this.pos = t, t == this.end)
        return this.setDone(), this;
      for (; t < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; t >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      t >= this.chunkPos && t < this.chunkPos + this.chunk.length ? this.chunkOff = t - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(t, e) {
    if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
    if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
    if (t >= this.range.from && e <= this.range.to)
      return this.input.read(t, e);
    let i = "";
    for (let n of this.ranges) {
      if (n.from >= e)
        break;
      n.to > t && (i += this.input.read(Math.max(n.from, t), Math.min(n.to, e)));
    }
    return i;
  }
}
class ze {
  constructor(t, e) {
    this.data = t, this.id = e;
  }
  token(t, e) {
    let { parser: i } = e.p;
    zg(this.data, t, e, this.id, i.data, i.tokenPrecTable);
  }
}
ze.prototype.contextual = ze.prototype.fallback = ze.prototype.extend = !1;
ze.prototype.fallback = ze.prototype.extend = !1;
class Nn {
  constructor(t, e = {}) {
    this.token = t, this.contextual = !!e.contextual, this.fallback = !!e.fallback, this.extend = !!e.extend;
  }
}
function zg(s, t, e, i, n, r) {
  let o = 0, l = 1 << i, { dialect: a } = e.p.parser;
  t:
    for (; (l & s[o]) != 0; ) {
      let f = s[o + 1];
      for (let d = o + 3; d < f; d += 2)
        if ((s[d + 1] & l) > 0) {
          let p = s[d];
          if (a.allows(p) && (t.token.value == -1 || t.token.value == p || Wg(p, t.token.value, n, r))) {
            t.acceptToken(p);
            break;
          }
        }
      let h = t.next, c = 0, u = s[o + 2];
      if (t.next < 0 && u > c && s[f + u * 3 - 3] == 65535) {
        o = s[f + u * 3 - 1];
        continue t;
      }
      for (; c < u; ) {
        let d = c + u >> 1, p = f + d + (d << 1), g = s[p], m = s[p + 1] || 65536;
        if (h < g)
          u = d;
        else if (h >= m)
          c = d + 1;
        else {
          o = s[p + 2], t.advance();
          continue t;
        }
      }
      break;
    }
}
function yl(s, t, e) {
  for (let i = t, n; (n = s[i]) != 65535; i++)
    if (n == e)
      return i - t;
  return -1;
}
function Wg(s, t, e, i) {
  let n = yl(e, i, t);
  return n < 0 || yl(e, i, s) < n;
}
const pt = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let cs = null;
function Sl(s, t, e) {
  let i = s.cursor(K.IncludeAnonymous);
  for (i.moveTo(t); ; )
    if (!(e < 0 ? i.childBefore(t) : i.childAfter(t)))
      for (; ; ) {
        if ((e < 0 ? i.to < t : i.from > t) && !i.type.isError)
          return e < 0 ? Math.max(0, Math.min(i.to - 1, t - 25)) : Math.min(s.length, Math.max(i.from + 1, t + 25));
        if (e < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return e < 0 ? 0 : s.length;
      }
}
class Lg {
  constructor(t, e) {
    this.fragments = t, this.nodeSet = e, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (t) {
      for (this.safeFrom = t.openStart ? Sl(t.tree, t.from + t.offset, 1) - t.offset : t.from, this.safeTo = t.openEnd ? Sl(t.tree, t.to + t.offset, -1) - t.offset : t.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(t.tree), this.start.push(-t.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  nodeAt(t) {
    if (t < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= t; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let e = this.trees.length - 1;
      if (e < 0)
        return this.nextFragment(), null;
      let i = this.trees[e], n = this.index[e];
      if (n == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = i.children[n], o = this.start[e] + i.positions[n];
      if (o > t)
        return this.nextStart = o, null;
      if (r instanceof Z) {
        if (o == t) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(D.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[e]++, o + r.length >= Math.max(this.safeFrom, t) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[e]++, this.nextStart = o + r.length;
    }
  }
}
class Vg {
  constructor(t, e) {
    this.stream = e, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t.tokenizers.map((i) => new ln());
  }
  getActions(t) {
    let e = 0, i = null, { parser: n } = t.p, { tokenizers: r } = n, o = n.stateSlot(t.state, 3), l = t.curContext ? t.curContext.hash : 0, a = 0;
    for (let f = 0; f < r.length; f++) {
      if ((1 << f & o) == 0)
        continue;
      let h = r[f], c = this.tokens[f];
      if (!(i && !h.fallback) && ((h.contextual || c.start != t.pos || c.mask != o || c.context != l) && (this.updateCachedToken(c, h, t), c.mask = o, c.context = l), c.lookAhead > c.end + 25 && (a = Math.max(c.lookAhead, a)), c.value != 0)) {
        let u = e;
        if (c.extended > -1 && (e = this.addActions(t, c.extended, c.end, e)), e = this.addActions(t, c.value, c.end, e), !h.extend && (i = c, e > u))
          break;
      }
    }
    for (; this.actions.length > e; )
      this.actions.pop();
    return a && t.setLookAhead(a), !i && t.pos == this.stream.end && (i = new ln(), i.value = t.p.parser.eofTerm, i.start = i.end = t.pos, e = this.addActions(t, i.value, i.end, e)), this.mainToken = i, this.actions;
  }
  getMainToken(t) {
    if (this.mainToken)
      return this.mainToken;
    let e = new ln(), { pos: i, p: n } = t;
    return e.start = i, e.end = Math.min(i + 1, n.stream.end), e.value = i == n.stream.end ? n.parser.eofTerm : 0, e;
  }
  updateCachedToken(t, e, i) {
    let n = this.stream.clipPos(i.pos);
    if (e.token(this.stream.reset(n, t), i), t.value > -1) {
      let { parser: r } = i.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == t.value) {
          let l = r.specializers[o](this.stream.read(t.start, t.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? t.value = l >> 1 : t.extended = l >> 1;
            break;
          }
        }
    } else
      t.value = 0, t.end = this.stream.clipPos(n + 1);
  }
  putAction(t, e, i, n) {
    for (let r = 0; r < n; r += 3)
      if (this.actions[r] == t)
        return n;
    return this.actions[n++] = t, this.actions[n++] = e, this.actions[n++] = i, n;
  }
  addActions(t, e, i, n) {
    let { state: r } = t, { parser: o } = t.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let f = o.stateSlot(r, a ? 2 : 1); ; f += 3) {
        if (l[f] == 65535)
          if (l[f + 1] == 1)
            f = Jt(l, f + 2);
          else {
            n == 0 && l[f + 1] == 2 && (n = this.putAction(Jt(l, f + 2), e, i, n));
            break;
          }
        l[f] == e && (n = this.putAction(Jt(l, f + 1), e, i, n));
      }
    return n;
  }
}
class Ng {
  constructor(t, e, i, n) {
    this.parser = t, this.input = e, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Bg(e, n), this.tokens = new Vg(t, this.stream), this.topTerm = t.top[1];
    let { from: r } = n[0];
    this.stacks = [Tn.start(this, t.top[0], r)], this.fragments = i.length && this.stream.end - r > t.bufferLength * 4 ? new Lg(i, t.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let t = this.stacks, e = this.minStackPos, i = this.stacks = [], n, r;
    if (this.bigReductionCount > 300 && t.length == 1) {
      let [o] = t;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > e)
          i.push(l);
        else {
          if (this.advanceStack(l, i, t))
            continue;
          {
            n || (n = [], r = []), n.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = n && Fg(n);
      if (o)
        return pt && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw pt && n && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + e);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && n) {
      let o = this.stoppedAt != null && n[0].pos > this.stoppedAt ? n[0] : this.runRecovery(n, r, i);
      if (o)
        return pt && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o)
        for (i.sort((l, a) => a.score - l.score); i.length > o; )
          i.pop();
      i.some((l) => l.reducePos > e) && this.recovering--;
    } else if (i.length > 1) {
      t:
        for (let o = 0; o < i.length - 1; o++) {
          let l = i[o];
          for (let a = o + 1; a < i.length; a++) {
            let f = i[a];
            if (l.sameState(f) || l.buffer.length > 500 && f.buffer.length > 500)
              if ((l.score - f.score || l.buffer.length - f.buffer.length) > 0)
                i.splice(a--, 1);
              else {
                i.splice(o--, 1);
                continue t;
              }
          }
        }
      i.length > 12 && i.splice(12, i.length - 12);
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++)
      i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
    return null;
  }
  stopAt(t) {
    if (this.stoppedAt != null && this.stoppedAt < t)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = t;
  }
  advanceStack(t, e, i) {
    let n = t.pos, { parser: r } = this, o = pt ? this.stackID(t) + " -> " : "";
    if (this.stoppedAt != null && n > this.stoppedAt)
      return t.forceReduce() ? t : null;
    if (this.fragments) {
      let f = t.curContext && t.curContext.tracker.strict, h = f ? t.curContext.hash : 0;
      for (let c = this.fragments.nodeAt(n); c; ) {
        let u = this.parser.nodeSet.types[c.type.id] == c.type ? r.getGoto(t.state, c.type.id) : -1;
        if (u > -1 && c.length && (!f || (c.prop(D.contextHash) || 0) == h))
          return t.useNode(c, u), pt && console.log(o + this.stackID(t) + ` (via reuse of ${r.getName(c.type.id)})`), !0;
        if (!(c instanceof Z) || c.children.length == 0 || c.positions[0] > 0)
          break;
        let d = c.children[0];
        if (d instanceof Z && c.positions[0] == 0)
          c = d;
        else
          break;
      }
    }
    let l = r.stateSlot(t.state, 4);
    if (l > 0)
      return t.reduce(l), pt && console.log(o + this.stackID(t) + ` (via always-reduce ${r.getName(l & 65535)})`), !0;
    if (t.stack.length >= 8400)
      for (; t.stack.length > 6e3 && t.forceReduce(); )
        ;
    let a = this.tokens.getActions(t);
    for (let f = 0; f < a.length; ) {
      let h = a[f++], c = a[f++], u = a[f++], d = f == a.length || !i, p = d ? t : t.split(), g = this.tokens.mainToken;
      if (p.apply(h, c, g ? g.start : p.pos, u), pt && console.log(o + this.stackID(p) + ` (via ${(h & 65536) == 0 ? "shift" : `reduce of ${r.getName(h & 65535)}`} for ${r.getName(c)} @ ${n}${p == t ? "" : ", split"})`), d)
        return !0;
      p.pos > n ? e.push(p) : i.push(p);
    }
    return !1;
  }
  advanceFully(t, e) {
    let i = t.pos;
    for (; ; ) {
      if (!this.advanceStack(t, null, null))
        return !1;
      if (t.pos > i)
        return bl(t, e), !0;
    }
  }
  runRecovery(t, e, i) {
    let n = null, r = !1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o], a = e[o << 1], f = e[(o << 1) + 1], h = pt ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), pt && console.log(h + this.stackID(l) + " (restarted)"), this.advanceFully(l, i))))
        continue;
      let c = l.split(), u = h;
      for (let d = 0; c.forceReduce() && d < 10 && (pt && console.log(u + this.stackID(c) + " (via force-reduce)"), !this.advanceFully(c, i)); d++)
        pt && (u = this.stackID(c) + " -> ");
      for (let d of l.recoverByInsert(a))
        pt && console.log(h + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > l.pos ? (f == l.pos && (f++, a = 0), l.recoverByDelete(a, f), pt && console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), bl(l, i)) : (!n || n.score < l.score) && (n = l);
    }
    return n;
  }
  stackToTree(t) {
    return t.close(), Z.build({
      buffer: Qn.create(t),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: t.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(t) {
    let e = (cs || (cs = /* @__PURE__ */ new WeakMap())).get(t);
    return e || cs.set(t, e = String.fromCodePoint(this.nextStackID++)), e + t;
  }
}
function bl(s, t) {
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    if (i.pos == s.pos && i.sameState(s)) {
      t[e].score < s.score && (t[e] = s);
      return;
    }
  }
  t.push(s);
}
class Ig {
  constructor(t, e, i) {
    this.source = t, this.flags = e, this.disabled = i;
  }
  allows(t) {
    return !this.disabled || this.disabled[t] == 0;
  }
}
const us = (s) => s;
class Xg {
  constructor(t) {
    this.start = t.start, this.shift = t.shift || us, this.reduce = t.reduce || us, this.reuse = t.reuse || us, this.hash = t.hash || (() => 0), this.strict = t.strict !== !1;
  }
}
class Cn extends Ga {
  constructor(t) {
    if (super(), this.wrappers = [], t.version != 14)
      throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (${14})`);
    let e = t.nodeNames.split(" ");
    this.minRepeatTerm = e.length;
    for (let l = 0; l < t.repeatNodeCount; l++)
      e.push("");
    let i = Object.keys(t.topRules).map((l) => t.topRules[l][1]), n = [];
    for (let l = 0; l < e.length; l++)
      n.push([]);
    function r(l, a, f) {
      n[l].push([a, a.deserialize(String(f))]);
    }
    if (t.nodeProps)
      for (let l of t.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = D[a]);
        for (let f = 1; f < l.length; ) {
          let h = l[f++];
          if (h >= 0)
            r(h, a, l[f++]);
          else {
            let c = l[f + -h];
            for (let u = -h; u > 0; u--)
              r(l[f++], a, c);
            f++;
          }
        }
      }
    this.nodeSet = new kr(e.map((l, a) => dt.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: n[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: t.skippedNodes && t.skippedNodes.indexOf(a) > -1
    }))), t.propSources && (this.nodeSet = this.nodeSet.extend(...t.propSources)), this.strict = !1, this.bufferLength = Fa;
    let o = Hi(t.tokenData);
    this.context = t.context, this.specializerSpecs = t.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(xl), this.states = Hi(t.states, Uint32Array), this.data = Hi(t.stateData), this.goto = Hi(t.goto), this.maxTerm = t.maxTerm, this.tokenizers = t.tokenizers.map((l) => typeof l == "number" ? new ze(o, l) : l), this.topRules = t.topRules, this.dialects = t.dialects || {}, this.dynamicPrecedences = t.dynamicPrecedences || null, this.tokenPrecTable = t.tokenPrec, this.termNames = t.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(t, e, i) {
    let n = new Ng(this, t, e, i);
    for (let r of this.wrappers)
      n = r(n, t, e, i);
    return n;
  }
  getGoto(t, e, i = !1) {
    let n = this.goto;
    if (e >= n[0])
      return -1;
    for (let r = n[e + 1]; ; ) {
      let o = n[r++], l = o & 1, a = n[r++];
      if (l && i)
        return a;
      for (let f = r + (o >> 1); r < f; r++)
        if (n[r] == t)
          return a;
      if (l)
        return -1;
    }
  }
  hasAction(t, e) {
    let i = this.data;
    for (let n = 0; n < 2; n++)
      for (let r = this.stateSlot(t, n ? 2 : 1), o; ; r += 3) {
        if ((o = i[r]) == 65535)
          if (i[r + 1] == 1)
            o = i[r = Jt(i, r + 2)];
          else {
            if (i[r + 1] == 2)
              return Jt(i, r + 2);
            break;
          }
        if (o == e || o == 0)
          return Jt(i, r + 1);
      }
    return 0;
  }
  stateSlot(t, e) {
    return this.states[t * 6 + e];
  }
  stateFlag(t, e) {
    return (this.stateSlot(t, 0) & e) > 0;
  }
  validAction(t, e) {
    return !!this.allActions(t, (i) => i == e ? !0 : null);
  }
  allActions(t, e) {
    let i = this.stateSlot(t, 4), n = i ? e(i) : void 0;
    for (let r = this.stateSlot(t, 1); n == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = Jt(this.data, r + 2);
        else
          break;
      n = e(Jt(this.data, r + 1));
    }
    return n;
  }
  nextStates(t) {
    let e = [];
    for (let i = this.stateSlot(t, 1); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = Jt(this.data, i + 2);
        else
          break;
      if ((this.data[i + 2] & 1) == 0) {
        let n = this.data[i + 1];
        e.some((r, o) => o & 1 && r == n) || e.push(this.data[i], n);
      }
    }
    return e;
  }
  configure(t) {
    let e = Object.assign(Object.create(Cn.prototype), this);
    if (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
      let i = this.topRules[t.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${t.top}`);
      e.top = i;
    }
    return t.tokenizers && (e.tokenizers = this.tokenizers.map((i) => {
      let n = t.tokenizers.find((r) => r.from == i);
      return n ? n.to : i;
    })), t.specializers && (e.specializers = this.specializers.slice(), e.specializerSpecs = this.specializerSpecs.map((i, n) => {
      let r = t.specializers.find((l) => l.from == i.external);
      if (!r)
        return i;
      let o = Object.assign(Object.assign({}, i), { external: r.to });
      return e.specializers[n] = xl(o), o;
    })), t.contextTracker && (e.context = t.contextTracker), t.dialect && (e.dialect = this.parseDialect(t.dialect)), t.strict != null && (e.strict = t.strict), t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)), t.bufferLength != null && (e.bufferLength = t.bufferLength), e;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(t) {
    return this.termNames ? this.termNames[t] : String(t <= this.maxNode && this.nodeSet.types[t].name || t);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(t) {
    let e = this.dynamicPrecedences;
    return e == null ? 0 : e[t] || 0;
  }
  parseDialect(t) {
    let e = Object.keys(this.dialects), i = e.map(() => !1);
    if (t)
      for (let r of t.split(" ")) {
        let o = e.indexOf(r);
        o >= 0 && (i[o] = !0);
      }
    let n = null;
    for (let r = 0; r < e.length; r++)
      if (!i[r])
        for (let o = this.dialects[e[r]], l; (l = this.data[o++]) != 65535; )
          (n || (n = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new Ig(t, i, n);
  }
  static deserialize(t) {
    return new Cn(t);
  }
}
function Jt(s, t) {
  return s[t] | s[t + 1] << 16;
}
function Fg(s) {
  let t = null;
  for (let e of s) {
    let i = e.p.stoppedAt;
    (e.pos == e.p.stream.end || i != null && e.pos > i) && e.p.parser.stateFlag(e.state, 2) && (!t || t.score < e.score) && (t = e);
  }
  return t;
}
function xl(s) {
  if (s.external) {
    let t = s.extend ? 1 : 0;
    return (e, i) => s.external(e, i) << 1 | t;
  }
  return s.get;
}
const _g = 1, Yh = 194, Kh = 195, Ug = 196, kl = 197, jg = 198, Gg = 199, Hg = 200, Zg = 2, Jh = 3, wl = 201, Yg = 24, Kg = 25, Jg = 49, tm = 50, em = 55, im = 56, nm = 57, sm = 59, rm = 60, om = 61, lm = 62, am = 63, hm = 65, fm = 238, cm = 71, um = 241, dm = 242, pm = 243, gm = 244, mm = 245, Om = 246, ym = 247, Sm = 248, tf = 72, bm = 249, xm = 250, km = 251, wm = 252, vm = 253, Tm = 254, Qm = 255, Cm = 256, Pm = 73, Am = 77, Rm = 263, Mm = 112, Dm = 130, Em = 151, qm = 152, $m = 155, Pe = 10, ki = 13, zr = 32, In = 9, Wr = 35, Bm = 40, zm = 46, or = 123, vl = 125, ef = 39, nf = 34, Wm = 92, Lm = 111, Vm = 120, Nm = 78, Im = 117, Xm = 85, Fm = /* @__PURE__ */ new Set([
  Kg,
  Jg,
  tm,
  Rm,
  hm,
  Dm,
  im,
  nm,
  fm,
  lm,
  am,
  tf,
  Pm,
  Am,
  rm,
  om,
  Em,
  qm,
  $m,
  Mm
]);
function ds(s) {
  return s == Pe || s == ki;
}
function ps(s) {
  return s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102;
}
const _m = new Nn((s, t) => {
  let e;
  if (s.next < 0)
    s.acceptToken(Gg);
  else if (t.context.flags & an)
    ds(s.next) && s.acceptToken(jg, 1);
  else if (((e = s.peek(-1)) < 0 || ds(e)) && t.canShift(kl)) {
    let i = 0;
    for (; s.next == zr || s.next == In; )
      s.advance(), i++;
    (s.next == Pe || s.next == ki || s.next == Wr) && s.acceptToken(kl, -i);
  } else
    ds(s.next) && s.acceptToken(Ug, 1);
}, { contextual: !0 }), Um = new Nn((s, t) => {
  let e = t.context;
  if (e.flags)
    return;
  let i = s.peek(-1);
  if (i == Pe || i == ki) {
    let n = 0, r = 0;
    for (; ; ) {
      if (s.next == zr)
        n++;
      else if (s.next == In)
        n += 8 - n % 8;
      else
        break;
      s.advance(), r++;
    }
    n != e.indent && s.next != Pe && s.next != ki && s.next != Wr && (n < e.indent ? s.acceptToken(Kh, -r) : s.acceptToken(Yh));
  }
}), an = 1, sf = 2, Ht = 4, Zt = 8, Yt = 16, Kt = 32;
function hn(s, t, e) {
  this.parent = s, this.indent = t, this.flags = e, this.hash = (s ? s.hash + s.hash << 8 : 0) + t + (t << 4) + e + (e << 6);
}
const jm = new hn(null, 0, 0);
function Gm(s) {
  let t = 0;
  for (let e = 0; e < s.length; e++)
    t += s.charCodeAt(e) == In ? 8 - t % 8 : 1;
  return t;
}
const Tl = new Map([
  [um, 0],
  [dm, Ht],
  [pm, Zt],
  [gm, Zt | Ht],
  [mm, Yt],
  [Om, Yt | Ht],
  [ym, Yt | Zt],
  [Sm, Yt | Zt | Ht],
  [bm, Kt],
  [xm, Kt | Ht],
  [km, Kt | Zt],
  [wm, Kt | Zt | Ht],
  [vm, Kt | Yt],
  [Tm, Kt | Yt | Ht],
  [Qm, Kt | Yt | Zt],
  [Cm, Kt | Yt | Zt | Ht]
].map(([s, t]) => [s, t | sf])), Hm = new Xg({
  start: jm,
  reduce(s, t, e, i) {
    return s.flags & an && Fm.has(t) || (t == cm || t == tf) && s.flags & sf ? s.parent : s;
  },
  shift(s, t, e, i) {
    return t == Yh ? new hn(s, Gm(i.read(i.pos, e.pos)), 0) : t == Kh ? s.parent : t == Yg || t == em || t == sm || t == Jh ? new hn(s, 0, an) : Tl.has(t) ? new hn(s, 0, Tl.get(t) | s.flags & an) : s;
  },
  hash(s) {
    return s.hash;
  }
}), Zm = new Nn((s) => {
  for (let t = 0; t < 5; t++) {
    if (s.next != "print".charCodeAt(t))
      return;
    s.advance();
  }
  if (!/\w/.test(String.fromCharCode(s.next)))
    for (let t = 0; ; t++) {
      let e = s.peek(t);
      if (!(e == zr || e == In)) {
        e != Bm && e != zm && e != Pe && e != ki && e != Wr && s.acceptToken(_g);
        return;
      }
    }
}), Ym = new Nn((s, t) => {
  let { flags: e } = t.context, i = e & Ht ? nf : ef, n = (e & Zt) > 0, r = !(e & Yt), o = (e & Kt) > 0, l = s.pos;
  for (; !(s.next < 0); )
    if (o && s.next == or)
      if (s.peek(1) == or)
        s.advance(2);
      else {
        if (s.pos == l) {
          s.acceptToken(Jh, 1);
          return;
        }
        break;
      }
    else if (r && s.next == Wm) {
      if (s.pos == l) {
        s.advance();
        let a = s.next;
        a >= 0 && (s.advance(), Km(s, a)), s.acceptToken(Zg);
        return;
      }
      break;
    } else if (s.next == i && (!n || s.peek(1) == i && s.peek(2) == i)) {
      if (s.pos == l) {
        s.acceptToken(wl, n ? 3 : 1);
        return;
      }
      break;
    } else if (s.next == Pe) {
      if (n)
        s.advance();
      else if (s.pos == l) {
        s.acceptToken(wl);
        return;
      }
      break;
    } else
      s.advance();
  s.pos > l && s.acceptToken(Hg);
});
function Km(s, t) {
  if (t == Lm)
    for (let e = 0; e < 2 && s.next >= 48 && s.next <= 55; e++)
      s.advance();
  else if (t == Vm)
    for (let e = 0; e < 2 && ps(s.next); e++)
      s.advance();
  else if (t == Im)
    for (let e = 0; e < 4 && ps(s.next); e++)
      s.advance();
  else if (t == Xm)
    for (let e = 0; e < 8 && ps(s.next); e++)
      s.advance();
  else if (t == Nm && s.next == or) {
    for (s.advance(); s.next >= 0 && s.next != vl && s.next != ef && s.next != nf && s.next != Pe; )
      s.advance();
    s.next == vl && s.advance();
  }
}
const Jm = Ha({
  'async "*" "**" FormatConversion FormatSpec': y.modifier,
  "for while if elif else try except finally return raise break continue with pass assert await yield match case": y.controlKeyword,
  "in not and or is del": y.operatorKeyword,
  "from def class global nonlocal lambda": y.definitionKeyword,
  import: y.moduleKeyword,
  "with as print": y.keyword,
  Boolean: y.bool,
  None: y.null,
  VariableName: y.variableName,
  "CallExpression/VariableName": y.function(y.variableName),
  "FunctionDefinition/VariableName": y.function(y.definition(y.variableName)),
  "ClassDefinition/VariableName": y.definition(y.className),
  PropertyName: y.propertyName,
  "CallExpression/MemberExpression/PropertyName": y.function(y.propertyName),
  Comment: y.lineComment,
  Number: y.number,
  String: y.string,
  FormatString: y.special(y.string),
  Escape: y.escape,
  UpdateOp: y.updateOperator,
  "ArithOp!": y.arithmeticOperator,
  BitOp: y.bitwiseOperator,
  CompareOp: y.compareOperator,
  AssignOp: y.definitionOperator,
  Ellipsis: y.punctuation,
  At: y.meta,
  "( )": y.paren,
  "[ ]": y.squareBracket,
  "{ }": y.brace,
  ".": y.derefOperator,
  ", ;": y.separator
}), tO = { __proto__: null, await: 44, or: 54, and: 56, in: 60, not: 62, is: 64, if: 70, else: 72, lambda: 76, yield: 94, from: 96, async: 102, for: 104, None: 162, True: 164, False: 164, del: 178, pass: 182, break: 186, continue: 190, return: 194, raise: 202, import: 206, as: 208, global: 212, nonlocal: 214, assert: 218, type: 223, elif: 236, while: 240, try: 246, except: 248, finally: 250, with: 254, def: 258, class: 268, match: 279, case: 285 }, eO = Cn.deserialize({
  version: 14,
  states: "##jO`QeOOP$}OSOOO&WQtO'#HUOOQS'#Co'#CoOOQS'#Cp'#CpO'vQdO'#CnO*UQtO'#HTOOQS'#HU'#HUOOQS'#DU'#DUOOQS'#HT'#HTO*rQdO'#D_O+VQdO'#DfO+gQdO'#DjO+zOWO'#DuO,VOWO'#DvO.[QtO'#GuOOQS'#Gu'#GuO'vQdO'#GtO0ZQtO'#GtOOQS'#Eb'#EbO0rQdO'#EcOOQS'#Gs'#GsO0|QdO'#GrOOQV'#Gr'#GrO1XQdO'#FYOOQS'#G^'#G^O1^QdO'#FXOOQV'#IS'#ISOOQV'#Gq'#GqOOQV'#Fq'#FqQ`QeOOO'vQdO'#CqO1lQdO'#C}O1sQdO'#DRO2RQdO'#HYO2cQtO'#EVO'vQdO'#EWOOQS'#EY'#EYOOQS'#E['#E[OOQS'#E^'#E^O2wQdO'#E`O3_QdO'#EdO3rQdO'#EfO3zQtO'#EfO1XQdO'#EiO0rQdO'#ElO1XQdO'#EnO0rQdO'#EtO0rQdO'#EwO4VQdO'#EyO4^QdO'#FOO4iQdO'#EzO0rQdO'#FOO1XQdO'#FQO1XQdO'#FVO4nQdO'#F[P4uOdO'#GpPOOO)CBd)CBdOOQS'#Ce'#CeOOQS'#Cf'#CfOOQS'#Cg'#CgOOQS'#Ch'#ChOOQS'#Ci'#CiOOQS'#Cj'#CjOOQS'#Cl'#ClO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO5TQdO'#DoOOQS,5:Y,5:YO5hQdO'#HdOOQS,5:],5:]O5uQ!fO,5:]O5zQtO,59YO1lQdO,59bO1lQdO,59bO1lQdO,59bO8jQdO,59bO8oQdO,59bO8vQdO,59jO8}QdO'#HTO:TQdO'#HSOOQS'#HS'#HSOOQS'#D['#D[O:lQdO,59aO'vQdO,59aO:zQdO,59aOOQS,59y,59yO;PQdO,5:RO'vQdO,5:ROOQS,5:Q,5:QO;_QdO,5:QO;dQdO,5:XO'vQdO,5:XO'vQdO,5:VOOQS,5:U,5:UO;uQdO,5:UO;zQdO,5:WOOOW'#Fy'#FyO<POWO,5:aOOQS,5:a,5:aO<[QdO'#HwOOOW'#Dw'#DwOOOW'#Fz'#FzO<lOWO,5:bOOQS,5:b,5:bOOQS'#F}'#F}O<zQtO,5:iO?lQtO,5=`O@VQ#xO,5=`O@vQtO,5=`OOQS,5:},5:}OA_QeO'#GWOBqQdO,5;^OOQV,5=^,5=^OB|QtO'#IPOCkQdO,5;tOOQS-E:[-E:[OOQV,5;s,5;sO4dQdO'#FQOOQV-E9o-E9oOCsQtO,59]OEzQtO,59iOFeQdO'#HVOFpQdO'#HVO1XQdO'#HVOF{QdO'#DTOGTQdO,59mOGYQdO'#HZO'vQdO'#HZO0rQdO,5=tOOQS,5=t,5=tO0rQdO'#EROOQS'#ES'#ESOGwQdO'#GPOHXQdO,58|OHXQdO,58|O*xQdO,5:oOHgQtO'#H]OOQS,5:r,5:rOOQS,5:z,5:zOHzQdO,5;OOI]QdO'#IOO1XQdO'#H}OOQS,5;Q,5;QOOQS'#GT'#GTOIqQtO,5;QOJPQdO,5;QOJUQdO'#IQOOQS,5;T,5;TOJdQdO'#H|OOQS,5;W,5;WOJuQdO,5;YO4iQdO,5;`O4iQdO,5;cOJ}QtO'#ITO'vQdO'#ITOKXQdO,5;eO4VQdO,5;eO0rQdO,5;jO1XQdO,5;lOK^QeO'#EuOLjQgO,5;fO!!kQdO'#IUO4iQdO,5;jO!!vQdO,5;lO!#OQdO,5;qO!#ZQtO,5;vO'vQdO,5;vPOOO,5=[,5=[P!#bOSO,5=[P!#jOdO,5=[O!&bQtO1G.jO!&iQtO1G.jO!)YQtO1G.jO!)dQtO1G.jO!+}QtO1G.jO!,bQtO1G.jO!,uQdO'#HcO!-TQtO'#GuO0rQdO'#HcO!-_QdO'#HbOOQS,5:Z,5:ZO!-gQdO,5:ZO!-lQdO'#HeO!-wQdO'#HeO!.[QdO,5>OOOQS'#Ds'#DsOOQS1G/w1G/wOOQS1G.|1G.|O!/[QtO1G.|O!/cQtO1G.|O1lQdO1G.|O!0OQdO1G/UOOQS'#DZ'#DZO0rQdO,59tOOQS1G.{1G.{O!0VQdO1G/eO!0gQdO1G/eO!0oQdO1G/fO'vQdO'#H[O!0tQdO'#H[O!0yQtO1G.{O!1ZQdO,59iO!2aQdO,5=zO!2qQdO,5=zO!2yQdO1G/mO!3OQtO1G/mOOQS1G/l1G/lO!3`QdO,5=uO!4VQdO,5=uO0rQdO1G/qO!4tQdO1G/sO!4yQtO1G/sO!5ZQtO1G/qOOQS1G/p1G/pOOQS1G/r1G/rOOOW-E9w-E9wOOQS1G/{1G/{O!5kQdO'#HxO0rQdO'#HxO!5|QdO,5>cOOOW-E9x-E9xOOQS1G/|1G/|OOQS-E9{-E9{O!6[Q#xO1G2zO!6{QtO1G2zO'vQdO,5<jOOQS,5<j,5<jOOQS-E9|-E9|OOQS,5<r,5<rOOQS-E:U-E:UOOQV1G0x1G0xO1XQdO'#GRO!7dQtO,5>kOOQS1G1`1G1`O!8RQdO1G1`OOQS'#DV'#DVO0rQdO,5=qOOQS,5=q,5=qO!8WQdO'#FrO!8cQdO,59oO!8kQdO1G/XO!8uQtO,5=uOOQS1G3`1G3`OOQS,5:m,5:mO!9fQdO'#GtOOQS,5<k,5<kOOQS-E9}-E9}O!9wQdO1G.hOOQS1G0Z1G0ZO!:VQdO,5=wO!:gQdO,5=wO0rQdO1G0jO0rQdO1G0jO!:xQdO,5>jO!;ZQdO,5>jO1XQdO,5>jO!;lQdO,5>iOOQS-E:R-E:RO!;qQdO1G0lO!;|QdO1G0lO!<RQdO,5>lO!<aQdO,5>lO!<oQdO,5>hO!=VQdO,5>hO!=hQdO'#EpO0rQdO1G0tO!=sQdO1G0tO!=xQgO1G0zO!AvQgO1G0}O!EqQdO,5>oO!E{QdO,5>oO!FTQtO,5>oO0rQdO1G1PO!F_QdO1G1PO4iQdO1G1UO!!vQdO1G1WOOQV,5;a,5;aO!FdQfO,5;aO!FiQgO1G1QO!JjQdO'#GZO4iQdO1G1QO4iQdO1G1QO!JzQdO,5>pO!KXQdO,5>pO1XQdO,5>pOOQV1G1U1G1UO!KaQdO'#FSO!KrQ!fO1G1WO!KzQdO1G1WOOQV1G1]1G1]O4iQdO1G1]O!LPQdO1G1]O!LXQdO'#F^OOQV1G1b1G1bO!#ZQtO1G1bPOOO1G2v1G2vP!L^OSO1G2vOOQS,5=},5=}OOQS'#Dp'#DpO0rQdO,5=}O!LfQdO,5=|O!LyQdO,5=|OOQS1G/u1G/uO!MRQdO,5>PO!McQdO,5>PO!MkQdO,5>PO!NOQdO,5>PO!N`QdO,5>POOQS1G3j1G3jOOQS7+$h7+$hO!8kQdO7+$pO#!RQdO1G.|O#!YQdO1G.|OOQS1G/`1G/`OOQS,5<`,5<`O'vQdO,5<`OOQS7+%P7+%PO#!aQdO7+%POOQS-E9r-E9rOOQS7+%Q7+%QO#!qQdO,5=vO'vQdO,5=vOOQS7+$g7+$gO#!vQdO7+%PO##OQdO7+%QO##TQdO1G3fOOQS7+%X7+%XO##eQdO1G3fO##mQdO7+%XOOQS,5<_,5<_O'vQdO,5<_O##rQdO1G3aOOQS-E9q-E9qO#$iQdO7+%]OOQS7+%_7+%_O#$wQdO1G3aO#%fQdO7+%_O#%kQdO1G3gO#%{QdO1G3gO#&TQdO7+%]O#&YQdO,5>dO#&sQdO,5>dO#&sQdO,5>dOOQS'#Dx'#DxO#'UO&jO'#DzO#'aO`O'#HyOOOW1G3}1G3}O#'fQdO1G3}O#'nQdO1G3}O#'yQ#xO7+(fO#(jQtO1G2UP#)TQdO'#GOOOQS,5<m,5<mOOQS-E:P-E:POOQS7+&z7+&zOOQS1G3]1G3]OOQS,5<^,5<^OOQS-E9p-E9pOOQS7+$s7+$sO#)bQdO,5=`O#){QdO,5=`O#*^QtO,5<aO#*qQdO1G3cOOQS-E9s-E9sOOQS7+&U7+&UO#+RQdO7+&UO#+aQdO,5<nO#+uQdO1G4UOOQS-E:Q-E:QO#,WQdO1G4UOOQS1G4T1G4TOOQS7+&W7+&WO#,iQdO7+&WOOQS,5<p,5<pO#,tQdO1G4WOOQS-E:S-E:SOOQS,5<l,5<lO#-SQdO1G4SOOQS-E:O-E:OO1XQdO'#EqO#-jQdO'#EqO#-uQdO'#IRO#-}QdO,5;[OOQS7+&`7+&`O0rQdO7+&`O#.SQgO7+&fO!JmQdO'#GXO4iQdO7+&fO4iQdO7+&iO#2QQtO,5<tO'vQdO,5<tO#2[QdO1G4ZOOQS-E:W-E:WO#2fQdO1G4ZO4iQdO7+&kO0rQdO7+&kOOQV7+&p7+&pO!KrQ!fO7+&rO!KzQdO7+&rO`QeO1G0{OOQV-E:X-E:XO4iQdO7+&lO4iQdO7+&lOOQV,5<u,5<uO#2nQdO,5<uO!JmQdO,5<uOOQV7+&l7+&lO#2yQgO7+&lO#6tQdO,5<vO#7PQdO1G4[OOQS-E:Y-E:YO#7^QdO1G4[O#7fQdO'#IWO#7tQdO'#IWO1XQdO'#IWOOQS'#IW'#IWO#8PQdO'#IVOOQS,5;n,5;nO#8XQdO,5;nO0rQdO'#FUOOQV7+&r7+&rO4iQdO7+&rOOQV7+&w7+&wO4iQdO7+&wO#8^QfO,5;xOOQV7+&|7+&|POOO7+(b7+(bO#8cQdO1G3iOOQS,5<c,5<cO#8qQdO1G3hOOQS-E9u-E9uO#9UQdO,5<dO#9aQdO,5<dO#9tQdO1G3kOOQS-E9v-E9vO#:UQdO1G3kO#:^QdO1G3kO#:nQdO1G3kO#:UQdO1G3kOOQS<<H[<<H[O#:yQtO1G1zOOQS<<Hk<<HkP#;WQdO'#FtO8vQdO1G3bO#;eQdO1G3bO#;jQdO<<HkOOQS<<Hl<<HlO#;zQdO7+)QOOQS<<Hs<<HsO#<[QtO1G1yP#<{QdO'#FsO#=YQdO7+)RO#=jQdO7+)RO#=rQdO<<HwO#=wQdO7+({OOQS<<Hy<<HyO#>nQdO,5<bO'vQdO,5<bOOQS-E9t-E9tOOQS<<Hw<<HwOOQS,5<g,5<gO0rQdO,5<gO#>sQdO1G4OOOQS-E9y-E9yO#?^QdO1G4OO<[QdO'#H{OOOO'#D{'#D{OOOO'#F|'#F|O#?oO&jO,5:fOOOW,5>e,5>eOOOW7+)i7+)iO#?zQdO7+)iO#@SQdO1G2zO#@mQdO1G2zP'vQdO'#FuO0rQdO<<IpO1XQdO1G2YP1XQdO'#GSO#AOQdO7+)pO#AaQdO7+)pOOQS<<Ir<<IrP1XQdO'#GUP0rQdO'#GQOOQS,5;],5;]O#ArQdO,5>mO#BQQdO,5>mOOQS1G0v1G0vOOQS<<Iz<<IzOOQV-E:V-E:VO4iQdO<<JQOOQV,5<s,5<sO4iQdO,5<sOOQV<<JQ<<JQOOQV<<JT<<JTO#BYQtO1G2`P#BdQdO'#GYO#BkQdO7+)uO#BuQgO<<JVO4iQdO<<JVOOQV<<J^<<J^O4iQdO<<J^O!KrQ!fO<<J^O#FpQgO7+&gOOQV<<JW<<JWO#FzQgO<<JWOOQV1G2a1G2aO1XQdO1G2aO#JuQdO1G2aO4iQdO<<JWO1XQdO1G2bP0rQdO'#G[O#KQQdO7+)vO#K_QdO7+)vOOQS'#FT'#FTO0rQdO,5>rO#KgQdO,5>rOOQS,5>r,5>rO#KrQdO,5>qO#LTQdO,5>qOOQS1G1Y1G1YOOQS,5;p,5;pOOQV<<Jc<<JcO#L]QdO1G1dOOQS7+)T7+)TP#LbQdO'#FwO#LrQdO1G2OO#MVQdO1G2OO#MgQdO1G2OP#MrQdO'#FxO#NPQdO7+)VO#NaQdO7+)VO#NaQdO7+)VO#NiQdO7+)VO#NyQdO7+(|O8vQdO7+(|OOQSAN>VAN>VO$ dQdO<<LmOOQSAN>cAN>cO0rQdO1G1|O$ tQtO1G1|P$!OQdO'#FvOOQS1G2R1G2RP$!]QdO'#F{O$!jQdO7+)jO$#TQdO,5>gOOOO-E9z-E9zOOOW<<MT<<MTO$#cQdO7+(fOOQSAN?[AN?[OOQS7+'t7+'tO$#|QdO<<M[OOQS,5<q,5<qO$$_QdO1G4XOOQS-E:T-E:TOOQVAN?lAN?lOOQV1G2_1G2_O4iQdOAN?qO$$mQgOAN?qOOQVAN?xAN?xO4iQdOAN?xOOQV<<JR<<JRO4iQdOAN?rO4iQdO7+'{OOQV7+'{7+'{O1XQdO7+'{OOQVAN?rAN?rOOQS7+'|7+'|O$(hQdO<<MbOOQS1G4^1G4^O0rQdO1G4^OOQS,5<w,5<wO$(uQdO1G4]OOQS-E:Z-E:ZOOQU'#G_'#G_O$)WQfO7+'OO$)cQdO'#F_O$*jQdO7+'jO$*zQdO7+'jOOQS7+'j7+'jO$+VQdO<<LqO$+gQdO<<LqO$+gQdO<<LqO$+oQdO'#H^OOQS<<Lh<<LhO$+yQdO<<LhOOQS7+'h7+'hOOQS'#D|'#D|OOOO1G4R1G4RO$,dQdO1G4RO$,lQdO1G4RP!=hQdO'#GVOOQVG25]G25]O4iQdOG25]OOQVG25dG25dOOQVG25^G25^OOQV<<Kg<<KgO4iQdO<<KgOOQS7+)x7+)xP$,wQdO'#G]OOQU-E:]-E:]OOQV<<Jj<<JjO$-kQtO'#FaOOQS'#Fc'#FcO$-{QdO'#FbO$.mQdO'#FbOOQS'#Fb'#FbO$.rQdO'#IYO$)cQdO'#FiO$)cQdO'#FiO$/ZQdO'#FjO$)cQdO'#FkO$/bQdO'#IZOOQS'#IZ'#IZO$0PQdO,5;yOOQS<<KU<<KUO$0XQdO<<KUO$0iQdOANB]O$0yQdOANB]O$1RQdO'#H_OOQS'#H_'#H_O1sQdO'#DcO$1lQdO,5=xOOQSANBSANBSOOOO7+)m7+)mO$2TQdO7+)mOOQVLD*wLD*wOOQVANARANARO5uQ!fO'#GaO$2]QtO,5<SO$)cQdO'#FmOOQS,5<W,5<WOOQS'#Fd'#FdO$2}QdO,5;|O$3SQdO,5;|OOQS'#Fg'#FgO$)cQdO'#G`O$3tQdO,5<QO$4`QdO,5>tO$4pQdO,5>tO1XQdO,5<PO$5RQdO,5<TO$5WQdO,5<TO$)cQdO'#I[O$5]QdO'#I[O$5bQdO,5<UOOQS,5<V,5<VO'vQdO'#FpOOQU1G1e1G1eO4iQdO1G1eOOQSAN@pAN@pO$5gQdOG27wO$5wQdO,59}OOQS1G3d1G3dOOOO<<MX<<MXOOQS,5<{,5<{OOQS-E:_-E:_O$5|QtO'#FaO$6TQdO'#I]O$6cQdO'#I]O$6kQdO,5<XOOQS1G1h1G1hO$6pQdO1G1hO$6uQdO,5<zOOQS-E:^-E:^O$7aQdO,5=OO$7xQdO1G4`OOQS-E:b-E:bOOQS1G1k1G1kOOQS1G1o1G1oO$8YQdO,5>vO$)cQdO,5>vOOQS1G1p1G1pO$8hQtO,5<[OOQU7+'P7+'PO$+oQdO1G/iO$)cQdO,5<YO$8oQdO,5>wO$8vQdO,5>wOOQS1G1s1G1sOOQS7+'S7+'SP$)cQdO'#GdO$9OQdO1G4bO$9YQdO1G4bO$9bQdO1G4bOOQS7+%T7+%TO$9pQdO1G1tO$:OQtO'#FaO$:VQdO,5<}OOQS,5<},5<}O$:eQdO1G4cOOQS-E:a-E:aO$)cQdO,5<|O$:lQdO,5<|O$:qQdO7+)|OOQS-E:`-E:`O$:{QdO7+)|O$)cQdO,5<ZP$)cQdO'#GcO$;TQdO1G2hO$)cQdO1G2hP$;cQdO'#GbO$;jQdO<<MhO$;tQdO1G1uO$<SQdO7+(SO8vQdO'#C}O8vQdO,59bO8vQdO,59bO8vQdO,59bO$<bQtO,5=`O8vQdO1G.|O0rQdO1G/XO0rQdO7+$pP$<uQdO'#GOO'vQdO'#GtO$=SQdO,59bO$=XQdO,59bO$=`QdO,59mO$=eQdO1G/UO1sQdO'#DRO8vQdO,59j",
  stateData: "$>O~O%cOS%^OSSOS%]PQ~OPdOVaOfoOhYOopOs!POvqO!PrO!Q{O!T!SO!U!RO!XZO!][O!h`O!r`O!s`O!t`O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#l!QO#o!TO#s!UO#u!VO#z!WO#}hO$P!XO%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~O%]!YO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%j![O%k!]O%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aO~Ok%xXl%xXm%xXn%xXo%xXp%xXs%xXz%xX{%xX!x%xX#g%xX%[%xX%_%xX%z%xXg%xX!T%xX!U%xX%{%xX!W%xX![%xX!Q%xX#[%xXt%xX!m%xX~P%SOfoOhYO!XZO!][O!h`O!r`O!s`O!t`O%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~Oz%wX{%wX#g%wX%[%wX%_%wX%z%wX~Ok!pOl!qOm!oOn!oOo!rOp!sOs!tO!x%wX~P)pOV!zOg!|Oo0cOv0qO!PrO~P'vOV#OOo0cOv0qO!W#PO~P'vOV#SOa#TOo0cOv0qO![#UO~P'vOQ#XO%`#XO%a#ZO~OQ#^OR#[O%`#^O%a#`O~OV%iX_%iXa%iXh%iXk%iXl%iXm%iXn%iXo%iXp%iXs%iXz%iX!X%iX!f%iX%j%iX%k%iX%l%iX%m%iX%n%iX%o%iX%p%iX%q%iX%r%iX%s%iXg%iX!T%iX!U%iX~O&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O{%iX!x%iX#g%iX%[%iX%_%iX%z%iX%{%iX!W%iX![%iX!Q%iX#[%iXt%iX!m%iX~P,eOz#dO{%hX!x%hX#g%hX%[%hX%_%hX%z%hX~Oo0cOv0qO~P'vO#g#gO%[#iO%_#iO~O%uWO~O!T#nO#u!VO#z!WO#}hO~OopO~P'vOV#sOa#tO%uWO{wP~OV#xOo0cOv0qO!Q#yO~P'vO{#{O!x$QO%z#|O#g!yX%[!yX%_!yX~OV#xOo0cOv0qO#g#SX%[#SX%_#SX~P'vOo0cOv0qO#g#WX%[#WX%_#WX~P'vOh$WO%uWO~O!f$YO!r$YO%uWO~OV$eO~P'vO!U$gO#s$hO#u$iO~O{$jO~OV$qO~P'vOS$sO%[$rO%_$rO%c$tO~OV$}Oa$}Og%POo0cOv0qO~P'vOo0cOv0qO{%SO~P'vO&Y%UO~Oa!bOh!iO!X!kO!f!mOVba_bakbalbambanbaobapbasbazba{ba!xba#gba%[ba%_ba%jba%kba%lba%mba%nba%oba%pba%qba%rba%sba%zbagba!Tba!Uba%{ba!Wba![ba!Qba#[batba!mba~On%ZO~Oo%ZO~P'vOo0cO~P'vOk0eOl0fOm0dOn0dOo0mOp0nOs0rOg%wX!T%wX!U%wX%{%wX!W%wX![%wX!Q%wX#[%wX!m%wX~P)pO%{%]Og%vXz%vX!T%vX!U%vX!W%vX{%vX~Og%_Oz%`O!T%dO!U%cO~Og%_O~Oz%gO!T%dO!U%cO!W&SX~O!W%kO~Oz%lO{%nO!T%dO!U%cO![%}X~O![%rO~O![%sO~OQ#XO%`#XO%a%uO~OV%wOo0cOv0qO!PrO~P'vOQ#^OR#[O%`#^O%a%zO~OV!qa_!qaa!qah!qak!qal!qam!qan!qao!qap!qas!qaz!qa{!qa!X!qa!f!qa!x!qa#g!qa%[!qa%_!qa%j!qa%k!qa%l!qa%m!qa%n!qa%o!qa%p!qa%q!qa%r!qa%s!qa%z!qag!qa!T!qa!U!qa%{!qa!W!qa![!qa!Q!qa#[!qat!qa!m!qa~P#yOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P%SOV&OOopOvqO{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P'vOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#g$zX%[$zX%_$zX~P'vO#g#gO%[&TO%_&TO~O!f&UOh&sX%[&sXz&sX#[&sX#g&sX%_&sX#Z&sXg&sX~Oh!iO%[&WO~Okealeameaneaoeapeaseazea{ea!xea#gea%[ea%_ea%zeagea!Tea!Uea%{ea!Wea![ea!Qea#[eatea!mea~P%SOsqazqa{qa#gqa%[qa%_qa%zqa~Ok!pOl!qOm!oOn!oOo!rOp!sO!xqa~PEcO%z&YOz%yX{%yX~O%uWOz%yX{%yX~Oz&]O{wX~O{&_O~Oz%lO#g%}X%[%}X%_%}Xg%}X{%}X![%}X!m%}X%z%}X~OV0lOo0cOv0qO!PrO~P'vO%z#|O#gUa%[Ua%_Ua~Oz&hO#g&PX%[&PX%_&PXn&PX~P%SOz&kO!Q&jO#g#Wa%[#Wa%_#Wa~Oz&lO#[&nO#g&rX%[&rX%_&rXg&rX~O!f$YO!r$YO#Z&qO%uWO~O#Z&qO~Oz&sO#g&tX%[&tX%_&tX~Oz&uO#g&pX%[&pX%_&pX{&pX~O!X&wO%z&xO~Oz&|On&wX~P%SOn'PO~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO%['UO~P'vOt'YO#p'WO#q'XOP#naV#naf#nah#nao#nas#nav#na!P#na!Q#na!T#na!U#na!X#na!]#na!h#na!r#na!s#na!t#na!{#na!}#na#P#na#R#na#T#na#X#na#Z#na#^#na#_#na#a#na#c#na#l#na#o#na#s#na#u#na#z#na#}#na$P#na%X#na%o#na%p#na%t#na%u#na&Z#na&[#na&]#na&^#na&_#na&`#na&a#na&b#na&c#na&d#na&e#na&f#na&g#na&h#na&i#na&j#na%Z#na%_#na~Oz'ZO#[']O{&xX~Oh'_O!X&wO~Oh!iO{$jO!X&wO~O{'eO~P%SO%['hO%_'hO~OS'iO%['hO%_'hO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%k!]O~P!#uO%kWi~P!#uOV!aO_!aOa!bOh!iO!X!kO!f!mO%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%m!_O%n!_O~P!&pO%mWi%nWi~P!&pOa!bOh!iO!X!kO!f!mOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%mWi%nWi%oWi%pWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~OV!aO_!aO%q!aO%r!aO%s!aO~P!)nOVWi_Wi%qWi%rWi%sWi~P!)nO!T%dO!U%cOg&VXz&VX~O%z'kO%{'kO~P,eOz'mOg&UX~Og'oO~Oz'pO{'rO!W&XX~Oo0cOv0qOz'pO{'sO!W&XX~P'vO!W'uO~Om!oOn!oOo!rOp!sOkjisjizji{ji!xji#gji%[ji%_ji%zji~Ol!qO~P!.aOlji~P!.aOk0eOl0fOm0dOn0dOo0mOp0nO~Ot'wO~P!/jOV'|Og'}Oo0cOv0qO~P'vOg'}Oz(OO~Og(QO~O!U(SO~Og(TOz(OO!T%dO!U%cO~P%SOk0eOl0fOm0dOn0dOo0mOp0nOgqa!Tqa!Uqa%{qa!Wqa![qa!Qqa#[qatqa!mqa~PEcOV'|Oo0cOv0qO!W&Sa~P'vOz(WO!W&Sa~O!W(XO~Oz(WO!T%dO!U%cO!W&Sa~P%SOV(]Oo0cOv0qO![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~P'vOz(^O![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~O![(aO~Oz(^O!T%dO!U%cO![%}a~P%SOz(dO!T%dO!U%cO![&Ta~P%SOz(gO{&lX![&lX!m&lX%z&lX~O{(kO![(mO!m(nO%z(jO~OV&OOopOvqO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~P'vOz(pO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~O!f&UOh&sa%[&saz&sa#[&sa#g&sa%_&sa#Z&sag&sa~O%[(uO~OV#sOa#tO%uWO~Oz&]O{wa~OopOvqO~P'vOz(^O#g%}a%[%}a%_%}ag%}a{%}a![%}a!m%}a%z%}a~P%SOz(zO#g%hX%[%hX%_%hX%z%hX~O%z#|O#gUi%[Ui%_Ui~O#g&Pa%[&Pa%_&Pan&Pa~P'vOz(}O#g&Pa%[&Pa%_&Pan&Pa~O%uWO#g&ra%[&ra%_&rag&ra~Oz)SO#g&ra%[&ra%_&rag&ra~Og)VO~OV)WOh$WO%uWO~O#Z)XO~O%uWO#g&ta%[&ta%_&ta~Oz)ZO#g&ta%[&ta%_&ta~Oo0cOv0qO#g&pa%[&pa%_&pa{&pa~P'vOz)^O#g&pa%[&pa%_&pa{&pa~OV)`Oa)`O%uWO~O%z)eO~Ot)hO#j)gOP#hiV#hif#hih#hio#his#hiv#hi!P#hi!Q#hi!T#hi!U#hi!X#hi!]#hi!h#hi!r#hi!s#hi!t#hi!{#hi!}#hi#P#hi#R#hi#T#hi#X#hi#Z#hi#^#hi#_#hi#a#hi#c#hi#l#hi#o#hi#s#hi#u#hi#z#hi#}#hi$P#hi%X#hi%o#hi%p#hi%t#hi%u#hi&Z#hi&[#hi&]#hi&^#hi&_#hi&`#hi&a#hi&b#hi&c#hi&d#hi&e#hi&f#hi&g#hi&h#hi&i#hi&j#hi%Z#hi%_#hi~Ot)iOP#kiV#kif#kih#kio#kis#kiv#ki!P#ki!Q#ki!T#ki!U#ki!X#ki!]#ki!h#ki!r#ki!s#ki!t#ki!{#ki!}#ki#P#ki#R#ki#T#ki#X#ki#Z#ki#^#ki#_#ki#a#ki#c#ki#l#ki#o#ki#s#ki#u#ki#z#ki#}#ki$P#ki%X#ki%o#ki%p#ki%t#ki%u#ki&Z#ki&[#ki&]#ki&^#ki&_#ki&`#ki&a#ki&b#ki&c#ki&d#ki&e#ki&f#ki&g#ki&h#ki&i#ki&j#ki%Z#ki%_#ki~OV)kOn&wa~P'vOz)lOn&wa~Oz)lOn&wa~P%SOn)pO~O%Y)tO~Ot)wO#p'WO#q)vOP#niV#nif#nih#nio#nis#niv#ni!P#ni!Q#ni!T#ni!U#ni!X#ni!]#ni!h#ni!r#ni!s#ni!t#ni!{#ni!}#ni#P#ni#R#ni#T#ni#X#ni#Z#ni#^#ni#_#ni#a#ni#c#ni#l#ni#o#ni#s#ni#u#ni#z#ni#}#ni$P#ni%X#ni%o#ni%p#ni%t#ni%u#ni&Z#ni&[#ni&]#ni&^#ni&_#ni&`#ni&a#ni&b#ni&c#ni&d#ni&e#ni&f#ni&g#ni&h#ni&i#ni&j#ni%Z#ni%_#ni~OV)zOo0cOv0qO{$jO~P'vOo0cOv0qO{&xa~P'vOz*OO{&xa~OV*SOa*TOg*WO%q*UO%uWO~O{$jO&{*YO~Oh'_O~Oh!iO{$jO~O%[*_O~O%[*aO%_*aO~OV$}Oa$}Oo0cOv0qOg&Ua~P'vOz*dOg&Ua~Oo0cOv0qO{*gO!W&Xa~P'vOz*hO!W&Xa~Oo0cOv0qOz*hO{*kO!W&Xa~P'vOo0cOv0qOz*hO!W&Xa~P'vOz*hO{*kO!W&Xa~Om0dOn0dOo0mOp0nOgjikjisjizji!Tji!Uji%{ji!Wji{ji![ji#gji%[ji%_ji!Qji#[jitji!mji%zji~Ol0fO~P!NkOlji~P!NkOV'|Og*pOo0cOv0qO~P'vOn*rO~Og*pOz*tO~Og*uO~OV'|Oo0cOv0qO!W&Si~P'vOz*vO!W&Si~O!W*wO~OV(]Oo0cOv0qO![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~P'vOz*zO!T%dO!U%cO![&Ti~Oz*}O![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~O![+OO~Oa+QOo0cOv0qO![&Ti~P'vOz*zO![&Ti~O![+SO~OV+UOo0cOv0qO{&la![&la!m&la%z&la~P'vOz+VO{&la![&la!m&la%z&la~O!]+YO&n+[O![!nX~O![+^O~O{(kO![+_O~O{(kO![+_O!m+`O~OV&OOopOvqO{%hq!x%hq#g%hq%[%hq%_%hq%z%hq~P'vOz$ri{$ri!x$ri#g$ri%[$ri%_$ri%z$ri~P%SOV&OOopOvqO~P'vOV&OOo0cOv0qO#g%ha%[%ha%_%ha%z%ha~P'vOz+aO#g%ha%[%ha%_%ha%z%ha~Oz$ia#g$ia%[$ia%_$ian$ia~P%SO#g&Pi%[&Pi%_&Pin&Pi~P'vOz+dO#g#Wq%[#Wq%_#Wq~O#[+eOz$va#g$va%[$va%_$vag$va~O%uWO#g&ri%[&ri%_&rig&ri~Oz+gO#g&ri%[&ri%_&rig&ri~OV+iOh$WO%uWO~O%uWO#g&ti%[&ti%_&ti~Oo0cOv0qO#g&pi%[&pi%_&pi{&pi~P'vO{#{Oz#eX!W#eX~Oz+mO!W&uX~O!W+oO~Ot+rO#j)gOP#hqV#hqf#hqh#hqo#hqs#hqv#hq!P#hq!Q#hq!T#hq!U#hq!X#hq!]#hq!h#hq!r#hq!s#hq!t#hq!{#hq!}#hq#P#hq#R#hq#T#hq#X#hq#Z#hq#^#hq#_#hq#a#hq#c#hq#l#hq#o#hq#s#hq#u#hq#z#hq#}#hq$P#hq%X#hq%o#hq%p#hq%t#hq%u#hq&Z#hq&[#hq&]#hq&^#hq&_#hq&`#hq&a#hq&b#hq&c#hq&d#hq&e#hq&f#hq&g#hq&h#hq&i#hq&j#hq%Z#hq%_#hq~On$|az$|a~P%SOV)kOn&wi~P'vOz+yOn&wi~Oz,TO{$jO#[,TO~O#q,VOP#nqV#nqf#nqh#nqo#nqs#nqv#nq!P#nq!Q#nq!T#nq!U#nq!X#nq!]#nq!h#nq!r#nq!s#nq!t#nq!{#nq!}#nq#P#nq#R#nq#T#nq#X#nq#Z#nq#^#nq#_#nq#a#nq#c#nq#l#nq#o#nq#s#nq#u#nq#z#nq#}#nq$P#nq%X#nq%o#nq%p#nq%t#nq%u#nq&Z#nq&[#nq&]#nq&^#nq&_#nq&`#nq&a#nq&b#nq&c#nq&d#nq&e#nq&f#nq&g#nq&h#nq&i#nq&j#nq%Z#nq%_#nq~O#[,WOz%Oa{%Oa~Oo0cOv0qO{&xi~P'vOz,YO{&xi~O{#{O%z,[Og&zXz&zX~O%uWOg&zXz&zX~Oz,`Og&yX~Og,bO~O%Y,eO~O!T%dO!U%cOg&Viz&Vi~OV$}Oa$}Oo0cOv0qOg&Ui~P'vO{,hOz$la!W$la~Oo0cOv0qO{,iOz$la!W$la~P'vOo0cOv0qO{*gO!W&Xi~P'vOz,lO!W&Xi~Oo0cOv0qOz,lO!W&Xi~P'vOz,lO{,oO!W&Xi~Og$hiz$hi!W$hi~P%SOV'|Oo0cOv0qO~P'vOn,qO~OV'|Og,rOo0cOv0qO~P'vOV'|Oo0cOv0qO!W&Sq~P'vOz$gi![$gi#g$gi%[$gi%_$gig$gi{$gi!m$gi%z$gi~P%SOV(]Oo0cOv0qO~P'vOa+QOo0cOv0qO![&Tq~P'vOz,sO![&Tq~O![,tO~OV(]Oo0cOv0qO![%}q#g%}q%[%}q%_%}qg%}q{%}q!m%}q%z%}q~P'vO{,uO~OV+UOo0cOv0qO{&li![&li!m&li%z&li~P'vOz,zO{&li![&li!m&li%z&li~O!]+YO&n+[O![!na~O{(kO![,}O~OV&OOo0cOv0qO#g%hi%[%hi%_%hi%z%hi~P'vOz-OO#g%hi%[%hi%_%hi%z%hi~O%uWO#g&rq%[&rq%_&rqg&rq~Oz-RO#g&rq%[&rq%_&rqg&rq~OV)`Oa)`O%uWO!W&ua~Oz-TO!W&ua~On$|iz$|i~P%SOV)kO~P'vOV)kOn&wq~P'vOt-XOP#myV#myf#myh#myo#mys#myv#my!P#my!Q#my!T#my!U#my!X#my!]#my!h#my!r#my!s#my!t#my!{#my!}#my#P#my#R#my#T#my#X#my#Z#my#^#my#_#my#a#my#c#my#l#my#o#my#s#my#u#my#z#my#}#my$P#my%X#my%o#my%p#my%t#my%u#my&Z#my&[#my&]#my&^#my&_#my&`#my&a#my&b#my&c#my&d#my&e#my&f#my&g#my&h#my&i#my&j#my%Z#my%_#my~O%Z-]O%_-]O~P`O#q-^OP#nyV#nyf#nyh#nyo#nys#nyv#ny!P#ny!Q#ny!T#ny!U#ny!X#ny!]#ny!h#ny!r#ny!s#ny!t#ny!{#ny!}#ny#P#ny#R#ny#T#ny#X#ny#Z#ny#^#ny#_#ny#a#ny#c#ny#l#ny#o#ny#s#ny#u#ny#z#ny#}#ny$P#ny%X#ny%o#ny%p#ny%t#ny%u#ny&Z#ny&[#ny&]#ny&^#ny&_#ny&`#ny&a#ny&b#ny&c#ny&d#ny&e#ny&f#ny&g#ny&h#ny&i#ny&j#ny%Z#ny%_#ny~Oz-aO{$jO#[-aO~Oo0cOv0qO{&xq~P'vOz-dO{&xq~O%z,[Og&zaz&za~OV*SOa*TO%q*UO%uWOg&ya~Oz-hOg&ya~O$S-lO~OV$}Oa$}Oo0cOv0qO~P'vOo0cOv0qO{-mOz$li!W$li~P'vOo0cOv0qOz$li!W$li~P'vO{-mOz$li!W$li~Oo0cOv0qO{*gO~P'vOo0cOv0qO{*gO!W&Xq~P'vOz-pO!W&Xq~Oo0cOv0qOz-pO!W&Xq~P'vOs-sO!T%dO!U%cOg&Oq!W&Oq![&Oqz&Oq~P!/jOa+QOo0cOv0qO![&Ty~P'vOz$ji![$ji~P%SOa+QOo0cOv0qO~P'vOV+UOo0cOv0qO~P'vOV+UOo0cOv0qO{&lq![&lq!m&lq%z&lq~P'vO{(kO![-xO!m-yO%z-wO~OV&OOo0cOv0qO#g%hq%[%hq%_%hq%z%hq~P'vO%uWO#g&ry%[&ry%_&ryg&ry~OV)`Oa)`O%uWO!W&ui~Ot-}OP#m!RV#m!Rf#m!Rh#m!Ro#m!Rs#m!Rv#m!R!P#m!R!Q#m!R!T#m!R!U#m!R!X#m!R!]#m!R!h#m!R!r#m!R!s#m!R!t#m!R!{#m!R!}#m!R#P#m!R#R#m!R#T#m!R#X#m!R#Z#m!R#^#m!R#_#m!R#a#m!R#c#m!R#l#m!R#o#m!R#s#m!R#u#m!R#z#m!R#}#m!R$P#m!R%X#m!R%o#m!R%p#m!R%t#m!R%u#m!R&Z#m!R&[#m!R&]#m!R&^#m!R&_#m!R&`#m!R&a#m!R&b#m!R&c#m!R&d#m!R&e#m!R&f#m!R&g#m!R&h#m!R&i#m!R&j#m!R%Z#m!R%_#m!R~Oo0cOv0qO{&xy~P'vOV*SOa*TO%q*UO%uWOg&yi~O$S-lO%Z.VO%_.VO~OV.aOh._O!X.^O!].`O!h.YO!s.[O!t.[O%p.XO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O~Oo0cOv0qOz$lq!W$lq~P'vO{.fOz$lq!W$lq~Oo0cOv0qO{*gO!W&Xy~P'vOz.gO!W&Xy~Oo0cOv.kO~P'vOs-sO!T%dO!U%cOg&Oy!W&Oy![&Oyz&Oy~P!/jO{(kO![.nO~O{(kO![.nO!m.oO~OV*SOa*TO%q*UO%uWO~Oh.tO!f.rOz$TX#[$TX%j$TXg$TX~Os$TX{$TX!W$TX![$TX~P$-VO%o.vO%p.vOs$UXz$UX{$UX#[$UX%j$UX!W$UXg$UX![$UX~O!h.xO~Oz.|O#[/OO%j.yOs&|X{&|X!W&|Xg&|X~Oa/RO~P$)oOh.tOs&}Xz&}X{&}X#[&}X%j&}X!W&}Xg&}X![&}X~Os/VO{$jO~Oo0cOv0qOz$ly!W$ly~P'vOo0cOv0qO{*gO!W&X!R~P'vOz/ZO!W&X!R~Og&RXs&RX!T&RX!U&RX!W&RX![&RXz&RX~P!/jOs-sO!T%dO!U%cOg&Qa!W&Qa![&Qaz&Qa~O{(kO![/^O~O!f.rOh$[as$[az$[a{$[a#[$[a%j$[a!W$[ag$[a![$[a~O!h/eO~O%o.vO%p.vOs$Uaz$Ua{$Ua#[$Ua%j$Ua!W$Uag$Ua![$Ua~O%j.yOs$Yaz$Ya{$Ya#[$Ya!W$Yag$Ya![$Ya~Os&|a{&|a!W&|ag&|a~P$)cOz/jOs&|a{&|a!W&|ag&|a~O!W/mO~Og/mO~O{/oO~O![/pO~Oo0cOv0qO{*gO!W&X!Z~P'vO{/sO~O%z/tO~P$-VOz/uO#[/OO%j.yOg'PX~Oz/uOg'PX~Og/wO~O!h/xO~O#[/OOs%Saz%Sa{%Sa%j%Sa!W%Sag%Sa![%Sa~O#[/OO%j.yOs%Waz%Wa{%Wa!W%Wag%Wa~Os&|i{&|i!W&|ig&|i~P$)cOz/zO#[/OO%j.yO!['Oa~O{$da~P%SOg'Pa~P$)cOz0SOg'Pa~Oa0UO!['Oi~P$)oOz0WO!['Oi~Oz0WO#[/OO%j.yO!['Oi~O#[/OO%j.yOg$biz$bi~O%z0ZO~P$-VO#[/OO%j.yOg%Vaz%Va~Og'Pi~P$)cO{0^O~Oa0UO!['Oq~P$)oOz0`O!['Oq~O#[/OO%j.yOz%Ui![%Ui~Oa0UO~P$)oOa0UO!['Oy~P$)oO#[/OO%j.yOg$ciz$ci~O#[/OO%j.yOz%Uq![%Uq~Oz+aO#g%ha%[%ha%_%ha%z%ha~P%SOV&OOo0cOv0qO~P'vOn0hO~Oo0hO~P'vO{0iO~Ot0jO~P!/jO&]&Z&j&h&i&g&f&d&e&c&b&`&a&_&^&[%u~",
  goto: "!=l'QPPPPPP'RP'Z*s+]+v,b,}-kP.YP'Z.y.y'ZPPP'Z2cPPPPPP2c5VPP5VP7g7p=xPP={>m>pPP'Z'ZPP?PPP'Z'ZPP'Z'Z'Z'Z'Z?T?}'ZP@QP@WD_G{HPPHSH^Hb'ZPPPHeHn'RP'R'RP'RP'RP'RP'RP'R'R'RP'RPP'RPP'RP'RPHtIQIYPIaIgPIaPIaIaPPPIaPKuPLOLYL`KuPIaLiPIaPLpLvPLzM`M}NhLzLzNnN{LzLzLzLz! a! g! j! o! r! |!!S!!`!!r!!x!#S!#Y!#v!#|!$S!$^!$d!$j!$|!%W!%^!%d!%n!%t!%z!&Q!&W!&^!&h!&n!&x!'O!'X!'_!'n!'v!(Q!(XPPPPPPPPPPP!(_!(b!(h!(q!({!)WPPPPPPPPPPPP!-z!/`!3`!6pPP!6x!7X!7b!8Z!8Q!8d!8j!8m!8p!8s!8{!9lPPPPPPPPPPPPPPPPP!9o!9s!9yP!:_!:c!:o!:x!;U!;l!;o!;r!;x!<O!<U!<XP!<a!<j!=f!=i]eOn#g$j)t,P'}`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r}!cQ#c#p$R$d$p%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!P!dQ#c#p$R$d$p$u%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!R!eQ#c#p$R$d$p$u$v%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!T!fQ#c#p$R$d$p$u$v$w%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!V!gQ#c#p$R$d$p$u$v$w$x%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!X!hQ#c#p$R$d$p$u$v$w$x$y%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!]!hQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g'}TOTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r&cVOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/Z/s0c0d0e0f0h0i0j0k0n0r%mXOYZ[dnrxy}!P!Q!U!i!k#[#d#g#y#{#}$Q$h$j$}%S%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/Z0i0j0kQ#vqQ/[.kR0o0q't`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rh#jhz{$W$Z&l&q)S)X+f+g-RW#rq&].k0qQ$]|Q$a!OQ$n!VQ$o!WW$|!i'm*d,gS&[#s#tQ'S$iQ(s&UQ)U&nU)Y&s)Z+jW)a&w+m-T-{Q*Q']W*R'_,`-h.TQ+l)`S,_*S*TQ-Q+eQ-_,TQ-c,WQ.R-al.W-l.^._.a.z.|/R/j/o/t/y0U0Z0^Q/S.`Q/a.tQ/l/OU0P/u0S0[X0V/z0W0_0`R&Z#r!_!wYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZR%^!vQ!{YQ%x#[Q&d#}Q&g$QR,{+YT.j-s/s![!jQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0gQ&X#kQ'c$oR*^'dR'l$|Q%V!mR/_.r'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rS#a_#b!P.[-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rT#a_#bT#^^#_R(o%xa(l%x(n(o+`,{-y-z.oT+[(k+]R-z,{Q$PsQ+l)aR,^*RX#}s$O$P&fQ&y$aQ'a$nQ'd$oR)s'SQ)b&wV-S+m-T-{ZgOn$j)t,PXkOn)t,PQ$k!TQ&z$bQ&{$cQ'^$mQ'b$oQ)q'RQ)x'WQ){'XQ)|'YQ*Z'`S*]'c'dQ+s)gQ+u)hQ+v)iQ+z)oS+|)r*[Q,Q)vQ,R)wS,S)y)zQ,d*^Q-V+rQ-W+tQ-Y+{S-Z+},OQ-`,UQ-b,VQ-|-XQ.O-[Q.P-^Q.Q-_Q.p-}Q.q.RQ/W.dR/r/XWkOn)t,PR#mjQ'`$nS)r'S'aR,O)sQ,]*RR-f,^Q*['`Q+})rR-[,OZiOjn)t,PQ'f$pR*`'gT-j,e-ku.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^t.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^Q/S.`X0V/z0W0_0`!P.Z-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`Q.w.YR/f.xg.z.].{/b/i/n/|0O0Q0]0a0bu.b-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^X.u.W.b/a0PR/c.tV0R/u0S0[R/X.dQnOS#on,PR,P)tQ&^#uR(x&^S%m#R#wS(_%m(bT(b%p&`Q%a!yQ%h!}W(P%a%h(U(YQ(U%eR(Y%jQ&i$RR)O&iQ(e%qQ*{(`T+R(e*{Q'n%OR*e'nS'q%R%SY*i'q*j,m-q.hU*j'r's'tU,m*k*l*mS-q,n,oR.h-rQ#Y]R%t#YQ#_^R%y#_Q(h%vS+W(h+XR+X(iQ+](kR,|+]Q#b_R%{#bQ#ebQ%}#cW&Q#e%}({+bQ({&cR+b0gQ$OsS&e$O&fR&f$PQ&v$_R)_&vQ&V#jR(t&VQ&m$VS)T&m+hR+h)UQ$Z{R&p$ZQ&t$]R)[&tQ+n)bR-U+nQ#hfR&S#hQ)f&zR+q)fQ&}$dS)m&})nR)n'OQ'V$kR)u'VQ'[$lS*P'[,ZR,Z*QQ,a*VR-i,aWjOn)t,PR#ljQ-k,eR.U-kd.{.]/b/i/n/|0O0Q0]0a0bR/h.{U.s.W/a0PR/`.sQ/{/nS0X/{0YR0Y/|S/v/b/cR0T/vQ.}.]R/k.}R!ZPXmOn)t,PWlOn)t,PR'T$jYfOn$j)t,PR&R#g[sOn#g$j)t,PR&d#}&bQOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/Z/s0c0d0e0f0h0i0j0k0n0rQ!nTQ#caQ#poU$Rt%c(SS$d!R$gQ$p!XQ$u!cQ$v!dQ$w!eQ$x!fQ$y!gQ$z!hQ%e!zQ%j#OQ%p#SQ%q#TQ&`#xQ'O$eQ'g$qQ(q&OU(|&h(}+cW)j&|)l+x+yQ*o'|Q*x(]Q+w)kQ,v+QQ/q/VR0g0lQ!yYQ!}ZQ$b!PQ$c!QQ%R!kQ't%S^'{%`%g(O(W*q*t*v^*f'p*h,k,l-p.g/ZQ*l'rQ*m'sQ+t)gQ,j*gQ,n*kQ-n,hQ-o,iQ-r,oQ.e-mR/Y.f[bOn#g$j)t,P!^!vYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZQ#R[Q#fdS#wrxQ$UyW$_}$Q'P)pS$l!U$hW${!i'm*d,gS%v#[+Y`&P#d%|(p(r(z+a-O0kQ&a#yQ&b#{Q&c#}Q'j$}Q'z%^W([%l(^*y*}Q(`%nQ(i%wQ(v&ZS(y&_0iQ)P&jQ)Q&kU)]&u)^+kQ)d&xQ)y'WY)}'Z*O,X,Y-dQ*b'lS*n'w0jW+P(d*z,s,wW+T(g+V,y,zQ+p)eQ,U)zQ,c*YQ,x+UQ-P+dQ-e,]Q-v,uR.S-fhUOn#d#g$j%|&_'w(p(r)t,P%S!uYZ[drxy}!P!Q!U!i!k#[#y#{#}$Q$h$}%S%^%`%g%l%n%w&Z&j&k&u&x'P'W'Z'l'm'p'r's(O(W(^(d(g(z)^)e)g)p)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/Z0i0j0kQ#qpW%W!o!s0d0nQ%X!pQ%Y!qQ%[!tQ%f0cS'v%Z0hQ'x0eQ'y0fQ,p*rQ-u,qS.i-s/sR0p0rU#uq.k0qR(w&][cOn#g$j)t,PZ!xY#[#}$Q+YQ#W[Q#zrR$TxQ%b!yQ%i!}Q%o#RQ'j${Q(V%eQ(Z%jQ(c%pQ(f%qQ*|(`Q,f*bQ-t,pQ.m-uR/].lQ$StQ(R%cR*s(SQ.l-sR/}/sR#QZR#V[R%Q!iQ%O!iV*c'm*d,g!]!lQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0gR%T!kT#]^#_Q%x#[R,{+YQ(m%xS+_(n(oQ,}+`Q-x,{S.n-y-zR/^.oT+Z(k+]Q$`}Q&g$QQ)o'PR+{)pQ$XzQ)W&qR+i)XQ$XzQ&o$WQ)W&qR+i)XQ#khW$Vz$W&q)XQ$[{Q&r$ZZ)R&l)S+f+g-RR$^|R)c&wXlOn)t,PQ$f!RR'Q$gQ$m!UR'R$hR*X'_Q*V'_V-g,`-h.TQ.d-lQ/P.^R/Q._U.]-l.^._Q/U.aQ/b.tQ/g.zU/i.|/j/yQ/n/RQ/|/oQ0O/tU0Q/u0S0[Q0]0UQ0a0ZR0b0^R/T.`R/d.t",
  nodeNames: "\u26A0 print Escape { Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ) ( ParenthesizedExpression BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from TupleExpression ComprehensionExpression async for LambdaExpression ] [ ArrayExpression ArrayComprehensionExpression } { DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatSelfDoc FormatConversion FormatSpec FormatReplacement FormatSelfDoc ContinuedString Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert TypeDefinition type TypeParamList TypeParam StatementGroup ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At MatchStatement match MatchBody MatchClause case CapturePattern LiteralPattern ArithOp ArithOp AsPattern OrPattern LogicOp AttributePattern SequencePattern MappingPattern StarPattern ClassPattern PatternArgList KeywordPattern KeywordPattern Guard",
  maxTerm: 277,
  context: Hm,
  nodeProps: [
    ["isolate", -5, 4, 71, 72, 73, 77, ""],
    ["group", -15, 6, 85, 87, 88, 90, 92, 94, 96, 98, 99, 100, 102, 105, 108, 110, "Statement Statement", -22, 8, 18, 21, 25, 40, 49, 50, 56, 57, 60, 61, 62, 63, 64, 67, 70, 71, 72, 79, 80, 81, 82, "Expression", -10, 114, 116, 119, 121, 122, 126, 128, 133, 135, 138, "Statement", -9, 143, 144, 147, 148, 150, 151, 152, 153, 154, "Pattern"],
    ["openedBy", 23, "(", 54, "[", 58, "{"],
    ["closedBy", 24, ")", 55, "]", 59, "}"]
  ],
  propSources: [Jm],
  skippedNodes: [0, 4],
  repeatNodeCount: 34,
  tokenData: "!2|~R!`OX%TXY%oY[%T[]%o]p%Tpq%oqr'ars)Yst*xtu%Tuv,dvw-hwx.Uxy/tyz0[z{0r{|2S|}2p}!O3W!O!P4_!P!Q:Z!Q!R;k!R![>_![!]Do!]!^Es!^!_FZ!_!`Gk!`!aHX!a!b%T!b!cIf!c!dJU!d!eK^!e!hJU!h!i!#f!i!tJU!t!u!,|!u!wJU!w!x!.t!x!}JU!}#O!0S#O#P&o#P#Q!0j#Q#R!1Q#R#SJU#S#T%T#T#UJU#U#VK^#V#YJU#Y#Z!#f#Z#fJU#f#g!,|#g#iJU#i#j!.t#j#oJU#o#p!1n#p#q!1s#q#r!2a#r#s!2f#s$g%T$g;'SJU;'S;=`KW<%lOJU`%YT&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T`%lP;=`<%l%To%v]&n`%c_OX%TXY%oY[%T[]%o]p%Tpq%oq#O%T#O#P&o#P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To&tX&n`OY%TYZ%oZ]%T]^%o^#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc'f[&n`O!_%T!_!`([!`#T%T#T#U(r#U#f%T#f#g(r#g#h(r#h#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(cTmR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(yT!mR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk)aV&n`&[ZOr%Trs)vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk){V&n`Or%Trs*bs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk*iT&n`&^ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To+PZS_&n`OY*xYZ%TZ]*x]^%T^#o*x#o#p+r#p#q*x#q#r+r#r;'S*x;'S;=`,^<%lO*x_+wTS_OY+rZ]+r^;'S+r;'S;=`,W<%lO+r_,ZP;=`<%l+ro,aP;=`<%l*xj,kV%rQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-XT!xY&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-oV%lQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.]V&n`&ZZOw%Twx.rx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.wV&n`Ow%Twx/^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/eT&n`&]ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/{ThZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc0cTgR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk0yXVZ&n`Oz%Tz{1f{!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk1mVaR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk2ZV%oZ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc2wTzR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To3_W%pZ&n`O!_%T!_!`-Q!`!a3w!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Td4OT&{S&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk4fX!fQ&n`O!O%T!O!P5R!P!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5WV&n`O!O%T!O!P5m!P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5tT!rZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti6[a!hX&n`O!Q%T!Q![6T![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S6T#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti7fZ&n`O{%T{|8X|}%T}!O8X!O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8^V&n`O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8z]!hX&n`O!Q%T!Q![8s![!l%T!l!m9s!m#R%T#R#S8s#S#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti9zT!hX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk:bX%qR&n`O!P%T!P!Q:}!Q!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj;UV%sQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti;ro!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!d%T!d!e?q!e!g%T!g!h7a!h!l%T!l!m9s!m!q%T!q!rA]!r!z%T!z!{Bq!{#R%T#R#S>_#S#U%T#U#V?q#V#X%T#X#Y7a#Y#^%T#^#_9s#_#c%T#c#dA]#d#l%T#l#mBq#m#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti=xV&n`O!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti>fc!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S>_#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti?vY&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti@mY!hX&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiAbX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBUX!hX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBv]&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiCv]!hX&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToDvV{_&n`O!_%T!_!`E]!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TcEdT%{R&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkEzT#gZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkFbXmR&n`O!^%T!^!_F}!_!`([!`!a([!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjGUV%mQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkGrV%zZ&n`O!_%T!_!`([!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkH`WmR&n`O!_%T!_!`([!`!aHx!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjIPV%nQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkIoV_Q#}P&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToJ_]&n`&YS%uZO!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoKZP;=`<%lJUoKge&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!tJU!t!uLx!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#gLx#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoMRa&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUkN_V&n`&`ZOr%TrsNts#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkNyV&n`Or%Trs! `s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! gT&n`&bZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! }V&n`&_ZOw%Twx!!dx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!!iV&n`Ow%Twx!#Ox#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!#VT&n`&aZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!#oe&n`&YS%uZOr%Trs!%Qsw%Twx!&px!Q%T!Q![JU![!c%T!c!tJU!t!u!(`!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#g!(`#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!%XV&n`&dZOr%Trs!%ns#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!%sV&n`Or%Trs!&Ys#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&aT&n`&fZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&wV&n`&cZOw%Twx!'^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!'cV&n`Ow%Twx!'xx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!(PT&n`&eZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!(ia&n`&YS%uZOr%Trs!)nsw%Twx!+^x!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!)uV&n`&hZOr%Trs!*[s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*aV&n`Or%Trs!*vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*}T&n`&jZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!+eV&n`&gZOw%Twx!+zx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,PV&n`Ow%Twx!,fx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,mT&n`&iZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!-Vi&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!dJU!d!eLx!e!hJU!h!i!(`!i!}JU!}#R%T#R#SJU#S#T%T#T#UJU#U#VLx#V#YJU#Y#Z!(`#Z#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUo!.}a&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!0ZT!XZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc!0qT!WR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj!1XV%kQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!1sO!]~k!1zV%jR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!2fO![~i!2mT%tX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T",
  tokenizers: [Zm, Um, _m, Ym, 0, 1, 2, 3, 4],
  topRules: { Script: [0, 5] },
  specialized: [{ term: 221, get: (s) => tO[s] || -1 }],
  tokenPrec: 7664
}), Ql = /* @__PURE__ */ new zu(), rf = /* @__PURE__ */ new Set([
  "Script",
  "Body",
  "FunctionDefinition",
  "ClassDefinition",
  "LambdaExpression",
  "ForStatement",
  "MatchClause"
]);
function Zi(s) {
  return (t, e, i) => {
    if (i)
      return !1;
    let n = t.node.getChild("VariableName");
    return n && e(n, s), !0;
  };
}
const iO = {
  FunctionDefinition: /* @__PURE__ */ Zi("function"),
  ClassDefinition: /* @__PURE__ */ Zi("class"),
  ForStatement(s, t, e) {
    if (e) {
      for (let i = s.node.firstChild; i; i = i.nextSibling)
        if (i.name == "VariableName")
          t(i, "variable");
        else if (i.name == "in")
          break;
    }
  },
  ImportStatement(s, t) {
    var e, i;
    let { node: n } = s, r = ((e = n.firstChild) === null || e === void 0 ? void 0 : e.name) == "from";
    for (let o = n.getChild("import"); o; o = o.nextSibling)
      o.name == "VariableName" && ((i = o.nextSibling) === null || i === void 0 ? void 0 : i.name) != "as" && t(o, r ? "variable" : "namespace");
  },
  AssignStatement(s, t) {
    for (let e = s.node.firstChild; e; e = e.nextSibling)
      if (e.name == "VariableName")
        t(e, "variable");
      else if (e.name == ":" || e.name == "AssignOp")
        break;
  },
  ParamList(s, t) {
    for (let e = null, i = s.node.firstChild; i; i = i.nextSibling)
      i.name == "VariableName" && (!e || !/\*|AssignOp/.test(e.name)) && t(i, "variable"), e = i;
  },
  CapturePattern: /* @__PURE__ */ Zi("variable"),
  AsPattern: /* @__PURE__ */ Zi("variable"),
  __proto__: null
};
function of(s, t) {
  let e = Ql.get(t);
  if (e)
    return e;
  let i = [], n = !0;
  function r(o, l) {
    let a = s.sliceString(o.from, o.to);
    i.push({ label: a, type: l });
  }
  return t.cursor(K.IncludeAnonymous).iterate((o) => {
    if (o.name) {
      let l = iO[o.name];
      if (l && l(o, r, n) || !n && rf.has(o.name))
        return !1;
      n = !1;
    } else if (o.to - o.from > 8192) {
      for (let l of of(s, o.node))
        i.push(l);
      return !1;
    }
  }), Ql.set(t, i), i;
}
const Cl = /^[\w\xa1-\uffff][\w\d\xa1-\uffff]*$/, lf = ["String", "FormatString", "Comment", "PropertyName"];
function nO(s) {
  let t = ht(s.state).resolveInner(s.pos, -1);
  if (lf.indexOf(t.name) > -1)
    return null;
  let e = t.name == "VariableName" || t.to - t.from < 20 && Cl.test(s.state.sliceDoc(t.from, t.to));
  if (!e && !s.explicit)
    return null;
  let i = [];
  for (let n = t; n; n = n.parent)
    rf.has(n.name) && (i = i.concat(of(s.state.doc, n)));
  return {
    options: i,
    from: e ? t.from : s.pos,
    validFor: Cl
  };
}
const sO = /* @__PURE__ */ [
  "__annotations__",
  "__builtins__",
  "__debug__",
  "__doc__",
  "__import__",
  "__name__",
  "__loader__",
  "__package__",
  "__spec__",
  "False",
  "None",
  "True"
].map((s) => ({ label: s, type: "constant" })).concat(/* @__PURE__ */ [
  "ArithmeticError",
  "AssertionError",
  "AttributeError",
  "BaseException",
  "BlockingIOError",
  "BrokenPipeError",
  "BufferError",
  "BytesWarning",
  "ChildProcessError",
  "ConnectionAbortedError",
  "ConnectionError",
  "ConnectionRefusedError",
  "ConnectionResetError",
  "DeprecationWarning",
  "EOFError",
  "Ellipsis",
  "EncodingWarning",
  "EnvironmentError",
  "Exception",
  "FileExistsError",
  "FileNotFoundError",
  "FloatingPointError",
  "FutureWarning",
  "GeneratorExit",
  "IOError",
  "ImportError",
  "ImportWarning",
  "IndentationError",
  "IndexError",
  "InterruptedError",
  "IsADirectoryError",
  "KeyError",
  "KeyboardInterrupt",
  "LookupError",
  "MemoryError",
  "ModuleNotFoundError",
  "NameError",
  "NotADirectoryError",
  "NotImplemented",
  "NotImplementedError",
  "OSError",
  "OverflowError",
  "PendingDeprecationWarning",
  "PermissionError",
  "ProcessLookupError",
  "RecursionError",
  "ReferenceError",
  "ResourceWarning",
  "RuntimeError",
  "RuntimeWarning",
  "StopAsyncIteration",
  "StopIteration",
  "SyntaxError",
  "SyntaxWarning",
  "SystemError",
  "SystemExit",
  "TabError",
  "TimeoutError",
  "TypeError",
  "UnboundLocalError",
  "UnicodeDecodeError",
  "UnicodeEncodeError",
  "UnicodeError",
  "UnicodeTranslateError",
  "UnicodeWarning",
  "UserWarning",
  "ValueError",
  "Warning",
  "ZeroDivisionError"
].map((s) => ({ label: s, type: "type" }))).concat(/* @__PURE__ */ [
  "bool",
  "bytearray",
  "bytes",
  "classmethod",
  "complex",
  "float",
  "frozenset",
  "int",
  "list",
  "map",
  "memoryview",
  "object",
  "range",
  "set",
  "staticmethod",
  "str",
  "super",
  "tuple",
  "type"
].map((s) => ({ label: s, type: "class" }))).concat(/* @__PURE__ */ [
  "abs",
  "aiter",
  "all",
  "anext",
  "any",
  "ascii",
  "bin",
  "breakpoint",
  "callable",
  "chr",
  "compile",
  "delattr",
  "dict",
  "dir",
  "divmod",
  "enumerate",
  "eval",
  "exec",
  "exit",
  "filter",
  "format",
  "getattr",
  "globals",
  "hasattr",
  "hash",
  "help",
  "hex",
  "id",
  "input",
  "isinstance",
  "issubclass",
  "iter",
  "len",
  "license",
  "locals",
  "max",
  "min",
  "next",
  "oct",
  "open",
  "ord",
  "pow",
  "print",
  "property",
  "quit",
  "repr",
  "reversed",
  "round",
  "setattr",
  "slice",
  "sorted",
  "sum",
  "vars",
  "zip"
].map((s) => ({ label: s, type: "function" }))), rO = [
  /* @__PURE__ */ Gt("def ${name}(${params}):\n	${}", {
    label: "def",
    detail: "function",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("for ${name} in ${collection}:\n	${}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("while ${}:\n	${}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("try:\n	${}\nexcept ${error}:\n	${}", {
    label: "try",
    detail: "/ except block",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt(`if \${}:

`, {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("if ${}:\n	${}\nelse:\n	${}", {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("class ${name}:\n	def __init__(self, ${params}):\n			${}", {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("import ${module}", {
    label: "import",
    detail: "statement",
    type: "keyword"
  }),
  /* @__PURE__ */ Gt("from ${module} import ${names}", {
    label: "from",
    detail: "import",
    type: "keyword"
  })
], oO = /* @__PURE__ */ _p(lf, /* @__PURE__ */ Vh(/* @__PURE__ */ sO.concat(rO)));
function gs(s) {
  let { node: t, pos: e } = s, i = s.lineIndent(e, -1), n = null;
  for (; ; ) {
    let r = t.childBefore(e);
    if (r)
      if (r.name == "Comment")
        e = r.from;
      else if (r.name == "Body" || r.name == "MatchBody")
        s.baseIndentFor(r) + s.unit <= i && (n = r), t = r;
      else if (r.name == "MatchClause")
        t = r;
      else if (r.type.is("Statement"))
        t = r;
      else
        break;
    else
      break;
  }
  return n;
}
function ms(s, t) {
  let e = s.baseIndentFor(t), i = s.lineAt(s.pos, -1), n = i.from + i.text.length;
  return /^\s*($|#)/.test(i.text) && s.node.to < n + 100 && !/\S/.test(s.state.sliceDoc(n, s.node.to)) && s.lineIndent(s.pos, -1) <= e || /^\s*(else:|elif |except |finally:|case\s+[^=:]+:)/.test(s.textAfter) && s.lineIndent(s.pos, -1) > e ? null : e + s.unit;
}
const Os = /* @__PURE__ */ bn.define({
  name: "python",
  parser: /* @__PURE__ */ eO.configure({
    props: [
      /* @__PURE__ */ Ja.add({
        Body: (s) => {
          var t;
          let e = gs(s);
          return (t = ms(s, e || s.node)) !== null && t !== void 0 ? t : s.continue();
        },
        MatchBody: (s) => {
          var t;
          let e = gs(s);
          return (t = ms(s, e || s.node)) !== null && t !== void 0 ? t : s.continue();
        },
        IfStatement: (s) => /^\s*(else:|elif )/.test(s.textAfter) ? s.baseIndent : s.continue(),
        "ForStatement WhileStatement": (s) => /^\s*else:/.test(s.textAfter) ? s.baseIndent : s.continue(),
        TryStatement: (s) => /^\s*(except |finally:|else:)/.test(s.textAfter) ? s.baseIndent : s.continue(),
        MatchStatement: (s) => /^\s*case /.test(s.textAfter) ? s.baseIndent + s.unit : s.continue(),
        "TupleExpression ComprehensionExpression ParamList ArgList ParenthesizedExpression": /* @__PURE__ */ rs({ closing: ")" }),
        "DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression": /* @__PURE__ */ rs({ closing: "}" }),
        "ArrayExpression ArrayComprehensionExpression": /* @__PURE__ */ rs({ closing: "]" }),
        "String FormatString": () => null,
        Script: (s) => {
          var t;
          let e = gs(s);
          return (t = e && ms(s, e)) !== null && t !== void 0 ? t : s.continue();
        }
      }),
      /* @__PURE__ */ ld.add({
        "ArrayExpression DictionaryExpression SetExpression TupleExpression": ad,
        Body: (s, t) => ({ from: s.from + 1, to: s.to - (s.to == t.doc.length ? 0 : 1) })
      })
    ]
  }),
  languageData: {
    closeBrackets: {
      brackets: ["(", "[", "{", "'", '"', "'''", '"""'],
      stringPrefixes: [
        "f",
        "fr",
        "rf",
        "r",
        "u",
        "b",
        "br",
        "rb",
        "F",
        "FR",
        "RF",
        "R",
        "U",
        "B",
        "BR",
        "RB"
      ]
    },
    commentTokens: { line: "#" },
    indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:|case\s+[^:]*:?)$/
  }
});
function lO() {
  return new Yu(Os, [
    Os.data.of({ autocomplete: nO }),
    Os.data.of({ autocomplete: oO })
  ]);
}
function Pl(s, t, e) {
  const i = Ci.define([
    { tag: y.keyword, color: "#FFD596" },
    { tag: y.null, color: "#FFD596" },
    { tag: y.typeName, color: "#9CE7FF" },
    { tag: y.bool, color: "#fdffab" },
    { tag: y.number, color: "#fdffab" },
    { tag: y.operator, color: "#FFAFF3" },
    { tag: y.punctuation, color: "#FFAFF3" },
    { tag: y.brace, color: "#D16DCD" },
    { tag: y.paren, color: "#D16DCD" },
    { tag: y.bracket, color: "#D16DCD" },
    { tag: y.string, color: "#C8FFA7" },
    { tag: y.comment, color: "#888888", fontStyle: "italic" }
  ]);
  return B.create({
    doc: s,
    extensions: [
      zp(),
      qd(),
      od(),
      Qi.of("    "),
      yd(),
      hd(i),
      wg(),
      Cu(),
      Ru(),
      cu(),
      xr.of([
        $p,
        ...Cg,
        ...qp,
        ...Xd,
        ...qg
      ]),
      A.updateListener.of((n) => {
        n.docChanged && e(n.state.doc.toString());
      }),
      A.editable.of(t),
      lO()
    ]
  });
}
class aO extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["value"];
  }
  onUpdateValue(t) {
    this.value = t, this.dispatchEvent(new Event("input"));
  }
  attributeChangedCallback(t, e, i) {
    !this.editor || t === "value" && this.value == null && (this.editor.setState(
      Pl(
        i,
        this.editable,
        (n) => this.onUpdateValue(n)
      )
    ), this.dispatchEvent(new Event("input")));
  }
  connectedCallback() {
    var t, e;
    this.editor = null, this.editable = ((t = this.getAttribute("editable")) != null ? t : "true") == "true", this.shadowRoot.innerHTML = `
            <div id="code-mirror-editor"></div>
            <style>
            :host {
                display: block;
                height: 100%;
                overflow: auto;
            }

            #code-mirror-editor {
                height: 100%;
            }

            #code-mirror-editor .cm-editor.cm-focused {
                outline: 0 !important;
            }

            #code-mirror-editor .cm-gutters {
                user-select: none;
                background-color: inherit;
                border-right: 0;
            }

            #code-mirror-editor .cm-lineNumbers {
                background-color: #2e2e2e;
            }

            #code-mirror-editor .cm-scroller {
                font-family: Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
                font-size: var(--editor-font-size, 14px);
                overflow: auto;
            }

            #code-mirror-editor .cm-editor.cm-focused .cm-activeLine,
            #code-mirror-editor .cm-editor.cm-focused .cm-activeLineGutter {
                background-color: rgb(130, 130, 130, 0.1);
            }

            #code-mirror-editor .cm-editor:not(.cm-focused) .cm-activeLine,
            #code-mirror-editor .cm-editor:not(.cm-focused) .cm-activeLineGutter {
                background-color: transparent;
            }

            #code-mirror-editor .cm-foldGutter span {
                font-size: 1.1rem;
                line-height: 1.1rem;
                color: rgb(130, 130, 130, 0.5);
            }

            #code-mirror-editor .cm-foldGutter span:hover {
                color: #999999;
            }

            #code-mirror-editor .cm-editor {
                height: 100%;
            }

            #code-mirror-editor .cm-editor .cm-content {
                caret-color: #ffffff;
            }
            </style>
        `, this.editor = new A({
      parent: this.shadowRoot.querySelector("#code-mirror-editor"),
      state: Pl(
        (e = this.getAttribute("value")) != null ? e : "",
        this.editable,
        (i) => this.onUpdateValue(i)
      )
    }), this.hasAttribute("autofocus") && this.editor.focus();
  }
}
customElements.define("code-mirror", aO);
