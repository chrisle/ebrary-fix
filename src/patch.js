(function(e, t) {
    function H(e) {
        var t = e.length, n = w.type(e);
        return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }
    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function q(e, n, r, i) {
        if (!w.acceptData(e))
            return;
        var s, o, u = w.expando, a = e.nodeType, f = a ? w.cache : e, l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string")
            return;
        l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {toJSON: w.noop});
        if (typeof n == "object" || typeof n == "function")
            i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
    }
    function R(e, t, n) {
        if (!w.acceptData(e))
            return;
        var r, i, s = e.nodeType, o = s ? w.cache : e, u = s ? e[w.expando] : w.expando;
        if (!o[u])
            return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" "
                )), i = t.length;
                while (i--)
                    delete r[t[i]];
                if (n ? !z(r) : !w.isEmptyObject(r))
                    return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!z(o[u]))
                return
        }
        s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }
    function U(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + DanaMethodReplace("replace", n, I, "-$1").toLowerCase();
            r = DanaMethodGetAttribute("getAttribute", e, i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {
                }
                w.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t]))
                continue;
            if (t !== "toJSON")
                return (!1)
        }
        return (!0)
    }
    function it() {
        return (!0)
    }
    function st() {
        return (!1)
    }
    function ot() {
        try {
            return o.activeElement
        } catch (e) {
        }
    }
    function ct(e, t) {
        do
            e = e[t];
        while (e && e.nodeType !== 1);
        return e
    }
    function ht(e, t, n) {
        if (w.isFunction(t))
            return w.grep(e, function(e, r) {
                return (!!t.call(e, r, e) !== n)
            });
        if (t.nodeType)
            return w.grep(e, function(e) {
                return e === t !== n
            });
        if (typeof t == "string") {
            if (ut.test(t))
                return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function(e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }
    function pt(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                DanaMethodCreateElement("createElement", n, t.pop());
        return n
    }
    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : DanaGetFirstChild(t), "tr") ? e.getElementsByTagName("tbody")[0] || DanaMethodAppendChild("appendChild", e, DanaMethodCreateElement("createElement", e.ownerDocument, "tbody")) : e
    }
    function _t(e) {
        return e.type = (DanaMethodAttr("attr", w.find, e, "type") !== null) + "/" + e.type, e
    }
    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function Pt(e, t) {
        var n, r = 0;
        for (; (n = e[r]) != null; r++)
            w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }
    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e))
            return;
        var n, r, i, s = w._data(e), o = w._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++)
                    DanaMethodAdd("add", w.event, t, n, u[n][r])
        }
        o.data && (o.data = w.extend({}, o.data))
    }
    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1)
            return;
        n = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            i = w._data(t);
            for (r in i
            .events)
                w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
        }
        if (n === "script" && t.text !== e.text)
            _t(t).text = e.text, Dt(t);
        else if (n === "object")
            t.parentNode && (DanaPutOuterHTML(t, e.outerHTML, 0)), w.support.html5Clone && DanaGetInnerHTML(e) && !w.trim(DanaGetInnerHTML(t)) && (DanaPutInnerHTML(t, DanaGetInnerHTML(e), 0));
        else if (n === "input" && xt.test(e.type))
            t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option")
            t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea")
            t.defaultValue = e.defaultValue
    }
    function jt(e, n) {
        var r, s, o = 0, u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = DanaGetChildNodes(e) || e; (s = r[o]) != null; o++)
                !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }
    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in
            e)
                return t
        }
        return r
    }
    function nn(e, t) {
        return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            if (!t || r.style.display === "none" || r.style.display === "")
                r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }
    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2)
            n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width"
            , !0, i)));
        return o
    }
    function un(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = qt(e), o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null)
                i = e.style[t];
            if (Jt.test(i))
                return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function an(e) {
        var t = o, n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n)
                It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, DanaMethodWrite("write", t, "<!doctype html><html><body>"), DanaMethodClose("close", t), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }
    function fn(e, t) {
        var n = w(DanaMethodCreateElement("createElement", t, e)).appendTo(t.body), r = w.css(n[0], "display");
        return n.remove(), r
    }
    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t))
            w.each(t, function(t, i) {
                n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && w.type(t) === "object")
            for (i in t)
                vn(e + "[" + i + "]"
                , t[i], n, r);
        else
            r(e, t)
    }
    function _n(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))
                while (r = s[i++])
                    r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, w.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f])
                    return t.dataTypes.unshift(f), o(f), !1;
                if (s)
                    return (!(a = f))
            }), a
        }
        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }
    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes;
        while (f[0] === "*")
            f.shift(), s === t && (s = e.mimeType || DanaMethodGetResponseHeader("getResponseHeader", n, "Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r)
            o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        if (o)
            return o !== f[0] && f.unshift(o), r[o]
    }
    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*")
                    s = a;
                else if (a !== "*" && a !== s) {
                    o = f[a + " " + s] || f["* " + s];
                    if (!o)
                        for (i in f) {
                            u = i.split(" ");
                            if (u[1] === s) {
                                o = f[a + " " + u[0]] || f["* " + u[0]];
                                if (o) {
                                    o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                    break
                                }
                            }
                        }
                    if (o !== !0)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (c) {
                                return ({state: "parsererror",error: o ? c : "No conversion from " + a + " to " + s})
                            }
                }
        }
        return ({state: "success",data: t})
    }
    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }
    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }
    function Yn() {
        return DanaFuncSetTimeout(setTimeout, function() {
            Xn = t
        }), Xn = w.now()
    }
    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]), s = 0, o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e))
                return r
    }
    function er(e, t, n) {
        var r, i, s = 0, o = Qn.length, u = w.Deferred().always(function() {
            delete
            a.elem
        }), a = function() {
            if (i)
                return (!1);
            var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++)
                f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({elem: e,props: w.extend({}, t),opts: w.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Xn || Yn(),duration: n.duration,tweens: [],createTween: function(t, n) {
                var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r
            },stop: function(t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i)
                    return this;
                i = !0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }}), l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {elem: e,anim: f,queue: f.opts.queue})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts
        .always)
    }
    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n], t[n] = i)
            } else
                t[r] = i
        }
    }
    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this, l = {}, c = e.style, h = e.nodeType && nn(e), p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function() {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }))
        ;
        for (r in t) {
            i = t[r];
            if ($n.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (h ? "hide" : "show"))
                    continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function() {
                w(e).hide()
            }), f.done(function() {
                var t;
                w._removeData(e, "fxshow");
                for (t in l)
                    w.style(e, t, l[t])
            });
            for (r in l)
                o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)
            n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function sr(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t, s = DanaGetLocation(e), o = e.document, u = o.documentElement, a = e.jQuery, f = e.$, l = {}, c = [], h = "1.10.2", p = c.concat, d = c.push, v = c.slice, m = c.indexOf, g = l.toString, y = l.hasOwnProperty, b = h.trim, w = function(e, t) {
        return new w.fn.init(e, t, r)
    }, E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/
    .source, S = /\S+/g, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, C = /^[\],:{}\s]*$/, k = /(?:^|:|,)(?:\s*\[)+/g, L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, O = /^-ms-/, M = /-([\da-z])/gi, _ = function(e, t) {
        return t.toUpperCase()
    }, D = function(e) {
        if (o.addEventListener || e.type === "load" || o.readyState === "complete")
            P(), w.ready()
    }, P = function() {
        o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
    };
    w.fn = w.prototype = {jquery: h,constructor: w,init: function(e, n, r) {
            var i, s;
            if (!e)
                return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                        if (N.test(i[1]) && w.isPlainObject(n))
                            for (i in n)
                                w.isFunction(
                                this[i]) ? this[i](n[i]) : DanaMethodAttr("attr", this, i, n[i]);
                        return this
                    }
                    s = o.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2])
                            return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return (!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e))
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
        },selector: "",length: 0,toArray: function() {
            return v.call(this)
        },get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },each: function(e, t) {
            return w.each(this, e, t)
        },ready: function(e) {
            return w.ready.promise().done(e), this
        },slice: function() {
            return this.pushStack(v.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n <
            t ? [this[n]] : [])
        },map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: d,sort: [].sort,splice: [].splice}, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r)
                        continue;
                    l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
                }
        return u
    }, w.extend({expando: "jQuery" + DanaMethodReplace("replace", (h + Math.random()), /\D/g, ""),noConflict: function(t) {
            return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
        },isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? w.readyWait++ : w.ready(!0)
        },ready: function(e) {
            if (e === !0 ? --w.readyWait : w.isReady)
                return;
            if (!o.body)
                return DanaFuncSetTimeout(setTimeout, w.ready);
            w.isReady = !0
            ;
            if (e !== !0 && --w.readyWait > 0)
                return;
            n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
        },isFunction: function(e) {
            return w.type(e) === "function"
        },isArray: Array.isArray || function(e) {
            return w.type(e) === "array"
        },isWindow: function(e) {
            return e != null && e == e.window
        },isNumeric: function(e) {
            return (!isNaN(parseFloat(e)) && isFinite(e))
        },type: function(e) {
            return e == null ? String(DanaStringCheckLink(e)) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
        },isPlainObject: function(e) {
            var n;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e))
                return (!1);
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf"))
                    return (!1)
            } catch (r) {
                return (!1)
            }
            if (w.support.ownLast)
                for (n in e)
                    return y.call(e, n);
            for (n in e)
                ;
            return n === t || y.call(e, n)
        },isEmptyObject: function(e) {
            var t;
            for (t in e)
                return (!1);
            return (!0)
        },error: function(e) {
            throw new Error(e)
        },parseHTML: function(e, t, n) {
            if (!e || typeof e != "string")
                return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || o;
            var r = N.exec(e), i = !n && [];
            return r ? [
                DanaMethodCreateElement("createElement", t, r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], DanaGetChildNodes(r)))
        },parseJSON: function(t) {
            if (e.JSON && e.JSON.parse)
                return e.JSON.parse(t);
            if (t === null)
                return t;
            if (typeof t == "string") {
                t = w.trim(t);
                if (t && C.test(DanaMethodReplace("replace", DanaMethodReplace("replace", DanaMethodReplace("replace", t, L, "@"), A, "]"), k, "")))
                    return ((new Function(DanaJs("return " + t)))())
            }
            w.error("Invalid JSON: " + t)
        },parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string")
                return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return ((!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r)
        },noop: function() {
        },globalEval: function(t) {
            t && w.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },camelCase: function(e) {
            return DanaMethodReplace("replace", DanaMethodReplace("replace", e, O, "ms-"), M, _)
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function(e, t, n) {
            var r, i = 0, s = e.length, o = H(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t
                        .apply(e[i], n);
                        if (r === !1)
                            break
                    }
                else
                    for (i in e) {
                        r = t.apply(e[i], n);
                        if (r === !1)
                            break
                    }
            else if (o)
                for (; i < s; i++) {
                    r = t.call(e[i], i, e[i]);
                    if (r === !1)
                        break
                }
            else
                for (i in e) {
                    r = t.call(e[i], i, e[i]);
                    if (r === !1)
                        break
                }
            return e
        },trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return e == null ? "" : b.call(e)
        } : function(e) {
            return e == null ? "" : DanaMethodReplace("replace", (e + ""), x, "")
        },makeArray: function(e, t) {
            var n = t || [];
            return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
        },inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m)
                    return m.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return (-1)
        },merge: function(e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number")
                for (; s < r; s++)
                    e[i++] = n[s];
            else
                while (n[s] !== t)
                    e[i++] = n[s++];
            return e.length = i, e
        },grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)
                r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },map: function(e, t, n) {
            var r, i = 0, s = e.length, o = H(e), u = [];
            if (o)
                for (; i < s; i++)
                    r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e)
                    r = t(e[i]
                    , i, n), r != null && (u[u.length] = r);
            return p.apply([], u)
        },guid: 1,proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(v.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i) : t
        },access: function(e, n, r, i, s, o, u) {
            var a = 0, f = e.length, l = r == null;
            if (w.type(r) === "object") {
                s = !0;
                for (a in r)
                    w.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                    return l.call(w(e), n)
                }));
                if (n)
                    for (; a < f; a++)
                        n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },now: function() {
            return ((new Date).getTime())
        },swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t)
                o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t)
                e.style[s] = o[s];
            return i
        }}), w.ready.promise = function(t) {
        if (!n) {
            n = w.Deferred();
            if (o.readyState === "complete")
                DanaFuncSetTimeout(setTimeout, w.ready);
            else if (o.addEventListener)
                o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = e.frameElement == null && o.documentElement
                } catch (i) {
                }
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return DanaFuncSetTimeout(setTimeout, s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }), r = w(o), function(e, t) {
        function ot(e, t, n, i) {
            var s, o, u, a, f, l, p, m, g, w;
            (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
            if (!e || typeof e != "string")
                return n;
            if ((a = t.nodeType) !== 1 && a !== 9)
                return ([]);
            if (d && !i) {
                if (s = Z.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode)
                                return n;
                            if (o.id === u)
                                return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u)
                            return n.push(o), n
                    } else {
                        if (s[2])
                            return H.apply(n, t.getElementsByTagName(e)), n;
                        if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName)
                            return H.apply(n, t.getElementsByClassName(u)), n
                    }
                if (r.
                qsa && (!v || !v.test(e))) {
                    m = p = b, g = t, w = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = mt(e), (p = DanaMethodGetAttribute("getAttribute", t, "id")) ? m = DanaMethodReplace("replace", p, nt, "\\$&") : DanaMethodSetAttribute("setAttribute", t, "id", m), m = "[id='" + m + "'] ", f = l.length;
                        while (f--)
                            l[f] = m + gt(l[f]);
                        g = $.test(e) && t.parentNode || t, w = l.join(",")
                    }
                    if (w)
                        try {
                            return H.apply(n, g.querySelectorAll(w)), n
                        } catch (S) {
                        }finally {
                            p || t.removeAttribute("id")
                        }
                }
            }
            return Nt(DanaMethodReplace("replace", e, W, "$1"), t, n, i)
        }
        function ut() {
            function t(n, r) {
                return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
            }
            var e = [];
            return t
        }
        function at(e) {
            return e[b] = !0, e
        }
        function ft(e) {
            var t = DanaMethodCreateElement("createElement", h, "div");
            try {
                return (!!e(t))
            } catch (n) {
                return (!1)
            }finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function lt(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)
                s.attrHandle[n[r]] = t
        }
        function ct(e, t) {
            var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return (-1);
            return e ? 1 : -1
        }
        function ht(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase(
                );
                return n === "input" && t.type === e
            }
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ((n === "input" || n === "button") && t.type === e)
            }
        }
        function dt(e) {
            return at(function(t) {
                return t = +t, at(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function vt() {
        }
        function mt(e, t) {
            var n, r, i, o, u, a, f, l = N[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e, a = [], f = s.preFilter;
            while (u) {
                if (!n || (r = X.exec(u)))
                    r && (u = u.slice(r[0].length) || u), a.push(i = []);
                n = !1;
                if (r = V.exec(u))
                    n = r.shift(), i.push({value: n,type: DanaMethodReplace("replace", r[0], W, " ")}), u = u.slice(n.length);
                for (o in DanaGetFilter(s))
                    (r = G[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({value: n,type: o,matches: r}), u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }
        function gt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++)
                r += e[t].value;
            return r
        }
        function yt(e, t, n) {
            var r = t.dir, s = n && r === "parentNode", o = x++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (t.nodeType === 1 || s)
                        return e(t, n, i)
            } : function(t, n, u) {
                var a, f, l
                , c = S + " " + o;
                if (u) {
                    while (t = t[r])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u))
                                return (!0)
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || s) {
                            l = t[b] || (t[b] = {});
                            if ((f = l[r]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === i)
                                    return a === !0
                            } else {
                                f = l[r] = [c], f[1] = e(t, n, u) || i;
                                if (f[1] === !0)
                                    return (!0)
                            }
                        }
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return (!1);
                return (!0)
            } : e[0]
        }
        function wt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s), f && t.push(u);
            return o
        }
        function Et(e, t, n, r, i, s) {
            return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || Tt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? wt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l])
                            g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)
                                (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)
                            (c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else
                    g = wt(g === o ? g.splice(d, g.length
                    ) : g), i ? i(null, o, g, a) : H.apply(o, g)
            })
        }
        function St(e) {
            var t, n, r, i = e.length, o = s.relative[e[0].type], u = o || s.relative[" "], a = o ? 1 : 0, l = yt(function(e) {
                return e === t
            }, u, !0), c = yt(function(e) {
                return j.call(t, e) > -1
            }, u, !0), h = [function(e, n, r) {
                    return (!o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r)))
                }];
            for (; a < i; a++)
                if (n = s.relative[e[a].type])
                    h = [yt(bt(h), n)];
                else {
                    n = DanaGetFilter(s)[e[a].type].apply(null, e[a].matches);
                    if (n[b]) {
                        r = ++a;
                        for (; r < i; r++)
                            if (s.relative[e[r].type])
                                break;
                        return Et(a > 1 && bt(h), a > 1 && DanaMethodReplace("replace", gt(e.slice(0, a - 1).concat({value: e[a - 2].type === " " ? "*" : ""})), W, "$1"), n, a < r && St(e.slice(a, r)), r < i && St(e = e.slice(r)), r < i && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }
        function xt(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, u = function(u, a, l, c, p) {
                var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, x = f, T = u || o && s.find.TAG("*", p && a.parentNode || a), N = S += x == null ? 1 : Math.random() || .1;
                E && (f = a !== h && a, i = n);
                for (; (d = T[b]) != null; b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++])
                            if (m(d, a, l)) {
                                c.push(d);
                                break
                            }
                        E && (S = N, i = ++n)
                    }
                    r && ((d = !m && d) && y--, u && w.push(d))
                }
                y += b;
                if (r && b !== y) {
                    v = 0
                    ;
                    while (m = t[v++])
                        m(w, g, a, l);
                    if (u) {
                        if (y > 0)
                            while (b--)
                                !w[b] && !g[b] && (g[b] = D.call(c));
                        g = wt(g)
                    }
                    H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                }
                return E && (S = N, f = x), w
            };
            return r ? at(u) : u
        }
        function Tt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++)
                ot(e, t[r], n);
            return n
        }
        function Nt(e, t, n, i) {
            var o, u, f, l, c, h = mt(e);
            if (!i && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                    t = (s.find.ID(DanaMethodReplace("replace", f.matches[0], rt, it), t) || [])[0];
                    if (!t)
                        return n;
                    e = e.slice(u.shift().value.length)
                }
                o = G.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    f = u[o];
                    if (s.relative[l = f.type])
                        break;
                    if (c = s.find[l])
                        if (i = c(DanaMethodReplace("replace", f.matches[0], rt, it), $.test(u[0].type) && t.parentNode || t)) {
                            u.splice(o, 1), e = i.length && gt(u);
                            if (!e)
                                return H.apply(n, i), n;
                            break
                        }
                }
            }
            return a(e, h)(i, t, !d, n, $.test(e)), n
        }
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date), E = e.document, S = 0, x = 0, T = ut(), N = ut(), C = ut(), k = !1, L = function(e, t) {
            return e === t ? (k = !0, 0) : 0
        }, A = typeof t, O = 1 << 31, M = {}.hasOwnProperty
        , _ = [], D = _.pop, P = _.push, H = _.push, B = _.slice, j = _.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return (-1)
        }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", R = DanaMethodReplace("replace", q, "w", "w#"), U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]", z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + DanaMethodReplace("replace", U, 3, 8) + ")*)|.*)\\)|)", W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), X = new RegExp("^" + I + "*," + I + "*"), V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), $ = new RegExp(I + "*[+~]"), J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"), K = new RegExp(z), Q = new RegExp("^" + R + "$"), G = {ID: new RegExp("^#(" + q + ")"),CLASS: new RegExp("^\\.(" + q + ")"),TAG: new RegExp("^(" + DanaMethodReplace("replace", q, "w", "w*") + ")"),ATTR: new RegExp("^" + U),PSEUDO: new RegExp("^" + z),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),bool: new RegExp("^(?:" + F + ")$", "i"),needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")}, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        };
        try {
            H.apply(_ = B.call(DanaGetChildNodes(E)), DanaGetChildNodes(E)), _[DanaGetChildNodes(E).length].nodeType
        } catch (st) {
            H = {apply: _.length ? function(e, t) {
                    P.apply(e, B.call(t))
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }}
        }
        u = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, r = ot.support = {}, c = ot.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : E, n = t.defaultView;
            if (t === h || t.nodeType !== 9 || !t.
            documentElement)
                return h;
            h = t, p = t.documentElement, d = !u(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                c()
            }), r.attributes = ft(function(e) {
                return e.className = "i", !DanaMethodGetAttribute("getAttribute", e, "className")
            }), r.getElementsByTagName = ft(function(e) {
                return DanaMethodAppendChild("appendChild", e, t.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ft(function(e) {
                return DanaPutInnerHTML(e, "<div class='a'></div><div class='a i'></div>", 0), DanaGetFirstChild(e).className = "i", e.getElementsByClassName("i").length === 2
            }), r.getById = ft(function(e) {
                return DanaMethodAppendChild("appendChild", p, e).id = b, !t.getElementsByName || !t.getElementsByName(b).length
            }), r.getById ? (s.find.ID = function(e, t) {
                if (typeof t.getElementById !== A && d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, DanaGetFilter(s).ID = function(e) {
                var t = DanaMethodReplace("replace", e, rt, it);
                return function(e) {
                    return DanaMethodGetAttribute("getAttribute", e, "id") === t
                }
            }) : (delete s.find.ID, DanaGetFilter(s).ID = function(e) {
                var t = DanaMethodReplace("replace", e, rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n &&
                    n.value === t
                }
            }), s.find.TAG = r.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== A)
                    return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])
                        n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, s.find.CLASS = r.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== A && d)
                    return t.getElementsByClassName(e)
            }, m = [], v = [];
            if (r.qsa = Y.test(t.querySelectorAll))
                ft(function(e) {
                    DanaPutInnerHTML(e, "<select><option selected=''></option></select>", 0), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                }), ft(function(e) {
                    var n = DanaMethodCreateElement("createElement", t, "input");
                    DanaMethodSetAttribute("setAttribute", n, "type", "hidden"), DanaMethodSetAttribute("setAttribute", DanaMethodAppendChild("appendChild", e, n), "t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                });
            return ((r.matchesSelector = Y.test(g = p.webkitMatchesSelector ||
            p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function(e) {
                r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return (!0);
                return (!1)
            }, L = p.compareDocumentPosition ? function(e, n) {
                if (e === n)
                    return k = !0, 0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                if (i)
                    return i & 1 || !r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e) ? -1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function(e, n) {
                var r, i = 0, s = e.parentNode, o = n.parentNode, u = [e], a = [n];
                if (e === n)
                    return k = !0, 0;
                if (!s || !o)
                    return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1
                    : l ? j.call(l, e) - j.call(l, n) : 0;
                if (s === o)
                    return ct(e, n);
                r = e;
                while (r = r.parentNode)
                    u.unshift(r);
                r = n;
                while (r = r.parentNode)
                    a.unshift(r);
                while (u[i] === a[i])
                    i++;
                return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
            }, t)
        }, ot.matches = function(e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== h && c(e), t = DanaMethodReplace("replace", t, J, "='$1']");
            if (r.matchesSelector && d && (!m || !m.test(t)) && (!v || !v.test(t)))
                try {
                    var n = g.call(e, t);
                    if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11)
                        return n
                } catch (i) {
                }
            return ot(t, h, null, [e]).length > 0
        }, ot.contains = function(e, t) {
            return ((e.ownerDocument || e) !== h && c(e), y(e, t))
        }, ot.attr = function(e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()], o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t ? r.attributes || !d ? DanaMethodGetAttribute("getAttribute", e, n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
        }, ot.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function(e) {
            var t, n = [], i = 0, s = 0;
            k = !r.detectDuplicates
            , l = !r.sortStable && e.slice(0), e.sort(L);
            if (k) {
                while (t = e[s++])
                    t === e[s] && (i = n.push(s));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }, o = ot.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++)
                    n += o(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string")
                    return e.textContent;
                for (e = DanaGetFirstChild(e); e; e = e.nextSibling)
                    n += o(e)
            } else if (i === 3 || i === 4)
                return e.nodeValue;
            return n
        }, s = ot.selectors = {cacheLength: 50,createPseudo: at,match: G,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    return e[1] = DanaMethodReplace("replace", e[1], rt, it), e[3] = DanaMethodReplace("replace", (e[4] || e[5] || ""), rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                },PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return G.CHILD
                    .test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }},filter: {TAG: function(e) {
                    var t = DanaMethodReplace("replace", e, rt, it).toLowerCase();
                    return e === "*" ? function() {
                        return (!0)
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && DanaMethodGetAttribute("getAttribute", e, "class") || "")
                    })
                },ATTR: function(e, t, n) {
                    return function(r) {
                        var i = DanaMethodAttr("attr", ot, r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return (!!e.parentNode)
                    } : function(
                    t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                            return (!1);
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return (!0)
                            }
                            d = [o ? DanaGetFirstChild(m) : m.lastChild];
                            if (o && y) {
                                l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && DanaGetChildNodes(m)[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S)
                                h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                        if (c === t)
                                            break
                                    }
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },PSEUDO: function(e, t) {
                    var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--)
                            i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function(
                    e) {
                        return r(e, 0, n)
                    }) : r
                }},pseudos: {not: at(function(e) {
                    var t = [], n = [], r = a(DanaMethodReplace("replace", e, W, "$1"));
                    return r[b] ? at(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0
                    }
                }),contains: at(function(e) {
                    return function(t) {
                        return ((t.textContent || t.innerText || o(t)).indexOf(e) > -1)
                    }
                }),lang: at(function(e) {
                    return Q.test(e || "") || ot.error("unsupported lang: " + e), e = DanaMethodReplace("replace", e, rt, it).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = d ? t.lang : DanaMethodGetAttribute("getAttribute", t, "xml:lang") || DanaMethodGetAttribute("getAttribute", t, "lang"))
                                return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return (!1)
                    }
                }),target: function(t) {
                    var n = DanaGetLocation(e) && DanaGetHash(e.location);
                    return n && n.slice(1) === t.id
                },root: function(e) {
                    return e === p
                },focus: function(e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || DanaGetHref(e) || ~e.tabIndex)
                },enabled: function(e) {
                    return e.disabled === !1
                },disabled: function(e) {
                    return e.disabled === !0
                },checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },empty: function(e) {
                    for (e = DanaGetFirstChild(e); e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4)
                            return (!1);
                    return (!0)
                },parent: function(e) {
                    return (!s.pseudos.empty(e))
                },header: function(e) {
                    return tt.test(e.nodeName)
                },input: function(e) {
                    return et.test(e.nodeName)
                },button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = DanaMethodGetAttribute("getAttribute", e, "type")) == null || t.toLowerCase() === e.type)
                },first: dt(function() {
                    return ([0])
                }),last: dt(function(e, t) {
                    return ([t - 1])
                }),eq: dt(function(e, t, n) {
                    return ([n < 0 ? n + t : n])
                }),even: dt(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),odd: dt(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),lt: dt(function(e, t, n) {
                    var r = n < 0 ?
                    n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),gt: dt(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t; )
                        e.push(r);
                    return e
                })}}, s.pseudos.nth = s.pseudos.eq;
        for (n in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            s.pseudos[n] = ht(n);
        for (n in {submit: !0,reset: !0})
            s.pseudos[n] = pt(n);
        vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function(e, t) {
            var n, r = [], i = [], s = C[e + " "];
            if (!s) {
                t || (t = mt(e)), n = t.length;
                while (n--)
                    s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r))
            }
            return s
        }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function(e) {
            return e.compareDocumentPosition(DanaMethodCreateElement("createElement", h, "div")) & 1
        }), ft(function(e) {
            return DanaPutInnerHTML(e, "<a href='#'></a>", 0), DanaMethodGetAttribute("getAttribute", DanaGetFirstChild(e), "href") === "#"
        }) || lt("type|href|height|width", function(e, t, n) {
            if (!n)
                return DanaMethodGetAttribute("getAttribute", e, t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!r.attributes || !ft(function(e) {
            return DanaPutInnerHTML(e, "<input/>", 0), DanaMethodSetAttribute("setAttribute", DanaGetFirstChild(e), "value", ""), DanaMethodGetAttribute("getAttribute", DanaGetFirstChild(e), "value") === ""
        })) && lt("value", function(
        e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input")
                return e.defaultValue
        }), ft(function(e) {
            return DanaMethodGetAttribute("getAttribute", e, "disabled") == null
        }) || lt(F, function(e, t, n) {
            var r;
            if (!n)
                return ((r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null)
        }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
    }(e);
    var B = {};
    w.Callbacks = function(e) {
        e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
            for (; a && o < s; o++)
                if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
        }, c = {add: function() {
                if (a) {
                    var t = a.length;
                    (function i(t) {
                        w.each(t, function(t, n) {
                            var r = w.type(n);
                            r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                        })
                    })(arguments), n ? s = a.length : r && (u = t, l(r))
                }
                return this
            },remove: function() {
                return a && w.each(arguments, function(e, t) {
                    var r;
                    while ((r =
                    w.inArray(t, a, r)) > -1)
                        a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                }), this
            },has: function(e) {
                return e ? w.inArray(e, a) > -1 : !!a && !!a.length
            },empty: function() {
                return a = [], s = 0, this
            },disable: function() {
                return a = f = r = t, this
            },disabled: function() {
                return (!a)
            },lock: function() {
                return f = t, r || c.disable(), this
            },locked: function() {
                return (!f)
            },fireWith: function(e, t) {
                return a && (!i || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
            },fire: function() {
                return c.fireWith(this, arguments), this
            },fired: function() {
                return (!!i)
            }};
        return c
    }, w.extend({Deferred: function(e) {
            var t = [["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n
                },always: function() {
                    return i.done(arguments).fail(arguments), this
                },then: function() {
                    var e = arguments;
                    return w.Deferred(function(n) {
                        w.each(t, function(t, s) {
                            var o = s[0], u = w.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = u && u.apply(this, arguments);
                                e && w.isFunction
                                (e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },promise: function(e) {
                    return e != null ? w.extend(e, r) : r
                }}, i = {};
            return r.pipe = r.then, w.each(t, function(e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && DanaMethodAdd("add", o, function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },when: function(e) {
            var t = 0, n = v.call(arguments), r = n.length, i = r !== 1 || e && w.isFunction(e.promise) ? r : 0, s = i === 1 ? e : w.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++)
                    n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }}), w.support = function(t) {
        var n, r, s, u, a, f, l, c, h, p = DanaMethodCreateElement("createElement", o
        , "div");
        DanaMethodSetAttribute("setAttribute", p, "className", "t"), DanaPutInnerHTML(p, "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 0), n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length)
            return t;
        u = DanaMethodCreateElement("createElement", o, "select"), f = DanaMethodAppendChild("appendChild", u, DanaMethodCreateElement("createElement", o, "option")), s = p.getElementsByTagName("input")[0], DanaPutCssText(r.style, "top:1px;float:left;opacity:.5", 0), t.getSetAttribute = p.className !== "t", t.leadingWhitespace = DanaGetFirstChild(p).nodeType === 3, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(DanaMethodGetAttribute("getAttribute", r, "style")), t.hrefNormalized = DanaMethodGetAttribute("getAttribute", r, "href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!DanaMethodCreateElement("createElement", o, "form").enctype, t.html5Clone = DanaMethodCreateElement("createElement", o, "nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0
        , t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = DanaMethodCreateElement("createElement", o, "input"), DanaMethodSetAttribute("setAttribute", s, "value", ""), t.input = DanaMethodGetAttribute("getAttribute", s, "value") === "", s.value = "t", DanaMethodSetAttribute("setAttribute", s, "type", "radio"), t.radioValue = s.value === "t", DanaMethodSetAttribute("setAttribute", s, "checked", "t"), DanaMethodSetAttribute("setAttribute", s, "name", "t"), a = o.createDocumentFragment(), DanaMethodAppendChild("appendChild", a, s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {submit: !0,change: !0,focusin: !0})
            DanaMethodSetAttribute("setAttribute", p, l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
        for (h in w(t))
            break;
        return t.ownLast = h !== "0", w(function() {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;"
            , a = o.getElementsByTagName("body")[0];
            if (!a)
                return;
            n = DanaMethodCreateElement("createElement", o, "div"), DanaPutCssText(n.style, "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 0), DanaMethodAppendChild("appendChild", DanaMethodAppendChild("appendChild", a, n), p), DanaPutInnerHTML(p, "<table><tr><td></td><td>t</td></tr></table>", 0), s = p.getElementsByTagName("td"), DanaPutCssText(s[0].style, "padding:0;margin:0;border:0;display:none", 0), c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, DanaPutInnerHTML(p, "", 0), DanaPutCssText(p.style, "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 0), w.swap(a, a.style.zoom != null ? {zoom: 1} : {}, function() {
                t.boxSizing = p.offsetWidth === 4
            }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {width: "4px"}).width === "4px", r = DanaMethodAppendChild("appendChild", p, DanaMethodCreateElement("createElement", o, "div")), DanaPutCssText(r.style, DanaPutCssText(p.style, u, 0), 0), r.style.marginRight =
            r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (DanaPutInnerHTML(p, "", 0), DanaPutCssText(p.style, u + "width:1px;padding:1px;display:inline;zoom:1", 0), t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", DanaPutInnerHTML(p, "<div></div>", 0), DanaGetFirstChild(p).style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, I = /([A-Z])/g;
    w.extend({cache: {},noData: {applet: !0,embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },data: function(e, t, n) {
            return q(e, t, n)
        },removeData: function(e, t) {
            return R(e, t)
        },_data: function(e, t, n) {
            return q(e, t, n, !0)
        },_removeData: function(e, t) {
            return R(e, t, !0)
        },acceptData: function(e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9)
                return (!1);
            var t = e.nodeName && w.noData[e.nodeName.
            toLowerCase()];
            return (!t || t !== !0 && DanaMethodGetAttribute("getAttribute", e, "classid") === t)
        }}), w.fn.extend({data: function(e, n) {
            var r, i, s = null, o = 0, u = this[0];
            if (e === t) {
                if (this.length) {
                    s = w.data(u);
                    if (u.nodeType === 1 && !w._data(u, "parsedAttrs")) {
                        r = u.attributes;
                        for (; o < r.length; o++)
                            i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                        w._data(u, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function() {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        },removeData: function(e) {
            return this.each(function() {
                w.removeData(this, e)
            })
        }}), w.extend({queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), s = w._queueHooks(e, t), o = function() {
                w.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },_queueHooks
        : function(e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {empty: DanaMethodAdd("add", w.Callbacks("once memory"), function() {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })})
        }}), w.fn.extend({queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
            })
        },dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },delay: function(e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = DanaFuncSetTimeout(setTimeout, t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(e, n) {
            var r, i = 1, s = w.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--)
                r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, DanaMethodAdd("add", r.empty, a));
            return a(), s.promise(n)
        }});
    var W, X, V = /[\t\r\n\f]/g, $ = /\r/g, J = /^(?:input|select|textarea|button|object)$/i
    , K = /^(?:a|area)$/i, Q = /^(?:checked|selected)$/i, G = w.support.getSetAttribute, Y = w.support.input;
    w.fn.extend({attr: function(e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        },prop: function(e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },removeProp: function(e) {
            return e = w.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        },addClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
            if (w.isFunction(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, this.className))
                });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? DanaMethodReplace("replace", (" " + n.className + " "), V, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
                }
            }
            return this
        },removeClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
            if (w.isFunction(e))
                return this.each(function(t) {
                    w(this).removeClass
                    (e.call(this, t, this.className))
                });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? DanaMethodReplace("replace", (" " + n.className + " "), V, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = DanaMethodReplace("replace", r, " " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
                }
            }
            return this
        },toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0, s = w(this), o = e.match(S) || [];
                    while (t = o[r++])
                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else if (n === i || n === "boolean")
                    this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
            })
        },hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && DanaMethodReplace("replace", (" " + this[n].className + " "), V, " ").indexOf(t) >= 0)
                    return (!0);
            return (!1)
        },val: function(e) {
            var n, r, i, s = this
            [0];
            if (!arguments.length) {
                if (s)
                    return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? DanaMethodReplace("replace", n, $, "") : n == null ? "" : n);
                return
            }
            return i = w.isFunction(e), this.each(function(n) {
                var s;
                if (this.nodeType !== 1)
                    return;
                i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t)
                    this.value = s
            })
        }}), w.extend({valHooks: {option: {get: function(e) {
                    var t = DanaMethodAttr("attr", w.find, e, "value");
                    return t != null ? t : e.text
                }},select: {get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : DanaMethodGetAttribute("getAttribute", n, "disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            t = w(n).val();
                            if (s)
                                return t;
                            o.push(
                            t)
                        }
                    }
                    return o
                },set: function(e, t) {
                    var n, r, i = e.options, s = w.makeArray(t), o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = w.inArray(w(r).val(), s) >= 0)
                            n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }}},attr: function(e, n, r) {
            var s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)
                return;
            if (typeof e.getAttribute === i)
                return w.prop(e, n, r);
            if (u !== 1 || !w.isXMLDoc(e))
                n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
            if (r === t)
                return s && "get" in s && (o = s.get(e, n)) !== null ? o : (o = DanaMethodAttr("attr", w.find, e, n), o == null ? t : o);
            if (r !== null)
                return s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (DanaMethodSetAttribute("setAttribute", e, n, r + ""), r);
            w.removeAttr(e, n)
        },removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(S);
            if (s && e.nodeType === 1)
                while (n = s[i++])
                    r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : DanaMethodAttr("attr", w, e, n, ""), e.removeAttribute(G ? n : r)
        },attrHooks: {type: {set: function(e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var n = e.value;
                        return DanaMethodSetAttribute("setAttribute", e, "type", t), n && (e.value = n), t
                    }
                }}},propFix: {"for"
            : "htmlFor","class": "className"},prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)
                return;
            return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },propHooks: {tabIndex: {get: function(e) {
                    var t = DanaMethodAttr("attr", w.find, e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && DanaGetHref(e) ? 0 : -1
                }}}}), X = {set: function(e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? DanaMethodSetAttribute("setAttribute", e, !G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }}, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function(e, n, i) {
            var s = w.expr.attrHandle[n], o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function(e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Y || !G)
        w.attrHooks.value = {set: function(e, t, n) {
                if (!w.nodeName(e, "input"
                ))
                    return W && W.set(e, t, n);
                e.defaultValue = t
            }};
    G || (W = {set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === DanaMethodGetAttribute("getAttribute", e, r) ? n : t
        }}, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
    }, w.valHooks.button = {get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },set: W.set}, w.attrHooks.contenteditable = {set: function(e, t, n) {
            W.set(e, t === "" ? !1 : t, n)
        }}, w.each(["width", "height"], function(e, t) {
        w.attrHooks[t] = {set: function(e, n) {
                if (n === "")
                    return DanaMethodSetAttribute("setAttribute", e, t, "auto"), n
            }}
    })), w.support.hrefNormalized || w.each(["href", "src"], function(e, t) {
        w.propHooks[t] = {get: function(e) {
                return DanaMethodGetAttribute("getAttribute", e, t, 4)
            }}
    }), w.support.style || (w.attrHooks.style = {get: function(e) {
            return DanaGetCssText(e.style) || t
        },set: function(e, t) {
            return DanaPutCssText(e.style, t + "", 0)
        }}), w.support.optSelected || (w.propHooks.selected = {get: function(e) {
            var t =
            e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {set: function(e, t) {
                if (w.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) >= 0
            }}, w.support.checkOn || (w.valHooks[this].get = function(e) {
            return DanaMethodGetAttribute("getAttribute", e, "value") === null ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {global: {},add: function(e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (!y)
                return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                return typeof w === i || !!e && w.event.triggered === e.type ? t : w.event
                .dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                if (!v)
                    continue;
                c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({type: v,origType: g,data: s,handler: r,guid: r.guid,selector: o,needsContext: o && w.expr.match.needsContext.test(o),namespace: m.join(".")}, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1)
                        e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
            }
            e = null
        },remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (!m || !(l = m.events))
                return;
            t = (t || "").match(S) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l)
                        w.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = w.event.special[p] || {}
                , p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--)
                    o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
            }
            w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
        },trigger: function(n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o], v = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || o;
            if (i.nodeType === 3 || i.nodeType === 8)
                return;
            if (nt.test(v + w.event.triggered))
                return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result =
            t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
            if (!s && c.trigger && c.trigger.apply(i, r) === !1)
                return;
            if (!s && !c.noBubble && !w.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode)
                    d.push(f), h = f;
                h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped())
                n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                h = i[a], h && (i[a] = null), w.event.triggered = v;
                try {
                    i[v]()
                } catch (g) {
                }
                w.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },dispatch: function(e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [], a = v.call(arguments), f = (w._data(this, "events") || {})[e.type] || [], l = w.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch
            .call(this, e) === !1)
                return;
            u = w.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace))
                        e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },handlers: function(e, n) {
            var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))
                for (; f != this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                        s = [];
                        for (o = 0; o < a; o++)
                            i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({elem: f,handlers: s})
                    }
            return a < n.length && u.push({elem: this,handlers: n.slice(a)}), u
        },fix: function(e) {
            if (e[w.expando])
                return e;
            var t, n, r, i = e.type, s = e, u = this
            .fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--)
                n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, DanaGetFilter(u) ? u.filter(e, s) : e
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
                var r, i, s, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r
                .clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }},special: {load: {noBubble: !0},focus: {trigger: function() {
                    if (this !== ot() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                },delegateType: "focusin"},blur: {trigger: function() {
                    if (this === ot() && this.blur)
                        return this.blur(), !1
                },delegateType: "focusout"},click: {trigger: function() {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click)
                        return this.click(), !1
                },_default: function(e) {
                    return w.nodeName(e.target, "a")
                }},beforeunload: {postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }}},simulate: function(e, t, n, r) {
            var i = w.extend(new w.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }}, w.removeEvent = o.removeEventListener ? function(e, t, n) {
        e.removeEventListener &&
        e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
    }, w.Event.prototype = {isDefaultPrevented: st,isPropagationStopped: st,isImmediatePropagationStopped: st,preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e)
                return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e)
                return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }}, w.each({mouseenter: "mouseover",mouseleave: "mouseout"
    }, function(e, t) {
        w.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !w.contains(r, i))
                    e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }}
    }), w.support.submitBubbles || (w.event.special.submit = {setup: function() {
            if (w.nodeName(this, "form"))
                return (!1);
            DanaMethodAdd("add", w.event, this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (DanaMethodAdd("add", w.event, r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            })
        },postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        },teardown: function() {
            if (w.nodeName(this, "form"))
                return (!1);
            w.event.remove(this, "._submit")
        }}), w.support.changeBubbles || (w.event.special.change = {setup: function() {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    DanaMethodAdd("add", w.event, this, "propertychange._change"
                    , function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), DanaMethodAdd("add", w.event, this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                    });
                return (!1)
            }
            DanaMethodAdd("add", w.event, this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (DanaMethodAdd("add", w.event, t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            })
        },handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return e.handleObj.handler.apply(this, arguments)
        },teardown: function() {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }}), w.support.focusinBubbles || w.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = 0, r = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e), !0)
        };
        w.event.special[t] = {setup: function() {
                n++ === 0 && o.addEventListener(e, r, !0)
            },teardown
            : function() {
                --n === 0 && o.removeEventListener(e, r, !0)
            }}
    }), w.fn.extend({on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e)
                    this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1)
                i = st;
            else if (!i)
                return this;
            return s === 1 && (u = i, i = function(e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function() {
                DanaMethodAdd("add", w.event, this, e, i, r, n)
            })
        },one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e)
                    this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")
                r = n, n = t;
            return r === !1 && (r = st), this.each(function() {
                w.event.remove(this, e, r, n)
            })
        },trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },triggerHandler: function(e, t)
        {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }});
    var ut = /^.[^:#\[\.,]*$/, at = /^(?:parents|prev(?:Until|All))/, ft = w.expr.match.needsContext, lt = {children: !0,contents: !0,next: !0,prev: !0};
    w.fn.extend({find: function(e) {
            var t, n = [], r = this, i = r.length;
            if (typeof e != "string")
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (w.contains(r[t], this))
                            return (!0)
                }));
            for (t = 0; t < i; t++)
                w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },has: function(e) {
            var t, n = w(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(this, n[t]))
                        return (!0)
            })
        },not: function(e) {
            return this.pushStack(ht(this, e || [], !0))
        },filter: function(e) {
            return this.pushStack(ht(this, e || [], !1))
        },is: function(e) {
            return (!!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length)
        },closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = ft.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 &&
                    (o ? o.index(n) > -1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                        n = s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        },index: function(e) {
            return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(e, t) {
            var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e), r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },addBack: function(e) {
            return DanaMethodAdd("add", this, e == null ? this.prevObject : this.prevObject.filter(e))
        }}), w.each({parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },parents: function(e) {
            return w.dir(e, "parentNode")
        },parentsUntil: function(e, t, n) {
            return w.dir(e, "parentNode", n)
        },next: function(e) {
            return ct(e, "nextSibling")
        },prev: function(e) {
            return ct(e, "previousSibling")
        },nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },nextUntil: function(e, t, n) {
            return w.dir(e, "nextSibling", n)
        },prevUntil: function(e, t, n
        ) {
            return w.dir(e, "previousSibling", n)
        },siblings: function(e) {
            return w.sibling(DanaGetFirstChild((e.parentNode || {})), e)
        },children: function(e) {
            return w.sibling(DanaGetFirstChild(e))
        },contents: function(e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], DanaGetChildNodes(e))
        }}, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                return e.nodeType === 1
            }))
        },dir: function(e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r)))
                s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }});
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
    , vt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i, Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/, kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, At = pt(o), Ot = DanaMethodAppendChild("appendChild", At, DanaMethodCreateElement("createElement", o, "div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({text: function(e) {
            return w.access(this, function(e)
            {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    DanaMethodAppendChild("appendChild", t, e)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.insertBefore(e, DanaGetFirstChild(t))
                }
            })
        },before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },remove: function(e, t) {
            var n, r = e ? w.filter(e, this) : this, i = 0;
            for (; (n = r[i]) != null; i++)
                !t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 &&
                w.cleanData(jt(e, !1));
                while (DanaGetFirstChild(e))
                    e.removeChild(DanaGetFirstChild(e));
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },html: function(e) {
            return w.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)
                    return n.nodeType === 1 ? DanaMethodReplace("replace", DanaGetInnerHTML(n), vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (w.support.htmlSerialize || !mt.test(e)) && (w.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = DanaMethodReplace("replace", e, yt, "<$1></$2>");
                    try {
                        for (; r < i; r++)
                            n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), DanaPutInnerHTML(n, e, 0));
                        n = 0
                    } catch (s) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },replaceWith: function() {
            var e = w.map(this, function(e) {
                return ([e.nextSibling, e.parentNode])
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },detach: function(e) {
            return this.remove(e, !0)
        },domManip: function(e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0, l = this.length, c = this, h = l - 1, d = e[0], v = w.isFunction(d);
            if (v || !(l <= 1 || typeof d != "string" || w.support.checkClone || !Tt.test(d)))
                return this.each(function(r) {
                    var i = c.eq(r);
                    v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
                });
            if (l) {
                a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = DanaGetFirstChild(a), DanaGetChildNodes(a).length === 1 && (a = r);
                if (r) {
                    o = w.map(jt(a, "script"), _t), s = o.length;
                    for (; f < l; f++)
                        i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                        for (f = 0; f < s; f++)
                            i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (DanaGetSrc(i) ? w._evalUrl(DanaGetSrc(i)) : w.globalEval(DanaMethodReplace("replace", (i.text || i.textContent || DanaGetInnerHTML(i) || ""), kt, "")))
                    }
                    a = r = null
                }
            }
            return this
        }}), w.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        w.fn[e] = function(e) {
            var n, r = 0, i = [], s = w(e), o = s.
            length - 1;
            for (; r <= o; r++)
                n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({clone: function(e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (DanaPutInnerHTML(Ot, e.outerHTML, 0), Ot.removeChild(s = DanaGetFirstChild(Ot)));
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0; (i = u[o]) != null; ++o)
                    r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0; (i = u[o]) != null; o++)
                        Ht(i, r[o])
                } else
                    Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (w.type(s) === "object")
                        w.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s))
                        p.push(t.createTextNode(s));
                    else {
                        u = u || DanaMethodAppendChild("appendChild", h, DanaMethodCreateElement("createElement", t, "div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, DanaPutInnerHTML(u, l[1] + DanaMethodReplace("replace", s
                        , yt, "<$1></$2>") + l[2], 0), i = l[0];
                        while (i--)
                            u = u.lastChild;
                        !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                        if (!w.support.tbody) {
                            s = a === "table" && !wt.test(s) ? DanaGetFirstChild(u) : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && DanaGetChildNodes(s).length;
                            while (i--)
                                w.nodeName(f = DanaGetChildNodes(s)[i], "tbody") && !DanaGetChildNodes(f).length && s.removeChild(f)
                        }
                        w.merge(p, DanaGetChildNodes(u)), u.textContent = "";
                        while (DanaGetFirstChild(u))
                            u.removeChild(DanaGetFirstChild(u));
                        u = h.lastChild
                    }
            }
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && w.inArray(s, r) !== -1)
                    continue;
                o = w.contains(s.ownerDocument, s), u = jt(DanaMethodAppendChild("appendChild", h, s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++])
                        Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },cleanData: function(e, t) {
            var n, r, s, o, u = 0, a = w.expando, f = w.cache, l = w.support.deleteExpando, h = w.event.special;
            for (; (n = e[u]) != null; u++)
                if (t || w.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events)
                                h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], l ? delete
                        n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                    }
                }
        },_evalUrl: function(e) {
            return w.ajax({url: e,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
        }}), w.fn.extend({wrapAll: function(e) {
            if (w.isFunction(e))
                return this.each(function(t) {
                    w(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (DanaGetFirstChild(e) && DanaGetFirstChild(e).nodeType === 1)
                        e = DanaGetFirstChild(e);
                    return e
                }).append(this)
            }
            return this
        },wrapInner: function(e) {
            return w.isFunction(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },wrap: function(e) {
            var t = w.isFunction(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                w.nodeName(this, "body") || w(this).replaceWith(DanaGetChildNodes(this))
            }).end()
        }});
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/
    , Wt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = new RegExp("^(" + E + ")(.*)$", "i"), Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"), Kt = new RegExp("^([+-])=(" + E + ")", "i"), Qt = {BODY: "block"}, Gt = {position: "absolute",visibility: "hidden",display: "block"}, Yt = {letterSpacing: 0,fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({css: function(e, n) {
            return w.access(this, function(e, n, r) {
                var i, s, o = {}, u = 0;
                if (w.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++)
                        o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        },show: function() {
            return rn(this, !0)
        },hide: function() {
            return rn(this)
        },toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }}), w.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans
            : !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": w.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                return;
            var s, o, u, a = w.camelCase(n), f = e.style;
            n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
            if (r === t)
                return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r))
                return;
            o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t)
                try {
                    f[n] = r
                } catch (l) {
                }
        },css: function(e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }}), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle
        (t, null)
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
        return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u[n] : t, f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {get: function(e, n, r) {
                if (n)
                    return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function() {
                        return un(e, t, r)
                    }) : un(e, t, r)
            },set: function(e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }}
    }), w.support.opacity || (w.
    cssHooks.opacity = {get: function(e, t) {
            return zt.test((t && e.currentStyle ? DanaGetFilter(e.currentStyle) : DanaGetFilter(e.style)) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && DanaGetFilter(r) || DanaGetFilter(n) || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && w.trim(DanaMethodReplace("replace", s, Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !DanaGetFilter(r))
                    return
            }
            DanaPutFilter(n, Ut.test(s) ? DanaMethodReplace("replace", s, Ut, i) : s + " " + i, 0)
        }}), w(function() {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {get: function(e, t) {
                if (t)
                    return w.swap(e, {display: "inline-block"}, Rt, [e, "marginRight"])
            }}), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function(e, t) {
            w.cssHooks[t] = {get: function(e, n) {
                    if (n)
                        return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                }}
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
    }, w.expr.filters
    .visible = function(e) {
        return (!w.expr.filters.hidden(e))
    }), w.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        w.cssHooks[e + t] = {expand: function(n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++)
                    i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }}, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i, dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({serialize: function() {
            return w.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return n == null ? null : w.isArray(n) ? w.map(n, function(e) {
                    return ({name: t.name,value: DanaMethodReplace("replace", e, hn, "\r\n")})
                }) : {name: t.name,value: DanaMethodReplace("replace", n, hn, "\r\n")}
            }).get()
        }}), w.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = w.isFunction
            (t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                s(this.name, this.value)
            });
        else
            for (r in e)
                vn(r, e[r], n, s);
        return DanaMethodReplace("replace", i.join("&"), ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },unbind: function(e, t) {
            return this.off(e, null, t)
        },delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }});
    var mn, gn, yn = w.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
    , xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//, Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = w.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = DanaGetHref(s)
    } catch (Mn) {
        gn = DanaMethodCreateElement("createElement", o, "a"), DanaPutHref(gn, "", 0), gn = DanaGetHref(gn)
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function(e, n, r) {
        if (typeof e != "string" && kn)
            return kn.apply(this, arguments);
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({url: e,type: o,dataType: "html",data: n}).done(function(e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            u.each(r, s || [DanaGetResponseText(e), t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: gn,type: "GET",isLocal: xn.test(mn[1]),global: !0,processData: !0,async
            : !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": On,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": w.parseJSON,"text xml": w.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },ajaxPrefilter: _n(Ln),ajaxTransport: _n(An),ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (b === 2)
                    return;
                b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                if (l)
                    c.ifModified && (S = DanaMethodGetResponseHeader("getResponseHeader", x, "Last-Modified"), S && (w.lastModified[s] = S), S = DanaMethodGetResponseHeader("getResponseHeader", x, "etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y);
                else {
                    y = T;
                    if (e || !T)
                        T = "error"
                        , e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event, d = w.Deferred(), v = w.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, b = 0, E = "canceled", x = {readyState: 0,getResponseHeader: function(e) {
                    var t;
                    if (b === 2) {
                        if (!l) {
                            l = {};
                            while (t = Sn.exec(o))
                                l[t[1].toLowerCase()] = t[2]
                        }
                        t = l[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },getAllResponseHeaders: function() {
                    return b === 2 ? o : null
                },setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, g[e] = t), this
                },overrideMimeType: function(e) {
                    return b || (c.mimeType = e), this
                },statusCode: function(e) {
                    var t;
                    if (e)
                        if (b < 2)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },abort: function(e) {
                    var t =
                    e || E;
                    return f && f.abort(t), N(0, t), this
                }};
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = DanaMethodReplace("replace", DanaMethodReplace("replace", ((e || c.url || gn) + ""), wn, ""), Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (b === 2)
                return x;
            a = c.global, a && w.active++ === 0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? DanaMethodReplace("replace", s, En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && DanaMethodSetRequestHeader("setRequestHeader", x, "If-Modified-Since", w.lastModified[s]), w.etag[s] && DanaMethodSetRequestHeader("setRequestHeader", x, "If-None-Match", w
            .etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && DanaMethodSetRequestHeader("setRequestHeader", x, "Content-Type", c.contentType), DanaMethodSetRequestHeader("setRequestHeader", x, "Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers)
                DanaMethodSetRequestHeader("setRequestHeader", x, i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                E = "abort";
                for (i in {success: 1,error: 1,complete: 1})
                    x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f)
                    N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = DanaFuncSetTimeout(setTimeout, function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(b < 2))
                            throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },getScript: function(e, n) {
            return w.get(e, t, n, "script")
        }}), w.each(["get", "post"], function(e, n) {
        w[n] = function(e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({url: e,type: n,dataType: s,data: r,success: i})
        }
    }), w.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                return w.globalEval(e), e
            }}}), w.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return ({send: function(t, i) {
                    n = DanaMethodCreateElement("createElement", o, "script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), DanaPutSrc(n, e.url, 0), n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState))
                            n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, DanaGetFirstChild(r))
                },abort: function() {
                    n && n.onload(t, !0)
                }})
        }
    });
    var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }}), w.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || ""
        ).indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp")
            return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = DanaMethodReplace("replace", n[a], Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return u || w.error(s + " was not called"), u[0]
            }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
                u = arguments
            }, i.always(function() {
                e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
            }), "script"
    });
    var In, qn, Rn = 0, Un = e.ActiveXObject && function() {
        var e;
        for (e in In)
            In[e](t, !0)
    };
    w.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return (!this.isLocal && zn() || Wn())
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function(n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return ({send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? DanaMethodOpen("open", a, n.type, n.url, n.async, n.username, n.password) : DanaMethodOpen("open", a, n.type, n.url
                    , n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields)
                            a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)
                            DanaMethodSetRequestHeader("setRequestHeader", a, u, i[u])
                    } catch (f) {
                    }
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                if (i)
                                    a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof DanaGetResponseText(a) == "string" && (c.text = DanaGetResponseText(a));
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? DanaFuncSetTimeout(setTimeout, r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },abort: function() {
                    r && r(t, !0)
                }})
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Qn = [nr], Gn = {"*": [function(e, t) {
                var n = this.createTween(e, t
                ), r = n.cur(), i = Jn.exec(t), s = i && i[3] || (w.cssNumber[e] ? "" : "px"), o = (w.cssNumber[e] || s !== "px" && +r) && Jn.exec(w.css(n.elem, e)), u = 1, a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do
                        u = u || ".5", o /= u, w.style(n.elem, e, o + s);
                    while (u !== (u = n.cur() / r) && u !== 1 && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]};
    w.Animation = w.extend(er, {tweener: function(e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)
                n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }}), w.Tween = rr, rr.prototype = {constructor: rr,init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0
            , 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }}, w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).
            show().end().animate({opacity: t}, e, n, r)
        },animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e), s = w.speed(t, n, r), o = function() {
                var t = er(this, w.extend({}, e), s);
                (i || w._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = e != null && e + "queueHooks", s = w.timers, o = w._data(this);
                if (n)
                    o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--; )
                    s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        },finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = w._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = w.timers, o = r ? r.length : 0;
                n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--; )
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.
                    splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }}), w.each({slideDown: ir("show"),slideUp: ir("hide"),slideToggle: ir("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? w.extend({}, e) : {complete: n || !n && t || w.isFunction(e) && e,duration: e,easing: n && t || t && !w.isFunction(t) && t};
        r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
        if (r.queue == null || r.queue === !0)
            r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {linear: function(e) {
            return e
        },swing: function(e) {
            return (.5 - Math.cos(e * Math.PI) / 2)
        }}, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function() {
        var e, n = w.timers, r = 0;
        Xn = w.now();
        for (; r < n.length; r++)
            e = n[r], !e() && n[r] === e && n.splice(r--, 1
            );
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function(e) {
        e() && w.timers.push(e) && DanaMethodStart("start", w.fx)
    }, w.fx.interval = 13, w.fx.start = function() {
        Vn || (Vn = DanaFuncSetInterval(setInterval, w.fx.tick, w.fx.interval))
    }, w.fx.stop = function() {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {slow: 600,fast: 200,_default: 400}, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
        var n, r, s = {top: 0,left: 0}, o = this[0], u = o && o.ownerDocument;
        if (!u)
            return;
        return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : s
    }, w.offset = {setOffset: function(e, t, n) {
            var r = w.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = w(e), s = i.offset(), o = w.css(e, "top"), u = w.css(e, "left"), a = (r === "absolute" ||
            r === "fixed") && w.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }}, w.fn.extend({position: function() {
            if (!this[0])
                return;
            var e, t, n = {top: 0,left: 0}, r = this[0];
            return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - w.css(r, "marginTop", !0),left: t.left - n.left - w.css(r, "marginLeft", !0)}
        },offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && w.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || u
            })
        }}), w.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function(i) {
            return w.access(this, function(e, i, s)
            {
                var o = sr(e);
                if (s === t)
                    return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), w.each({Height: "height",Width: "width"}, function(e, n) {
        w.each({padding: "inner" + e,content: n,"": "outer" + e}, function(r, i) {
            w.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function(n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function() {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : (e.jQuery = e.$ = w, typeof define == "function" && define.amd && define("jquery", [], function() {
        return w
    }))
})(window), function() {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object
    .prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = DanaGetFilter(r), m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function(e) {
        if (e instanceof x)
            return e;
        if (!(this instanceof x))
            return new x(e);
        this._wrapped = e
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
    var T = x.each = x.forEach = function(e, t, r) {
        if (e == null)
            return;
        if (c && e.forEach === c)
            e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n)
                    return
        } else {
            var o = x.keys(e);
            for (var i = 0, s = o.length; i < s; i++)
                if (t.call(r, e[o[i]], o[i], e) === n)
                    return
        }
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2
        ;
        e == null && (e = []);
        if (p && e.reduce === p)
            return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i)
            throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d)
            return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function(u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i)
            throw new TypeError(N);
        return n
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            if (t.call(n, e, i, s))
                return r = e, !0
        }), r
    }, DanaPutFilter(x, x.select = function(e, t, n) {
        var r = [];
        return e == null ? r : v && DanaGetFilter(e) === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, 0), x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return (!t.call(n, e, r, i))
        }, n)
    }, x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s,
            o)))
                return n
        }), !!i)
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o)))
                return n
        }), !!i)
    };
    x.contains = x.include = function(e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2), r = x.isFunction(t);
        return x.map(e, function(e) {
            return ((r ? t : e[t]).apply(e, n))
        })
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t]
        })
    }, x.where = function(e, t, n) {
        return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function(e) {
            for (var n in t)
                if (t[n] !== e[n])
                    return (!1);
            return (!0)
        })
    }, x.findWhere = function(e, t) {
        return x.where(e, t, !0)
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535)
            return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e))
            return (-Infinity);
        var r = {computed: -Infinity,value: -Infinity};
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o > r.computed && (r = {value: e,computed: o})
        }), r.value
    }, x.min = function(e, t, n) {
        if (!t &&
        x.isArray(e) && e[0] === +e[0] && e.length < 65535)
            return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e))
            return Infinity;
        var r = {computed: Infinity,value: Infinity};
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {value: e,computed: o})
        }), r.value
    }, x.shuffle = function(e) {
        var t, n = 0, r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sample = function(e, t, n) {
        return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var k = function(e) {
        return x.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    x.sortBy = function(e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function(e, t, i) {
            return ({value: e,index: t,criteria: r.call(n, e, t, i)})
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0)
                    return 1;
                if (n < r || r === void 0)
                    return (-1)
            }
            return e.index - t.index
        }), "value")
    };
    var L = function(e) {
        return function(t, n, r) {
            var i = {}, s = n == null ? x.identity : k(n);
            return T(t, function(n, o) {
                var u = s.call(r, n, o, t);
                e(i, u, n)
            }), i
        }
    };
    x.groupBy = L(function(e, t, n) {
        (x.has(e, t) ? e[t] : e[t] =
        []).push(n)
    }), x.indexBy = L(function(e, t, n) {
        e[t] = n
    }), x.countBy = L(function(e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }), x.sortedIndex = function(e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t), s = 0, o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, x.identity)
    };
    var A = function(e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function(e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten =
    function(e, t) {
        return A(e, t, [])
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e, s = [], o = [];
        return T(i, function(n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n))
                o.push(n), s.push(e[r])
        }), s
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return (!x.contains(t, e))
        })
    }, x.zip = function() {
        var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e);
        for (var n = 0; n < e; n++)
            t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function(e, t) {
        if (e == null)
            return ({});
        var n = {};
        for (var r = 0, i = e.length; r < i; r++)
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function(e, t, n) {
        if (e == null)
            return (-1);
        var r = 0, i = e.length;
        if (n) {
            if (typeof n != "number")
                return r = x.sortedIndex
                (e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y)
            return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t)
                return r;
        return (-1)
    }, x.lastIndexOf = function(e, t, n) {
        if (e == null)
            return (-1);
        var r = n != null;
        if (b && e.lastIndexOf === b)
            return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t)
                return i;
        return (-1)
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
        while (i < r)
            s[i++] = e, e += n;
        return s
    };
    var O = function() {
    };
    x.bind = function(e, t) {
        var n, r;
        if (S && e.bind === S)
            return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e))
            throw new TypeError;
        return n = u.call(arguments, 2), r = function() {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function(
    e) {
        var t = u.call(arguments, 1);
        if (t.length === 0)
            throw new Error("bindAll must be passed function names");
        return T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity), function() {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return DanaFuncSetTimeout(setTimeout, function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function(e, t, n) {
        var r, i, s, o = null, u = 0;
        n || (n = {});
        var a = function() {
            u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
        };
        return function() {
            var f = new Date;
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = DanaFuncSetTimeout(setTimeout, a, l)), s
        }
    }, x.debounce = function(e, t, n) {
        var r, i, s, o, u;
        return function() {
            s = this, i = arguments, o = new Date;
            var a = function() {
                var f = new Date - o;
                f < t ? r = DanaFuncSetTimeout(setTimeout, a, t - f) : (r = null, n || (u = e.apply(s, i)))
            }, f = n && !r;
            return r ||
            (r = DanaFuncSetTimeout(setTimeout, a, t)), f && (u = e.apply(s, i)), u
        }
    }, x.once = function(e) {
        var t = !1, n;
        return function() {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function(e, t) {
        return function() {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--)
                t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }, x.keys = E || function(e) {
        if (e !== Object(e))
            throw new TypeError("Invalid object");
        var t = [];
        for (var n in e)
            x.has(e, n) && t.push(n);
        return t
    }, x.values = function(e) {
        var t = x.keys(e), n = t.length, r = new Array(n);
        for (var i = 0; i < n; i++)
            r[i] = e[t[i]];
        return r
    }, x.pairs = function(e) {
        var t = x.keys(e), n = t.length, r = new Array(n);
        for (var i = 0; i < n; i++)
            r[i] = [t[i], e[t[i]]];
        return r
    }, x.invert = function(e) {
        var t = {}, n = x.keys(e);
        for (var r = 0, i = n.length; r < i; r++)
            t[e[n[r]]] = n[r];
        return t
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e)
            x.isFunction(e[n]) && t.push(n);
        return t
        .sort()
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e)
            x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var M = function(e, t, n, r) {
        if (e === t)
            return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null)
            return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t))
            return (!1);
        switch (i) {
            case "[object String]":
                return e == String(DanaStringCheckLink(t));
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return (+e == +t);
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline ==
                t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object")
            return (!1);
        var s = n.length;
        while (s--)
            if (n[s] == e)
                return r[s] == t;
        var o = e.constructor, u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u))
            return (!1);
        n.push(e), r.push(t);
        var a = 0, l = !0;
        if (i == "[object Array]") {
            a = e.length, l = a == t.length;
            if (l)
                while (a--)
                    if (!(l = M(e[a], t[a], n, r)))
                        break
        } else {
            for (var c in e)
                if (x.has(e, c)) {
                    a++;
                    if (!(l = x.has(t, c) && M(e[c], t[c], n, r)))
                        break
                }
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--))
                        break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function(e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function(e) {
        if (e == null)
            return (!0);
        if (x.isArray(e) || x.isString(e))
            return e.length === 0;
        for (var t in e)
            if (x.has(e, t))
                return (!1);
        return (!0)
    }, x.isElement = function(e) {
        return (!!e && e.nodeType === 1)
    }, x.isArray = w || function(e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call
            (t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return (!!e && !!x.has(e, "callee"))
    }), typeof /./ != "function" && (x.isFunction = function(e) {
        return typeof e == "function"
    }), x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function(e) {
        return e === null
    }, x.isUndefined = function(e) {
        return e === void 0
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++)
            r[i] = t.call(n, i);
        return r
    }, x.random = function(e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var _ = {escape: {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;"}};
    _.unescape = x.invert(_.escape);
    var D = {escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")};
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return t == null ? "" : DanaMethodReplace("replace", ("" + t), D[e], function(t) {
                return _[e][t]
            })
        }
    }), x.result = function(e, t) {
        if (e == null)
            return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function(e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
    var H = /(.)^/, B = {"'": "'","\\": "\\","\r": "r","\n": "n","  ": "t","\u2028": "u2028","\u2029": "u2029"}, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"), s = 0, o = "__p+='";
        DanaMethodReplace("replace", e, i, function(t, n, r, i, u) {
            return o += DanaMethodReplace("replace", e.slice(s, u), j, function(e) {
                return ("\\" + B[e])
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"
            ), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", DanaJs(o))
        } catch (u) {
            throw u.source = o, u
        }
        if (t)
            return r(t, x);
        var a = function(e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var F = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {chain: function() {
            return this._chain = !0, this
        },value: function(
        ) {
            return this._wrapped
        }})
}.call(this), define("underscore", function(e) {
    return function() {
        var t, n;
        return t || e._
    }
}(this)), function() {
    var e = this, t = e.Backbone, n = [], r = n.push, i = n.slice, s = n.splice, o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "1.1.0";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender || e.$, o.noConflict = function() {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = o.Events = {on: function(e, t, n) {
            if (!l(this, "on", e, [t, n]) || !t)
                return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({callback: t,context: n,ctx: n || this}), this
        },once: function(e, t, n) {
            if (!l(this, "once", e, [t, n]) || !t)
                return this;
            var r = this, i = u.once(function() {
                r.off(e, i), t.apply(this, arguments)
            });
            return i._callback = t, this.on(e, i, n)
        },off: function(e, t, n) {
            var r, i, s, o, a, f, c, h;
            if (!this._events || !l(this, "off", e, [t, n]))
                return this;
            if (!e && !t && !n)
                return this._events = {}, this;
            o = e ? [e] : u.keys(this._events);
            for (a = 0,
            f = o.length; a < f; a++) {
                e = o[a];
                if (s = this._events[e]) {
                    this._events[e] = r = [];
                    if (t || n)
                        for (c = 0, h = s.length; c < h; c++)
                            i = s[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e]
                }
            }
            return this
        },trigger: function(e) {
            if (!this._events)
                return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t))
                return this;
            var n = this._events[e], r = this._events.all;
            return n && c(n, t), r && c(r, arguments), this
        },stopListening: function(e, t, n) {
            var r = this._listeningTo;
            if (!r)
                return this;
            var i = !t && !n;
            !n && typeof t == "object" && (n = this), e && ((r = {})[e._listenId] = e);
            for (var s in r)
                e = r[s], e.off(t, n, this), (i || u.isEmpty(e._events)) && delete this._listeningTo[s];
            return this
        }}, f = /\s+/, l = function(e, t, n, r) {
        if (!n)
            return (!0);
        if (typeof n == "object") {
            for (var i in n)
                e[t].apply(e, [i, n[i]].concat(r));
            return (!1)
        }
        if (f.test(n)) {
            var s = n.split(f);
            for (var o = 0, u = s.length; o < u; o++)
                e[t].apply(e, [s[o]].concat(r));
            return (!1)
        }
        return (!0)
    }, c = function(e, t) {
        var n, r = -1, i = e.length, s = t[0], o = t[1], u = t[2];
        switch (t.length) {
            case 0:
                while (++
                r < i)
                    (n = e[r]).callback.call(n.ctx);
                return;
            case 1:
                while (++r < i)
                    (n = e[r]).callback.call(n.ctx, s);
                return;
            case 2:
                while (++r < i)
                    (n = e[r]).callback.call(n.ctx, s, o);
                return;
            case 3:
                while (++r < i)
                    (n = e[r]).callback.call(n.ctx, s, o, u);
                return;
            default:
                while (++r < i)
                    (n = e[r]).callback.apply(n.ctx, t)
        }
    }, h = {listenTo: "on",listenToOnce: "once"};
    u.each(h, function(e, t) {
        a[t] = function(t, n, r) {
            var i = this._listeningTo || (this._listeningTo = {}), s = t._listenId || (t._listenId = u.uniqueId("l"));
            return i[s] = t, !r && typeof n == "object" && (r = this), t[e](n, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, u.extend(o, a);
    var p = o.Model = function(e, t) {
        var n = e || {};
        t || (t = {}), this.cid = u.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = u.defaults({}, n, u.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    u.extend(p.prototype, a, {changed: null,validationError: null,idAttribute: "id",initialize: function() {
        },toJSON: function(e) {
            return u.clone(this.attributes)
        },sync
        : function() {
            return o.sync.apply(this, arguments)
        },get: function(e) {
            return this.attributes[e]
        },escape: function(e) {
            return u.escape(this.get(e))
        },has: function(e) {
            return this.get(e) != null
        },set: function(e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null)
                return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n))
                return (!1);
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i)
                t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++)
                    this.trigger("change:" + o[h], this, c[o[h]], n)
            }
            if (f)
                return this;
            if (!a)
                while (this._pending)
                    this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },unset: function(e, t) {
            return this.set(e, void 0, u.extend({}, t, {unset
                : !0}))
        },clear: function(e) {
            var t = {};
            for (var n in this.attributes)
                t[n] = void 0;
            return this.set(t, u.extend({}, e, {unset: !0}))
        },hasChanged: function(e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        },changedAttributes: function(e) {
            if (!e)
                return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i]))
                    continue;
                (n || (n = {}))[i] = t
            }
            return n
        },previous: function(e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        },previousAttributes: function() {
            return u.clone(this._previousAttributes)
        },fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(r) {
                if (!t.set(t.parse(r, e), e))
                    return (!1);
                n && n(t, r, e), t.trigger("sync", t, r, e)
            }, F(this, e), this.sync("read", this, e)
        },save: function(e, t, n) {
            var r, i, s, o = this.attributes;
            e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t, n = u.extend({validate: !0}, n);
            if (r && !n.wait) {
                if (!this.set(r, n))
                    return (!1)
            } else if (!this._validate(r, n))
                return (!1);
            r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
            var a = this, f = n.success;
            return n.success = function(e) {
                a.attributes = o;
                var t = a.parse(e, n);
                n.wait && (t = u.extend(r || {}, t));
                if (u.isObject(t) && !a.set(t, n))
                    return (!1);
                f && f(a, e, n), a.trigger("sync", a, e, n)
            }, F(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", i === "patch" && (n.attrs = r), s = this.sync(i, this, n), r && n.wait && (this.attributes = o), s
        },destroy: function(e) {
            e = e ? u.clone(e) : {};
            var t = this, n = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function(i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            };
            if (this.isNew())
                return e.success(), !1;
            F(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },url: function() {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || j();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },parse: function(e, t) {
            return e
        },clone: function() {
            return new this.constructor
            (this.attributes)
        },isNew: function() {
            return this.id == null
        },isValid: function(e) {
            return this._validate({}, u.extend(e || {}, {validate: !0}))
        },_validate: function(e, t) {
            if (!t.validate || !this.validate)
                return (!0);
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, u.extend(t, {validationError: n})), !1) : !0
        }});
    var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
    u.each(d, function(e) {
        p.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.attributes), u[e].apply(u, t)
        }
    });
    var v = o.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({silent: !0}, t))
    }, m = {add: !0,remove: !0,merge: !0}, g = {add: !0,remove: !1};
    u.extend(v.prototype, a, {model: p,initialize: function() {
        },toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },sync: function() {
            return o.sync.apply(this, arguments)
        },add: function(
        e, t) {
            return this.set(e, u.extend({merge: !1}, t, g))
        },remove: function(e, t) {
            var n = !u.isArray(e);
            e = n ? [e] : u.clone(e), t || (t = {});
            var r, i, s, o;
            for (r = 0, i = e.length; r < i; r++) {
                o = e[r] = this.get(e[r]);
                if (!o)
                    continue;
                delete this._byId[o.id], delete this._byId[o.cid], s = this.indexOf(o), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, o.trigger("remove", o, this, t)), this._removeReference(o)
            }
            return n ? e[0] : e
        },set: function(e, t) {
            t = u.defaults({}, t, m), t.parse && (e = this.parse(e, t));
            var n = !u.isArray(e);
            e = n ? e ? [e] : [] : u.clone(e);
            var r, i, s, o, a, f, l, c = t.at, h = this.model, d = this.comparator && c == null && t.sort !== !1, v = u.isString(this.comparator) ? this.comparator : null, g = [], y = [], b = {}, w = t.add, E = t.merge, S = t.remove, x = !d && w && S ? [] : !1;
            for (r = 0, i = e.length; r < i; r++) {
                a = e[r], a instanceof p ? s = o = a : s = a[h.prototype.idAttribute];
                if (f = this.get(s))
                    S && (b[f.cid] = !0), E && (a = a === o ? o.attributes : a, t.parse && (a = f.parse(a, t)), f.set(a, t), d && !l && f.hasChanged(v) && (l = !0)), e[r] = f;
                else if (w) {
                    o = e[r] = this._prepareModel(a, t);
                    if (!o)
                        continue;
                    g.push(o), o.on("all", this
                    ._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o)
                }
                x && x.push(f || o)
            }
            if (S) {
                for (r = 0, i = this.length; r < i; ++r)
                    b[(o = this.models[r]).cid] || y.push(o);
                y.length && this.remove(y, t)
            }
            if (g.length || x && x.length) {
                d && (l = !0), this.length += g.length;
                if (c != null)
                    for (r = 0, i = g.length; r < i; r++)
                        this.models.splice(c + r, 0, g[r]);
                else {
                    x && (this.models.length = 0);
                    var T = x || g;
                    for (r = 0, i = T.length; r < i; r++)
                        this.models.push(T[r])
                }
            }
            l && this.sort({silent: !0});
            if (!t.silent) {
                for (r = 0, i = g.length; r < i; r++)
                    (o = g[r]).trigger("add", o, this, t);
                (l || x && x.length) && this.trigger("sort", this, t)
            }
            return n ? e[0] : e
        },reset: function(e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++)
                this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), e = DanaMethodAdd("add", this, e, u.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), e
        },push: function(e, t) {
            return DanaMethodAdd("add", this, e, u.extend({at: this.length}, t))
        },pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },unshift: function(e, t) {
            return DanaMethodAdd("add", this, e, u.extend(
            {at: 0}, t))
        },shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },slice: function() {
            return i.apply(this.models, arguments)
        },get: function(e) {
            return e == null ? void 0 : this._byId[e.id] || this._byId[e.cid] || this._byId[e]
        },at: function(e) {
            return this.models[e]
        },where: function(e, t) {
            return u.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e)
                    if (e[n] !== t.get(n))
                        return (!1);
                return (!0)
            })
        },findWhere: function(e) {
            return this.where(e, !0)
        },sort: function(e) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },pluck: function(e) {
            return u.invoke(this.models, "get", e)
        },fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success, n = this;
            return e.success = function(r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, F(this, e), this.sync("read", this, e)
        },create: function(e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t)))
                return (!1);
            t.wait || DanaMethodAdd("add", this, e, t);
            var n = this, r = t.success;
            return t.success = function(e, t, i) {
                i.wait && DanaMethodAdd("add", n, e, i), r && r(e, t, i)
            }, DanaMethodSave("save", e, null, t), e
        },parse: function(e, t) {
            return e
        },clone: function() {
            return new this.constructor(this.models)
        },_reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },_prepareModel: function(e, t) {
            if (e instanceof p)
                return e.collection || (e.collection = this), e;
            t = t ? u.clone(t) : {}, t.collection = this;
            var n = new this.model(e, t);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
        },_removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },_onModelEvent: function(e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this)
                return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        }});
    var y =
    ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    u.each(y, function(e) {
        v.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    });
    var b = ["groupBy", "countBy", "sortBy"];
    u.each(b, function(e) {
        v.prototype[e] = function(t, n) {
            var r = u.isFunction(t) ? t : function(e) {
                return e.get(t)
            };
            return u[e](this.models, r, n)
        }
    });
    var w = o.View = function(e) {
        this.cid = u.uniqueId("view"), e || (e = {}), u.extend(this, u.pick(e, S)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, E = /^(\S+)\s*(.*)$/, S = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    u.extend(w.prototype, a, {tagName: "div",$: function(e) {
            return this.$el.find(e)
        },initialize: function(
        ) {
        },render: function() {
            return this
        },remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },setElement: function(e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },delegateEvents: function(e) {
            if (!e && !(e = u.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n)
                    continue;
                var r = t.match(E), i = r[1], s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
            }
            return this
        },undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },_ensureElement: function() {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = DanaMethodAttr("attr", o.$("<" + u.result(this, "tagName") + ">"), e);
                this.setElement(t, !1)
            } else
                this.setElement(u.result(this, "el"), !1)
        }}), o.sync = function(e, t, n) {
        var r = T[e];
        u.defaults(n || (n =
        {}), {emulateHTTP: o.emulateHTTP,emulateJSON: o.emulateJSON});
        var i = {type: r,dataType: "json"};
        n.url || (i.url = u.result(t, "url") || j()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {model: i.data} : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function(e) {
                DanaMethodSetRequestHeader("setRequestHeader", e, "X-HTTP-Method-Override", r);
                if (s)
                    return s.apply(this, arguments)
            }
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1), i.type === "PATCH" && x && (i.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var a = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, a, n), a
    };
    var x = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent), T = {create: "POST",update: "PUT",patch: "PATCH","delete": "DELETE",read: "GET"
    };
    o.ajax = function() {
        return o.$.ajax.apply(o.$, arguments)
    };
    var N = o.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g, k = /(\(\?)?:\w+/g, L = /\*\w+/g, A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(N.prototype, a, {initialize: function() {
        },route: function(e, t, n) {
            u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return o.history.route(e, function(i) {
                var s = r._extractParameters(e, i);
                n && n.apply(r, s), r.trigger.apply(r, ["route:" + t].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s)
            }), this
        },navigate: function(e, t) {
            return DanaMethodNavigate("navigate", o.history, e, t), this
        },_bindRoutes: function() {
            if (!this.routes)
                return;
            this.routes = u.result(this, "routes");
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null)
                this.route(e, this.routes[e])
        },_routeToRegExp: function(e) {
            return e = DanaMethodReplace("replace", DanaMethodReplace("replace", DanaMethodReplace("replace", DanaMethodReplace("replace", e, A, "\\$&"), C, "(?:$1)?"), k, function(e, t) {
                return t ? e : "([^/]+)"
            }), L, "(.*?)"), new RegExp("^" + e + "$"
            )
        },_extractParameters: function(e, t) {
            var n = e.exec(t).slice(1);
            return u.map(n, function(e) {
                return e ? decodeURIComponent(e) : null
            })
        }});
    var O = o.History = function() {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (DanaPutLocation(this, DanaGetLocation(window), 0), this.history = window.history)
    }, M = /^[#\/]|\s+$/g, _ = /^\/+|\/+$/g, D = /msie [\w.]+/, P = /\/$/, H = /[?#].*$/;
    O.started = !1, u.extend(O.prototype, a, {interval: 50,getHash: function(e) {
            var t = DanaGetHref((e || this).location).match(/#(.*)$/);
            return t ? t[1] : ""
        },getFragment: function(e, t) {
            if (e == null)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = DanaGetPathname(this.location);
                    var n = DanaMethodReplace("replace", this.root, P, "");
                    e.indexOf(n) || (e = e.slice(n.length))
                } else
                    e = this.getHash();
            return DanaMethodReplace("replace", e, M, "")
        },start: function(e) {
            if (O.started)
                throw new Error("Backbone.history has already been started");
            O.started = !0, this.options = u.extend({root: "/"}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!
            (this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(), n = document.documentMode, r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = DanaMethodReplace("replace", ("/" + this.root + "/"), _, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, DanaMethodNavigate("navigate", this, t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = DanaFuncSetInterval(setInterval, this.checkUrl, this.interval)), this.fragment = t;
            var i = DanaGetLocation(this), s = DanaMethodReplace("replace", DanaGetPathname(i), /[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !s)
                    return this.fragment = this.getFragment(null, !0), DanaFuncLocationReplace(this, this.root + DanaGetSearch(this.location) + "#" + this.fragment), !0;
                this._hasPushState && s && DanaGetHash(i) && (this.fragment = DanaMethodReplace("replace", this.getHash(), M, ""), this.history.replaceState({}, document.title
                , this.root + this.fragment + DanaGetSearch(i)))
            }
            if (!this.options.silent)
                return DanaMethodLoadURL("loadUrl", this)
        },stop: function() {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), O.started = !1
        },route: function(e, t) {
            this.handlers.unshift({route: e,callback: t})
        },checkUrl: function(e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment)
                return (!1);
            this.iframe && DanaMethodNavigate("navigate", this, t), DanaMethodLoadURL("loadUrl", this)
        },loadUrl: function(e) {
            return e = this.fragment = this.getFragment(e), u.any(this.handlers, function(t) {
                if (t.route.test(e))
                    return t.callback(e), !0
            })
        },navigate: function(e, t) {
            if (!O.started)
                return (!1);
            if (!t || t === !0)
                t = {trigger: !!t};
            var n = this.root + (e = this.getFragment(e || ""));
            e = DanaMethodReplace("replace", e, H, "");
            if (this.fragment === e)
                return;
            this.fragment = e, e === "" && n !== "/" && (n = n.slice(0, -1));
            if (this._hasPushState)
                this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange)
                    return DanaMethodAssign("assign", this.location
                    , n);
                this._updateHash(DanaGetLocation(this), e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || DanaMethodClose("close", DanaMethodOpen("open", this.iframe.document)), this._updateHash(DanaGetLocation(this.iframe), e, t.replace))
            }
            if (t.trigger)
                return DanaMethodLoadURL("loadUrl", this, e)
        },_updateHash: function(e, t, n) {
            if (n) {
                var r = DanaMethodReplace("replace", DanaGetHref(e), /(javascript:|#).*$/, "");
                DanaMethodReplace("replace", e, r + "#" + t)
            } else
                e.hash = "#" + t
        }}), o.history = new O;
    var B = function(e, t) {
        var n = this, r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function() {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function() {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    p.extend = v.extend = N.extend = w.extend = O.extend = B;
    var j = function() {
        throw new Error('A "url" property or function must be specified')
    }, F = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n(e, r, t), e.trigger("error", e, r, t)
        }
    }
}.call(this), define("backbone", ["jquery", "underscore"], function(e) {
    return function() {
        var t, n;
        return t || e.Backbone
    }
}(this)),
Backbone.ChildViewContainer = function(e, t) {
    var n = function(e) {
        this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), t.each(e, this.add, this)
    };
    t.extend(n.prototype, {add: function(e, t) {
            var n = e.cid;
            this._views[n] = e, e.model && (this._indexByModel[e.model.cid] = n), t && (this._indexByCustom[t] = n), this._updateLength()
        },findByModel: function(e) {
            return this.findByModelCid(e.cid)
        },findByModelCid: function(e) {
            var t = this._indexByModel[e];
            return this.findByCid(t)
        },findByCustom: function(e) {
            var t = this._indexByCustom[e];
            return this.findByCid(t)
        },findByIndex: function(e) {
            return t.values(this._views)[e]
        },findByCid: function(e) {
            return this._views[e]
        },remove: function(e) {
            var n = e.cid;
            e.model && delete this._indexByModel[e.model.cid], t.any(this._indexByCustom, function(e, t) {
                if (e === n)
                    return delete this._indexByCustom[t], !0
            }, this), delete this._views[n], this._updateLength()
        },call: function(e) {
            this.apply(e, t.tail(arguments))
        },apply: function(e, n) {
            t.each(this._views, function(r) {
                t.isFunction(r[e]) && r[e].apply
                (r, n || [])
            })
        },_updateLength: function() {
            this.length = t.size(this._views)
        }});
    var r = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
    return t.each(r, function(e) {
        n.prototype[e] = function() {
            var n = t.values(this._views), r = [n].concat(t.toArray(arguments));
            return t[e].apply(t, r)
        }
    }), n
}(Backbone, _), Backbone.Wreqr = function(e, t, n) {
    var r = {};
    return r.Handlers = function(e, t) {
        var n = function(e) {
            this.options = e, this._wreqrHandlers = {}, t.isFunction(this.initialize) && DanaMethodInitialize("initialize", this, e)
        };
        return n.extend = e.Model.extend, t.extend(n.prototype, e.Events, {setHandlers: function(e) {
                t.each(e, function(e, n) {
                    var r = null;
                    t.isObject(e) && !t.isFunction(e) && (r = e.context, e = e.callback), this.setHandler(n, e, r)
                }, this)
            },setHandler: function(e, t, n) {
                var r = {callback: t,context: n};
                this._wreqrHandlers[e] = r, this.trigger("handler:add", e, t, n)
            },hasHandler: function(e) {
                return (!!this._wreqrHandlers[e])
            },getHandler
            : function(e) {
                var t = this._wreqrHandlers[e];
                if (!t)
                    throw new Error("Handler not found for '" + e + "'");
                return function() {
                    var e = Array.prototype.slice.apply(arguments);
                    return t.callback.apply(t.context, e)
                }
            },removeHandler: function(e) {
                delete this._wreqrHandlers[e]
            },removeAllHandlers: function() {
                this._wreqrHandlers = {}
            }}), n
    }(e, n), r.CommandStorage = function() {
        var t = function(e) {
            this.options = e, this._commands = {}, n.isFunction(this.initialize) && DanaMethodInitialize("initialize", this, e)
        };
        return n.extend(t.prototype, e.Events, {getCommands: function(e) {
                var t = this._commands[e];
                return t || (t = {command: e,instances: []}, this._commands[e] = t), t
            },addCommand: function(e, t) {
                var n = this.getCommands(e);
                n.instances.push(t)
            },clearCommands: function(e) {
                var t = this.getCommands(e);
                t.instances = []
            }}), t
    }(), r.Commands = function(e) {
        return e.Handlers.extend({storageType: e.CommandStorage,constructor: function(t) {
                this.options = t || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                var n = Array.prototype.slice.call(arguments);
                e.Handlers
                .prototype.constructor.apply(this, n)
            },execute: function(e, t) {
                e = arguments[0], t = Array.prototype.slice.call(arguments, 1), this.hasHandler(e) ? this.getHandler(e).apply(this, t) : this.storage.addCommand(e, t)
            },_executeCommands: function(e, t, r) {
                var i = this.storage.getCommands(e);
                n.each(i.instances, function(e) {
                    t.apply(r, e)
                }), this.storage.clearCommands(e)
            },_initializeStorage: function(e) {
                var t, r = e.storageType || this.storageType;
                n.isFunction(r) ? t = new r : t = r, this.storage = t
            }})
    }(r), r.RequestResponse = function(e) {
        return e.Handlers.extend({request: function() {
                var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
                return this.getHandler(e).apply(this, t)
            }})
    }(r), r.EventAggregator = function(e, t) {
        var n = function() {
        };
        return n.extend = e.Model.extend, t.extend(n.prototype, e.Events), n
    }(e, n), r
}(Backbone, Backbone.Marionette, _);
var e = function(e, t, n) {
    function s(e) {
        return i.call(e)
    }
    function o(e, t) {
        var n = new Error(e);
        throw n.name = t || "Error", n
    }
    var r = {};
    t.Marionette = r, r.$ = t.$;
    var i = Array.prototype.slice;
    return r.extend = t.Model.
    extend, r.getOption = function(e, t) {
        if (!e || !t)
            return;
        var n;
        return e.options && t in e.options && e.options[t] !== undefined ? n = e.options[t] : n = e[t], n
    }, r.triggerMethod = function() {
        function t(e, t, n) {
            return n.toUpperCase()
        }
        var e = /(^|:)(\w)/gi, r = function(r) {
            var i = "on" + DanaMethodReplace("replace", r, e, t), s = this[i];
            n.isFunction(this.trigger) && this.trigger.apply(this, arguments);
            if (n.isFunction(s))
                return s.apply(this, n.tail(arguments))
        };
        return r
    }(), r.MonitorDOMRefresh = function() {
        function e(e) {
            e._isShown = !0, r(e)
        }
        function t(e) {
            e._isRendered = !0, r(e)
        }
        function r(e) {
            e._isShown && e._isRendered && n.isFunction(e.triggerMethod) && e.triggerMethod("dom:refresh")
        }
        return function(n) {
            n.listenTo(n, "show", function() {
                e(n)
            }), n.listenTo(n, "render", function() {
                t(n)
            })
        }
    }(), function(e) {
        function t(e, t, r, i) {
            var s = i.split(/\s+/);
            n.each(s, function(n) {
                var i = e[n];
                i || o("Method '" + n + "' was configured as an event handler, but does not exist."), e.listenTo(t, r, i, e)
            })
        }
        function r(e, t, n, r) {
            e.listenTo(t, n, r, e)
        }
        function i(e, t, r, i) {
            var s = i.split(/\s+/);
            n.each(s, function(
            n) {
                var i = e[n];
                e.stopListening(t, r, i, e)
            })
        }
        function s(e, t, n, r) {
            e.stopListening(t, n, r, e)
        }
        function u(e, t, r, i, s) {
            if (!t || !r)
                return;
            n.isFunction(r) && (r = r.call(e)), n.each(r, function(r, o) {
                n.isFunction(r) ? i(e, t, o, r) : s(e, t, o, r)
            })
        }
        e.bindEntityEvents = function(e, n, i) {
            u(e, n, i, r, t)
        }, e.unbindEntityEvents = function(e, t, n) {
            u(e, t, n, s, i)
        }
    }(r), r.Callbacks = function() {
        this._deferred = r.$.Deferred(), this._callbacks = []
    }, n.extend(r.Callbacks.prototype, {add: function(e, t) {
            this._callbacks.push({cb: e,ctx: t}), this._deferred.done(function(n, r) {
                t && (n = t), e.call(n, r)
            })
        },run: function(e, t) {
            this._deferred.resolve(t, e)
        },reset: function() {
            var e = this._callbacks;
            this._deferred = r.$.Deferred(), this._callbacks = [], n.each(e, function(e) {
                DanaMethodAdd("add", this, e.cb, e.ctx)
            }, this)
        }}), r.Controller = function(e) {
        this.triggerMethod = r.triggerMethod, this.options = e || {}, n.isFunction(this.initialize) && DanaMethodInitialize("initialize", this, this.options)
    }, r.Controller.extend = r.extend, n.extend(r.Controller.prototype, t.Events, {close: function() {
            this.stopListening(), this.triggerMethod("close"
            ), this.unbind()
        }}), r.Region = function(e) {
        this.options = e || {}, this.el = r.getOption(this, "el");
        if (!this.el) {
            var t = new Error("An 'el' must be specified for a region.");
            throw t.name = "NoElError", t
        }
        if (this.initialize) {
            var n = Array.prototype.slice.apply(arguments);
            this.initialize.apply(this, n)
        }
    }, n.extend(r.Region, {buildRegion: function(e, t) {
            var r = typeof e == "string", i = typeof e.selector == "string", s = typeof e.regionType == "undefined", o = typeof e == "function";
            if (!o && !r && !i)
                throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
            var u, a;
            r && (u = e), e.selector && (u = e.selector), o && (a = e), !o && s && (a = t), e.regionType && (a = e.regionType);
            var f = new a({el: u});
            return e.parentEl && (f.getEl = function(t) {
                var r = e.parentEl;
                return n.isFunction(r) && (r = r()), r.find(t)
            }), f
        }}), n.extend(r.Region.prototype, t.Events, {show: function(e) {
            this.ensureEl();
            var t = e.isClosed || n.isUndefined(e.$el), i = e !== this.currentView;
            i && DanaMethodClose("close", this), e.render(), (i || t) && DanaMethodOpen("open", this, e), this.currentView = e, r.triggerMethod
            .call(this, "show", e), r.triggerMethod.call(e, "show")
        },ensureEl: function() {
            if (!this.$el || this.$el.length === 0)
                this.$el = this.getEl(this.el)
        },getEl: function(e) {
            return r.$(e)
        },open: function(e) {
            this.$el.empty().append(e.el)
        },close: function() {
            var e = this.currentView;
            if (!e || e.isClosed)
                return;
            e.close ? DanaMethodClose("close", e) : e.remove && e.remove(), r.triggerMethod.call(this, "close"), delete this.currentView
        },attachView: function(e) {
            this.currentView = e
        },reset: function() {
            DanaMethodClose("close", this), delete this.$el
        }}), r.Region.extend = r.extend, r.RegionManager = function(e) {
        var t = e.Controller.extend({constructor: function(t) {
                this._regions = {}, e.Controller.prototype.constructor.call(this, t)
            },addRegions: function(e, t) {
                var r = {};
                return n.each(e, function(e, i) {
                    typeof e == "string" && (e = {selector: e}), e.selector && (e = n.defaults({}, e, t));
                    var s = this.addRegion(i, e);
                    r[i] = s
                }, this), r
            },addRegion: function(t, r) {
                var i, s = n.isObject(r), o = n.isString(r), u = !!r.selector;
                return o || s && u ? i = e.Region.buildRegion(r, e.Region) : n.isFunction(r) ? i = e.Region.buildRegion(r, e.Region) :
                i = r, this._store(t, i), this.triggerMethod("region:add", t, i), i
            },get: function(e) {
                return this._regions[e]
            },removeRegion: function(e) {
                var t = this._regions[e];
                this._remove(e, t)
            },removeRegions: function() {
                n.each(this._regions, function(e, t) {
                    this._remove(t, e)
                }, this)
            },closeRegions: function() {
                n.each(this._regions, function(e, t) {
                    DanaMethodClose("close", e)
                }, this)
            },close: function() {
                this.removeRegions();
                var t = Array.prototype.slice.call(arguments);
                e.Controller.prototype.close.apply(this, t)
            },_store: function(e, t) {
                this._regions[e] = t, this._setLength()
            },_remove: function(e, t) {
                DanaMethodClose("close", t), delete this._regions[e], this._setLength(), this.triggerMethod("region:remove", e, t)
            },_setLength: function() {
                this.length = n.size(this._regions)
            }}), r = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        return n.each(r, function(e) {
            t.prototype[e] = function() {
                var t = n.values(this._regions), r = [t].concat(n.toArray(arguments
                ));
                return n[e].apply(n, r)
            }
        }), t
    }(r), r.TemplateCache = function(e) {
        this.templateId = e
    }, n.extend(r.TemplateCache, {templateCaches: {},get: function(e) {
            var t = this.templateCaches[e];
            return t || (t = new r.TemplateCache(e), this.templateCaches[e] = t), DanaMethodLoad("load", t)
        },clear: function() {
            var e, t = s(arguments), n = t.length;
            if (n > 0)
                for (e = 0; e < n; e++)
                    delete this.templateCaches[t[e]];
            else
                this.templateCaches = {}
        }}), n.extend(r.TemplateCache.prototype, {load: function() {
            if (this.compiledTemplate)
                return this.compiledTemplate;
            var e = this.loadTemplate(this.templateId);

            /*

            HACK: A broken template that contains "% >" instead of "%>" causes
            an unhandled exception error. The exception error fails to load
            the rest of the JavaScript causing the page to not render correctly
            in any browser.

            This checks the template before it's compiled for broken tags,
            and replaces it with correctly formatted tags so my wife can
            work on her papers.

            - Chris Le <chle@google.com> Apr 19, 2015
             */
            if (e.match('% >')) {
                console.log('Patching template!');
                e = e.replace(/\%\s\>/g, '%>');
            }

            return this.compiledTemplate = this.compileTemplate(e), this.compiledTemplate
        },loadTemplate: function(e) {
            var t = r.$(e).html();
            return ((!t || t.length === 0) && o("Could not find template: '" + e + "'", "NoTemplateError"), t)
        },compileTemplate: function(e) {
            return n.template(e)
        }}), r.Renderer = {render: function(e, t) {
            if (!e) {
                var n = new Error("Cannot render the template since it's false, null or undefined.");
                throw n.name = "TemplateNotFoundError", n
            }
            var i;
            return typeof e == "function" ? i = e : i = r.TemplateCache
            .get(e), i(t)
        }}, r.View = t.View.extend({constructor: function() {
            n.bindAll(this, "render");
            var e = Array.prototype.slice.apply(arguments);
            t.View.prototype.constructor.apply(this, e), r.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled, this)
        },triggerMethod: r.triggerMethod,getTemplate: function() {
            return r.getOption(this, "template")
        },mixinTemplateHelpers: function(e) {
            e = e || {};
            var t = r.getOption(this, "templateHelpers");
            return n.isFunction(t) && (t = t.call(this)), n.extend(e, t)
        },configureTriggers: function() {
            if (!this.triggers)
                return;
            var e = {}, t = n.result(this, "triggers");
            return n.each(t, function(t, n) {
                e[n] = function(e) {
                    e && e.preventDefault && e.preventDefault(), e && e.stopPropagation && e.stopPropagation();
                    var n = {view: this,model: this.model,collection: this.collection};
                    this.triggerMethod(t, n)
                }
            }, this), e
        },delegateEvents: function(e) {
            this._delegateDOMEvents(e), r.bindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.bindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
        },_delegateDOMEvents
        : function(e) {
            e = e || this.events, n.isFunction(e) && (e = e.call(this));
            var r = {}, i = this.configureTriggers();
            n.extend(r, e, i), t.View.prototype.delegateEvents.call(this, r)
        },undelegateEvents: function() {
            var e = Array.prototype.slice.call(arguments);
            t.View.prototype.undelegateEvents.apply(this, e), r.unbindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.unbindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
        },onShowCalled: function() {
        },close: function() {
            if (this.isClosed)
                return;
            var e = this.triggerMethod("before:close");
            if (e === !1)
                return;
            this.isClosed = !0, this.triggerMethod("close"), this.unbindUIElements(), this.remove()
        },bindUIElements: function() {
            if (!this.ui)
                return;
            this._uiBindings || (this._uiBindings = this.ui);
            var e = n.result(this, "_uiBindings");
            this.ui = {}, n.each(n.keys(e), function(t) {
                var n = e[t];
                this.ui[t] = this.$(n)
            }, this)
        },unbindUIElements: function() {
            if (!this.ui || !this._uiBindings)
                return;
            n.each(this.ui, function(e, t) {
                delete this.ui[t]
            }, this), this.ui = this._uiBindings, delete this
            ._uiBindings
        }}), r.ItemView = r.View.extend({constructor: function() {
            r.View.prototype.constructor.apply(this, s(arguments))
        },serializeData: function() {
            var e = {};
            return this.model ? e = this.model.toJSON() : this.collection && (e = {items: this.collection.toJSON()}), e
        },render: function() {
            this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
            var e = this.serializeData();
            e = this.mixinTemplateHelpers(e);
            var t = this.getTemplate(), n = r.Renderer.render(t, e);
            return this.$el.html(n), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
        },close: function() {
            if (this.isClosed)
                return;
            this.triggerMethod("item:before:close"), r.View.prototype.close.apply(this, s(arguments)), this.triggerMethod("item:closed")
        }}), r.CollectionView = r.View.extend({itemViewEventPrefix: "itemview",constructor: function(e) {
            this._initChildViewStorage(), r.View.prototype.constructor.apply(this, s(arguments)), this._initialEvents()
        },_initialEvents: function() {
            this.collection &&
            (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this))
        },addChildView: function(e, t, n) {
            this.closeEmptyView();
            var r = this.getItemView(e), i = this.collection.indexOf(e);
            this.addItemView(e, r, i)
        },onShowCalled: function() {
            this.children.each(function(e) {
                r.triggerMethod.call(e, "show")
            })
        },triggerBeforeRender: function() {
            this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
        },triggerRendered: function() {
            this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
        },render: function() {
            return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
        },_renderChildren: function() {
            this.closeEmptyView(), this.closeChildren(), this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView()
        },showCollection: function() {
            var e;
            this.collection.each(function(t, n) {
                e = this.getItemView(
                t), this.addItemView(t, e, n)
            }, this)
        },showEmptyView: function() {
            var e = r.getOption(this, "emptyView");
            if (e && !this._showingEmptyView) {
                this._showingEmptyView = !0;
                var n = new t.Model;
                this.addItemView(n, e, 0)
            }
        },closeEmptyView: function() {
            this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
        },getItemView: function(e) {
            var t = r.getOption(this, "itemView");
            return t || o("An `itemView` must be specified", "NoItemViewError"), t
        },addItemView: function(e, t, i) {
            var s = r.getOption(this, "itemViewOptions");
            n.isFunction(s) && (s = s.call(this, e, i));
            var o = this.buildItemView(e, t, s);
            this.addChildViewEventForwarding(o), this.triggerMethod("before:item:added", o), DanaMethodAdd("add", this.children, o), this.renderItemView(o, i), this._isShown && r.triggerMethod.call(o, "show"), this.triggerMethod("after:item:added", o)
        },addChildViewEventForwarding: function(e) {
            var t = r.getOption(this, "itemViewEventPrefix");
            this.listenTo(e, "all", function() {
                var n = s(arguments);
                n[0] = t + ":" + n[0], n.splice(1, 0, e), r.triggerMethod.apply(this, n)
            }, this)
        },renderItemView
        : function(e, t) {
            e.render(), this.appendHtml(this, e, t)
        },buildItemView: function(e, t, r) {
            var i = n.extend({model: e}, r);
            return new t(i)
        },removeItemView: function(e) {
            var t = this.children.findByModel(e);
            this.removeChildView(t), this.checkEmpty()
        },removeChildView: function(e) {
            e && (this.stopListening(e), e.close ? DanaMethodClose("close", e) : e.remove && e.remove(), this.children.remove(e)), this.triggerMethod("item:removed", e)
        },checkEmpty: function() {
            (!this.collection || this.collection.length === 0) && this.showEmptyView()
        },appendHtml: function(e, t, n) {
            e.$el.append(t.el)
        },_initChildViewStorage: function() {
            this.children = new t.ChildViewContainer
        },close: function() {
            if (this.isClosed)
                return;
            this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), r.View.prototype.close.apply(this, s(arguments))
        },closeChildren: function() {
            this.children.each(function(e) {
                this.removeChildView(e)
            }, this), this.checkEmpty()
        }}), r.CompositeView = r.CollectionView.extend({constructor: function() {
            r.CollectionView.prototype.constructor
            .apply(this, s(arguments))
        },_initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this))
        },getItemView: function(e) {
            var t = r.getOption(this, "itemView") || this.constructor;
            return t || o("An `itemView` must be specified", "NoItemViewError"), t
        },serializeData: function() {
            var e = {};
            return this.model && (e = this.model.toJSON()), e
        },render: function() {
            this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
            var e = this.renderModel();
            return this.$el.html(e), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
        },_renderChildren: function() {
            this.isRendered && (r.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
        },renderModel: function() {
            var e = {};
            e = this
            .serializeData(), e = this.mixinTemplateHelpers(e);
            var t = this.getTemplate();
            return r.Renderer.render(t, e)
        },appendHtml: function(e, t, n) {
            var r = this.getItemViewContainer(e);
            r.append(t.el)
        },getItemViewContainer: function(e) {
            if ("$itemViewContainer" in e)
                return e.$itemViewContainer;
            var t, i = r.getOption(e, "itemViewContainer");
            if (i) {
                var s = n.isFunction(i) ? i() : i;
                t = e.$(s), t.length <= 0 && o("The specified `itemViewContainer` was not found: " + e.itemViewContainer, "ItemViewContainerMissingError")
            } else
                t = e.$el;
            return e.$itemViewContainer = t, t
        },resetItemViewContainer: function() {
            this.$itemViewContainer && delete this.$itemViewContainer
        }}), r.Layout = r.ItemView.extend({regionType: r.Region,constructor: function(e) {
            e = e || {}, this._firstRender = !0, this._initializeRegions(e), r.ItemView.prototype.constructor.call(this, e)
        },render: function() {
            this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions();
            var e = Array.prototype.slice.apply(arguments), t = r.ItemView.prototype.render
            .apply(this, e);
            return t
        },close: function() {
            if (this.isClosed)
                return;
            DanaMethodClose("close", this.regionManager);
            var e = Array.prototype.slice.apply(arguments);
            r.ItemView.prototype.close.apply(this, e)
        },addRegion: function(e, t) {
            var n = {};
            return n[e] = t, this._buildRegions(n)[e]
        },addRegions: function(e) {
            return this.regions = n.extend({}, this.regions, e), this._buildRegions(e)
        },removeRegion: function(e) {
            return delete this.regions[e], this.regionManager.removeRegion(e)
        },_buildRegions: function(e) {
            var t = this, n = {regionType: r.getOption(this, "regionType"),parentEl: function() {
                    return t.$el
                }};
            return this.regionManager.addRegions(e, n)
        },_initializeRegions: function(e) {
            var t;
            this._initRegionManager(), n.isFunction(this.regions) ? t = this.regions(e) : t = this.regions || {}, this.addRegions(t)
        },_reInitializeRegions: function() {
            this.regionManager.closeRegions(), this.regionManager.each(function(e) {
                e.reset()
            })
        },_initRegionManager: function() {
            this.regionManager = new r.RegionManager, this.listenTo(this.regionManager, "region:add", function(e, t) {
                this[e] = t, this
                .trigger("region:add", e, t)
            }), this.listenTo(this.regionManager, "region:remove", function(e, t) {
                delete this[e], this.trigger("region:remove", e, t)
            })
        }}), r.AppRouter = t.Router.extend({constructor: function(e) {
            t.Router.prototype.constructor.apply(this, s(arguments)), this.options = e || {};
            var n = r.getOption(this, "appRoutes"), i = this._getController();
            this.processAppRoutes(i, n)
        },appRoute: function(e, t) {
            var n = this._getController();
            this._addAppRoute(n, e, t)
        },processAppRoutes: function(e, t) {
            if (!t)
                return;
            var r = n.keys(t).reverse();
            n.each(r, function(n) {
                this._addAppRoute(e, n, t[n])
            }, this)
        },_getController: function() {
            return r.getOption(this, "controller")
        },_addAppRoute: function(e, t, r) {
            var i = e[r];
            if (!i)
                throw new Error("Method '" + r + "' was not found on the controller");
            this.route(t, r, n.bind(i, e))
        }}), r.Application = function(e) {
        this._initRegionManager(), this._initCallbacks = new r.Callbacks, this.vent = new t.Wreqr.EventAggregator, this.commands = new t.Wreqr.Commands, this.reqres = new t.Wreqr.RequestResponse, this.submodules = {}, n.extend
        (this, e), this.triggerMethod = r.triggerMethod
    }, n.extend(r.Application.prototype, t.Events, {execute: function() {
            var e = Array.prototype.slice.apply(arguments);
            this.commands.execute.apply(this.commands, e)
        },request: function() {
            var e = Array.prototype.slice.apply(arguments);
            return this.reqres.request.apply(this.reqres, e)
        },addInitializer: function(e) {
            DanaMethodAdd("add", this._initCallbacks, e)
        },start: function(e) {
            this.triggerMethod("initialize:before", e), this._initCallbacks.run(e, this), this.triggerMethod("initialize:after", e), this.triggerMethod("start", e)
        },addRegions: function(e) {
            return this._regionManager.addRegions(e)
        },closeRegions: function() {
            this._regionManager.closeRegions()
        },removeRegion: function(e) {
            this._regionManager.removeRegion(e)
        },getRegion: function(e) {
            return this._regionManager.get(e)
        },module: function(e, t) {
            var n = s(arguments);
            return n.unshift(this), r.Module.create.apply(r.Module, n)
        },_initRegionManager: function() {
            this._regionManager = new r.RegionManager, this.listenTo(this._regionManager, "region:add", function(e, t
            ) {
                this[e] = t
            }), this.listenTo(this._regionManager, "region:remove", function(e, t) {
                delete this[e]
            })
        }}), r.Application.extend = r.extend, r.Module = function(e, t) {
        this.moduleName = e, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = t, this.startWithParent = !0, this.triggerMethod = r.triggerMethod
    }, n.extend(r.Module.prototype, t.Events, {addInitializer: function(e) {
            DanaMethodAdd("add", this._initializerCallbacks, e)
        },addFinalizer: function(e) {
            DanaMethodAdd("add", this._finalizerCallbacks, e)
        },start: function(e) {
            if (this._isInitialized)
                return;
            n.each(this.submodules, function(t) {
                t.startWithParent && DanaMethodStart("start", t, e)
            }), this.triggerMethod("before:start", e), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.triggerMethod("start", e)
        },stop: function() {
            if (!this._isInitialized)
                return;
            this._isInitialized = !1, r.triggerMethod.call(this, "before:stop"), n.each(this.submodules, function(e) {
                e.stop()
            }), this._finalizerCallbacks.run(undefined, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), r.triggerMethod.call(this, "stop"
            )
        },addDefinition: function(e, t) {
            this._runModuleDefinition(e, t)
        },_runModuleDefinition: function(e, i) {
            if (!e)
                return;
            var s = n.flatten([this, this.app, t, r, r.$, n, i]);
            e.apply(this, s)
        },_setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks
        }}), n.extend(r.Module, {create: function(e, t, r) {
            var i = e, o = s(arguments);
            o.splice(0, 3), t = t.split(".");
            var u = t.length, a = [];
            return a[u - 1] = r, n.each(t, function(t, n) {
                var r = i;
                i = this._getModule(r, t, e), this._addModuleDefinition(r, i, a[n], o)
            }, this), i
        },_getModule: function(e, t, n, i, s) {
            var o = e[t];
            return o || (o = new r.Module(t, n), e[t] = o, e.submodules[t] = o), o
        },_addModuleDefinition: function(e, t, r, i) {
            var s, o;
            n.isFunction(r) ? (s = r, o = !0) : n.isObject(r) ? (s = r.define, o = r.startWithParent) : o = !0, s && t.addDefinition(s, i), t.startWithParent = t.startWithParent && o, t.startWithParent && !t.startWithParentIsConfigured && (t.startWithParentIsConfigured = !0, e.addInitializer(function(e) {
                t.startWithParent && DanaMethodStart("start", t, e)
            }))
        }}), r
}(this, Backbone, _);
define
("marionette", ["backbone"], function(e) {
    return function() {
        var t, n;
        return t || e.Backbone.Marionette
    }
}(this)), !function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd && define("i18next", [], t)
}(this, function() {
    function e(e, t) {
        if (!t || "function" == typeof t)
            return e;
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function t(e, n) {
        for (var r in n)
            r in e ? t(e[r], n[r]) : e[r] = n[r];
        return e
    }
    function n(e, t, n) {
        var r, i = 0, s = e.length, o = void 0 === s || "[object Array]" !== Object.prototype.toString.apply(e) || "function" == typeof e;
        if (n)
            if (o) {
                for (r in e)
                    if (t.apply(e[r], n) === !1)
                        break
            } else
                for (; s > i && t.apply(e[i++], n) !== !1; )
                    ;
        else if (o) {
            for (r in e)
                if (t.call(e[r], r, e[r]) === !1)
                    break
        } else
            for (; s > i && t.call(e[i], i, e[i++]) !== !1; )
                ;
        return e
    }
    function r(e) {
        return ("string" == typeof e ? DanaMethodReplace("replace", e, /[&<>"'\/]/g, function(e) {
            return j[e]
        }) : e)
    }
    function i(e) {
        var t = function(e) {
            if (window.XMLHttpRequest)
                return e(null, new XMLHttpRequest);
            if (window.ActiveXObject)
                try {
                    return e(null, new ActiveXObject("Msxml2.XMLHTTP"))
                } catch (t) {
                    return e
                    (null, new ActiveXObject("Microsoft.XMLHTTP"))
                }
            return e(new Error)
        }, n = function(e) {
            if ("string" == typeof e)
                return e;
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }, r = function(e) {
            e = DanaMethodReplace("replace", e, /\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(192 | r >> 6), t += String.fromCharCode(128 | 63 & r)) : (t += String.fromCharCode(224 | r >> 12), t += String.fromCharCode(128 | 63 & r >> 6), t += String.fromCharCode(128 | 63 & r))
            }
            return t
        }, i = function(e) {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            e = r(e);
            var n, i, s, o, u, a, f, l = "", c = 0;
            do
                n = e.charCodeAt(c++), i = e.charCodeAt(c++), s = e.charCodeAt(c++), o = n >> 2, u = (3 & n) << 4 | i >> 4, a = (15 & i) << 2 | s >> 6, f = 63 & s, isNaN(i) ? a = f = 64 : isNaN(s) && (f = 64), l += t.charAt(o) + t.charAt(u) + t.charAt(a) + t.charAt(f), n = i = s = "", o = u = a = f = "";
            while (c < e.length);
            return l
        }, s = function() {
            for (var e = arguments[0], t = 1; t < arguments.length; t++) {
                var n = arguments
                [t];
                for (var r in n)
                    n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }, o = function(e, r, i, u) {
            "function" == typeof i && (u = i, i = {}), i.cache = i.cache || !1, i.data = i.data || {}, i.headers = i.headers || {}, i.jsonp = i.jsonp || !1, i.async = void 0 === i.async ? !0 : i.async;
            var a, f = s({accept: "*/*","content-type": "application/x-www-form-urlencoded;charset=UTF-8"}, o.headers, i.headers);
            if (a = "application/json" === f["content-type"] ? JSON.stringify(i.data) : n(i.data), "GET" === e) {
                var l = [];
                if (a && (l.push(a), a = null), i.cache || l.push("_=" + (new Date).getTime()), i.jsonp && (l.push("callback=" + i.jsonp), l.push("jsonp=" + i.jsonp)), l = l.join("&"), l.length > 1 && (r += r.indexOf("?") > -1 ? "&" + l : "?" + l), i.jsonp) {
                    var c = document.getElementsByTagName("head")[0], h = DanaMethodCreateElement("createElement", document, "script");
                    return h.type = "text/javascript", DanaPutSrc(h, r, 0), DanaMethodAppendChild("appendChild", c, h), void 0
                }
            }
            t(function(t, n) {
                if (t)
                    return u(t);
                DanaMethodOpen("open", n, e, r, i.async);
                for (var s in f)
                    f.hasOwnProperty(s) && DanaMethodSetRequestHeader("setRequestHeader", n, s, f[s]);
                n.onreadystatechange = function() {
                    if (4 === n.readyState) {
                        var e = DanaGetResponseText(n) || "";
                        if (!u)
                            return;
                        u(n.
                        status, {text: function() {
                                return e
                            },json: function() {
                                return JSON.parse(e)
                            }})
                    }
                }, n.send(a)
            })
        }, u = {authBasic: function(e, t) {
                o.headers.Authorization = "Basic " + i(e + ":" + t)
            },connect: function(e, t, n) {
                return o("CONNECT", e, t, n)
            },del: function(e, t, n) {
                return o("DELETE", e, t, n)
            },get: function(e, t, n) {
                return o("GET", e, t, n)
            },head: function(e, t, n) {
                return o("HEAD", e, t, n)
            },headers: function(e) {
                o.headers = e || {}
            },isAllowed: function(e, t, n) {
                this.options(e, function(e, r) {
                    n(-1 !== r.text().indexOf(t))
                })
            },options: function(e, t, n) {
                return o("OPTIONS", e, t, n)
            },patch: function(e, t, n) {
                return o("PATCH", e, t, n)
            },post: function(e, t, n) {
                return o("POST", e, t, n)
            },put: function(e, t, n) {
                return o("PUT", e, t, n)
            },trace: function(e, t, n) {
                return o("TRACE", e, t, n)
            }}, a = e.type ? e.type.toLowerCase() : "get";
        u[a](e.url, e, function(t, n) {
            200 === t || 0 === t && n.text() ? e.success(n.json(), t, null) : e.error(n.text(), t, null)
        })
    }
    function s(e, t) {
        "function" == typeof e && (t = e, e = {}), e = e || {}, q.extend(B, e), delete B.fixLng, "string" == typeof B.ns && (B.ns = {namespaces: [B.ns],defaultNs: B.ns}), "string" == typeof
        B.fallbackNS && (B.fallbackNS = [B.fallbackNS]), ("string" == typeof B.fallbackLng || "boolean" == typeof B.fallbackLng) && (B.fallbackLng = [B.fallbackLng]), B.interpolationPrefixEscaped = q.regexEscape(B.interpolationPrefix), B.interpolationSuffixEscaped = q.regexEscape(B.interpolationSuffix), B.lng || (B.lng = q.detectLanguage()), P = q.toLanguages(B.lng), A = P[0], q.log("currentLng set to: " + A), B.useCookie && DanaGetCookie(q).read(B.cookieName) !== A && DanaGetCookie(q).create(B.cookieName, A, B.cookieExpirationTime, B.cookieDomain), B.detectLngFromLocalStorage && "undefined" != typeof document && window.localstorage && window.localStorage.setItem("i18next_lng", A);
        var n = x;
        e.fixLng && (n = function(e, t) {
            return t = t || {}, t.lng = t.lng || n.lng, x(e, t)
        }, n.lng = A), R.setCurrentLng(A), O && B.setJqueryExt && m();
        var r;
        if (O && O.Deferred && (r = O.Deferred()), !B.resStore) {
            var i = q.toLanguages(B.lng);
            "string" == typeof B.preload && (B.preload = [B.preload]);
            for (var s = 0, o = B.preload.length; o > s; s++)
                for (var u = q.toLanguages(B.preload[s]), a = 0, f = u.length; f > a; a++)
                    i.indexOf(u[a]) < 0 && i.push(u[a
                    ]);
            return DanaMethodLoad("load", M.sync, i, B, function(e, i) {
                _ = i, H = !0, t && t(n), r && r.resolve(n)
            }), r ? r.promise() : void 0
        }
        return _ = B.resStore, H = !0, t && t(n), r && r.resolve(n), r ? r.promise() : void 0
    }
    function o(e, t) {
        "string" == typeof e && (e = [e]);
        for (var n = 0, r = e.length; r > n; n++)
            B.preload.indexOf(e[n]) < 0 && B.preload.push(e[n]);
        return s(t)
    }
    function u(e, t, n, r) {
        "string" != typeof t ? (n = t, t = B.ns.defaultNs) : B.ns.namespaces.indexOf(t) < 0 && B.ns.namespaces.push(t), _[e] = _[e] || {}, _[e][t] = _[e][t] || {}, r ? q.deepExtend(_[e][t], n) : q.extend(_[e][t], n)
    }
    function a(e, t) {
        "string" != typeof t && (t = B.ns.defaultNs), _[e] = _[e] || {}, _[e][t] = {}
    }
    function f(e, t, n, r) {
        "string" != typeof t ? (resource = t, t = B.ns.defaultNs) : B.ns.namespaces.indexOf(t) < 0 && B.ns.namespaces.push(t), _[e] = _[e] || {}, _[e][t] = _[e][t] || {};
        for (var i = n.split(B.keyseparator), s = 0, o = _[B.lng][t]; i[s]; )
            s == i.length - 1 ? o[i[s]] = r : (null == o[i[s]] && (o[i[s]] = {}), o = o[i[s]]), s++
    }
    function l(e, t, n) {
        "string" != typeof t ? (resource = t, t = B.ns.defaultNs) : B.ns.namespaces.indexOf(t) < 0 && B.ns.namespaces.push(t);
        for (var r in n)
            "string" == typeof
            n[r] && f(e, t, r, n[r])
    }
    function c(e) {
        B.ns.defaultNs = e
    }
    function h(e, t) {
        p([e], t)
    }
    function p(e, t) {
        var n = {dynamicLoad: B.dynamicLoad,resGetPath: B.resGetPath,getAsync: B.getAsync,customLoad: B.customLoad,ns: {namespaces: e,defaultNs: ""}}, r = q.toLanguages(B.lng);
        "string" == typeof B.preload && (B.preload = [B.preload]);
        for (var i = 0, s = B.preload.length; s > i; i++)
            for (var o = q.toLanguages(B.preload[i]), u = 0, a = o.length; a > u; u++)
                r.indexOf(o[u]) < 0 && r.push(o[u]);
        for (var f = [], l = 0, c = r.length; c > l; l++) {
            var h = !1, p = _[r[l]];
            if (p)
                for (var d = 0, v = e.length; v > d; d++)
                    p[e[d]] || (h = !0);
            else
                h = !0;
            h && f.push(r[l])
        }
        f.length ? M.sync._fetch(f, n, function(n, r) {
            var i = e.length * f.length;
            q.each(e, function(e, n) {
                B.ns.namespaces.indexOf(n) < 0 && B.ns.namespaces.push(n), q.each(f, function(e, s) {
                    _[s] = _[s] || {}, _[s][n] = r[s][n], i--, 0 === i && t && (B.useLocalStorage && M.sync._storeLocal(_), t())
                })
            })
        }) : t && t()
    }
    function d(e, t, n) {
        return ("function" == typeof t ? (n = t, t = {}) : t || (t = {}), t.lng = e, s(t, n))
    }
    function v() {
        return A
    }
    function m() {
        function e(e, t, n) {
            if (0 !== t.length) {
                var r = "text";
                if (0 ===
                t.indexOf("[")) {
                    var i = t.split("]");
                    t = i[1], r = i[0].substr(1, i[0].length - 1)
                }
                t.indexOf(";") === t.length - 1 && (t = t.substr(0, t.length - 2));
                var s;
                if ("html" === r)
                    s = B.defaultValueFromContent ? O.extend({defaultValue: e.html()}, n) : n, e.html(O.t(t, s));
                else if ("text" === r)
                    s = B.defaultValueFromContent ? O.extend({defaultValue: e.text()}, n) : n, e.text(O.t(t, s));
                else if ("prepend" === r)
                    s = B.defaultValueFromContent ? O.extend({defaultValue: e.html()}, n) : n, e.prepend(O.t(t, s));
                else if ("append" === r)
                    s = B.defaultValueFromContent ? O.extend({defaultValue: e.html()}, n) : n, e.append(O.t(t, s));
                else if (0 === r.indexOf("data-")) {
                    var o = r.substr("data-".length);
                    s = B.defaultValueFromContent ? O.extend({defaultValue: e.data(o)}, n) : n;
                    var u = O.t(t, s);
                    e.data(o, u), DanaMethodAttr("attr", e, r, u)
                } else
                    s = B.defaultValueFromContent ? O.extend({defaultValue: DanaMethodAttr("attr", e, r)}, n) : n, DanaMethodAttr("attr", e, r, O.t(t, s))
            }
        }
        function t(t, n) {
            var r = DanaMethodAttr("attr", t, B.selectorAttr);
            if (r || "undefined" == typeof r || r === !1 || (r = t.text() || t.val()), r) {
                var i = t, s = t.data("i18n-target");
                if (s && (i = t.find(s) || t), n || B.useDataAttrOptions !== !0 ||
                (n = t.data("i18n-options")), n = n || {}, r.indexOf(";") >= 0) {
                    var o = r.split(";");
                    O.each(o, function(t, r) {
                        "" !== r && e(i, r, n)
                    })
                } else
                    e(i, r, n);
                B.useDataAttrOptions === !0 && t.data("i18n-options", n)
            }
        }
        O.t = O.t || x, O.fn.i18n = function(e) {
            return this.each(function() {
                t(O(this), e);
                var n = O(this).find("[" + B.selectorAttr + "]");
                n.each(function() {
                    t(O(this), e)
                })
            })
        }
    }
    function g(e, t, n, r) {
        if (!e)
            return e;
        if (r = r || t, e.indexOf(r.interpolationPrefix || B.interpolationPrefix) < 0)
            return e;
        var i = r.interpolationPrefix ? q.regexEscape(r.interpolationPrefix) : B.interpolationPrefixEscaped, s = r.interpolationSuffix ? q.regexEscape(r.interpolationSuffix) : B.interpolationSuffixEscaped, o = "HTML" + s, u = t.replace && "object" == typeof t.replace ? t.replace : t;
        return q.each(u, function(t, u) {
            var a = n ? n + B.keyseparator + t : t;
            "object" == typeof u && null !== u ? e = g(e, u, a, r) : r.escapeInterpolation || B.escapeInterpolation ? (e = DanaMethodReplace("replace", e, new RegExp([i, a, o].join(""), "g"), q.regexReplacementEscape(u)), e = DanaMethodReplace("replace", e, new RegExp([i, a, s].join(""), "g"), q.regexReplacementEscape(q.escape(u)))) : e =
            DanaMethodReplace("replace", e, new RegExp([i, a, s].join(""), "g"), q.regexReplacementEscape(u))
        }), e
    }
    function y(e, t) {
        var n = ",", r = "{", i = "}", s = q.extend({}, t);
        for (delete s.postProcess; -1 != e.indexOf(B.reusePrefix) && (D++, !(D > B.maxRecursion)); ) {
            var o = e.lastIndexOf(B.reusePrefix), u = e.indexOf(B.reuseSuffix, o) + B.reuseSuffix.length, a = e.substring(o, u), f = DanaMethodReplace("replace", DanaMethodReplace("replace", a, B.reusePrefix, ""), B.reuseSuffix, "");
            if (o >= u)
                return q.error("there is an missing closing in following translation value", e), "";
            if (-1 != f.indexOf(n)) {
                var l = f.indexOf(n);
                if (-1 != f.indexOf(r, l) && -1 != f.indexOf(i, l)) {
                    var c = f.indexOf(r, l), h = f.indexOf(i, c) + i.length;
                    try {
                        s = q.extend(s, JSON.parse(f.substring(c, h))), f = f.substring(0, l)
                    } catch (p) {
                    }
                }
            }
            var d = C(f, s);
            e = DanaMethodReplace("replace", e, a, q.regexReplacementEscape(d))
        }
        return e
    }
    function b(e) {
        return e.context && ("string" == typeof e.context || "number" == typeof e.context)
    }
    function w(e, t) {
        return void 0 !== e.count && "string" != typeof e.count && R.needsPlural(t, e.count)
    }
    function E(e) {
        return void 0 !== e.indefinite_article && "string" != typeof e.indefinite_article &&
        e.indefinite_article
    }
    function S(e, t) {
        t = t || {};
        var n = T(e, t), r = k(e, t);
        return void 0 !== r || r === n
    }
    function x(e, t) {
        return t = t || {}, H ? (D = 0, C.apply(null, arguments)) : (q.log("i18next not finished initialization. you might have called t function before loading resources finished."), t.defaultValue || "")
    }
    function T(e, t) {
        return void 0 !== t.defaultValue ? t.defaultValue : e
    }
    function N() {
        for (var e = [], t = 1; t < arguments.length; t++)
            e.push(arguments[t]);
        return ({postProcess: "sprintf",sprintf: e})
    }
    function C(e, t) {
        if (t && "object" != typeof t ? "sprintf" === B.shortcutFunction ? t = N.apply(null, arguments) : "defaultValue" === B.shortcutFunction && (t = {defaultValue: t}) : t = t || {}, void 0 === e || null === e || "" === e)
            return ("");
        "string" == typeof e && (e = [e]);
        var n = e[0];
        if (e.length > 1)
            for (var r = 0; r < e.length && (n = e[r], !S(n, t)); r++)
                ;
        var i, s = T(n, t), o = k(n, t), u = t.lng ? q.toLanguages(t.lng, t.fallbackLng) : P, a = t.ns || B.ns.defaultNs;
        n.indexOf(B.nsseparator) > -1 && (i = n.split(B.nsseparator), a = i[0], n = i[1]), void 0 === o && B.sendMissing && "function" == typeof B.missingKeyHandler && (t.
        lng ? B.missingKeyHandler(u[0], a, n, s, u) : B.missingKeyHandler(B.lng, a, n, s, u));
        var f = t.postProcess || B.postProcess;
        void 0 !== o && f && U[f] && (o = U[f](o, n, t));
        var l = s;
        if (s.indexOf(B.nsseparator) > -1 && (i = s.split(B.nsseparator), l = i[1]), l === n && B.parseMissingKey && (s = B.parseMissingKey(s)), void 0 === o && (s = g(s, t), s = y(s, t), f && U[f])) {
            var c = T(n, t);
            o = U[f](c, n, t)
        }
        return void 0 !== o ? o : s
    }
    function k(e, t) {
        t = t || {};
        var n, r, i = T(e, t), s = P;
        if (!_)
            return i;
        if ("cimode" === s[0].toLowerCase())
            return i;
        if (t.lng && (s = q.toLanguages(t.lng, t.fallbackLng), !_[s[0]])) {
            var o = B.getAsync;
            B.getAsync = !1, DanaMethodLoad("load", M.sync, s, B, function(e, t) {
                q.extend(_, t), B.getAsync = o
            })
        }
        var u = t.ns || B.ns.defaultNs;
        if (e.indexOf(B.nsseparator) > -1) {
            var a = e.split(B.nsseparator);
            u = a[0], e = a[1]
        }
        if (b(t)) {
            n = q.extend({}, t), delete n.context, n.defaultValue = B.contextNotFound;
            var f = u + B.nsseparator + e + "_" + t.context;
            if (r = x(f, n), r != B.contextNotFound)
                return g(r, {context: t.context})
        }
        if (w(t, s[0])) {
            n = q.extend({}, t), delete n.count, n.defaultValue = B.pluralNotFound;
            var l = u + B.nsseparator + e + B.pluralSuffix
            , c = R.get(s[0], t.count);
            if (c >= 0 ? l = l + "_" + c : 1 === c && (l = u + B.nsseparator + e), r = x(l, n), r != B.pluralNotFound)
                return g(r, {count: t.count,interpolationPrefix: t.interpolationPrefix,interpolationSuffix: t.interpolationSuffix})
        }
        if (E(t)) {
            var h = q.extend({}, t);
            delete h.indefinite_article, h.defaultValue = B.indefiniteNotFound;
            var p = u + B.nsseparator + e + (t.count && !w(t, s[0]) || !t.count ? B.indefiniteSuffix : "");
            if (r = x(p, h), r != B.indefiniteNotFound)
                return r
        }
        for (var d, v = e.split(B.keyseparator), m = 0, S = s.length; S > m && void 0 === d; m++) {
            for (var N = s[m], L = 0, A = _[N] && _[N][u]; v[L]; )
                A = A && A[v[L]], L++;
            if (void 0 !== A) {
                var O = Object.prototype.toString.apply(A);
                if ("string" == typeof A)
                    A = g(A, t), A = y(A, t);
                else if ("[object Array]" !== O || B.returnObjectTrees || t.returnObjectTrees) {
                    if (null === A && B.fallbackOnNull === !0)
                        A = void 0;
                    else if (null !== A)
                        if (B.returnObjectTrees || t.returnObjectTrees) {
                            if ("[object Number]" !== O && "[object Function]" !== O && "[object RegExp]" !== O) {
                                var D = "[object Array]" === O ? [] : {};
                                q.each(A, function(n) {
                                    D[n] = C(u + B.nsseparator + e + B.keyseparator + n
                                    , t)
                                }), A = D
                            }
                        } else
                            B.objectTreeKeyHandler && "function" == typeof B.objectTreeKeyHandler ? A = B.objectTreeKeyHandler(e, A, N, u, t) : (A = "key '" + u + ":" + e + " (" + N + ")' " + "returned an object instead of string.", q.log(A))
                } else
                    A = A.join("\n"), A = g(A, t), A = y(A, t);
                "string" == typeof A && "" === A.trim() && B.fallbackOnEmpty === !0 && (A = void 0), d = A
            }
        }
        if (void 0 === d && !t.isFallbackLookup && (B.fallbackToDefaultNS === !0 || B.fallbackNS && B.fallbackNS.length > 0)) {
            if (t.isFallbackLookup = !0, B.fallbackNS.length) {
                for (var H = 0, j = B.fallbackNS.length; j > H; H++)
                    if (d = k(B.fallbackNS[H] + B.nsseparator + e, t)) {
                        var F = d.indexOf(B.nsseparator) > -1 ? d.split(B.nsseparator)[1] : d, I = i.indexOf(B.nsseparator) > -1 ? i.split(B.nsseparator)[1] : i;
                        if (F !== I)
                            break
                    }
            } else
                d = k(e, t);
            t.isFallbackLookup = !1
        }
        return d
    }
    function L() {
        var e, t = [];
        if ("undefined" != typeof window && (!function() {
            for (var e = DanaGetSearch(window.location).substring(1), n = e.split("&"), r = 0; r < n.length; r++) {
                var i = n[r].indexOf("=");
                if (i > 0) {
                    var s = n[r].substring(0, i), o = n[r].substring(i + 1);
                    t[s] = o
                }
            }
        }(), t[B.detectLngQS] && (e = t[B.detectLngQS
        ])), !e && "undefined" != typeof document && B.useCookie) {
            var n = DanaGetCookie(q).read(B.cookieName);
            n && (e = n)
        }
        return (!e && "undefined" != typeof document && window.localstorage && B.detectLngFromLocalStorage && (e = window.localStorage.getItem("i18next_lng")), e || "undefined" == typeof navigator || (e = navigator.language ? navigator.language : navigator.userLanguage), e || (e = B.fallbackLng[0]), e)
    }
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        if (null == this)
            throw new TypeError;
        var t = Object(this), n = t.length >>> 0;
        if (0 === n)
            return (-1);
        var r = 0;
        if (arguments.length > 0 && (r = Number(arguments[1]), r != r ? r = 0 : 0 != r && 1 / 0 != r && r != -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n)
            return (-1);
        for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > i; i++)
            if (i in t && t[i] === e)
                return i;
        return (-1)
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e) {
        if (null == this)
            throw new TypeError;
        var t = Object(this), n = t.length >>> 0;
        if (0 === n)
            return (-1);
        var r = n;
        arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : 0 != r && r != 1 / 0 && r != -(1 / 0) && (r = (r > 0 || -1) * Math.floor(
        Math.abs(r))));
        for (var i = r >= 0 ? Math.min(r, n - 1) : n - Math.abs(r); i >= 0; i--)
            if (i in t && t[i] === e)
                return i;
        return (-1)
    }), "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return DanaMethodReplace("replace", this, /^\s+|\s+$/g, "")
    });
    var A, O = void 0, M = {}, _ = {}, D = 0, P = [], H = !1;
    sync = {load: function(e, t, n) {
            t.useLocalStorage ? sync._loadLocal(e, t, function(r, i) {
                for (var s = [], o = 0, u = e.length; u > o; o++)
                    i[e[o]] || s.push(e[o]);
                s.length > 0 ? sync._fetch(s, t, function(e, t) {
                    q.extend(i, t), sync._storeLocal(t), n(null, i)
                }) : n(null, i)
            }) : sync._fetch(e, t, function(e, t) {
                n(null, t)
            })
        },_loadLocal: function(e, t, n) {
            var r = {}, i = (new Date).getTime();
            if (window.localStorage) {
                var s = e.length;
                q.each(e, function(e, o) {
                    var u = window.localStorage.getItem("res_" + o);
                    u && (u = JSON.parse(u), u.i18nStamp && u.i18nStamp + t.localStorageExpirationTime > i && (r[o] = u)), s--, 0 === s && n(null, r)
                })
            }
        },_storeLocal: function(e) {
            if (window.localStorage)
                for (var t in e)
                    e[t].i18nStamp = (new Date).getTime(), window.localStorage.setItem("res_" + t, JSON.stringify(e[t]))
        },_fetch: function(e, t, n) {
            var r =
            t.ns, i = {};
            if (t.dynamicLoad) {
                var s = function(e, t) {
                    n(null, t)
                };
                if ("function" == typeof t.customLoad)
                    t.customLoad(e, r.namespaces, t, s);
                else {
                    var o = g(t.resGetPath, {lng: e.join("+"),ns: r.namespaces.join("+")});
                    q.ajax({url: o,success: function(e) {
                            q.log("loaded: " + o), s(null, e)
                        },error: function(e, t, n) {
                            q.log("failed loading: " + o), s("failed loading resource.json error: " + n)
                        },dataType: "json",async: t.getAsync})
                }
            } else {
                var u, a = r.namespaces.length * e.length;
                q.each(r.namespaces, function(r, s) {
                    q.each(e, function(e, r) {
                        var o = function(e, t) {
                            e && (u = u || [], u.push(e)), i[r] = i[r] || {}, i[r][s] = t, a--, 0 === a && n(u, i)
                        };
                        "function" == typeof t.customLoad ? t.customLoad(r, s, t, o) : sync._fetchOne(r, s, t, o)
                    })
                })
            }
        },_fetchOne: function(e, t, n, r) {
            var i = g(n.resGetPath, {lng: e,ns: t});
            q.ajax({url: i,success: function(e) {
                    q.log("loaded: " + i), r(null, e)
                },error: function(e, t, n) {
                    if (t && 200 == t || e && e.status && 200 == e.status)
                        q.error("There is a typo in: " + i);
                    else if (t && 404 == t || e && e.status && 404 == e.status)
                        q.log("Does not exist: " + i);
                    else {
                        var s = t ? t : e && e.status ? e.status : null
                        ;
                        q.log(s + " when loading " + i)
                    }
                    r(n, {})
                },dataType: "json",async: n.getAsync})
        },postMissing: function(e, t, n, r, i) {
            var s = {};
            s[n] = r;
            var o = [];
            if ("fallback" === B.sendMissingTo && B.fallbackLng[0] !== !1)
                for (var u = 0; u < B.fallbackLng.length; u++)
                    o.push({lng: B.fallbackLng[u],url: g(B.resPostPath, {lng: B.fallbackLng[u],ns: t})});
            else if ("current" === B.sendMissingTo || "fallback" === B.sendMissingTo && B.fallbackLng[0] === !1)
                o.push({lng: e,url: g(B.resPostPath, {lng: e,ns: t})});
            else if ("all" === B.sendMissingTo)
                for (var u = 0, a = i.length; a > u; u++)
                    o.push({lng: i[u],url: g(B.resPostPath, {lng: i[u],ns: t})});
            for (var f = 0, l = o.length; l > f; f++) {
                var c = o[f];
                q.ajax({url: c.url,type: B.sendType,data: s,success: function() {
                        q.log("posted missing key '" + n + "' to: " + c.url);
                        for (var e = n.split("."), i = 0, s = _[c.lng][t]; e[i]; )
                            s = s[e[i]] = i === e.length - 1 ? r : s[e[i]] || {}, i++
                    },error: function() {
                        q.log("failed posting missing key '" + n + "' to: " + c.url)
                    },dataType: "json",async: B.postAsync})
            }
        }};
    var B = {lng: void 0,load: "all",preload: [],lowerCaseLng: !1,returnObjectTrees: !1,fallbackLng
        : ["dev"],fallbackNS: [],detectLngQS: "setLng",detectLngFromLocalStorage: !1,ns: "translation",fallbackOnNull: !0,fallbackOnEmpty: !1,fallbackToDefaultNS: !1,nsseparator: ":",keyseparator: ".",selectorAttr: "data-i18n",debug: !1,resGetPath: "locales/__lng__/__ns__.json",resPostPath: "locales/add/__lng__/__ns__",getAsync: !0,postAsync: !0,resStore: void 0,useLocalStorage: !1,localStorageExpirationTime: 6048e5,dynamicLoad: !1,sendMissing: !1,sendMissingTo: "fallback",sendType: "POST",interpolationPrefix: "__",interpolationSuffix: "__",reusePrefix: "$t(",reuseSuffix: ")",pluralSuffix: "_plural",pluralNotFound: ["plural_not_found", Math.random()].join(""),contextNotFound: ["context_not_found", Math.random()].join(""),escapeInterpolation: !1,indefiniteSuffix: "_indefinite",indefiniteNotFound: ["indefinite_not_found", Math.random()].join(""),setJqueryExt: !0,defaultValueFromContent: !0,useDataAttrOptions: !1,cookieExpirationTime: void 0,useCookie: !0,cookieName: "i18next",cookieDomain: void 0,objectTreeKeyHandler: void 0,postProcess: void 0
        ,parseMissingKey: void 0,missingKeyHandler: sync.postMissing,shortcutFunction: "sprintf"}, j = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#39;","/": "&#x2F;"}, F = {create: function(e, t, n, r) {
            var i;
            if (n) {
                var s = new Date;
                s.setTime(s.getTime() + 6e4 * n), i = "; expires=" + s.toGMTString()
            } else
                i = "";
            r = r ? "domain=" + r + ";" : "", DanaPutCookie(document, e + "=" + t + i + ";" + r + "path=/", 0)
        },read: function(e) {
            for (var t = e + "=", n = DanaGetCookie(document).split(";"), r = 0; r < n.length; r++) {
                for (var i = n[r]; " " == i.charAt(0); )
                    i = i.substring(1, i.length);
                if (0 === i.indexOf(t))
                    return i.substring(t.length, i.length)
            }
            return null
        },remove: function(e) {
            this.create(e, "", -1)
        }}, I = {create: function() {
        },read: function() {
            return null
        },remove: function() {
        }}, q = {extend: O ? O.extend : e,deepExtend: t,each: O ? O.each : n,ajax: O ? O.ajax : "undefined" != typeof document ? i : function() {
        },cookie: "undefined" != typeof document ? F : I,detectLanguage: L,escape: r,log: function(e) {
            B.debug && "undefined" != typeof console && console.log(e)
        },error: function(e) {
            "undefined" != typeof console && console.error(e)
        },getCountyIndexOfLng
        : function(e) {
            var t = 0;
            return (("nb-NO" === e || "nn-NO" === e) && (t = 1), t)
        },toLanguages: function(e) {
            var t = this.log, n = [], r = B.lngWhitelist || !1, i = function(e) {
                !r || r.indexOf(e) > -1 ? n.push(e) : t("rejecting non-whitelisted language: " + e)
            };
            if ("string" == typeof e && e.indexOf("-") > -1) {
                var s = e.split("-");
                e = B.lowerCaseLng ? s[0].toLowerCase() + "-" + s[1].toLowerCase() : s[0].toLowerCase() + "-" + s[1].toUpperCase(), "unspecific" !== B.load && i(e), "current" !== B.load && i(s[this.getCountyIndexOfLng(e)])
            } else
                i(e);
            for (var o = 0; o < B.fallbackLng.length; o++)
                -1 === n.indexOf(B.fallbackLng[o]) && B.fallbackLng[o] && n.push(B.fallbackLng[o]);
            return n
        },regexEscape: function(e) {
            return DanaMethodReplace("replace", e, /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },regexReplacementEscape: function(e) {
            return ("string" == typeof e ? DanaMethodReplace("replace", e, /\$/g, "$$$$") : e)
        }};
    q.applyReplacement = g;
    var R = {rules: {ach: {name: "Acholi",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},af: {name: "Afrikaans",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ak: {name: "Akan",numbers: [1, 2],plurals: function(
                e) {
                    return Number(e > 1)
                }},am: {name: "Amharic",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},an: {name: "Aragonese",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ar: {name: "Arabic",numbers: [0, 1, 2, 3, 11, 100],plurals: function(e) {
                    return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5)
                }},arn: {name: "Mapudungun",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},ast: {name: "Asturian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ay: {name: "Aymar\u00e1",numbers: [1],plurals: function() {
                    return 0
                }},az: {name: "Azerbaijani",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},be: {name: "Belarusian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},bg: {name: "Bulgarian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},bn: {name: "Bengali",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},bo: {name: "Tibetan",numbers: [1],plurals: function() {
                    return 0
                }},br: {name: "Breton",numbers: [1, 2],plurals
                : function(e) {
                    return Number(e > 1)
                }},bs: {name: "Bosnian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},ca: {name: "Catalan",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},cgg: {name: "Chiga",numbers: [1],plurals: function() {
                    return 0
                }},cs: {name: "Czech",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e ? 0 : e >= 2 && 4 >= e ? 1 : 2)
                }},csb: {name: "Kashubian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},cy: {name: "Welsh",numbers: [1, 2, 3, 8],plurals: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                }},da: {name: "Danish",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},de: {name: "German",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},dz: {name: "Dzongkha",numbers: [1],plurals: function() {
                    return 0
                }},el: {name: "Greek",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},en: {name: "English",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},eo: {name: "Esperanto"
                ,numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},es: {name: "Spanish",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},es_ar: {name: "Argentinean Spanish",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},et: {name: "Estonian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},eu: {name: "Basque",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},fa: {name: "Persian",numbers: [1],plurals: function() {
                    return 0
                }},fi: {name: "Finnish",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},fil: {name: "Filipino",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},fo: {name: "Faroese",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},fr: {name: "French",numbers: [1, 2],plurals: function(e) {
                    return Number(e >= 2)
                }},fur: {name: "Friulian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},fy: {name: "Frisian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ga: {name: "Irish",numbers: [1, 2, 3, 7, 11],plurals: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 7 > e ? 2 : 11 > e ? 3 : 4)
                }},gd: {name: "Scottish Gaelic"
                ,numbers: [1, 2, 3, 20],plurals: function(e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && 20 > e ? 2 : 3)
                }},gl: {name: "Galician",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},gu: {name: "Gujarati",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},gun: {name: "Gun",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},ha: {name: "Hausa",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},he: {name: "Hebrew",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},hi: {name: "Hindi",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},hr: {name: "Croatian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},hu: {name: "Hungarian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},hy: {name: "Armenian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ia: {name: "Interlingua",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},id: {name: "Indonesian",numbers: [1],plurals: function() {
                    return 0
                }},is: {name: "Icelandic",numbers
                : [1, 2],plurals: function(e) {
                    return Number(1 != e % 10 || 11 == e % 100)
                }},it: {name: "Italian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ja: {name: "Japanese",numbers: [1],plurals: function() {
                    return 0
                }},jbo: {name: "Lojban",numbers: [1],plurals: function() {
                    return 0
                }},jv: {name: "Javanese",numbers: [0, 1],plurals: function(e) {
                    return Number(0 !== e)
                }},ka: {name: "Georgian",numbers: [1],plurals: function() {
                    return 0
                }},kk: {name: "Kazakh",numbers: [1],plurals: function() {
                    return 0
                }},km: {name: "Khmer",numbers: [1],plurals: function() {
                    return 0
                }},kn: {name: "Kannada",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ko: {name: "Korean",numbers: [1],plurals: function() {
                    return 0
                }},ku: {name: "Kurdish",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},kw: {name: "Cornish",numbers: [1, 2, 3, 4],plurals: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                }},ky: {name: "Kyrgyz",numbers: [1],plurals: function() {
                    return 0
                }},lb: {name: "Letzeburgesch",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ln: {name: "Lingala",numbers: [1, 2],plurals
                : function(e) {
                    return Number(e > 1)
                }},lo: {name: "Lao",numbers: [1],plurals: function() {
                    return 0
                }},lt: {name: "Lithuanian",numbers: [1, 2, 10],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},lv: {name: "Latvian",numbers: [1, 2, 0],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : 0 !== e ? 1 : 2)
                }},mai: {name: "Maithili",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},mfe: {name: "Mauritian Creole",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},mg: {name: "Malagasy",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},mi: {name: "Maori",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},mk: {name: "Macedonian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 == e || 1 == e % 10 ? 0 : 1)
                }},ml: {name: "Malayalam",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},mn: {name: "Mongolian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},mnk: {name: "Mandinka",numbers: [0, 1, 2],plurals: function(e) {
                    return Number(1 == e ? 1 : 2)
                }},mr: {name: "Marathi",numbers: [1, 2],plurals
                : function(e) {
                    return Number(1 != e)
                }},ms: {name: "Malay",numbers: [1],plurals: function() {
                    return 0
                }},mt: {name: "Maltese",numbers: [1, 2, 11, 20],plurals: function(e) {
                    return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && 11 > e % 100 ? 1 : e % 100 > 10 && 20 > e % 100 ? 2 : 3)
                }},nah: {name: "Nahuatl",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},nap: {name: "Neapolitan",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},nb: {name: "Norwegian Bokmal",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ne: {name: "Nepali",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},nl: {name: "Dutch",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},nn: {name: "Norwegian Nynorsk",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},no: {name: "Norwegian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},nso: {name: "Northern Sotho",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},oc: {name: "Occitan",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},or: {name: "Oriya",numbers: [2, 1],plurals: function(e) {
                    return Number(1 != e
                    )
                }},pa: {name: "Punjabi",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},pap: {name: "Papiamento",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},pl: {name: "Polish",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},pms: {name: "Piemontese",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ps: {name: "Pashto",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},pt: {name: "Portuguese",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},pt_br: {name: "Brazilian Portuguese",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},rm: {name: "Romansh",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},ro: {name: "Romanian",numbers: [1, 2, 20],plurals: function(e) {
                    return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && 20 > e % 100 ? 1 : 2)
                }},ru: {name: "Russian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},sah: {name: "Yakut",numbers: [1],plurals: function() {
                    return 0
                }},sco: {name: "Scots"
                ,numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},se: {name: "Northern Sami",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},si: {name: "Sinhala",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},sk: {name: "Slovak",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e ? 0 : e >= 2 && 4 >= e ? 1 : 2)
                }},sl: {name: "Slovenian",numbers: [5, 1, 2, 3],plurals: function(e) {
                    return Number(1 == e % 100 ? 1 : 2 == e % 100 ? 2 : 3 == e % 100 || 4 == e % 100 ? 3 : 0)
                }},so: {name: "Somali",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},son: {name: "Songhay",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},sq: {name: "Albanian",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},sr: {name: "Serbian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},su: {name: "Sundanese",numbers: [1],plurals: function() {
                    return 0
                }},sv: {name: "Swedish",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},sw: {name: "Swahili",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }
            },ta: {name: "Tamil",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},te: {name: "Telugu",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},tg: {name: "Tajik",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},th: {name: "Thai",numbers: [1],plurals: function() {
                    return 0
                }},ti: {name: "Tigrinya",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},tk: {name: "Turkmen",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},tr: {name: "Turkish",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},tt: {name: "Tatar",numbers: [1],plurals: function() {
                    return 0
                }},ug: {name: "Uyghur",numbers: [1],plurals: function() {
                    return 0
                }},uk: {name: "Ukrainian",numbers: [1, 2, 5],plurals: function(e) {
                    return Number(1 == e % 10 && 11 != e % 100 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                }},ur: {name: "Urdu",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},uz: {name: "Uzbek",numbers: [1, 2],plurals: function(e) {
                    return Number(e > 1)
                }},vi: {name: "Vietnamese",numbers: [1],plurals: function() {
                    return 0
                }},wa: {name: "Walloon",numbers: [1, 2]
                ,plurals: function(e) {
                    return Number(e > 1)
                }},wo: {name: "Wolof",numbers: [1],plurals: function() {
                    return 0
                }},yo: {name: "Yoruba",numbers: [1, 2],plurals: function(e) {
                    return Number(1 != e)
                }},zh: {name: "Chinese",numbers: [1],plurals: function() {
                    return 0
                }}},addRule: function(e, t) {
            R.rules[e] = t
        },setCurrentLng: function(e) {
            if (!R.currentRule || R.currentRule.lng !== e) {
                var t = e.split("-");
                R.currentRule = {lng: e,rule: R.rules[t[0]]}
            }
        },needsPlural: function(e, t) {
            var n, r = e.split("-");
            return n = R.currentRule && R.currentRule.lng === e ? R.currentRule.rule : R.rules[r[q.getCountyIndexOfLng(e)]], n && n.numbers.length <= 1 ? !1 : 1 !== this.get(e, t)
        },get: function(e, t) {
            function n(t, n) {
                var r;
                if (r = R.currentRule && R.currentRule.lng === e ? R.currentRule.rule : R.rules[t]) {
                    var i;
                    i = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n));
                    var s = r.numbers[i];
                    return 2 === r.numbers.length && 1 === r.numbers[0] && (2 === s ? s = -1 : 1 === s && (s = 1)), s
                }
                return 1 === n ? "1" : "-1"
            }
            var r = e.split("-");
            return n(r[q.getCountyIndexOfLng(e)], t)
        }}, U = {}, z = function(e, t) {
        U[e] = t
    }, W = function() {
        function e(e) {
            return Object
            .prototype.toString.call(e).slice(8, -1).toLowerCase()
        }
        function t(e, t) {
            for (var n = []; t > 0; n[--t] = e)
                ;
            return n.join("")
        }
        var n = function() {
            return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])), n.format.call(null, n.cache[arguments[0]], arguments)
        };
        return n.format = function(n, r) {
            var i, s, o, u, a, f, l, c = 1, h = n.length, p = "", d = [];
            for (s = 0; h > s; s++)
                if (p = e(n[s]), "string" === p)
                    d.push(n[s]);
                else if ("array" === p) {
                    if (u = n[s], u[2])
                        for (i = r[c], o = 0; o < u[2].length; o++) {
                            if (!i.hasOwnProperty(u[2][o]))
                                throw W('[sprintf] property "%s" does not exist', u[2][o]);
                            i = i[u[2][o]]
                        }
                    else
                        i = u[1] ? r[u[1]] : r[c++];
                    if (/[^s]/.test(u[8]) && "number" != e(i))
                        throw W("[sprintf] expecting number but found %s", e(i));
                    switch (u[8]) {
                        case "b":
                            i = DanaMethodToString("toString", i, 2);
                            break;
                        case "c":
                            i = String.fromCharCode(i);
                            break;
                        case "d":
                            i = parseInt(i, 10);
                            break;
                        case "e":
                            i = u[7] ? i.toExponential(u[7]) : i.toExponential();
                            break;
                        case "f":
                            i = u[7] ? parseFloat(i).toFixed(u[7]) : parseFloat(i);
                            break;
                        case "o":
                            i = DanaMethodToString("toString", i, 8);
                            break;
                        case "s":
                            i = (i = String(DanaStringCheckLink(i))) && u[7] ? i.substring
                            (0, u[7]) : i;
                            break;
                        case "u":
                            i = Math.abs(i);
                            break;
                        case "x":
                            i = DanaMethodToString("toString", i, 16);
                            break;
                        case "X":
                            i = DanaMethodToString("toString", i, 16).toUpperCase()
                    }
                    i = /[def]/.test(u[8]) && u[3] && i >= 0 ? "+" + i : i, f = u[4] ? "0" == u[4] ? "0" : u[4].charAt(1) : " ", l = u[6] - String(DanaStringCheckLink(i)).length, a = u[6] ? t(f, l) : "", d.push(u[5] ? i + a : a + i)
                }
            return d.join("")
        }, n.cache = {}, n.parse = function(e) {
            for (var t = e, n = [], r = [], i = 0; t; ) {
                if (null !== (n = /^[^\x25]+/.exec(t)))
                    r.push(n[0]);
                else if (null !== (n = /^\x25{2}/.exec(t)))
                    r.push("%");
                else {
                    if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))
                        throw "[sprintf] huh?";
                    if (n[2]) {
                        i |= 1;
                        var s = [], o = n[2], u = [];
                        if (null === (u = /^([a-z_][a-z_\d]*)/i.exec(o)))
                            throw "[sprintf] huh?";
                        for (s.push(u[1]); "" !== (o = o.substring(u[0].length)); )
                            if (null !== (u = /^\.([a-z_][a-z_\d]*)/i.exec(o)))
                                s.push(u[1]);
                            else {
                                if (null === (u = /^\[(\d+)\]/.exec(o)))
                                    throw "[sprintf] huh?";
                                s.push(u[1])
                            }
                        n[2] = s
                    } else
                        i |= 2;
                    if (3 === i)
                        throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                    r.push(n)
                }
                t = t.substring(n[0].length)
            }
            return r
        }, n
    }(), X = function(e, t) {
        return t.unshift(e), W.apply(null, t)
    };
    return z("sprintf", function(e, t, n) {
        return n.sprintf ? "[object Array]" === Object.prototype.toString.apply(n.sprintf) ? X(e, n.sprintf) : "object" == typeof n.sprintf ? W(e, n.sprintf) : e : e
    }), M.init = s, M.setLng = d, M.preload = o, M.addResourceBundle = u, M.addResource = f, M.addResources = l, M.removeResourceBundle = a, M.loadNamespace = h, M.loadNamespaces = p, M.setDefaultNamespace = c, M.t = x, M.translate = x, M.exists = S, M.detectLanguage = q.detectLanguage, M.pluralExtensions = R, M.sync = sync, M.functions = q, M.lng = v, M.addPostProcessor = z, M.options = B, M
}), define("vent", ["backbone", "marionette"], function(e, t) {
    return new Backbone.Wreqr.EventAggregator
}), define("utils/commonUtil", [], function() {
    return ({getParameterByName: function(e) {
            e = DanaMethodReplace("replace", DanaMethodReplace("replace", e, /[\[]/, "\\["), /[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"), n = t.exec(DanaGetSearch(location));
            return n == null ? "" : decodeURIComponent(DanaMethodReplace("replace", n[1], /\+/g, " "))
        },getHashParameterByName: function(e) {
            e = DanaMethodReplace("replace", DanaMethodReplace("replace", e, /[\[]/, "\\["), /[\]]/
            , "\\]");
            var t = new RegExp("[\\?&#]" + e + "=([^&#]*)"), n = t.exec(DanaGetHash(location));
            return n == null ? "" : decodeURIComponent(DanaMethodReplace("replace", n[1], /\+/g, " "))
        },readCookie: function(e) {
            if (e == "ESESSIONID")
                return DanaMethodAttr("attr", $("div[id^='MayankTestId_']"), "id").split("_")[1];
            var t = e + "=", n = DanaGetCookie(document).split(";");
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                while (i.charAt(0) == " ")
                    i = i.substring(1, i.length);
                if (i.indexOf(t) == 0)
                    return i.substring(t.length, i.length)
            }
            return null
        },setCookie: function(e, t, n) {
            var r, i = new Date;
            return i.setTime(i.getTime() + n), r = "; expires=" + i.toGMTString(), DanaPutCookie(document, e + "=" + t + r + "; path=/", 0), null
        },inArrayCaseInsensitive: function(e, t) {
            var n = -1, r = n;
            return $.each(t, function(t, i) {
                r == n && i.toLowerCase() == e.toLowerCase() && (r = t)
            }), r
        },updateQueryStringWithHashSupport: function(e, t, n) {
            var r = new RegExp("([?|&])" + t + "=.*?(&|#|$)", "i");
            if (e.match(r))
                return DanaMethodReplace("replace", e, r, "$1" + t + "=" + n + "$2");
            var i = "", s = e.indexOf("?") !== -1 ? "&" : "?";
            return e.indexOf("#") !== -1 && (i = DanaMethodReplace("replace", e, /.*#/, "#"), e = DanaMethodReplace("replace", e, /#.*/, "")), e + s + t + "=" + n + i
        }})
}),
function(e, t) {
    typeof exports == "object" && e.require ? module.exports = t(require("underscore"), require("backbone")) : typeof define == "function" && define.amd ? define("models/../../vendor/backbone.localStorage", ["underscore", "backbone"], function(n, r) {
        return t(n || e._, r || e.Backbone)
    }) : t(_, Backbone)
}(this, function(e, t) {
    function n() {
        return (DanaMethodToString("toString", ((1 + Math.random()) * 65536 | 0), 16).substring(1))
    }
    function r() {
        return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
    }
    return t.LocalStorage = window.Store = function(e) {
        if (!this.localStorage)
            throw "Backbone.localStorage: Environment does not support localStorage.";
        this.name = e;
        var t = this.localStorage().getItem(this.name);
        this.records = t && t.split(",") || []
    }, e.extend(t.LocalStorage.prototype, {save: function() {
            this.localStorage().setItem(this.name, this.records.join(","))
        },create: function(e) {
            return e.id || (e.id = r(), e.set(e.idAttribute, e.id)), this.localStorage().setItem(this.name + "-" + e.id, JSON.stringify(e)), this.records.push(DanaMethodToString("toString", e.id)), DanaMethodSave("save", this), this.find(e)
        },update: function(
        t) {
            return this.localStorage().setItem(this.name + "-" + t.id, JSON.stringify(t)), e.include(this.records, DanaMethodToString("toString", t.id)) || this.records.push(DanaMethodToString("toString", t.id)), DanaMethodSave("save", this), this.find(t)
        },find: function(e) {
            return this.jsonData(this.localStorage().getItem(this.name + "-" + e.id))
        },findAll: function() {
            return ((e.chain || e)(this.records).map(function(e) {
                return this.jsonData(this.localStorage().getItem(this.name + "-" + e))
            }, this).compact().value())
        },destroy: function(t) {
            return t.isNew() ? !1 : (this.localStorage().removeItem(this.name + "-" + t.id), this.records = e.reject(this.records, function(e) {
                return e === DanaMethodToString("toString", t.id)
            }), DanaMethodSave("save", this), t)
        },localStorage: function() {
            return localStorage
        },jsonData: function(e) {
            return e && JSON.parse(e)
        },_clear: function() {
            var t = this.localStorage(), n = new RegExp("^" + this.name + "-");
            t.removeItem(this.name), (e.chain || e)(t).keys().filter(function(e) {
                return n.test(e)
            }).each(function(e) {
                t.removeItem(e)
            }), this.records.length = 0
        },_storageSize: function() {
            return this.localStorage().length
        }}), t.LocalStorage.sync =
    window.Store.sync = t.localSync = function(e, n, r) {
        var i = n.localStorage || n.collection.localStorage, s, o, u = t.$.Deferred && t.$.Deferred();
        try {
            switch (e) {
                case "read":
                    s = n.id != undefined ? i.find(n) : i.findAll();
                    break;
                case "create":
                    s = i.create(n);
                    break;
                case "update":
                    s = i.update(n);
                    break;
                case "delete":
                    s = i.destroy(n)
            }
        } catch (a) {
            a.code === 22 && i._storageSize() === 0 ? o = "Private browsing is unsupported" : o = a.message
        }
        return s ? (r && r.success && (t.VERSION === "0.9.10" ? r.success(n, s, r) : r.success(s)), u && u.resolve(s)) : (o = o ? o : "Record Not Found", r && r.error && (t.VERSION === "0.9.10" ? r.error(n, o, r) : r.error(o)), u && u.reject(o)), r && r.complete && r.complete(s), u && u.promise()
    }, t.ajaxSync = t.sync, t.getSyncMethod = function(e) {
        return e.localStorage || e.collection && e.collection.localStorage ? t.localSync : t.ajaxSync
    }, t.sync = function(e, n, r) {
        return t.getSyncMethod(n).apply(this, [e, n, r])
    }, t.LocalStorage
}), define("models/ReaderArgs", ["backbone", "../../vendor/backbone.localStorage"], function(e) {
    return e.Model.extend({localStorage: new e.LocalStorage("qv-reader-backbone"
        ),defaults: {docid: "",page: 1,next: "",prev: "",session: ""}})
}), define("text", {load: function(e) {
        throw new Error("Dynamic load not allowed: " + e)
    }}), define("text!templates/readerSkeltonLayoutTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="readerLayoutTemplate">\n      <div id="toolBarLayoutRegion" accesskey="3"></div>\n      <div id="readerContent">\n        <div id="readerContentInner">\n         <div id="sideBarLayoutRegion" accesskey="5" ></div>\n         <div id="panelLayoutRegion" accesskey="6"></div>\n          <div id="mainLayoutRegion" role="main" accesskey="4">\n           <div id="mainViewer" ></div>\n          </div>\n        </div>\n      </div>\n  </script>\n\n')
}), define("text!templates/readerToolBarTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="toolbar">\n     <nav id="navbar-toolbar" class="navbar navbar-default navbar-static-top" role="toolbar">\n        <div class="navbar-header">\n          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#toolbar-navbar-collapse">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n        </div>\n        <div class="navbar-collapse collapse" id="toolbar-navbar-collapse">\n     <ul class="nav navbar-nav pull-right">\n      <li>\n        <span class="btn-tools-group">\n          <div>\n           <button id="toolDownload" aria-label="<%= _t(\'rr_fd\') %>"  data-toggle="modal" title="<%= _t(\'rr_fd\') %>" class="icon-download"><span class="btn-label-hidden"><%= _t(\'rr_fd\') %></span></button>\n           <button id="toolChapterDownload" aria-label=\'<%= _t(\'rr_chapter_d\') %>\' data-toggle="modal" title="<%= _t(\'rr_chapter_d\') %>" class="icon-chapter-download" data-target="#printModal"><span class="btn-label-hidden"><%= _t(\'rr_chapter_d\') %></span></button>\n            <button id="toolCopy" aria-label="<%= _t(\'rr_copy\') %>"   data-toggle="tooltip" title="<%= _t(\'rr_copy\') %>" class="icon-copy" ><span class="btn-label-hidden"><%= _t(\'rr_copy\') %></span></button>\n           <button id="toolPrint" aria-label="<%= _t(\'rr_print_PDF\') %>"  data-toggle="modal" title="<%= _t(\'rr_print_PDF\') %>" class="icon-print" data-target="#printModal" ><span class="btn-label-hidden"><%= _t(\'rr_print_PDF\') %></span></button>\n           <button id="toolAddToBookshelf" aria-label="<%= _t(\'rr_add_bookshelf\') %>"  data-toggle="modal" title="<%= _t(\'rr_add_bookshelf\') %>" class="icon-bookshelf-add"><span class="btn-label-hidden"><%= _t(\'rr_add_bookshelf\') %></span></button>\n           <button id="toolLink" aria-label="<%= _t(\'rr_share_link\') %>"    data-toggle="tooltip" title="<%= _t(\'rr_share_link\') %>" class="icon-link" data-target="#shareBookLink"><span class="btn-label-hidden"><%= _t(\'rr_share_link\') %></span></button>\n            <button id="toolCite" aria-label="<%= _t(\'rr_get_citation\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_get_citation\') %>" class="icon-book-cite"><span class="btn-label-hidden"><%= _t(\'rr_get_citation\') %></span></button>\n          </div>\n        </span>\n     </li>\n \n      <li>\n        <span class="btn-tools-group">\n          <div>\n           <button id="toolHighlight" aria-label="<%= _t(\'rr_highlight\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_highlight\') %>" class="icon-highlight"><span class="btn-label-hidden"><%= _t(\'rr_highlight\') %></span></button>\n            <button id="toolNote" aria-label="<%= _t(\'rr_add_note\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_add_note\') %>" class="icon-note"><span class="btn-label-hidden"><%= _t(\'rr_add_note\') %></span></button>\n           <button id="toolBookmark" aria-label="<%= _t(\'rr_add_bookmark\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_add_bookmark\') %>" class="icon-bookmark"><span class="btn-label-hidden"><%= _t(\'rr_add_bookmark\') %></span></button>\n         </div>\n        </span>\n     </li>\n \n      \n      <li>\n        <span class="btn-tools-group ebStaySeen">\n         <button class="icon-page-zoom-out" aria-label="<%= _t(\'rr_zoom_out\') %>"  title="<%= _t(\'rr_zoom_out\') %>" data-toggle="tooltip" id="tool-viewsmaller"><span class="btn-label-hidden"><%= _t(\'rr_zoom_out\') %></span></button>\n          <button class="icon-page-zoom-in" aria-label="<%= _t(\'rr_zoom_in\') %>"  title="<%= _t(\'rr_zoom_in\') %>" data-toggle="tooltip" id="tool-viewlarger"><span class="btn-label-hidden"><%= _t(\'rr_zoom_in\') %></span></button>\n         <span class="dropdown">\n           <button type="button" id="zoom-dropdown-button" aria-label=\'<%= _t(\'rr_zoomMenu\') %>\' title="<%= _t(\'rr_zoom\') %>" data-toggle="dropdown"  class="dropdown-toggle icon-page-zoom-menu"><span class="btn-label-hidden"><%= _t(\'rr_zoomMenu\') %></span></button>\n            <ul aria-labelledby="zoom-dropdown-button" role="menu" class="dropdown-menu">\n             <li role="presentation"><a id="tool-fitToWidth" href="#" tabindex="-1" role="menuitem"><%= _t(\'rr_fit_width\') %></a></li>\n             <li role="presentation"><a id="tool-fitToHeight" href="#" tabindex="-1" role="menuitem"><%= _t(\'rr_fit_page\') %></a></li>\n           </ul>\n         </span>\n       </span>\n     </li>\n\n     <li>\n        <span id="tool-pageloc" class="ebStaySeen"><!-- page location -->\n         <button class="btn-page-number" aria-label="<%= _t(\'rr_goToPageAria\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_go_to_page\') %>" ><span class="dotted"><%= _t(\'rr_page\') %> </span><span class="dotted"  id=\'tool-current-page-loc\' >1</span><span class="total-number-of-pages">of 350</span></button>\n          <input  id=\'current-page\' type=\'hidden\' value="1" size="2" />\n       </span>\n     </li>\n\n     <li>\n        <span id="tool-pagegoto"  class="ebStaySeen">\n         <div class="input-group col-xs-1" role="goToPage" >\n           <input class="form-control" type="text" placeholder=\'<%= _t(\'rr_go_to_page\') %>\' id="tool-pagegoto-text" maxlength="6" value=""/>\n            <span class="input-group-addon total-number-of-pages"> of 350</span>\n           </div>\n        </span>\n     </li>\n\n     <li>\n        <span class=\'btn-tools-group btn-tools-group-last\'>\n         <button id="tool-pager-prev"  aria-label="<%= _t(\'rr_goToPrePageAria\') %>"   data-toggle="tooltip" title="<%= _t(\'rr_previous\') %>"  class="icon-page-prev"><span class="btn-label-hidden"><%= _t(\'rr_goToPrePageAria\') %></span></button>\n          <button id="tool-pager-next" aria-label="<%= _t(\'rr_goToNexPageAria\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_next\') %>"  class="icon-page-next"><span class="btn-label-hidden"><%= _t(\'rr_goToNexPageAria\') %></span></button>\n        </span>\n     </li>\n          </ul>\n        </div><!-- EndOf Tools nav-collapse -->\n      </nav> <!-- EndOf Tools nav -->\n\n\n</script>\n')
}), define("text!templates/readerShareLinkTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="shareLinkTemp">\n   \n  <div class="modal fade" id="shareBookLink" tabindex="-1" role="dialog"  aria-hidden="true" >\n    <div class="modal-dialog">\n      <div class="modal-content">\n       <div class="modal-header">\n          <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only">Close</span></button>\n         <h4 class="modal-title" id="myShareModalLabel"><%= _t(\'rr_share_this_book\') %></h4>\n       </div>\n        <div class="modal-body">\n          <div class="modal-book-title"><%= BiblioData.title !== "undefined"?BiblioData.title:_t(\'rr_na\')%><span class=\'modal-book-byline\'> <%=_t(\'rr_by\') %> </span><span class=\'modal-book-author\'><% if(typeof BiblioData.contibutors !== "undefined"){ var tmpCtbs= (BiblioData.contibutors.slice(0,3)); %><%=tmpCtbs.join()%> <% }else{%> <%=_t(\'rr_na\') %> <% }%></span></div>\n        </div>\n  \n      <form id="shareLinkForm" class="form-horizontal" role="form">\n       <div class="form-group row">\n          <label for="shareUrl" class="col-sm-3 control-label modal-control-label"><%= _t(\'rr_copy_link\') %></label>\n          <div class="col-sm-8">\n          <textarea type="textarea" rows=\'4\' style="resize:none" class="form-control" name="shareUrl" id="shareUrl"><%= shareURL %></textarea>\n          <% if ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/i) ) {%>\n            <p class="modal-helptext"><%= _t(\'rr_copy_option_md\') %></p>\n          <%}else{%>  \n            <p class="modal-helptext">\n               <% if (navigator.appVersion.indexOf("Mac")!=-1) { %> \n                <%= _t(\'rr_command_c\') %>\n                <% } else { %> \n                      <%= _t(\'rr_control_c\') %>      \n                <% } %>             \n           </p>\n          <%}%>\n         </div>\n        </div>\n        <div class="form-group row" >\n         <div class="col-sm-11 col-sm-offset-1"><span class="modal-tip-helptext"> <strong><%= _t(\'rr_tip\') %></strong></span> <strong><%= _t(\'rr_back_to_current_page\') %></strong> </div>     \n        </div>\n      </form>\n     <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_close\') %></button>\n       <button type="button" class="btn btn-primary" data-dismiss="modal" id="shareLinkDone" ><%= _t(\'rr_done\') %></button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n </div><!-- /.modal -->\n \n</script>\n')
}), define("text!templates/readerCopyTextTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="copyTextTemp">\n  \n  <!-- Modal -->\n  <div class="modal fade" id="copyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n   <div class="modal-dialog">\n      <div class="modal-content">\n       <div class="modal-header">\n          <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n         <h4 class="modal-title" id="myModalLabel"><%= _t(\'rr_copy\') %></h4>\n       </div>\n         <div class="modal-body modal-tightspace-bottom"> \n        <form id="copyModalForm" class="form-horizontal" role="form">\n           <div class="">\n            <% if(typeof (status) !== "undefined" && (status === "false" || status === "FAILURE" )) {%>\n             <div class="alert alert-danger alert-error">\n                    <% if (typeof errorCode !== "undefined" && (errorCode === "SESSION_TIMED_OUT" || errorCode === "SESSION_TIMEDOUT")) {   %>\n                           <%=   _t(\'rr_session_timed_out_refresh\')   %>\n                    <%  } else {   %>\n                        <%=wrapDashErrorMessage()%>\n                     <% }  %>               \n              </div>              \n            <% } %>\n           \n            <% if(typeof (error) !== "undefined" && error === false) {%>\n               <textarea class="form-control" rows="10" name="copyContent" id="copyContent" style="resize:none"><%=copiedText%>&#10;<%=citation%></textarea>\n              <% if ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/i) ) {%>\n                <p class="modal-helptext"><%= _t(\'rr_copy_option_md\') %></p>\n              <%}else{%>  \n                <p class="modal-helptext">\n                   <% if (navigator.appVersion.indexOf("Mac")!=-1) { %>\n                       <%= _t(\'rr_command_c\') %>\n                   <% } else { %>\n                        <%= _t(\'rr_control_c\') %>\n                   <% } %>                 \n                </p>\n              <%}%>             \n            <% } %>\n             </div>\n      \n      \n          <div class="modal-footer modal-tightspace-top">\n           <button id=\'modalCancel\' type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n           <button id=\'modalDone\' type="button" class="btn btn-primary"  id="copyTextDone" data-dismiss="modal" ><%= _t(\'rr_done\') %></button>\n             </div>\n            </form>\n         </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n </div><!-- /.modal -->\n\n\n\n\n\n \n</script>\n')
}), define("text!templates/readerPrintMainWrapperTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n\n<!-- Modal -->\n<div class="modal fade" id="printModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n        <h4 class="modal-title" id="myModalLabel"><%= _t(\'rr_print_PDF\') %></h4>\n      </div>\n\n    <form class="form-horizontal" role="form">\n\n      <!-- DefaultScreensContainers -->\n     <div id="printDefaultWrapper">\n      \n      </div>\n\n      </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n\n</script>')
}), define("text!templates/readerPrintRadioTemplate.tmpl", [], function(
) {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n      <!-- print screen 1 -->\n     <div id="print1" class=\'print-screen\'>\n        <div class="form-group">\n        <label for="inputEmail3" class="col-sm-4 control-label modal-control-label"><%= _t(\'rr_page_range\') %></label>\n        <div class="col-sm-8">\n        \n          <!-- page range radio buttons -->\n         <div class="radio">\n           <label>\n           <input type="radio" name="optionsRadios" id="optionsRadios1" value="page" checked>\n            <%= _t(\'rr_current_page\') %>\n            </label>\n            <div id=\'printCurrentPageError\' class="text-danger"></div>\n          </div>\n          <div class="radio">\n           <label for="optionsRadios2">\n            <input type="radio" name="optionsRadios" id="optionsRadios2" value="range">\n           <%= _t(\'rr_pages_from\') %> </label> <input type="text" name="startPage" id="startPage" size=\'3\'> <%= _t(\'rr_to\') %> <input type="text" name="endPage" id="endPage" size=\'3\'>\n            <div id=\'printPageAllowance\'></div>\n           <div id=\'printPageRangeError\' class="text-danger"></div>\n          </div>\n          <div class="radio">\n           <label>\n           <input type="radio" name="optionsRadios" id="optionsRadios2" value="chapter">\n           <%= _t(\'rr_current_chapter\') %>\n           </label>\n            <div id=\'printChapterError\' class="text-danger"></div>\n          </div>\n          <!-- end page range radio buttons -->\n\n       </div><!-- end col-sm-8 -->\n     </div>\n\n      <div class="form-group">\n        <label for="citationStyle" class="col-sm-4 control-label modal-control-label"><%= _t(\'rr_citation_style\') %></label>\n        <div class="col-sm-7">\n          <select name="citationStyle" id="citationStyle" class="form-control">\n           <option value="APA">APA</option>\n            <option value="CTNB">Chicago/Turabian \u2013 Notes-Bibliography</option>\n            <option value="CTAD">Chicago/Turabian \u2013 Author-Date</option>\n           <option value="HARVARD">Harvard</option>\n            <option value="MLA">MLA</option>\n          </select>\n       </div><!-- end col-sm-7 -->\n       <div class="col-sm-1"></div>\n      </div>\n\n      <!-- if we need buttons for each screen -->\n     <!-- <div class="print-buttonset">\n        <button type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n        <button type="button" class="btn btn-primary"><%= _t(\'rr_continue\') %></button>\n     </div> -->\n      \n\n      </div><!-- end print1 -->\n     <!-- end print screen 1 -->\n\n\n     <div class="modal-footer">\n        <button id="printCancel" type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n       <button id="printContinue" type="button" class="btn btn-primary"><%= _t(\'rr_continue\') %></button>\n      </div>\n\n</script>')
}), define("text!templates/readerPrintSelectionTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n      <!-- print screen 5 -->\n     <div id="print5" class=\'print-screen clearfix\'>\n     <div class="print-5-msg">\n\n     <div id=\'print-5-msg-icon\' class="icon-hand pull-left"></div>\n     <div><%= _t(\'rr_multiple_sections\') %></div>\n\n        <!-- <div class="row">\n          <div class="col-sm-2">\n            <div id=\'print-5-msg-icon\' class="icon-hand"></div>\n         </div>\n          <div class="col-sm-9"><%= _t(\'rr_multiple_sections\') %></div>\n       </div> -->\n      </div>\n      <select id=\'printSelectSection\' class="form-control" size=\'5\'>\n        <%  var counterLevel1=-1;  _.each(pnt.multipleRangeSelection, function(tmpSelectedChapter) { counterLevel1++; %>\n        <option value="<%= "pgRangeInd_"+counterLevel1 %>"><%= tmpSelectedChapter.chapterName %></option>\n      <% }); %>\n      </select>\n     \n      </div>\n      <!-- end print screen 5 -->\n\n     <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n        <button id="selectionPrintPreview" type="button" class="btn btn-primary"><%= _t(\'rr_preview\') %></button>\n     </div>\n\n</script>')
}), define("text!templates/readerPrintPreviewTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n      <!-- print screen 2 -->\n     <div id="print2" class=\'print-screen clearfix\'>\n       <div class="row">\n         <div class="col-xs-3">\n            <div class="row">\n             <div class="print-preview">\n               <img width="98px;" src="img/samplePrintPreview.jpg" alt="">\n               <div class="print-preview-pager">\n                 <!--  <button class="preview-pager icon-page-prev" id="preview-pager-prev"></button>\n                  <button class="preview-pager icon-page-next" id="preview-pager-next"></button> -->\n                </div>\n                <div class="print-preview-pagecount"><%= _t(\'rr_page_1_of\') %> <%= pnt.ped-pnt.pst+1 %></div>\n             </div>\n            </div>\n          </div>\n          <div class="col-xs-8"><%= _t(\'rr_create_PDF_for_printing\') %>\n           <div class="row print-details">\n             <div class="col-xs-6 print-details-left"><%= _t(\'rr_page_range\') %></div>\n             <div class="col-xs-6 print-details-right"><%= pnt.pst+" - " + pnt.ped %></div>\n            </div>\n            <div class="row print-details">\n             <div class="col-xs-6 print-details-left"><%= _t(\'rr_citation_style\') %></div>\n             <div class="col-xs-6 print-details-right"><%= pnt.ct %></div>\n           </div>\n            <div class="row">\n             <div class="col-xs-12">\n               <p><%= _t(\'rr_printing_pages_remain_allowance\', {REMPG: pnt.ped-pnt.pst+1, TOTREM: pnt.ped-pnt.pst+1 }) %></p>\n                <p><a href=\'#\' id=\'printStartOver\'><%= _t(\'rr_start_over\') %></a></p>\n             </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      <!-- end print screen 2 -->\n\n     <div class="modal-footer">\n        <button id="printCancel" type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n       <button id="printCreate" type="button" class="btn btn-primary"><%= _t(\'rr_create\') %></button>\n      </div>\n\n</script>')
}), define("text!templates/readerPrintCreateTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n      <!-- print screen 3 -->\n     <div id="print3" class=\'print-screen clearfix\'>\n     <div id=\'print3Spinner\' class="icon-spinner"></div>\n     <div class="print-3-msg"><%= _t(\'rr_creating_PDF\') %></div>\n     <div class="print-3-help"><%= _t(\'rr_may_take_moment\') %></div>\n     </div>\n      <!-- end print screen 3 -->\n\n     <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal" disabled="disabled" ><%= _t(\'rr_cancel\') %></button>\n       <button id="printCreate" type="button" class="btn btn-primary" disabled="disabled" ><%= _t(\'rr_create\') %></button>\n     </div>\n    \n</script>')
}), define("text!templates/readerPrintOpenTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n      <!-- print screen 4 -->\n     <div id="print4" class=\'print-screen clearfix\'>\n     <button id=\'printOpenPDF\' type="button" class="btn btn-lg btn-primary" data-dismiss="modal"><%= _t(\'rr_open_PDF\') %></button>\n     </div>\n      <!-- end print screen 4 -->\n\n</script>')
}), define("text!templates/readerPrintErrorTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printWrapperpanel">\n   \n      <!-- print screen 6 -->\n     <div id="print6" class=\'print-screen clearfix\'>\n       <h3><%= _t(\'rr_unable_create_PDF\') %></h3>\n      </div>\n      <!-- end print screen 6 -->\n\n     <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n        <button id="printStartOver" type="button" class="btn btn-primary"><%= _t(\'rr_start_over\') %></button>\n     </div>\n\n</script>')
}), define("text!templates/dummyTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="dummyTemp">\n <h1> I m in dummy View. </h1>\n <div>\n   <h2> IN the dummy DIV. </h2>\n  </div>\n</script>\n')
}), define("text!templates/readerPrintTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="printTemp">\n   \n<!-- Modal -->\n<div class="modal fade" id="printModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n        <h4 class="modal-title" id="myModalLabel"><%= _t(\'rr_print_to_PDF\') %></h4>\n      </div>\n      <!-- <div class="modal-body">\n      </div> -->\n\n    <form class="form-horizontal" role="form">\n\n      <!-- print screen 1 -->\n     <div id="print1" class=\'print-screen\'>\n        <div class="form-group">\n        <div class="row">\n       <label for="inputEmail3" class="col-sm-4 control-label modal-control-label"><%= _t(\'rr_page_range\') %></label>\n        <div class="col-sm-7">\n        \n          <!-- page range radio buttons -->\n         <div class="radio">\n           <label>\n           <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>\n           <%= _t(\'rr_current_page\') %>\n            </label>\n          </div>\n          <div class="radio">\n           <label>\n           <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">\n           <%= _t(\'rr_pages_from\') %> </label><input type="text" name="startPage" id="startPage" size=\'3\'> <%= _t(\'rr_to\') %> <input type="text" name="endPage" id="endPage" size=\'3\'>\n           </label>\n            <div id=\'print-pagerange-error\' class="text-danger">Error message goes here.</div>\n          </div>\n          <div class="radio">\n           <label>\n           <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">\n           <%= _t(\'rr_current_chapter\') %>\n           </label>\n          </div>\n          <!-- end page range radio buttons -->\n\n       </div><!-- end col-sm-8 -->\n       </div>\n      </div>\n\n      <div class="form-group">\n      <div class="row">\n       <label for="inputEmail3" class="col-sm-4 control-label modal-control-label"><%= _t(\'rr_citation_style\') %></label>\n        <div class="col-sm-7">\n          <select class="form-control">\n           <option><%= _t(\'rr_harvard\') %></option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </select>\n       </div><!-- end col-sm-8 -->\n       </div>\n      </div>\n\n      <!-- if we need buttons for each screen -->\n     <!-- <div class="print-buttonset">\n        <button type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n        <button type="button" class="btn btn-primary"><%= _t(\'rr_continue\') %></button>\n     </div> -->\n      \n\n      </div><!-- end print1 -->\n     <!-- end print screen 1 -->\n\n     <!-- print screen 2 -->\n     <div id="print2" class=\'print-screen clearfix\'>\n       <div class="row">\n         <div class="col-sm-3 col-sm-offset-1">\n            <div class="print-preview"><img src="" alt="">\n            <div class="print-preview-pager">\n             <button class="preview-pager icon-page-prev" id="preview-pager-prev"></button>\n              <button class="preview-pager icon-page-next" id="preview-pager-next"></button>\n            </div>\n            <div class="print-preview-pagecount">Page 1 of 7</div>\n\n            </div>\n          </div>\n          <div class="col-sm-8">You are about to create the following PDF for printing:\n           <div class="row print-details">\n             <div class="col-sm-6 print-details-left"><%= _t(\'rr_page_range\') %></div>\n             <div class="col-sm-6 print-details-right">3-10</div>\n            </div>\n            <div class="row print-details">\n             <div class="col-sm-6 print-details-left"><%= _t(\'rr_citation_style\') %></div>\n             <div class="col-sm-6 print-details-right"><%= _t(\'rr_harvard\') %></div>\n           </div>\n            <p><%= _t(\'rr_printing_pages_remain_allowance\', {REMPG: 7, TOTREM: 2 }) %></p>\n            <p><a href=\'#\' id=\'startOver\'><%= _t(\'rr_start_over\') %></a></p>\n          </div>\n        </div>\n        </div>\n      <!-- end print screen 2 -->\n\n     <!-- print screen 3 -->\n     <div id="print3" class=\'print-screen clearfix\'>\n     <div id=\'print3Spinner\' class="icon-spinner"></div>\n     <div class="print-3-msg"><%= _t(\'rr_creating_PDF\') %></div>\n     <div class="print-3-help"><%= _t(\'rr_may_take_moment\') %></div>\n     </div>\n      <!-- end print screen 3 -->\n\n     <!-- print screen 4 -->\n     <div id="print4" class=\'print-screen clearfix\'>\n     <button id=\'printOpenPDF\' type="button" class="btn btn-lg btn-primary"><%= _t(\'rr_open_PDF\') %></button>\n      </div>\n      <!-- end print screen 4 -->\n\n     <!-- print screen 5 -->\n     <div id="print5" class=\'print-screen clearfix\'>\n     <div class="print-5-msg">\n\n     <div id=\'print-5-msg-icon\' class="icon-hand pull-left"></div>\n     <div><%= _t(\'rr_multiple_sections\') %></div>\n\n        <!-- <div class="row">\n          <div class="col-sm-2">\n            <div id=\'print-5-msg-icon\' class="icon-hand"></div>\n         </div>\n          <div class="col-sm-9"><%= _t(\'rr_multiple_sections\') %></div>\n       </div> -->\n      </div>\n      <select multiple id=\'print-select-section\'class="form-control" size=\'5\'>\n        <option>Section 1 pages 3-10</option>\n       <option>Section 2 pages 3-10</option>\n       <option>Section 3 pages 3-10</option>\n       <option>Section 4 pages 3-10</option>\n       <option>Section 5 pages 3-10</option>\n     </select>\n     \n      </div>\n      <!-- end print screen 5 -->\n\n\n   <div class="modal-footer">\n      <button type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n      <button type="button" class="btn btn-primary"><%= _t(\'rr_continue\') %></button>\n   </form>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n \n</script>\n')
}), define("text!templates/readerSideBarTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="sideBar">\n <div class="containerSideBar" role="complementary">\n   <a href=\'#\' id="bookDetails" title="<%= _t(\'rr_details\') %>" aria-label="<%= _t(\'rr_detailsAria\') %>" ><div class="icon-book-details icon"   aria-controls="B-Section" ><span class="btn-label-hidden"><%= _t(\'rr_details\') %></span></div></a>\n   <a href=\'#\' id="bookToc" title="<%= _t(\'rr_toc\') %>" aria-label="<%= _t(\'rr_tocAria\') %>" ><div class="icon-book-toc icon icon-selected btn-sidebar-selected" aria-controls="A-Section"  ><span class="btn-label-hidden"><%= _t(\'rr_toc\') %></span></div></a>\n   <a href=\'#\' id="bookNotes" title="<%= _t(\'rr_annotations\') %>" aria-label="<%= _t(\'rr_annotationsAria\') %>" ><div class="icon-annotations icon" aria-controls="C-Section"  ><span class="btn-label-hidden"><%= _t(\'rr_annotations\') %></span></div></a>\n   <a href=\'#\' id="bookSearch" title="<%= _t(\'rr_search_in_book\') %>" aria-label="<%= _t(\'rr_search_in_book\') %>" ><div class="icon-book-search icon" aria-controls="D-Section"  ><span class="btn-label-hidden"><%= _t(\'rr_search_in_book\') %></span></div></a>\n   <a href=\'#\' id="bookResources" title="<%= _t(\'rr_addResource\') %>" aria-label="<%= _t(\'rr_addResource\') %>" ><div class="icon-extra-resources icon" aria-controls="E-Section"  ><span class="btn-label-hidden"><%= _t(\'rr_addResource\') %></span></div></a>\n </div>\n</script>\n')
}), define("text!templates/readerPanelSearchTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panelSearch">\n   \n    <div id=\'search-container\'>\n     <div id="panel-close" aria-hidden="true"><button class="btn-close icon-close" id="closePanel"></button></div>\n     <!-- /////// SEARCH TITLE /////// -->\n     <H2><%= _t(\'rr_search\') %></H2>\n     <div class="book-title"><%= _t(\'rr_origin_of_species\') %></div>\n     <!-- /////// END SEARCH TITLE /////// -->\n \n      <div id="search-block">\n       <div id="help-block" class="help-block"> </div>\n       <div class="input-group">\n         <input type="text" class="form-control" placeholder="<%= _t(\'rr_search_in_book\') %>">\n           <!-- <span class="input-group-btn">\n               <button class="btn btn-default btn-search-inline icons-close" type="button"></button>\n           </span> -->\n           <span class="input-group-btn">\n                <button class="btn btn-default btn-search-inline icons-return" type="button"></button>\n            </span>\n       </div>\n  \n        <div id=\'search-button\' class="pull-right">\n         <button type="button" class="btn btn-primary"><%= _t(\'rr_search\') %></button>\n       </div>\n      </div><!-- end search-block -->\n\n   \n\n\n\n  </div>  <!-- end search container -->\n</script>\n')
}), define("text!templates/readerPanelTocTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panelToc">\r\n\r\n  <div id="panel-close" ><button class="btn-close icon-close" id="closePanel"></button></div>\r\n <h3 class="sr-only">Table Of Content Section</h3>\r\n <div id=\'toc-container\'>\r\n    \r\n    <div id="book-meta-open">\r\n     <% if (typeof BiblioData !== "undefined") { %>\r\n        <div id=\'closeMetaData\'  class="row">\r\n         <div class="col-xs-1"><span id=\'close-title\' class="icon-panel-close"></span></div>\r\n         <div class="col-xs-11 book-title"><%= BiblioData.title !== "undefined"?BiblioData.title:_t(\'rr_na\')%></div>\r\n       </div>\r\n        <div id=\'book-meta-info\' class="row">\r\n           <div class="col-xs-4"><div id=\'cover\' width="98px" ><img src="<%=BiblioData.coverURL%>" alt="<%= _t(\'rr_bookCoverImg\') %>"></div></div>\r\n           <div class="col-xs-8">\r\n              <div class="toc-author"><span><%= _t(\'rr_by\') %> </span><% if(typeof BiblioData.contibutors !== "undefined"){ var tmpCtbs= (BiblioData.contibutors.slice(0,3)); %><%=tmpCtbs.join()%> <% }else{%> <%= _t(\'rr_na\') %> <% }%></div>\r\n             <div class="meta-label"><%= _t(\'rr_publisher\') %></div>\r\n             <div class="meta-data"><%= typeof BiblioData.publisher !== "undefined"?BiblioData.publisher: _t(\'rr_na\')%></div>\r\n              <div class="meta-label"><%= _t(\'rr_date\') %></div>\r\n              <div class="meta-data"><%= typeof BiblioData.orgPublishDateFormatted !== "undefined"?BiblioData.orgPublishDateFormatted: _t(\'rr_na\')%></div>\r\n              <div class="meta-more"><a href="detail.action?docID=<%=BiblioData.docID %>" aria-label="<%= _t(\'rr_moreBkDetail\') %>" ><%= _t(\'rr_more\') %></a></div>\r\n           </div>\r\n        </div>\r\n        \r\n      <% } else {%>\r\n           <div id=\'closeMetaData\'  class="row">\r\n             <div class="col-xs-1"><span id=\'close-title\' class="icon-panel-close"></span></div>\r\n             <div class="col-xs-11 book-title"><%= _t(\'rr_na\') %></div>\r\n            </div>\r\n            <div id=\'book-meta-info\' class="row">\r\n           <div class="col-sm-4"><div id=\'cover\' ><img width="98px" src="" alt="<%= _t(\'rr_bookCoverImg\') %>"></div></div>\r\n           <div class="col-sm-8">\r\n              <div class="toc-author"><span><%= _t(\'rr_by\') %> </span> <%= _t(\'rr_na\') %></div>\r\n             <div class="meta-label"><%= _t(\'rr_publisher\') %></div>\r\n             <div class="meta-data"><%= _t(\'rr_na\') %></div>\r\n             <div class="meta-label"><%= _t(\'rr_date\') %></div>\r\n              <div class="meta-data"><%= _t(\'rr_na\') %></div>\r\n             <div class="meta-more"><a href="detail.action?docID=<%=BiblioData.docID%>" aria-label="<%= _t(\'rr_moreBkDetail\') %>" ><%= _t(\'rr_more\') %></a></div>\r\n            </div>\r\n          </div>\r\n      <% } %>\r\n     \r\n    </div><!-- end book-meta-open -->\r\n\r\n <div id="book-meta-closed" style="display:none;">\r\n   <div id=\'openMetaData\' class="row">\r\n     <div class="col-xs-1"><span id=\'open-title\' class="icon-panel-open"></span></div>\r\n     <div class="col-xs-11 book-title-small"><%= BiblioData.title !== "undefined"?BiblioData.title: _t(\'rr_na\')%></div>\r\n    </div>\r\n  </div><!-- end book-meta-closed -->\r\n\r\n <div id="search-block">\r\n       <div class="input-group">\r\n           <input id="searchInBookTermInToc" type="text" class="form-control" placeholder="<%= _t(\'rr_search_in_book\') %>">\r\n            <span class="input-group-btn">\r\n                <button id="searchWithInBookToc" aria-label="<%= _t(\'rr_search\') %>" class="btn btn-default btn-search-inline icons-return" type="button"></button>\r\n           </span>\r\n       </div>\r\n  </div><!-- end search-block -->\r\n \r\n  \r\n  \r\n  \r\n  <!-- begin table of contents -->\r\n       <div class="toc-title"><%= _t(\'rr_toc\') %></div>\r\n       <div id="tc-list-cont">\r\n           <% if (typeof DocTOC === "undefined" || DocTOC === null || typeof DocTOC.toc === "undefined" || typeof DocTOC.toc.chapters === "undefined" || DocTOC.toc.chapters === null) { %>    \r\n                            <%= _t(\'rr_not_available_title\') %>\r\n              <% } else if (typeof DocTOC !== "undefined" ) { %>\r\n               <ul>\r\n                   <%  var counterLevel1=-1;  _.each(DocTOC.toc.chapters, function(chapterLevel1) { counterLevel1++; %>\r\n                            <li class=\'tc-level-1\'>\r\n                                                <% if (chapterLevel1.childChapters === true) { %>\r\n                                                 <a href=\'#\' class=\'no-decor\' aria-hidden="true">\r\n                                                     <span divid="div-level-2<%= counterLevel1 %>" class="tc-icon icon-tc-open"></span>\r\n                                                 </a>    \r\n                                           <% } %>\r\n                                        <a href="#ppg=<%= chapterLevel1.startPage %>"><%=chapterLevel1.title%></a>          \r\n                                        <% if (typeof chapterLevel1.chapters !== "undefined") { %>\r\n                                              <ul>\r\n                                                   <% var counterLevel2=-1; _.each(chapterLevel1.chapters, function(chapterLevel2) { counterLevel2++; %>\r\n                                                        <% if (counterLevel2 === 0) { %>                    \r\n                                                                                 <li class="tc-level-2 tc-level-2-first" >\r\n                                                                          <% } else if (counterLevel2 === chapterLevel1.chapters.length-1) {  %>       \r\n                                                                                      <li class="tc-level-2 tc-level-2-last" >\r\n                                                                                  <% } else { %>\r\n                                                                                      <li class="tc-level-2" >\r\n                                                                                  <% } %>\r\n                                                                                      <% if (chapterLevel2.childChapters === true) { %>\r\n                                                                                               <a href=\'#\' class=\'no-decor\' aria-hidden="true">\r\n                                                                                                  <span divid="div-level-3<%= counterLevel1 %><%= counterLevel2 %>" class="tc-icon icon-tc-open"></span>\r\n                                                                                                 </a>           \r\n                                                                                         <% } %>\r\n                                                                                         <a href="#ppg=<%=chapterLevel2.startPage%>"><%=chapterLevel2.title%></a>\r\n                                                                              <% if (typeof chapterLevel2.chapters !== "undefined"){ %>\r\n                                                                                    <ul>\r\n                                                                                                   <% var counterLevel3=-1; _.each(chapterLevel2.chapters, function(chapterLevel3) { counterLevel3++; %>\r\n                                                                                                                     <% if (counterLevel3 === 0) { %>                    \r\n                                                                                                                   <li class="tc-level-3 tc-level-3-first">\r\n                                                                                                      <% } else if (counterLevel3 === chapterLevel2.chapters.length-1) { %>       \r\n                                                                                                                   <li class="tc-level-3 tc-level-3-last">\r\n                                                                                                               <% } else { %>\r\n                                                                                                                   <li class="tc-level-3">\r\n                                                                                                               <% } %>\r\n                                                                                                                 <a href="#ppg=<%=chapterLevel3.startPage%>"><%=chapterLevel3.title%></a>\r\n                                                                                                          </li>           \r\n                                                                                                <% }); %>    \r\n                                                                                    </ul>\r\n                                                                             <% } %> <!--  Level 3 End -->  \r\n                                                                          </li>                               \r\n                                                   <% }); %>  <!--  Level 2 for each End -->\r\n                                              </ul>\r\n                                       <% } %> <!--  Level 2 End -->    \r\n                            </li>\r\n                   <% }); %>  <!--  Level 1 for each End -->\r\n               </ul>\r\n           <% } %>  <!--  Level 1 End --> \r\n       </div><!-- end toc -->\r\n\r\n</div> <!-- end toc-container -->\r\n  \r\n</script> \r\n')
}), define("text!templates/readerPanelBookResourceTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="bookResources">\n\n <div id="panel-close" aria-hidden="true"><button class="btn-close icon-close" id="closePanel"></button></div>\n \n  <div id=\'custom-search-container\'>\n\n    <h2><%= _t(\'rr_addResource\') %><span class="sr-only">Section</span></H2>    \n    \n    <% if (typeof cusData === "undefined") { %>\n       <%= _t(\'rr_problem_custom_search\') %>       \n    <% } else { %>\n          <% if (cusData.textSearches.length !== 0) { %>          \n             <div id="search-block">\n           <div class="input-group">\n                <input type="text" id=\'cTextSearchId\' class="form-control" placeholder="<%= _t(\'rr_search_term_here\') %>" >\n             <span class="input-group-btn">\n                  <button class="btn btn-default btn-search-inline icons-return" type="button"  ></button>\n              </span>\n          </div>\n \n           <div id=\'search-button\' class="pull-right">\n            <button type="button" class="btn btn-primary"><%= _t(\'rr_search\') %>   </button>\n           </div>\n \n          <div id="custom-search-options">\n              <%_.forEach(cusData.textSearches, function (cSearch, cIndex) {%>                      \n              <div class="radio">\n               <label>\n                 <input type=\'radio\' name=\'textSearchesRadios\' id=\'textSearches_<%=cIndex%>\' value=\'<%=cIndex%>\' <% if(cIndex === 0) { %> checked <% } %> >\n                    <% var cTextNme = cSearch.textName; \n                        if (cTextNme.length > 50) {\n                          cTextNme = cTextNme.substring(0,50);\n                       }                 \n                    %>\n                    <%=cTextNme%>\n               </label>\n              </div>          \n            <% }); %>   \n          </div><!-- end custom-search-options -->\n         </div><!-- end search-block -->\n         <%  } %>\n        <% if (cusData.bookSearches.length !== 0) { %>\n           <hr>\n            <div id="custom-buttons">\n               <%_.forEach(cusData.bookSearches, function (cSearch, cIndex) {%>  \n                    <div class="radio">   \n                        <% var cBookNme = cSearch.textName; \n                        if (cBookNme.length > 50) {\n                          cBookNme = cBookNme.substring(0,50);\n                       }                 \n              %>               \n                                                 \n                      <% if (cSearch.textValue.indexOf("%pisbn%") > -1) { %>\n                   <button type="button" id=\'bookSearches_<%=cIndex%>\' class="btn btn-primary"> <%=cBookNme%></button>\n                <% } else if(cSearch.textValue.indexOf("%eisbn%") > -1) { %>  \n                    <button type="button" id=\'bookSearches_<%=cIndex%>\' class="btn btn-primary"><%=cBookNme%></button>\n                <% } else if(cSearch.textValue.indexOf("%docid%") > -1) { %>              \n                     <button type="button" id=\'bookSearches_<%=cIndex%>\' class="btn btn-primary"> <%=cBookNme%></button>\n                <% } %> \n              </div>\n           <% }); %>      \n        </div>\n         <%  } %>\n        <% if (cusData.standaloneSearches.length !== 0) { %>\n            <hr>\n          <div id="custom-links">\n               <%_.forEach(cusData.standaloneSearches, function (cSearch, cIndex) {%>\n               <% var cNme = cSearch.textName; \n                        if (cNme.length > 50) {\n                          cNme = cNme.substring(0,50);\n                       }                 \n            %> \n                 <div class="radio">                 \n                       <a href=\'<%=cSearch.textValue%>\' target=\'_blank\' ><%=cNme%></a>\n                    </div>\n           <% }); %>  \n         </div>\n        <%  } %>           \n    <%  } %>\n  </div> \n</script> \n')
}), define("text!templates/panelBookDetailsTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panelBookDetail">\r\n\r\n <div id="panel-close"><button class="btn-close icon-close" id="closePanel"></button></div>\r\n  <h3 class="sr-only">Book Details Section</h3>\r\n <div id=\'meta-container\'>\r\n     <div id="bookMetaOpen">\r\n     <% if (typeof BiblioData !== "undefined") { %>\r\n        <div id=\'closeMetaData\'  class="row">\r\n         <div class="col-xs-1"><span id=\'close-title\' class="icon-panel-close"></span></div>\r\n         <div class="col-xs-11 book-title"><%= BiblioData.title !== "undefined"?BiblioData.title: _t(\'rr_na\') %></div>\r\n       </div>\r\n        <div id=\'book-meta-info\' class="row">\r\n           <div class="col-xs-4"><div id=\'cover\' width="98px" ><img src="<%=BiblioData.coverURL%>" alt="<%= _t(\'rr_bookCoverImg\') %>"></div></div>\r\n           <div class="col-xs-8">\r\n              <div class="toc-author"><span><%= _t(\'rr_by\') %> </span><% if(typeof BiblioData.contibutors !== "undefined"){ var tmpCtbs= (BiblioData.contibutors.slice(0,3)); %><%=tmpCtbs.join()%> <% }else{%> <%=_t(\'rr_na\') %> <% }%></div>\r\n              <div class="meta-label"><%= _t(\'rr_publisher\') %></div>\r\n             <div class="meta-data"><%= typeof BiblioData.publisher !== "undefined"?BiblioData.publisher:_t(\'rr_na\') %></div>\r\n              <div class="meta-label"><%= _t(\'rr_date\') %></div>\r\n              <div class="meta-data"><%= typeof BiblioData.orgPublishDateFormatted !== "undefined"?BiblioData.orgPublishDateFormatted:_t(\'rr_na\') %></div>\r\n              <div class="meta-more"><a href="detail.action?docID=<%=BiblioData.docID %>" aria-label="<%= _t(\'rr_moreBkDetail\') %>" ><%= _t(\'rr_more\') %></a></div>\r\n           </div>\r\n        </div>\r\n        \r\n      <% } else {%>\r\n         <div id=\'closeMetaData\'  class="row">\r\n           <div class="col-xs-1"><span id=\'close-title\' class="icon-panel-close"></span></div>\r\n           <div class="col-xs-11 book-title"><%= _t(\'rr_na\') %></div>\r\n          </div>\r\n            <div id=\'book-meta-info\' class="row">\r\n           <div class="col-sm-4"><div id=\'cover\' ><img width="98px" src="" alt="<%= _t(\'rr_bookCoverImg\') %>"></div></div>\r\n           <div class="col-sm-8">\r\n              <div class="toc-author"><span><%= _t(\'rr_by\') %> </span> <%= _t(\'rr_na\') %> </div>\r\n              <div class="meta-label"><%= _t(\'rr_publisher\') %></div>\r\n             <div class="meta-data"><%= _t(\'rr_na\') %></div>\r\n             <div class="meta-label"><%= _t(\'rr_date\') %></div>\r\n              <div class="meta-data"><%= _t(\'rr_na\') %></div>\r\n             <div class="meta-more"><a href="detail.action?docID=<%=BiblioData.docID%>" aria-label="<%= _t(\'rr_moreBkDetail\') %>" ><%= _t(\'rr_more\') %></a></div>\r\n            </div>\r\n          </div>\r\n      <% } %>\r\n     \r\n    </div><!-- end book-meta-open -->\r\n\r\n \r\n  \r\n  <div id="bookMetaClosed" style="display:none;">\r\n   <div id=\'openMetaData\' class="row">\r\n     <div class="col-xs-1"><span id=\'open-title\' class="icon-panel-open"></span></div>\r\n     <div class="col-xs-11 book-title-small"><%= BiblioData.title !== "undefined"?BiblioData.title: _t(\'rr_na\') %></div>\r\n   </div>\r\n  </div><!-- end book-meta-closed -->\r\n \r\n  <div class="row accArHid" id="meta-tools">\r\n    <div class="col-xs-5">\r\n      <button type="button" class="btn btn-primary btn-icon" id="bookDetailDownload"><span class="icon-download icon-in-button"></span><span class="button-label"> <%= _t(\'rr_fd\') %></span></button> \r\n    </div>\r\n    <div class="col-xs-7 meta-tools-right">\r\n     <button class=\'btn btn-default meta-tools-btn\' id="bookDetailBookShelf" aria-label="<%= _t(\'rr_add_to_bookshelf\') %>" data-toggle="tooltip" title="<%= _t(\'rr_add_to_bookshelf\') %>"  ><span class="icon-bookshelf-add"></span><span class="btn-label-hidden"><%= _t(\'rr_add_to_bookshelf\') %></span></button>\r\n      <button aria-label="<%= _t(\'rr_share_link\') %>"  data-toggle="tooltip" title="<%= _t(\'rr_share_link\') %>" data-target="#shareBookLink" class=\'btn btn-default meta-tools-btn\' id="bookDetailBooklink" ><span class="icon-link"></span><span class="btn-label-hidden"><%= _t(\'rr_share_link\') %></span></button> \r\n      <button aria-label="<%= _t(\'rr_get_citation\') %>"  class=\'btn btn-default meta-tools-btn\'  id="bookDetailBookCitation"  data-toggle="tooltip" title="<%= _t(\'rr_get_citation\') %>" ><span class="icon-book-cite"></span><span class="btn-label-hidden"><%= _t(\'rr_get_citation\') %></span></button>\r\n   </div>\r\n  </div><!-- end meta tools -->\r\n\r\n\r\n\r\n\r\n<!--\r\n <% if((!DocUser.unlimitedCopy && !DocUser.unlimitedPrint) && (DocUser.channelDisabledCopy || DocUser.channelDisabledPrint )) {%>\r\n    <div class="avail-info"><%=DocUser.channelTitleName %> does not allow copy or print</div>\r\n <% }\r\n   else if((!DocUser.unlimitedCopy && !DocUser.unlimitedPrint) && (DocUser.publisherDisbaledCopy || DocUser.publisherDisbaledPrint )) {%>\r\n   <div class="avail-info">Copy and print is not offered for this title</div>\r\n  <% } else {%> \r\n      <% if(DocUser.unlimitedCopy) {%>\r\n        <div class="avail-info">No copy limit</div>\r\n     <% } else {%>\r\n       <div class="row meta-info">\r\n         <div class="col-xs-1 align-right"><span class="icon-copy meta-icon"></span></div>\r\n         <div class="col-xs-1"><span class="label meta-label-num" id="remaining_Copy"><%= DocUser.remainingCopyCount %></span></div>\r\n         <div class="col-xs-10">pages to copy <span class="screen">(of <%= DocUser.totalCopyLimit %>)</span></div>\r\n       </div> end row \r\n     <% } %>\r\n     <% if(DocUser.unlimitedPrint) {%>\r\n       <div class="avail-info">No print limit</div>\r\n      <% } else {%>\r\n       <div class="row meta-info">\r\n         <div class="col-xs-1 align-right"><span class="icon-print meta-icon"></span></div>\r\n          <div class="col-xs-1"><span class="label meta-label-num" id="remaining_Print"><%= DocUser.remainingPrintCount %></span></div>\r\n         <div class="col-xs-10">pages to print <span class="screen">(of <%= DocUser.totalPrintLimit %>)</span></div>\r\n       </div>\r\n      <% } %>\r\n <% } %>\r\n-->\r\n  <% if((!DocUser.unlimitedCopy) && (DocUser.channelDisabledCopy ) && (!DocUser.unlimitedPrint) && (DocUser.channelDisabledPrint ) ) {%>\r\n    <!--<div class="avail-info"><%=DocUser.channelTitleName %> does not allow copy or print</div>-->\r\n  <% } else {%>\r\n       <H3 class="accArHid" ><%= _t(\'rr_online_allowances\') %> <span class="icon-help pull-right" data-toggle="tooltip" title="<%= _t(\'rr_no_pages_cp_determine\') %>"></span></H3>\r\n       <%  if((!DocUser.unlimitedCopy) && (DocUser.publisherDisbaledCopy )) {%>\r\n          <div class="avail-info accArHid"><%= _t(\'rr_copy_not_offered\') %></div>\r\n       <% } else {%> \r\n            <% if(DocUser.unlimitedCopy) {%>\r\n              <div class="avail-info accArHid"><%= _t(\'rr_pages_remain_to_copy\') %></div>\r\n           <% } else {%>\r\n               <div class="row meta-info accArHid">\r\n                  <div class="col-xs-1 align-right"><span class="icon-copy meta-icon"></span></div>\r\n                 <div class="col-xs-1"><span class="label meta-label-num" id="remainingCopy"><%= DocUser.remainingCopyCount %></span></div>\r\n                  <div class="col-xs-10"><%= _t(\'rr_pages_to_copy\') %> <span class="screen">(<%= _t(\'rr_page_of\') %> <%= DocUser.totalCopyLimit %>)</span></div>\r\n                </div><!-- end row -->\r\n            <% } %>\r\n       <% } %>\r\n       \r\n        \r\n        <% if((!DocUser.unlimitedPrint) && (DocUser.publisherDisbaledPrint )) {%>\r\n         <div class="avail-info accArHid"><%= _t(\'rr_print_not_offered\') %></div>\r\n        <% } else {%> \r\n            <% if(DocUser.unlimitedPrint) {%>\r\n             <div class="avail-info accArHid"><%= _t(\'rr_pages_remain_to_print\') %></div>\r\n            <% } else {%>\r\n               <div class="row meta-info accArHid">\r\n                  <div class="col-xs-1 align-right"><span class="icon-print meta-icon"></span></div>\r\n                  <div class="col-xs-1"><span class="label meta-label-num" id="remainingPrint"><%= DocUser.remainingPrintCount %></span></div>\r\n                  <div class="col-xs-10"><%= _t(\'rr_pages_to_print\') %> <span class="screen">(<%= _t(\'rr_page_of\') %>  <%= DocUser.totalPrintLimit %>)</span></div>\r\n               </div><!-- end row -->\r\n            <% } %>\r\n       <% } %>\r\n    <% } %>\r\n        \r\n  \r\n  <% if(DocUser.channelType === "title_list"  ) {%>\r\n   <!--<div class="avail-info"><%=DocUser.channelTitleName %> does not allow Download</div>-->\r\n <% } else {%>\r\n     <H3><%= _t(\'rr_download_allowances\') %> <span class="icon-help pull-right" data-toggle="tooltip" title="<%= _t(\'rr_no_pages_cp_download_determine\') %>"></span></H3>\r\n          <% if(DocUser.channelDisabledDownload) {%>\r\n              <div class="avail-info"><%= _t(\'rr_fd_not_offered\') %></div>      \r\n          <% } else if(DocUser.contentProviderDisabledDownload) {%>\r\n             <div class="avail-info"><%= _t(\'rr_fd_not_offered\') %></div>\r\n          <% } else if(DocUser.patronExceededDownloadLimit) {%>\r\n           <div class="avail-info"><%= _t(\'rr_exceeded_limit\', {dlLimit: DocUser.patronDownloadLimit}) %></div>\r\n          <% } else if(DocUser.availableForDownload) {%>\r\n                  <div class="avail-info">\r\n                    <% if(DocUser.activeDownload) {%>\r\n                        <% if(DocUser.availableDownloadCheckoutDays > 0) {%>\r\n                            <%= _t(\'rr_fd_expires\', {fdlexp: DocUser.availableDownloadCheckoutDays}) %>\r\n                         <% } else { %>\r\n                            <%= _t(\'rr_fd_expires_1_day\') %>\r\n                        <% } %>                     \r\n                   <% } else { %>\r\n                      <%= _t(\'rr_book_available_d\', {bkAvail: DocUser.availableDownloadCheckoutDays}) %>\r\n                    <% } %>\r\n                </div>\r\n         \r\n              <% if(DocUser.remainingCopyDownload>=9000) {%>\r\n                <div class="avail-info"><%= _t(\'rr_pages_remain_to_copy\') %></div>\r\n              <% } else {%>\r\n                 <div class="row meta-info">\r\n                   <div class="col-xs-1 align-right"><span class="icon-copy meta-icon"></span></div>\r\n                   <div class="col-xs-1"><span class="label meta-label-num meta-label-disabled"><%= DocUser.remainingCopyDownload %></span></div>\r\n                    <div class="col-xs-10"> <%= _t(\'rr_total_pages_copy\') %></div>\r\n                  </div>\r\n              <% } %>\r\n             <% if(DocUser.remainingPrintDownload>=9000) {%>\r\n               <div class="avail-info"><%= _t(\'rr_pages_remain_to_print\') %></div>\r\n             <% } else {%>\r\n                   <div class="row meta-info">\r\n                     <div class="col-xs-1 align-right"><span class="icon-print meta-icon"></span></div>\r\n                      <div class="col-xs-1"><span class="label meta-label-num meta-label-disabled"><%= DocUser.remainingPrintDownload %></span></div>\r\n                     <div class="col-xs-10"> <%= _t(\'rr_total_pages_print\') %></div>\r\n                   </div>\r\n              <% } %>\r\n             <div class="meta-help">\r\n               <%= _t(\'rr_d_allowances\') %>\r\n              </div>\r\n          <% } else {%>\r\n           <div class="avail-info"><%= _t(\'rr_not_available_fd\') %></div>\r\n            <% } %>\r\n           <% if (DocUser.readable && !DocUser.availableForDownload && !DocUser.previewMode && !DocUser.channelDisabledPrint && !DocUser.publisherDisbaledPrint) {%>\r\n           <div class="avail-info"><%= _t(\'rr_print_chapters_PDF\') %></div>\r\n            <% } %>\r\n    <% } %>\r\n  </div> <!-- end meta-container -->\r\n</script> \r\n')
}), define("text!templates/panelBookNotesTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panelBookDetail">\r\n\r\n<% if(data.annotType ===\'link\' && data.bookMark ) {%>\r\n      <div class="row">\r\n       <div  role="link" class="col-xs-1 annotation-type annotation-color-bookmark" ><span class="icon-annotation icon-bookmark"><span class="sr-only"><%= _t(\'rr_annotBmk\') %></span></span></div>\r\n        <div class="col-xs-11 annotation-entry"><button id="annotTrash_<%= data.annotID%>" class="annotation-delete icon-trash pull-right"><span class="sr-only"><%= _t(\'rr_annotDelBmk\') %></span></button>\r\n          <div role="link">\r\n           <div  class="annotation-page"><%= _t(\'rr_lpnPage\', {LPN: data.logicalPage}) %></div>\r\n            <div  class="annotation-content"><%= data.labelText.replace(\'BookMark:\',\'\')%></div>\r\n         </div>\r\n        </div>\r\n      </div>\r\n<% } else if(data.annotType ===\'hilite\' ) {%>\r\n \r\n      <div class="row">\r\n       <div role="link" class="col-xs-1 annotation-type annotation-color-<%= data.tint%>"><span class="icon-annotation icon-highlight"><span class="sr-only"><%= _t(\'rr_annotHlt\') %></span></span></div>\r\n        <div class="col-xs-11 annotation-entry"><button id="annotTrash_<%= data.annotID%>" class="annotation-delete icon-trash pull-right"><span class="sr-only"><%= _t(\'rr_annotDelHlt\') %></span></button>\r\n          <div role="link">\r\n           <div class="annotation-page"><%= _t(\'rr_lpnPage\', {LPN: data.logicalPage}) %></div>\r\n           <div class="annotation-content"><%= data.labelText%></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n<% } else if(data.annotType ===\'sticky\' ) {%>\r\n \r\n      <div class="row">\r\n       <div role="link" class="col-xs-1 annotation-type annotation-color-<%= data.tint%>"><span class="icon-annotation icon-note"><span class="sr-only"><%= _t(\'rr_annotNt\') %></span></span></div>\r\n        <div class="col-xs-11 annotation-entry"><button id="annotTrash_<%= data.annotID%>" class="annotation-delete icon-trash pull-right"><span class="sr-only"><%= _t(\'rr_annotDelNt\') %></span></button>\r\n         <div role="link">\r\n           <div class="annotation-page"><%= _t(\'rr_lpnPage\', {LPN: data.logicalPage}) %></div>\r\n           <div class="annotation-content"><%= data.labelText%> </div>\r\n         </div>\r\n        </div>\r\n      </div>\r\n<% } else if(data.annotType ===\'link\' ) {%>\r\n \r\n      <div role="link" class="row">\r\n       <div class="col-xs-1 annotation-type annotation-color-yellow"><span class="icon-annotation icon-note"><span class="sr-only"><%= _t(\'rr_annotLnk\') %></span></span></div>\r\n        <div class="col-xs-11 annotation-entry"><button id="annotTrash_<%= data.annotID%>" class="annotation-delete icon-trash pull-right"><span class="sr-only"><%= _t(\'rr_annotDelLnk\') %></span></button>\r\n          <div role="link">\r\n           <div class="annotation-page"><%= _t(\'rr_lpnPage\', {LPN: data.logicalPage}) %></div>\r\n           <div class="annotation-content"><%= data.labelText%></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n<% }%>  \r\n\r\n  \r\n</script> \r\n')
}), define("text!templates/panelBookNotesCompositeTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n   \n    <div id="panel-close" aria-hidden="true"><button class="btn-close icon-close" id="closePanel"></button></div>\n   \n    <div id=\'annotations-container\'>\n      <h2><%= _t(\'rr_annotations\') %><span class="sr-only">Section</span></H2>\n      <div id=\'annotation-book-title\' class="book-title"><%= BiblioData.title !== "undefined"?BiblioData.title:_t(\'rr_na\')%></div>\n\n      <div class="clearfix"></div>\n      <div id="annotations-list-container" class=\'\'>\n          <span class="sr-only">To read annotations you have made within a chapter, please use list commands for your screen reader.</span>\n         <ul id="notesBookResults" class="list-unstyled">\n          </ul>\n     </div>\n  \n    </div>  <!-- end annotations container -->\n</script>')
}), define("text!templates/panelBookNotesLoadingContentTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="mainPageContainer" >\n\n    <% if (typeof tmpUser !== "undefined" && !tmpUser.signedIn) { %>\n      <!-- if there are no annotations -->\n      <div id="annotations-empty-outer">\n        <div id="annotations-empty-inner">\n          <div class="icon-annotations-empty icon-annotations"></div>\n         <div id="annotations-empty-header"><%= _t(\'rr_pls_signin\') %></div>\n         <div id="annotations-empty-text"><%= _t(\'rr_bmarks_notes_highlight\') %></div>\n         <p> </p>\n          <div><button id="signInNoteButton" class="btn btn-primary btn-lg"> <%= _t(\'rr_sign_in\') %> </button></div>\n        </div>\n      </div>\n      <!-- end empty -->\n    <% } else {%>\n       <!-- if there are no annotations -->\n        <div id="annotations-empty-outer">\n          <div id="annotations-empty-inner">\n            <div class="icon-annotations-empty icon-annotations"></div>\n           <div id="annotations-empty-header"><%= _t(\'rr_no_annotations\') %></div>\n           <div id="annotations-empty-text"><%= _t(\'rr_bmarks_notes_highlight\') %></div>\n         </div>\n        </div>\n        <!-- end empty -->\n    <% } %>   \n    \n\n    \n</script>')
}), define("text!templates/panelBookNotesResultTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n\n \n      <div class="row annotation-chapter" id="chapterNotesSelection_<%=data.chapterId %>" >\n       <% if(data.annotCount >0 ) {%>\n          <div class="col-xs-1" aria-hidden="true"><span class="icon-panel-open"></span></div>\n          <div class="col-xs-9"  aria-label="<%= data.chapterName %>" ><%= data.chapterName %></div>\n          <div class="col-xs-2"><div id="annotCount_<%=data.chapterId %>" class="label annotCount"  aria-label="<%= _t(\'rr_annotInChap\', {ANNOTCNT: data.annotCount,CHAPNM:data.chapterName}) %>" ><%= data.annotCount%></div></div>\n        <% } else { %>\n          <div class="col-xs-1"></div>\n          <div class="col-xs-9" aria-label="<%= data.chapterName %>" id="noNotesHits_<%=data.chapterId%>" ><%= data.chapterName %></div>\n          <div class="col-xs-2"><div class="label"></div></div>\n       <% }%>\n        \n      </div>\n      <div  class="annotation-list">\n        <ul id="notesLevelSnips_<%=cptInd %>" class="list-unstyled">\n        </ul>\n     </div>\n  \n</script>\n\n')
}), define("text!templates/panelBookNotesResultChildTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n     \n      <div class="row">\n             <div class="col-xs-1 annotation-type annotation-color-bookmark"><span class="icon-annotation icon-bookmark"></span></div>\n             <div class="col-xs-11 annotation-entry annotation-entry-first"><button class="annotation-delete icon-trash pull-right"></button>\n              <div class="annotation-page"><%= _t(\'rr_page_10\') %></div>\n              <div class="annotation-content"><%= _t(\'rr_incipient_species\') %></div>\n             </div>\n      </div>\n        \n          \n  \n</script>')
}), define("text!templates/panelBookSearchTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n   \n    <div class="pull-right"><button id=\'closePanel\' class=\'pull-right btn-close icon-close\'></button></div>\n   <!-- <div class="panel-title clearfix">CONTENTS</div> -->\n   <div id=\'search-container\'>\n   \n      <!-- /////// SEARCH TITLE /////// -->\n     <H2><%= _t(\'rr_search\') %></H2>\n     <div class="book-title"><%= _t(\'rr_origin_of_species\') %></div>\n     <!-- /////// END SEARCH TITLE /////// -->\n \n      <div id="search-block">\n       <div id="help-block" class="help-block"></div>\n        <div class="input-group">\n         <input type="text" class="form-control" placeholder="<%= _t(\'rr_search_in_book\') %>">\n           <!-- <span class="input-group-btn">\n               <button class="btn btn-default btn-search-inline icons-close" type="button"></button>\n           </span> -->\n           <span class="input-group-btn">\n                <button class="btn btn-default btn-search-inline icons-return" type="button"></button>\n            </span>\n       </div>\n  \n        <div id=\'search-button\' class="pull-right">\n         <button type="button" class="btn btn-primary"><%= _t(\'rr_search\') %></button>\n       </div>\n      </div><!-- end search-block -->\n\n\n </div>  <!-- end search container -->\n</script>')
}), define("text!templates/readerMainContentTemplate.tmpl", [], function() {
    return ("<script type=\"text/template\" id=\"main-b\">\n    <div id='mainPageContainer' >\n     <button id='searchStart'><%= _t('rr_search_start') %></button> \n     <button id='showResults'><%= _t('rr_search_rst_chapter') %></button> \n     <button id='showResultsPage'><%= _t('rr_search_rst_page') %></button> \n      <button id='show-did-you-mean'><%= _t('rr_did_mean') %></button>\n      <button id='toggleHeader'><%= _t('rr_toggle_header') %></button><br />\n      <img src='img/render-cover.png' /><br />\n      <img src='img/render1.png' /><br />\n     <img src='img/render2.png' /><br />\n     <img src='img/render3.png' /><br />\n     <img src='img/render4.png' /><br />\n   </div>\n</script>\n")
}), define("text!templates/MainCompositeWrapperTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="compositeWrapper">\n  <div id="mainViewerPagesContainerWrapper">\n    <div id="mainViewerPagesContainer">\n     \n        </div>        \n        <!-- contextual menu definition -->\n   <div id="contextMenuPop" class=\'hide\'>\n      <button id="contextCopy" class="icon-copy"></button>\n      <button id="contextHighlightYellow" class="icon-highlight highlight-yellow"></button>\n     <button id="contextHighlightBlue" class="icon-highlight  highlight-blue"></button>\n      <button id="contextHighlightPink" class="icon-highlight  highlight-pink"></button>\n      <button id="contextNote" class="icon-note"></button>\n        <button id="contextCustomSearch" class="icon-extra-resources"></button>\n   </div>      \n    <div id="myNotePopId" class=\'hide\'>            \n       <div class="note-heading">\n          <button id="noteTextdelete" class="icon-trash"></button>\n          <button id="noteTextclose" class="icon-close-lg"></button>\n        </div>\n        <div class="note-body">\n         <textarea name="note-content" id="note-content" rows="10"></textarea>\n       </div>\n        <div class="note-footer">\n         <button id=\'noteTextCancel\' class="btn btn-default"><%= _t(\'rr_cancel\') %></button>\n         <button id=\'noteTextSave\' class="btn btn-primary"><%= _t(\'rr_save\') %></button>\n       </div>\n        <div class="note-resize">\n         <div id="noteResizeId" class="icon-resize note-resize-handle"></div>\n        </div>                  \n    </div>\n      \n    <div id="myNoteIconId" class=\'hide\'>             \n       <span class="note-collapsed-bg icon-note-bg"></span><span class="note-collapsed-front icon-note"></span>        \n    </div>\n      \n   </div>\n        \n        \n \n</script>\n')
}), define("text!templates/MainLoadingContentTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="mainPageContainer" >\n\n        <div class="spinner-wrapper" aria-label="Loading">\n          <br/>\n           <div class="spinner"></div>\n       </div>\n    \n</script>')
}), define("text!templates/MainContentTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="mainPageContainer" >\n\n  <% if(typeof(status) !== "undefined" && status !== "FAILURE") {%>\n     <% if(typeof(page) != "undefined") {%>\n      <div id="mainViewerImgCloakWrapper_<%=pageNum%>" class= "mainViewerImgContainer">\n       <div name="actualImgContent" style="height:<%=page.height  %>px;width:<%=page.width %>px; margin-left: auto; margin-right: auto;">\n          <img  src=\'docImage.action?encrypted=<%= page.parts[0] %>\' height="<%=page.height%>px" width="<%=page.width%>px"  class="mainViewerImg" />\n          <canvas id="mainViewerImgCloak_<%=pageNum%>" height="<%=page.height%>px" width="<%=page.width%>px" class="mainViewerImgCloak"></canvas>\n         <canvas id="mainViewerSearchCloak_<%=pageNum%>" height="<%=page.height%>px" width="<%=page.width%>px" class="mainViewerSearchCloak"></canvas>\n         <canvas id="mainViewerAnnotCloak_<%=pageNum%>" height="<%=page.height%>px" width="<%=page.width%>px" class="mainViewerAnnotCloak"></canvas>\n         <span id="mainViewerBookMark_<%=pageNum%>" class="bookmark <%= bookMarked() ? \'icon-bookmark-on\' : \'icon-bookmark-off\' %>" style="left:<%= page.width-60 %>px;" ></span>\n        </div>\n        </div><br/>\n     <% } else { %>\n        <div id="mainViewerImgCloakWrapper_<%=pageNum%>" class= "mainViewerImgContainer">\n       <div style="background:white;height:<%=ht%>px;width:<%=wd%>px; margin-left: auto; margin-right: auto;  border: 1px solid #B3B3B3;">\n         <br/>\n         <%  if(typeof(errorCode) !== "undefined" && (errorCode === "SESSION_TIMED_OUT" || errorCode === "SESSION_TIMEDOUT") ) {%>\n           <h2 style="text-align:center;">&nbsp;<i><%= _t(\'rr_session_timed_out_refresh\') %></i></h2>\n          <% } else { %>\n            <h2>&nbsp;<i> <%= _t(\'rr_loading\') %></i></h2>\n          <% } %>\n       </div>\n        </div><br/>\n     <% } %>\n <% } %>\n <% if(typeof(status) !== "undefined" && status === "FAILURE") {%>\n     <div id="mainViewerImgCloakWrapper_<%=pageNum%>" class= "mainViewerImgContainer">\n       <div style="background:white;height:<%=ht%>px;width:<%=wd%>px; margin-left: auto; margin-right: auto;  border: 1px solid #B3B3B3;">\n         <br/>\n         <h3 style="text-align:center;padding-left:30px;padding-right:30px;">&nbsp;<i> <%= wrapDashErrorMessage() %></i></h3>\n        </div>\n        </div><br/>\n <% } %>\n</script>')
}), define("text!templates/readerTextTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="readerTextTemp">\n\n\n    <div id="access-container" tabindex="0" aria-live="polite" >\n    <% if(typeof(status) !== "undefined" && status !== "FAILURE") {%>\n     \n      <%  if(typeof(errorCode) !== "undefined" && (errorCode === "SESSION_TIMED_OUT" || errorCode === "SESSION_TIMEDOUT") ) {%>\n       <h2 style="text-align:center;">&nbsp;<i><%= _t(\'rr_session_timed_out_continue_refresh\') %></i></h2>\n     <% } else { %>\n          <h2 id="access-bookTitle"><%= gbData.BiblioData.title %></h2>\n       \n          <div id="access-pagenumber"><%= _t(\'rr_pageOfText\', {PGCUR: gbData.tmpLpg[gbData.tmpFetchPageNum-1], PGLST:gbData.tmpLpg[gbData.tmpLpg.length - 1]}) %> </div>\n        \n          <div id="access-bookmark-status" tabindex="-1">\n           <% if (! _.isUndefined(annots !== "undefined") && annots.length > 0 && !_.isUndefined(_.find(annots, function(annotTmp) { return annotTmp.bookMark; })) ) {%>\n             <%  var  tmpNoteAnnot = _.find(annots, function(annotTmp) { return annotTmp.bookMark; });  %>\n             <%= _t(\'rr_hasBookMarkText\', {ABKMID: \'mainViewerBookMark_\'+tmpNoteAnnot.annotID }) %>\n            <% } else { %>\n              <%= _t(\'rr_hasNoBookMarkText\', {ABKMNID: \'mainViewerBookMark_0\' }) %>\n           <% } %>\n         </div>\n          <div id="access-bookmark-message" tabindex="-1" style="display:none;"><%= _t(\'rr_bookMarkCreatedText\') %></div>\n       \n          <div id="access-note-status" tabindex="-1">\n           <% if (! _.isUndefined(annots !== "undefined") && annots.length > 0 && !_.isUndefined(_.find(annots, function(annotTmp) { return "sticky" === annotTmp.annotType; })) ) {%>\n             <%  var  tmpNotesAnnot = _.find(annots, function(annotTmp) { return "sticky" === annotTmp.annotType; });   %>\n             <%= _t(\'rr_hasNotesCreatedText\', {ANTID: \'mainViewerNote_\'+tmpNotesAnnot.annotID }) %>\n            <% } else { %>\n              <%= _t(\'rr_hasNoNotesCreatedText\', {ANTNID: \'mainViewerNote_0\' }) %>\n            <% } %>\n         </div>\n        \n          <div id="access-page-content">\n            <%= pText %>\n          </div>\n        \n          <div id="access-nav-next"><a id="txtGoToNexPg" href=\'#\'><%= _t(\'rr_goToNexPageAria\') %></a></div>\n         <div id="access-nav-previous"><a id="txtGoToPrePg" href=\'#\'><%= _t(\'rr_goToPrePageAria\') %></a></div>\n     <% } %>\n     \n    <% } else { %>\n          <br/>\n         <h2>&nbsp;<i> <%= _t(\'rr_loading\') %></i></h2>\n        </div>\n      <% } %>\n   </div>\n \n <!-- Modal -->\n<div class="modal fade" id="notesTxtModal" tabindex="-1" role="dialog" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n        <h4 class="modal-title" id="myModalLabelNotesModal"><%= _t(\'rr_annotNt\') %></h4>\n      </div>\n      <form id="noteModalForm" class="form-horizontal" role="form">\n       <div class="modal-body modal-tightspace-bottom">\n              <% if (! _.isUndefined(annots !== "undefined") && annots.length > 0 && !_.isUndefined(_.find(annots, function(annotTmp) { return "sticky" === annotTmp.annotType; })) ) {%>\n          <% var  tmpNotesAnnot = _.find(annots, function(annotTmp) { return "sticky" === annotTmp.annotType; });   %>\n           <textarea placeholder="I am using only keyboard commands to edit this note" class="form-control" rows="10" id=\'noteContent_<%= tmpNotesAnnot.annotID%>\' style="resize:none"> <%= tmpNotesAnnot.label %></textarea>\n        <% } else { %>\n          <textarea placeholder="I am using only keyboard commands to edit this note" class="form-control" rows="10" id=\'noteContent_0\' style="resize:none"></textarea>\n       <% } %>      \n        <% if ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/i) ) {%>\n         <p class="modal-helptext"><%= _t(\'rr_copy_option_md\') %>. Delete this note under Annotations.</p>\n       <%}else{%>  \n          <p class="modal-helptext">\n               <% if (navigator.appVersion.indexOf("Mac")!=-1) { %> \n                    <%= _t(\'rr_command_c\') %>\n              <% } else { %> \n                      <%= _t(\'rr_control_c\') %>      \n              <% } %>\n               Delete this note under Annotations.\n          </p>\n        <%}%>\n       </div>\n      <div class="modal-footer modal-tightspace-top">\n       <button id=\'modalNCancel\' type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button>\n        <button id=\'modalNSave\' type="button" class="btn btn-primary"><%= _t(\'rr_save\') %></button>   \n        </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n \n</script>\n')
}), define("text!templates/panelBookSearchCompositeTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n   \n    <div id="panel-close" aria-hidden="true"><button class="btn-close icon-close" id="closePanel"></button></div>\n   \n    <div id=\'search-container\'>\n     <H2><%= _t(\'rr_search\') %><span class="sr-only">Section</span></H2>\n     <div class="book-title"><%= BiblioData.title !== "undefined"?BiblioData.title:"N/A"%></div>\n     <div id="search-block">\n       <div id="help-block" class="help-block"><%= _t(\'rr_search_bus_plan\') %></div>\n       <div class="input-group">\n         <input id="searchInBookTerm" type="text" class="form-control" placeholder="<%= _t(\'rr_search_in_book\') %>">\n           <span class="input-group-btn">\n                <button id="searchWithInBook" aria-label="<%= _t(\'rr_search\') %>" class="btn btn-default btn-search-inline icons-return" type="button"></button>\n            </span>\n       </div>\n  \n        <div id=\'search-button\' class="pull-right">\n         <button id="searchWithInBookSubmit" type="button" class="btn btn-primary"><%= _t(\'rr_search\') %></button>\n       </div>\n      </div><!-- end search-block -->\n\n     <div class="clearfix"></div>\n      <div id="searchBookResults" aria-live="polite"></div>\n     \n  </div>  <!-- end search container -->\n</script>')
}), define("text!templates/panelBookSearchNoResultTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="noSearchResultTmpl">\n    \n    <div id=\'noSearchResult\'>\n   <% if (typeof hasBST !== "undefined" && hasBST.length > 0 ) { %>\n          <div class="row">\n           <div class="col-xs-2 did-you-mean-result"><div class="did-you-mean-badge label-warning">0</div></div>\n           <div class="col-xs-10 did-you-mean-result no-left-padding"><%= _t(\'rr_results_for\') %> <em><%= searchTerm %></em>.</div>\n          </div>  \n          <div class="row">\n           <div class="col-xs-12 did-you-mean-result"><%= _t(\'rr_bln_search_not_supported\') %></div>\n         </div>  \n      \n     <% }else{ %> \n          <% if (typeof searchTerm !== "undefined"  && searchTerm.length > 0  ) { %>\n            <div class="row">\n             <div class="col-xs-2 did-you-mean-result"><div class="did-you-mean-badge label-warning">0</div></div>\n             <div class="col-xs-10 did-you-mean-result no-left-padding"><%= _t(\'rr_results_for\') %> <em><%= searchTerm %></em>. <%= _t(\'rr_pls_another_search\') %></div>\n           </div>  \n          <% }else{ %>\n            <H2><%= _t(\'rr_no_search_rslt\') %></H2>\n         <% } %>\n    <% } %>\n  </div>  <!-- end search container -->\n</script>\n\n')
}), define("text!templates/panelBookSearchChapterResultTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n   \n  <div id=\'search-string\' class="row search-string-block">\n    <div class="col-xs-10 search-string"><span class="label"><%= totalPageHits() %></span> <%= _t(\'rr_results_for\') %> <em><%= searchTerm %></em></div>\n   <div class="col-xs-2 search-string"><a id=\'toggle-results\' herf="#" data-toggle=\'tooltip\' title=\'<%= _t(\'rr_show_hide_results\') %>\'><strong><%= _t(\'rr_clear\') %></strong></a></div>\n  </div>\n    \n  <div id="search-results">\n   <div class="btn-group btn-group-results">\n     <button id="searchResultByChapter" type="button" class="btn btn-result-toggle btn-results"><%= _t(\'rr_by_chapter\') %></button>\n      <!-- <button id="searchResultByFrequencey" type="button" class="btn btn-result-toggle btn-results btn-results-deselected"><%= _t(\'rr_by_frequency\') %></button>  -->\n    </div>\n  </div>\n  \n  <!-- search results by chapter -->\n  <div id="search-results-list">\n    <!-- <span class="sr-only">To read search results within a chapter, please use list commands for your screen reader.</span>  -->\n    <ul id="searchResultsListByChapter" class="list-unstyled">\n    \n    </ul>\n \n  </div><!-- end search results by chapter -->\n</script>')
}), define("text!templates/panelBookSearchFrequencyResultTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="frequencySearchResultTmpl">\n   \n  <div id=\'search-string\' class="row search-string-block">\n    <div class="col-xs-11 search-string"><span class="label">30</span> <%= _t(\'rr_results_for\') %> <em><em><%= data.searchTerm %></em></div>\n    <div class="col-xs-1 search-string"><button id=\'toggle-results\' data-toggle=\'tooltip\' title=\'<%= _t(\'rr_show_hide_results\') %>\' class=\'toggle-results icon-results-show\'></button></div>\n  </div>\n    \n  <div id="search-results">\n   <div class="btn-group btn-group-results">\n     <button id="searchResultByChapterInFq" type="button" class="btn btn-result-toggle btn-results"><%= _t(\'rr_by_chapter\') %></button>\n      <!-- <button id="searchResultByFrequenceyInFq" type="button" class="btn btn-result-toggle btn-results btn-results-deselected"><%= _t(\'rr_by_frequency\') %></button>  -->\n    </div>\n  </div>\n  \n    \n    <div id=\'frequencySearchResult\'>\n      <H2><%= _t(\'rr_search_res_frq\') %></H2>\n </div>  <!-- end search container -->\n</script>')
}), define("text!templates/panelBookSearchYouMeanResultTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n   \n\n        <div id=\'did-you-mean\' class="did-you-mean-block">\n          <div class="row">\n         <% if (typeof sugession !== "undefined"   ) { %>\n            <div class="col-xs-2 did-you-mean-result"><div class="did-you-mean-badge label-warning">0</div></div>\n           <div class="col-xs-10 did-you-mean-result no-left-padding"><%= _t(\'rr_results_for\') %> <em><%= searchTerm %></em>.\n            <% if (typeof sugession !== "undefined" && sugession.length === 0 ) { %> <%= _t(\'rr_pls_another_search\') %><% } %>\n            </div>\n          <% } %>\n         </div>  \n          \n\n        <% if ( typeof sugession !== "undefined"  && sugession.length > 0 ) { %>\n          <div class=\'did-you-mean-head\'><%= _t(\'rr_did_mean\') %></div>\n         <%  _.each(sugession, function(tmpSugession) { %>\n           <div class="row">\n             <div class="col-xs-2 did-you-mean-result"><div class="did-you-mean-badge"><%= tmpSugession.termSuggestedfrequency%></div></div>\n             <div class="col-xs-10 did-you-mean-result no-left-padding"><a href=\'#\'><%= tmpSugession.termSuggested%></a></div>\n           </div>  \n           <% }); %>\n          </div><!-- end did you mean block -->\n       <% } %>\n       \n</script>\n\n')
}), define("text!templates/panelBookSearchChapterResultChildTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panel">\n     \n      <div class="row" id="chapterSelection_<%=cptInd %>" >\n       <% if(data.score >0 ) {%>\n         <div class="col-xs-1"><span class="icon-panel-open"></span></div>\n         <div class="col-xs-8"><%= data.title %> </div>\n          <div class="col-xs-3"><div class="result-relevance-outer" ><div class="result-relevance-inner" role="progressbar" aria-valuenow="<%=(data.score/2)%>" aria-valuemin="0" aria-valuetext="<%= _t(\'rr_searchScoreAria\') %> <%=(data.score/2)%>" aria-valuemax="100" style="width:<%=(data.score/2)%>px !important;" ></div></div></div>\n        <% } else { %>\n          <div class="col-xs-1"></div>\n          <div class="col-xs-8" id="noHits_<%=data.firstPage%>" ><%= data.title %></div>\n          <div class="col-xs-3"><div class="result-relevance-outer"><div class=""  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuetext="<%= _t(\'rr_searchScoreAria\') %> 0" aria-valuemax="100"  ></div></div></div>\n       <% }%>\n        \n      </div>\n        <div  class=\'search-level-2-group\'>\n         <ul id="chapterLevelSnips_<%=cptInd %>" class="list-unstyled">\n\n          </ul>\n       </div>\n\n</script>')
}), define("text!templates/panelBookSearchChapterResultChildSnipTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="panelSnip">\n   \n  \n    <% if (typeof data.orderedPagesWithSnippet !== "undefined" && data.orderedPagesWithSnippet !==null) { \n       var tmpLen= data.orderedPagesWithSnippet.length;\n       _.each(data.orderedPagesWithSnippet, function(tmpData, tmpInd) { %>\n       <li id="snipHit_<%= tmpData.pageNumber%>" role="link" tabindex="0" class="search-level-2 <%= (tmpInd===0 && tmpLen!==1)?\'search-level-2-first\':\'\' %> <%= (tmpInd===tmpLen-1)?\'search-level-2-last\':\'\'%>">\n         <div class="num-hits"><span class="label"><%= Math.round(tmpData.termFrequency)%></span> <%= _t(\'rr_results_on_page\', {LPN: tmpLpg[tmpData.pageNumber-1]}) %> </div><%= tmpData.highlightSnippets[0]%>\n        </li>\n    <% }); %>  \n  <% } %>\n\n\n\n</script>\n\n\n')
}), define("text!templates/readerAcstTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="downloadTmpl">\n  \n<!-- Download Modal -->\n<div class="modal fade modal-wizard download-modal-wizard" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="myLb1Device" >\n  <div class="modal-dialog" id="downloadModalSteps">\n  <% if (typeof BiblioData !== "undefined" && typeof DocUser !== "undefined" && DocUser.availableForDownload && DocUser.signedIn && (status==="has_access" || status==="nupo_confirm" || DocUser.alreadyNupo==="yes")) { \n     var userNavType= "desktopDevice";\n        var ckDiviceType=null;\n        var ckRadioSel="ownDevice";\n      if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ){\n            userNavType = \'iosDevice\';\n      }else if ( navigator.userAgent.match(/(Android)/i) ){\n               userNavType = \'androidDevice\';\n         }\n         if(tmpCkName){\n           var cookiePieces = tmpCkName.split(\'-\');\n          ckDiviceType=cookiePieces[0]+"Device";\n          ckRadioSel= (cookiePieces[1]==1?\'ownDevice\':\'sharedDevice\');\n          userNavType = ckDiviceType;\n         }\n %>\n    <!--  Step 1 -->\n    <div class="modal-content wizard-box wizard-step-device <%= (ckDiviceType ?\'attempted\':\'attempted active\')%>" id="deviceStep">\n\n      <div class="step-header-wrapper">\n        <div class="step-header">\n          <h2 class="modal-title collapsed"><span><%= _t(\'rr_one_num\') %></span><%= _t(\'rr_device\') %></h2>\n          <h2 id="myLbDevice" class="modal-title expanded "><span><%= _t(\'rr_one_num\') %></span><%= _t(\'rr_device_using\') %></h2>\n        </div>\n\n        <a href="#" class="change-button on-attempted"><%= _t(\'rr_edit_step\') %></a>\n      </div>\n\n      <div class="wizard-content">\n        <!-- devices list -->\n        <ul class="devices-list clearfix" aria-labelledby="list of devices" >\n          <li id="desktopDevice" role="listitem" class="device-desktop <%= (userNavType ===\'desktopDevice\'?\'device-selected\':\'\')%>"> <!--  device-selected -->\n            <div class="device-icon icon-device-desktop" data-icon-class="icon-device-desktop"  aria-hidden="true" aria-describedby="dtLpt"></div>\n            <div id="dtLpt" class="device-type">\n              <span class="title"><%= _t(\'rr_laptop_desktop\') %></span>\n            </div>\n          </li>\n          <li id="iosDevice" role="listitem" class="device-ios <%= (userNavType ===\'iosDevice\'?\'device-selected\':\'\')%>">\n            <div class="device-icon icon-device-ios" data-icon-class="icon-device-ios"  aria-hidden="true" aria-describedby="dtIos"></div>\n            <div  id="dtIos"  class="device-type" >\n              <span class="title"><%= _t(\'rr_iOS\') %></span>\n              <span class="cats"><%= _t(\'rr_iPad_iPhone\') %></span>\n            </div>\n          </li>\n          <li id="androidDevice" role="listitem" class="device-android <%= (userNavType ===\'androidDevice\'?\'device-selected\':\'\')%>">\n            <div class="device-icon icon-device-android" data-icon-class="icon-device-android"  aria-hidden="true" aria-describedby="dtAndr"></div>\n            <div  id="dtAndr" class="device-type">\n              <span class="title"><%= _t(\'rr_android\') %></span>\n              <span class="cats"><%= _t(\'rr_phone_tablet\') %></span>\n            </div>\n          </li>\n          <li id="otherDevice" role="listitem" class="device-other">\n            <div class="device-icon icon-device-unknown" data-icon-class="icon-device-unknown"  aria-hidden="true" aria-describedby="dtOth"></div>\n            <div id="dtOth" class="device-type">\n              <span class="title"><%= _t(\'rr_other\') %></span>\n            </div>\n          </li>\n        </ul>\n\n        <!-- device selection form -->\n        <form class="form-horizontal form-device-type"  role="form">\n          <div class="form-group">\n            <div class="col-xs-12   col-xs-offset-1  col-sm-9 col-sm-offset-3">\n              <div id="ownDeviceParent" class="radio pretty-control"><span  class="pretty-radio <%= (ckRadioSel===\'ownDevice\'?\'checked\':\'\') %>"><a href="#"><p aria-describedby="ownDevice" class="sr-only">Radio button <%= _t(\'rr_own_computer\') %></p></a></span>\n                <label for="ownDevice"  aria-hidden="true"><%= _t(\'rr_own_computer\') %></label><input  aria-hidden="true" type="radio" name="deviceType" id="ownDevice" value="1" >\n              </div>\n              <div id="sharedDeviceParent" class="radio pretty-control pretty-radio" ><span class="pretty-radio <%= (ckRadioSel===\'sharedDevice\'?\'checked\':\'\') %>"><a href="#"><p aria-describedby="sharedDevice" class="sr-only">Radio button <%= _t(\'rr_public_computer\') %></p></a></span>\n                <label for="sharedDevice"  aria-hidden="true"><%= _t(\'rr_public_computer\') %></label><input  aria-hidden="true" type="radio" name="deviceType" id="sharedDevice" value="2" >\n              </div>\n            </div>\n          </div>\n\n          <div class="form-group action-row">\n            <div class="col-xs-12 col-sm-offset-4 col-sm-8 clearfix">\n              <button type="submit" class="btn btn-primary btn-lg dl-btn-resp" id="continueButton"><%= _t(\'rr_continue\') %></button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n    \n    <!-- Step 2 -->\n    <div class="modal-content wizard-box wizard-step-install <%= (ckDiviceType ?\'attempted\':\'\')%>" id="installStep">\n      <div class="step-header-wrapper">\n        <div class="step-header">\n          <h2 class="modal-title collapsed"><span><%= _t(\'rr_two_num\') %></span><%= _t(\'rr_install\') %></h2>\n          <h2 class="modal-title expanded"><span><%= _t(\'rr_two_num\') %></span><%= _t(\'rr_install\') %></h2>\n        </div>\n\n        <a href="#" class="change-button on-attempted"><%= _t(\'rr_edit_step\') %></a>\n      </div>\n\n      <div class="wizard-content">\n\n      </div>\n    </div>\n    \n    <!--  Step 3 -->\n    <div class="modal-content wizard-box wizard-step-download <%= (ckDiviceType ?\'active\':\'\')%>"  id="downloadStep">\n      <div class="step-header">\n        <h2 class="modal-title collapsed"><span><%= _t(\'rr_three_num\') %></span><%= _t(\'rr_download\') %></h2>\n        <h2 class="modal-title expanded"><span><%= _t(\'rr_three_num\') %></span><%= _t(\'rr_download\') %></h2>\n      </div>\n      <div class="wizard-content">\n      \n   <h3><span><%= BiblioData.title !== "undefined"?BiblioData.title:_t(\'rr_na\')%></span></h3>\n           <div class="row">\n             <div class="col-xs-3 col-sm-3">\n               <img src="<%=BiblioData.coverURL%>" alt="" class="img-responsive" />\n              </div>\n              <div class="col-xs-9 col-sm-9 book-meta">\n                 <p><%= _t(\'rr_author\') %><% if(typeof BiblioData.contibutors !== "undefined"){ var tmpCtbs= (BiblioData.contibutors.slice(0,3)); %><%=tmpCtbs.join()%> <% }else{%> <%=_t(\'rr_na\') %> <% }%></p>\n                 <p><%= _t(\'rr_length\', {SIZ: BiblioData.pages}) %></p>\n                  <p><%= _t(\'rr_expires_in\') %>                     \n                             <% if (DocUser.activeDownload) { %>\n                                 <% if (DocUser.availableDownloadCheckoutDays > 0) { %>\n                                     <%= DocUser.availableDownloadCheckoutDays  %>  <%= _t(\'rr_days\') %>\n                                <% } else { _t(\'rr_less_day_download\')  } %>                    \n                            <% } else { %>\n                                 <%= DocUser.availableDownloadCheckoutDays  %> <%= _t(\'rr_days\') %>\n                             <% } %>               \n                      </p>\n                 <p><%= _t(\'rr_file_size\', {FKB: BiblioData.fileSize,FMB:(BiblioData.fileSize / 1024).toFixed(1)}) %></p> \n             </div>\n    </div>   \n        \n        \n        <div class="action-row">\n         <a href="acsDownload.action?docID=<%= DocUser.docID%>&op=final" type="button" class="btn btn-primary btn-lg dl-btn-resp" id="downloadBookButton"><%= _t(\'rr_d_book\') %></a><br/><br/>\n         <a href="readerSupportHelp.action" target="_blank" class="dl-btn-resp" ><%= _t(\'rr_need_help\') %></a>\n        </div>\n      </div>\n    </div>\n   <% } else if(typeof DocUser !== "undefined" && !DocUser.signedIn) { %>\n       <div class="modal-content"  id="deviceSignInStep">\n          <div class="modal-body modal-tightspace-bottom"> \n          <h4><p style="text-align:center;"><%= _t(\'rr_pls\') %> <a href=\'login.action\'><%= _t(\'rr_signin\') %></a>.</p><br/></h4>\n            </div>\n      </div><!-- /.modal-content -->\n    <% } else if(typeof status !== "undefined" && status!=="no_login" ) { %>\n        <div class="modal-content wizard-box wizard-step-device active" id="deviceErrorStep">\n             <div class="row">\n           <div class="col-sm-2 col-sm-offset-1  alert-hand"><span class="icon-hand"></span></div>\n           <div class="col-sm-9">\n              <h3 class=\'alert-h3\'><%= _t(\'rr_book_not_available\') %>.</h3>\n           </div>\n          </div>\n          <div class="modal-footer">\n            <button id=\'modalAlertCancel\' type="button" class="btn btn-primary" data-dismiss="modal"><%= _t(\'rr_close\') %></button> \n              </div>\n      </div>\n    <% } %>\n    <button type="button" class="close wizard-close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n  </div>\n   <% if (typeof status !== "undefined" && status==="nupo_confirm" && ( typeof DocUser !== "undefined" && typeof DocUser.alreadyNupo === "undefined") ) {%>\n    <div class="modal-dialog" id="downloadNupoStep">\n          <div class="modal-content wizard-box wizard-step-device active" id="deviceErrorStep">\n             <div class="modal-body">\n              <div class="row">\n           <div class="col-xs-2 col-xs-offset-1 alert-icon"><span class="icon-idea"></span></div>\n            <div class="col-xs-9">\n              <h3 class=\'alert-h3\'><%= _t(\'rr_last_copy_book\') %></h3>\n              <p><%= _t(\'rr_d_no_longer_access\') %></p>\n           </div>\n          </div>\n          </div>\n      <div class="modal-footer">\n          <button id=\'modalAlertCancel\' type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button> \n         <a href="#" type="button" class="btn btn-primary" id="modalAlertFirstContinueButton"><%= _t(\'rr_cnt_d\') %></a>\n        </div>\n  <% } %>\n     <button type="button" class="close wizard-close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n    </div>\n  </div>\n</div>\n<!--  End: download modal dialog -->\n\n \n</script>\n')
}), define("text!templates/subSectionDeviceSpecificTemplate.tmpl", [], function() {
    return ('<%             readerLink = {\n                 "iosDevice": \'http://itunes.com/apps/bluefirereader\',\n                 "androidDevice": \'https://play.google.com/store/apps/details?id=com.bluefirereader\',\n                "desktopDevice": \'http://www.adobe.com/products/digital-editions/download.html\'\n             };\n%>\n<div class="row">\n          <div class="col-xs-3">\n            <i class="icon-idea info-icon" aria-hidden="true"></i>\n          </div>\n          <div class="col-xs-9 copy">\n                <% if(deviceFormFactor === \'otherDevice\') { %>  \n         <p><%= _t(\'rr_not_officially_download_to_other_devices\') %></p>\n       <% } else { %> \n            <h3><%= _t(\'rr_you_need\', {DREADER: reader}) %></h3>\n                        <% if(deviceOwnership === \'1\') { %>  \n                                <p><%= _t(\'rr_dld_adobeReader_extra\') %><a href="<%= readerLink[deviceFormFactor] %>" target="_blank"><%= reader %></a> <%= _t(\'rr_dld_adobeReader\') %></p>\n                                <% if(deviceFormFactor == \'desktopDevice\') { %>\n                                  <p><%= _t(\'rr_aFree\') %> <a href="http://www.adobe.com/products/digital-editions/ebookcreateid.html" target="new"><%= _t(\'rr_adobeID\') %></a> <%= _t(\'rr_transfer_book_device\') %></p>\n                              <% } else { %>\n                                    <p><%= _t(\'rr_you_need_free\') %> <a href="http://www.adobe.com/products/digital-editions/ebookcreateid.html" target="new"><%= _t(\'rr_adobeID\') %></a> <%= _t(\'rr_read_book\') %></p>\n                             <% } %>\n                        <% } else { %>\n                                <p class="copy-larger hidden-xs"><b><%= _t(\'rr_tip\') %></b> <%= _t(\'rr_d_own_computer\') %></p> \n                                 <p><a href="<%= readerLink[deviceFormFactor] %>" target="_blank"><%= reader %></a> <%= _t(\'rr_reqDownloadBooks\') %></p>\n                        <% } %>\n       <% } %>                \n             </div>\n</div>\n\n<div class="action-row">\n   <a href="<%= (deviceOwnership === \'1\' ? readerLink[deviceFormFactor] : \'#\') %>" target="_blank" type="button" class="btn btn-primary btn-lg dl-btn-resp <%= privateClass%>" id="getReaderButton"><%= buttonTitle%></a>\n    <% if(deviceOwnership === \'1\' && deviceFormFactor !== \'otherDevice\') { %>  \n      <a href="#" class="title skip-install" id="doneInstallStep"><%= _t(\'rr_done_with_step\') %> &rsaquo;</a>\n    <% } %>  \n</div>\n ')
}), define("text!templates/subSectionErrorInACSTemplate.tmpl", [], function() {
    return ('         <div class="modal-content wizard-box wizard-step-device active" id="deviceErrorStep">\n           <!--  show error messages -->\n            <div class="row">\n              <div class="col-sm-2 col-sm-offset-1  alert-hand" aria-hidden="true"><span class="icon-hand"></span></div>\n              <div class="col-sm-9">\n                <h3 class=\'alert-h3\'><%= _t(\'rr_book_not_available\') %></h3>\n              </div>\n            </div>\n        <div class="modal-footer">\n          <button id=\'modalAlertCancel\' type="button" class="btn btn-primary" data-dismiss="modal"><%= _t(\'rr_close\') %></button> \n            </div>\n        <!--  end show error messages -->\n     </div>\n<button class="close wizard-close" aria-hidden="true" data-dismiss="modal" type="button">\u00d7</button>')
}), define("text!templates/subSectionNupoConfirmTemplate.tmpl", [], function() {
    return ('  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" id="alertModalDismiss" class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n        <h4 class="modal-title" id="myModalLabel"><%= _t(\'rr_alert\') %></h4>\n      </div>\n      <div class="modal-body">\n        <div class="row">\n      <div class="col-sm-2 col-sm-offset-1  alert-hand"><span class="icon-hand" aria-hidden="true"></span></div>\n      <div class="col-sm-9">\n        <h3 class=\'alert-h3\'><%= _t(\'rr_book_not_available\') %></h3>\n      </div>\n    </div>\n      </div>\n    <div class="modal-footer">\n      <button id=\'modalAlertCancel\' type="button" class="btn btn-default" data-dismiss="modal"><%= _t(\'rr_cancel\') %></button> \n     <a href="acsDownload.action?docID=<%= DocUser.docID%>&op=final" type="button" class="btn btn-primary" id="modalAlertContinueButton"><%= _t(\'rr_cnt_d\') %></a>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n')
}), define("text!templates/readerSignInTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="dummyTemp">\n\n<% if( (typeof result !== "undefined" && !result) || (typeof errorCode !== "undefined" && (errorCode === "SESSION_TIMED_OUT" || errorCode === "LOGIN_REQUIRED"))){ %>\n  <!-- Modal -->\n  <div class="modal fade" id="signInModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n   <div class="modal-dialog">\n      <div class="modal-content">\n       <div class="modal-header">\n          <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n         <h4 class="modal-title" id="myModalLabel"><%= _t(\'rr_sign_in\') %></h4>\n        </div>\n         <div class="modal-body modal-tightspace-bottom"> \n          <div class="row">\n         <div class="col-xs-11">\n         <iframe frameborder="0" height="<%= ( (typeof authType  !== "undefined" && authType!==\'ebraryAuth\')? 180:380)%>" width="560" scrolling="no" src="showLoginDialog.action?key=<%=tmpData %>&opFor=newRR"></iframe>\n          </div>\n          <div class="col-xs-1"></div>\n        </div>\n          </div>\n      </div><!-- m-content -->\n    </div><!-- .m-dialog -->\n  </div><!-- m -->\n<% }else if(typeof errorCode !== "undefined" && (errorCode === "SERVER_ERROR")){\n  location.reload();\n } %>\n</script>\n')
}), define("text!templates/readerCiteTemplate.tmpl", [], function() {
    return ('<script type="text/template" id="citeTextTemp">\n\n\n  <div class="modal fade" id="citeModal" tabindex="-1" role="dialog"  >\n   <div class="modal-dialog">\n      <div class="modal-content">\n       <div class="modal-header">\n          <button type="button"  class="close btn-close" data-dismiss="modal" ><span class="icon-close" aria-hidden="true"></span><span class="sr-only"><%= _t(\'rr_close\') %></span></button>\n         <h4 class="modal-title" id="myModalLabelCiteModal"><%= _t(\'rr_citation\') %></h4>\n        </div>\n        <div class="modal-body">\n          <div class="modal-subhead"><%= _t(\'rr_copy_citation\') %></div>\n            <form class="form-horizontal" role="form">\n              <div class="form-group">\n                <label for="cite-format" class="col-xs-2 modal-label control-label align-left"><%= _t(\'rr_format\') %></label>\n               <div class="col-xs-9 align-right">\n              <select class="form-control" id="cite-format"></select>\n               </div>\n                <div class="col-xs-1"></div>\n              </div>\n              \n             <div class="form-group">\n                 <label for="citation-content" class="control-label sr-only"></label>\n                  <div class="col-xs-12">\n                 <textarea name="citation-content" id="citation-content" class="modal-textarea form-control" rows="5" style="resize:none"></textarea>\n                  <% if ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/i) ) {%>\n                <p class="modal-helptext"><%= _t(\'rr_copy_option_md\') %></p>\n              <%}else{%>  \n                <p class="modal-helptext">\n                     <% if (navigator.appVersion.indexOf("Mac")!=-1) { %> \n                          <%= _t(\'rr_command_c\') %>\n                    <% } else { %> \n                            <%= _t(\'rr_control_c\') %>      \n                    <% } %>\n                </p>\n              <%}%>\n           </div>\n          </div>\n          \n          <div class="modal-subhead space-before"><%= _t(\'rr_export_citation\') %></div>\n         <button  type="button" id="citationRefWorks" class="btn btn-default" ${showRefworks==\'1\'? \'\' : \'disabled="disabled"\'}><%= _t(\'rr_ref_flow\') %></button> \n          <a href="biblioExport.action?docID=<%= DocUser.docID%>" type="button" id="citationEndNoteCitavi" class="btn btn-default" ${showEndnote==\'1\'? \'\' : \'disabled="disabled"\'}><%= _t(\'rr_endNote_cit\') %></a>\n        </form> \n          </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary" data-dismiss="modal"><%= _t(\'rr_close\') %></button>\n         </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n </div><!-- /.modal -->\n \n</script>\n')
}), define("templates", ["require", "text!templates/readerSkeltonLayoutTemplate.tmpl", "text!templates/readerToolBarTemplate.tmpl", "text!templates/readerShareLinkTemplate.tmpl", "text!templates/readerCopyTextTemplate.tmpl", "text!templates/readerPrintMainWrapperTemplate.tmpl", "text!templates/readerPrintRadioTemplate.tmpl", "text!templates/readerPrintSelectionTemplate.tmpl", "text!templates/readerPrintPreviewTemplate.tmpl", "text!templates/readerPrintCreateTemplate.tmpl", "text!templates/readerPrintOpenTemplate.tmpl", "text!templates/readerPrintErrorTemplate.tmpl", "text!templates/dummyTemplate.tmpl", "text!templates/readerPrintTemplate.tmpl", "text!templates/readerSideBarTemplate.tmpl", "text!templates/readerPanelSearchTemplate.tmpl", "text!templates/readerPanelTocTemplate.tmpl", "text!templates/readerPanelBookResourceTemplate.tmpl", "text!templates/panelBookDetailsTemplate.tmpl", "text!templates/panelBookNotesTemplate.tmpl", "text!templates/panelBookNotesCompositeTemplate.tmpl", "text!templates/panelBookNotesLoadingContentTemplate.tmpl"
    , "text!templates/panelBookNotesResultTemplate.tmpl", "text!templates/panelBookNotesResultChildTemplate.tmpl", "text!templates/panelBookSearchTemplate.tmpl", "text!templates/readerMainContentTemplate.tmpl", "text!templates/MainCompositeWrapperTemplate.tmpl", "text!templates/MainLoadingContentTemplate.tmpl", "text!templates/MainContentTemplate.tmpl", "text!templates/readerTextTemplate.tmpl", "text!templates/panelBookSearchCompositeTemplate.tmpl", "text!templates/panelBookSearchNoResultTemplate.tmpl", "text!templates/panelBookSearchChapterResultTemplate.tmpl", "text!templates/panelBookSearchFrequencyResultTemplate.tmpl", "text!templates/panelBookSearchYouMeanResultTemplate.tmpl", "text!templates/panelBookSearchChapterResultChildTemplate.tmpl", "text!templates/panelBookSearchChapterResultChildSnipTemplate.tmpl", "text!templates/readerAcstTemplate.tmpl", "text!templates/subSectionDeviceSpecificTemplate.tmpl", "text!templates/subSectionErrorInACSTemplate.tmpl", "text!templates/subSectionNupoConfirmTemplate.tmpl"
    , "text!templates/readerSignInTemplate.tmpl", "text!templates/readerCiteTemplate.tmpl"], function(e) {
    return ({readerSkeltonLayoutTemplate: e("text!templates/readerSkeltonLayoutTemplate.tmpl"),readerToolBarTemplate: e("text!templates/readerToolBarTemplate.tmpl"),readerShareLinkTemplate: e("text!templates/readerShareLinkTemplate.tmpl"),readerCopyTextTemplate: e("text!templates/readerCopyTextTemplate.tmpl"),readerPrintMainWrapperTemplate: e("text!templates/readerPrintMainWrapperTemplate.tmpl"),readerPrintRadioTemplate: e("text!templates/readerPrintRadioTemplate.tmpl"),readerPrintSelectionTemplate: e("text!templates/readerPrintSelectionTemplate.tmpl"),readerPrintPreviewTemplate: e("text!templates/readerPrintPreviewTemplate.tmpl"),readerPrintCreateTemplate: e("text!templates/readerPrintCreateTemplate.tmpl"),readerPrintOpenTemplate: e("text!templates/readerPrintOpenTemplate.tmpl"),readerPrintErrorTemplate: e("text!templates/readerPrintErrorTemplate.tmpl"),dummyTemplate: e("text!templates/dummyTemplate.tmpl"),
        readerPrintTemplate: e("text!templates/readerPrintTemplate.tmpl"),readerSideBarTemplate: e("text!templates/readerSideBarTemplate.tmpl"),readerPanelSearchTemplate: e("text!templates/readerPanelSearchTemplate.tmpl"),readerPanelTocTemplate: e("text!templates/readerPanelTocTemplate.tmpl"),readerPanelBookResourceTemplate: e("text!templates/readerPanelBookResourceTemplate.tmpl"),panelBookDetailsTemplate: e("text!templates/panelBookDetailsTemplate.tmpl"),panelBookNotesTemplate: e("text!templates/panelBookNotesTemplate.tmpl"),panelBookNotesCompositeTemplate: e("text!templates/panelBookNotesCompositeTemplate.tmpl"),panelBookNotesLoadingContentTemplate: e("text!templates/panelBookNotesLoadingContentTemplate.tmpl"),panelBookNotesResultTemplate: e("text!templates/panelBookNotesResultTemplate.tmpl"),panelBookNotesResultChildTemplate: e("text!templates/panelBookNotesResultChildTemplate.tmpl"),panelBookSearchTemplate: e("text!templates/panelBookSearchTemplate.tmpl"),readerMainContentTemplate: e("text!templates/readerMainContentTemplate.tmpl"
        ),mainCompositeTemplate: e("text!templates/MainCompositeWrapperTemplate.tmpl"),mainLoadingContentTemplate: e("text!templates/MainLoadingContentTemplate.tmpl"),mainContentTemplate: e("text!templates/MainContentTemplate.tmpl"),readerTextTemplate: e("text!templates/readerTextTemplate.tmpl"),panelBookSearchCompositeTemplate: e("text!templates/panelBookSearchCompositeTemplate.tmpl"),panelBookSearchNoResultTemplate: e("text!templates/panelBookSearchNoResultTemplate.tmpl"),panelBookSearchChapterResultTemplate: e("text!templates/panelBookSearchChapterResultTemplate.tmpl"),panelBookSearchFrequencyResultTemplate: e("text!templates/panelBookSearchFrequencyResultTemplate.tmpl"),panelBookSearchYouMeanResultTemplate: e("text!templates/panelBookSearchYouMeanResultTemplate.tmpl"),panelBookSearchChapterResultChildTemplate: e("text!templates/panelBookSearchChapterResultChildTemplate.tmpl"),panelBookSearchChapterResultChildSnipTemplate: e("text!templates/panelBookSearchChapterResultChildSnipTemplate.tmpl"),readerAcstTemplate
        : e("text!templates/readerAcstTemplate.tmpl"),subSectionDeviceSpecificTemplate: e("text!templates/subSectionDeviceSpecificTemplate.tmpl"),subSectionErrorInACSTemplate: e("text!templates/subSectionErrorInACSTemplate.tmpl"),subSectionNupoConfirmTemplate: e("text!templates/subSectionNupoConfirmTemplate.tmpl"),readerSignInTemplate: e("text!templates/readerSignInTemplate.tmpl"),readerCiteTemplate: e("text!templates/readerCiteTemplate.tmpl")})
}), define("layouts/ReaderLayout", ["marionette", "models/ReaderArgs", "templates", "vent"], function(e, t, n, r) {
    return e.Layout.extend({template: n.readerSkeltonLayoutTemplate,id: "readerLayout",initialize: function() {
            this.readrArgs = new t
        },regions: {toolBarRegion: "#toolBarLayoutRegion",sideBarRegion: "#sideBarLayoutRegion",panelRegion: "#panelLayoutRegion",mainRegion: "#mainLayoutRegion"}})
}), define("models/TBShareM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({initialize: function(e, t) {
        },parse: function(e, t) {
            var n = e;
            return n
        }})
}), define("views/ReaderShareLinkItemView"
, ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBShareM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerShareLinkTemplate,el: "#shareBookLinkWrapper",initialize: function(t) {
            var n = _.extend({}, t), r = "WinOS";
            navigator.appVersion.indexOf("Mac") != -1 && (r = "MacOS"), n.OSName = r;
            var i = new Date, o = DanaMethodAttr("attr", e(DanaGetlocation(location)), "href"), u = o.split("?");
            o = u[0] + "?ppg=" + e("#current-page").val() + "&docID=" + t.docID + "&tm=" + i.getTime(), n.shareURL = o, this.model = new s(n), this.model.bind("sync", this.render, this), this.render()
        },events: {"hidden.bs.modal": "goingToHideMode","keydown #shareBookLink": "lookForCopy"},onRender: function() {
            navigator.appVersion.indexOf("Mac") == -1 && DanaMethodAttr("attr", this.$el.find("#shareBookLink"), "aria-labelledby", "myShareModalLabel"), this.uAccsMdRR = e("#enableAccessiblity").val() === "no" ? 1 : 0, this.uAccsMdRR === 0 && e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#shareUrl").focus(), e("#shareUrl").select()
            }, 550)), e("#shareBookLink").modal("show").focus()
        },goingToHideMode: function(
        ) {
            this.doneCopy(), this.remove(), e("#toolLink").focus()
        },lookForCopy: function(t) {
            var n = t.which;
            t.ctrlKey && n === 67 && (e("#shareUrl").focus(), e("#shareUrl").select())
        },doneCopy: function(t) {
            e("#shareUrl").focus(), e("#shareUrl").select(), e("#shareUrl").trigger({type: "keydown",which: 67})
        }})
}), define("models/TBCopyTextM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({url: function() {
            var e = 0, n = 5e4, r = t("#current-page").val();
            this.cpTmp.currentSelections.active === !0 && (r = this.cpTmp.currentSelections.active_page, e = this.cpTmp.currentSelections.s_quad, n = this.cpTmp.currentSelections.e_quad);
            var i = "op=copy&encID=" + this.cpTmp.encID + "&page=(" + r + ")&start=" + e + "&end=" + n + "&offset=" + (new Date).getTimezoneOffset();
            return ("remoteDocServer.api?remote_id=" + this.cpTmp.ck + "&encrypted=" + this.cpTmp.enc(i) + "&nq=1")
        },parse: function(e, t) {
            if (typeof e.dcy != "undefined") {
                var n = JSON.parse(this.cpTmp.dec(e.dcy)), r = "WinOS";
                return navigator.appVersion.indexOf("Mac") != -1 && (r = "MacOS"), n.OSName = r, n
            }
            return e
        },initialize: function(
        e) {
            this.cpTmp = e
        }})
}), define("utils/ebreaderUtil", [], function() {
    function t() {
        if (!(this instanceof t))
            throw new TypeError("rspUtil constructor cannot be called as a function.")
    }
    function n(e, t) {
        var n = i(e), r = n.length, s = n[r - 1], u = n[0], a = 2654435769, f, l, c = Math.floor(6 + 52 / r), h = 0;
        while (c-- > 0) {
            h += a, l = h >>> 2 & 3;
            for (var p = 0; p < r; p++)
                u = n[(p + 1) % r], f = (s >>> 5 ^ u << 2) + (u >>> 3 ^ s << 4) ^ (h ^ u) + (t[p & 3 ^ l] ^ s), s = n[p] += f
        }
        return o(n)
    }
    function r(e, t) {
        var n = u(e), r = n.length, i = n[r - 1], o = n[0], a = 2654435769, f, l, c = Math.floor(6 + 52 / r), h = c * a;
        while (h != 0) {
            l = h >>> 2 & 3;
            for (var p = r - 1; p >= 0; p--)
                i = n[p > 0 ? p - 1 : r - 1], f = (i >>> 5 ^ o << 2) + (o >>> 3 ^ i << 4) ^ (h ^ o) + (t[p & 3 ^ l] ^ i), o = n[p] -= f;
            h -= a
        }
        return s(n)
    }
    function i(e) {
        e += " ";
        var t = new Array(Math.floor(e.length / 2));
        for (var n = 0; n < t.length; n++)
            t[n] = e.charCodeAt(n * 2) + (e.charCodeAt(n * 2 + 1) << 16);
        return t
    }
    function s(e) {
        var t = new Array(e.length);
        for (var n = 0; n < e.length; n++)
            t[n] = String.fromCharCode(e[n] & 65535, e[n] >>> 16 & 65535);
        return t.join("")
    }
    function o(e) {
        var t = "";
        for (var n = 0; n < e.length; n++)
            t = t + DanaMethodToString("toString", (e[n] >> 28 & 15), 16) + DanaMethodToString("toString", (
            (e[n] & 268435455) + 268435456), 16);
        return t
    }
    function u(e) {
        var t, n = new Array(e.length / 9);
        for (var r = 0; r < n.length; r++)
            t = e.charAt(r * 9) + e.substr(r * 9 + 2, 7), n[r] = parseInt(t, 16);
        return n
    }
    var e = [];
    return t.prototype = {constructor: t,init: function(t) {
            e = new Array(4), e[0] = parseInt(t.substr(0, 8), 16) & 65535, e[1] = parseInt(t.substr(8, 8), 16) & 65535, e[2] = parseInt(t.substr(16, 8), 16) & 65535, e[3] = parseInt(t.substr(24, 8), 16) & 65535
        },enc: function(t) {
            return n(t, e)
        },dec: function(t) {
            return t = DanaMethodReplace("replace", t, /^\s+|\s+$/g, ""), r(t, e)
        }}, t
}), define("views/ReaderCopyTextItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBCopyTextM", "utils/ebreaderUtil", "i18next"], function(e, t, n, r, i, s, o, u) {
    return t.ItemView.extend({template: n.readerCopyTextTemplate,el: "#copyTextWrapper",initialize: function(e) {
            this.ck = i.readCookie("ESESSIONID");
            if (this.ck !== null) {
                this.pebr = new o, this.pebr.init(this.ck);
                var t = _.extend({}, this.pebr, {ck: this.ck}, e);
                this.model = new s(t), this.model.bind("sync", this.render, this), this.model
                .fetch()
            }
        },events: {},onRender: function() {
            e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#copyContent").focus(), e("#copyContent").select()
            }, 550)), r.trigger("resetPgSel", !0, !0), r.trigger("clsPgSel", this.model.get("pageNum"), !0), e("#copyModal").modal("show");
            if (!_.isUndefined(this.model.get("status-code")) && this.model.get("status-code") !== 1) {
                var t = parseInt(this.model.get("remainingCopy")) || 0;
                e("#remainingCopy").length > 0 && e("#remainingCopy").empty().text(t), typeof this.model.get("DocUser") != "undefined" && (this.model.get("DocUser").remainingCopyCount = t), t <= 0 && (DanaMethodAttr("attr", e("#toolCopy"), "disabled", "disabled").prop("title", u.t("rr_remaining_copy_allowance")), DanaMethodAttr("attr", e("#contextMenuPop> #contextCopy"), "disabled", "disabled").prop("title", u.t("rr_remaining_copy_allowance")))
            }
        },templateHelpers: {something: function() {
                return ("Do stuff with " + this.page.parts + " because it's awesome.")
            },wrapDashErrorMessage: function() {
                return typeof this["status-message"] != "undefined" ? this["status-message"] : u.t("rr_content_not_allowed"
                )
            }},goingToHideMode: function() {
            this.doneCopy(), this.remove()
        },lookForCopy: function(t) {
            t.preventDefault(), e("#copyContent").focus(), e("#copyContent").select()
        },doneCopy: function(t) {
            e("#copyContent").focus(), e("#copyContent").select(), e("#copyContent").trigger({type: "keydown",which: 67})
        }})
}), define("models/TBPrintM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({initialize: function(e, t) {
        },parse: function(e, t) {
            var n = e;
            return n
        }})
}), define("views/ReaderPrintItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerSideBarTemplate,id: "firstPrintWrapper",defaults: {tbPrintName: "firstprintDefaultWrapper"},initialize: function(e) {
            var t = _.extend({}, e);
            this.model = new s(t), this.model.bind("sync", this.render, this), this.render()
        },events: {"hidden.bs.modal": "goingToHideMode","keypress #shareBookLink": "lookForCopy"},onRender: function() {
            e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#shareUrl"
                ).focus()
            }, 550))
        },goingToHideMode: function() {
            this.doneCopy(), this.remove()
        },lookForCopy: function(t) {
            var n = t.which;
            t.ctrlKey && n === 99 && (e("#shareUrl").focus(), e("#shareUrl").select())
        },doneCopy: function(t) {
            e("#shareUrl").focus(), e("#shareUrl").select(), e("#shareUrl").trigger({type: "keydown",which: 99})
        }})
}), define("views/MainLoadingItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.ItemView.extend({template: n.mainLoadingContentTemplate,initialize: function(e) {
        }})
}), define("views/ReaderPrintRadioItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM", "i18next"], function(e, t, n, r, i, s, o) {
    return t.ItemView.extend({template: n.readerPrintRadioTemplate,id: "radioPrint",defaults: {tbPrintName: "radioPrint"},initialize: function(t) {
            var n = _.extend({}, t.model.collection.gbData, this.model.attributes);
            this.model.attributes = n;
            var r = "MLA", i = "60", s = "printPage.action?op=alo&docID=" + this.model.collection.gbData
            .BiblioData.docID;
            e.ajax({url: s,async: !1,success: function(e) {
                    e.status === "SUCCESS" && (r = e.citationFormat, i = e.printAllowance)
                }}), this.citation = r, this.alo = i, this.usChpt = this.model.collection.gbData.DocUser.usChpt
        },onRender: function() {
            this.$el.find("#printPageAllowance").html(this.alo), DanaMethodAttr("attr", this.$el.find("#citationStyle [value=" + this.citation + "]"), "selected", "selected"), this.usChpt === 1 && this.$el.find("input:radio[name=optionsRadios]").filter('[value="chapter"]').prop("checked", !0)
        },events: {"click #printCancel": "actionPrintCancle","click #printContinue": "actionPrintContinue","click #startPage,#endPage": "actionPrintRadio"},actionPrintCancle: function(e) {
            e.preventDefault()
        },actionPrintContinue: function(t) {
            t.preventDefault(), e(".text-danger").empty(), this.model.collection.gbData.pnt = {}, this.model.collection.gbData.pnt.docID = this.model.collection.gbData.BiblioData.docID;
            var n = e("input:radio[name=optionsRadios]:checked").val();
            this.model.collection.gbData.pnt.rds = n, n === "range" ? (this.model.collection
            .gbData.pnt.st = e("#startPage").val(), this.model.collection.gbData.pnt.ed = e("#endPage").val()) : (this.model.collection.gbData.pnt.st = e("#current-page").val(), this.model.collection.gbData.pnt.ed = this.model.collection.gbData.pnt.st), this.model.collection.gbData.pnt.ct = e("#citationStyle").find(":selected").val();
            var i = 0, s = 0, u = 0, a = 0, f = 0, l = 0, c = {}, h = "printPage.action?ct=" + this.model.collection.gbData.pnt.ct + "&op=validate&rds=" + this.model.collection.gbData.pnt.rds + "&docID=" + this.model.collection.gbData.pnt.docID + "&st=" + this.model.collection.gbData.pnt.st + "&ed=" + this.model.collection.gbData.pnt.ed;
            e.ajax({url: h,async: !1,success: function(t) {
                    if (t.status === "SUCCESS")
                        if (typeof t.multipleRangeSelection != "undefined") {
                            c = t.multipleRangeSelection;
                            var n = t.multipleRangeSelectionMsg;
                            n = n || o.t("rr_please_try_again");
                            var r = e("input:radio[name=optionsRadios]:checked").parent().siblings(".text-danger");
                            r.empty().html(n)
                        } else
                            i = t.startPhyPage, s = t.endPhyPage, u = t.startLgPage, a = t.endLgPage, l = t.remainingPrint;
                    else if (
                    t.status === "FAILURE") {
                        var n = t.statusMessage;
                        n = n || o.t("rr_please_try_again");
                        var r = e("input:radio[name=optionsRadios]:checked").parent().siblings(".text-danger");
                        r.empty().html(n), e("#printPageAllowance").hide()
                    } else {
                        var n = typeof t.status == "undefined" ? t.errorCode : t["status-message"];
                        n = n || o.t("rr_please_refresh_page");
                        var r = e("input:radio[name=optionsRadios]:checked").parent().siblings(".text-danger");
                        r.empty().html(n), e("#printPageAllowance").hide()
                    }
                },error: function(t, n, r) {
                    var i = e("input:radio[name=optionsRadios]:checked").parent().siblings(".text-danger");
                    i.empty().html(o.t("rr_please_refresh_page")), e("#printPageAllowance").hide()
                }}), i > 0 ? (this.model.collection.gbData.pnt.pst = i, this.model.collection.gbData.pnt.ped = s, this.model.collection.gbData.pnt.lst = u, this.model.collection.gbData.pnt.led = a, this.model.collection.gbData.pnt.rpnt = l, r.trigger("openSCN", "createPrint", this.model.collection.gbData)) : f > 0 && (this.model.collection.gbData.pnt.multipleRangeSelection = c, r.trigger("openSCN", "errorPrint"
            , this.model.collection.gbData))
        },actionPrintRadio: function(t) {
            e("#optionsRadios2").prop("checked", !0)
        }})
}), define("views/ReaderPrintSelectionItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerPrintSelectionTemplate,id: "selectionPrint",defaults: {tbPrintName: "selectionPrint"},initialize: function(e) {
            var t = _.extend({}, e.model.collection.gbData, this.model.attributes);
            this.model.attributes = t
        },events: {"click #selectionPrintPreview": "actionPrintPreview"},onRender: function() {
        },actionPrintSelection: function() {
        },actionPrintPreview: function(t) {
            t.preventDefault();
            var n = e("#printSelectSection").find(":selected").val();
            if (typeof n != "undefined") {
                var i = parseInt(n.split("_")[1]), s = this;
                e.each(this.model.get("pnt").multipleRangeSelection, function(e, t) {
                    e === i && (s.model.collection.gbData.pnt.st = t.startPhyPage, s.model.collection.gbData.pnt.ed = t.endPhyPage, s.model.collection.gbData.pnt.pst = t.startPhyPage, s.model
                    .collection.gbData.pnt.ped = t.endPhyPage, s.model.collection.gbData.pnt.lst = t.startLgPage, s.model.collection.gbData.pnt.led = t.endLgPage, r.trigger("openSCN", "previewPrint", s.model.collection.gbData))
                })
            }
        }})
}), define("views/ReaderPrintPreviewItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerPrintPreviewTemplate,id: "previewPrint",defaults: {tbPrintName: "previewPrint"},initialize: function(e) {
            var t = _.extend({}, e.model.collection.gbData, this.model.attributes);
            this.model.attributes = t
        },onRender: function() {
        },events: {"click #printCancel": "actionPrintCancle","click #printCreate": "actionPrintContinue","click #printStartOver": "actionPrintStartOver"},actionPrintCancle: function(e) {
            e.preventDefault()
        },actionPrintContinue: function(e) {
            e.preventDefault(), r.trigger("openSCN", "createPrint")
        },actionPrintStartOver: function(e) {
            e.preventDefault(), r.trigger("openSCN", "radioPrint")
        }})
}), define("views/ReaderPrintCreateItemView"
, ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerPrintCreateTemplate,id: "createPrint",defaults: {tbPrintName: "createPrint"},initialize: function(e) {
        },onRender: function() {
            e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                r.trigger("openSCN", "openPrint")
            }, 950))
        }})
}), define("views/ReaderPrintOpenItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM", "i18next"], function(e, t, n, r, i, s, o) {
    return t.ItemView.extend({template: n.readerPrintOpenTemplate,id: "#openPrint",defaults: {tbPrintName: "openPrint"},initialize: function(e) {
            var t = _.extend({}, e.model.collection.gbData, this.model.attributes);
            this.model.attributes = t
        },events: {"click #printOpenPDF": "openLinkPDF"},onRender: function() {
        },openLinkPDF: function(t) {
            var n = parseInt(this.model.collection.gbData.pnt.rpnt) || 0;
            e("#remainingPrint").length > 0 && e("#remainingPrint").empty().text(n), typeof this.model.get("DocUser") != "undefined" &&
            (this.model.get("DocUser").remainingPrintCount = n), n <= 0 && (DanaMethodAttr("attr", e("#toolChapterDownload"), "disabled", "disabled").prop("title", o.t("rr_remaining_print_allowance")), DanaMethodAttr("attr", e("#toolPrint"), "disabled", "disabled").prop("title", o.t("rr_remaining_print_allowance")));
            var r = new Date, i = "printPage.action?op=toPDF&ct=" + this.model.collection.gbData.pnt.ct + "&rds=" + this.model.collection.gbData.pnt.rds + "&docID=" + this.model.collection.gbData.pnt.docID + "&st=" + this.model.collection.gbData.pnt.pst + "&ed=" + this.model.collection.gbData.pnt.ped + "&dt=" + r.getTime();
            e('<a id="tmpLink" href=' + i + " />").appendTo("#toolbar"), e("#tmpLink")[0].click(), e("#tmpLink").remove()
        }})
}), define("views/ReaderPrintErrorItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerPrintErrorTemplate,id: "#errorPrint",defaults: {tbPrintName: "errorPrint"},initialize: function(e) {
        },events: {"click #printStartOver": "actionPrintStartOver"},onRender: function(
        ) {
        },actionPrintStartOver: function(e) {
            e.preventDefault(), r.trigger("openSCN", "radioPrint")
        }})
}), define("views/DummyItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBPrintM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.dummyTemplate,el: "#dummyPrintWrapper",defaults: {tbPrintName: "radioPrint"},initialize: function(e) {
        },onRender: function() {
        }})
}), define("models/ReaderPM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "panelTitle",defaults: {panelTest: ""},initialize: function(e, t) {
        }})
}), define("collections/ReaderPrintCollection", ["backbone", "jquery", "models/ReaderPM", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.Collection.extend({model: n,initialize: function(e, t) {
            this.gbData = t
        },prepareData: function() {
            DanaMethodAdd("add", this, {tbPrintNameTest: "gold",tbPrintName: "radioPrint"}, {add: !0,remove: !0,merge: !1})
        },openNewSCN: function(e, t) {
            this.reset();
            var n = this.findWhere({tbPrintName: e});
            (n === null || typeof n == "undefined") &&
            DanaMethodAdd("add", this, {tbPrintNameTest: "White",tbPrintName: e}, {add: !0,remove: !1,merge: !1})
        }})
}), define("views/ReaderPrintCollecionView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "utils/ebreaderUtil", "views/MainLoadingItemView", "views/ReaderPrintItemView", "views/ReaderPrintRadioItemView", "views/ReaderPrintSelectionItemView", "views/ReaderPrintPreviewItemView", "views/ReaderPrintCreateItemView", "views/ReaderPrintOpenItemView", "views/ReaderPrintErrorItemView", "views/DummyItemView", "collections/ReaderPrintCollection"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v) {
    return t.CompositeView.extend({template: n.readerPrintMainWrapperTemplate,el: "#printMainWrapper",itemViewContainer: "#printDefaultWrapper",itemView: u,emptyView: o,initialize: function(e) {
            r.on("openSCN", this.openNewSCN, this), this.render(), this.collection = new v(null, e)
        },getItemView: function(e) {
            var t = e.get("tbPrintName"), n;
            return t === "radioPrint" ? n = a : t === "selectionPrint" ? n = f : t === "previewPrint" ? n = l : t === "createPrint" ? n = c : t === "openPrint" ? n = h
            : t === "errorPrint" && (n = p), n
        },openNewSCN: function(e, t) {
            this.collection.openNewSCN(e, t)
        }})
}), define("models/TBACSM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({url: function() {
            return ("acsDownload.action?op=check&docID=" + this.cpTmp.DocUser.docID + "&offset=" + (new Date).getTimezoneOffset())
        },initialize: function(e) {
            this.cpTmp = e
        }})
}), define("views/ReaderAcsItemView", ["jquery", "marionette", "templates", "vent", "i18next", "utils/commonUtil", "models/TBACSM", "utils/ebreaderUtil"], function(e, t, n, r, i, s, o, u) {
    return t.ItemView.extend({template: n.readerAcstTemplate,el: "#fullDownloadWrapper",initialize: function(t) {
            this.prevSelectedDevice = null, this.getDownloadAccess, this.getDeviceFormFactor, this.cookieKey = "DOWNLOAD_DEVICE", this.radioDeviceType = 1, this.uAccsMdRR = e("#enableAccessiblity").val() === "no" ? 1 : 0;
            var n = _.extend({}, t, {tmpCkName: s.readCookie(this.cookieKey)});
            this.model = new o(n), this.model.on("change", this.render, this), this.model.fetch(), this.acsDownloadLink = "acsDownload.action?docID=" + this.model
            .get("DocUser").docID
        },events: {"click .devices-list li .device-icon, .devices-list li .device-type": "modalDeviceTypeSelected","keypress .devices-list li .device-icon, .devices-list li .device-type": "modalDeviceTypeSelectedkp","click #ownDeviceParent, #sharedDeviceParent": "modalRadioDeviceTypeToggle","keypress #ownDeviceParent, #sharedDeviceParent": "modalRadioDeviceTypeTogglekp","click #continueButton": "modalDeviceTypeSubmit","click .wizard-box": "stepSelected","click #doneInstallStep": "modalInstallStepDoneProceed","click #getReaderButton": "modalInstallStepLinkProceed","click #downloadBookButton": "modalDownloadButton","click #modalAlertContinueButton, #modalAlertCancel, #alertModalDismiss": "modalAlertDownloadButton","hidden.bs.modal #downloadModal": "modalCloseOnHide","click #modalAlertFirstContinueButton": "modalAlertFistDownloadButton"},onRender: function() {
            if (this.model.get("status") === "no_login")
                this.model.get("DocUser").signedIn = !1, r.trigger("tbsgn", "q_download");
            else {
                typeof this.model.
                get("DocUser").alreadyNupo == "undefined" && this.model.get("status") === "nupo_confirm" && this.$el.find("#downloadModalSteps").hide(), e("#downloadModal").modal("show");
                if (this.uAccsMdRR > 0) {
                    DanaMethodAttr("attr", this.$el.find("#deviceStep"), "tabindex", "-1"), DanaMethodAttr("attr", this.$el.find("#installStep"), "tabindex", "-1"), DanaMethodAttr("attr", this.$el.find("#downloadStep"), "tabindex", "-1"), this.$el.find("#deviceStep .modal-title.collapsed").remove(), this.$el.find("#deviceStep .change-button.on-attempted").remove(), this.$el.find("#installStep .modal-title.collapsed").remove(), this.$el.find("#installStep .change-button.on-attempted").remove(), this.$el.find("#downloadStep .modal-title.collapsed").remove(), this.$el.find("#downloadStep .change-button.on-attempted").remove();
                    var t = DanaMethodAttr("attr", this.$el.find("#downloadModal .active"), "id");
                    t === "deviceStep" ? (DanaMethodAttr("attr", this.$el.find("#deviceStep").find(".devices-list"), {tabindex: "0",role: "list"}), DanaMethodAttr("attr", this.$el.find("#deviceStep").find(".device-type"), {tabindex: "0",role: "button"}), DanaMethodAttr("attr", this.$el.find("#deviceStep")
                    , {"aria-hidden": "false"}).removeAttr("hidden"), DanaMethodAttr("attr", this.$el.find("#installStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#downloadStep"), {"aria-hidden": "true",hidden: "hidden"})) : t === "installStep" ? (DanaMethodAttr("attr", this.$el.find("#deviceStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#installStep"), {"aria-hidden": "false"}).removeAttr("hidden"), DanaMethodAttr("attr", this.$el.find("#downloadStep"), {"aria-hidden": "true",hidden: "hidden"})) : t === "downloadStep" && (DanaMethodAttr("attr", this.$el.find("#deviceStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#installStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#downloadStep"), {"aria-hidden": "false"}).removeAttr("hidden"))
                }
            }
        },modalDeviceTypeSelected: function(e) {
            this.modalDeviceTypeSelectedkp(e)
        },modalDeviceTypeSelectedkp: function(t) {
            var n = t.type;
            if (n == "click" || n == "keypress" && (t.which == 13 || t.which == 32)) {
                t.preventDefault();
                var r = e(t.target).closest("li");
                this.prevSelectedDevice = DanaMethodAttr("attr", r, "id"), r.addClass("device-selected"
                ).siblings("li").removeClass("device-selected"), e("#installStep").removeClass("active").removeClass("attempted"), e("#downloadStep").removeClass("active").removeClass("attempted")
            }
        },modalRadioDeviceTypeToggle: function(t) {
            var n = e(t.target).closest("span");
            n.length === 0 && (n = e(t.target).siblings("span"));
            if (n.length === 0)
                return;
            e("span.pretty-radio").removeClass("checked"), n.addClass("checked")
        },modalRadioDeviceTypeTogglekp: function(t) {
            var n = t.type;
            if (n == "click" || n == "keypress" && (t.which == 13 || t.which == 32)) {
                var r = e(t.target).closest("span");
                r.length === 0 && (r = e(t.target).siblings("span"));
                if (r.length === 0)
                    return;
                e("span.pretty-radio").removeClass("checked"), r.addClass("checked")
            }
        },modalDeviceTypeSubmit: function(t) {
            t.preventDefault();
            var n = e(t.target);
            this.radioDeviceType = e(".pretty-radio.checked").siblings("input").val(), this.goToStep("installStep")
        },collapseWizardBox: function() {
            e(".modal-content.active").addClass("attempted"), e(".modal-content").removeClass("active")
        },expandWizardBox: function(t) {
            e("#" + t).addClass("active"), this.uAccsMdRR > 0 && (t === "deviceStep" ? (DanaMethodAttr("attr", this.$el.find("#deviceStep"), {"aria-hidden": "false"}).removeAttr("hidden"), DanaMethodAttr("attr", this.$el.find("#installStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#downloadStep"), {"aria-hidden": "true",hidden: "hidden"})) : t === "installStep" ? (DanaMethodAttr("attr", this.$el.find("#deviceStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#installStep"), {"aria-hidden": "false"}).removeAttr("hidden"), DanaMethodAttr("attr", this.$el.find("#downloadStep"), {"aria-hidden": "true",hidden: "hidden"}), this.$el.find("#deviceStep").remove()) : t === "downloadStep" && (DanaMethodAttr("attr", this.$el.find("#deviceStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#installStep"), {"aria-hidden": "true",hidden: "hidden"}), DanaMethodAttr("attr", this.$el.find("#downloadStep"), {"aria-hidden": "false"}).removeAttr("hidden"), this.$el.find("#installStep").remove()))
        },goToStep: function(t) {
            this.collapseWizardBox();
            if (t === "deviceStep")
                this.expandWizardBox(t), e("#deviceStep").focus();
            else if (
            t === "installStep") {
                this.prevSelectedDevice = this.prevSelectedDevice || DanaMethodAttr("attr", e("li.device-selected"), "id") || "desktopDevice", this.radioDeviceType = e(".pretty-radio.checked").siblings("input").val();
                var r = this.prevSelectedDevice, s = r === "iosDevice" || r === "androidDevice" ? "Bluefire Reader" : "Adobe Digital Editions", o = this.radioDeviceType, u = o === "1" && r !== "otherDevice" ? "orange " : "", a = function() {
                    var e = "";
                    return r === "otherDevice" ? (e = i.t("rr_cancel"), e) : (e += o === "1" ? i.t("rr_get") : i.t("rr_i_have"), e += s, e)
                }(), f = _.extend({}, {deviceFormFactor: r,reader: s,deviceOwnership: o,privateClass: u,buttonTitle: a,_t: i.t}), l = _.template(n.subSectionDeviceSpecificTemplate, f);
                e("#installStep > .wizard-content").empty().html(l), e("#installStep").focus(), this.expandWizardBox(t)
            } else
                t === "downloadStep" ? (this.expandWizardBox(t), e("#downloadStep").focus()) : this.expandWizardBox("deviceStep")
        },stepSelected: function(t) {
            var n = e(t.target);
            if (n.hasClass("wizard-content") || n.closest(".wizard-content").length > 0)
                return;
            var r = DanaMethodAttr("attr", n, "id");
            if (
            n.hasClass("active") && n.hasClass("attempted"))
                return;
            !n.hasClass("active") && n.hasClass("attempted") ? this.goToStep(r) : (n = n.parents(".modal-content"), r = DanaMethodAttr("attr", n, "id"), !n.hasClass("active") && n.hasClass("attempted") && this.goToStep(r))
        },modalInstallStepDoneProceed: function(e) {
            e.preventDefault(), this.goToStep("downloadStep")
        },modalInstallStepLinkProceed: function(t) {
            var n = e(t.target);
            if (this.prevSelectedDevice === "otherDevice")
                return this.closeModal(), !1;
            this.radioDeviceType === "2" && (t.preventDefault(), this.goToStep("downloadStep"))
        },modalCloseOnHide: function(t) {
            e.data(this, "alertModelTimer", DanaFuncSetTimeout(setTimeout, function() {
                e("#fullDownloadWrapper").remove(), e("#toolDownload").focus()
            }, 250))
        },closeModal: function() {
            e("#downloadModal").modal("hide")
        },modalAlertFistDownloadButton: function(t) {
            typeof this.model.get("DocUser").alreadyNupo == "undefined" && (this.isNupoNow = "yes", this.model.get("DocUser").alreadyNupo = "nupo_confirm", e("#downloadNupoStep").remove(), e("#downloadModalSteps").show())
        },modalAlertDownloadButton
        : function(e) {
            this.closeModal()
        },modalDownloadButton: function(t) {
            var o = this.getDownloadAccess();
            if (o === "has_access" || typeof this.model.get("DocUser").alreadyNupo != "undefined" && this.model.get("DocUser").alreadyNupo === o) {
                this.prevSelectedDevice = this.prevSelectedDevice || DanaMethodAttr("attr", e("li.device-selected"), "id") || "desktopDevice", this.radioDeviceType = this.radioDeviceType || e(".pretty-radio.checked").siblings("input").val();
                var u = this.prevSelectedDevice.split("Device")[0] + "-" + this.radioDeviceType;
                return s.setCookie(this.cookieKey, u, 5184e6), this.closeModal(), !0
            }
            if (o === "no_login")
                this.closeModal(), r.trigger("tbsgn", "q_download");
            else if (o === "nupo_confirm") {
                var a = _.template(n.subSectionNupoConfirmTemplate, {DocUser: this.model.get("DocUser"),_t: i.t});
                e("#downloadModal").removeClass("modal-wizard download-modal-wizard").empty().html(a)
            } else {
                var a = _.template(n.subSectionErrorInACSTemplate, {status: "Error:" + o,_t: i.t});
                e("#downloadModal .modal-dialog").empty().html(a)
            }
            return (!1)
        },getDownloadAccess: function(t) {
            var n = "no_access"
            , r = this.acsDownloadLink + (t ? "&op=" + t : "");
            return e.ajax({dataType: "json",url: r,async: !1,success: function(e) {
                    e.status && (n = e.status)
                },error: function(e, t, r) {
                    n = r
                }}), n
        }})
}), define("models/ReaderSCheckM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "sChecklg",url: function() {
            return ("loginCheck.json")
        },initialize: function(e, t) {
        }})
}), define("views/ReaderSignInItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/ReaderSCheckM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerSignInTemplate,el: "#userSignInWrapper",defaults: {isUsrSigIn: "none"},initialize: function(e) {
            var t = _.extend({}, this.pebr, {ck: this.ck}, e);
            this.model = new s(t), this.model.bind("sync", this.render, this), this.model.fetch()
        },onRender: function() {
            if (this.model.get("result"))
                DanaMethodReload("reload", location);
            else {
                var t = e("#signInModal");
                t.hasClass("in") || t.modal("show")
            }
        },events: {"hidden.bs.modal #signInModal": "modalDone"},modalDone: function(e) {
            this.onClose()
        },onClose: function(t) {
            e("#signInModal"
            ).modal("hide"), e.data(this, "sgnModelTimer", DanaFuncSetTimeout(setTimeout, function() {
                e("#signInModal").unbind(), e("#signInModal").remove()
            }, 550))
        }})
}), define("models/TBCiteM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({url: function() {
            return ("documentCitation.action?docID=" + this.cpTmp.DocUser.docID + "&asJson=1&ppg=" + this.cpTmp.ppg + "&offset=" + (new Date).getTimezoneOffset())
        },initialize: function(e) {
            this.cpTmp = e
        }})
}), define("views/ReaderCiteItemView", ["jquery", "marionette", "templates", "vent", "utils/commonUtil", "models/TBCiteM"], function(e, t, n, r, i, s) {
    return t.ItemView.extend({template: n.readerCiteTemplate,el: "#firstCitetWrapper",defaults: {tbCiteName: "firstCiteDefaultWrapper"},initialize: function(e) {
            this.citeData;
            var t = _.extend({}, e);
            this.model = new s(t), this.model.bind("sync", this.render, this), this.model.fetch()
        },events: {"hidden.bs.modal #citeModal": "modalCloseOnHide","change #cite-format": "citeFormatSel","click #citationRefWorks": "citationRefWorksSel","click #citationEndNoteCitavi": "citationEndNoteCitaviSel"
        },onRender: function() {
            var t = this.$el.find("#cite-format");
            this.citeData = [];
            var n = this;
            e.each(this.model.get("DocumentCitations"), function(r, i) {
                n.citeData[i.citationName] = i, i.citationName === "CTNB" || i.citationName === "CTAD" ? t.append(e("<option>", {value: i.citationName,text: i.citationDesc,selected: i.isSelected})) : t.append(e("<option>", {value: i.citationName,text: i.citationName,selected: i.isSelected})), i.isSelected && n.$el.find("#citation-content").empty().text(i.citationFormatted)
            }), navigator.appVersion.indexOf("Mac") == -1 && DanaMethodAttr("attr", this.$el.find("#citeModal"), "aria-labelledby", "myModalLabelCiteModal"), this.$el.find("#citeModal").modal("show"), this.uAccsMdRR = e("#enableAccessiblity").val() === "no" ? 1 : 0, this.uAccsMdRR === 0 && e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#citation-content").focus(), e("#citation-content").select()
            }, 550))
        },citeFormatSel: function() {
            var t = this.$el.find("select option:selected").val();
            e("#citation-content").empty().text(this.citeData[t].citationFormatted)
        },citationRefWorksSel
        : function(e) {
            this.exportToRefworks(), this.closeModal()
        },citationEndNoteCitaviSel: function(e) {
            this.closeModal()
        },exportToRefworks: function() {
            var t = e("body"), n = this.model.get("DocUser").docID, r = this.model.get("ppg") || 1;
            return e.ajax({url: "biblioExport.action?refworks=1&docID=" + n + "&ppg=" + r,async: !1,success: function(n) {
                    var r = e("<form>", {name: "ExportRWForm",method: "POST",target: "RefWorksMain",action: "http://www.refworks.com/express/ExpressImport.asp?vendor=ebrary&filter=RefWorks%20Tagged%20Format&encoding=65001"}), i = e("<TEXTAREA />", {name: "ImportData",text: n});
                    r.append(i).appendTo(t), r.hide(), DanaMethodSubmit("submit", r), r.remove()
                }}), !1
        },modalCloseOnHide: function(t) {
            e.data(this, "alertModelTimer", DanaFuncSetTimeout(setTimeout, function() {
                e("#toolCite").focus(), e("#firstCitetWrapper").remove()
            }, 250))
        },closeModal: function() {
            e("#citeModal").modal("hide")
        }})
}), define("views/ReaderToolBarItemView", ["jquery", "marionette", "templates", "i18next", "vent", "utils/commonUtil", "views/ReaderShareLinkItemView", "views/ReaderCopyTextItemView", "views/ReaderPrintItemView"
    , "views/ReaderPrintCollecionView", "views/ReaderAcsItemView", "views/DummyItemView", "views/ReaderSignInItemView", "views/ReaderCiteItemView"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p) {
    return t.ItemView.extend({template: n.readerToolBarTemplate,id: "toolbar",initialize: function(e) {
            if (e.hasAc === 1)
                this.gbData = e;
            else if (e.hasAc === 0)
                return;
            i.on("atbs", this.toolAddToBookshelf, this), i.on("sblnk", this.toolLink, this), i.on("cpgt", this.toolCopy, this), i.on("tbdl", this.toolDownload, this), i.on("tbshct", this.toolCite, this), i.on("tbsgn", this.usrSignIn, this), i.on("tbgbsgn", this.usrGSignIn, this)
        },ui: {toolZoomSmaller: "#tool-viewsmaller",toolZoomLarger: "#tool-viewlarger",toolBarCurrentPage: "#current-page",toolCurrentPageLocation: "#tool-current-page-loc",toolGoToPage: "#tool-pagegoto-text",toolPageLocationWrap: "#tool-pageloc",toolPageGoToWrap: "#tool-pagegoto",toolHighlight: "#toolHighlight",toolNote: "#toolNote",toolBookmark: "#toolBookmark",toolCite: "#toolCite",toolDownload: "#toolDownload",toolCopy: "#toolCopy",toolPrint
            : "#toolPrint",toolAddToBookshelf: "#toolAddToBookshelf",toolLink: "#toolLink"},events: {"click #tool-viewsmaller": "toolZoomOut","click #tool-viewlarger": "toolZoomIn","click #tool-fitToWidth": "reSizeEffectWidth","click #tool-fitToHeight": "reSizeEffectHeight","click #tool-pageloc": "togglePageNumberModeToGoTo","keypress #tool-pagegoto-text": "togglePageNumberModeToView","click #tool-pager-prev": "prevPage","click #tool-pager-next": "nextPage","click #toolHighlight": "toolHighlight","click #toolNote": "toolNote","click #toolBookmark": "toolBookmark","click #toolCite": "toolCite","click #toolDownload": "toolDownload","click #toolCopy": "toolCopy","click #toolChapterDownload": "toolPrint","click #toolPrint": "toolPrint","click #toolAddToBookshelf": "toolAddToBookshelf","click #toolLink": "toolLink"},onRender: function() {
            typeof this.gbData != "undefined" && this.gbData.hasAc === 1 && (this.$el.find("#current-page").val(this.gbData.ppg), this.$el.find(".total-number-of-pages").empty().html(r.t("rr_page_of") + this.gbData.
            tmpLpg[this.gbData.tmpLpg.length - 1])), this.$el.find("#tool-pagegoto").hide(), _.isUndefined(this.gbData) || (this.gbData.ppg <= 1 && this.$el.find("#tool-pager-prev").prop("disabled", !0), this.gbData.ppg > 1 && this.$el.find("#tool-pager-prev").removeProp("disabled"), this.gbData.tmpLpg.length >= 2 && this.$el.find("#tool-pager-next").removeProp("disabled"), this.gbData.ppg >= this.gbData.tmpLpg.length && this.$el.find("#tool-pager-next").prop("disabled", !0))
        },toolZoomOut: function(e) {
            var t = this.gbData.zm;
            t <= .5 ? (this.gbData.zm = .5, this.ui.toolZoomLarger.removeProp("disabled"), this.ui.toolZoomSmaller.prop("disabled", !0)) : t > 4 ? (this.gbData.zm = 4, this.ui.toolZoomLarger.prop("disabled", !0)) : t > 2 && t <= 4 ? (this.gbData.zm = 2, this.ui.toolZoomLarger.removeProp("disabled")) : t > 1 && t <= 2 ? this.gbData.zm = 1 : t > .5 && t <= 1 ? (this.gbData.zm = .5, this.ui.toolZoomSmaller.prop("disabled", !0)) : t < .5 && (this.gbData.zm = .5, this.ui.toolZoomSmaller.removeProp("disabled"), this.ui.toolZoomLarger.prop("disabled", !0)), i.trigger("rspzl", parseInt(this.ui.toolBarCurrentPage
            .val())), this.gbData.whatClicked = "zoomOut", i.trigger("gaTk", "event", "Reader_Feature", "R1_ZoomOut", "ZoomOut from Reader")
        },toolZoomIn: function(e) {
            var t = this.gbData.zm;
            t >= 4 ? (this.gbData.zm = 4, this.ui.toolZoomLarger.prop("disabled", !0), this.ui.toolZoomSmaller.removeProp("disabled")) : t >= 2 && t < 4 ? (this.gbData.zm = 4, this.ui.toolZoomLarger.prop("disabled", !0), this.ui.toolZoomSmaller.removeProp("disabled")) : t >= 1 && t < 2 ? this.gbData.zm = 2 : t >= .5 && t < 1 ? (this.gbData.zm = 1, this.ui.toolZoomSmaller.removeProp("disabled")) : t < .5 && (this.gbData.zm = .5, this.ui.toolZoomSmaller.prop("disabled", !0), this.ui.toolZoomLarger.removeProp("disabled")), i.trigger("rspzl", parseInt(this.ui.toolBarCurrentPage.val())), this.gbData.whatClicked = "zoomIn", i.trigger("gaTk", "event", "Reader_Feature", "R1_ZoomIn", "ZoomIn from Reader")
        },reSizeEffectWidth: function(e) {
            this.ui.toolZoomSmaller.removeProp("disabled", !0), this.ui.toolZoomLarger.removeProp("disabled", !0), i.trigger("rspwd", parseInt(this.ui.toolBarCurrentPage.val())), e.preventDefault(),
            this.gbData.whatClicked = "fitWidth", i.trigger("gaTk", "event", "Reader_Feature", "R1_Fit_Width", "Fit to Width from Reader")
        },reSizeEffectHeight: function(e) {
            this.ui.toolZoomSmaller.removeProp("disabled", !0), this.ui.toolZoomLarger.removeProp("disabled", !0), i.trigger("rspht", parseInt(this.ui.toolBarCurrentPage.val())), e.preventDefault(), this.gbData.whatClicked = "fitHeight", i.trigger("gaTk", "event", "Reader_Feature", "R1_Fit_Height", "Fit to Height from Reader")
        },togglePageNumberModeToGoTo: function() {
            this.ui.toolPageLocationWrap.hide(), this.ui.toolPageGoToWrap.show(), this.ui.toolGoToPage.val(""), this.ui.toolGoToPage.focus(), this.gbData.whatClicked = "goToPage"
        },togglePageNumberModeToView: function(t) {
            var n = t.which;
            if (n === null || n === 0 || n === 8 || n === 9 || n === 27)
                return (!0);
            var o = new RegExp("^[a-zA-Z0-9]+$"), u = String.fromCharCode(t.charCode ? t.charCode : t.which);
            if (o.test(u))
                return (!0);
            var a = e(t.target).val();
            if (!(n === 13 && a.length > 0))
                return t.preventDefault(), !1;
            this.ui.toolPageLocationWrap.show(), this.ui.toolPageGoToWrap
            .hide(), e("#toolbar-navbar-collapse").hasClass("in") && DanaFuncSetTimeout(setTimeout, function() {
                e("#toolbar-navbar-collapse.navbar-collapse").collapse("hide")
            }, 650);
            var f = 1;
            f = s.inArrayCaseInsensitive(a, this.gbData.tmpLpg);
            if (f == -1) {
                var l = e("#dialogModalAlertError").modal("show");
                l.find("#msg").empty().html(r.t("rr_page_number_not_found"))
            } else
                this.ui.toolBarCurrentPage.val(f + 1), this.ui.toolCurrentPageLocation.empty().html(this.gbData.tmpLpg[f]), this.jumpToPage();
            i.trigger("gaTk", "pageview", "/NR_PageJump", "Jump to page number using page number box in NewReader"), this.gbData.whatClicked = "goToPageView", t.preventDefault()
        },prevPage: function() {
            var e = parseInt(this.ui.toolBarCurrentPage.val()) - 1;
            e = e >= 1 ? e : 1;
            var t = this.gbData.tmpLpg[e - 1] || e;
            typeof t != "undefined" && (this.ui.toolBarCurrentPage.val(e), this.ui.toolCurrentPageLocation.empty().html(t), this.jumpToPage()), this.gbData.whatClicked = "prevPage", i.trigger("gaTk", "pageview", "/NR_PagePrev", "Page flip to previous page in NewReader")
        },nextPage: function() {
            var e = parseInt
            (this.ui.toolBarCurrentPage.val()) + 1;
            e = e <= this.gbData.tpg ? e : this.gbData.tpg;
            var t = this.gbData.tmpLpg[e - 1] || e;
            typeof t != "undefined" && (this.ui.toolBarCurrentPage.val(e), this.ui.toolCurrentPageLocation.empty().html(t), this.jumpToPage()), this.gbData.whatClicked = "nxtPage", i.trigger("gaTk", "pageview", "/NR_PageNext", "Page flip to next page in NewReader")
        },jumpToPage: function() {
            i.trigger("jtp", parseInt(this.ui.toolBarCurrentPage.val())), this.gbData.whatClicked = "jumpPage"
        },toolHighlight: function() {
            if (!_.isUndefined(this.gbData) && !e.isEmptyObject(this.gbData.BiblioData)) {
                if (!this.gbData.DocUser.signedIn) {
                    i.trigger("tbsgn", "highlight");
                    return
                }
                i.trigger("tCH", parseInt(this.ui.toolBarCurrentPage.val())), this.gbData.whatClicked = "toolHigh", i.trigger("gaTk", "event", "Reader_Feature", "R1_HIGHLIGHT", "Highlight from Reader")
            }
        },toolNote: function() {
            if (!_.isUndefined(this.gbData) && !e.isEmptyObject(this.gbData.BiblioData)) {
                if (!this.gbData.DocUser.signedIn) {
                    i.trigger("tbsgn", "add_notes");
                    return
                }
                i.trigger("tCPN"
                , parseInt(this.ui.toolBarCurrentPage.val())), this.gbData.whatClicked = "toolNote", i.trigger("gaTk", "event", "Reader_Feature", "R1_NOTE_PAGE", "Add Page Note from Reader")
            }
        },toolBookmark: function() {
            if (!_.isUndefined(this.gbData) && !e.isEmptyObject(this.gbData.BiblioData)) {
                if (!this.gbData.DocUser.signedIn) {
                    i.trigger("tbsgn", "to_bookmark");
                    return
                }
                i.trigger("tBM", parseInt(this.ui.toolBarCurrentPage.val())), this.gbData.whatClicked = "toolBookMark", i.trigger("gaTk", "event", "Reader_Feature", "R1_BOOKMARK", "Bookmark from Reader")
            }
        },toolCite: function() {
            typeof this.gbData != "undefined" && !e.isEmptyObject(this.gbData.BiblioData) && (e("#firstCitetWrapper").length === 0 && e('<div id="firstCitetWrapper"></div>').appendTo("#emptyTmpWrapper"), this.citeLink = new p({ppg: e("#current-page").val(),DocUser: this.gbData.DocUser}), this.gbData.whatClicked = "toolCite", i.trigger("gaTk", "event", "Reader_Feature", "R1_CITE", "Cite from Reader"))
        },toolDownload: function() {
            if (typeof this.gbData != "undefined" && !e.isEmptyObject(this.gbData.BiblioData
            )) {
                if (!this.gbData.DocUser.signedIn) {
                    i.trigger("tbsgn", "q_download");
                    return
                }
                e("#fullDownloadWrapper").length === 0 && e('<div id="fullDownloadWrapper"></div>').appendTo("#emptyTmpWrapper"), this.downloadLink = new l({DocUser: this.gbData.DocUser,BiblioData: this.gbData.BiblioData}), i.trigger("gaTk", "event", "Reader_Feature", "R1_DOWNLOAD", "Download from Reader Tool bar"), this.gbData.whatClicked = "toolDown"
            }
        },toolCopy: function() {
            typeof this.gbData != "undefined" && !e.isEmptyObject(this.gbData.BiblioData) && (e("#copyTextWrapper").length === 0 && e('<div id="copyTextWrapper"></div>').appendTo("#emptyTmpWrapper"), this.shareLink = new u({currentSelections: this.gbData.finalSelections,encID: this.gbData.encID,DocUser: this.gbData.DocUser}), i.trigger("gaTk", "event", "Reader_Feature", "R1_COPY_PAGE", "Copy page from Reader"), this.gbData.whatClicked = "toolCopy")
        },toolPrint: function(t) {
            typeof this.gbData != "undefined" && !e.isEmptyObject(this.gbData.BiblioData) && (e("#printMainWrapper").length === 0 && e('<div id="printMainWrapper"></div>'
            ).appendTo("#emptyTmpWrapper"), this.gbData.DocUser.usChpt = DanaMethodAttr("attr", e(t.target), "id") === "toolPrint" ? 0 : 1, this.printLink = typeof this.printLink != "undefined" ? this.printLink : new f({BiblioData: this.gbData.BiblioData,DocUser: this.gbData.DocUser}), i.trigger("openSCN", "radioPrint"), i.trigger("gaTk", "event", "Reader_Feature", "R1_PRINT", "Print or Chapter Download from Reader"), this.gbData.whatClicked = "toolPrint")
        },toolAddToBookshelf: function() {
            if (typeof this.gbData != "undefined" && !e.isEmptyObject(this.gbData.BiblioData)) {
                if (!this.gbData.DocUser.signedIn) {
                    i.trigger("tbsgn", "add_to_bookshelf");
                    return
                }
                var t = "remoteBookshelf.api?remote_id=" + this.gbData.ssen + "&op=add&docid=" + this.gbData.docID;
                i.trigger("gaTk", "event", "Reader_Feature", "R1_BOOKSHELF", "Add to Bookshelf from Reader");
                var n = this.gbData.uAccsMdRR > 0 ? 1 : 0;
                e.ajax({url: t,async: !1,dataType: "json",success: function(t) {
                        if (typeof t.status != "undefined" && typeof t.errorCode == "undefined") {
                            if (t["status-code"] === 0 || t["status-code"] === 9515)
                                DanaMethodAttr("attr", e("#toolAddToBookshelf").
                                removeClass("icon-bookshelf-add").addClass("bookshelf-added icon-bookshelf-added"), "disabled", "disabled"), DanaMethodAttr("attr", e("#bookDetailBookShelf"), "disabled", "disabled"), e("#bookDetailBookShelf > .icon-bookshelf-add").removeClass("icon-bookshelf-add").addClass("icon-bookshelf-added");
                            var s = e("#dialog-success-msg");
                            s.find("#sMsg").empty().html(t["status-message"]), s.show().fadeOut(5e3), n > 0 && (DanaMethodAttr("attr", s, "tabindex", "-1"), s.focus()), i.trigger("gaTk", "event", "Reader_Feature", "R1_BOOKSHELF_CONFIRM", "Add to Bookshelf  from Reader Completed")
                        } else if (typeof t.errorCode == "undefined" || t.errorCode !== "SESSION_TIMED_OUT" && t.errorCode !== "LOGIN_REQUIRED") {
                            var o = e("#dialogModalAlertError").modal("show");
                            o.find("#msg").empty().html(r.t("rr_please_try_again"))
                        } else
                            i.trigger("tbsgn", "add_to_bookshelf")
                    },error: function(t, n, i) {
                        var s = e("#dialogModalAlertError").modal("show");
                        s.find("#msg").empty().html(r.t("rr_please_try_again"))
                    }}), this.gbData.whatClicked = "toolBookshelf"
            }
        },toolLink: function() {
            typeof this.gbData != "undefined" &&
            (e("#shareBookLinkWrapper").length === 0 && e('<div id="shareBookLinkWrapper"></div>').appendTo("#emptyTmpWrapper"), this.shareLink = new o({BiblioData: this.gbData.BiblioData,docID: this.gbData.docID}), this.gbData.whatClicked = "toolLink", i.trigger("gaTk", "event", "Reader_Feature", "R1_SHARE", "Share from Reader"))
        },showErrorMessage: function() {
            var t = e("#dialogModalAlertError").show();
            t.find("#msg").empty().html(r.t("rr_please_refresh_page"))
        },usrSignIn: function(t) {
            e("#userSignInWrapper").length === 0 && e('<div id="userSignInWrapper"></div>').appendTo("#emptyTmpWrapper"), this.usrSigns = new h({tmpData: t}), i.trigger("gaTk", "event", "NR_Sign_In", "Sign_In_Required", "User SignIn by " + t)
        },usrGSignIn: function(e) {
            this.usrSignIn(e)
        }})
}), define("views/ReaderSideBarItemView", ["marionette", "templates", "vent"], function(e, t, n) {
    return e.ItemView.extend({template: t.readerSideBarTemplate,id: "sideBar",initialize: function(e) {
            this.gbData = e, n.on("openBsh", this.bookSearchSample, this), n.on("openBrp", this.bookResourcesSample, this
            )
        },events: {"click #bookToc": "bookTocSample","click #bookDetails": "bookDetailsSample","click #bookNotes": "bookNotesSample","click #bookSearch": "bookSearchSample","click #bookResources": "bookResourcesSample"},onRender: function() {
        },bookTocSample: function(e) {
            var t = e.type;
            if (t == "click" || t == "keypress" && (e.which == 13 || e.which == 32))
                e.preventDefault(), $(e.currentTarget).find("div").addClass("icon-selected btn-sidebar-selected").parent().siblings().find("div").removeClass("icon-selected btn-sidebar-selected"), n.trigger("openPanel", "bookToc"), this.gbData.uAccsMdRR > 0 && $.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                    DanaMethodAttr("attr", $("#A-Section"), "tabindex", "-1").focus()
                }, 250))
        },bookDetailsSample: function(e) {
            e.preventDefault(), $(e.currentTarget).find("div").addClass("icon-selected btn-sidebar-selected").parent().siblings().find("div").removeClass("icon-selected btn-sidebar-selected"), n.trigger("openPanel", "bookDetails"), this.gbData.uAccsMdRR > 0 && $.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                DanaMethodAttr("attr", $("#B-Section"
                ), "tabindex", "-1").focus()
            }, 250))
        },bookNotesSample: function(e) {
            e.preventDefault(), $(e.currentTarget).find("div").addClass("icon-selected btn-sidebar-selected").parent().siblings().find("div").removeClass("icon-selected btn-sidebar-selected"), n.trigger("openPanel", "bookNotes"), this.gbData.uAccsMdRR > 0 && $.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                DanaMethodAttr("attr", $("#C-Section"), "tabindex", "-1").focus()
            }, 250))
        },bookSearchSample: function(e) {
            _.isObject(e) && e.preventDefault(), $("#bookSearch").find("div").addClass("icon-selected btn-sidebar-selected").parent().siblings().find("div").removeClass("icon-selected btn-sidebar-selected"), n.trigger("openPanel", "bookSearch"), this.gbData.uAccsMdRR > 0 && $.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                DanaMethodAttr("attr", $("#D-Section"), "tabindex", "-1").focus()
            }, 250))
        },bookResourcesSample: function(e) {
            _.isObject(e) && e.preventDefault(), $("#bookResources").find("div").addClass("icon-selected btn-sidebar-selected").parent().siblings().find("div").removeClass("icon-selected btn-sidebar-selected"
            ), n.trigger("openPanel", "bookResources"), this.gbData.uAccsMdRR > 0 && $.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                DanaMethodAttr("attr", $("#E-Section"), "tabindex", "-1").focus()
            }, 250))
        }})
}), define("models/DocTocM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "detailToc",url: function() {
            return ("detail.action?remote_id=" + this.get("ssen") + "&asJson=1&docID=" + this.get("docID"))
        },initialize: function(e, t) {
        }})
}), define("views/PanelBookTocItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "models/DocTocM", "i18next"], function(e, t, n, r, i, s, o, u) {
    return e.ItemView.extend({id: "A-Section",defaults: {panelName: "bookToc"},model: o,initialize: function(e) {
            this.gbData = e.model.collection.gbData;
            var t = _.extend({}, e.model.collection.gbData, e.model.attributes);
            this.model = new o(t), this.model.bind("sync", this.render, this), this.model.fetch()
        },getTemplate: function() {
            return this.model && typeof this.model.get("DocTOC") != "undefined" ? n.readerPanelTocTemplate : this.model && this
            .model.isSyncing ? n.mainLoadingContentTemplate : n.mainLoadingContentTemplate
        },onBeforeRender: function() {
        },onRender: function() {
            this.gbData.BiblioData = this.model.get("BiblioData") || {}, this.gbData.DocUser = this.model.get("DocUser") || {};
            var e = this.gbData.DocUser;
            this.gbData.uAccsMdRR > 0 ? (t("#tc-list-cont a>span").toggleClass("icon-tc-open icon-tc-close"), t("#toolCopy").remove(), t("#toolPrint").remove(), t("#toolChapterDownload").remove(), t("#toolHighlight").parent().parent().parent().remove(), t("#tool-viewsmaller").parent().parent().remove(), t("#tool-pager-prev").parent().parent().remove(), this.$el.find("#closePanel").parent().remove()) : t("#tc-list-cont li ul").toggle(), typeof this.gbData != "undefined" && this.gbData.DocUser.customSearchAvailable === !1 && (DanaMethodAttr("attr", t("#contextMenuPop> #contextCustomSearch"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#bookResources"), "disabled", "disabled").hide()), typeof this.gbData != "undefined" && this.gbData.DocUser.customSearchAvailable === !0 && this.gbData.DocUser.customeTextSearchAvailable === !1 &&
            DanaMethodAttr("attr", t("#contextMenuPop> #contextCustomSearch"), "disabled", "disabled").hide(), typeof this.gbData != "undefined" && this.gbData.DocUser.alreadyInBookshelf === !0 && (t("#toolAddToBookshelf").removeClass("icon-bookshelf-add").addClass("icon-bookshelf-added"), DanaMethodAttr("attr", t("#toolAddToBookshelf"), "disabled", "disabled")), typeof this.gbData != "undefined" && this.gbData.DocUser.channelType === "title_list" && DanaMethodAttr("attr", t("#toolDownload"), "disabled", "disabled").hide(), typeof this.gbData != "undefined" && this.gbData.DocUser.availableForDownload === !1 && (t("#toolDownload").prop("title", u.t("rr_fd_not_offered")), DanaMethodAttr("attr", t("#toolDownload"), "disabled", "disabled")), typeof this.gbData != "undefined" && this.gbData.DocUser.docAccessType === "PREVIEW_ACCESS" && (DanaMethodAttr("attr", t("#toolCopy"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#toolChapterDownload"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#toolPrint"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#toolDownload"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#contextMenuPop> #contextCopy"), "disabled", "disabled").hide()), typeof
            this.gbData != "undefined" && this.gbData.DocUser.docID > 0 && (!e.unlimitedCopy && e.channelDisabledCopy && !e.unlimitedPrint && e.channelDisabledPrint ? (DanaMethodAttr("attr", t("#toolCopy"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#toolChapterDownload"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#toolPrint"), "disabled", "disabled").hide(), DanaMethodAttr("attr", t("#contextMenuPop> #contextCopy"), "disabled", "disabled").hide()) : (!e.unlimitedCopy && e.publisherDisbaledCopy ? (DanaMethodAttr("attr", t("#toolCopy"), "disabled", "disabled").prop("title", u.t("rr_copy_not_offered")), DanaMethodAttr("attr", t("#contextMenuPop> #contextCopy"), "disabled", "disabled").prop("title", u.t("rr_copy_not_offered"))) : e.unlimitedCopy ? t("#toolCopy").prop("title", u.t("rr_pages_remain_to_copy")) : e.remainingCopyCount <= 0 && (DanaMethodAttr("attr", t("#toolCopy"), "disabled", "disabled").prop("title", u.t("rr_remaining_copy_allowance")), DanaMethodAttr("attr", t("#contextMenuPop> #contextCopy"), "disabled", "disabled").prop("title", u.t("rr_remaining_copy_allowance"))), !e.unlimitedPrint && e.publisherDisbaledPrint ? (DanaMethodAttr("attr", t("#toolChapterDownload"), "disabled", "disabled"
            ).prop("title", u.t("rr_print_not_offered")), DanaMethodAttr("attr", t("#toolPrint"), "disabled", "disabled").prop("title", u.t("rr_print_not_offered"))) : e.unlimitedPrint ? (t("#toolChapterDownload").prop("title", u.t("rr_pages_remain_to_print")), t("#toolPrint").prop("title", u.t("rr_pages_remain_to_print"))) : e.remainingPrintCount <= 0 && (DanaMethodAttr("attr", t("#toolChapterDownload"), "disabled", "disabled").prop("title", u.t("rr_remaining_print_allowance")), DanaMethodAttr("attr", t("#toolPrint"), "disabled", "disabled").prop("title", u.t("rr_remaining_print_allowance")))))
        },events: {"click #tc-list-cont .icon-tc-open": "expandToc","click #tc-list-cont .icon-tc-close": "collapseToc","click #tc-list-cont a": "goToPage","click #closeMetaData .icon-panel-close": "slidUpDownDocMetaData","click #openMetaData .icon-panel-open": "slidUpDownDocMetaData","keypress #searchInBookTermInToc": "goToSearchByEnter","click #searchWithInBookToc": "searchInBook"},expandToc: function(e) {
            e.preventDefault();
            var n = t(e.target);
            n.parent().siblings("ul").toggle(), n.toggleClass("icon-tc-open icon-tc-close"
            )
        },collapseToc: function(e) {
            e.preventDefault();
            var n = t(e.target);
            n.parent().siblings("ul").toggle(), n.toggleClass("icon-tc-open icon-tc-close")
        },goToPage: function(e) {
            e.preventDefault();
            var n = t(e.target);
            if (!n.hasClass("tc-icon")) {
                var r = DanaMethodAttr("attr", n, "href").split("="), i = r[1] || 1;
                s.trigger("jtp", parseInt(i))
            }
        },slidUpDownDocMetaData: function(e) {
            var n = t(e.target);
            t("#book-meta-open").animate({height: "toggle",opacity: "toggle"}, "slow"), t("#book-meta-closed").animate({height: "toggle",opacity: "toggle"}, "slow")
        },searchInBook: function(e) {
            e.preventDefault(), t("#D-Section").length === 0 ? s.trigger("openBsh", "bookSearch") : (s.trigger("openBshT"), s.trigger("openBsh", "bookSearch")), s.trigger("gaTk", "event", "Reader_Feature", "R1_SEARCHINBOOK", "In-Book Search button clicked from Reader Search Box from TOC Panel")
        },goToSearchByEnter: function(e) {
            var n = e.which;
            n === 13 && (t("#D-Section").length === 0 ? s.trigger("openBsh", "bookSearch") : (s.trigger("openBshT"), s.trigger("openBsh", "bookSearch")), s.trigger("gaTk", "event", "Reader_Feature"
            , "R1_SEARCHINBOOK", "In-Book Search button clicked from Reader Search Box from TOC Panel"))
        },resizePanel: function() {
            var e = this.$el.find("#book-meta-open").outerHeight() + this.$el.find("#search-block").outerHeight() + this.$el.find(".tc-title").outerHeight();
            this.$el.find("#tc-list-cont").css({height: t("#panel").outerHeight() - e - 115})
        }})
}), define("views/PanelBookDetailsItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "models/DocTocM"], function(e, t, n, r, i, s, o) {
    return e.ItemView.extend({template: n.panelBookDetailsTemplate,id: "B-Section",defaults: {panelName: "bookDetails"},initialize: function(e) {
            this.gbData = e.model.collection.gbData;
            var t = _.extend({}, e.model.collection.gbData, e.model.attributes);
            this.model = new o(t), this.model.bind("sync", this.render, this)
        },onBeforeRender: function() {
        },onRender: function() {
            this.gbData.BiblioData = this.model.get("BiblioData") || {}, t("#toolAddToBookshelf").hasClass("icon-bookshelf-added") && (DanaMethodAttr("attr", this.$el.find("#bookDetailBookShelf"), "disabled", "disabled"), this.$el.find("#bookDetailBookShelf > .icon-bookshelf-add").removeClass("icon-bookshelf-add").addClass("icon-bookshelf-added"));
            var e = t("#toolDownload");
            DanaMethodAttr("attr", e, "disabled") && DanaMethodAttr("attr", this.$el.find("#bookDetailDownload"), "disabled", "disabled"), e.css("display") == "none" && this.$el.find("#bookDetailDownload").hide(), this.gbData.uAccsMdRR > 0 && (this.$el.find(".accArHid").remove(), this.$el.find("#closePanel").parent().remove())
        },events: {"click #closeMetaData .icon-panel-close": "slidUpDownDocMetaData","click #openMetaData .icon-panel-open": "slidUpDownDocMetaData","click #bookDetailBookShelf": "addToBookShelf","click #bookDetailBooklink": "showShareLink","click #bookDetailBookCitation": "showCite","click #bookDetailDownload": "showDownloadLink"},slidUpDownDocMetaData: function(e) {
            var n = t(e.target);
            t("#bookMetaOpen").animate({height: "toggle",opacity: "toggle"}, "slow"), t("#bookMetaClosed").animate({height: "toggle",opacity: "toggle"}, "slow")
        },addToBookShelf: function(e) {
            s.trigger("atbs"
            , "added")
        },showShareLink: function(e) {
            s.trigger("sblnk")
        },showCite: function(e) {
            s.trigger("tbshct")
        },showDownloadLink: function(e) {
            s.trigger("tbdl")
        }})
}), define("views/PanelBookNotesEmptyItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.ItemView.extend({template: n.panelBookNotesLoadingContentTemplate,initialize: function(e) {
            var t = _.extend({}, e, this.model.attributes);
            this.model.attributes = t
        },events: {"click #signInNoteButton": "userSignInBtn"},userSignInBtn: function(e) {
            s.trigger("tbsgn", "view_notes")
        }})
}), define("views/PanelBookNotesItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "models/DocTocM"], function(e, t, n, r, i, s, o) {
    return e.ItemView.extend({template: n.panelBookNotesTemplate,tagName: "li",className: "annotation-level-2",initialize: function(e) {
            this.gbData = e.model.collection.gbData
        },onBeforeRender: function() {
        },truncateLabel: function(e, t, n) {
            return e.length > t && (e = e.substring(0, t + 1
            ), e = e.substring(0, Math.min(e.length, e.lastIndexOf(" "))), e += n), e
        },onRender: function() {
            this.gbData.BiblioData = this.model.get("BiblioData") || {}, this.model.collection.gbData.uAccsMdRR > 0 && DanaMethodAttr("attr", this.$el, {role: "listitem",tabindex: "0"})
        },modelEvents: {"change remove": "render"},events: {"click .annotation-page,.annotation-content": "lookupId","click .annotation-type": "lookupTypeId","click .annotation-delete": "trashAnnot"},lookupTypeId: function(e) {
            e.preventDefault();
            var n = this.model.get("data").physicalPage;
            s.trigger("jtp", n, this.model.get("data"));
            var r = this.model.get("data").annotType;
            if (r !== "link" || !this.model.get("data").bookMark) {
                var i = {annots: this.model.get("data"),chapterId: this.model.get("cptInd")};
                t("#mainViewerBookMark_" + n).length === 0 ? DanaFuncSetTimeout(setTimeout, function() {
                    s.trigger("pAntSh", i)
                }, 650) : s.trigger("pAntSh", i)
            }
        },lookupId: function(e) {
            e.preventDefault();
            var t = this.model.get("data").physicalPage;
            s.trigger("jtp", t, "ok")
        },trashAnnot: function(e) {
            e.preventDefault();
            var t = {annots: this.model.get("data"
                ),chapterId: this.model.get("cptInd")};
            s.trigger("pAntDel", t)
        }})
}), define("models/SearchTermSugM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "didYM",url: function() {
            return ("termSuggestion.action?remote_id=" + this.get("ssen") + "&asJson=1&docID=" + this.get("docID") + "&p00=" + encodeURIComponent(this.get("searchTerm")))
        }})
}), define("views/PanelDidYouMeanSearchResultItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "models/SearchTermSugM"], function(e, t, n, r, i, s, o) {
    return e.ItemView.extend({template: n.panelBookSearchYouMeanResultTemplate,id: "didYouMeanSearchResult",defaults: {panelSearchResultName: "didYouMeanSearchResult"},initialize: function(e) {
            this.gbData = e.model.collection.gbData;
            var t = _.extend({}, e.model.collection.gbData, e.model.attributes);
            this.model = new o(t), this.model.bind("sync", this.render, this), this.model.fetch()
        },events: {"click .did-you-mean-result>a": "goToSearchByLink"},onBeforeRender: function() {
        },onRender: function() {
        },goToSearchByLink
        : function(e) {
            e.preventDefault();
            var n = t(e.currentTarget);
            s.trigger("openBshT", n.text()), s.trigger("gaTk", "event", "Reader_Feature", "R1_SEARCHINBOOK", "Did_You_Mean:" + n.text() || "")
        }})
}), define("views/PanelChapterSearchResultSnipItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.ItemView.extend({template: n.panelBookSearchChapterResultChildSnipTemplate,el: function() {
            return ("#chapterLevelSnips_" + this.model.get("cptInd"))
        },initialize: function(e) {
            var t = _.extend({}, {tmpLpg: e.model.collection.gbData.tmpLpg}, this.model.attributes);
            this.model.attributes = t, this.chptNum = this.model.get("cptInd")
        },events: {"click  [id^='snipHit_']": "lookupId"},onRender: function() {
            if (this.model.collection.gbData.uAccsMdRR > 0) {
                var e = this;
                DanaFuncSetTimeout(setTimeout, function() {
                    DanaMethodAttr("attr", t("#chapterLevelSnips_" + e.model.get("cptInd")), "role", "group").focus()
                }, 2e3)
            }
        },templateHelpers: {findByPageNum: function(e) {
                return ("22")
            }},lookupId: function(e) {
            e.preventDefault();
            var n = t(e.currentTarget
            ), r = DanaMethodAttr("attr", n, "id").split("_")[1];
            s.trigger("jtp", r, "ok")
        }})
}), define("models/SearchInBookByChapSnipModel", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "schInBk",initialize: function(e, t) {
        },parse: function(e, t) {
            var n = e;
            return n
        }})
}), define("collections/PanelChapterSearchResultSnipCollection", ["backbone", "jquery", "models/SearchInBookByChapSnipModel", "utils/ebreaderUtil", "utils/commonUtil", "vent", "i18next"], function(e, t, n, r, i, s, o) {
    return e.Collection.extend({model: n,url: function() {
            return ("termSnippet.action?remote_id=" + this.gbData.ssen + "&docID=" + this.gbData.docID + "&p00=" + encodeURIComponent(this.gbData.searchTerm) + "&curInd=0&bksize=100&cptId=" + this.gbData.tmpcpid)
        },initialize: function(e, t) {
            this.gbData = t
        },prepareData: function(e) {
            this.gbData.tmpcpid = e || 1;
            var n = t.trim(this.gbData.searchTerm);
            this.reset();
            if (typeof n != "undefined" && n.length > 0) {
                this.gbData.searchTerm = n;
                var r = this;
                t.ajax({url: r.url(),success: function(i) {
                        if (i.snip != null)
                            DanaMethodAdd("add", r, {id: e,cid: e,cptInd: e,searchTerm: n,data
                                : i.snip}, {add: !0,remove: !0,merge: !1}), i.snip.orderedPagesWithSnippet && r.gbData.uAccsMdRR < 1 && s.trigger("jtp", i.snip.orderedPagesWithSnippet[0].pageNumber, "ok");
                        else {
                            var u = t("#dialog-error-msg").show();
                            u.find("#msg").empty().html(o.t("rr_error") + i["status-message"])
                        }
                    },error: function(e, n, r) {
                        var i = t("#dialog-error-msg").show();
                        i.find("#msg").empty().html(o.t("rr_please_try_again"))
                    }})
            }
        }})
}), define("views/PanelNotesResultChildCollectionView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "views/MainLoadingItemView", "views/PanelChapterSearchResultSnipItemView", "collections/PanelChapterSearchResultSnipCollection", "views/PanelBookNotesItemView"], function(e, t, n, r, i, s, o, u, a, f) {
    return e.CompositeView.extend({template: n.panelBookNotesResultChildTemplate,tagName: "li",className: "annotation-level-2",itemView: f,initialize: function(e) {
        }})
}), define("models/AnoInBookModel", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "schInBkByCh",initialize: function(
        e, t) {
        },parse: function(e, t) {
            var n = e;
            return n
        }})
}), define("collections/PanelNotesInBookCollection", ["backbone", "jquery", "models/AnoInBookModel", "utils/ebreaderUtil", "utils/commonUtil", "vent", "i18next"], function(e, t, n, r, i, s, o) {
    return e.Collection.extend({model: n,sort_key: "cptInd",sort_stru: "",sortColumn: null,sortDirection: "asc",reParts: /\d+|\D+/g,reDigit: /\d/,url: function() {
            return typeof this.gbData.tmpantop != "undefined" ? "remoteDoc.api?remote_id=" + this.gbData.ssen + "&cmd=pages&docid=" + this.gbData.docID + "&op=cptSAnt&cst=" + this.gbData.tmpantop.chapterStart + "&ced=" + this.gbData.tmpantop.chapterEnd + "&cpid=" + this.gbData.tmpantop.chapterId + "&rpgr=an0&dt=1" : "remoteDoc.api?remote_id=" + this.gbData.ssen + "&cmd=pages&docid=" + this.gbData.docID + "&op=cptAnt&rpgr=an0&dt=1"
        },initialize: function(e, t) {
            this.gbData = t
        },cmpStringsWithNumbers: function(e, t) {
            e = e == 1 ? "1" : String(DanaStringCheckLink(e)), t = t == 1 ? "1" : String(DanaStringCheckLink(t));
            var n = e.match(this.reParts), r = t.match(this.reParts), i;
            if (n && r && (i = this.reDigit.test(n[0])) == this.reDigit.test(r[0])) {
                var s =
                Math.min(n.length, r.length);
                for (var o = 0; o < s; o++) {
                    var u = n[o], a = r[o];
                    i && (u = parseInt(u, 10), a = parseInt(a, 10));
                    if (u != a)
                        return u < a ? -1 : 1;
                    i = !i
                }
            }
            return ((e >= t) - (e <= t))
        },comparator: function(e, t) {
            var n = this.sort_stru === "data" ? e.attributes.data : e.attributes, r = this.sort_stru === "data" ? t.attributes.data : t.attributes;
            return _.isUndefined(n.physicalPage) ? n[this.sort_key] < r[this.sort_key] ? -1 : 1 : _.isUndefined(r) ? 1 : n.physicalPage == r.physicalPage ? r.annotType == null ? -1 : r.bookMark ? 1 : n.bookMark ? -1 : n.pageLevelNote ? -1 : parseInt(n.startQuad) === parseInt(r.startQuad) ? this.strcmp(n.annotType, r.annotType) : parseInt(n.startQuad) < parseInt(r.startQuad) ? -1 : 1 : n.physicalPage < r.physicalPage ? -1 : 1
        },strcmp: function(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        },sortByField: function(e, t) {
            this.sort_key = e, this.sort_stru = t, this.sort()
        },sortByFields: function(e, t, n) {
            this.sortColumn = e, this.sort_stru = t, this.sortDirection = n, this.sort()
        },prepareData: function(e) {
            this.gbData.antop = 1, this.reset();
            var n = parseInt(t("#current-page").val()), r = this;
            t.ajax({url: r.url(),success
                : function(e) {
                    if (e["status-code"] == 0) {
                        var n = [];
                        for (var i in e.chapAnnotDetails)
                            n.push(i);
                        if (n.length > 0) {
                            var s = 1, u = [];
                            for (var s = 1; s <= n.length; s++) {
                                var a = e.chapAnnotDetails[n[s - 1]];
                                u[u.length] = {panelNotesResultName: "notesResult",cptInd: a.chapterId,at: a.chapterId,cid: a.chapterId,_id: a.chapterId,title: a.chapterName,data: a}
                            }
                            DanaMethodAdd("add", r, u, {add: !0,remove: !0,merge: !1})
                        }
                    } else {
                        var f = t("#dialog-error-msg").show();
                        f.find("#msg").empty().html(o.t("rr_error") + e["status-message"])
                    }
                },error: function(e, n, r) {
                    var i = t("#dialog-error-msg").show();
                    i.find("#msg").empty().html(o.t("rr_please_try_again"))
                }})
        },prepareSnipData: function(e, n) {
            this.gbData.antop = 2, this.gbData.tmpantop = n, this.reset();
            var r = parseInt(t("#current-page").val());
            this.sortByFields("physicalPage,bookMark,pageLevelNote,startQuad", "data", "asc,desc,desc,desc");
            var i = this;
            t.ajax({url: i.url(),success: function(e) {
                    if (e["status-code"] == 0) {
                        var r = [];
                        for (var s in e.annots)
                            r.push(s);
                        if (r.length > 0) {
                            var u = 1, a = [];
                            for (var u = 1; u <= r.length; u++) {
                                var f = e.annots;
                                a[a.length
                                ] = {panelNotesResultName: "notesResult",name: f[u - 1].annotID,cptInd: n.chapterId,at: f[u - 1].annotID,cid: f[u - 1].annotID,_id: f[u - 1].annotID,data: f[u - 1]}
                            }
                            DanaMethodAdd("add", i, a, {add: !0,remove: !0,merge: !1}), i.sortByFields("physicalPage,bookMark,pageLevelNote,startQuad", "data", "asc,desc,desc,desc")
                        }
                    } else {
                        var l = t("#dialog-error-msg").show();
                        l.find("#msg").empty().html(o.t("rr_error") + e["status-message"])
                    }
                },error: function(e, n, r) {
                    var i = t("#dialog-error-msg").show();
                    i.find("#msg").empty().html(o.t("rr_please_try_again"))
                }})
        }})
}), define("views/PanelNotesResultParentCollectionView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "views/MainLoadingItemView", "views/PanelNotesResultChildCollectionView", "collections/PanelNotesInBookCollection", "views/PanelBookNotesItemView"], function(e, t, n, r, i, s, o, u, a, f) {
    return e.CompositeView.extend({template: n.panelBookNotesResultTemplate,tagName: "li",id: function() {
            return ("topChapterNotesSelection_" + this.model.get("cptInd"))
        },className: "annotation-level-1"
        ,itemViewContainer: "[id^='notesLevelSnips_']",itemView: f,initialize: function(e) {
            this.collection = new a(null, e.model.collection.gbData), s.on("pnlAntSnp_" + this.model.get("cptInd"), this.userAnnotsSnp, this)
        },onRender: function() {
            this.model.collection.gbData.uAccsMdRR > 0 && (DanaMethodAttr("attr", this.$el, {role: "listitem",tabindex: "0"}), DanaMethodAttr("attr", this.$el.find("[id^='notesLevelSnips_']"), {role: "group",tabindex: "0"}))
        },onItemRemoved: function() {
            this.collection.length === 0 && this.collection.remove()
        },events: {"click [id^='chapterNotesSelection_'] div": "chapterNotesSelection"},modelEvents: {"change merge": "render","change remove": "render"},comparator: function(e) {
            return e.get("data").page
        },appendHtml: function(e, t, n) {
            var r = e.itemViewContainer ? e.$(e.itemViewContainer) : e.$el, i = r.children();
            i.size() <= n ? r.append(t.el) : i.eq(n).before(t.el)
        },chapterNotesSelection: function(e) {
            var n = e.type;
            if (n == "click" || n == "keypress" && (e.which == 13 || e.which == 32)) {
                e.preventDefault();
                var r = t(e.currentTarget).hasClass("annotation-chapter") ? t(e.currentTarget
                ) : t(e.currentTarget).parent();
                if (r.find("div .icon-panel-open").length > 0)
                    this.expandSearch(r);
                else if (r.find("div .icon-panel-close").length > 0)
                    this.collapseSearch(r);
                else {
                    var i = DanaMethodAttr("attr", r.find("div[id^='noHits_']"), "id");
                    i !== null && typeof i != "undefined" && s.trigger("jtp", i.split("_")[1], "ok")
                }
            }
        },expandSearch: function(e) {
            var t = e.find("div .icon-panel-open");
            t.removeClass("icon-panel-open").addClass("icon-panel-close"), e.siblings(".annotation-list").toggle();
            var n = DanaMethodAttr("attr", e, "id").split("_")[1];
            this.collection.length === 0 ? (this.collection.prepareSnipData(n, this.model.get("data")), e.siblings(".annotation-list").toggle()) : this.collection.models[0].get("data") && this.collection.models[0].get("data").orderedPagesWithSnippet && s.trigger("jtp", this.collection.models[0].get("data").orderedPagesWithSnippet[0].pageNumber, "ok")
        },collapseSearch: function(e) {
            var t = e.find("div .icon-panel-close");
            t.removeClass("icon-panel-close").addClass("icon-panel-open"), e.siblings(".annotation-list").toggle()
        },userAnnotsSnp: function(
        e, n) {
            if ("save" === n) {
                var r = this.collection.findWhere({cptInd: e.chap.chapId.chapterId,name: e.annotID});
                if (!_.isUndefined(r)) {
                    r.attributes.data.labelText = e.labelText, DanaMethodAdd("add", this.collection, {cptInd: e.chap.chapId.chapterId,name: parseInt(e.nAnnot.annotID),data: e.nAnnot}, {add: !1,remove: !0,merge: !0});
                    return
                }
                var i = [];
                if (this.collection.size() === 0) {
                    this.collection.prepareSnipData("", e.chap.chapId);
                    var s = "#chapterNotesSelection_" + e.chap.chapId.chapterId, o = t(s), u = o.find("div .icon-panel-open");
                    u.removeClass("icon-panel-open").addClass("icon-panel-close"), o.siblings(".annotation-list").toggle(), o.siblings(".annotation-list").toggle()
                } else
                    DanaMethodAdd("add", this.collection, {cptInd: e.chap.chapId.chapterId,name: parseInt(e.nAnnot.annotID),data: e.nAnnot}, {add: !1,remove: !0,merge: !0});
                return
            }
            if ("del" === n) {
                var a = t("#annotTrash_" + e.annotID);
                if (a.length > 0) {
                    var r = this.collection.findWhere({cptInd: e.chapterId,name: parseInt(e.annotID)});
                    _.isUndefined(r) || this.collection.remove(r)
                }
            } else if ("edit" === n) {
                var f = e, r = this.collection.findWhere
                ({cptInd: f.chapterId,name: parseInt(e.annotID)});
                _.isUndefined(r) || (r.attributes.data.labelText = e.labelText, r.set({attributes: r.attributes}))
            }
        }})
}), define("views/PanelFrequencySearchResultItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.ItemView.extend({template: n.panelBookSearchFrequencyResultTemplate,id: "frequencySearchResult",defaults: {panelSearchResultName: "frequencySearchResult"},initialize: function(e) {
        },onBeforeRender: function() {
        },onRender: function() {
        },events: {"click #searchResultByChapterInFq": "toggleChapterFrequency","click #searchResultByFrequenceyInFq": "toggleFrequencyChapter"},toggleChapterFrequency: function(e) {
            t("#chapterSearchResult").show(), t("#frequencySearchResult").hide()
        },toggleFrequencyChapter: function(e) {
            t("#chapterSearchResult").hide(), t("#frequencySearchResult").show()
        }})
}), define("views/PanelBookNotesCollectionView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent"
    , "views/PanelBookNotesEmptyItemView", "views/PanelBookNotesItemView", "views/PanelDidYouMeanSearchResultItemView", "views/PanelNotesResultParentCollectionView", "views/PanelFrequencySearchResultItemView", "collections/PanelNotesInBookCollection"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
    return e.CompositeView.extend({template: n.panelBookNotesCompositeTemplate,itemViewContainer: "#notesBookResults",id: "C-Section",itemView: u,emptyView: o,initialize: function(e) {
            var t = _.extend({}, e.model.collection.gbData, e.model.attributes);
            this.model.set(t), typeof e.model.collection.gbData.DocUser != "undefined" && e.model.collection.gbData.DocUser.signedIn && (this.collection = new c(null, _.extend({}, e.model.collection.gbData)), this.collection.prepareData(""), s.on("pnlAnt", this.userAnnots, this))
        },events: {},onRender: function() {
            this.model.collection.gbData.uAccsMdRR > 0 && (this.$el.find("#closePanel").parent().remove(), DanaMethodAttr("attr", this.$el.find("#notesBookResults"), {role: "list",tabindex: "0"}))
        },itemViewOptions: function(e) {
            return ({tmpUser: typeof
                this.model.collection != "undefined" ? this.model.collection.gbData.DocUser : {}})
        },appendHtml: function(e, t, n) {
            var r = e.itemViewContainer ? e.$(e.itemViewContainer) : e.$el, i = r.children();
            i.size() <= n ? r.append(t.el) : i.eq(n).before(t.el)
        },getItemView: function(e) {
            var t = e.get("panelNotesResultName"), n;
            return t === "notesResult" && (n = f), n
        },onItemRemoved: function() {
        },userAnnots: function(e, n) {
            if ("save" === n) {
                var r = e.chap.chapId, i = e, o = this.collection.findWhere({cptInd: r.chapterId});
                if (_.isUndefined(o)) {
                    var u = [];
                    u[0] = {panelNotesResultName: "notesResult",cptInd: r.chapterId,at: r.chapterId,cid: r.chapterId,_id: r.chapterId,title: r.chapterName,data: r}, DanaMethodAdd("add", this.collection, u, {add: !1,remove: !0,merge: !0}), this.collection.sortByField("cptInd")
                } else {
                    o.get("data").annotCount = parseInt(o.get("data").annotCount) + 1;
                    var a = t("#annotCount_" + r.chapterId), f = parseInt(a.text()) + 1;
                    a.html("").text(f)
                }
                s.trigger("pnlAntSnp_" + r.chapterId, e, n);
                return
            }
            if ("del" === n) {
                s.trigger("pnlAntSnp_" + e.chapterId, e, n);
                var l = t("#annotCount_" + e.chapterId), a =
                parseInt(l.text()) - 1;
                if (a <= 0) {
                    var o = this.collection.findWhere({cptInd: e.chapterId});
                    this.collection.remove(o)
                } else
                    l.html("").text(a)
            } else if ("edit" === n) {
                var o = this.collection.findWhere({cptInd: e.chapterId});
                if (!_.isUndefined(o)) {
                    s.trigger("pnlAntSnp_" + e.chapterId, e, n);
                    return
                }
            }
        }})
}), define("views/PanelNoSearchResultItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.ItemView.extend({template: n.panelBookSearchNoResultTemplate,id: "noSearchResult",defaults: {panelSearchResultName: "noSearchResult"},initialize: function(e) {
        },onBeforeRender: function() {
        },onRender: function() {
        }})
}), define("views/PanelChapterSearchResultChildCollectionView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "views/MainLoadingItemView", "views/PanelChapterSearchResultSnipItemView", "collections/PanelChapterSearchResultSnipCollection"], function(e, t, n, r, i, s, o, u, a) {
    return e.CompositeView.extend({template: n.panelBookSearchChapterResultChildTemplate
        ,tagName: "li",id: function() {
            return ("topChapterSelection_" + this.model.get("cptInd"))
        },className: "search-level-1",itemViewContainer: "[id^='chapterLevelSnips_']",itemView: u,initialize: function(e) {
            this.collection = new a(null, e.model.collection.gbData)
        },onRender: function() {
            this.model.collection.gbData.uAccsMdRR > 0 && DanaMethodAttr("attr", this.$el, {role: "link",tabindex: "0"})
        },events: {"click [id^='chapterSelection_']": "chapterSelection"},chapterSelection: function(e) {
            var n = t(e.currentTarget);
            if (n.find("div .icon-panel-open").length > 0)
                this.expandSearch(e);
            else if (n.find("div .icon-panel-close").length > 0)
                this.collapseSearch(e);
            else {
                var r = DanaMethodAttr("attr", n.find("div[id^='noHits_']"), "id");
                r !== null && typeof r != "undefined" && s.trigger("jtp", r.split("_")[1], "ok")
            }
        },expandSearch: function(e) {
            var n = t(e.currentTarget), r = n.find("div .icon-panel-open");
            r.removeClass("icon-panel-open").addClass("icon-panel-close"), n.siblings(".search-level-2-group").toggle();
            var i = DanaMethodAttr("attr", n, "id").split("_")[1];
            this.collection.length === 0 ? (this.collection.prepareData
            (i), n.siblings(".search-level-2-group").toggle()) : this.collection.models[0].get("data") && this.collection.models[0].get("data").orderedPagesWithSnippet && s.trigger("jtp", this.collection.models[0].get("data").orderedPagesWithSnippet[0].pageNumber, "ok")
        },collapseSearch: function(e) {
            var n = t(e.currentTarget), r = n.find("div .icon-panel-close");
            r.removeClass("icon-panel-close").addClass("icon-panel-open"), n.siblings(".search-level-2-group").toggle()
        }})
}), define("models/SearchInBookByChapModel", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "schInBk",initialize: function(e, t) {
        },parse: function(e, t) {
            var n = e;
            return n
        }})
}), define("collections/PanelChapterSearchResultCollection", ["backbone", "jquery", "models/SearchInBookByChapModel", "utils/ebreaderUtil", "utils/commonUtil", "vent", "i18next"], function(e, t, n, r, i, s, o) {
    return e.Collection.extend({model: n,url: function() {
            return ("docSearch.api?remote_id=" + this.gbData.ssen + "&docid=" + this.gbData.docID + "&p00=" + encodeURIComponent(this.gbData.searchTerm
            ))
        },initialize: function(e, t) {
            this.gbData = t, this.prepareData()
        },prepareData: function() {
            var e = t.trim(this.gbData.searchTerm);
            this.reset();
            if (typeof e != "undefined" && e.length > 0) {
                this.gbData.searchTerm = e;
                var n = this;
                t.ajax({url: n.url(),success: function(r) {
                        if (r["status-code"] == 0) {
                            var i = 1;
                            for (var s = 0; s < r.chapters.length; s++)
                                r.chapters[s].indent === 0 && DanaMethodAdd("add", n, {cptInd: r.chapters[s].chapterId,searchTerm: e,data: r.chapters[s]}, {add: !0,remove: !0,merge: !1})
                        } else {
                            var u = t("#dialog-error-msg").show();
                            u.find("#msg").empty().html(o.t("rr_error") + r["status-message"])
                        }
                    },error: function(e, n, r) {
                        var i = t("#dialog-error-msg").show();
                        i.find("#msg").empty().html(o.t("rr_please_try_again"))
                    }})
            }
        }})
}), define("views/PanelChapterSearchResultParentCollectionView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "views/MainLoadingItemView", "views/PanelChapterSearchResultChildCollectionView", "collections/PanelChapterSearchResultCollection"], function(e, t, n, r, i, s, o, u, a) {
    return e.CompositeView.extend
    ({template: n.panelBookSearchChapterResultTemplate,id: "chapterSearchResult",defaults: {panelSearchResultName: "chapterSearchResult"},itemViewContainer: "#searchResultsListByChapter",itemView: u,emptyView: o,initialize: function(e) {
            s.on("openPanel", this.toggleChapterFrequency, this), this.collection = new a(null, e.model.collection.gbData)
        },templateHelpers: {totalPageHits: function() {
                return this.data["total-page-hits"]
            }},onRender: function() {
            var e = t("#search-container").outerWidth();
            this.$el.find("#search-container").css("width", e), this.model.collection.gbData.uAccsMdRR > 0 && DanaMethodAttr("attr", this.$el.find("#searchResultsListByChapter"), {tabindex: "0"})
        },events: {"click #searchResultByChapter": "toggleChapterFrequency","click #searchResultByFrequencey": "toggleFrequencyChapter","click #toggle-results": "toggleResults"},toggleChapterFrequency: function(e) {
            t("#chapterSearchResult").show(), t("#frequencySearchResult").hide()
        },toggleFrequencyChapter: function(e) {
            t("#chapterSearchResult").hide(), t("#frequencySearchResult").show()
            , s.trigger("openFqSP", "frequencySearchResult", this.model.collection.gbData)
        },toggleResults: function(e) {
            e.preventDefault(), this.model.collection.gbData.showSearhHits = !1, s.trigger("hSQHits"), s.trigger("chPshRes")
        }})
}), define("models/SearchInBookModel", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "schInBkByCh",initialize: function(e, t) {
        },parse: function(e, t) {
            var n = e;
            return n
        }})
}), define("collections/PanelSearchInBookCollection", ["backbone", "jquery", "models/SearchInBookModel", "utils/ebreaderUtil", "utils/commonUtil", "vent", "i18next"], function(e, t, n, r, i, s, o) {
    return e.Collection.extend({model: n,url: function() {
            return ("docSearch.api?remote_id=" + this.gbData.ssen + "&cmd=pages&docid=" + this.gbData.docID + "&p00=" + encodeURIComponent(this.gbData.searchTerm) + "&dt=1")
        },initialize: function(e, t) {
            this.gbData = t
        },prepareData: function(e) {
            var n = t("#searchInBookTerm"), r = t.trim(e) || t.trim(n.val());
            n.val(""), this.reset();
            if (typeof r != "undefined" && r.length > 0 && (r.indexOf(" AND ") > 0 || r.indexOf(" NOT "
            ) > 0 || r.indexOf(" OR ") > 0))
                DanaMethodAdd("add", this, {panelSearchResultName: "noSearchResult",searchTerm: r,hasBST: "hasBST"}, {add: !0,remove: !0,merge: !1}), s.trigger("cSQHits");
            else if (typeof r != "undefined" && r.length > 0) {
                this.gbData.searchTerm = r;
                var i = parseInt(t("#current-page").val()), u = this;
                t.ajax({url: u.url(),success: function(e) {
                        if (e["status-code"] == 0)
                            e["total-page-hits"] > 0 ? (DanaMethodAdd("add", u, {panelSearchResultName: "chapterSearchResult",searchTerm: r,data: e}, {add: !0,remove: !0,merge: !1}), s.trigger("rSQHits", i)) : r.indexOf(" ") == -1 ? DanaMethodAdd("add", u, {panelSearchResultName: "didYouMeanSearchResult",searchTerm: r}, {add: !0,remove: !0,merge: !1}) : DanaMethodAdd("add", u, {panelSearchResultName: "noSearchResult",searchTerm: r}, {add: !0,remove: !0,merge: !1});
                        else {
                            var n = t("#dialog-error-msg").show();
                            n.find("#msg").empty().html(o.t("rr_error") + e["status-message"])
                        }
                    },error: function(e, n, r) {
                        var i = t("#dialog-error-msg").show();
                        i.find("#msg").empty().html(o.t("rr_please_try_again"))
                    }})
            } else
                this.gbData.searchTerm = "", s.trigger("cSQHits")
        }})
}), define("views/PanelBookSearchCollectionView"
, ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "views/MainLoadingItemView", "views/PanelNoSearchResultItemView", "views/PanelDidYouMeanSearchResultItemView", "views/PanelChapterSearchResultParentCollectionView", "views/PanelFrequencySearchResultItemView", "collections/PanelSearchInBookCollection"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
    return e.CompositeView.extend({template: n.panelBookSearchCompositeTemplate,itemViewContainer: "#searchBookResults",id: "D-Section",itemView: u,initialize: function(e) {
            s.on("openBshT", this.goToSearchAlt, this), s.on("chPshRes", this.goToSearchRes, this);
            var n = _.extend({}, e.model.collection.gbData, e.model.attributes);
            this.model.set(n), this.collection = new c(null, e.model.collection.gbData);
            var r = t("#searchInBookTermInToc");
            r.val() !== null && typeof r.val() != "undefined" && (this.collection.prepareData(r.val()), r.val(""))
        },ui: {searchField: "#searchInBookTerm"},events: {"click #searchWithInBook": "goToSearch","click #searchWithInBookSubmit": "goToSearch"
            ,"keypress #searchInBookTerm": "goToSearchByEnter"},onRender: function() {
            t.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                t("#searchInBookTerm").focus()
            }, 250)), this.model.collection.gbData.uAccsMdRR > 0 && this.$el.find("#closePanel").parent().remove()
        },getItemView: function(e) {
            var t = e.get("panelSearchResultName"), n;
            return t === "noSearchResult" && (n = u), t === "didYouMeanSearchResult" && (n = a), t === "chapterSearchResult" && (n = f), t === "frequencySearchResult" && (n = l), n
        },openSearchByFrequency: function(e, t) {
            var n = this.collection.findWhere({panelSearchResultName: e});
            (n === null || typeof n == "undefined") && DanaMethodAdd("add", this.collection, {panelSearchResultName: "frequencySearchResult",panelName: e,data: t}, {add: !0,remove: !1,merge: !1})
        },goToSearch: function(e) {
            this.collection.prepareData(), s.trigger("gaTk", "event", "Reader_Feature", "R1_SEARCHINBOOK", "In-Book Search button clicked from Reader Search Box")
        },goToSearchByEnter: function(e) {
            var t = e.which;
            t === 13 && (this.collection.prepareData(), s.trigger("gaTk", "event", "Reader_Feature", "R1_SEARCHINBOOK"
            , "In-Book Search button clicked from Reader Search Box"))
        },goToSearchAlt: function(e) {
            var n = t("#searchInBookTermInToc"), r = e;
            if (r === null || typeof r == "undefined")
                r = n.val();
            r !== null && typeof r != "undefined" && (this.collection.prepareData(r), n.val(""))
        },goToSearchRes: function(e) {
            this.collection.reset()
        }})
}), define("models/PanelBookResourceModel", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "resourceModel",url: function() {
            return ("getCustomSearchMenu.action?remote_id=" + this.get("ssen") + "&asJson=1&docID=" + this.get("docID"))
        },initialize: function(e, t) {
        }})
}), define("views/PanelBookResourceItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "models/PanelBookResourceModel", "i18next"], function(e, t, n, r, i, s, o, u) {
    return e.ItemView.extend({id: "E-Section",defaults: {panelName: "bookResources"},model: o,initialize: function(e) {
            this.gbData = e.model.collection.gbData;
            var t = _.extend({}, e.model.collection.gbData, e.model.attributes);
            this.model = new o(t), this.
            model.bind("sync", this.render, this), this.model.fetch(), this.ck = i.readCookie("ESESSIONID"), this.ck !== null && (this.pebr = new r, this.pebr.init(this.ck)), s.on("cssel", this.cSearch, this)
        },getTemplate: function() {
            return this.model && typeof this.model.get("cusData") != "undefined" ? n.readerPanelBookResourceTemplate : this.model && this.model.isSyncing ? n.mainLoadingContentTemplate : n.mainLoadingContentTemplate
        },events: {"click #search-block button": "textResourceTriggers","click #custom-buttons button": "bookResourceTriggers","click #custom-links a": "indResourceTriggers"},onRender: function() {
            this.model && typeof this.model.get("cusData") != "undefined" && this.cSearch(), this.gbData.uAccsMdRR > 0 && this.$el.find("#closePanel").parent().remove()
        },bookResourceTriggers: function(e) {
            e.preventDefault();
            var n = DanaMethodAttr("attr", t(e.target), "id").split("_")[1], r = this.model.get("cusData").bookSearches[n], i = r.textValue;
            r.textValue.indexOf("%pisbn%") > -1 ? i = DanaMethodReplace("replace", i, "%pisbn%", this.model.get("BiblioData").pIsbn) : r.textValue.indexOf("%eisbn%") > -1 ?
            i = DanaMethodReplace("replace", i, "%eisbn%", this.model.get("BiblioData").eIsbn) : r.textValue.indexOf("%docid%") > -1 && (i = DanaMethodReplace("replace", i, "%docid%", this.model.get("BiblioData").docID)), this.usgCSTk("BookSearch", t(e.target).text()), DanaMethodOpen("open", window, i, "Cust Search")
        },textResourceTriggers: function(e) {
            e.preventDefault();
            var n = t("input:radio[name=textSearchesRadios]:checked").val(), r = encodeURIComponent(t("#cTextSearchId").val()), i = DanaMethodReplace("replace", this.model.get("cusData").textSearches[n].textValue, "%token%", r);
            this.usgCSTk("TextSearch", this.model.get("cusData").textSearches[n].textName + ":" + r), DanaMethodOpen("open", window, i, "Cust Search")
        },cSearch: function() {
            if (typeof this.gbData != "undefined" && this.model && typeof this.model.get("cusData") != "undefined") {
                var e = this.gbData.finalSelections;
                s.trigger("resetPgSel", !0, !0), s.trigger("clsPgSel", e.active_page, !0);
                var n = 0, r = 0, i = t("#current-page").val();
                this.cText = "";
                if (e.active === !0) {
                    i = e.active_page, n = e.s_quad, r = e.e_quad;
                    var o = "op=cSeearch&encID=" + this.gbData.encID + "&page=(" + i + ")&start=" + n + "&end=" + r + "&offset=" + (new
                    Date).getTimezoneOffset(), a = "remoteDocServer.api?remote_id=" + this.ck + "&encrypted=" + this.pebr.enc(o) + "&nq=1", f = this;
                    t.ajax({dataType: "json",url: a,async: !1,success: function(e) {
                            if (typeof e.dcy != "undefined") {
                                var n = JSON.parse(f.pebr.dec(e.dcy));
                                if (typeof n.status != "undefined" && typeof n.errorCode == "undefined")
                                    n["status-code"] === 0 && (f.cText = n.cText);
                                else {
                                    status = !1;
                                    if (typeof n.errorCode == "undefined" || n.errorCode !== "SESSION_TIMED_OUT" && n.errorCode !== "LOGIN_REQUIRED") {
                                        var r = t("#dialogModalAlertError").modal("show");
                                        r.find("#msg").empty().html(u.t("rr_error") + n["status-message"])
                                    } else {
                                        var r = t("#dialogModalAlertError").modal("show");
                                        r.find("#msg").empty().html(u.t("rr_error_refresh_try_again"))
                                    }
                                }
                            }
                        },error: function(e, n, r) {
                            var i = t("#dialogModalAlertError").modal("show");
                            i.find("#msg").empty().html(u.t("rr_error_refresh_try_again")), n = !1
                        }}), t("#cTextSearchId").val(this.cText), this.usgCSTk("ContextualTextSelection", encodeURIComponent(this.cText), n, r)
                }
            }
        },indResourceTriggers: function(e) {
            var n = t(e.target).
            text();
            this.usgCSTk("CustomLink", n)
        },usgCSTk: function(e, n, r, i) {
            if (typeof this.gbData != "undefined" && this.model && typeof this.model.get("cusData") != "undefined") {
                var s = {docid: this.gbData.DocUser.docID,page: t("#current-page").val(),type: "CustomSearch",action: e,userActionData: n,starting: r,ending: i};
                t.ajax({type: "POST",url: "usageTrack.action",data: s,success: function(e) {
                    },error: function(e, n, r) {
                        var i = t("#dialog-error-msg").show();
                        i.find("#msg").empty().html(u.t("rr_please_try_again"))
                    }})
            }
        }})
}), define("models/PanelBarModel", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "panelTitle",defaults: {panelTest: ""},initialize: function(e, t) {
        }})
}), define("collections/PanelBarCollection", ["backbone", "jquery", "models/PanelBarModel", "utils/ebreaderUtil", "utils/commonUtil", "vent"], function(e, t, n, r, i, s) {
    return e.Collection.extend({model: n,initialize: function(e, t) {
            s.on("openPanel", this.openNewPanel, this), this.gbData = t, this.prepareData()
        },prepareData: function() {
            DanaMethodAdd("add", this, {panelTest: "gold",panelName
                : "bookToc"}, {add: !0,remove: !0,merge: !1})
        },openNewPanel: function(e) {
            var t = this.findWhere({panelName: e});
            (t === null || typeof t == "undefined") && DanaMethodAdd("add", this, {panelTest: "White",panelName: e}, {add: !0,remove: !1,merge: !1})
        }})
}), define("views/PanelReaderPanelCollectionView", ["marionette", "jquery", "underscore", "templates", "utils/ebreaderUtil", "utils/commonUtil", "views/PanelBookTocItemView", "views/PanelBookDetailsItemView", "views/PanelBookNotesCollectionView", "views/PanelBookSearchCollectionView", "views/PanelBookResourceItemView", "views/MainLoadingItemView", "collections/PanelBarCollection", "vent"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p) {
    return e.CollectionView.extend({id: "panel",className: "panelSection",itemView: o,emptyView: c,initialize: function(e) {
            this.collection = new h(null, e.gbData), p.on("openPanel", this.togglePanelName, this)
        },events: {"click #closePanel": "closePanel"},onAfterItemAdded: function(e) {
        },appendHtml: function(e, t, n) {
            var r = e.itemViewContainer ? e.$(e.itemViewContainer) : e.$el, i = r.children();
            i.size() <=
            n ? r.append(t.el) : i.eq(n).before(t.el)
        },getItemView: function(e) {
            var t = e.get("panelName"), n;
            return t === "bookToc" && (n = o), t === "bookDetails" && (n = u), t === "bookNotes" && (n = a), t === "bookSearch" && (n = f), t === "bookResources" && (n = l), n
        },togglePanelName: function(e) {
            var t = this;
            this.children.each(function(n) {
                if (e === n.model.get("panelName")) {
                    var r = DanaMethodAttr("attr", n.$el, "id");
                    t.openPanel(r)
                } else
                    n.$el.hide()
            })
        },closePanel: function() {
            var e = 0, n = t(window).width(), r = n - e - 50, i = t("#panel > div").filter(":visible"), s = DanaMethodAttr("attr", i, "id"), o = this;
            t("#" + s).fadeOut(500, function() {
                var r = t("#panelLayoutRegion").outerWidth(), i = n - r;
                t("#mainViewer").animate({width: i + "px"}, 500), t("#panelLayoutRegion").animate({width: e}, 500, function() {
                    o.sizeDivs()
                })
            })
        },openPanel: function(e) {
            var n = t("#panelLayoutRegion").outerWidth();
            if (n > 250) {
                t("#" + e).fadeIn(500).show();
                return
            }
            var r = 400, i = t(window).width(), s = i - r - 50;
            t("#mainViewer").animate({width: s}, 500);
            var o = this;
            t("#panelLayoutRegion").animate({width: r}, 500, function() {
                t("#" + e).fadeIn(500).show(), o.sizeDivs()
            }
            )
        },sizeDivs: function() {
            var e = t(window).width(), n = t("#sideBar").outerWidth(), r = t("#panel").outerWidth();
            t("#mainViewer").width(e - r - n)
        }})
}), define("utils/notesUtil", ["jquery"], function(e) {
    e.fn.resizable = function() {
        var t = null, n = null, r, i, s, o, u, a = 140, f = 100;
        return e(document).on("mouseup", function() {
            t = null
        }), e(document).on("mousemove", function(e) {
            if (t !== null) {
                var l = o + (e.pageX - r), c = u + (e.pageY - i);
                l < a && (l = a), c < f && (c = f), n.width(l), n.height(c), t.css("width", l + s + "px")
            }
        }), this.each(function() {
            var a = e(this);
            e(".note-resize-handle", a).on("mousedown", function(f) {
                t = a, n = e("#note-content", a), r = f.pageX, i = f.pageY, o = n.width(), u = n.height(), s = a.width() - o
            })
        })
    }
}), define("views/MainItemView", ["marionette", "jquery", "templates", "utils/ebreaderUtil", "utils/commonUtil", "vent", "i18next"], function(e, t, n, r, i, s, o) {
    return e.ItemView.extend({template: n.mainContentTemplate,id: function() {
            return ("mainPageContainer_" + this.model.get("pageNum"))
        },className: "mainViewerImgContainerParent",headerShowing: !0,ctx: {},searchCtx: {},annotCtx
        : {},tracking: !1,noteTrack: !1,initialize: function(e) {
            this.orgWd = e.orgWd, this.orgHgt = e.orgHgt, this.zm = e.zm, this.divzm = e.divzm, this.widthTest = e.widthTest, this.showSearhHits = e.showSearhHits;
            var t = i.readCookie("ESESSIONID");
            this.pebr = new r, this.pebr.init(t), this.noteRSize = {}
        },modelEvents: {"change add": "render"},onBeforeRender: function() {
        },onRender: function() {
            var e = this.model.get("pageNum") - 1, n = (this.orgHgt + this.widthTest) * e, r = this.$el.find(".mainViewerImgCloak");
            if (r.length != 0) {
                var i = r.get(0).getContext("2d");
                i.fillStyle = "#c0e9fb", i.globalAlpha = .6, DanaMethodSave("save", i), this.ctx = i
            }
            r = this.$el.find(".mainViewerSearchCloak");
            if (r.length != 0) {
                var s = r.get(0).getContext("2d");
                s.fillStyle = "#7483BB", s.globalAlpha = .3, this.searchCtx = s
            }
            r = this.$el.find(".mainViewerAnnotCloak");
            if (r.length != 0) {
                var i = r.get(0).getContext("2d");
                i.fillStyle = "#ffbc0b", i.globalAlpha = .4, this.annotCtx = i
            }
            if (!_.isUndefined(this.model.get("page")) && this.model.get("page").width > this.orgWd) {
                t("#mainViewerPagesContainer").css({height: this.orgHgt,width
                    : this.model.get("page").width + 2}), this.$el.css({top: n,height: this.orgHgt,width: this.model.get("page").width + 2}), this.$el.find(" * ").not("br").not("img").not("canvas").not("span").css({height: this.orgHgt,width: this.model.get("page").width + 2});
                var o = this.$el.find("img").width(), u = this.$el.find("img").height();
                this.tmpImgLeftforFloat = (this.model.get("page").width + 2 - o) / 2, this.tmpImgTopforFloat = (this.orgHgt - u) / 2;
                var a = o + this.tmpImgLeftforFloat - 84;
                this.$el.find(".bookmark ").css({top: this.$el.find("img").css("top"),left: a + "px"})
            } else {
                this.$el.find(" * ").not("br").not("img").not("canvas").not("span").css({height: this.orgHgt,width: this.orgWd}), t("#mainViewerPagesContainer").css({height: this.orgHgt,width: this.orgWd}), this.$el.css({top: n,height: this.orgHgt,width: this.orgWd});
                if (_.isUndefined(DanaMethodAttr("attr", this.$el.find(".bookmark"), "id")))
                    return;
                var o = this.$el.find("img").outerWidth(), u = this.$el.find("img").outerHeight();
                this.tmpImgLeftforFloat = Math.ceil((this.orgWd - o) / 2), this.tmpImgTopforFloat = Math.ceil
                ((this.orgHgt - u) / 2);
                var a = o + this.tmpImgLeftforFloat - 84;
                parseInt(this.$el.find("img").css("top")) === 0 ? this.$el.find(".bookmark ").css({top: this.tmpImgTopforFloat,left: a + "px"}) : this.$el.find(".bookmark ").css({top: this.$el.find("img").css("top"),left: a + "px"})
            }
            if (!_.isUndefined(this.showSearhHits) && this.showSearhHits === !0) {
                var f = this.model.get("searches");
                !_.isUndefined(f) && f.length > 0 && this.highLightSearchTerms()
            }
            var l = this.model.get("annots");
            !_.isUndefined(l) && l.length > 0 && this.showPageAnnotes()
        },onItemRender: function() {
        },templateHelpers: {something: function() {
                return ("Do stuff with " + this.page.parts + " because it's awesome.")
            },wrapDashErrorMessage: function() {
                return _.isUndefined(this["status-message"]) ? o.t("rr_content_not_allowed") : this["status-message"] === "TOO_MANY_PREVIEWED" ? o.t("rr_content_not_allowed") : this["status-message"]
            },bookMarked: function() {
                if (!_.isUndefined(this.annots !== "undefined") && this.annots.length > 0) {
                    var e = _.find(this.annots, function(e) {
                        return e.bookMark
                    });
                    return (!_.isUndefined
                    (e))
                }
                return (!1)
            }},events: {"dblclick canvas": "cloakWordHighlight","click canvas": "cloakClick","mousedown canvas": "cloakMouseDown","mousemove canvas": "cloakMouseDrag","mouseup canvas": "cloakMouseUp","click #contextCopy": "contextCopyMode","click #contextHighlightPink": "contextHighPink","click #contextHighlightBlue": "contextHighBlue","click #contextHighlightYellow": "contextHighYellow","click #contextNote": "createContextNote","dblclick .note-icon.note-collapsed": "callNoteTextPop","click #noteTextdelete": "deleteTextNote","click #noteTextclose": "closeTextNote","click #noteTextCancel": "closeTextNote","click #noteTextSave": "saveTextNote","click  .popover-content button.icon-trash": "deleteHigh","click .bookmark": "annotBookmark","click #contextCustomSearch": "callCustomSearch"},annotBookmark: function(e) {
            if (!_.isUndefined(this.model.get("status")) && this.model.get("status") === "FAILURE")
                return (!1);
            var t = this.$el.find(".bookmark"), n = !_.isUndefined(this.model.collection.gbData) && this.model.collection.gbData.
            selectedZone.active, r = this.model.collection.gbData.selectedZone.active_page;
            n && (s.trigger("clsPgSel", r, !0), s.trigger("resetPgSel", !0, !0)), s.trigger("cNotes"), this.model.collection.gbData.whatClicked = "to_bookmark";
            if (t.hasClass("icon-bookmark-off")) {
                var i = {op: "annotate",encID: this.model.collection.gbData.encID,zoom: this.model.collection.gbData.zm,type: "link",ppg: this.model.get("pageNum"),s: -1,e: -1}, o = this.saveAnnotation(i, "BookMark:");
                if (o.length > 0) {
                    var u = this;
                    _.each(o, function(e) {
                        u.model.get("annots").push(e), u.postToPanel("save", e)
                    }), t.removeClass("icon-bookmark-off").addClass("icon-bookmark-on")
                }
            } else {
                var a = this.model.get("annots");
                if (!_.isUndefined(a) && a.length > 0) {
                    var f = _.find(a, function(e) {
                        return e.bookMark
                    });
                    if (!_.isUndefined(f))
                        return this.delAnnotBMID(f.annotID)
                }
                t.removeClass("icon-bookmark-on").addClass("icon-bookmark-off")
            }
        },delAnnotBMID: function(e) {
            var t = this.model.get("annots"), n = _.find(t, function(t) {
                return t.annotID === e
            });
            if (!_.isUndefined(n)) {
                var r = this.deleteAnnot(e);
                if (r)
                {
                    var i = this.delPageAnnots(e);
                    this.model.set({annots: i}, {silent: !0});
                    var s = {annotID: e,chapterId: n.chapInfo.chapterId};
                    return this.postToPanel("del", s), this.$el.find(".bookmark").removeClass("icon-bookmark-on").addClass("icon-bookmark-off"), !1
                }
            }
        },deleteTextNote: function(e) {
            var n = t(e.currentTarget), r = DanaMethodAttr("attr", n.parent().parent(), "id").split("_")[2];
            this.delAnnotNID(r)
        },delAnnotNID: function(e) {
            e === "0" ? this.resetSelectedZone() : this.deleteNoteAnnot(e), this.closeTextNote()
        },deleteNoteAnnot: function(e) {
            var t = this.model.get("annots"), n = _.find(t, function(t) {
                return t.annotID === parseInt(e)
            });
            if (!_.isUndefined(n)) {
                var r = this.deleteAnnot(e);
                if (r) {
                    var i = {annotID: e,chapterId: n.chapInfo.chapterId};
                    this.postToPanel("del", i), this.delAndRefreshPageAnnots(e)
                }
            }
        },deleteAnnot: function(e) {
            return this.model.collection.deleteAnnot(this.model.get("pageNum"), e)
        },closeTextNote: function() {
            t("[id^='myNotePopId_']").remove();
            var e = this.$el.find(".mainViewerImgCloak");
            e.length > 0 && this.ctx.clearRect(0, 0, e.width(), e.height())
        },saveTextNote: function(e) {
            var n = t(e.currentTarget).parent().parent(), r = DanaMethodAttr("attr", n, "id").split("_")[2], i = n.find("#note-content").val().trim() || "";
            if (i.length > 0) {
                var s = {op: "annotate",encID: this.model.collection.gbData.encID,zoom: this.model.collection.gbData.zm,type: "create_note",ppg: this.model.get("pageNum"),x: parseInt(n.css("left")),y: parseInt(n.css("top")),width: n.outerWidth(),height: n.outerHeight()};
                this.model.collection.gbData.finalSelections.active === !0 && (s.s = this.model.collection.gbData.finalSelections.s_quad, s.e = this.model.collection.gbData.finalSelections.e_quad, s.type = "noteyellow"), "0" !== r && (s.op = "edit", s.type = "note" + DanaMethodAttr("attr", n, "class").split("-")[1], s.id = r, s.changetype = "TEXT");
                var o = this.saveAnnotation(s, i);
                if (!_.isUndefined(o)) {
                    var u = this;
                    if ("0" === r)
                        _.each(o, function(e) {
                            _.isUndefined(u.model.get("annots")) || (u.model.get("annots").push(e), u.postToPanel("save", e), u.showIndiPageAnnote(e))
                        });
                    else {
                        var a = this.model.get("annots");
                        _.each(a, function(e) {
                            e.annotID === parseInt(o.annotID) && (e.label =
                            i, o.chapterId = e.chapInfo.chapterId)
                        }), u.postToPanel("edit", o)
                    }
                }
            }
            this.closeTextNote()
        },deleteHigh: function(e) {
            var n = t(e.currentTarget), r = DanaMethodAttr("attr", n, "id").split("_")[2];
            this.delAnnotHID(r)
        },delAnnotHID: function(e) {
            this.$el.popover("destroy");
            var t = this.deleteAnnot(e);
            if (t) {
                var n = this.model.get("annots"), r = _.find(n, function(t) {
                    return t.annotID === parseInt(e)
                }), i = {annotID: e,chapterId: r.chapInfo.chapterId};
                this.postToPanel("del", i), this.delAndRefreshPageAnnots(e)
            }
        },delAndRefreshPageAnnots: function(e) {
            this.clearPageAnnots();
            var t = this.delPageAnnots(e);
            this.model.set({annots: t}, {silent: !0}), this.showPageAnnotes()
        },delPageAnnots: function(e) {
            var n = this.model.get("annots");
            return n = t.grep(n, function(t) {
                return t.annotID !== parseInt(e)
            }), n
        },clearPageAnnots: function() {
            var e = this.$el.find(".mainViewerAnnotCloak");
            this.annotCtx.clearRect(0, 0, e.width(), e.height());
            var e = this.$el.find(".mainViewerImgCloak");
            e.length > 0 && this.ctx.clearRect(0, 0, e.width(), e.height()), this.$el.find("[id^='note_']").remove()
        },showPageAnnotes
        : function() {
            var e = this.model.get("annots"), t = this;
            _.each(e, function(e) {
                t.showIndiPageAnnote(e)
            })
        },showIndiPageAnnote: function(e) {
            "hilite" === e.annotType ? this.annotHighlight(e.tint, e.rects) : "sticky" === e.annotType ? (this.showNoteIcon(e), e.hiliteId !== 0 && this.annotHighlight(e.tint, e.rects)) : "link" === e.annotType && (e.bookMark || (this.showNoteIcon(e), e.hiliteId !== 0 && this.annotHighlight("yellow", e.rects)))
        },showNoteIcon: function(e) {
            var n = "note_" + this.model.get("pageNum") + "_" + e.annotID, r = e.tint !== "none" ? e.tint : "yellow", i = "note-icon note-collapsed  note-collapsed-" + r, s = t("<div>", {id: n,"class": i});
            s.append(t("#myNoteIconId").html());
            if (!e.pageLevelNote) {
                var o = e.rects;
                if (o.length > 0) {
                    var u = o[0].top;
                    s.css({top: this.tmpImgTopforFloat + u + "px",left: this.tmpImgLeftforFloat})
                } else
                    s.css({top: this.tmpImgTopforFloat + "px",left: this.tmpImgLeftforFloat})
            } else
                s.css({top: this.tmpImgTopforFloat + "px",left: this.tmpImgLeftforFloat});
            this.$el.find("[name='actualImgContent']").append(s)
        },callNoteTextPop: function(e) {
            var n =
            t(e.currentTarget), r = DanaMethodAttr("attr", n, "id").split("_")[2], i = this.model.get("annots"), s = _.find(i, function(e) {
                return e.annotID === parseInt(r)
            });
            _.isUndefined(s) || this.showNoteAnnot(s)
        },showNoteAnnot: function(e) {
            s.trigger("cNotes"), this.resetSelectedZone(), e.rects.length !== 0 && this.showBorderHigh(e), this.showNoteTextPop(e)
        },showNoteTextPop: function(e) {
            var n = this.model.get("pageNum"), r = "myNotePopId_" + n + "_" + e.annotID, i = e.tint !== "none" ? e.tint : "yellow", s = "note  note-" + i, o = t("<div>", {id: r,"class": s});
            o.append(t("#myNotePopId").html()), o.find("#note-content").val(e.label);
            if (!e.pageLevelNote) {
                var u = e.rects;
                if (u.length > 0) {
                    var a = u[0].top;
                    o.css({top: this.tmpImgTopforFloat + a + "px",left: this.tmpImgLeftforFloat})
                } else
                    o.css({top: this.tmpImgTopforFloat + "px",left: this.tmpImgLeftforFloat})
            } else
                o.css({top: this.tmpImgTopforFloat + "px",left: this.tmpImgLeftforFloat});
            e.annotType === "link" && DanaMethodAttr("attr", o.find("#noteTextSave"), "disabled", "disabled"), this.$el.append(o), this.$el.find("#note-content").focus(), t(".note").resizable()
        },
        annotHighlight: function(e, t) {
            this.annotCtx.globalAlpha = .4, this.annotCtx.fillStyle = this.getHighLightStyle(e);
            var n = this;
            _.each(t, function(e) {
                n.annotCtx.fillRect(e.left, e.top, e.width, e.height)
            })
        },contextHighPink: function() {
            this.saveHighlight("pink")
        },contextHighBlue: function() {
            this.saveHighlight("blue")
        },contextHighYellow: function() {
            this.saveHighlight("yellow")
        },saveHighlight: function(e) {
            if (this.model.collection.gbData.finalSelections.active === !0) {
                var t = {op: "annotate",encID: this.model.collection.gbData.encID,zoom: this.model.collection.gbData.zm,type: e,s: this.model.collection.gbData.finalSelections.s_quad,e: this.model.collection.gbData.finalSelections.e_quad,ppg: this.model.get("pageNum")}, n = this.saveAnnotation(t);
                if (n.length > 0) {
                    var r = this;
                    _.each(n, function(e) {
                        r.model.get("annots").push(e), r.postToPanel("save", e), r.showIndiPageAnnote(e)
                    })
                }
            }
            this.resetSelectedZone()
        },saveAnnotation: function(e, n) {
            this.model.collection.gbData.whatClicked = "";
            var r = t.param(e), i = "encrypted=" + this.pebr.enc(r) + "&remote_id=" +
            this.model.collection.gbData.ssen;
            _.isUndefined(n) || (i += "&note=" + encodeURIComponent(n)), i += "&tm=1";
            var u = {};
            return t.ajax({dataType: "json",url: "remoteBookshelf.api",async: !1,type: "POST",data: i,success: function(n) {
                    if (typeof n.status != "undefined" && typeof n.errorCode == "undefined")
                        n["status-code"] === 0 && (u = n.annots);
                    else if (typeof n.errorCode == "undefined" || n.errorCode !== "SESSION_TIMED_OUT" && n.errorCode !== "LOGIN_REQUIRED") {
                        var r = t("#dialogModalAlertError").modal("show");
                        r.find("#msg").empty().html(o.t("rr_error") + n["status-message"])
                    } else
                        s.trigger("tbsgn", e.type)
                },error: function(e, n, r) {
                    var i = t("#dialogModalAlertError").modal("show");
                    i.find("#msg").empty().html(o.t("rr_error_refresh_try_again"))
                }}), u
        },postToPanel: function(e, t) {
            if ("save" === e) {
                var n = t.chapInfo.chapterId, r = t.physicalPage - 1, i = {nAnnot: {hiliteId: _.isUndefined(t.hiliteId) ? 0 : t.hiliteId,tint: t.tint,pageLevelNote: t.pageLevelNote,annotType: t.annotType,annotID: t.annotID,logicalPage: this.model.collection.gbData.tmpLpg[r],physicalPage: t.physicalPage
                        ,startQuad: t.startQuad,labelText: t.labelText,endQuad: t.endQuad,bookMark: t.bookMark},chap: {chapId: t.chapInfo}};
                s.trigger("pnlAnt", i, e)
            } else
                s.trigger("pnlAnt", t, e)
        },getHighLightStyle: function(e, t) {
            var n = "#FFBC0B";
            return t === "sStyle" ? e === "pink" ? n = "#e260df" : e === "blue" ? n = "#0092c7" : n = "#FFBC0B" : e === "pink" ? n = "#e260df" : e === "blue" && (n = "#0092c7"), n
        },contextHighlight: function() {
            if (this.model.collection.gbData.finalSelections.active === !0)
                for (var e = this.model.collection.gbData.finalSelections.s_quad; e <= this.model.collection.gbData.finalSelections.e_quad; e++) {
                    var t = this.model.get("allQuads")[e];
                    !_.isUndefined(t) && !_.isNull(t) && this.annotCtx.fillRect(t.mTlh, t.mTlv, t.width, t.height)
                }
        },highLightSearchTerms: function() {
            var e = this;
            _.each(this.model.get("searches"), function(t) {
                !_.isUndefined(t) && !_.isNull(t) && e.searchCtx.fillRect(t.left, t.top, t.width, t.height)
            })
        },cloakWordHighlight: function(e) {
            var n = t(e.target).get(0), r = this.getMousePos(n, e), i = !1;
            this.model.collection.gbData.selectedZone.active == 1 && this.clearSelections
            ();
            var s = this.getQuadAtPoint(this.model.get("allQuads"), r);
            if (s != -1) {
                var o = this.model.get("annots"), u = this;
                _.each(o, function(e) {
                    if (s >= e.startQuad && s <= e.endQuad && e.annotType == "hilite")
                        return u.showDeleteHigh(e), i = !0, !1
                });
                if (i)
                    return (!1);
                this.model.collection.gbData.selectedZone.active = !0, this.model.collection.gbData.selectedZone.s_quad = s, this.model.collection.gbData.selectedZone.e_quad = s, this.model.collection.gbData.selectedZone.active_page = this.model.get("pageNum"), this.model.collection.gbData.selectedZone.s_floats = !1, this.model.collection.gbData.selectedZone.e_floats = !1, this.model.collection.gbData.finalSelections.active = !0, this.model.collection.gbData.finalSelections.e_quad = s, this.model.collection.gbData.finalSelections.s_quad = s, this.model.collection.gbData.finalSelections.active_page = this.model.get("pageNum"), this.fillSelections()
            }
            if (this.model.collection.gbData.finalSelections.active) {
                var a = this.model.get("pageNum");
                this.$el.popover({trigger: "manual",placement: "top",html: !0,container: "#mainViewerImgCloakWrapper_" +
                    a,content: function() {
                        return t("#contextMenuPop").html()
                    }}), this.$el.popover("show");
                var f = this.model.get("allQuads")[this.model.collection.gbData.finalSelections.s_quad], l = (f.mTlh + f.mTrh) / 2 - 88 + this.tmpImgLeftforFloat;
                t(".popover").css({left: l + "px",top: f.mTlv + this.tmpImgTopforFloat - 45 + "px"})
            }
        },showBorderHigh: function(e) {
            var t = this;
            this.ctx.globalAlpha = 1, this.ctx.strokeStyle = this.getHighLightStyle(e.tint, "sStyle"), _.each(e.rects, function(e) {
                t.ctx.strokeRect(e.left, e.top, e.width, e.height)
            }), this.ctx.restore()
        },showDeleteHigh: function(e) {
            this.showBorderHigh(e);
            var n = e.rects[0], r = (n.left * 2 + n.width) / 2 - 22 + this.tmpImgLeftforFloat, i = n.top - 45 + this.tmpImgTopforFloat, s = this.model.get("pageNum");
            this.$el.popover({trigger: "manual",placement: "top",html: !0,container: "#mainViewerImgCloakWrapper_" + s,content: function() {
                    var n = "highLightDel_" + s + "_" + e.annotID, r = t("<button>", {id: n,"class": "icon-trash"});
                    return r
                }}), this.$el.popover("show"), t(".popover").css({left: r + "px",top: i + "px"})
        },cloakClick: function(e) {
        },
        cloakMouseDown: function(e) {
            this.resetSelectedZone();
            if (!_.isUndefined(this.model.get("status")) && this.model.get("status") === "FAILURE")
                return this.model.collection.gbData.whatClicked = "", !1;
            this.model.collection.gbData.whatClicked === "toolHigh" && (this.ctx.fillStyle = this.getHighLightStyle("yellow"));
            if (!_.isUndefined("allQuads") && this.model.get("allQuads").length > 0) {
                this.model.collection.gbData.selectedZone.active = !0, this.tracking = !0, this.model.collection.gbData.selectedZone.active_page = this.model.get("pageNum");
                if (this.tracking == 1) {
                    var n = t(e.target).get(0), r = this.getMousePos(n, e), i = this.model.get("allQuads"), s = this.getQuadAtPoint(i, r);
                    s >= 0 ? (this.model.collection.gbData.selectedZone.s_quad = s, this.model.collection.gbData.selectedZone.s_floats = !1) : (s = this.findPrevQuad(i, r), s < 0 ? (this.model.collection.gbData.selectedZone.s_quad = 0, this.model.collection.gbData.selectedZone.s_floats = !1) : (this.model.collection.gbData.selectedZone.s_floats = !0, this.model.collection.gbData.selectedZone.s_quad = s))
                }
            }
        },cloakMouseDrag
        : function(e) {
            var n = t(e.target).get(0);
            if (this.tracking == 1) {
                DanaPutCursor(e.target.style, "text", 0);
                var r = this.getMousePos(n, e), i = this.model.get("allQuads"), s = this.getQuadAtPoint(i, r);
                s < 0 ? (s = this.findPrevQuad(i, r), this.model.collection.gbData.selectedZone.e_floats = !0) : this.model.collection.gbData.selectedZone.e_floats = !1, this.cleanFillSelections(s)
            }
        },cloakMouseUp: function(e) {
            var n = this.model.collection.gbData.selectedZone.active_page;
            n != -1 && n !== this.model.get("pageNum") && s.trigger("clsPgSel", n, !1), DanaPutCursor(e.target.style, "default", 0), this.tracking = !1, this.setFinalQuadsForSelection();
            if (this.model.collection.gbData.finalSelections.active === !0) {
                if (this.model.collection.gbData.whatClicked === "toolHigh")
                    return this.contextHighYellow(), !1;
                var r = t(e.target).get(0), i = this.getMousePos(r, e), o = this.model.collection.gbData.finalSelections.active_page;
                this.$el.popover({trigger: "manual",placement: "top",html: !0,container: "#mainViewerImgCloakWrapper_" + o,content: function() {
                        return t("#contextMenuPop").html()
                    }}), this.$el.
                popover("show");
                var u = this.model.get("allQuads")[this.model.collection.gbData.finalSelections.s_quad], a = (u.mTlh + u.mTrh) / 2 - 88 + this.tmpImgLeftforFloat;
                t(".popover").css({left: a + "px",top: u.mTlv + this.tmpImgTopforFloat - 45 + "px"})
            }
        },cleanFillSelections: function(e) {
            this.clearSelections(), this.model.collection.gbData.selectedZone.e_quad = e, this.fillSelections()
        },clearSelections: function() {
            var e = this.model.collection.gbData.selectedZone.active_page;
            if (e != -1 && e !== this.model.get("pageNum"))
                s.trigger("clsPgSel", e, !0), this.model.collection.gbData.selectedZone.active_page = this.model.get("pageNum");
            else {
                var t = this.$el.find(".mainViewerImgCloak");
                t.length > 0 && this.ctx.clearRect(0, 0, t.width(), t.height()), this.clearFinalSelections()
            }
        },setFinalQuadsForSelection: function() {
            if (this.model.collection.gbData.selectedZone.active === !0) {
                var e = this.findFinalQuads();
                e.s_quad !== -1 && e.e_quad !== -1 && (this.model.collection.gbData.finalSelections.active = !0, this.model.collection.gbData.finalSelections.s_quad = e.s_quad, this.model
                .collection.gbData.finalSelections.e_quad = e.e_quad, this.model.collection.gbData.finalSelections.active_page = this.model.collection.gbData.selectedZone.active_page)
            }
        },clearChildSelections: function(e) {
            if (e) {
                var t = this.$el.find(".mainViewerImgCloak");
                t.length > 0 && (this.ctx.clearRect(0, 0, t.width(), t.height()), this.clearFinalSelections())
            }
            this.tracking = !1
        },clearFinalSelections: function() {
            this.$el.popover("destroy"), this.model.collection.gbData.finalSelections.active = !1, this.model.collection.gbData.finalSelections.s_quad = -1, this.model.collection.gbData.finalSelections.e_quad = -1, this.model.collection.gbData.finalSelections.active_page = -1
        },fillSelections: function() {
            var e = this.findFinalQuads();
            for (var t = e.s_quad; t <= e.e_quad; t++) {
                var n = this.model.get("allQuads")[t];
                !_.isUndefined(n) && !_.isNull(n) && this.ctx.fillRect(n.mTlh, n.mTlv, n.width, n.height)
            }
        },findFinalQuads: function() {
            var e = -1, t = this.model.collection.gbData.selectedZone.e_quad;
            this.model.collection.gbData.selectedZone.e_floats ? (e = this.model.collection
            .gbData.selectedZone.s_quad, t < e ? t++ : t > e ? this.model.collection.gbData.selectedZone.s_floats && e++ : this.model.collection.gbData.selectedZone.s_floats && (e = t = -1)) : (e = this.model.collection.gbData.selectedZone.s_quad, this.model.collection.gbData.selectedZone.s_floats && t > e && e++);
            if (e > t) {
                var n = e;
                e = t, t = n
            }
            return ({s_quad: e,e_quad: t})
        },_fillSelections: function() {
            var e = this.model.collection.gbData.selectedZone.s_quad, t = this.model.collection.gbData.selectedZone.e_quad;
            this.model.collection.gbData.selectedZone.e_floats ? t < e ? t++ : t > e ? this.model.collection.gbData.selectedZone.s_floats && e++ : this.model.collection.gbData.selectedZone.s_floats && (t = e = -1) : this.model.collection.gbData.selectedZone.s_floats && e++;
            if (e > t) {
                var n = e;
                e = t, t = n
            }
            if (e != -1 && t != -1)
                for (var r = e; r <= t; r++) {
                    var i = this.model.get("allQuads")[r];
                    !_.isUndefined(i) && !_.isNull(i) && this.ctx.fillRect(i.mTlh, i.mTlv, i.width, i.height)
                }
        },findPrevQuad: function(e, t) {
            var n = -1, r = e.length;
            for (var i = 0; i < r; i++) {
                var s = e[i];
                i > n && s.mBrv < t.y ? n = i : i > n && s.mBrv <= t.y && s.mTrh <= t
                .x && (n = i)
            }
            return n
        },getMousePos: function(e, t) {
            var n = e.getBoundingClientRect();
            return ({x: t.clientX - n.left,y: t.clientY - n.top})
        },getQuadAtPoint: function(e, t) {
            var n = -1, r = this;
            return _.each(e, function(e, i) {
                if (r.pointInQuad(t, e))
                    return n = i, !1
            }), n
        },pointInQuad: function(e, t) {
            return e.x >= t.mTlh && e.x <= t.mBrh && e.y >= t.mTlv && e.y <= t.mBrv ? !0 : !1
        },resetSelectedZone: function() {
            this.$el.popover("destroy"), t("[id^='myNotePopId_']").remove(), this.ctx.fillStyle = "#c0e9fb", this.ctx.globalAlpha = .6, this.clearSelections(), this.model.collection.gbData.selectedZone.active = !1, this.model.collection.gbData.selectedZone.s_quad = -1, this.model.collection.gbData.selectedZone.e_quad = -1, this.tracking = !1, this.model.collection.gbData.selectedZone.s_floats = !1, this.model.collection.gbData.selectedZone.e_floats = !1, this.model.collection.gbData.finalSelections.active = !1, this.model.collection.gbData.finalSelections.s_quad = -1, this.model.collection.gbData.finalSelections.e_quad = -1, this.model.collection.gbData.finalSelections.active_page = -1
        },contextCopyMode: function(e) {
            this.$el.popover("destroy"), s.trigger("cpgt")
        },createPageLevelNote: function() {
            if (!_.isUndefined(this.model.get("status")) && this.model.get("status") === "FAILURE")
                return (!1);
            var e = this.model.get("annots"), n = {};
            !_.isUndefined(e) && e.length != 0 && (n = t.grep(e, function(e) {
                return e.pageLevelNote
            })), n.length > 0 ? this.showNoteTextPop(n[0]) : this.createNewNote(!0)
        },createNewNote: function(e) {
            s.trigger("cNotes");
            var n = this.model.get("pageNum"), r = "myNotePopId_" + n + "_" + 0, i = "note note-yellow", o = t("<div>", {id: r,"class": i});
            o.append(t("#myNotePopId").html());
            if (!e) {
                var u = this.model.get("allQuads")[this.model.collection.gbData.finalSelections.s_quad];
                if (!_.isUndefined(u) && !_.isNull(u)) {
                    var a = u.mTlv;
                    o.css({top: this.tmpImgTopforFloat + a + "px",left: this.tmpImgLeftforFloat})
                } else
                    o.css({top: this.tmpImgTopforFloat + "px",left: this.tmpImgLeftforFloat})
            } else
                o.css({top: this.tmpImgTopforFloat + "px",left: this.tmpImgLeftforFloat});
            this.$el.append(o), this.$el.find("#note-content").focus(), t(".note").
            resizable()
        },createContextNote: function() {
            this.$el.popover("destroy");
            if (!this.model.collection.gbData.DocUser.signedIn) {
                s.trigger("tbsgn", "add_notes");
                return
            }
            this.ctx.fillStyle = this.getHighLightStyle("yellow");
            var e = this.$el.find(".mainViewerImgCloak");
            if (e.length > 0) {
                this.ctx.clearRect(0, 0, e.width(), e.height());
                for (var t = this.model.collection.gbData.finalSelections.s_quad; t <= this.model.collection.gbData.finalSelections.e_quad; t++) {
                    var n = this.model.get("allQuads")[t];
                    !_.isUndefined(n) && !_.isNull(n) && this.ctx.fillRect(n.mTlh, n.mTlv, n.width, n.height)
                }
                this.ctx.restore()
            }
            this.createNewNote(!1)
        },panelChDeleteAnnot: function(e) {
            var t = this.model.get("annots");
            if (_.isUndefined(t) || t.length == 0)
                return (!1);
            "hilite" === e.annotType ? this.delAnnotHID(e.annotID) : "sticky" === e.annotType ? this.delAnnotNID(e.annotID) : e.bookMark ? this.delAnnotBMID(e.annotID) : "link" === e.annotType && this.delAnnotNID(e.annotID)
        },panelChShowAnnot: function(e) {
            var t = this.model.get("annots");
            if (_.isUndefined(t) || t.length == 0)
                return (!1);
            var n =
            _.find(t, function(t) {
                return t.annotID === e.annotID
            });
            _.isUndefined(n) || ("hilite" === n.annotType ? this.showDeleteHigh(n) : "sticky" === n.annotType ? this.showNoteAnnot(n) : "link" === n.annotType && !n.bookMark && this.showNoteAnnot(n))
        },callCustomSearch: function(e) {
            this.$el.popover("destroy"), s.trigger("openBrp"), s.trigger("cssel")
        }})
}), define("models/DocServer", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({idAttribute: "pageNum",initialize: function(e, t) {
        },parse: function(e, t) {
            var n = typeof e.dcy != "undefined" ? typeof this.collection != "undefined" ? JSON.parse(this.collection.pebr.dec(e.dcy)) : {} : e;
            return n
        }})
}), define("collections/DocServerCollection", ["backbone", "jquery", "models/DocServer", "utils/ebreaderUtil", "utils/commonUtil", "vent", "i18next"], function(e, t, n, r, i, s, o) {
    return e.Collection.extend({model: n,docTmp: {},url: function() {
            var e = "page=(" + this.gbData.tmpFetchPageNum + ")&zoom=" + this.gbData.zm + "&encID=" + this.gbData.encID + "&op=" + (this.gbData.tmpOpt === 1 ? "view" : "fetch");
            return ("remoteDocServer.api?remote_id=" +
            this.gbData.ssen + "&encrypted=" + this.pebr.enc(e) + "&nq=1&search=" + encodeURIComponent(this.gbData.searchTerm) + "&tm=1")
        },initialize: function(e, t) {
            this.comparator = "pageNum";
            var n = i.readCookie("ESESSIONID");
            this.pebr = new r, this.pebr.init(n), this.gbData = t, this.prepareData()
        },prepareData: function() {
            var e = this.gbData.tmpFetchPageNum, n = parseInt(this.gbData.tmpzmMaxWidth * this.gbData.divzm), r = parseInt(this.gbData.tmpzmMaxHeight * this.gbData.divzm);
            this.gbData.orgWd = n, this.gbData.orgHgt = r;
            var i = this.gbData.tmpOpt = 1;
            if (typeof this.get(e) == "undefined") {
                var s = this, u = DanaMethodAdd("add", s, {at: e,cid: e,_id: e,pageNum: e,ht: s.gbData.orgHgt,wd: s.gbData.orgWd,tmpOpt: i});
                u.fetch({data: {cid: e,_id: e,pageNum: e,tmpOpt: i},remove: !1,add: !1,merge: !0,success: function(n, r, i) {
                        t("#mainViewerPagesContainerWrapper").css({height: (s.gbData.orgHgt + s.gbData.widthTest) * s.gbData.tpg,width: s.gbData.orgWd}), t("#mainViewerPagesContainer").css({height: s.gbData.orgHgt + 20,width: s.gbData.orgWd});
                        var o = t("#mainViewer");
                        if (e == 1 && s.gbData.tpg >= 2) {
                            var u = 115 -
                            o.scrollTop();
                            u = u % 2 == 0 ? u + 2 : u + 1, o.scrollTop(u)
                        } else if (o.length > 0 && typeof o.offset() != "undefined") {
                            var u = Math.ceil(o.scrollTop() - o.offset().top + t("#mainPageContainer_" + e).offset().top);
                            o.scrollTop(u)
                        }
                    },error: function(n, r, i) {
                        var s = t("#dialog-error-msg").show();
                        s.find("#msg").empty().html(o.t("rr_failed_to_fetch_page") + e)
                    }})
            }
        },prepareDataNewOrg: function() {
            var e = this.gbData.tmpFetchPageNum, n = parseInt(this.gbData.tmpzmMaxWidth * this.gbData.zm), r = parseInt(this.gbData.tmpzmMaxHeight * this.gbData.zm);
            this.gbData.orgWd = n, this.gbData.orgHgt = r, t("#mainViewerPagesContainerWrapper").css({height: (this.gbData.orgHgt + this.gbData.widthTest) * this.gbData.tpg,width: this.gbData.orgWd}), t("#mainViewerPagesContainer").css({height: this.gbData.orgHgt + 20,width: this.gbData.orgWd});
            var i = this;
            i.fetch({at: e,cid: e,_id: e,pageNum: e,fst: 2,ht: r,wd: n,remove: !1,merge: !1,success: function(s, u, a) {
                    var f = JSON.parse(s.pebr.dec(u.dcy));
                    if (f["status-code"] === 0) {
                        var l = [];
                        for (var c = 1; c <= i.gbData.tpg; c++)
                            l[l.length] = {at: c,cid: c,_id: c,
                                pageNum: c,ht: r,wd: n};
                        e == 1 && i.gbData.tpg >= 2 ? t("#mainViewer").scrollTop(1) : t("#mainViewer").scrollTop(t("#mainViewer").scrollTop() - t("#mainViewer").offset().top + t("#mainPageContainer_" + e).offset().top)
                    } else {
                        var h = t("#dialog-error-msg").show();
                        h.find("#msg").empty().html(o.t("rr_error") + f["status-message"])
                    }
                },error: function(n, r, i) {
                    var s = t("#dialog-error-msg").show();
                    s.find("#msg").empty().html(o.t("rr_failed_to_fetch_page") + e)
                }})
        },prepareDataOrg: function() {
        },deleteAnnot: function(e, n) {
            var r = "ppg=" + e + "&encID=" + this.gbData.encID + "&id=" + n + "&op=removeAnnot", i = "remoteBookshelf.api?encrypted=" + this.pebr.enc(r) + "&remote_id=" + this.gbData.ssen + "&tm=1", u = !0;
            return t.ajax({dataType: "json",url: i,async: !1,success: function(e) {
                    if (typeof e.status != "undefined" && typeof e.errorCode == "undefined")
                        e["status-code"] === 0 && (u = !0);
                    else {
                        u = !1;
                        if (typeof e.errorCode == "undefined" || e.errorCode !== "SESSION_TIMED_OUT" && e.errorCode !== "LOGIN_REQUIRED") {
                            var n = t("#dialogModalAlertError").modal("show");
                            n.find("#msg").empty().html(
                            o.t("rr_error") + e["status-message"])
                        } else
                            s.trigger("tbsgn", "to_delete")
                    }
                },error: function(e, n, r) {
                    var i = t("#dialogModalAlertError").modal("show");
                    i.find("#msg").empty().html(o.t("rr_error_refresh_try_again")), n = !1
                }}), u
        }})
}), define("views/ReaderMainContentCollectionView", ["marionette", "jquery", "underscore", "templates", "utils/ebreaderUtil", "utils/commonUtil", "utils/notesUtil", "views/MainItemView", "views/MainLoadingItemView", "collections/DocServerCollection", "vent", "i18next"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
    return e.CompositeView.extend({template: r.mainCompositeTemplate,itemViewContainer: "#mainViewerPagesContainer",id: "mainViewer",itemView: u,emptyView: a,skipBlockSize: !1,initialize: function(e) {
            if (e.gbData.hasAc === 1)
                this.collection = new f(null, e.gbData);
            else if (e.gbData.hasAc === 0)
                return;
            l.on("jtp", this.jumpToPage, this), l.on("rspzl", this.reSizeZlEffect, this), l.on("rspwd", this.reSizeWdEffect, this), l.on("rspht", this.reSizeHtEffect, this), l.on("clsPgSel", this.clearSelections, this), l.on("resetPgSel"
            , this.resetSelections, this), l.on("rSQHits", this.resetSearchQuads, this), l.on("cSQHits", this.clearSearchQuads, this), l.on("hSQHits", this.hideSearchQuads, this), l.on("sSQHits", this.showSearchQuads, this), l.on("cNotes", this.closeOpenNotes, this), l.on("tCPN", this.createPageNotes, this), l.on("tBM", this.toogleBookMark, this), l.on("tCH", this.createHighlight, this), l.on("pAntDel", this.panelDeleteAnnot, this), l.on("pAntSh", this.panelShowAnnot, this), this.getDebounce = n.debounce(function() {
                this.findPos(!0)
            }, 10, !0), this.getReDebounce = n.debounce(function() {
                t("#page-num-floater").hide(), this.findPos(!1)
            }, 150), this.ToolTipScrollWidth = this.browserWidthOfScrollBar()
        },itemViewOptions: function(e) {
            return ({orgWd: typeof this.collection != "undefined" ? this.collection.gbData.orgWd : 500,orgHgt: typeof this.collection != "undefined" ? this.collection.gbData.orgHgt : 500,zm: typeof this.collection != "undefined" ? this.collection.gbData.zm : 1,divzm: typeof this.collection != "undefined" ? this.collection.gbData.divzm : 1.2,widthTest: typeof this.collection != "undefined" ?
                this.collection.gbData.widthTest : 16,showSearhHits: typeof this.collection != "undefined" ? this.collection.gbData.showSearhHits : !0})
        },events: {scroll: "scrollDebounce"},tooltipPageShow: function(e) {
            this.obj.animate({top: e.pageY,left: t("#mainViewer").width() + t("#mainViewer").offset().left - (this.ToolTipScrollWidth + 40)}, {queue: !1,duration: 0,easing: "linear"})
        },browserWidthOfScrollBar: function() {
            var e, n;
            e = t('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), n = e.children();
            var r = n.innerWidth() - n.height(99).innerWidth();
            return e.remove(), r
        },findPosToOffset: function(e) {
            var t = 0, n = 0, r = 0, i = 0;
            while (e && e.offsetParent)
                i = e.offsetParent.scrollTop || 0, r = e.offsetParent.scrollLeft || 0, t += e.offsetLeft - r, n += e.offsetTop - i, e = e.offsetParent;
            return ([t, n])
        },onAfterItemAdded: function(e) {
        },appendHtml: function(e, t, n) {
            var r = e.itemViewContainer ? e.$(e.itemViewContainer) : e.$el, i = r.children();
            i.size() <= n ? r.append(t.el) : i.eq(n).before(t.el)
        },jumpToPageOrg: function(e) {
            this.collection.gbData.tmpFetchPageNum =
            e || 1;
            var n = this.collection.gbData.tmpFetchPageNum;
            if (typeof this.collection.get(n).get("page") == "undefined") {
                var r = this, i = r.collection.get({id: n});
                i.fetch({data: {cid: n,_id: n,pageNum: n},remove: !1,add: !1,merge: !0,success: function(e, r, i) {
                        t("#mainViewer").scrollTop(t("#mainViewer").scrollTop() + 3 - t("#mainViewer").offset().top + t("#mainPageContainer_" + n).offset().top)
                    }})
            } else
                this.collection.get(n).renderModel(), t("#mainViewer").scrollTop(t("#mainViewer").scrollTop() + 3 - t("#mainViewer").offset().top + t("#mainPageContainer_" + n).offset().top)
        },jumpToPage: function(e, n) {
            this.collection.gbData.tmpFetchPageNum = e || 1;
            var r = this.collection.gbData.tmpFetchPageNum;
            r <= 1 && t("#tool-pager-prev").prop("disabled", !0), r > 1 && t("#tool-pager-prev").removeProp("disabled"), this.collection.gbData.tmpLpg.length >= 2 && t("#tool-pager-next").removeProp("disabled"), r >= this.collection.gbData.tmpLpg.length && t("#tool-pager-next").prop("disabled", !0);
            if (typeof this.collection.get(r) == "undefined") {
                var i = this.collection.gbData.tmpOpt = 1
                , s = this, o = DanaMethodAdd("add", s.collection, {at: r,cid: r,_id: r,pageNum: r,ht: this.collection.orgHgt,wd: this.collection.orgWd,tmpOpt: i});
                o.fetch({data: {cid: r,_id: r,pageNum: r,tmpOpt: i},remove: !1,add: !1,merge: !0,success: function(e, n, i) {
                        s.skipBlockSize = !0;
                        var o = Math.ceil(t("#mainViewer").scrollTop() - t("#mainViewer").offset().top + t("#mainPageContainer_" + r).offset().top);
                        t("#mainViewer").scrollTop(o)
                    }})
            } else if (typeof this.collection.get(r) != "undefined") {
                var u = Math.ceil(t("#mainViewer").scrollTop() - t("#mainViewer").offset().top + t("#mainPageContainer_" + r).offset().top);
                t("#mainViewer").scrollTop(u)
            }
        },scrollDebounce: function(e) {
            this.findPos(!0), clearTimeout(t.data(this, "scrollTimer"));
            var n = this;
            t.data(this, "scrollTimer", DanaFuncSetTimeout(setTimeout, function() {
                t("#page-num-floater").fadeOut(400), n.pageFetchOnScroll()
            }, 250))
        },findPosORg: function(e) {
            var n = t("#mainViewer"), r = n[0].scrollHeight, i = n.height(), s = r - i, o = t("#mainViewer >div").height(), u = n.children().length, a = o, f = n.scrollTop(), l = 1 + f / a, c = Math.floor(l);
            c > this.collection.gbData.
            tpg && (c = this.collection.gbData.tpg), t("#current-page").val(c), t("#addPageNum").empty().html(c), t("#addPageNum").empty().html(c), t("#tool-current-page-loc").empty().html(c);
            var h = t("#page-num-floater");
            if (e) {
                var p = t(window).width(), d = t("#sideBarLayoutRegion").width(), v = t("#panelLayoutRegion").width(), m = n.width(), g = m / 2 || 0, y = d + v + g;
                h.css({left: y}).show()
            } else
                h.hide()
        },findPosNewOrg: function(e) {
            var n = t("#mainViewer"), r = n[0].scrollHeight, i = n.height(), s = r - i, o = t("#mainViewer div > div div").height(), u = n.children().length, a = o + this.collection.gbData.widthTest;
            a = a;
            var f = n.scrollTop(), l = 1 + f / a, c = l, h = Math.floor(l), p = l - Math.floor(l);
            h >= this.collection.gbData.tpg && (h = this.collection.gbData.tpg), t("#current-page").val(h), t("#addPageNum").empty().html(h), t("#addPageNum").empty().html(h), t("#tool-current-page-loc").empty().html(h);
            var d = t("#page-num-floater");
            if (e) {
                var v = t(window).width(), m = t("#sideBarLayoutRegion").width(), g = t("#panelLayoutRegion").width(), y = n.width(), b = y / 2 || 0, w = m + g + b;
                d.css({left: w}).show
                ()
            } else
                d.hide()
        },findPos: function(e) {
            var n = t("#mainViewer"), r = n[0].scrollHeight, i = n.height(), s = r - i, o = t("#mainViewer div > div div").height(), u = n.children().length, a = o + this.collection.gbData.widthTest;
            a = a;
            var f = n.scrollTop() + (this.skipBlockSize ? 0 : Math.ceil(a / 2));
            this.skipBlockSize = !1;
            var l = 1 + f / a, c = l, h = Math.floor(l), p = l - Math.floor(l);
            h > this.collection.gbData.tpg && (h = this.collection.gbData.tpg), t("#current-page").val(h);
            var d = this.collection.gbData.tmpLpg[h - 1] || h;
            t("#addPageNum").empty().html(d), t("#tool-current-page-loc").empty().html(d);
            var v = t("#page-num-floater");
            if (e) {
                var m = t(window).width(), g = t("#sideBarLayoutRegion").width(), y = t("#panelLayoutRegion").width(), b = n.width(), w = b / 2 || 0, E = g + y + w;
                v.css({left: E}).show()
            } else
                v.hide()
        },reSizeZlEffect: function(e) {
            this.collection.gbData.tmpFetchPageNum = e, this.collection.gbData.zm = this.collection.gbData.zm > .5 ? this.collection.gbData.zm : .5, this.collection.gbData.zm = this.collection.gbData.zm > 10 ? 10 : this.collection.gbData.zm, this.collection.gbData.divzm =
            this.collection.gbData.zm + .1, this.collection.gbData.orgWd = parseInt(this.collection.gbData.tmpzmMaxWidth * this.collection.gbData.divzm), this.collection.gbData.orgHgt = parseInt(this.collection.gbData.tmpzmMaxHeight * this.collection.gbData.divzm), this.collection.reset(), this.collection.prepareData()
        },reSizeWdEffect: function(e) {
            this.collection.gbData.tmpFetchPageNum = e;
            var n = t("#mainViewer").width(), r = this;
            this.children.each(function(t) {
                if (t.model.get("pageNum") === e) {
                    var i = t.model.get("page"), s = i.width / r.collection.gbData.zm, o = i.height / r.collection.gbData.zm;
                    r.collection.gbData.tmpzmMaxWidth = s, o > r.collection.gbData.tmpzmMaxHeight && (r.collection.gbData.tmpzmMaxHeight = o), r.collection.gbData.zm = r.collection.gbData.zm * (n - r.collection.gbData.widthTest * 2) / i.width || 1, r.collection.gbData.zm = r.collection.gbData.zm > .5 ? r.collection.gbData.zm : .5, r.collection.gbData.zm = r.collection.gbData.zm > 10 ? 10 : r.collection.gbData.zm, r.collection.gbData.divzm = r.collection.gbData.zm, r.collection.gbData.zm = r.collection.gbData
                    .zm - .1
                }
            }), this.collection.reset(), this.collection.prepareData()
        },reSizeHtEffect: function(e) {
            this.collection.gbData.tmpFetchPageNum = e;
            var n = t("#mainViewer").height(), r = this;
            this.children.each(function(t) {
                if (t.model.get("pageNum") === e) {
                    var i = t.model.get("page"), s = i.width / r.collection.gbData.zm, o = i.height / r.collection.gbData.zm;
                    s > r.collection.gbData.zmMaxWidth ? r.collection.gbData.tmpzmMaxWidth = s : r.collection.gbData.tmpzmMaxWidth = r.collection.gbData.zmMaxWidth, o > r.collection.gbData.zmMaxHeight && (r.collection.gbData.tmpzmMaxHeight = o), r.collection.gbData.zm = r.collection.gbData.zm * n / i.height || 1, r.collection.gbData.zm = r.collection.gbData.zm > .5 ? r.collection.gbData.zm : .5, r.collection.gbData.zm = r.collection.gbData.zm > 10 ? 10 : r.collection.gbData.zm, r.collection.gbData.divzm = r.collection.gbData.zm, r.collection.gbData.zm = r.collection.gbData.zm - .1
                }
            }), this.collection.reset(), this.collection.prepareData()
        },pageFetchOnScrollRef: function() {
            var e = 2, t = e, n = this, r = DanaMethodAdd("add", n.collection, {at: t,cid: t,_id: t,pageNum: t,ht
                : this.collection.orgHgt,wd: this.collection.orgWd});
            r.fetch({data: {cid: e,_id: e,pageNum: e},success: function(e, t, n) {
                }})
        },pageFetchOnScroll: function() {
            var e = parseInt(t("#current-page").val());
            t("[id^='snipHit_']").length > 0 && (t("[id^='snipHit_']").removeClass("search-level-2-selected"), t("#snipHit_" + e).addClass("search-level-2-selected"));
            if (typeof this.collection.get(e) == "undefined") {
                var n = this.collection.gbData.tmpFetchPageNum = e, r = this.collection.gbData.tmpOpt = 1, i = this, s = DanaMethodAdd("add", i.collection, {at: e,cid: e,_id: e,pageNum: e,ht: this.collection.orgHgt,wd: this.collection.orgWd,tmpOpt: r});
                s.fetch({data: {cid: n,_id: n,pageNum: n,tmpOpt: r},remove: !1,add: !0,merge: !0,success: function(e, t, n) {
                    }})
            } else if (e > 0 && typeof this.collection.get(e) != "undefined") {
                var o = this.collection.get(e), u = o.get("tmpOpt");
                typeof u != "undefined" && u === 0 && typeof o.get("status") != "undefined" && o.get("status") !== "FAILURE" && (o.set({tmpOpt: 1}, {silent: !0}), this.tmpLogicalPage(e))
            }
            var a = this.collection.gbData.tmpFetchPageNum = e - 1;
            if (a > 0 && typeof this
            .collection.get(a) == "undefined") {
                var r = this.collection.gbData.tmpOpt = 0, f = this, l = DanaMethodAdd("add", f.collection, {at: a,cid: a,_id: a,pageNum: a,ht: this.collection.orgHgt,wd: this.collection.orgWd,tmpOpt: r});
                l.fetch({data: {cid: a,_id: a,pageNum: a,tmpOpt: r},remove: !1,add: !0,merge: !0,success: function(e, t, n) {
                    }})
            } else
                a > 0 && typeof this.collection.get(a) != "undefined";
            var c = this.collection.gbData.tmpFetchPageNum = e + 1;
            if (c < this.collection.gbData.tpg && typeof this.collection.get(c) == "undefined") {
                var r = this.collection.gbData.tmpOpt = 0, h = this, p = DanaMethodAdd("add", h.collection, {at: c,cid: c,_id: c,pageNum: c,ht: this.collection.orgHgt,wd: this.collection.orgWd,tmpOpt: r});
                p.fetch({data: {cid: c,_id: c,pageNum: c,tmpOpt: r},remove: !1,add: !0,merge: !0,success: function(e, t, n) {
                    }})
            } else
                c > 0 && typeof this.collection.get(c) != "undefined"
        },pageFetchOnScrollOrg: function() {
            var e = parseInt(t("#current-page").val());
            if (this.collection.get(e) === null || typeof this.collection.get(e) == "undefined")
                return;
            if (typeof this.collection.get(e).get("page") == "undefined") {
                var n = this
                .collection.gbData.tmpFetchPageNum = e, r = this, i = r.collection.get({id: n});
                i.fetch({data: {cid: n,_id: n,pageNum: n},remove: !1,add: !1,merge: !0,success: function(e, t, n) {
                    }})
            }
            var s = this.collection.gbData.tmpFetchPageNum = e - 1;
            if (s > 0 && typeof this.collection.get(s).get("page") == "undefined") {
                var o = this, u = o.collection.get({id: s});
                u.fetch({data: {cid: s,_id: s,pageNum: s},remove: !1,add: !1,merge: !0,success: function(e, t, n) {
                    }})
            }
            var a = this.collection.gbData.tmpFetchPageNum = e + 1;
            if (a < this.collection.gbData.tpg && typeof this.collection.get(a).get("page") == "undefined") {
                var f = this, l = f.collection.get({id: a});
                l.fetch({data: {cid: a,_id: a,pageNum: a},remove: !1,add: !1,merge: !0,success: function(e, t, n) {
                    }})
            }
        },closeOpenNotes: function() {
            var e = t("[id^='myNotePopId_']");
            if (e.length > 0) {
                var n = DanaMethodAttr("attr", e, "id").split("_")[1];
                this.children.each(function(e) {
                    e.clearChildSelections(!0)
                })
            }
            t("[id^='myNotePopId_']").remove()
        },clearAllSelections: function() {
            this.children.each(function(e) {
                e.clearChildSelections(!0)
            })
        },clearSelections: function(e, t) {
            this
            .children.each(function(n) {
                n.model.get("pageNum") === e && n.clearChildSelections(t)
            })
        },resetSelections: function(e, t) {
            e && (n.isUndefined(this.collection.gbData) || (this.collection.gbData.selectedZone = {active: !1,tracking: !1,s_quad: -1,e_quad: -1,s_floats: !1,e_floats: !1,active_page: -1})), t && (n.isUndefined(this.collection.gbData) || (this.collection.gbData.finalSelections = {active: !1,s_quad: -1,e_quad: -1,active_page: -1}))
        },resetSearchQuads: function(e) {
            this.collection.gbData.tmpFetchPageNum = e, this.collection.reset(), this.collection.prepareData()
        },clearSearchQuads: function() {
            this.children.each(function(e) {
                var t = e.model.get("searches"), n = e.searchCtx;
                typeof t != "undefined" && t.length != 0 && (n.clearRect(0, 0, n.canvas.width, n.canvas.height), e.model.set("searches", {}))
            })
        },hideSearchQuads: function() {
            this.children.each(function(e) {
                var t = e.model.get("searches"), n = e.searchCtx;
                typeof t != "undefined" && t.length != 0 && n.clearRect(0, 0, n.canvas.width, n.canvas.height)
            })
        },showSearchQuads: function() {
            this.children.each(function(e
            ) {
                var n = e.model.get("searches");
                typeof n != "undefined" && n.length != 0 && t.each(n, function(t, n) {
                    n !== undefined && n !== null && e.searchCtx.fillRect(n.left, n.top, n.width, n.height)
                })
            })
        },createPageNotes: function(e) {
            var t = !n.isUndefined(this.collection.gbData) && this.collection.gbData.selectedZone.active;
            t && (this.clearSelections(this.collection.gbData.selectedZone.active_page, !0), this.resetSelections(!0, !0)), this.children.each(function(t) {
                if (t.model.get("pageNum") === e)
                    return t.createPageLevelNote(), !1
            })
        },toogleBookMark: function(e) {
            var t = !n.isUndefined(this.collection.gbData) && this.collection.gbData.selectedZone.active;
            this.closeOpenNotes(), t && (this.clearSelections(this.collection.gbData.selectedZone.active_page, !0), this.resetSelections(!0, !0)), this.children.each(function(t) {
                if (t.model.get("pageNum") === e)
                    return t.annotBookmark(), !1
            })
        },createHighlight: function() {
            var e = !n.isUndefined(this.collection.gbData) && this.collection.gbData.finalSelections.active;
            if (e) {
                var t = this.collection.gbData.finalSelections.active_page
                ;
                this.collection.gbData.whatClicked = "", this.children.each(function(e) {
                    if (e.model.get("pageNum") === t)
                        return e.contextHighYellow(), !1
                })
            } else
                this.clearAllSelections()
        },panelDeleteAnnot: function(e) {
            var t = e.annots.physicalPage, r = !1;
            this.children.each(function(i) {
                if (i.model.get("pageNum") === t && !n.isUndefined(i.model.get("annots")))
                    return i.panelChDeleteAnnot(e.annots), r = !0, !1
            });
            if (!r) {
                this.collection.deleteAnnot(t, e.annots.annotID);
                var i = {annotID: e.annots.annotID,chapterId: e.chapterId};
                l.trigger("pnlAnt", i, "del")
            }
        },panelShowAnnot: function(e) {
            var t = e.annots.physicalPage, r = !1;
            this.closeOpenNotes(), this.clearAllSelections(), this.resetSelections(!0, !0), this.children.each(function(i) {
                if (i.model.get("pageNum") === t && !n.isUndefined(i.model.get("annots")))
                    return i.panelChShowAnnot(e.annots), r = !0, !1
            })
        },tmpLogicalPage: function(e) {
            var n = this;
            t.ajax({url: "logPageAccess.api?rpgr=eb&docid=" + n.collection.gbData.docID + "&remote_id=" + n.collection.gbData.ssen + "&page=" + e + "&tm=1",success: function(e) {
                },error: function(
                e, n, r) {
                    var i = t("#dialog-error-msg").show();
                    i.find("#msg").empty().html(c.t("rr_please_try_again"))
                }})
        }})
}), define("models/ReaderTxM", ["backbone", "jquery"], function(e, t) {
    return e.Model.extend({url: function() {
            var e = t("#current-page").val() || this.cpTmp.gbData.ppg, n = "page=(" + e + ")&zoom=" + this.cpTmp.gbData.zm + "&encID=" + this.cpTmp.gbData.encID + "&aMode=1&op=view";
            return ("remoteDocServer.api?remote_id=" + this.cpTmp.gbData.ssen + "&encrypted=" + this.cpTmp.enc(n) + "&tm=1")
        },parse: function(e, t) {
            return typeof e.dcy != "undefined" ? JSON.parse(this.cpTmp.dec(e.dcy)) : e
        },initialize: function(e) {
            this.cpTmp = e
        }})
}), define("views/ReaderTextItemView", ["jquery", "marionette", "templates", "i18next", "vent", "utils/ebreaderUtil", "utils/commonUtil", "models/ReaderTxM"], function(e, t, n, r, i, s, o, u) {
    return t.ItemView.extend({id: "access-containerWrapper",initialize: function(e) {
            this.firstDt = !1;
            var t = o.readCookie("ESESSIONID");
            this.pebr = new s, this.pebr.init(t);
            var n = _.extend({}, e, this.pebr);
            this.model = new u(n), this.model.bind("sync", this
            .render, this), this.model.fetch(), i.on("jtp", this.jumpToPage, this), i.on("pAntDel", this.pnlDeleteAnnot, this)
        },getTemplate: function() {
            return this.model && typeof this.model.get("status") != "undefined" ? n.readerTextTemplate : this.model && this.model.isSyncing ? n.mainLoadingContentTemplate : n.mainLoadingContentTemplate
        },events: {"click #txtGoToPrePg": "prevPage","click #txtGoToNexPg": "nextPage","click  [id^='mainViewerBookMark_']": "bookMarkAnnot","click  [id^='mainViewerNote_']": "noteAnnot","click #modalNCancel": "noteCancel","click #modalNSave": "noteSaveAnnot"},onRender: function() {
            this.firstDt === !0 && e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#access-container").focus()
            }, 250))
        },goToNtPg: function(t) {
            e("#current-page").val()
        },prevPage: function(t) {
            t.preventDefault();
            var n = e("#current-page").val(), r = parseInt(n) - 1;
            r = r >= 1 ? r : 1;
            var s = this.model.get("gbData").tmpLpg[r - 1] || r;
            typeof s != "undefined" && (e("#tool-current-page-loc").empty().html(s), this.jumpToPage(r)), i.trigger("gaTk", "pageview", "/NR_PagePrev"
            , "Page flip to previous page in NewReader Accessibility")
        },nextPage: function(t) {
            t.preventDefault();
            var n = e("#current-page").val(), r = parseInt(n) + 1;
            r = r <= this.model.get("gbData").tpg ? r : this.model.get("gbData").tpg;
            var s = this.model.get("gbData").tmpLpg[r - 1] || r;
            typeof s != "undefined" && (e("#tool-current-page-loc").empty().html(s), this.jumpToPage(r)), i.trigger("gaTk", "pageview", "/NR_PageNext", "Page flip to next page in NewReader Accessibility")
        },jumpToPage: function(t) {
            this.firstDt = !0;
            var n = t || 1;
            this.model.get("gbData").tmpFetchPageNum = n, e("#current-page").val(n), this.model.fetch()
        },bookMarkAnnot: function(t) {
            t.preventDefault();
            var n = e(t.currentTarget), s = DanaMethodAttr("attr", n, "id").split("_")[1];
            if (s > 0) {
                this.deleteAnnot(e("#current-page").val(), s), n.parent().empty().html(r.t("rr_hasNoBookMarkText", {ABKMNID: "mainViewerBookMark_0"}));
                var o = _.find(this.model.get("annots"), function(e) {
                    return e.bookMark
                }), u = {annotID: s,chapterId: o.chapInfo.chapterId};
                this.postToPanel("del", u), e("#access-bookmark-message").hide()
            } else {
                var a = {op: "annotate",encID: this.model.get("gbData").encID,zoom: this.model.get("gbData").zm,type: "link",ppg: e("#current-page").val(),s: -1,e: -1}, f = this.saveAnnotation(a, "BookMark:");
                if (f.length > 0) {
                    var l = this;
                    _.each(f, function(t) {
                        l.model.get("annots").push(t), l.postToPanel("save", t), n.parent().empty().html(r.t("rr_hasBookMarkText", {ABKMID: "mainViewerBookMark_" + t.annotID})), e("#access-bookmark-message").show()
                    })
                }
            }
            i.trigger("gaTk", "event", "Reader_Feature", "R1_BOOKMARK", "Bookmark from Reader Accessibility"), e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#access-bookmark-message").focus()
            }, 250))
        },noteCancel: function(t) {
            var n = e("[id^='noteContent_']"), r = DanaMethodAttr("attr", n, "id").split("_")[1];
            if ("0" !== r) {
                if (!_.isUndefined(this.model.get("annots") !== "undefined") && this.model.get("annots").length > 0 && !_.isUndefined(_.find(this.model.get("annots"), function(e) {
                    return ("sticky" === e.annotType)
                }))) {
                    var i = _.find(this.model.get("annots"), function(e) {
                        return ("sticky" === e.annotType)
                    });
                    n.val(i.label)
                }
            } else
                n.val("");
            e
            .data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#access-note-status").focus()
            }, 250))
        },noteAnnot: function(t) {
            t.preventDefault(), e("#notesTxtModal").modal("show"), i.trigger("gaTk", "event", "Reader_Feature", "R1_NOTE_PAGE", "Add Page Note from Reader Accessibility")
        },noteSaveAnnot: function(t) {
            var n = e("[id^='noteContent_']"), i = DanaMethodAttr("attr", n, "id").split("_")[1], s = n.val().trim() || "";
            if (s.length > 0) {
                var o = {op: "annotate",encID: this.model.get("gbData").encID,zoom: this.model.get("gbData").zm,type: "create_note",ppg: this.model.get("pageNum"),x: "10",y: "10",width: "140",height: "100"};
                "0" !== i && (o.op = "edit", o.type = "noteyellow", o.id = i, o.changetype = "TEXT");
                var u = this.saveAnnotation(o, s);
                if (!_.isUndefined(u)) {
                    var a = this;
                    if ("0" === i)
                        _.each(u, function(t) {
                            _.isUndefined(a.model.get("annots")) || (a.model.get("annots").push(t), a.postToPanel("save", t), DanaMethodAttr("attr", n, "id", "noteContent_" + t.annotID), e("#access-note-status").empty().html(r.t("rr_hasNotesCreatedText", {ANTID: "mainViewerNote_" + t.annotID})))
                        });
                    else {
                        var f = this.model.get
                        ("annots");
                        _.each(f, function(e) {
                            e.annotID === parseInt(u.annotID) && (e.label = s, u.chapterId = e.chapInfo.chapterId)
                        }), a.postToPanel("edit", u)
                    }
                }
            }
            e("#notesTxtModal").modal("hide"), e.data(this, "testTimeoutFocus", DanaFuncSetTimeout(setTimeout, function() {
                e("#access-note-status").focus()
            }, 250))
        },pnlDeleteAnnot: function(t) {
            var n = t.annots.physicalPage || 0, s = parseInt(e("#current-page").val());
            this.deleteAnnot(n, t.annots.annotID);
            var o = {annotID: t.annots.annotID,chapterId: t.chapterId};
            i.trigger("pnlAnt", o, "del");
            var u = e("[id^='noteContent_']");
            s === n && (t.annots.annotType === "sticky" && parseInt(t.annots.annotID) === parseInt(DanaMethodAttr("attr", u, "id").split("_")[1]) ? (e("#access-note-status").empty().html(r.t("rr_hasNoNotesCreatedText", {ANTNID: "mainViewerNote_0"})), DanaMethodAttr("attr", u.val(""), "id", "noteContent_0")) : t.annots.annotType === "link" && (e("#access-bookmark-status").empty().html(r.t("rr_hasNoBookMarkText", {ABKMNID: "mainViewerBookMark_0"})), e("#access-bookmark-message").hide()))
        },deleteAnnot: function(t, n) {
            var s = "ppg=" + t + "&encID=" + this.model.get("gbData"
            ).encID + "&id=" + n + "&op=removeAnnot", o = "remoteBookshelf.api?encrypted=" + this.pebr.enc(s) + "&remote_id=" + this.model.get("gbData").ssen + "&tm=1", u = !0;
            return e.ajax({dataType: "json",url: o,async: !1,success: function(t) {
                    if (typeof t.status != "undefined" && typeof t.errorCode == "undefined")
                        t["status-code"] === 0 && (u = !0);
                    else {
                        u = !1;
                        if (typeof t.errorCode == "undefined" || t.errorCode !== "SESSION_TIMED_OUT" && t.errorCode !== "LOGIN_REQUIRED") {
                            var n = e("#dialogModalAlertError").modal("show");
                            n.find("#msg").empty().html(r.t("rr_error") + t["status-message"])
                        } else
                            i.trigger("tbsgn", "to_delete")
                    }
                },error: function(t, n, i) {
                    var s = e("#dialogModalAlertError").modal("show");
                    s.find("#msg").empty().html(r.t("rr_error_refresh_try_again")), n = !1
                }}), u
        },saveAnnotation: function(t, n) {
            var s = e.param(t), o = "encrypted=" + this.pebr.enc(s) + "&remote_id=" + this.model.get("gbData").ssen;
            _.isUndefined(n) || (o += "&note=" + encodeURIComponent(n)), o += "&tm=1";
            var u = {};
            return e.ajax({dataType: "json",url: "remoteBookshelf.api",async: !1,type: "POST",data: o,success:
                function(n) {
                    if (typeof n.status != "undefined" && typeof n.errorCode == "undefined")
                        n["status-code"] === 0 && (u = n.annots);
                    else if (typeof n.errorCode == "undefined" || n.errorCode !== "SESSION_TIMED_OUT" && n.errorCode !== "LOGIN_REQUIRED") {
                        var s = e("#dialogModalAlertError").modal("show");
                        s.find("#msg").empty().html(r.t("rr_error") + n["status-message"])
                    } else
                        i.trigger("tbsgn", t.type)
                },error: function(t, n, i) {
                    var s = e("#dialogModalAlertError").modal("show");
                    s.find("#msg").empty().html(r.t("rr_error_refresh_try_again"))
                }}), u
        },postToPanel: function(e, t) {
            if ("save" === e) {
                var n = t.chapInfo.chapterId, r = t.physicalPage - 1, s = {nAnnot: {hiliteId: _.isUndefined(t.hiliteId) ? 0 : t.hiliteId,tint: t.tint,pageLevelNote: t.pageLevelNote,annotType: t.annotType,annotID: t.annotID,logicalPage: this.model.get("gbData").tmpLpg[r],physicalPage: t.physicalPage,startQuad: t.startQuad,labelText: t.labelText,endQuad: t.endQuad,bookMark: t.bookMark},chap: {chapId: t.chapInfo}};
                i.trigger("pnlAnt", s, e)
            } else
                i.trigger("pnlAnt", t, e)
        }})
}), define("readerApp", ["marionette"
    , "jquery", "i18next", "vent", "utils/commonUtil", "layouts/ReaderLayout", "views/ReaderToolBarItemView", "views/ReaderSideBarItemView", "views/PanelReaderPanelCollectionView", "views/ReaderMainContentCollectionView", "views/ReaderTextItemView", "collections/DocServerCollection"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
    function d() {
        var t = e.Renderer.render;
        e.Renderer.render = function(e, r) {
            return r = _.extend(r, {_t: n.t}), t(e, r)
        }
    }
    function v(e, t, n, r) {
        e === "event" ? window.ga("send", "event", t, n, r) : window.ga("send", "pageview", t, n)
    }
    function m() {
        var e = this, n = window.addEventListener ? "addEventListener" : "attachEvent", r = window[n], s = n == "attachEvent" ? "onmessage" : "message";
        r(s, function(e) {
            var n = DanaGetProtocol(location) + "//" + DanaGetHostname(location) + (DanaGetPort(location) && ":" + DanaGetPort(location)) + DanaGetPathname(location);
            if (DanaGetOrigin(e).indexOf(DanaGetHostname(location)) != -1 || DanaGetOrigin(e).indexOf("ebrary") != -1)
                e.data && e.data !== "undefined" ? DanaPutHref(window.location, i.updateQueryStringWithHashSupport(DanaGetHref(location), "ppg", t("#current-page").val()), 0) : t("#signInModal").modal("hide")
        }, !1
        )
    }
    var h = new e.Application;
    h.addRegions({headerRegion: "#ebtop1",contentRegion: "#readerRegion"});
    var p = {};
    return h.addInitializer(function(e) {
        d(), r.on("gaTk", v, this);
        var n = new s;
        h.contentRegion.show(n);
        var c = parseInt(i.getParameterByName("ppg"));
        isNaN(c) && (c = 1), p.ppg = c;
        var g = i.getParameterByName("docID"), y = i.getParameterByName("q");
        p.searchTerm = y, p.docID = g;
        var b = i.readCookie("ESESSIONID"), w = t("#mainViewer").get(0), E = w.scrollWidth, S = t("<div><br/></div>").appendTo("body");
        p.widthTest = S.height(), S.remove(), p.showSearhHits = !0, p.whatClicked = "", p.selectedZone = {active: !1,tracking: !1,s_quad: -1,e_quad: -1,s_floats: !1,e_floats: !1,active_page: -1}, p.finalSelections = {active: !1,s_quad: -1,e_quad: -1,active_page: -1}, p.uAccsMdRR = t("#enableAccessiblity").val() === "no" ? 1 : 0, t.ajax({url: "docAccess.api?rpgr=eb&docid=" + g + "&remote_id=" + b,async: !1,success: function(e) {
                if (e.status === "SUCCESS")
                    p.hasAc = 1, p.encID = e.encryptedDocID, p.tmpFetchPageNum = c, p.ssen = b, p.tpg = e.tpg || 0, p.zmMaxWidth = e.pg && e.pg.width ? e.pg.width : 0, p.zmMaxHeight =
                    e.pg && e.pg.height ? e.pg.height : 0, p.tmpLpg = e.lpg, p.tmpzmMaxWidth = p.zmMaxWidth, p.tmpzmMaxHeight = p.zmMaxHeight, p.zm = e.pg && e.pg.width ? (E - p.widthTest * 2) / e.pg.width : 1, p.zm = p.zm > .5 ? p.zm : .5, p.zm = p.zm > 10 ? 10 : p.zm, p.divzm = p.zm, p.zm = p.divzm - .1, p.orgWd = parseInt(p.tmpzmMaxWidth * p.divzm), p.orgHgt = parseInt(p.tmpzmMaxHeight * p.divzm);
                else {
                    p.hasAc = 0;
                    var n = typeof e["status-message"] == "undefined" ? e.errorCode : e["status-message"];
                    n = n || "Login Required. Please <a href='login.action'>Sign-In</a>.";
                    var r = t("#dialog-error-msg").show();
                    r.find("#msg").empty().html(n)
                }
            },error: function(e, n, r) {
                p.hasAc = 0;
                var i = t("#dialog-error-msg").show();
                i.find("#msg").empty().html("<strong>Error!</strong> Please try again.")
            }});
        var x = new u(p);
        n.sideBarRegion.show(x);
        var T = {gbData: p}, N = new a(T);
        n.panelRegion.show(N);
        var C = {gbData: p};
        if (p.uAccsMdRR > 0) {
            var k = new l(T);
            n.mainRegion.show(k)
        } else {
            var L = new f(C);
            n.mainRegion.show(L)
        }
        var A = new o(p);
        n.toolBarRegion.show(A);
        var O = t(window).width(), M = t("#sideBar").outerWidth(), _ = 400, D = t(window).height
        ();
        t("#mainViewer").css({width: O - _ - M,height: D - 115}), p.uAccsMdRR > 0 && (t("#mainLayoutRegion").css({"background-color": "white"}), t("#access-containerWrapper").css({width: O - _ - M,height: D - 115,"background-color": "white"})), t("#readerContentInner").height(D - 115), t("#panel").css({height: D - 115}), t(window).resize(function() {
            var e = t(window).width(), n = t("#sideBar").outerWidth(), r = t("#panelLayoutRegion").outerWidth();
            r = r > 25 ? 400 : 1, t("#mainViewer").width(e - r - n);
            var i = t(window).height();
            t("#mainViewer").height(i - 115), p.uAccsMdRR > 0 && (t("#panelLayoutRegion").css({width: "400px"}), t("#panel").css({width: "400px"}), r = 400, t("#access-containerWrapper").css({width: e - r - n,height: i - 115,"background-color": "white"})), t("#readerContentInner").height(i - 115), t("#panel").css({height: i - 115})
        }), m(), t("#signGlobalTool").on("click", function(e) {
            t("#search-block").length > 0 ? r.trigger("tbgbsgn", "to_proceed") : t.data(this, "testTimeoutload", DanaFuncSetTimeout(setTimeout, function() {
                r.trigger("tbgbsgn", "to_proceed")
            }, 850)), e.preventDefault()
        }), t('.navbar-collapse ul li>:not(".ebStaySeen"), #tool-viewsmaller,#tool-viewlarger'
        ).click(function() {
            var e = t(this);
            (t("#toolbar-navbar-collapse").hasClass("in") || t("#nav-bar-links").hasClass("in")) && DanaFuncSetTimeout(setTimeout, function() {
                e.closest(".navbar-collapse").collapse("hide")
            }, 650)
        }), t(window).on("unload", function() {
            var e = new Date;
            t.ajax({url: "detail.action?action=releaseDoc&docID=" + g + "&asJson=1&dt=" + e.getTime(),async: !1})
        })
    }), h
}), define("routers/DesktopReaderRouter", ["jquery", "backbone"], function(e, t) {
    var n = t.Router.extend({initialize: function() {
            DanaMethodStart("start", t.history)
        },routes: {"": "reader"}});
    return n
}), define("controllers/DesktopReaderController", ["vent"], function(e) {
    return ({reader: function(e) {
        }})
});
if (typeof jQuery == "undefined")
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(e) {
    function t() {
        var e = DanaMethodCreateElement("createElement", document, "bootstrap"), t = {WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
        for (var n in t)
            if (e.style[n] !== undefined)
                return ({end: t[n]});
        return (!1)
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1, r = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return DanaFuncSetTimeout(setTimeout, i, t), this
    }, e(function() {
        e.support.transition = t();
        if (!e.support.transition)
            return;
        e.event.special.bsTransitionEnd = {bindType: e.support.transition.end,delegateType: e.support.transition.end,handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }}
    })
}(jQuery), +function(e) {
    function r(t) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }
    var t = '[data-dismiss="alert"]', n = function(n) {
        e(n).on("click", t, this.close)
    };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(t) {
        function o() {
            s.detach().trigger("closed.bs.alert")
            .remove()
        }
        var r = e(this), i = DanaMethodAttr("attr", r, "data-target");
        i || (i = DanaMethodAttr("attr", r, "href"), i = i && DanaMethodReplace("replace", i, /.*(?=#[^\s]*$)/, ""));
        var s = e(i);
        t && t.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(t = e.Event("close.bs.alert"));
        if (t.isDefaultPrevented())
            return;
        s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o()
    };
    var i = e.fn.alert;
    e.fn.alert = r, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery), +function(e) {
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.button"), s = typeof n == "object" && n;
            i || r.data("bs.button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.isLoading = !1
    };
    t.VERSION = "3.3.1", t.DEFAULTS = {loadingText: "loading..."}, t.prototype.setState = function(t) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val"
        : "html", s = r.data();
        t += "Text", s.resetText == null && r.data("resetText", r[i]()), DanaFuncSetTimeout(setTimeout, e.proxy(function() {
            r[i](s[t] == null ? this.options[t] : s[t]), t == "loadingText" ? (this.isLoading = !0, DanaMethodAttr("attr", r.addClass(n), n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            n.prop("type") == "radio" && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            DanaMethodAttr("attr", this.$element, "aria-pressed", !this.$element.hasClass("active"));
        e && this.$element.toggleClass("active")
    };
    var r = e.fn.button;
    e.fn.button = n, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = r, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = e(t.target);
        r.hasClass("btn") || (r = r.closest(".btn")), n.call(r, "toggle"
        ), t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), +function(e) {
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.carousel"), s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n), o = typeof n == "string" ? n : s.slide;
            i || r.data("bs.carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    t.VERSION = "3.3.1", t.TRANSITION_DURATION = 600
    , t.DEFAULTS = {interval: 5e3,pause: "hover",wrap: !0,keyboard: !0}, t.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName))
            return;
        switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        e.preventDefault()
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = DanaFuncSetInterval(setInterval, e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, t.prototype.getItemForDirection = function(e, t) {
        var n = e == "prev" ? -1 : 1, r = this.getItemIndex(t), i = (r + n) % this.$items.length;
        return this.$items.eq(i)
    }, t.prototype.to = function(e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (e > this.$items.length - 1 || e < 0)
            return;
        return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev"
        , this.$items.eq(e))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        if (this.sliding)
            return;
        return this.slide("next")
    }, t.prototype.prev = function() {
        if (this.sliding)
            return;
        return this.slide("prev")
    }, t.prototype.slide = function(n, r) {
        var i = this.$element.find(".item.active"), s = r || this.getItemForDirection(n, i), o = this.interval, u = n == "next" ? "left" : "right", a = n == "next" ? "first" : "last", f = this;
        if (!s.length) {
            if (!this.options.wrap)
                return;
            s = this.$element.find(".item")[a]()
        }
        if (s.hasClass("active"))
            return this.sliding = !1;
        var l = s[0], c = e.Event("slide.bs.carousel", {relatedTarget: l,direction: u});
        this.$element.trigger(c);
        if (c.isDefaultPrevented())
            return;
        this.sliding = !0, o && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var h = e(this.$indicators.children
            ()[this.getItemIndex(s)]);
            h && h.addClass("active")
        }
        var p = e.Event("slid.bs.carousel", {relatedTarget: l,direction: u});
        return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(n), s[0].offsetWidth, i.addClass(u), s.addClass(u), i.one("bsTransitionEnd", function() {
            s.removeClass([n, u].join(" ")).addClass("active"), i.removeClass(["active", u].join(" ")), f.sliding = !1, DanaFuncSetTimeout(setTimeout, function() {
                f.$element.trigger(p)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (i.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), o && this.cycle(), this
    };
    var r = e.fn.carousel;
    e.fn.carousel = n, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = r, this
    };
    var i = function(t) {
        var r, i = e(this), s = e(DanaMethodAttr("attr", i, "data-target") || (r = DanaMethodAttr("attr", i, "href")) && DanaMethodReplace("replace", r, /.*(?=#[^\s]+$)/, ""));
        if (!s.hasClass("carousel"))
            return;
        var o = e.extend({}, s.data(), i.data()), u = DanaMethodAttr("attr", i, "data-slide-to");
        u && (o.interval = !1), n.call(s, o), u && s.data("bs.carousel").to(u), t.preventDefault()
    };
    e(document
    ).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), +function(e) {
    function n(t) {
        var n, r = DanaMethodAttr("attr", t, "data-target") || (n = DanaMethodAttr("attr", t, "href")) && DanaMethodReplace("replace", n, /.*(?=#[^\s]+$)/, "");
        return e(r)
    }
    function r(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.collapse"), s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n);
            !i && s.toggle && n == "show" && (s.toggle = !1), i || r.data("bs.collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.$trigger = e(this.options.trigger).filter('[href="#' + n.id + '"], [data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    t.VERSION = "3.3.1", t.TRANSITION_DURATION = 350, t.DEFAULTS = {toggle: !0,trigger
        : '[data-toggle="collapse"]'}, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in"))
            return;
        var n, i = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
        if (i && i.length) {
            n = i.data("bs.collapse");
            if (n && n.transitioning)
                return
        }
        var s = e.Event("show.bs.collapse");
        this.$element.trigger(s);
        if (s.isDefaultPrevented())
            return;
        i && i.length && (r.call(i, "hide"), n || i.data("bs.collapse", null));
        var o = this.dimension();
        DanaMethodAttr("attr", this.$element.removeClass("collapse").addClass("collapsing")[o](0), "aria-expanded", !0), DanaMethodAttr("attr", this.$trigger.removeClass("collapsed"), "aria-expanded", !0), this.transitioning = 1;
        var u = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        };
        if (!e.support.transition)
            return u.call(this);
        var a = e.camelCase(["scroll", o].join("-"));
        this.$element.one("bsTransitionEnd", e.proxy
        (u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[o](this.$element[0][a])
    }, t.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in"))
            return;
        var n = e.Event("hide.bs.collapse");
        this.$element.trigger(n);
        if (n.isDefaultPrevented())
            return;
        var r = this.dimension();
        this.$element[r](this.$element[r]())[0].offsetHeight, DanaMethodAttr("attr", this.$element.addClass("collapsing").removeClass("collapse in"), "aria-expanded", !1), DanaMethodAttr("attr", this.$trigger.addClass("collapsed"), "aria-expanded", !1), this.transitioning = 1;
        var i = function() {
            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        if (!e.support.transition)
            return i.call(this);
        this.$element[r](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, t.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
        .each(e.proxy(function(t, r) {
            var i = e(r);
            this.addAriaAndCollapsedClass(n(i), i)
        }, this)).end()
    }, t.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        DanaMethodAttr("attr", e, "aria-expanded", n), DanaMethodAttr("attr", t.toggleClass("collapsed", !n), "aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = r, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var i = e(this);
        DanaMethodAttr("attr", i, "data-target") || t.preventDefault();
        var s = n(i), o = s.data("bs.collapse"), u = o ? "toggle" : e.extend({}, i.data(), {trigger: this});
        r.call(s, u)
    })
}(jQuery), +function(e) {
    function i(r) {
        if (r && r.which === 3)
            return;
        e(t).remove(), e(n).each(function() {
            var t = e(this), n = s(t), i = {relatedTarget: this};
            if (!n.hasClass("open"))
                return;
            n.trigger(r = e.Event("hide.bs.dropdown", i));
            if (r.isDefaultPrevented())
                return;
            DanaMethodAttr("attr", t, "aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", i)
        })
    }
    function s(t) {
        var n = DanaMethodAttr("attr", t, "data-target");
        n || (n = DanaMethodAttr("attr", t
        , "href"), n = n && /#[A-Za-z]/.test(n) && DanaMethodReplace("replace", n, /.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    function o(t) {
        return this.each(function() {
            var n = e(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), typeof t == "string" && i[t].call(n)
        })
    }
    var t = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', r = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.1", r.prototype.toggle = function(t) {
        var n = e(this);
        if (n.is(".disabled, :disabled"))
            return;
        var r = s(n), o = r.hasClass("open");
        i();
        if (!o) {
            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", i);
            var u = {relatedTarget: this};
            r.trigger(t = e.Event("show.bs.dropdown", u));
            if (t.isDefaultPrevented())
                return;
            DanaMethodAttr("attr", n.trigger("focus"), "aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", u)
        }
        return (!1)
    }, r.prototype.keydown = function(t) {
        if (!/(38|40|27|32)/.test(t.which) || /input|textarea/i.test(t.target.tagName))
            return;
        var r = e(this);
        t.preventDefault(), t.stopPropagation();
        if (r.is(".disabled, :disabled"))
            return;
        var i = s(r), o = i.hasClass("open");
        if (!o && t.which != 27 || o && t.which == 27)
            return t.which == 27 && i.find(n).trigger("focus"), r.trigger("click");
        var u = " li:not(.divider):visible a", a = i.find('[role="menu"]' + u + ', [role="listbox"]' + u);
        if (!a.length)
            return;
        var f = a.index(t.target);
        t.which == 38 && f > 0 && f--, t.which == 40 && f < a.length - 1 && f++, ~f || (f = 0), a.eq(f).trigger("focus")
    };
    var u = e.fn.dropdown;
    e.fn.dropdown = o, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = u, this
    }, e(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n, r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', r.prototype.keydown)
}(jQuery), +function(e) {
    function n(n, r) {
        return this
        .each(function() {
            var i = e(this), s = i.data("bs.modal"), o = e.extend({}, t.DEFAULTS, i.data(), typeof n == "object" && n);
            s || i.data("bs.modal", s = new t(this, o)), typeof n == "string" ? s[n](r) : o.show && s.show(r)
        })
    }
    var t = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && DanaMethodLoad("load", this.$element.find(".modal-content"), this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    t.VERSION = "3.3.1", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {backdrop: !0,keyboard: !0,show: !0}, t.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, t.prototype.show = function(n) {
        var r = this, i = e.Event("show.bs.modal", {relatedTarget: n});
        this.$element.trigger(i);
        if (this.isShown || i.isDefaultPrevented())
            return;
        this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal"
        , '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var i = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.options.backdrop && r.adjustBackdrop(), r.adjustDialog(), i && r.$element[0].offsetWidth, DanaMethodAttr("attr", r.$element.addClass("in"), "aria-hidden", !1), r.enforceFocus();
            var s = e.Event("shown.bs.modal", {relatedTarget: n});
            i ? r.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(s)
        })
    }, t.prototype.hide = function(n) {
        n && n.preventDefault(), n = e.Event("hide.bs.modal"), this.$element.trigger(n);
        if (!this.isShown || n.isDefaultPrevented())
            return;
        this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), DanaMethodAttr("attr", this.$element.removeClass("in"), "aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one
        ("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal()
    }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] !== e.target && !this.$element.has(e.target).length && this.$element.trigger("focus")
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            e.which == 27 && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, t.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t
    .prototype.backdrop = function(n) {
        var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = e.support.transition && i;
            this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", e.proxy(function(e) {
                if (e.target !== e.currentTarget)
                    return;
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
            if (!n)
                return;
            s ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : n()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                r.removeBackdrop(), n && n()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : o()
        } else
            n && n()
    }, t.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, t.prototype.adjustBackdrop =
    function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, t.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""})
    }, t.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "",paddingRight: ""})
    }, t.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, t.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, t.prototype.measureScrollbar = function() {
        var e = DanaMethodCreateElement("createElement", document, "div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth -
        e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var r = e.fn.modal;
    e.fn.modal = n, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = r, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = e(this), i = DanaMethodAttr("attr", r, "href"), s = e(DanaMethodAttr("attr", r, "data-target") || i && DanaMethodReplace("replace", i, /.*(?=#[^\s]+$)/, "")), o = s.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(i) && i}, s.data(), r.data());
        r.is("a") && t.preventDefault(), s.one("show.bs.modal", function(e) {
            if (e.isDefaultPrevented())
                return;
            s.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), n.call(s, o, this)
    })
}(jQuery), +function(e) {
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.tooltip"), s = typeof n == "object" && n, o = s && s.selector;
            if (!i && n == "destroy")
                return;
            o ? (i || r.data("bs.tooltip", i = {}), i[o] || (i[o] = new t(this, s))) : i || r.data("bs.tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element =
        null, this.init("tooltip", e, t)
    };
    t.VERSION = "3.3.1", t.TRANSITION_DURATION = 150, t.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1,viewport: {selector: "body",padding: 0}}, t.prototype.init = function(t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        var i = this.options.trigger.split(" ");
        for (var s = i.length; s--; ) {
            var o = i[s];
            if (o == "click")
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if (o != "manual") {
                var u = o == "hover" ? "mouseenter" : "focusin", a = o == "hover" ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ?
        this._options = e.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {show: t.delay,hide: t.delay}), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n && n.$tip && n.$tip.is(":visible")) {
            n.hoverState = "in";
            return
        }
        n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in";
        if (!n.options.delay || !n.options.delay.show)
            return n.show();
        n.timeout = DanaFuncSetTimeout(setTimeout, function() {
            n.hoverState == "in" && n.show()
        }, n.options.delay.show)
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ?
        t : e(t.currentTarget).data("bs." + this.type);
        n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out";
        if (!n.options.delay || !n.options.delay.hide)
            return n.hide();
        n.timeout = DanaFuncSetTimeout(setTimeout, function() {
            n.hoverState == "out" && n.hide()
        }, n.options.delay.hide)
    }, t.prototype.show = function() {
        var n = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() || !r)
                return;
            var i = this, s = this.tip(), o = this.getUID(this.type);
            this.setContent(), DanaMethodAttr("attr", s, "id", o), DanaMethodAttr("attr", this.$element, "aria-describedby", o), this.options.animation && s.addClass("fade");
            var u = typeof this.options.placement == "function" ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, a = /\s?auto?\s?/i, f = a.test(u);
            f && (u = DanaMethodReplace("replace", u, a, "") || "top"), s.detach().css({top: 0,left: 0,display: "block"}).addClass(u).data
            ("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var l = this.getPosition(), c = s[0].offsetWidth, h = s[0].offsetHeight;
            if (f) {
                var p = u, d = this.options.container ? e(this.options.container) : this.$element.parent(), v = this.getPosition(d);
                u = u == "bottom" && l.bottom + h > v.bottom ? "top" : u == "top" && l.top - h < v.top ? "bottom" : u == "right" && l.right + c > v.width ? "left" : u == "left" && l.left - c < v.left ? "right" : u, s.removeClass(p).addClass(u)
            }
            var m = this.getCalculatedOffset(u, l, c, h);
            this.applyPlacement(m, u);
            var g = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, e == "out" && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var r = this.tip(), i = r[0].offsetWidth, s = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(u) && (u = 0), t.top = t.top + o, t.left = t.left + u, e.offset
        .setOffset(r[0], e.extend({using: function(e) {
                r.css({top: Math.round(e.top),left: Math.round(e.left)})
            }}, t), 0), r.addClass("in");
        var a = r[0].offsetWidth, f = r[0].offsetHeight;
        n == "top" && f != s && (t.top = t.top + s - f);
        var l = this.getViewportAdjustedDelta(n, t, a, f);
        l.left ? t.left += l.left : t.top += l.top;
        var c = /top|bottom/.test(n), h = c ? l.left * 2 - i + a : l.top * 2 - s + f, p = c ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(h, r[0][p], c)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, t.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function(n) {
        function o() {
            r.hoverState != "in" && i.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), n && n()
        }
        var r = this, i = this.tip(), s = e.Event("hide.bs." + this.type);
        this.$element.trigger(s);
        if (s.isDefaultPrevented())
            return;
        return i.removeClass("in"), e.support
        .transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (DanaMethodAttr("attr", e, "title") || typeof DanaMethodAttr("attr", e, "data-original-title") != "string") && DanaMethodAttr("attr", DanaMethodAttr("attr", e, "data-original-title", DanaMethodAttr("attr", e, "title") || ""), "title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0], r = n.tagName == "BODY", i = n.getBoundingClientRect();
        i.width == null && (i = e.extend({}, i, {width: i.right - i.left,height: i.bottom - i.top}));
        var s = r ? {top: 0,left: 0} : t.offset(), o = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()}, u = r ? {width: e(window).width(),height: e(window).height()} : null;
        return e.extend({}, i, o, u, s)
    }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
        return e == "bottom" ? {top: t.top + t.height,left: t.left + t.width / 2 - n / 2} : e == "top" ? {top: t.top - r,left: t.left + t.width / 2 - n / 2} : e == "left" ? {top: t.top + t.height / 2 - r / 2,left: t.left -
            n} : {top: t.top + t.height / 2 - r / 2,left: t.left + t.width}
    }, t.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {top: 0,left: 0};
        if (!this.$viewport)
            return i;
        var s = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll, a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s, l = t.left + s + n;
            f < o.left ? i.left = o.left - f : l > o.width && (i.left = o.left + o.width - l)
        }
        return i
    }, t.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = DanaMethodAttr("attr", t, "data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
    }, t.prototype.getUID = function(e) {
        do
            e += ~~(Math.random() * 1e6);
        while (document.getElementById(e));
        return e
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable =
    function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = n, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r, this
    }
}(jQuery), +function(e) {
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.popover"), s = typeof n == "object" && n, o = s && s.selector;
            if (!i && n == "destroy")
                return;
            o ? (i || r.data("bs.popover", i = {}), i[o] || (i[o] = new t(this, s))) : i || r.data("bs.popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js"
        );
    t.VERSION = "3.3.1", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {placement: "right",trigger: "click",content: "",template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? typeof n == "string" ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element, t = this.options;
        return DanaMethodAttr("attr", e, "data-content") || (typeof t.content == "function" ? t.content
        .call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var r = e.fn.popover;
    e.fn.popover = n, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = r, this
    }
}(jQuery), +function(e) {
    function t(n, r) {
        var i = e.proxy(this.process, this);
        this.$body = e("body"), this.$scrollElement = e(n).is("body") ? e(window) : e(n), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), DanaMethodRefresh("refresh", this), this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.scrollspy"), s = typeof n == "object" && n;
            i || r.data("bs.scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }
    t.VERSION = "3.3.1", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function() {
        return this.$scrollElement
        [0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = "offset", n = 0;
        e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var r = this;
        this.$body.find(this.selector).map(function() {
            var r = e(this), i = r.data("target") || DanaMethodAttr("attr", r, "href"), s = /^#./.test(i) && e(i);
            return s && s.length && s.is(":visible") && [[s[t]().top + n, i]] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            r.offsets.push(this[0]), r.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.getScrollHeight(), n = this.options.offset + t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget, o;
        this.scrollHeight != t && DanaMethodRefresh("refresh", this);
        if (e >= n)
            return s != (o = i[i.length - 1]) && this.activate(o);
        if (s && e < r[0])
            return this.activeTarget = null, this.clear();
        for (o = r.length; o--; )
            s != i[o] && e >= r[o
            ] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = r, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), +function(e) {
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }
    var t = function(t) {
        this.element = e(t)
    };
    t.VERSION = "3.3.1", t.TRANSITION_DURATION = 150, t.prototype.show = function() {
        var t = this
        .element, n = t.closest("ul:not(.dropdown-menu)"), r = t.data("target");
        r || (r = DanaMethodAttr("attr", t, "href"), r = r && DanaMethodReplace("replace", r, /.*(?=#[^\s]*$)/, ""));
        if (t.parent("li").hasClass("active"))
            return;
        var i = n.find(".active:last a"), s = e.Event("hide.bs.tab", {relatedTarget: t[0]}), o = e.Event("show.bs.tab", {relatedTarget: i[0]});
        i.trigger(s), t.trigger(o);
        if (o.isDefaultPrevented() || s.isDefaultPrevented())
            return;
        var u = e(r);
        this.activate(t.closest("li"), n), this.activate(u, u.parent(), function() {
            i.trigger({type: "hidden.bs.tab",relatedTarget: t[0]}), t.trigger({type: "shown.bs.tab",relatedTarget: i[0]})
        })
    }, t.prototype.activate = function(n, r, i) {
        function u() {
            DanaMethodAttr("attr", s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]'), "aria-expanded", !1), DanaMethodAttr("attr", n.addClass("active").find('[data-toggle="tab"]'), "aria-expanded", !0), o ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu") && DanaMethodAttr("attr", n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]'), "aria-expanded"
            , !0), i && i()
        }
        var s = r.find("> .active"), o = i && e.support.transition && (s.length && s.hasClass("fade") || !!r.find("> .fade").length);
        s.length && o ? s.one("bsTransitionEnd", u).emulateTransitionEnd(t.TRANSITION_DURATION) : u(), s.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = n, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = r, this
    };
    var i = function(t) {
        t.preventDefault(), n.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), +function(e) {
    function n(n) {
        return this.each(function() {
            var r = e(this), i = r.data("bs.affix"), s = typeof n == "object" && n;
            i || r.data("bs.affix", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }
    var t = function(n, r) {
        this.options = e.extend({}, t.DEFAULTS, r), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = this.pinnedOffset = null
        , this.checkPosition()
    };
    t.VERSION = "3.3.1", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {offset: 0,target: window}, t.prototype.getState = function(e, t, n, r) {
        var i = this.$target.scrollTop(), s = this.$element.offset(), o = this.$target.height();
        if (n != null && this.affixed == "top")
            return i < n ? "top" : !1;
        if (this.affixed == "bottom")
            return n != null ? i + this.unpin <= s.top ? !1 : "bottom" : i + o <= e - r ? !1 : "bottom";
        var u = this.affixed == null, a = u ? i : s.top, f = u ? o : t;
        return n != null && a <= n ? "top" : r != null && a + f >= e - r ? "bottom" : !1
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$target.scrollTop(), n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }, t.prototype.checkPositionWithEventLoop = function() {
        DanaFuncSetTimeout(setTimeout, e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        if (!this.$element.is(":visible"))
            return;
        var n = this.$element.height(), r = this.options.offset, i = r.top, s = r.bottom, o = e("body").height();
        typeof r != "object" && (s =
        i = r), typeof i == "function" && (i = r.top(this.$element)), typeof s == "function" && (s = r.bottom(this.$element));
        var u = this.getState(o, n, i, s);
        if (this.affixed != u) {
            this.unpin != null && this.$element.css("top", "");
            var a = "affix" + (u ? "-" + u : ""), f = e.Event(a + ".bs.affix");
            this.$element.trigger(f);
            if (f.isDefaultPrevented())
                return;
            this.affixed = u, this.unpin = u == "bottom" ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(a).trigger(DanaMethodReplace("replace", a, "affix", "affixed") + ".bs.affix")
        }
        u == "bottom" && this.$element.offset({top: o - n - s})
    };
    var r = e.fn.affix;
    e.fn.affix = n, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
        return e.fn.affix = r, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this), r = t.data();
            r.offset = r.offset || {}, r.offsetBottom != null && (r.offset.bottom = r.offsetBottom), r.offsetTop != null && (r.offset.top = r.offsetTop), n.call(t, r)
        })
    })
}(jQuery), define("bootstrap", ["jquery"], function() {
}), define("utils/gaUtil", ["jquery", "require"], function(e, t) {
    var n;
    window.GoogleAnalyticsObject = "ga"
    , window.ga = function() {
        (window.ga.q = window.ga.q || []).push(arguments)
    }, window.ga.l = 1 * new Date;
    var r = DanaGetProtocol(window.location) + "//" + DanaGetHostname(window.location) + DanaGetPathname(window.location) + DanaGetSearch(window.location);
    if (typeof e("#ga_key").val() != "undefined") {
        window.ga("create", e("#ga_key").val().trim(), {cookieExpires: 0});
        var i = DanaGetHostname(document.location), s = DanaGetReferrer(document);
        window.ga("set", "dimension1", i), window.ga("set", "dimension2", s), window.ga("send", "pageview"), n = function() {
            window.ga.apply(this, arguments)
        }, t(["//www.google-analytics.com/analytics.js"])
    }
    return n
}), require.config({waitSeconds: 0,baseUrl: "/clientresources/js/app",urlArgs: "bust=mayankJa",paths: {jquery: "../vendor/jquery",underscore: "../vendor/underscore",backbone: "../vendor/backbone",marionette: "../vendor/backbone.marionette",text: "../vendor/plugins/text",bootstrap: "../vendor/plugins/bootstrap","backbone.validateAll": "../vendor/plugins/Backbone.validateAll",i18next: "../vendor/i18next.amd.min"},shim: {"../js/vendor/backbone.localStorage": ["backbone"
        ],jquery: {exports: "$"},bootstrap: {deps: ["jquery"]},underscore: {exports: "_"},backbone: {exports: "Backbone",deps: ["jquery", "underscore"]},marionette: {exports: "Backbone.Marionette",deps: ["backbone"]}}}), require(["readerApp", "backbone", "routers/DesktopReaderRouter", "controllers/DesktopReaderController", "bootstrap", "i18next", "utils/gaUtil"], function(e, t, n, r, i, s, o) {
    s.init({ns: {namespaces: ["reader"],defaultNs: "reader"},useLocalStorage: !0,resGetPath: "/locales/__ns_____lng__.mjson",lng: DanaMethodAttr("attr", $("html"), "lang"),detectLngFromHeaders: !1,fallbackLng: "en"}, function(t) {
        DanaMethodStart("start", e), e.desktopReaderRouter = new n({controller: r})
    })
}), define("config/reader", function() {
});
