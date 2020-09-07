/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /gh/alpinejs/alpine@2.3.5/dist/alpine.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Alpine = t()
}(this, function() {
  "use strict";

  function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })), n.push.apply(n, i)
    }
    return n
  }

  function n(n) {
    for (var i = 1; i < arguments.length; i++) {
      var r = null != arguments[i] ? arguments[i] : {};
      i % 2 ? t(Object(r), !0).forEach(function(t) {
        e(n, t, r[t])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      })
    }
    return n
  }

  function i(e) {
    return Array.from(new Set(e))
  }

  function r() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")
  }

  function s(e, t) {
    var n;
    return function() {
      var i = this,
        r = arguments;
      clearTimeout(n), n = setTimeout(function() {
        n = null, e.apply(i, r)
      }, t)
    }
  }

  function a(e, t, n = {}) {
    return new Function(["$data", ...Object.keys(n)], `var result; with($data) { result = ${e} }; return result`)(t, ...Object.values(n))
  }
  const o = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref)\b/;

  function l(e) {
    const t = u(e.name);
    return o.test(t)
  }

  function c(e, t) {
    return Array.from(e.attributes).filter(l).map(e => {
      const t = u(e.name),
        n = t.match(o),
        i = t.match(/:([a-zA-Z\-:]+)/),
        r = t.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      return {
        type: n ? n[1] : null,
        value: i ? i[1] : null,
        modifiers: r.map(e => e.replace(".", "")),
        expression: e.value
      }
    }).filter(e => !t || e.type === t)
  }

  function u(e) {
    return e.startsWith("@") ? e.replace("@", "x-on:") : e.startsWith(":") ? e.replace(":", "x-bind:") : e
  }

  function d(e, t, n = !1) {
    if (n) return t();
    const i = c(e, "transition"),
      r = c(e, "show")[0];
    if (r && r.modifiers.includes("transition")) {
      let n = r.modifiers;
      if (n.includes("out") && !n.includes("in")) return t();
      const i = n.includes("in") && n.includes("out");
      (function(e, t, n) {
        const i = {
          duration: m(t, "duration", 150),
          origin: m(t, "origin", "center"),
          first: {
            opacity: 0,
            scale: m(t, "scale", 95)
          },
          second: {
            opacity: 1,
            scale: 100
          }
        };
        p(e, t, n, () => {}, i)
      })(e, n = i ? n.filter((e, t) => t < n.indexOf("out")) : n, t)
    } else i.filter(e => ["enter", "enter-start", "enter-end"].includes(e.value)).length > 0 ? function(e, t, n) {
      const i = (t.find(e => "enter" === e.value) || {
          expression: ""
        }).expression.split(" ").filter(e => "" !== e),
        r = (t.find(e => "enter-start" === e.value) || {
          expression: ""
        }).expression.split(" ").filter(e => "" !== e),
        s = (t.find(e => "enter-end" === e.value) || {
          expression: ""
        }).expression.split(" ").filter(e => "" !== e);
      h(e, i, r, s, n, () => {})
    }(e, i, t) : t()
  }

  function f(e, t, n = !1) {
    if (n) return t();
    const i = c(e, "transition"),
      r = c(e, "show")[0];
    if (r && r.modifiers.includes("transition")) {
      let n = r.modifiers;
      if (n.includes("in") && !n.includes("out")) return t();
      const i = n.includes("in") && n.includes("out");
      (function(e, t, n, i) {
        const r = {
          duration: n ? m(t, "duration", 150) : m(t, "duration", 150) / 2,
          origin: m(t, "origin", "center"),
          first: {
            opacity: 1,
            scale: 100
          },
          second: {
            opacity: 0,
            scale: m(t, "scale", 95)
          }
        };
        p(e, t, () => {}, i, r)
      })(e, n = i ? n.filter((e, t) => t > n.indexOf("out")) : n, i, t)
    } else i.filter(e => ["leave", "leave-start", "leave-end"].includes(e.value)).length > 0 ? function(e, t, n) {
      const i = (t.find(e => "leave" === e.value) || {
          expression: ""
        }).expression.split(" ").filter(e => "" !== e),
        r = (t.find(e => "leave-start" === e.value) || {
          expression: ""
        }).expression.split(" ").filter(e => "" !== e),
        s = (t.find(e => "leave-end" === e.value) || {
          expression: ""
        }).expression.split(" ").filter(e => "" !== e);
      h(e, i, r, s, () => {}, n)
    }(e, i, t) : t()
  }

  function m(e, t, n) {
    if (-1 === e.indexOf(t)) return n;
    const i = e[e.indexOf(t) + 1];
    if (!i) return n;
    if ("scale" === t && !b(i)) return n;
    if ("duration" === t) {
      let e = i.match(/([0-9]+)ms/);
      if (e) return e[1]
    }
    return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [i, e[e.indexOf(t) + 2]].join(" ") : i
  }

  function p(e, t, n, i, r) {
    const s = e.style.opacity,
      a = e.style.transform,
      o = e.style.transformOrigin,
      l = !t.includes("opacity") && !t.includes("scale"),
      c = l || t.includes("opacity"),
      u = l || t.includes("scale"),
      d = {
        start() {
          c && (e.style.opacity = r.first.opacity), u && (e.style.transform = `scale(${r.first.scale/100})`)
        },
        during() {
          u && (e.style.transformOrigin = r.origin), e.style.transitionProperty = [c ? "opacity" : "", u ? "transform" : ""].join(" ").trim(), e.style.transitionDuration = `${r.duration/1e3}s`, e.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)"
        },
        show() {
          n()
        },
        end() {
          c && (e.style.opacity = r.second.opacity), u && (e.style.transform = `scale(${r.second.scale/100})`)
        },
        hide() {
          i()
        },
        cleanup() {
          c && (e.style.opacity = s), u && (e.style.transform = a), u && (e.style.transformOrigin = o), e.style.transitionProperty = null, e.style.transitionDuration = null, e.style.transitionTimingFunction = null
        }
      };
    v(e, d)
  }

  function h(e, t, n, i, r, s) {
    const a = e.__x_original_classes || [],
      o = {
        start() {
          e.classList.add(...n)
        },
        during() {
          e.classList.add(...t)
        },
        show() {
          r()
        },
        end() {
          e.classList.remove(...n.filter(e => !a.includes(e))), e.classList.add(...i)
        },
        hide() {
          s()
        },
        cleanup() {
          e.classList.remove(...t.filter(e => !a.includes(e))), e.classList.remove(...i.filter(e => !a.includes(e)))
        }
      };
    v(e, o)
  }

  function v(e, t) {
    t.start(), t.during(), requestAnimationFrame(() => {
      let n = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""));
      t.show(), requestAnimationFrame(() => {
        t.end(), setTimeout(() => {
          t.hide(), e.isConnected && t.cleanup()
        }, n)
      })
    })
  }

  function b(e) {
    return !isNaN(e)
  }

  function y(e, t, i, r, s) {
    "template" !== t.tagName.toLowerCase() && console.warn("Alpine: [x-for] directive should only be added to <template> tags.");
    let a = function(e) {
        let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          n = e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
        if (!n) return;
        let i = {};
        i.items = n[2].trim();
        let r = n[1].trim().replace(/^\(|\)$/g, ""),
          s = r.match(t);
        s ? (i.item = r.replace(t, "").trim(), i.index = s[1].trim(), s[2] && (i.collection = s[2].trim())) : i.item = r;
        return i
      }(i),
      o = function(e, t, n, i) {
        let r = c(t, "if")[0];
        if (r && !e.evaluateReturnExpression(t, r.expression)) return [];
        return e.evaluateReturnExpression(t, n.items, i)
      }(e, t, a, s),
      l = t;
    o.forEach((i, u) => {
        let f = function(e, t, i, r, s) {
            let a = s ? n({}, s) : {};
            a[e.item] = t, e.index && (a[e.index] = i);
            e.collection && (a[e.collection] = r);
            return a
          }(a, i, u, o, s()),
          m = function(e, t, n, i) {
            let r = c(t, "bind").filter(e => "key" === e.value)[0];
            return r ? e.evaluateReturnExpression(t, r.expression, () => i) : n
          }(e, t, u, f),
          p = function(e, t) {
            if (!e) return;
            if (e.__x_for_key === t) return e;
            let n = e;
            for (; n;) {
              if (n.__x_for_key === t) return n.parentElement.insertBefore(n, e);
              n = !(!n.nextElementSibling || void 0 === n.nextElementSibling.__x_for_key) && n.nextElementSibling
            }
          }(l.nextElementSibling, m);
        p ? (delete p.__x_for_key, p.__x_for = f, e.updateElements(p, () => p.__x_for)) : (d(p = function(e, t) {
          let n = document.importNode(e.content, !0);
          1 !== n.childElementCount && console.warn("Alpine: <template> tag with [x-for] encountered with multiple element roots. Make sure <template> only has a single child node.");
          return t.parentElement.insertBefore(n, t.nextElementSibling), t.nextElementSibling
        }(t, l), () => {}, r), p.__x_for = f, e.initializeElements(p, () => p.__x_for)), (l = p).__x_for_key = m
      }),
      function(e) {
        var t = !(!e.nextElementSibling || void 0 === e.nextElementSibling.__x_for_key) && e.nextElementSibling;
        for (; t;) {
          let e = t,
            n = t.nextElementSibling;
          f(t, () => {
            e.remove()
          }), t = !(!n || void 0 === n.__x_for_key) && n
        }
      }(l)
  }

  function g(e, t, n, r, s, a) {
    var o = e.evaluateReturnExpression(t, r, s);
    if ("value" === n)
      if (void 0 === o && r.match(/\./).length && (o = ""), "radio" === t.type) void 0 === t.attributes.value && "bind" === a ? t.value = o : "bind" !== a && (t.checked = t.value == o);
      else if ("checkbox" === t.type) {
      if (Array.isArray(o)) {
        let e = !1;
        o.forEach(n => {
          n == t.value && (e = !0)
        }), t.checked = e
      } else t.checked = !!o;
      "string" == typeof o && (t.value = o)
    } else if ("SELECT" === t.tagName) ! function(e, t) {
      const n = [].concat(t).map(e => e + "");
      Array.from(e.options).forEach(e => {
        e.selected = n.includes(e.value || e.text)
      })
    }(t, o);
    else {
      if (t.value === o) return;
      t.value = o
    } else if ("class" === n)
      if (Array.isArray(o)) {
        const e = t.__x_original_classes || [];
        t.setAttribute("class", i(e.concat(o)).join(" "))
      } else if ("object" == typeof o) {
      Object.keys(o).sort((e, t) => o[e] - o[t]).forEach(e => {
        o[e] ? e.split(" ").filter(Boolean).forEach(e => t.classList.add(e)) : e.split(" ").filter(Boolean).forEach(e => t.classList.remove(e))
      })
    } else {
      const e = t.__x_original_classes || [],
        n = o.split(" ").filter(Boolean);
      t.setAttribute("class", i(e.concat(n)).join(" "))
    } else [null, void 0, !1].includes(o) ? t.removeAttribute(n) : ! function(e) {
      return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
    }(n) ? t.setAttribute(n, o) : t.setAttribute(n, n)
  }

  function x(e, t, n, i, r, a = {}) {
    if (i.includes("away")) {
      let s = o => {
        t.contains(o.target) || t.offsetWidth < 1 && t.offsetHeight < 1 || (w(e, r, o, a), i.includes("once") && document.removeEventListener(n, s))
      };
      document.addEventListener(n, s)
    } else {
      let o = i.includes("window") ? window : i.includes("document") ? document : t,
        l = s => {
          if (o !== window && o !== document || document.body.contains(t)) {
            if (!(function(e) {
                return ["keydown", "keyup"].includes(e)
              }(n) && function(e, t) {
                let n = t.filter(e => !["window", "document", "prevent", "stop"].includes(e));
                if (n.includes("debounce")) {
                  let e = n.indexOf("debounce");
                  n.splice(e, b((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                }
                if (0 === n.length) return !1;
                if (1 === n.length && n[0] === _(e.key)) return !1;
                const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(e => n.includes(e));
                if (n = n.filter(e => !i.includes(e)), i.length > 0) {
                  const t = i.filter(t => ("cmd" !== t && "super" !== t || (t = "meta"), e[`${t}Key`]));
                  if (t.length === i.length && n[0] === _(e.key)) return !1
                }
                return !0
              }(s, i) || (i.includes("prevent") && s.preventDefault(), i.includes("stop") && s.stopPropagation(), i.includes("self") && s.target !== t))) {
              !1 === w(e, r, s, a) ? s.preventDefault() : i.includes("once") && o.removeEventListener(n, l)
            }
          } else o.removeEventListener(n, l)
        };
      if (i.includes("debounce")) {
        let e = i[i.indexOf("debounce") + 1] || "invalid-wait",
          t = b(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
        l = s(l, t)
      }
      o.addEventListener(n, l)
    }
  }

  function w(e, t, i, r) {
    return e.evaluateCommandExpression(i.target, t, () => n({}, r(), {
      $event: i
    }))
  }

  function _(e) {
    switch (e) {
      case "/":
        return "slash";
      case " ":
      case "Spacebar":
        return "space";
      default:
        return e && e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
    }
  }

  function E(e, t, n) {
    return "radio" === e.type && (e.hasAttribute("name") || e.setAttribute("name", n)), (n, i) => {
      if (n instanceof CustomEvent && n.detail) return n.detail;
      if ("checkbox" === e.type) return Array.isArray(i) ? n.target.checked ? i.concat([n.target.value]) : i.filter(e => e !== n.target.value) : n.target.checked;
      if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map(e => {
        const t = e.value || e.text,
          n = t ? parseFloat(t) : null;
        return isNaN(n) ? t : n
      }) : Array.from(n.target.selectedOptions).map(e => e.value || e.text); {
        const e = n.target.value,
          i = e ? parseFloat(e) : null;
        return t.includes("number") ? isNaN(i) ? e : i : t.includes("trim") ? e.trim() : e
      }
    }
  }
  const {
    isArray: O
  } = Array, {
    getPrototypeOf: k,
    create: A,
    defineProperty: S,
    defineProperties: $,
    isExtensible: P,
    getOwnPropertyDescriptor: D,
    getOwnPropertyNames: C,
    getOwnPropertySymbols: j,
    preventExtensions: T,
    hasOwnProperty: N
  } = Object, {
    push: L,
    concat: R,
    map: z
  } = Array.prototype;

  function F(e) {
    return void 0 === e
  }

  function M(e) {
    return "function" == typeof e
  }
  const I = new WeakMap;

  function B(e, t) {
    I.set(e, t)
  }
  const U = e => I.get(e) || e;

  function q(e, t) {
    return e.valueIsObservable(t) ? e.getProxy(t) : t
  }

  function W(e, t, n) {
    R.call(C(n), j(n)).forEach(i => {
      let r = D(n, i);
      r.configurable || (r = ee(e, r, q)), S(t, i, r)
    }), T(t)
  }
  class K {
    constructor(e, t) {
      this.originalTarget = t, this.membrane = e
    }
    get(e, t) {
      const {
        originalTarget: n,
        membrane: i
      } = this, r = n[t], {
        valueObserved: s
      } = i;
      return s(n, t), i.getProxy(r)
    }
    set(e, t, n) {
      const {
        originalTarget: i,
        membrane: {
          valueMutated: r
        }
      } = this;
      return i[t] !== n ? (i[t] = n, r(i, t)) : "length" === t && O(i) && r(i, t), !0
    }
    deleteProperty(e, t) {
      const {
        originalTarget: n,
        membrane: {
          valueMutated: i
        }
      } = this;
      return delete n[t], i(n, t), !0
    }
    apply(e, t, n) {}
    construct(e, t, n) {}
    has(e, t) {
      const {
        originalTarget: n,
        membrane: {
          valueObserved: i
        }
      } = this;
      return i(n, t), t in n
    }
    ownKeys(e) {
      const {
        originalTarget: t
      } = this;
      return R.call(C(t), j(t))
    }
    isExtensible(e) {
      const t = P(e);
      if (!t) return t;
      const {
        originalTarget: n,
        membrane: i
      } = this, r = P(n);
      return r || W(i, e, n), r
    }
    setPrototypeOf(e, t) {}
    getPrototypeOf(e) {
      const {
        originalTarget: t
      } = this;
      return k(t)
    }
    getOwnPropertyDescriptor(e, t) {
      const {
        originalTarget: n,
        membrane: i
      } = this, {
        valueObserved: r
      } = this.membrane;
      r(n, t);
      let s = D(n, t);
      if (F(s)) return s;
      const a = D(e, t);
      return F(a) ? ((s = ee(i, s, q)).configurable || S(e, t, s), s) : a
    }
    preventExtensions(e) {
      const {
        originalTarget: t,
        membrane: n
      } = this;
      return W(n, e, t), T(t), !0
    }
    defineProperty(e, t, n) {
      const {
        originalTarget: i,
        membrane: r
      } = this, {
        valueMutated: s
      } = r, {
        configurable: a
      } = n;
      if (N.call(n, "writable") && !N.call(n, "value")) {
        const e = D(i, t);
        n.value = e.value
      }
      return S(i, t, function(e) {
        return N.call(e, "value") && (e.value = U(e.value)), e
      }(n)), !1 === a && S(e, t, ee(r, n, q)), s(i, t), !0
    }
  }

  function G(e, t) {
    return e.valueIsObservable(t) ? e.getReadOnlyProxy(t) : t
  }
  class H {
    constructor(e, t) {
      this.originalTarget = t, this.membrane = e
    }
    get(e, t) {
      const {
        membrane: n,
        originalTarget: i
      } = this, r = i[t], {
        valueObserved: s
      } = n;
      return s(i, t), n.getReadOnlyProxy(r)
    }
    set(e, t, n) {
      return !1
    }
    deleteProperty(e, t) {
      return !1
    }
    apply(e, t, n) {}
    construct(e, t, n) {}
    has(e, t) {
      const {
        originalTarget: n,
        membrane: {
          valueObserved: i
        }
      } = this;
      return i(n, t), t in n
    }
    ownKeys(e) {
      const {
        originalTarget: t
      } = this;
      return R.call(C(t), j(t))
    }
    setPrototypeOf(e, t) {}
    getOwnPropertyDescriptor(e, t) {
      const {
        originalTarget: n,
        membrane: i
      } = this, {
        valueObserved: r
      } = i;
      r(n, t);
      let s = D(n, t);
      if (F(s)) return s;
      const a = D(e, t);
      return F(a) ? (s = ee(i, s, G), N.call(s, "set") && (s.set = void 0), s.configurable || S(e, t, s), s) : a
    }
    preventExtensions(e) {
      return !1
    }
    defineProperty(e, t, n) {
      return !1
    }
  }

  function Z(e) {
    let t = void 0;
    return O(e) ? t = [] : "object" == typeof e && (t = {}), t
  }
  const J = Object.prototype;

  function Q(e) {
    if (null === e) return !1;
    if ("object" != typeof e) return !1;
    if (O(e)) return !0;
    const t = k(e);
    return t === J || null === t || null === k(t)
  }
  const V = (e, t) => {},
    X = (e, t) => {},
    Y = e => e;

  function ee(e, t, n) {
    const {
      set: i,
      get: r
    } = t;
    return N.call(t, "value") ? t.value = n(e, t.value) : (F(r) || (t.get = function() {
      return n(e, r.call(U(this)))
    }), F(i) || (t.set = function(t) {
      i.call(U(this), e.unwrapProxy(t))
    })), t
  }
  class te {
    constructor(e) {
      if (this.valueDistortion = Y, this.valueMutated = X, this.valueObserved = V, this.valueIsObservable = Q, this.objectGraph = new WeakMap, !F(e)) {
        const {
          valueDistortion: t,
          valueMutated: n,
          valueObserved: i,
          valueIsObservable: r
        } = e;
        this.valueDistortion = M(t) ? t : Y, this.valueMutated = M(n) ? n : X, this.valueObserved = M(i) ? i : V, this.valueIsObservable = M(r) ? r : Q
      }
    }
    getProxy(e) {
      const t = U(e),
        n = this.valueDistortion(t);
      if (this.valueIsObservable(n)) {
        const i = this.getReactiveState(t, n);
        return i.readOnly === e ? e : i.reactive
      }
      return n
    }
    getReadOnlyProxy(e) {
      e = U(e);
      const t = this.valueDistortion(e);
      return this.valueIsObservable(t) ? this.getReactiveState(e, t).readOnly : t
    }
    unwrapProxy(e) {
      return U(e)
    }
    getReactiveState(e, t) {
      const {
        objectGraph: n
      } = this;
      let i = n.get(t);
      if (i) return i;
      const r = this;
      return i = {
        get reactive() {
          const n = new K(r, t),
            i = new Proxy(Z(t), n);
          return B(i, e), S(this, "reactive", {
            value: i
          }), i
        },
        get readOnly() {
          const n = new H(r, t),
            i = new Proxy(Z(t), n);
          return B(i, e), S(this, "readOnly", {
            value: i
          }), i
        }
      }, n.set(t, i), i
    }
  }
  class ne {
    constructor(e, t = null) {
      this.$el = e;
      const n = this.$el.getAttribute("x-data"),
        i = "" === n ? "{}" : n,
        r = this.$el.getAttribute("x-init");
      this.unobservedData = t || a(i, {});
      let {
        membrane: s,
        data: o
      } = this.wrapDataInObservable(this.unobservedData);
      var l;
      this.$data = o, this.membrane = s, this.unobservedData.$el = this.$el, this.unobservedData.$refs = this.getRefsProxy(), this.nextTickStack = [], this.unobservedData.$nextTick = (e => {
        this.nextTickStack.push(e)
      }), this.watchers = {}, this.unobservedData.$watch = ((e, t) => {
        this.watchers[e] || (this.watchers[e] = []), this.watchers[e].push(t)
      }), this.showDirectiveStack = [], this.showDirectiveLastElement, r && !t && (this.pauseReactivity = !0, l = this.evaluateReturnExpression(this.$el, r), this.pauseReactivity = !1), this.initializeElements(this.$el), this.listenForNewElementsToInitialize(), "function" == typeof l && l.call(this.$data)
    }
    getUnobservedData() {
      return function(e, t) {
        let n = e.unwrapProxy(t),
          i = {};
        return Object.keys(n).forEach(e => {
          ["$el", "$refs", "$nextTick", "$watch"].includes(e) || (i[e] = n[e])
        }), i
      }(this.membrane, this.$data)
    }
    wrapDataInObservable(e) {
      var t = this;
      let n = s(function() {
        t.updateElements(t.$el)
      }, 0);
      return function(e, t) {
        let n = new te({
          valueMutated(e, n) {
            t(e, n)
          }
        });
        return {
          data: n.getProxy(e),
          membrane: n
        }
      }(e, (e, i) => {
        t.watchers[i] ? t.watchers[i].forEach(t => t(e[i])) : Object.keys(t.watchers).filter(e => e.includes(".")).forEach(n => {
          let r = n.split(".");
          i === r[r.length - 1] && r.reduce((r, s) => (Object.is(e, r) && t.watchers[n].forEach(t => t(e[i])), r[s]), t.getUnobservedData())
        }), t.pauseReactivity || n()
      })
    }
    walkAndSkipNestedComponents(e, t, n = (() => {})) {
      ! function e(t, n) {
        if (!1 === n(t)) return;
        let i = t.firstElementChild;
        for (; i;) e(i, n), i = i.nextElementSibling
      }(e, e => e.hasAttribute("x-data") && !e.isSameNode(this.$el) ? (e.__x || n(e), !1) : t(e))
    }
    initializeElements(e, t = (() => {})) {
      this.walkAndSkipNestedComponents(e, e => void 0 === e.__x_for_key && (void 0 === e.__x_inserted_me && void this.initializeElement(e, t)), e => {
        e.__x = new ne(e)
      }), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e)
    }
    initializeElement(e, t) {
      e.hasAttribute("class") && c(e).length > 0 && (e.__x_original_classes = e.getAttribute("class").split(" ")), this.registerListeners(e, t), this.resolveBoundAttributes(e, !0, t)
    }
    updateElements(e, t = (() => {})) {
      this.walkAndSkipNestedComponents(e, e => {
        if (void 0 !== e.__x_for_key && !e.isSameNode(this.$el)) return !1;
        this.updateElement(e, t)
      }, e => {
        e.__x = new ne(e)
      }), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e)
    }
    executeAndClearNextTickStack(e) {
      if (e === this.$el)
        for (; this.nextTickStack.length > 0;) this.nextTickStack.shift()()
    }
    executeAndClearRemainingShowDirectiveStack() {
      this.showDirectiveStack.reverse().map(e => new Promise(t => {
        e(e => {
          t(e)
        })
      })).reduce((e, t) => e.then(() => t.then(e => e())), Promise.resolve(() => {})), this.showDirectiveStack = [], this.showDirectiveLastElement = void 0
    }
    updateElement(e, t) {
      this.resolveBoundAttributes(e, !1, t)
    }
    registerListeners(e, t) {
      c(e).forEach(({
        type: i,
        value: r,
        modifiers: s,
        expression: a
      }) => {
        switch (i) {
          case "on":
            x(this, e, r, s, a, t);
            break;
          case "model":
            ! function(e, t, i, r, s) {
              var a = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || i.includes("lazy") ? "change" : "input";
              x(e, t, a, i, `${r} = rightSideOfExpression($event, ${r})`, () => n({}, s(), {
                rightSideOfExpression: E(t, i, r)
              }))
            }(this, e, s, a, t)
        }
      })
    }
    resolveBoundAttributes(e, t = !1, n) {
      let i = c(e);
      if (void 0 !== e.type && "radio" === e.type) {
        const e = i.findIndex(e => "model" === e.type);
        e > -1 && i.push(i.splice(e, 1)[0])
      }
      i.forEach(({
        type: r,
        value: s,
        modifiers: a,
        expression: o
      }) => {
        switch (r) {
          case "model":
            g(this, e, "value", o, n, r);
            break;
          case "bind":
            if ("template" === e.tagName.toLowerCase() && "key" === s) return;
            g(this, e, s, o, n, r);
            break;
          case "text":
            var l = this.evaluateReturnExpression(e, o, n);
            ! function(e, t, n) {
              void 0 === t && n.match(/\./).length && (t = ""), e.innerText = t
            }(e, l, o);
            break;
          case "html":
            ! function(e, t, n, i) {
              t.innerHTML = e.evaluateReturnExpression(t, n, i)
            }(this, e, o, n);
            break;
          case "show":
            l = this.evaluateReturnExpression(e, o, n);
            ! function(e, t, n, i, r = !1) {
              const s = () => {
                  t.style.display = "none"
                },
                a = () => {
                  1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display")
                };
              if (!0 === r) return void(n ? a() : s());
              const o = e => {
                n ? ("" !== t.style.display && d(t, () => {
                  a()
                }), e(() => {})) : "none" !== t.style.display ? f(t, () => {
                  e(() => {
                    s()
                  })
                }) : e(() => {})
              };
              i.includes("immediate") ? o(e => e()) : (e.showDirectiveLastElement && !e.showDirectiveLastElement.contains(t) && e.executeAndClearRemainingShowDirectiveStack(), e.showDirectiveStack.push(o), e.showDirectiveLastElement = t)
            }(this, e, l, a, t);
            break;
          case "if":
            if (i.filter(e => "for" === e.type).length > 0) return;
            l = this.evaluateReturnExpression(e, o, n);
            ! function(e, t, n, i, r) {
              "template" !== t.nodeName.toLowerCase() && console.warn("Alpine: [x-if] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#x-if");
              const s = t.nextElementSibling && !0 === t.nextElementSibling.__x_inserted_me;
              if (n && !s) {
                const n = document.importNode(t.content, !0);
                t.parentElement.insertBefore(n, t.nextElementSibling), d(t.nextElementSibling, () => {}, i), e.initializeElements(t.nextElementSibling, r), t.nextElementSibling.__x_inserted_me = !0
              } else !n && s && f(t.nextElementSibling, () => {
                t.nextElementSibling.remove()
              }, i)
            }(this, e, l, t, n);
            break;
          case "for":
            y(this, e, o, t, n);
            break;
          case "cloak":
            e.removeAttribute("x-cloak")
        }
      })
    }
    evaluateReturnExpression(e, t, i = (() => {})) {
      return a(t, this.$data, n({}, i(), {
        $dispatch: this.getDispatchFunction(e)
      }))
    }
    evaluateCommandExpression(e, t, i = (() => {})) {
      return function(e, t, n = {}) {
        if (Object.keys(t).includes(e)) {
          let i = new Function(["dataContext", ...Object.keys(n)], `with(dataContext) { return ${e} }`)(t, ...Object.values(n));
          if ("function" == typeof i) return i.call(t, n.$event)
        }
        return new Function(["dataContext", ...Object.keys(n)], `with(dataContext) { ${e} }`)(t, ...Object.values(n))
      }(t, this.$data, n({}, i(), {
        $dispatch: this.getDispatchFunction(e)
      }))
    }
    getDispatchFunction(e) {
      return (t, n = {}) => {
        e.dispatchEvent(new CustomEvent(t, {
          detail: n,
          bubbles: !0
        }))
      }
    }
    listenForNewElementsToInitialize() {
      const e = this.$el;
      new MutationObserver(e => {
        for (let t = 0; t < e.length; t++) {
          const n = e[t].target.closest("[x-data]");
          if (n && n.isSameNode(this.$el)) {
            if ("attributes" === e[t].type && "x-data" === e[t].attributeName) {
              const n = a(e[t].target.getAttribute("x-data"), {});
              Object.keys(n).forEach(e => {
                this.$data[e] !== n[e] && (this.$data[e] = n[e])
              })
            }
            e[t].addedNodes.length > 0 && e[t].addedNodes.forEach(e => {
              1 !== e.nodeType || e.__x_inserted_me || (e.matches("[x-data]") ? e.__x = new ne(e) : this.initializeElements(e))
            })
          }
        }
      }).observe(e, {
        childList: !0,
        attributes: !0,
        subtree: !0
      })
    }
    getRefsProxy() {
      var e = this;
      return new Proxy({}, {
        get(t, n) {
          return "$isAlpineProxy" === n || (e.walkAndSkipNestedComponents(e.$el, e => {
            e.hasAttribute("x-ref") && e.getAttribute("x-ref") === n && (i = e)
          }), i);
          var i
        }
      })
    }
  }
  const ie = {
    version: "2.3.4",
    start: async function() {
      r() || await new Promise(e => {
        "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
      }), this.discoverComponents(e => {
        this.initializeComponent(e)
      }), document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(e => {
          this.initializeComponent(e)
        })
      }), this.listenForNewUninitializedComponentsAtRunTime(e => {
        this.initializeComponent(e)
      })
    },
    discoverComponents: function(e) {
      document.querySelectorAll("[x-data]").forEach(t => {
        e(t)
      })
    },
    discoverUninitializedComponents: function(e, t = null) {
      const n = (t || document).querySelectorAll("[x-data]");
      Array.from(n).filter(e => void 0 === e.__x).forEach(t => {
        e(t)
      })
    },
    listenForNewUninitializedComponentsAtRunTime: function(e) {
      const t = document.querySelector("body");
      new MutationObserver(e => {
        for (let t = 0; t < e.length; t++) e[t].addedNodes.length > 0 && e[t].addedNodes.forEach(e => {
          1 === e.nodeType && (e.parentElement && e.parentElement.closest("[x-data]") || this.discoverUninitializedComponents(e => {
            this.initializeComponent(e)
          }, e.parentElement))
        })
      }).observe(t, {
        childList: !0,
        attributes: !0,
        subtree: !0
      })
    },
    initializeComponent: function(e) {
      e.__x || (e.__x = new ne(e))
    },
    clone: function(e, t) {
      t.__x || (t.__x = new ne(t, e.getUnobservedData()))
    }
  };
  return r() || (window.Alpine = ie, window.deferLoadingAlpine ? window.deferLoadingAlpine(function() {
    window.Alpine.start()
  }) : window.Alpine.start()), ie
});
//# sourceMappingURL=/sm/bda9d1827a9cd40e32db620f0ce3aa947d27947e3e81dbd119415b83a1bac811.map