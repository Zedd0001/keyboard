(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function S() {}

function ae(e) {
    return e()
}

function Z() {
    return Object.create(null)
}

function I(e) {
    e.forEach(ae)
}

function ce(e) {
    return typeof e == "function"
}

function we(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}

function Le(e) {
    return Object.keys(e).length === 0
}

function h(e, t) {
    e.appendChild(t)
}

function R(e, t, n) {
    e.insertBefore(t, n || null)
}

function O(e) {
    e.parentNode.removeChild(e)
}

function ke(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function g(e) {
    return document.createElement(e)
}

function $(e) {
    return document.createTextNode(e)
}

function E() {
    return $(" ")
}

function Ee() {
    return $("")
}

function T(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}

function a(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function Oe(e) {
    return Array.from(e.childNodes)
}

function U(e, t) {
    t = "" + t, e.wholeText !== t && (e.data = t)
}

function A(e, t) {
    e.value = t == null ? "" : t
}
let F;

function M(e) {
    F = e
}

function xe() {
    if (!F) throw new Error("Function called outside component initialization");
    return F
}

function Ne(e) {
    xe().$$.on_destroy.push(e)
}
const P = [],
    G = [],
    W = [],
    ee = [],
    Ce = Promise.resolve();
let H = !1;

function je() {
    H || (H = !0, Ce.then(de))
}

function J(e) {
    W.push(e)
}
const q = new Set;
let K = 0;

function de() {
    const e = F;
    do {
        for (; K < P.length;) {
            const t = P[K];
            K++, M(t), Ae(t.$$)
        }
        for (M(null), P.length = 0, K = 0; G.length;) G.pop()();
        for (let t = 0; t < W.length; t += 1) {
            const n = W[t];
            q.has(n) || (q.add(n), n())
        }
        W.length = 0
    } while (P.length);
    for (; ee.length;) ee.pop()();
    H = !1, q.clear(), M(e)
}

function Ae(e) {
    if (e.fragment !== null) {
        e.update(), I(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(J)
    }
}
const Re = new Set;

function Pe(e, t) {
    e && e.i && (Re.delete(e), e.i(t))
}

function $e(e, t, n, r) {
    const {
        fragment: i,
        after_update: o
    } = e.$$;
    i && i.m(t, n), r || J(() => {
        const s = e.$$.on_mount.map(ae).filter(ce);
        e.$$.on_destroy ? e.$$.on_destroy.push(...s) : I(s), e.$$.on_mount = []
    }), o.forEach(J)
}

function Me(e, t) {
    const n = e.$$;
    n.fragment !== null && (I(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Se(e, t) {
    e.$$.dirty[0] === -1 && (P.push(e), je(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function Te(e, t, n, r, i, o, s, u = [-1]) {
    const l = F;
    M(e);
    const f = e.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: S,
        not_equal: i,
        bound: Z(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (l ? l.$$.context : [])),
        callbacks: Z(),
        dirty: u,
        skip_bound: !1,
        root: t.target || l.$$.root
    };
    s && s(f.root);
    let L = !1;
    if (f.ctx = n ? n(e, t.props || {}, (v, y, ...w) => {
            const x = w.length ? w[0] : y;
            return f.ctx && i(f.ctx[v], f.ctx[v] = x) && (!f.skip_bound && f.bound[v] && f.bound[v](x), L && Se(e, v)), y
        }) : [], f.update(), L = !0, I(f.before_update), f.fragment = r ? r(f.ctx) : !1, t.target) {
        if (t.hydrate) {
            const v = Oe(t.target);
            f.fragment && f.fragment.l(v), v.forEach(O)
        } else f.fragment && f.fragment.c();
        t.intro && Pe(e.$$.fragment), $e(e, t.target, t.anchor, t.customElement), de()
    }
    M(l)
}
class Fe {
    $destroy() {
        Me(this, 1), this.$destroy = S
    }
    $on(t, n) {
        if (!ce(n)) return S;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n), () => {
            const i = r.indexOf(n);
            i !== -1 && r.splice(i, 1)
        }
    }
    $set(t) {
        this.$$set && !Le(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
var V = {
        exports: {}
    },
    j = typeof Reflect == "object" ? Reflect : null,
    te = j && typeof j.apply == "function" ? j.apply : function(t, n, r) {
        return Function.prototype.apply.call(t, n, r)
    },
    z;
j && typeof j.ownKeys == "function" ? z = j.ownKeys : Object.getOwnPropertySymbols ? z = function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
} : z = function(t) {
    return Object.getOwnPropertyNames(t)
};

function Ie(e) {
    console && console.warn && console.warn(e)
}
var pe = Number.isNaN || function(t) {
    return t !== t
};

function c() {
    c.init.call(this)
}
V.exports = c;
V.exports.once = De;
c.EventEmitter = c;
c.prototype._events = void 0;
c.prototype._eventsCount = 0;
c.prototype._maxListeners = void 0;
var ne = 10;

function D(e) {
    if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
Object.defineProperty(c, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return ne
    },
    set: function(e) {
        if (typeof e != "number" || e < 0 || pe(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        ne = e
    }
});
c.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
c.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || pe(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this
};

function he(e) {
    return e._maxListeners === void 0 ? c.defaultMaxListeners : e._maxListeners
}
c.prototype.getMaxListeners = function() {
    return he(this)
};
c.prototype.emit = function(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
    var i = t === "error",
        o = this._events;
    if (o !== void 0) i = i && o.error === void 0;
    else if (!i) return !1;
    if (i) {
        var s;
        if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
        var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw u.context = s, u
    }
    var l = o[t];
    if (l === void 0) return !1;
    if (typeof l == "function") te(l, this, n);
    else
        for (var f = l.length, L = be(l, f), r = 0; r < f; ++r) te(L[r], this, n);
    return !0
};

function _e(e, t, n, r) {
    var i, o, s;
    if (D(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), s === void 0) s = o[t] = n, ++e._eventsCount;
    else if (typeof s == "function" ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = he(e), i > 0 && s.length > i && !s.warned) {
        s.warned = !0;
        var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, Ie(u)
    }
    return e
}
c.prototype.addListener = function(t, n) {
    return _e(this, t, n, !1)
};
c.prototype.on = c.prototype.addListener;
c.prototype.prependListener = function(t, n) {
    return _e(this, t, n, !0)
};

function Ke() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function me(e, t, n) {
    var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        },
        i = Ke.bind(r);
    return i.listener = n, r.wrapFn = i, i
}
c.prototype.once = function(t, n) {
    return D(n), this.on(t, me(this, t, n)), this
};
c.prototype.prependOnceListener = function(t, n) {
    return D(n), this.prependListener(t, me(this, t, n)), this
};
c.prototype.removeListener = function(t, n) {
    var r, i, o, s, u;
    if (D(n), i = this._events, i === void 0) return this;
    if (r = i[t], r === void 0) return this;
    if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
    else if (typeof r != "function") {
        for (o = -1, s = r.length - 1; s >= 0; s--)
            if (r[s] === n || r[s].listener === n) {
                u = r[s].listener, o = s;
                break
            } if (o < 0) return this;
        o === 0 ? r.shift() : We(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, u || n)
    }
    return this
};
c.prototype.off = c.prototype.removeListener;
c.prototype.removeAllListeners = function(t) {
    var n, r, i;
    if (r = this._events, r === void 0) return this;
    if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]), this;
    if (arguments.length === 0) {
        var o = Object.keys(r),
            s;
        for (i = 0; i < o.length; ++i) s = o[i], s !== "removeListener" && this.removeAllListeners(s);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = r[t], typeof n == "function") this.removeListener(t, n);
    else if (n !== void 0)
        for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
    return this
};

function ve(e, t, n) {
    var r = e._events;
    if (r === void 0) return [];
    var i = r[t];
    return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? ze(i) : be(i, i.length)
}
c.prototype.listeners = function(t) {
    return ve(this, t, !0)
};
c.prototype.rawListeners = function(t) {
    return ve(this, t, !1)
};
c.listenerCount = function(e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : ge.call(e, t)
};
c.prototype.listenerCount = ge;

function ge(e) {
    var t = this._events;
    if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
c.prototype.eventNames = function() {
    return this._eventsCount > 0 ? z(this._events) : []
};

function be(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n
}

function We(e, t) {
    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
    e.pop()
}

function ze(e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
    return t
}

function De(e, t) {
    return new Promise(function(n, r) {
        function i(s) {
            e.removeListener(t, o), r(s)
        }

        function o() {
            typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments))
        }
        ye(e, t, o, {
            once: !0
        }), t !== "error" && Be(e, i, {
            once: !0
        })
    })
}

function Be(e, t, n) {
    typeof e.on == "function" && ye(e, "error", t, n)
}

function ye(e, t, n, r) {
    if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
    else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(o) {
        r.once && e.removeEventListener(t, i), n(o)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
const Q = new V.exports.EventEmitter;
addEventListener("message", e => Q.emit(e.data.name, e.data.payload));

function Ue(e, t) {
    Q.on(e, t), Ne(() => Q.removeListener(e, t))
}
async function re(e, t) {
    return fetch(`http://${GetParentResourceName()}/${e}`, {
        method: "POST",
        body: JSON.stringify(t)
    }).then(n => n.json()).catch(n => console.error("Erro de solita\xE7\xE3o", n))
}

function ie(e, t, n) {
    const r = e.slice();
    return r[13] = t[n], r[14] = t, r[15] = n, r
}

function oe(e) {
    let t, n, r, i, o, s, u, l, f, L, v, y, w, x, N, d = e[1][0].mode === "area" ? "Salvar" : "Enviar",
        b, B, X, C = e[1],
        m = [];
    for (let p = 0; p < C.length; p += 1) m[p] = fe(ie(e, C, p));
    return {
        c() {
            t = g("main"), n = g("section"), r = g("section"), i = g("section"), o = g("span"), s = $(e[3]), u = E(), l = g("span"), f = $(e[4]), L = E();
            for (let p = 0; p < m.length; p += 1) m[p].c();
            v = E(), y = g("section"), w = g("button"), w.textContent = "Cancelar", x = E(), N = g("button"), b = $(d), a(o, "class", "text-sm tracking-wider uppercase"), a(l, "class", "text-xs text-white/50 tracking-wider"), a(i, "class", "grid place-items-center"), a(r, "class", "pt-[1.875rem] pb-[1.1875rem] px-[0.875rem] grid place-items-center space-y-4"), a(w, "class", "h-11 flex-1 text-xs text-white/50 bg-black/20 hover:bg-black/50 tracking-wider uppercase"), a(N, "class", "h-11 flex-1 text-xs text-white/50 bg-black/20 hover:bg-black/50 tracking-wider uppercase"), a(y, "class", "w-full flex"), a(n, "class", "w-72 grid [background:_radial-gradient(98.94%_608.31%_at_48.55%_52.27%,_rgba(0,_0,_0,_0.8)_0%,_rgba(0,_0,_0,_0)_100%,_rgba(0,_0,_0,_0)_100%)_,_rgba(0,_0,_0,_0.4)] overflow-hidden rounded"), a(t, "class", "pr-[7.25rem] fixed grid inset-0 place-items-center font-poppins text-white " + (location.port === "5173" && "bg-black/50") + " select-none")
        },
        m(p, k) {
            R(p, t, k), h(t, n), h(n, r), h(r, i), h(i, o), h(o, s), h(i, u), h(i, l), h(l, f), h(r, L);
            for (let _ = 0; _ < m.length; _ += 1) m[_].m(r, null);
            h(n, v), h(n, y), h(y, w), h(y, x), h(y, N), h(N, b), B || (X = [T(w, "click", e[11]), T(N, "click", e[12])], B = !0)
        },
        p(p, k) {
            if (k & 8 && U(s, p[3]), k & 16 && U(f, p[4]), k & 6) {
                C = p[1];
                let _;
                for (_ = 0; _ < C.length; _ += 1) {
                    const Y = ie(p, C, _);
                    m[_] ? m[_].p(Y, k) : (m[_] = fe(Y), m[_].c(), m[_].m(r, null))
                }
                for (; _ < m.length; _ += 1) m[_].d(1);
                m.length = C.length
            }
            k & 2 && d !== (d = p[1][0].mode === "area" ? "Salvar" : "Enviar") && U(b, d)
        },
        d(p) {
            p && O(t), ke(m, p), B = !1, I(X)
        }
    }
}

function se(e) {
    let t, n, r, i, o, s;

    function u() {
        e[8].call(t, e[14], e[15])
    }
    return {
        c() {
            t = g("textarea"), a(t, "id", n = e[13].id), a(t, "maxlength", "200"), a(t, "placeholder", r = e[13].placeholder), a(t, "spellcheck", !1), a(t, "class", i = "w-[15.125rem] " + (e[1].length > 1 ? "h-[4.9375rem]" : "h-[8.625rem]") + " p-4 text-xs text-white/25 placeholder:text-white/25 selection:bg-transparent bg-black/80 border border-white/25 resize-none outline-none rounded no-scrollbar")
        },
        m(l, f) {
            R(l, t, f), e[7](t), A(t, e[13].value), o || (s = T(t, "input", u), o = !0)
        },
        p(l, f) {
            e = l, f & 2 && n !== (n = e[13].id) && a(t, "id", n), f & 2 && r !== (r = e[13].placeholder) && a(t, "placeholder", r), f & 2 && i !== (i = "w-[15.125rem] " + (e[1].length > 1 ? "h-[4.9375rem]" : "h-[8.625rem]") + " p-4 text-xs text-white/25 placeholder:text-white/25 selection:bg-transparent bg-black/80 border border-white/25 resize-none outline-none rounded no-scrollbar") && a(t, "class", i), f & 2 && A(t, e[13].value)
        },
        d(l) {
            l && O(t), e[7](null), o = !1, s()
        }
    }
}

function le(e) {
    let t, n, r, i, o;

    function s() {
        e[9].call(t, e[14], e[15])
    }
    return {
        c() {
            t = g("input"), a(t, "id", n = e[13].id), a(t, "maxlength", "200"), a(t, "type", "text"), a(t, "placeholder", r = e[13].placeholder), a(t, "class", "w-[15.125rem] h-[2.0625rem] p-4 text-xs text-white/75 placeholder:text-white/25 bg-black/80 border border-white/25 outline-none rounded")
        },
        m(u, l) {
            R(u, t, l), A(t, e[13].value), i || (o = T(t, "input", s), i = !0)
        },
        p(u, l) {
            e = u, l & 2 && n !== (n = e[13].id) && a(t, "id", n), l & 2 && r !== (r = e[13].placeholder) && a(t, "placeholder", r), l & 2 && t.value !== e[13].value && A(t, e[13].value)
        },
        d(u) {
            u && O(t), i = !1, o()
        }
    }
}

function ue(e) {
    let t, n, r, i, o;

    function s() {
        e[10].call(t, e[14], e[15])
    }
    return {
        c() {
            t = g("input"), a(t, "id", n = e[13].id), a(t, "maxlength", "200"), a(t, "type", "password"), a(t, "placeholder", r = e[13].placeholder), a(t, "class", "w-[15.125rem] h-[2.0625rem] p-4 text-xs text-white/75 placeholder:text-white/25 bg-black/80 border border-white/25 outline-none rounded")
        },
        m(u, l) {
            R(u, t, l), A(t, e[13].value), i || (o = T(t, "input", s), i = !0)
        },
        p(u, l) {
            e = u, l & 2 && n !== (n = e[13].id) && a(t, "id", n), l & 2 && r !== (r = e[13].placeholder) && a(t, "placeholder", r), l & 2 && t.value !== e[13].value && A(t, e[13].value)
        },
        d(u) {
            u && O(t), i = !1, o()
        }
    }
}

function fe(e) {
    let t, n, r, i, o = e[13].mode === "area" && se(e),
        s = e[13].mode === "text" && le(e),
        u = e[13].mode === "password" && ue(e);
    return {
        c() {
            t = g("section"), o && o.c(), n = E(), s && s.c(), r = E(), u && u.c(), i = E(), a(t, "class", "space-y-[0.625rem]")
        },
        m(l, f) {
            R(l, t, f), o && o.m(t, null), h(t, n), s && s.m(t, null), h(t, r), u && u.m(t, null), h(t, i)
        },
        p(l, f) {
            l[13].mode === "area" ? o ? o.p(l, f) : (o = se(l), o.c(), o.m(t, n)) : o && (o.d(1), o = null), l[13].mode === "text" ? s ? s.p(l, f) : (s = le(l), s.c(), s.m(t, r)) : s && (s.d(1), s = null), l[13].mode === "password" ? u ? u.p(l, f) : (u = ue(l), u.c(), u.m(t, i)) : u && (u.d(1), u = null)
        },
        d(l) {
            l && O(t), o && o.d(), s && s.d(), u && u.d()
        }
    }
}

function qe(e) {
    let t, n = e[0] && oe(e);
    return {
        c() {
            n && n.c(), t = Ee()
        },
        m(r, i) {
            n && n.m(r, i), R(r, t, i)
        },
        p(r, [i]) {
            r[0] ? n ? n.p(r, i) : (n = oe(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
        },
        i: S,
        o: S,
        d(r) {
            n && n.d(r), r && O(t)
        }
    }
}

function Ge(e, t, n) {
    let [r, i, o] = [location.port === "5173" || !1, [], void 0], [s, u] = ["", ""];
    Ue("Open", d => {
        n(0, r = !0), n(3, s = d.title), n(4, u = d.subtitle), n(1, i = d.rows)
    });
    Ue("Close", () => {
        n(0, r = !1); // Assuming r controls the visibility of the interface
        // You can also reset other variables or elements as needed
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            re("failure"); // Assuming re is the function to handle failure
            n(0, r = !1); // Close the menu
            n(1, i = []); // Resetting i as shown in the return statement
        }
    });

    function l(d) {
        i[0].mode === "area" && i.length === 1 && (o.setSelectionRange(0, d.length), o.select(), document.execCommand("copy"))
    }

    function f() {
        const d = [];
        i.filter(b => d.push({
            _id: b.id,
            input: b.value || null
        })), re("success", {
            data: d
        }), n(0, r = !1), n(1, i = [])
    }

    function L(d) {
        G[d ? "unshift" : "push"](() => {
            o = d, n(2, o)
        })
    }

    function v(d, b) {
        d[b].value = this.value, n(1, i)
    }

    function y(d, b) {
        d[b].value = this.value, n(1, i)
    }

    function w(d, b) {
        d[b].value = this.value, n(1, i)
    }
    return [r, i, o, s, u, l, f, L, v, y, w, () => (re("failure"), n(0, r = !1), n(1, i = [])), () => (l(i[0].value), f())]
}
class He extends Fe {
    constructor(t) {
        super(), Te(this, t, Ge, qe, we, {})
    }
}
new He({
    target: document.getElementById("app")
});
