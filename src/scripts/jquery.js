/*
* jQuery JavaScript Library v1.4.2
* http://jquery.com/
*
* Copyright 2010, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2010, The Dojo Foundation
* Released under the MIT, BSD, and GPL Licenses.
*
* Date: Sat Feb 13 22:33:48 2010 -0500
*/

(function (aH, H) {
    var e = function (aY, aZ) {
        return new e.fn.init(aY, aZ)
    },
        k = aH.jQuery,
        at = aH.$,
        x = aH.document,
        S, O = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
        aN = /^.[^:#\[\.,]*$/,
        aL = /\S/,
        n = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
        aB = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        ax = navigator.userAgent,
        af, aq = false,
        au = [],
        aI, b = Object.prototype.toString,
        ao = Object.prototype.hasOwnProperty,
        ar = Array.prototype.push,
        al = Array.prototype.slice,
        J = Array.prototype.indexOf;
    e.fn = e.prototype = {
        init: function (aY, a0) {
            var a1, aZ, a2, a3;
            if (!aY) {
                return this
            }
            if (aY.nodeType) {
                this.context = this[0] = aY;
                this.length = 1;
                return this
            }
            if (aY === "body" && !a0) {
                this.context = x;
                this[0] = x.body;
                this.selector = "body";
                this.length = 1;
                return this
            }
            if (typeof aY === "string") {
                a1 = O.exec(aY);
                if (a1 && (a1[1] || !a0)) {
                    if (a1[1]) {
                        a3 = (a0 ? a0.ownerDocument || a0 : x);
                        a2 = aB.exec(aY);
                        if (a2) {
                            if (e.isPlainObject(a0)) {
                                aY = [x.createElement(a2[1])];
                                e.fn.attr.call(aY, a0, true)
                            } else {
                                aY = [a3.createElement(a2[1])]
                            }
                        } else {
                            a2 = P([a1[1]], [a3]);
                            aY = (a2.cacheable ? a2.fragment.cloneNode(true) : a2.fragment).childNodes
                        }
                        return e.merge(this, aY)
                    } else {
                        aZ = x.getElementById(a1[2]);
                        if (aZ) {
                            if (aZ.id !== a1[2]) {
                                return S.find(aY)
                            }
                            this.length = 1;
                            this[0] = aZ
                        }
                        this.context = x;
                        this.selector = aY;
                        return this
                    }
                } else {
                    if (!a0 && /^\w+$/.test(aY)) {
                        this.selector = aY;
                        this.context = x;
                        aY = x.getElementsByTagName(aY);
                        return e.merge(this, aY)
                    } else {
                        if (!a0 || a0.jquery) {
                            return (a0 || S).find(aY)
                        } else {
                            return e(a0).find(aY)
                        }
                    }
                }
            } else {
                if (e.isFunction(aY)) {
                    return S.ready(aY)
                }
            }
            if (aY.selector !== H) {
                this.selector = aY.selector;
                this.context = aY.context
            }
            return e.makeArray(aY, this)
        },
        selector: "",
        jquery: "1.4.2",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return al.call(this, 0)
        },
        get: function (aY) {
            return aY == null ? this.toArray() : (aY < 0 ? this.slice(aY)[0] : this[aY])
        },
        pushStack: function (a0, a1, aZ) {
            var aY = e();
            if (e.isArray(a0)) {
                ar.apply(aY, a0)
            } else {
                e.merge(aY, a0)
            }
            aY.prevObject = this;
            aY.context = this.context;
            if (a1 === "find") {
                aY.selector = this.selector + (this.selector ? " " : "") + aZ
            } else {
                if (a1) {
                    aY.selector = this.selector + "." + a1 + "(" + aZ + ")"
                }
            }
            return aY
        },
        each: function (aY, aZ) {
            return e.each(this, aY, aZ)
        },
        ready: function (aY) {
            e.bindReady();
            if (e.isReady) {
                aY.call(x, e)
            } else {
                if (au) {
                    au.push(aY)
                }
            }
            return this
        },
        eq: function (aY) {
            return aY === -1 ? this.slice(aY) : this.slice(aY, +aY + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(al.apply(this, arguments), "slice", al.call(arguments).join(","))
        },
        map: function (aY) {
            return this.pushStack(e.map(this, function (aZ, a0) {
                return aY.call(aZ, a0, aZ)
            }))
        },
        end: function () {
            return this.prevObject || e(null)
        },
        push: ar,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function () {
        var a3 = arguments[0] || {},
            aZ = 1,
            a4 = arguments.length,
            aY = false,
            a0, a2, a5, a6;
        if (typeof a3 === "boolean") {
            aY = a3;
            a3 = arguments[1] || {};
            aZ = 2
        }
        if (typeof a3 !== "object" && !e.isFunction(a3)) {
            a3 = {}
        }
        if (a4 === aZ) {
            a3 = this;
            --aZ
        }
        for (; aZ < a4; aZ++) {
            if ((a0 = arguments[aZ]) != null) {
                for (a2 in a0) {
                    a5 = a3[a2];
                    a6 = a0[a2];
                    if (a3 === a6) {
                        continue
                    }
                    if (aY && a6 && (e.isPlainObject(a6) || e.isArray(a6))) {
                        var a1 = a5 && (e.isPlainObject(a5) || e.isArray(a5)) ? a5 : e.isArray(a6) ? [] : {};
                        a3[a2] = e.extend(aY, a1, a6)
                    } else {
                        if (a6 !== H) {
                            a3[a2] = a6
                        }
                    }
                }
            }
        }
        return a3
    };
    e.extend({
        noConflict: function (aY) {
            aH.$ = at;
            if (aY) {
                aH.jQuery = k
            }
            return e
        },
        isReady: false,
        ready: function () {
            if (!e.isReady) {
                if (!x.body) {
                    return setTimeout(e.ready, 13)
                }
                e.isReady = true;
                if (au) {
                    var aY, aZ = 0;
                    while ((aY = au[aZ++])) {
                        aY.call(x, e)
                    }
                    au = null
                }
                if (e.fn.triggerHandler) {
                    e(x).triggerHandler("ready")
                }
            }
        },
        bindReady: function () {
            if (aq) {
                return
            }
            aq = true;
            if (x.readyState === "complete") {
                return e.ready()
            }
            if (x.addEventListener) {
                x.addEventListener("DOMContentLoaded", aI, false);
                aH.addEventListener("load", e.ready, false)
            } else {
                if (x.attachEvent) {
                    x.attachEvent("onreadystatechange", aI);
                    aH.attachEvent("onload", e.ready);
                    var aZ = false;
                    try {
                        aZ = aH.frameElement == null
                    } catch (aY) { }
                    if (x.documentElement.doScroll && aZ) {
                        j()
                    }
                }
            }
        },
        isFunction: function (aY) {
            return b.call(aY) === "[object Function]"
        },
        isArray: function (aY) {
            return b.call(aY) === "[object Array]"
        },
        isPlainObject: function (aZ) {
            if (!aZ || b.call(aZ) !== "[object Object]" || aZ.nodeType || aZ.setInterval) {
                return false
            }
            if (aZ.constructor && !ao.call(aZ, "constructor") && !ao.call(aZ.constructor.prototype, "isPrototypeOf")) {
                return false
            }
            var aY;
            for (aY in aZ) { }
            return aY === H || ao.call(aZ, aY)
        },
        isEmptyObject: function (aZ) {
            for (var aY in aZ) {
                return false
            }
            return true
        },
        error: function (aY) {
            throw aY
        },
        parseJSON: function (aY) {
            if (typeof aY !== "string" || !aY) {
                return null
            }
            aY = e.trim(aY);
            if (/^[\],:{}\s]*$/.test(aY.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return aH.JSON && aH.JSON.parse ? aH.JSON.parse(aY) : (new Function("return " + aY))()
            } else {
                e.error("Invalid JSON: " + aY)
            }
        },
        noop: function () { },
        globalEval: function (aZ) {
            if (aZ && aL.test(aZ)) {
                var aY = x.getElementsByTagName("head")[0] || x.documentElement,
                    a0 = x.createElement("script");
                a0.type = "text/javascript";
                if (e.support.scriptEval) {
                    a0.appendChild(x.createTextNode(aZ))
                } else {
                    a0.text = aZ
                }
                aY.insertBefore(a0, aY.firstChild);
                aY.removeChild(a0)
            }
        },
        nodeName: function (aY, aZ) {
            return aY.nodeName && aY.nodeName.toUpperCase() === aZ.toUpperCase()
        },
        each: function (a2, a0, a5) {
            var a4, aZ = 0,
                a3 = a2.length,
                a1 = a3 === H || e.isFunction(a2);
            if (a5) {
                if (a1) {
                    for (a4 in a2) {
                        if (a0.apply(a2[a4], a5) === false) {
                            break
                        }
                    }
                } else {
                    for (; aZ < a3; ) {
                        if (a0.apply(a2[aZ++], a5) === false) {
                            break
                        }
                    }
                }
            } else {
                if (a1) {
                    for (a4 in a2) {
                        if (a0.call(a2[a4], a4, a2[a4]) === false) {
                            break
                        }
                    }
                } else {
                    for (var aY = a2[0]; aZ < a3 && a0.call(aY, aZ, aY) !== false; aY = a2[++aZ]) { }
                }
            }
            return a2
        },
        trim: function (aY) {
            return (aY || "").replace(n, "")
        },
        makeArray: function (aY, aZ) {
            var a0 = aZ || [];
            if (aY != null) {
                if (aY.length == null || typeof aY === "string" || e.isFunction(aY) || (typeof aY !== "function" && aY.setInterval)) {
                    ar.call(a0, aY)
                } else {
                    e.merge(a0, aY)
                }
            }
            return a0
        },
        inArray: function (a1, aY) {
            if (aY.indexOf) {
                return aY.indexOf(a1)
            }
            for (var aZ = 0, a0 = aY.length; aZ < a0; aZ++) {
                if (aY[aZ] === a1) {
                    return aZ
                }
            }
            return -1
        },
        merge: function (a1, aZ) {
            var a2 = a1.length,
                a0 = 0;
            if (typeof aZ.length === "number") {
                for (var aY = aZ.length; a0 < aY; a0++) {
                    a1[a2++] = aZ[a0]
                }
            } else {
                while (aZ[a0] !== H) {
                    a1[a2++] = aZ[a0++]
                }
            }
            a1.length = a2;
            return a1
        },
        grep: function (a2, aZ, a3) {
            var a1 = [];
            for (var aY = 0, a0 = a2.length; aY < a0; aY++) {
                if (!a3 !== !aZ(a2[aY], aY)) {
                    a1.push(a2[aY])
                }
            }
            return a1
        },
        map: function (a4, a0, a1) {
            var a3 = [],
                aY;
            for (var aZ = 0, a2 = a4.length; aZ < a2; aZ++) {
                aY = a0(a4[aZ], aZ, a1);
                if (aY != null) {
                    a3[a3.length] = aY
                }
            }
            return a3.concat.apply([], a3)
        },
        guid: 1,
        proxy: function (aZ, aY, a0) {
            if (arguments.length === 2) {
                if (typeof aY === "string") {
                    a0 = aZ;
                    aZ = a0[aY];
                    aY = H
                } else {
                    if (aY && !e.isFunction(aY)) {
                        a0 = aY;
                        aY = H
                    }
                }
            }
            if (!aY && aZ) {
                aY = function () {
                    return aZ.apply(a0 || this, arguments)
                }
            }
            if (aZ) {
                aY.guid = aZ.guid = aZ.guid || aY.guid || e.guid++
            }
            return aY
        },
        uaMatch: function (aZ) {
            aZ = aZ.toLowerCase();
            var aY = /(webkit)[ \/]([\w.]+)/.exec(aZ) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(aZ) || /(msie) ([\w.]+)/.exec(aZ) || !/compatible/.test(aZ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(aZ) || [];
            return {
                browser: aY[1] || "",
                version: aY[2] || "0"
            }
        },
        browser: {}
    });
    af = e.uaMatch(ax);
    if (af.browser) {
        e.browser[af.browser] = true;
        e.browser.version = af.version
    }
    if (e.browser.webkit) {
        e.browser.safari = true
    }
    if (J) {
        e.inArray = function (aY, aZ) {
            return J.call(aZ, aY)
        }
    }
    S = e(x);
    if (x.addEventListener) {
        aI = function () {
            x.removeEventListener("DOMContentLoaded", aI, false);
            e.ready()
        }
    } else {
        if (x.attachEvent) {
            aI = function () {
                if (x.readyState === "complete") {
                    x.detachEvent("onreadystatechange", aI);
                    e.ready()
                }
            }
        }
    }
    function j() {
        if (e.isReady) {
            return
        }
        try {
            x.documentElement.doScroll("left")
        } catch (aY) {
            setTimeout(j, 1);
            return
        }
        e.ready()
    }
    function D(aZ, aY) {
        if (aY.src) {
            e.ajax({
                url: aY.src,
                async: false,
                dataType: "script"
            })
        } else {
            e.globalEval(aY.text || aY.textContent || aY.innerHTML || "")
        }
        if (aY.parentNode) {
            aY.parentNode.removeChild(aY)
        }
    }
    function ah(a0, a4, aY, a3, a5, a6) {
        var a2 = a0.length;
        if (typeof a4 === "object") {
            for (var a1 in a4) {
                ah(a0, a1, a4[a1], a3, a5, aY)
            }
            return a0
        }
        if (aY !== H) {
            a3 = !a6 && a3 && e.isFunction(aY);
            for (var aZ = 0; aZ < a2; aZ++) {
                a5(a0[aZ], a4, a3 ? aY.call(a0[aZ], aZ, a5(a0[aZ], a4)) : aY, a6)
            }
            return a0
        }
        return a2 ? a5(a0[0], a4) : H
    }
    function A() {
        return (new Date).getTime()
    } (function () {
        e.support = {};
        var a4 = x.documentElement,
            aY = x.createElement("script"),
            a0 = x.createElement("div"),
            a3 = "script" + A();
        a0.style.display = "none";
        a0.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var a6 = a0.getElementsByTagName("*"),
            a5 = a0.getElementsByTagName("a")[0];
        if (!a6 || !a6.length || !a5) {
            return
        }
        e.support = {
            leadingWhitespace: a0.firstChild.nodeType === 3,
            tbody: !a0.getElementsByTagName("tbody").length,
            htmlSerialize: !!a0.getElementsByTagName("link").length,
            style: /red/.test(a5.getAttribute("style")),
            hrefNormalized: a5.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(a5.style.opacity),
            cssFloat: !!a5.style.cssFloat,
            checkOn: a0.getElementsByTagName("input")[0].value === "on",
            optSelected: x.createElement("select").appendChild(x.createElement("option")).selected,
            parentNode: a0.removeChild(a0.appendChild(x.createElement("div"))).parentNode === null,
            deleteExpando: true,
            checkClone: false,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        aY.type = "text/javascript";
        try {
            aY.appendChild(x.createTextNode("window." + a3 + "=1;"))
        } catch (a7) { }
        a4.insertBefore(aY, a4.firstChild);
        if (aH[a3]) {
            e.support.scriptEval = true;
            delete aH[a3]
        }
        try {
            delete aY.test
        } catch (a7) {
            e.support.deleteExpando = false
        }
        a4.removeChild(aY);
        if (a0.attachEvent && a0.fireEvent) {
            a0.attachEvent("onclick", function a2() {
                e.support.noCloneEvent = false;
                a0.detachEvent("onclick", a2)
            });
            a0.cloneNode(true).fireEvent("onclick")
        }
        a0 = x.createElement("div");
        a0.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
        var a1 = x.createDocumentFragment();
        a1.appendChild(a0.firstChild);
        e.support.checkClone = a1.cloneNode(true).cloneNode(true).lastChild.checked;
        e(function () {
            var a8 = x.createElement("div");
            a8.style.width = a8.style.paddingLeft = "1px";
            x.body.appendChild(a8);
            e.boxModel = e.support.boxModel = a8.offsetWidth === 2;
            x.body.removeChild(a8).style.display = "none";
            a8 = null
        });
        var aZ = function (a8) {
            var a9 = x.createElement("div");
            a8 = "on" + a8;
            var ba = (a8 in a9);
            if (!ba) {
                a9.setAttribute(a8, "return;");
                ba = typeof a9[a8] === "function"
            }
            a9 = null;
            return ba
        };
        e.support.submitBubbles = aZ("submit");
        e.support.changeBubbles = aZ("change");
        a4 = aY = a0 = a6 = a5 = null
    })();
    e.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    var i = "jQuery" + A(),
        g = 0,
        aR = {};
    e.extend({
        cache: {},
        expando: i,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function (aZ, a2, aY) {
            if (aZ.nodeName && e.noData[aZ.nodeName.toLowerCase()]) {
                return
            }
            aZ = aZ == aH ? aR : aZ;
            var a0 = aZ[i],
                a1 = e.cache,
                a3;
            if (!a0 && typeof a2 === "string" && aY === H) {
                return null
            }
            if (!a0) {
                a0 = ++g
            }
            if (typeof a2 === "object") {
                aZ[i] = a0;
                a3 = a1[a0] = e.extend(true, {},
                a2)
            } else {
                if (!a1[a0]) {
                    aZ[i] = a0;
                    a1[a0] = {}
                }
            }
            a3 = a1[a0];
            if (aY !== H) {
                a3[a2] = aY
            }
            return typeof a2 === "string" ? a3[a2] : a3
        },
        removeData: function (a0, a2) {
            if (a0.nodeName && e.noData[a0.nodeName.toLowerCase()]) {
                return
            }
            a0 = a0 == aH ? aR : a0;
            var aY = a0[i],
                aZ = e.cache,
                a1 = aZ[aY];
            if (a2) {
                if (a1) {
                    delete a1[a2];
                    if (e.isEmptyObject(a1)) {
                        e.removeData(a0)
                    }
                }
            } else {
                if (e.support.deleteExpando) {
                    delete a0[e.expando]
                } else {
                    if (a0.removeAttribute) {
                        a0.removeAttribute(e.expando)
                    }
                }
                delete aZ[aY]
            }
        }
    });
    e.fn.extend({
        data: function (a1, aY) {
            if (typeof a1 === "undefined" && this.length) {
                return e.data(this[0])
            } else {
                if (typeof a1 === "object") {
                    return this.each(function () {
                        e.data(this, a1)
                    })
                }
            }
            var a0 = a1.split(".");
            a0[1] = a0[1] ? "." + a0[1] : "";
            if (aY === H) {
                var aZ = this.triggerHandler("getData" + a0[1] + "!", [a0[0]]);
                if (aZ === H && this.length) {
                    aZ = e.data(this[0], a1)
                }
                return aZ === H && a0[1] ? this.data(a0[0]) : aZ
            } else {
                return this.trigger("setData" + a0[1] + "!", [a0[0], aY]).each(function () {
                    e.data(this, a1, aY)
                })
            }
        },
        removeData: function (aY) {
            return this.each(function () {
                e.removeData(this, aY)
            })
        }
    });
    e.extend({
        queue: function (a1, a0, aZ) {
            if (!a1) {
                return
            }
            a0 = (a0 || "fx") + "queue";
            var aY = e.data(a1, a0);
            if (!aZ) {
                return aY || []
            }
            if (!aY || e.isArray(aZ)) {
                aY = e.data(a1, a0, e.makeArray(aZ))
            } else {
                aY.push(aZ)
            }
            return aY
        },
        dequeue: function (a0, aZ) {
            aZ = aZ || "fx";
            var aY = e.queue(a0, aZ),
                a1 = aY.shift();
            if (a1 === "inprogress") {
                a1 = aY.shift()
            }
            if (a1) {
                if (aZ === "fx") {
                    aY.unshift("inprogress")
                }
                a1.call(a0, function () {
                    e.dequeue(a0, aZ)
                })
            }
        }
    });
    e.fn.extend({
        queue: function (aZ, aY) {
            if (typeof aZ !== "string") {
                aY = aZ;
                aZ = "fx"
            }
            if (aY === H) {
                return e.queue(this[0], aZ)
            }
            return this.each(function (a0, a2) {
                var a1 = e.queue(this, aZ, aY);
                if (aZ === "fx" && a1[0] !== "inprogress") {
                    e.dequeue(this, aZ)
                }
            })
        },
        dequeue: function (aY) {
            return this.each(function () {
                e.dequeue(this, aY)
            })
        },
        delay: function (aY, aZ) {
            aY = e.fx ? e.fx.speeds[aY] || aY : aY;
            aZ = aZ || "fx";
            return this.queue(aZ, function () {
                var a0 = this;
                setTimeout(function () {
                    e.dequeue(a0, aZ)
                },
                aY)
            })
        },
        clearQueue: function (aY) {
            return this.queue(aY || "fx", [])
        }
    });
    var q = /[\n\t]/g,
        aa = /\s+/,
        f = /\r/g,
        G = /href|src|style/,
        aA = /(button|input)/i,
        N = /(button|input|object|select|textarea)/i,
        p = /^(a|area)$/i,
        ae = /radio|checkbox/;
    e.fn.extend({
        attr: function (aY, aZ) {
            return ah(this, aY, aZ, true, e.attr)
        },
        removeAttr: function (aZ, aY) {
            return this.each(function () {
                e.attr(this, aZ, "");
                if (this.nodeType === 1) {
                    this.removeAttribute(aZ)
                }
            })
        },
        addClass: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a8) {
                    var a7 = e(this);
                    a7.addClass(aY.call(this, a8, a7.attr("class")))
                })
            }
            if (aY && typeof aY === "string") {
                var a1 = (aY || "").split(aa);
                for (var aZ = 0, a2 = this.length; aZ < a2; aZ++) {
                    var a0 = this[aZ];
                    if (a0.nodeType === 1) {
                        if (!a0.className) {
                            a0.className = aY
                        } else {
                            var a6 = " " + a0.className + " ",
                                a5 = a0.className;
                            for (var a4 = 0, a3 = a1.length; a4 < a3; a4++) {
                                if (a6.indexOf(" " + a1[a4] + " ") < 0) {
                                    a5 += " " + a1[a4]
                                }
                            }
                            a0.className = e.trim(a5)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a7) {
                    var a6 = e(this);
                    a6.removeClass(aY.call(this, a7, a6.attr("class")))
                })
            }
            if ((aY && typeof aY === "string") || aY === H) {
                var a1 = (aY || "").split(aa);
                for (var aZ = 0, a2 = this.length; aZ < a2; aZ++) {
                    var a0 = this[aZ];
                    if (a0.nodeType === 1 && a0.className) {
                        if (aY) {
                            var a5 = (" " + a0.className + " ").replace(q, " ");
                            for (var a4 = 0, a3 = a1.length; a4 < a3; a4++) {
                                a5 = a5.replace(" " + a1[a4] + " ", " ")
                            }
                            a0.className = e.trim(a5)
                        } else {
                            a0.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (aY, a0) {
            var aZ = typeof aY,
                a1 = typeof a0 === "boolean";
            if (e.isFunction(aY)) {
                return this.each(function (a3) {
                    var a2 = e(this);
                    a2.toggleClass(aY.call(this, a3, a2.attr("class"), a0), a0)
                })
            }
            return this.each(function () {
                if (aZ === "string") {
                    var a5, a3 = 0,
                        a6 = e(this),
                        a4 = a0,
                        a2 = aY.split(aa);
                    while ((a5 = a2[a3++])) {
                        a4 = a1 ? a4 : !a6.hasClass(a5);
                        a6[a4 ? "addClass" : "removeClass"](a5)
                    }
                } else {
                    if (aZ === "undefined" || aZ === "boolean") {
                        if (this.className) {
                            e.data(this, "__className__", this.className)
                        }
                        this.className = this.className || aY === false ? "" : e.data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (aY) {
            var a0 = " " + aY + " ";
            for (var a1 = 0, aZ = this.length; a1 < aZ; a1++) {
                if ((" " + this[a1].className + " ").replace(q, " ").indexOf(a0) > -1) {
                    return true
                }
            }
            return false
        },
        val: function (aY) {
            if (aY === H) {
                var a3 = this[0];
                if (a3) {
                    if (e.nodeName(a3, "option")) {
                        return (a3.attributes.value || {}).specified ? a3.value : a3.text
                    }
                    if (e.nodeName(a3, "select")) {
                        var a5 = a3.selectedIndex,
                            a1 = [],
                            a0 = a3.options,
                            a6 = a3.type === "select-one";
                        if (a5 < 0) {
                            return null
                        }
                        for (var aZ = a6 ? a5 : 0, a7 = a6 ? a5 + 1 : a0.length; aZ < a7; aZ++) {
                            var a4 = a0[aZ];
                            if (a4.selected) {
                                aY = e(a4).val();
                                if (a6) {
                                    return aY
                                }
                                a1.push(aY)
                            }
                        }
                        return a1
                    }
                    if (ae.test(a3.type) && !e.support.checkOn) {
                        return a3.getAttribute("value") === null ? "on" : a3.value
                    }
                    return (a3.value || "").replace(f, "")
                }
                return H
            }
            var a2 = e.isFunction(aY);
            return this.each(function (a8) {
                var ba = e(this),
                    a9 = aY;
                if (this.nodeType !== 1) {
                    return
                }
                if (a2) {
                    a9 = aY.call(this, a8, ba.val())
                }
                if (typeof a9 === "number") {
                    a9 += ""
                }
                if (e.isArray(a9) && ae.test(this.type)) {
                    this.checked = e.inArray(ba.val(), a9) >= 0
                } else {
                    if (e.nodeName(this, "select")) {
                        var bb = e.makeArray(a9);
                        e("option", this).each(function () {
                            this.selected = e.inArray(e(this).val(), bb) >= 0
                        });
                        if (!bb.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = a9
                    }
                }
            })
        }
    });
    e.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (aZ, a4, aY, a7) {
            if (!aZ || aZ.nodeType === 3 || aZ.nodeType === 8) {
                return H
            }
            if (a7 && a4 in e.attrFn) {
                return e(aZ)[a4](aY)
            }
            var a6 = aZ.nodeType !== 1 || !e.isXMLDoc(aZ),
                a2 = aY !== H;
            a4 = a6 && e.props[a4] || a4;
            if (aZ.nodeType === 1) {
                var a5 = G.test(a4);
                if (a4 === "selected" && !e.support.optSelected) {
                    var a3 = aZ.parentNode;
                    if (a3) {
                        a3.selectedIndex;
                        if (a3.parentNode) {
                            a3.parentNode.selectedIndex
                        }
                    }
                }
                if (a4 in aZ && a6 && !a5) {
                    if (a2) {
                        if (a4 === "type" && aA.test(aZ.nodeName) && aZ.parentNode) {
                            e.error("type property can't be changed")
                        }
                        aZ[a4] = aY
                    }
                    if (e.nodeName(aZ, "form") && aZ.getAttributeNode(a4)) {
                        return aZ.getAttributeNode(a4).nodeValue
                    }
                    if (a4 === "tabIndex") {
                        var a0 = aZ.getAttributeNode("tabIndex");
                        return a0 && a0.specified ? a0.value : N.test(aZ.nodeName) || p.test(aZ.nodeName) && aZ.href ? 0 : H
                    }
                    return aZ[a4]
                }
                if (!e.support.style && a6 && a4 === "style") {
                    if (a2) {
                        aZ.style.cssText = "" + aY
                    }
                    return aZ.style.cssText
                }
                if (a2) {
                    aZ.setAttribute(a4, "" + aY)
                }
                var a1 = !e.support.hrefNormalized && a6 && a5 ? aZ.getAttribute(a4, 2) : aZ.getAttribute(a4);
                return a1 === null ? H : a1
            }
            return e.style(aZ, a4, aY)
        }
    });
    var ab = /\.(.*)$/,
        aD = function (aY) {
            return aY.replace(/[^\w\s\.\|`]/g, function (aZ) {
                return "\\" + aZ
            })
        };
    e.event = {
        add: function (a1, a9, a2, a7) {
            if (a1.nodeType === 3 || a1.nodeType === 8) {
                return
            }
            if (a1.setInterval && (a1 !== aH && !a1.frameElement)) {
                a1 = aH
            }
            var bb, ba;
            if (a2.handler) {
                bb = a2;
                a2 = bb.handler
            }
            if (!a2.guid) {
                a2.guid = e.guid++
            }
            var a6 = e.data(a1);
            if (!a6) {
                return
            }
            var a5 = a6.events = a6.events || {},
                a0 = a6.handle,
                a0;
            if (!a0) {
                a6.handle = a0 = function () {
                    return typeof e !== "undefined" && !e.event.triggered ? e.event.handle.apply(a0.elem, arguments) : H
                }
            }
            a0.elem = a1;
            a9 = a9.split(" ");
            var a4, a3 = 0,
                aY;
            while ((a4 = a9[a3++])) {
                ba = bb ? e.extend({},
                bb) : {
                    handler: a2,
                    data: a7
                };
                if (a4.indexOf(".") > -1) {
                    aY = a4.split(".");
                    a4 = aY.shift();
                    ba.namespace = aY.slice(0).sort().join(".")
                } else {
                    aY = [];
                    ba.namespace = ""
                }
                ba.type = a4;
                ba.guid = a2.guid;
                var a8 = a5[a4],
                    aZ = e.event.special[a4] || {};
                if (!a8) {
                    a8 = a5[a4] = [];
                    if (!aZ.setup || aZ.setup.call(a1, a7, aY, a0) === false) {
                        if (a1.addEventListener) {
                            a1.addEventListener(a4, a0, false)
                        } else {
                            if (a1.attachEvent) {
                                a1.attachEvent("on" + a4, a0)
                            }
                        }
                    }
                }
                if (aZ.add) {
                    aZ.add.call(a1, ba);
                    if (!ba.handler.guid) {
                        ba.handler.guid = a2.guid
                    }
                }
                a8.push(ba);
                e.event.global[a4] = true
            }
            a1 = null
        },
        global: {},
        remove: function (bf, bd, a1, a0) {
            if (bf.nodeType === 3 || bf.nodeType === 8) {
                return
            }
            var bb, a4, a8, a6 = 0,
                a5, aY, bc, aZ, a7, a9, a3, be = e.data(bf),
                ba = be && be.events;
            if (!be || !ba) {
                return
            }
            if (bd && bd.type) {
                a1 = bd.handler;
                bd = bd.type
            }
            if (!bd || typeof bd === "string" && bd.charAt(0) === ".") {
                bd = bd || "";
                for (a4 in ba) {
                    e.event.remove(bf, a4 + bd)
                }
                return
            }
            bd = bd.split(" ");
            while ((a4 = bd[a6++])) {
                a3 = a4;
                a9 = null;
                a5 = a4.indexOf(".") < 0;
                aY = [];
                if (!a5) {
                    aY = a4.split(".");
                    a4 = aY.shift();
                    bc = new RegExp("(^|\\.)" + e.map(aY.slice(0).sort(), aD).join("\\.(?:.*\\.)?") + "(\\.|$)")
                }
                a7 = ba[a4];
                if (!a7) {
                    continue
                }
                if (!a1) {
                    for (var a2 = 0; a2 < a7.length; a2++) {
                        a9 = a7[a2];
                        if (a5 || bc.test(a9.namespace)) {
                            e.event.remove(bf, a3, a9.handler, a2);
                            a7.splice(a2--, 1)
                        }
                    }
                    continue
                }
                aZ = e.event.special[a4] || {};
                for (var a2 = a0 || 0; a2 < a7.length; a2++) {
                    a9 = a7[a2];
                    if (a1.guid === a9.guid) {
                        if (a5 || bc.test(a9.namespace)) {
                            if (a0 == null) {
                                a7.splice(a2--, 1)
                            }
                            if (aZ.remove) {
                                aZ.remove.call(bf, a9)
                            }
                        }
                        if (a0 != null) {
                            break
                        }
                    }
                }
                if (a7.length === 0 || a0 != null && a7.length === 1) {
                    if (!aZ.teardown || aZ.teardown.call(bf, aY) === false) {
                        aM(bf, a4, be.handle)
                    }
                    bb = null;
                    delete ba[a4]
                }
            }
            if (e.isEmptyObject(ba)) {
                var bg = be.handle;
                if (bg) {
                    bg.elem = null
                }
                delete be.events;
                delete be.handle;
                if (e.isEmptyObject(be)) {
                    e.removeData(bf)
                }
            }
        },
        trigger: function (a6, aZ, a0) {
            var a5 = a6.type || a6,
                a3 = arguments[3];
            if (!a3) {
                a6 = typeof a6 === "object" ? a6[i] ? a6 : e.extend(e.Event(a5), a6) : e.Event(a5);
                if (a5.indexOf("!") >= 0) {
                    a6.type = a5 = a5.slice(0, -1);
                    a6.exclusive = true
                }
                if (!a0) {
                    a6.stopPropagation();
                    if (e.event.global[a5]) {
                        e.each(e.cache, function () {
                            if (this.events && this.events[a5]) {
                                e.event.trigger(a6, aZ, this.handle.elem)
                            }
                        })
                    }
                }
                if (!a0 || a0.nodeType === 3 || a0.nodeType === 8) {
                    return H
                }
                a6.result = H;
                a6.target = a0;
                aZ = e.makeArray(aZ);
                aZ.unshift(a6)
            }
            a6.currentTarget = a0;
            var a2 = e.data(a0, "handle");
            if (a2) {
                a2.apply(a0, aZ)
            }
            var a1 = a0.parentNode || a0.ownerDocument;
            try {
                if (!(a0 && a0.nodeName && e.noData[a0.nodeName.toLowerCase()])) {
                    if (a0["on" + a5] && a0["on" + a5].apply(a0, aZ) === false) {
                        a6.result = false
                    }
                }
            } catch (a8) { }
            if (!a6.isPropagationStopped() && a1) {
                e.event.trigger(a6, aZ, a1, true)
            } else {
                if (!a6.isDefaultPrevented()) {
                    var a4 = a6.target,
                        a7, aY = e.nodeName(a4, "a") && a5 === "click",
                        a9 = e.event.special[a5] || {};
                    if ((!a9._default || a9._default.call(a0, a6) === false) && !aY && !(a4 && a4.nodeName && e.noData[a4.nodeName.toLowerCase()])) {
                        try {
                            if (a4[a5]) {
                                a7 = a4["on" + a5];
                                if (a7) {
                                    a4["on" + a5] = null
                                }
                                e.event.triggered = true;
                                a4[a5]()
                            }
                        } catch (a8) { }
                        if (a7) {
                            a4["on" + a5] = a7
                        }
                        e.event.triggered = false
                    }
                }
            }
        },
        handle: function (a5) {
            var a6, a0, aY, a4, a7;
            a5 = arguments[0] = e.event.fix(a5 || aH.event);
            a5.currentTarget = this;
            a6 = a5.type.indexOf(".") < 0 && !a5.exclusive;
            if (!a6) {
                aY = a5.type.split(".");
                a5.type = aY.shift();
                a4 = new RegExp("(^|\\.)" + aY.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            var a7 = e.data(this, "events"),
                a0 = a7[a5.type];
            if (a7 && a0) {
                a0 = a0.slice(0);
                for (var a1 = 0, a2 = a0.length; a1 < a2; a1++) {
                    var aZ = a0[a1];
                    if (a6 || a4.test(aZ.namespace)) {
                        a5.handler = aZ.handler;
                        a5.data = aZ.data;
                        a5.handleObj = aZ;
                        var a3 = aZ.handler.apply(this, arguments);
                        if (a3 !== H) {
                            a5.result = a3;
                            if (a3 === false) {
                                a5.preventDefault();
                                a5.stopPropagation()
                            }
                        }
                        if (a5.isImmediatePropagationStopped()) {
                            break
                        }
                    }
                }
            }
            return a5.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a2) {
            if (a2[i]) {
                return a2
            }
            var aY = a2;
            a2 = e.Event(aY);
            for (var aZ = this.props.length, a1; aZ; ) {
                a1 = this.props[--aZ];
                a2[a1] = aY[a1]
            }
            if (!a2.target) {
                a2.target = a2.srcElement || x
            }
            if (a2.target.nodeType === 3) {
                a2.target = a2.target.parentNode
            }
            if (!a2.relatedTarget && a2.fromElement) {
                a2.relatedTarget = a2.fromElement === a2.target ? a2.toElement : a2.fromElement
            }
            if (a2.pageX == null && a2.clientX != null) {
                var a3 = x.documentElement,
                    a0 = x.body;
                a2.pageX = a2.clientX + (a3 && a3.scrollLeft || a0 && a0.scrollLeft || 0) - (a3 && a3.clientLeft || a0 && a0.clientLeft || 0);
                a2.pageY = a2.clientY + (a3 && a3.scrollTop || a0 && a0.scrollTop || 0) - (a3 && a3.clientTop || a0 && a0.clientTop || 0)
            }
            if (!a2.which && ((a2.charCode || a2.charCode === 0) ? a2.charCode : a2.keyCode)) {
                a2.which = a2.charCode || a2.keyCode
            }
            if (!a2.metaKey && a2.ctrlKey) {
                a2.metaKey = a2.ctrlKey
            }
            if (!a2.which && a2.button !== H) {
                a2.which = (a2.button & 1 ? 1 : (a2.button & 2 ? 3 : (a2.button & 4 ? 2 : 0)))
            }
            return a2
        },
        guid: 100000000,
        proxy: e.proxy,
        special: {
            ready: {
                setup: e.bindReady,
                teardown: e.noop
            },
            live: {
                add: function (aY) {
                    e.event.add(this, aY.origType, e.extend({},
                    aY, {
                        handler: ad
                    }))
                },
                remove: function (aY) {
                    var a0 = true,
                        aZ = aY.origType.replace(ab, "");
                    e.each(e.data(this, "events").live || [], function () {
                        if (aZ === this.origType.replace(ab, "")) {
                            a0 = false;
                            return false
                        }
                    });
                    if (a0) {
                        e.event.remove(this, aY.origType, ad)
                    }
                }
            },
            beforeunload: {
                setup: function (aZ, a0, aY) {
                    if (this.setInterval) {
                        this.onbeforeunload = aY
                    }
                    return false
                },
                teardown: function (aZ, aY) {
                    if (this.onbeforeunload === aY) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    var aM = x.removeEventListener ?
    function (a0, aZ, aY) {
        a0.removeEventListener(aZ, aY, false)
    } : function (a0, aZ, aY) {
        a0.detachEvent("on" + aZ, aY)
    };
    e.Event = function (aY) {
        if (!this.preventDefault) {
            return new e.Event(aY)
        }
        if (aY && aY.type) {
            this.originalEvent = aY;
            this.type = aY.type
        } else {
            this.type = aY
        }
        this.timeStamp = A();
        this[i] = true
    };

    function K() {
        return false
    }
    function aV() {
        return true
    }
    e.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = aV;
            var aY = this.originalEvent;
            if (!aY) {
                return
            }
            if (aY.preventDefault) {
                aY.preventDefault()
            }
            aY.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = aV;
            var aY = this.originalEvent;
            if (!aY) {
                return
            }
            if (aY.stopPropagation) {
                aY.stopPropagation()
            }
            aY.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = aV;
            this.stopPropagation()
        },
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K
    };
    var E = function (aZ) {
        var aY = aZ.relatedTarget;
        try {
            while (aY && aY !== this) {
                aY = aY.parentNode
            }
            if (aY !== this) {
                aZ.type = aZ.data;
                e.event.handle.apply(this, arguments)
            }
        } catch (a0) { }
    },
        Y = function (aY) {
            aY.type = aY.data;
            e.event.handle.apply(this, arguments)
        };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },


    function (aZ, aY) {
        e.event.special[aZ] = {
            setup: function (a0) {
                e.event.add(this, aY, a0 && a0.selector ? Y : E, aZ)
            },
            teardown: function (a0) {
                e.event.remove(this, aY, a0 && a0.selector ? Y : E)
            }
        }
    });
    if (!e.support.submitBubbles) {
        e.event.special.submit = {
            setup: function (aY, aZ) {
                if (this.nodeName.toLowerCase() !== "form") {
                    e.event.add(this, "click.specialSubmit", function (a2) {
                        var a1 = a2.target,
                            a0 = a1.type;
                        if ((a0 === "submit" || a0 === "image") && e(a1).closest("form").length) {
                            return Q("submit", this, arguments)
                        }
                    });
                    e.event.add(this, "keypress.specialSubmit", function (a2) {
                        var a1 = a2.target,
                            a0 = a1.type;
                        if ((a0 === "text" || a0 === "password") && e(a1).closest("form").length && a2.keyCode === 13) {
                            return Q("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            teardown: function (aY) {
                e.event.remove(this, ".specialSubmit")
            }
        }
    }
    if (!e.support.changeBubbles) {
        var F = /textarea|input|select/i,
            a, r = function (aZ) {
                var aY = aZ.type,
                a0 = aZ.value;
                if (aY === "radio" || aY === "checkbox") {
                    a0 = aZ.checked
                } else {
                    if (aY === "select-multiple") {
                        a0 = aZ.selectedIndex > -1 ? e.map(aZ.options, function (a1) {
                            return a1.selected
                        }).join("-") : ""
                    } else {
                        if (aZ.nodeName.toLowerCase() === "select") {
                            a0 = aZ.selectedIndex
                        }
                    }
                }
                return a0
            },
            am = function am(a1) {
                var a0 = a1.target,
                aY, aZ;
                if (!F.test(a0.nodeName) || a0.readOnly) {
                    return
                }
                aY = e.data(a0, "_change_data");
                aZ = r(a0);
                if (a1.type !== "focusout" || a0.type !== "radio") {
                    e.data(a0, "_change_data", aZ)
                }
                if (aY === H || aZ === aY) {
                    return
                }
                if (aY != null || aZ) {
                    a1.type = "change";
                    return e.event.trigger(a1, arguments[1], a0)
                }
            };
        e.event.special.change = {
            filters: {
                focusout: am,
                click: function (a0) {
                    var aZ = a0.target,
                        aY = aZ.type;
                    if (aY === "radio" || aY === "checkbox" || aZ.nodeName.toLowerCase() === "select") {
                        return am.call(this, a0)
                    }
                },
                keydown: function (a0) {
                    var aZ = a0.target,
                        aY = aZ.type;
                    if ((a0.keyCode === 13 && aZ.nodeName.toLowerCase() !== "textarea") || (a0.keyCode === 32 && (aY === "checkbox" || aY === "radio")) || aY === "select-multiple") {
                        return am.call(this, a0)
                    }
                },
                beforeactivate: function (aZ) {
                    var aY = aZ.target;
                    e.data(aY, "_change_data", r(aY))
                }
            },
            setup: function (aY, a0) {
                if (this.type === "file") {
                    return false
                }
                for (var aZ in a) {
                    e.event.add(this, aZ + ".specialChange", a[aZ])
                }
                return F.test(this.nodeName)
            },
            teardown: function (aY) {
                e.event.remove(this, ".specialChange");
                return F.test(this.nodeName)
            }
        };
        a = e.event.special.change.filters
    }
    function Q(aZ, a0, aY) {
        aY[0].type = aZ;
        return e.event.handle.apply(a0, aY)
    }
    if (x.addEventListener) {
        e.each({
            focus: "focusin",
            blur: "focusout"
        },


        function (aY, a0) {
            e.event.special[a0] = {
                setup: function () {
                    this.addEventListener(aY, aZ, true)
                },
                teardown: function () {
                    this.removeEventListener(aY, aZ, true)
                }
            };

            function aZ(a1) {
                a1 = e.event.fix(a1);
                a1.type = a0;
                return e.event.handle.call(this, a1)
            }
        })
    }
    e.each(["bind", "one"], function (aZ, aY) {
        e.fn[aY] = function (a4, a0, a6) {
            if (typeof a4 === "object") {
                for (var a5 in a4) {
                    this[aY](a5, a0, a4[a5], a6)
                }
                return this
            }
            if (e.isFunction(a0)) {
                a6 = a0;
                a0 = H
            }
            var a3 = aY === "one" ? e.proxy(a6, function (a7) {
                e(this).unbind(a7, a3);
                return a6.apply(this, arguments)
            }) : a6;
            if (a4 === "unload" && aY !== "one") {
                this.one(a4, a0, a6)
            } else {
                for (var a1 = 0, a2 = this.length; a1 < a2; a1++) {
                    e.event.add(this[a1], a4, a3, a0)
                }
            }
            return this
        }
    });
    e.fn.extend({
        unbind: function (a0, aZ) {
            if (typeof a0 === "object" && !a0.preventDefault) {
                for (var a2 in a0) {
                    this.unbind(a2, a0[a2])
                }
            } else {
                for (var aY = 0, a1 = this.length; aY < a1; aY++) {
                    e.event.remove(this[aY], a0, aZ)
                }
            }
            return this
        },
        delegate: function (a0, aZ, aY, a1) {
            return this.live(aZ, aY, a1, a0)
        },
        undelegate: function (aZ, aY, a0) {
            if (arguments.length === 0) {
                return this.unbind("live")
            } else {
                return this.die(aY, null, a0, aZ)
            }
        },
        trigger: function (aZ, aY) {
            return this.each(function () {
                e.event.trigger(aZ, aY, this)
            })
        },
        triggerHandler: function (aZ, aY) {
            if (this[0]) {
                var a0 = e.Event(aZ);
                a0.preventDefault();
                a0.stopPropagation();
                e.event.trigger(a0, aY, this[0]);
                return a0.result
            }
        },
        toggle: function (aZ) {
            var a0 = arguments,
                aY = 1;
            while (aY < a0.length) {
                e.proxy(aZ, a0[aY++])
            }
            return this.click(e.proxy(aZ, function (a1) {
                var a2 = (e.data(this, "lastToggle" + aZ.guid) || 0) % aY;
                e.data(this, "lastToggle" + aZ.guid, a2 + 1);
                a1.preventDefault();
                return a0[a2].apply(this, arguments) || false
            }))
        },
        hover: function (aY, aZ) {
            return this.mouseenter(aY).mouseleave(aZ || aY)
        }
    });
    var u = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    e.each(["live", "die"], function (aZ, aY) {
        e.fn[aY] = function (a7, a1, a8, a9) {
            var a6, a2 = 0,
                a4, a0, a5, ba = a9 || this.selector,
                a3 = a9 ? this : e(this.context);
            if (e.isFunction(a1)) {
                a8 = a1;
                a1 = H
            }
            a7 = (a7 || "").split(" ");
            while ((a6 = a7[a2++]) != null) {
                a4 = ab.exec(a6);
                a0 = "";
                if (a4) {
                    a0 = a4[0];
                    a6 = a6.replace(ab, "")
                }
                if (a6 === "hover") {
                    a7.push("mouseenter" + a0, "mouseleave" + a0);
                    continue
                }
                a5 = a6;
                if (a6 === "focus" || a6 === "blur") {
                    a7.push(u[a6] + a0);
                    a6 = a6 + a0
                } else {
                    a6 = (u[a6] || a6) + a0
                }
                if (aY === "live") {
                    a3.each(function () {
                        e.event.add(this, aS(a6, ba), {
                            data: a1,
                            selector: ba,
                            handler: a8,
                            origType: a6,
                            origHandler: a8,
                            preType: a5
                        })
                    })
                } else {
                    a3.unbind(aS(a6, ba), a8)
                }
            }
            return this
        }
    });

    function ad(a3) {
        var a2, aY = [],
            bc = [],
            a1 = arguments,
            aZ, a9, ba, a0, a5, a4, a6, a8, a7 = e.data(this, "events");
        if (a3.liveFired === this || !a7 || !a7.live || a3.button && a3.type === "click") {
            return
        }
        a3.liveFired = this;
        var bb = a7.live.slice(0);
        for (a5 = 0; a5 < bb.length; a5++) {
            ba = bb[a5];
            if (ba.origType.replace(ab, "") === a3.type) {
                bc.push(ba.selector)
            } else {
                bb.splice(a5--, 1)
            }
        }
        a9 = e(a3.target).closest(bc, a3.currentTarget);
        for (a4 = 0, a6 = a9.length; a4 < a6; a4++) {
            for (a5 = 0; a5 < bb.length; a5++) {
                ba = bb[a5];
                if (a9[a4].selector === ba.selector) {
                    a0 = a9[a4].elem;
                    aZ = null;
                    if (ba.preType === "mouseenter" || ba.preType === "mouseleave") {
                        aZ = e(a3.relatedTarget).closest(ba.selector)[0]
                    }
                    if (!aZ || aZ !== a0) {
                        aY.push({
                            elem: a0,
                            handleObj: ba
                        })
                    }
                }
            }
        }
        for (a4 = 0, a6 = aY.length; a4 < a6; a4++) {
            a9 = aY[a4];
            a3.currentTarget = a9.elem;
            a3.data = a9.handleObj.data;
            a3.handleObj = a9.handleObj;
            if (a9.handleObj.origHandler.apply(a9.elem, a1) === false) {
                a2 = false;
                break
            }
        }
        return a2
    }
    function aS(aZ, aY) {
        return "live." + (aZ && aZ !== "*" ? aZ + "." : "") + aY.replace(/\./g, "`").replace(/ /g, "&")
    }
    e.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), function (aZ, aY) {
        e.fn[aY] = function (a0) {
            return a0 ? this.bind(aY, a0) : this.trigger(aY)
        };
        if (e.attrFn) {
            e.attrFn[aY] = true
        }
    });
    if (aH.attachEvent && !aH.addEventListener) {
        aH.attachEvent("onunload", function () {
            for (var aY in e.cache) {
                if (e.cache[aY].handle) {
                    try {
                        e.event.remove(e.cache[aY].handle.elem)
                    } catch (aZ) { }
                }
            }
        });
        /*
        * Sizzle CSS Selector Engine - v1.0
        *  Copyright 2009, The Dojo Foundation
        *  Released under the MIT, BSD, and GPL Licenses.
        *  More information: http://sizzlejs.com/
        */
    } (function () {
        var a9 = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            a0 = 0,
            a7 = Object.prototype.toString,
            aZ = false,
            aY = true;
        [0, 0].sort(function () {
            aY = false;
            return 0
        });
        var bd = function (bv, bh, bk, br) {
            bk = bk || [];
            var bi = bh = bh || x;
            if (bh.nodeType !== 1 && bh.nodeType !== 9) {
                return []
            }
            if (!bv || typeof bv !== "string") {
                return bk
            }
            var bn = [],
                bq, bt, bl, bw, bp = true,
                bj = bb(bh),
                bu = bv;
            while ((a9.exec(""), bq = a9.exec(bu)) !== null) {
                bu = bq[3];
                bn.push(bq[1]);
                if (bq[2]) {
                    bw = bq[3];
                    break
                }
            }
            if (bn.length > 1 && ba.exec(bv)) {
                if (bn.length === 2 && a8.relative[bn[0]]) {
                    bt = a2(bn[0] + bn[1], bh)
                } else {
                    bt = a8.relative[bn[0]] ? [bh] : bd(bn.shift(), bh);
                    while (bn.length) {
                        bv = bn.shift();
                        if (a8.relative[bv]) {
                            bv += bn.shift()
                        }
                        bt = a2(bv, bt)
                    }
                }
            } else {
                if (!br && bn.length > 1 && bh.nodeType === 9 && !bj && a8.match.ID.test(bn[0]) && !a8.match.ID.test(bn[bn.length - 1])) {
                    var bs = bd.find(bn.shift(), bh, bj);
                    bh = bs.expr ? bd.filter(bs.expr, bs.set)[0] : bs.set[0]
                }
                if (bh) {
                    var bs = br ? {
                        expr: bn.pop(),
                        set: bf(br)
                    } : bd.find(bn.pop(), bn.length === 1 && (bn[0] === "~" || bn[0] === "+") && bh.parentNode ? bh.parentNode : bh, bj);
                    bt = bs.expr ? bd.filter(bs.expr, bs.set) : bs.set;
                    if (bn.length > 0) {
                        bl = bf(bt)
                    } else {
                        bp = false
                    }
                    while (bn.length) {
                        var bm = bn.pop(),
                            bg = bm;
                        if (!a8.relative[bm]) {
                            bm = ""
                        } else {
                            bg = bn.pop()
                        }
                        if (bg == null) {
                            bg = bh
                        }
                        a8.relative[bm](bl, bg, bj)
                    }
                } else {
                    bl = bn = []
                }
            }
            if (!bl) {
                bl = bt
            }
            if (!bl) {
                bd.error(bm || bv)
            }
            if (a7.call(bl) === "[object Array]") {
                if (!bp) {
                    bk.push.apply(bk, bl)
                } else {
                    if (bh && bh.nodeType === 1) {
                        for (var bo = 0; bl[bo] != null; bo++) {
                            if (bl[bo] && (bl[bo] === true || bl[bo].nodeType === 1 && a6(bh, bl[bo]))) {
                                bk.push(bt[bo])
                            }
                        }
                    } else {
                        for (var bo = 0; bl[bo] != null; bo++) {
                            if (bl[bo] && bl[bo].nodeType === 1) {
                                bk.push(bt[bo])
                            }
                        }
                    }
                }
            } else {
                bf(bl, bk)
            }
            if (bw) {
                bd(bw, bi, bk, br);
                bd.uniqueSort(bk)
            }
            return bk
        };
        bd.uniqueSort = function (bg) {
            if (be) {
                aZ = aY;
                bg.sort(be);
                if (aZ) {
                    for (var bh = 1; bh < bg.length; bh++) {
                        if (bg[bh] === bg[bh - 1]) {
                            bg.splice(bh--, 1)
                        }
                    }
                }
            }
            return bg
        };
        bd.matches = function (bg, bh) {
            return bd(bg, null, null, bh)
        };
        bd.find = function (bl, bi, bg) {
            var bm, bj;
            if (!bl) {
                return []
            }
            for (var bh = 0, bk = a8.order.length; bh < bk; bh++) {
                var bo = a8.order[bh],
                    bj;
                if ((bj = a8.leftMatch[bo].exec(bl))) {
                    var bn = bj[1];
                    bj.splice(1, 1);
                    if (bn.substr(bn.length - 1) !== "\\") {
                        bj[1] = (bj[1] || "").replace(/\\/g, "");
                        bm = a8.find[bo](bj, bi, bg);
                        if (bm != null) {
                            bl = bl.replace(a8.match[bo], "");
                            break
                        }
                    }
                }
            }
            if (!bm) {
                bm = bi.getElementsByTagName("*")
            }
            return {
                set: bm,
                expr: bl
            }
        };
        bd.filter = function (bp, bw, bi, br) {
            var bt = bp,
                bs = [],
                bu = bw,
                bl, bn, bq = bw && bw[0] && bb(bw[0]);
            while (bp && bw.length) {
                for (var bm in a8.filter) {
                    if ((bl = a8.leftMatch[bm].exec(bp)) != null && bl[2]) {
                        var bh = a8.filter[bm],
                            bj, bv, bk = bl[1];
                        bn = false;
                        bl.splice(1, 1);
                        if (bk.substr(bk.length - 1) === "\\") {
                            continue
                        }
                        if (bu === bs) {
                            bs = []
                        }
                        if (a8.preFilter[bm]) {
                            bl = a8.preFilter[bm](bl, bu, bi, bs, br, bq);
                            if (!bl) {
                                bn = bj = true
                            } else {
                                if (bl === true) {
                                    continue
                                }
                            }
                        }
                        if (bl) {
                            for (var bo = 0;
                            (bv = bu[bo]) != null; bo++) {
                                if (bv) {
                                    bj = bh(bv, bl, bo, bu);
                                    var bg = br ^ !!bj;
                                    if (bi && bj != null) {
                                        if (bg) {
                                            bn = true
                                        } else {
                                            bu[bo] = false
                                        }
                                    } else {
                                        if (bg) {
                                            bs.push(bv);
                                            bn = true
                                        }
                                    }
                                }
                            }
                        }
                        if (bj !== H) {
                            if (!bi) {
                                bu = bs
                            }
                            bp = bp.replace(a8.match[bm], "");
                            if (!bn) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (bp === bt) {
                    if (bn == null) {
                        bd.error(bp)
                    } else {
                        break
                    }
                }
                bt = bp
            }
            return bu
        };
        bd.error = function (bg) {
            throw "Syntax error, unrecognized expression: " + bg
        };
        var a8 = bd.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (bg) {
                    return bg.getAttribute("href")
                }
            },
            relative: {
                "+": function (bn, bj) {
                    var bg = typeof bj === "string",
                        bk = bg && !/\W/.test(bj),
                        bl = bg && !bk;
                    if (bk) {
                        bj = bj.toLowerCase()
                    }
                    for (var bh = 0, bi = bn.length, bm; bh < bi; bh++) {
                        if ((bm = bn[bh])) {
                            while ((bm = bm.previousSibling) && bm.nodeType !== 1) { }
                            bn[bh] = bl || bm && bm.nodeName.toLowerCase() === bj ? bm || false : bm === bj
                        }
                    }
                    if (bl) {
                        bd.filter(bj, bn, true)
                    }
                },
                ">": function (bm, bj) {
                    var bk = typeof bj === "string";
                    if (bk && !/\W/.test(bj)) {
                        bj = bj.toLowerCase();
                        for (var bg = 0, bi = bm.length; bg < bi; bg++) {
                            var bh = bm[bg];
                            if (bh) {
                                var bl = bh.parentNode;
                                bm[bg] = bl.nodeName.toLowerCase() === bj ? bl : false
                            }
                        }
                    } else {
                        for (var bg = 0, bi = bm.length; bg < bi; bg++) {
                            var bh = bm[bg];
                            if (bh) {
                                bm[bg] = bk ? bh.parentNode : bh.parentNode === bj
                            }
                        }
                        if (bk) {
                            bd.filter(bj, bm, true)
                        }
                    }
                },
                "": function (bl, bi, bg) {
                    var bk = a0++,
                        bh = a1;
                    if (typeof bi === "string" && !/\W/.test(bi)) {
                        var bj = bi = bi.toLowerCase();
                        bh = a5
                    }
                    bh("parentNode", bi, bk, bl, bj, bg)
                },
                "~": function (bl, bi, bg) {
                    var bk = a0++,
                        bh = a1;
                    if (typeof bi === "string" && !/\W/.test(bi)) {
                        var bj = bi = bi.toLowerCase();
                        bh = a5
                    }
                    bh("previousSibling", bi, bk, bl, bj, bg)
                }
            },
            find: {
                ID: function (bj, bg, bh) {
                    if (typeof bg.getElementById !== "undefined" && !bh) {
                        var bi = bg.getElementById(bj[1]);
                        return bi ? [bi] : []
                    }
                },
                NAME: function (bi, bh) {
                    if (typeof bh.getElementsByName !== "undefined") {
                        var bk = [],
                            bl = bh.getElementsByName(bi[1]);
                        for (var bg = 0, bj = bl.length; bg < bj; bg++) {
                            if (bl[bg].getAttribute("name") === bi[1]) {
                                bk.push(bl[bg])
                            }
                        }
                        return bk.length === 0 ? null : bk
                    }
                },
                TAG: function (bh, bg) {
                    return bg.getElementsByTagName(bh[1])
                }
            },
            preFilter: {
                CLASS: function (bk, bl, bj, bn, bm, bg) {
                    bk = " " + bk[1].replace(/\\/g, "") + " ";
                    if (bg) {
                        return bk
                    }
                    for (var bh = 0, bi;
                    (bi = bl[bh]) != null; bh++) {
                        if (bi) {
                            if (bm ^ (bi.className && (" " + bi.className + " ").replace(/[\t\n]/g, " ").indexOf(bk) >= 0)) {
                                if (!bj) {
                                    bn.push(bi)
                                }
                            } else {
                                if (bj) {
                                    bl[bh] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (bg) {
                    return bg[1].replace(/\\/g, "")
                },
                TAG: function (bh, bg) {
                    return bh[1].toLowerCase()
                },
                CHILD: function (bh) {
                    if (bh[1] === "nth") {
                        var bg = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(bh[2] === "even" && "2n" || bh[2] === "odd" && "2n+1" || !/\D/.test(bh[2]) && "0n+" + bh[2] || bh[2]);
                        bh[2] = (bg[1] + (bg[2] || 1)) - 0;
                        bh[3] = bg[3] - 0
                    }
                    bh[0] = a0++;
                    return bh
                },
                ATTR: function (bi, bk, bh, bm, bl, bg) {
                    var bj = bi[1].replace(/\\/g, "");
                    if (!bg && a8.attrMap[bj]) {
                        bi[1] = a8.attrMap[bj]
                    }
                    if (bi[2] === "~=") {
                        bi[4] = " " + bi[4] + " "
                    }
                    return bi
                },
                PSEUDO: function (bh, bj, bg, bl, bk) {
                    if (bh[1] === "not") {
                        if ((a9.exec(bh[3]) || "").length > 1 || /^\w/.test(bh[3])) {
                            bh[3] = bd(bh[3], null, null, bj)
                        } else {
                            var bi = bd.filter(bh[3], bj, bg, true ^ bk);
                            if (!bg) {
                                bl.push.apply(bl, bi)
                            }
                            return false
                        }
                    } else {
                        if (a8.match.POS.test(bh[0]) || a8.match.CHILD.test(bh[0])) {
                            return true
                        }
                    }
                    return bh
                },
                POS: function (bg) {
                    bg.unshift(true);
                    return bg
                }
            },
            filters: {
                enabled: function (bg) {
                    return bg.disabled === false && bg.type !== "hidden"
                },
                disabled: function (bg) {
                    return bg.disabled === true
                },
                checked: function (bg) {
                    return bg.checked === true
                },
                selected: function (bg) {
                    bg.parentNode.selectedIndex;
                    return bg.selected === true
                },
                parent: function (bg) {
                    return !!bg.firstChild
                },
                empty: function (bg) {
                    return !bg.firstChild
                },
                has: function (bh, bg, bi) {
                    return !!bd(bi[3], bh).length
                },
                header: function (bg) {
                    return /h\d/i.test(bg.nodeName)
                },
                text: function (bg) {
                    return "text" === bg.type
                },
                radio: function (bg) {
                    return "radio" === bg.type
                },
                checkbox: function (bg) {
                    return "checkbox" === bg.type
                },
                file: function (bg) {
                    return "file" === bg.type
                },
                password: function (bg) {
                    return "password" === bg.type
                },
                submit: function (bg) {
                    return "submit" === bg.type
                },
                image: function (bg) {
                    return "image" === bg.type
                },
                reset: function (bg) {
                    return "reset" === bg.type
                },
                button: function (bg) {
                    return "button" === bg.type || bg.nodeName.toLowerCase() === "button"
                },
                input: function (bg) {
                    return /input|select|textarea|button/i.test(bg.nodeName)
                }
            },
            setFilters: {
                first: function (bg, bh) {
                    return bh === 0
                },
                last: function (bi, bh, bj, bg) {
                    return bh === bg.length - 1
                },
                even: function (bg, bh) {
                    return bh % 2 === 0
                },
                odd: function (bg, bh) {
                    return bh % 2 === 1
                },
                lt: function (bh, bg, bi) {
                    return bg < bi[3] - 0
                },
                gt: function (bh, bg, bi) {
                    return bg > bi[3] - 0
                },
                nth: function (bh, bg, bi) {
                    return bi[3] - 0 === bg
                },
                eq: function (bh, bg, bi) {
                    return bi[3] - 0 === bg
                }
            },
            filter: {
                PSEUDO: function (bh, bk, bg, bn) {
                    var bm = bk[1],
                        bj = a8.filters[bm];
                    if (bj) {
                        return bj(bh, bg, bk, bn)
                    } else {
                        if (bm === "contains") {
                            return (bh.textContent || bh.innerText || a4([bh]) || "").indexOf(bk[3]) >= 0
                        } else {
                            if (bm === "not") {
                                var bi = bk[3];
                                for (var bg = 0, bl = bi.length; bg < bl; bg++) {
                                    if (bi[bg] === bh) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                bd.error("Syntax error, unrecognized expression: " + bm)
                            }
                        }
                    }
                },
                CHILD: function (bh, bj) {
                    var bl = bj[1],
                        bo = bh;
                    switch (bl) {
                        case "only":
                        case "first":
                            while ((bo = bo.previousSibling)) {
                                if (bo.nodeType === 1) {
                                    return false
                                }
                            }
                            if (bl === "first") {
                                return true
                            }
                            bo = bh;
                        case "last":
                            while ((bo = bo.nextSibling)) {
                                if (bo.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case "nth":
                            var bg = bj[2],
                            bi = bj[3];
                            if (bg === 1 && bi === 0) {
                                return true
                            }
                            var bn = bj[0],
                            bm = bh.parentNode;
                            if (bm && (bm.sizcache !== bn || !bh.nodeIndex)) {
                                var bp = 0;
                                for (bo = bm.firstChild; bo; bo = bo.nextSibling) {
                                    if (bo.nodeType === 1) {
                                        bo.nodeIndex = ++bp
                                    }
                                }
                                bm.sizcache = bn
                            }
                            var bk = bh.nodeIndex - bi;
                            if (bg === 0) {
                                return bk === 0
                            } else {
                                return (bk % bg === 0 && bk / bg >= 0)
                            }
                    }
                },
                ID: function (bg, bh) {
                    return bg.nodeType === 1 && bg.getAttribute("id") === bh
                },
                TAG: function (bg, bh) {
                    return (bh === "*" && bg.nodeType === 1) || bg.nodeName.toLowerCase() === bh
                },
                CLASS: function (bg, bh) {
                    return (" " + (bg.className || bg.getAttribute("class")) + " ").indexOf(bh) > -1
                },
                ATTR: function (bh, bi) {
                    var bl = bi[1],
                        bm = a8.attrHandle[bl] ? a8.attrHandle[bl](bh) : bh[bl] != null ? bh[bl] : bh.getAttribute(bl),
                    bg = bm + "",
                    bk = bi[2],
                    bj = bi[4];
                    return bm == null ? bk === "!=" : bk === "=" ? bg === bj : bk === "*=" ? bg.indexOf(bj) >= 0 : bk === "~=" ? (" " + bg + " ").indexOf(bj) >= 0 : !bj ? bg && bm !== false : bk === "!=" ? bg !== bj : bk === "^=" ? bg.indexOf(bj) === 0 : bk === "$=" ? bg.substr(bg.length - bj.length) === bj : bk === "|=" ? bg === bj || bg.substr(0, bj.length + 1) === bj + "-" : false
                },
                POS: function (bh, bj, bg, bl) {
                    var bk = bj[2],
                        bi = a8.setFilters[bk];
                    if (bi) {
                        return bi(bh, bg, bj, bl)
                    }
                }
            }
        };
        var ba = a8.match.POS;
        for (var a3 in a8.match) {
            a8.match[a3] = new RegExp(a8.match[a3].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            a8.leftMatch[a3] = new RegExp(/(^(?:.|\r|\n)*?)/.source + a8.match[a3].source.replace(/\\(\d+)/g, function (bg, bh) {
                return "\\" + (bh - 0 + 1)
            }))
        }
        var bf = function (bh, bg) {
            bh = Array.prototype.slice.call(bh, 0);
            if (bg) {
                bg.push.apply(bg, bh);
                return bg
            }
            return bh
        };
        try {
            Array.prototype.slice.call(x.documentElement.childNodes, 0)[0].nodeType
        } catch (bc) {
            bf = function (bg, bj) {
                var bk = bj || [];
                if (a7.call(bg) === "[object Array]") {
                    Array.prototype.push.apply(bk, bg)
                } else {
                    if (typeof bg.length === "number") {
                        for (var bh = 0, bi = bg.length; bh < bi; bh++) {
                            bk.push(bg[bh])
                        }
                    } else {
                        for (var bh = 0; bg[bh]; bh++) {
                            bk.push(bg[bh])
                        }
                    }
                }
                return bk
            }
        }
        var be;
        if (x.documentElement.compareDocumentPosition) {
            be = function (bg, bh) {
                if (!bg.compareDocumentPosition || !bh.compareDocumentPosition) {
                    if (bg == bh) {
                        aZ = true
                    }
                    return bg.compareDocumentPosition ? -1 : 1
                }
                var bi = bg.compareDocumentPosition(bh) & 4 ? -1 : bg === bh ? 0 : 1;
                if (bi === 0) {
                    aZ = true
                }
                return bi
            }
        } else {
            if ("sourceIndex" in x.documentElement) {
                be = function (bg, bh) {
                    if (!bg.sourceIndex || !bh.sourceIndex) {
                        if (bg == bh) {
                            aZ = true
                        }
                        return bg.sourceIndex ? -1 : 1
                    }
                    var bi = bg.sourceIndex - bh.sourceIndex;
                    if (bi === 0) {
                        aZ = true
                    }
                    return bi
                }
            } else {
                if (x.createRange) {
                    be = function (bh, bi) {
                        if (!bh.ownerDocument || !bi.ownerDocument) {
                            if (bh == bi) {
                                aZ = true
                            }
                            return bh.ownerDocument ? -1 : 1
                        }
                        var bg = bh.ownerDocument.createRange(),
                            bk = bi.ownerDocument.createRange();
                        bg.setStart(bh, 0);
                        bg.setEnd(bh, 0);
                        bk.setStart(bi, 0);
                        bk.setEnd(bi, 0);
                        var bj = bg.compareBoundaryPoints(Range.START_TO_END, bk);
                        if (bj === 0) {
                            aZ = true
                        }
                        return bj
                    }
                }
            }
        }
        function a4(bj) {
            var bh = "",
                bi;
            for (var bg = 0; bj[bg]; bg++) {
                bi = bj[bg];
                if (bi.nodeType === 3 || bi.nodeType === 4) {
                    bh += bi.nodeValue
                } else {
                    if (bi.nodeType !== 8) {
                        bh += a4(bi.childNodes)
                    }
                }
            }
            return bh
        } (function () {
            var bg = x.createElement("div"),
                bh = "script" + (new Date).getTime();
            bg.innerHTML = "<a name='" + bh + "'/>";
            var bi = x.documentElement;
            bi.insertBefore(bg, bi.firstChild);
            if (x.getElementById(bh)) {
                a8.find.ID = function (bm, bj, bk) {
                    if (typeof bj.getElementById !== "undefined" && !bk) {
                        var bl = bj.getElementById(bm[1]);
                        return bl ? bl.id === bm[1] || typeof bl.getAttributeNode !== "undefined" && bl.getAttributeNode("id").nodeValue === bm[1] ? [bl] : H : []
                    }
                };
                a8.filter.ID = function (bk, bl) {
                    var bj = typeof bk.getAttributeNode !== "undefined" && bk.getAttributeNode("id");
                    return bk.nodeType === 1 && bj && bj.nodeValue === bl
                }
            }
            bi.removeChild(bg);
            bi = bg = null
        })();
        (function () {
            var bg = x.createElement("div");
            bg.appendChild(x.createComment(""));
            if (bg.getElementsByTagName("*").length > 0) {
                a8.find.TAG = function (bl, bh) {
                    var bj = bh.getElementsByTagName(bl[1]);
                    if (bl[1] === "*") {
                        var bi = [];
                        for (var bk = 0; bj[bk]; bk++) {
                            if (bj[bk].nodeType === 1) {
                                bi.push(bj[bk])
                            }
                        }
                        bj = bi
                    }
                    return bj
                }
            }
            bg.innerHTML = "<a href='#'></a>";
            if (bg.firstChild && typeof bg.firstChild.getAttribute !== "undefined" && bg.firstChild.getAttribute("href") !== "#") {
                a8.attrHandle.href = function (bh) {
                    return bh.getAttribute("href", 2)
                }
            }
            bg = null
        })();
        if (x.querySelectorAll) {
            (function () {
                var bh = bd,
                    bi = x.createElement("div");
                bi.innerHTML = "<p class='TEST'></p>";
                if (bi.querySelectorAll && bi.querySelectorAll(".TEST").length === 0) {
                    return
                }
                bd = function (bl, bj, bk, bm) {
                    bj = bj || x;
                    if (!bm && bj.nodeType === 9 && !bb(bj)) {
                        try {
                            return bf(bj.querySelectorAll(bl), bk)
                        } catch (bn) { }
                    }
                    return bh(bl, bj, bk, bm)
                };
                for (var bg in bh) {
                    bd[bg] = bh[bg]
                }
                bi = null
            })()
        } (function () {
            var bg = x.createElement("div");
            bg.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!bg.getElementsByClassName || bg.getElementsByClassName("e").length === 0) {
                return
            }
            bg.lastChild.className = "e";
            if (bg.getElementsByClassName("e").length === 1) {
                return
            }
            a8.order.splice(1, 0, "CLASS");
            a8.find.CLASS = function (bj, bh, bi) {
                if (typeof bh.getElementsByClassName !== "undefined" && !bi) {
                    return bh.getElementsByClassName(bj[1])
                }
            };
            bg = null
        })();

        function a5(bo, bm, bl, bp, bn, bg) {
            for (var bh = 0, bj = bp.length; bh < bj; bh++) {
                var bi = bp[bh];
                if (bi) {
                    bi = bi[bo];
                    var bk = false;
                    while (bi) {
                        if (bi.sizcache === bl) {
                            bk = bp[bi.sizset];
                            break
                        }
                        if (bi.nodeType === 1 && !bg) {
                            bi.sizcache = bl;
                            bi.sizset = bh
                        }
                        if (bi.nodeName.toLowerCase() === bm) {
                            bk = bi;
                            break
                        }
                        bi = bi[bo]
                    }
                    bp[bh] = bk
                }
            }
        }
        function a1(bo, bm, bl, bp, bn, bg) {
            for (var bh = 0, bj = bp.length; bh < bj; bh++) {
                var bi = bp[bh];
                if (bi) {
                    bi = bi[bo];
                    var bk = false;
                    while (bi) {
                        if (bi.sizcache === bl) {
                            bk = bp[bi.sizset];
                            break
                        }
                        if (bi.nodeType === 1) {
                            if (!bg) {
                                bi.sizcache = bl;
                                bi.sizset = bh
                            }
                            if (typeof bm !== "string") {
                                if (bi === bm) {
                                    bk = true;
                                    break
                                }
                            } else {
                                if (bd.filter(bm, [bi]).length > 0) {
                                    bk = bi;
                                    break
                                }
                            }
                        }
                        bi = bi[bo]
                    }
                    bp[bh] = bk
                }
            }
        }
        var a6 = x.compareDocumentPosition ?
        function (bg, bh) {
            return !!(bg.compareDocumentPosition(bh) & 16)
        } : function (bg, bh) {
            return bg !== bh && (bg.contains ? bg.contains(bh) : true)
        };
        var bb = function (bg) {
            var bh = (bg ? bg.ownerDocument || bg : 0).documentElement;
            return bh ? bh.nodeName !== "HTML" : false
        };
        var a2 = function (bg, bi) {
            var bl = [],
                bn = "",
                bj, bm = bi.nodeType ? [bi] : bi;
            while ((bj = a8.match.PSEUDO.exec(bg))) {
                bn += bj[0];
                bg = bg.replace(a8.match.PSEUDO, "")
            }
            bg = a8.relative[bg] ? bg + "*" : bg;
            for (var bh = 0, bk = bm.length; bh < bk; bh++) {
                bd(bg, bm[bh], bl)
            }
            return bd.filter(bn, bl)
        };
        e.find = bd;
        e.expr = bd.selectors;
        e.expr[":"] = e.expr.filters;
        e.unique = bd.uniqueSort;
        e.text = a4;
        e.isXMLDoc = bb;
        e.contains = a6;
        return;
        aH.Sizzle = bd
    })();
    var m = /Until$/,
        V = /^(?:parents|prevUntil|prevAll)/,
        az = /,/,
        al = Array.prototype.slice;
    var aG = function (aY, aZ, a1) {
        if (e.isFunction(aZ)) {
            return e.grep(aY, function (a2, a3) {
                return !!aZ.call(a2, a3, a2) === a1
            })
        } else {
            if (aZ.nodeType) {
                return e.grep(aY, function (a2, a3) {
                    return (a2 === aZ) === a1
                })
            } else {
                if (typeof aZ === "string") {
                    var a0 = e.grep(aY, function (a2) {
                        return a2.nodeType === 1
                    });
                    if (aN.test(aZ)) {
                        return e.filter(aZ, a0, !a1)
                    } else {
                        aZ = e.filter(aZ, a0)
                    }
                }
            }
        }
        return e.grep(aY, function (a2, a3) {
            return (e.inArray(a2, aZ) >= 0) === a1
        })
    };
    e.fn.extend({
        find: function (aY) {
            var a2 = this.pushStack("", "find", aY),
                a4 = 0;
            for (var aZ = 0, a0 = this.length; aZ < a0; aZ++) {
                a4 = a2.length;
                e.find(aY, this[aZ], a2);
                if (aZ > 0) {
                    for (var a1 = a4; a1 < a2.length; a1++) {
                        for (var a3 = 0; a3 < a4; a3++) {
                            if (a2[a3] === a2[a1]) {
                                a2.splice(a1--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return a2
        },
        has: function (aZ) {
            var aY = e(aZ);
            return this.filter(function () {
                for (var a0 = 0, a1 = aY.length; a0 < a1; a0++) {
                    if (e.contains(this, aY[a0])) {
                        return true
                    }
                }
            })
        },
        not: function (aY) {
            return this.pushStack(aG(this, aY, false), "not", aY)
        },
        filter: function (aY) {
            return this.pushStack(aG(this, aY, true), "filter", aY)
        },
        is: function (aY) {
            return !!aY && e.filter(aY, this).length > 0
        },
        closest: function (a6, a1) {
            if (e.isArray(a6)) {
                var a4 = [],
                    a5 = this[0],
                    a2, a7 = {},
                    aY;
                if (a5 && a6.length) {
                    for (var aZ = 0, a3 = a6.length; aZ < a3; aZ++) {
                        aY = a6[aZ];
                        if (!a7[aY]) {
                            a7[aY] = e.expr.match.POS.test(aY) ? e(aY, a1 || this.context) : aY
                        }
                    }
                    while (a5 && a5.ownerDocument && a5 !== a1) {
                        for (aY in a7) {
                            a2 = a7[aY];
                            if (a2.jquery ? a2.index(a5) > -1 : e(a5).is(a2)) {
                                a4.push({
                                    selector: aY,
                                    elem: a5
                                });
                                delete a7[aY]
                            }
                        }
                        a5 = a5.parentNode
                    }
                }
                return a4
            }
            var a0 = e.expr.match.POS.test(a6) ? e(a6, a1 || this.context) : null;
            return this.map(function (a8, a9) {
                while (a9 && a9.ownerDocument && a9 !== a1) {
                    if (a0 ? a0.index(a9) > -1 : e(a9).is(a6)) {
                        return a9
                    }
                    a9 = a9.parentNode
                }
                return null
            })
        },
        index: function (aY) {
            if (!aY || typeof aY === "string") {
                return e.inArray(this[0], aY ? e(aY) : this.parent().children())
            }
            return e.inArray(aY.jquery ? aY[0] : aY, this)
        },
        add: function (a0, aY) {
            var a1 = typeof a0 === "string" ? e(a0, aY || this.context) : e.makeArray(a0),
            aZ = e.merge(this.get(), a1);
            return this.pushStack(aF(a1[0]) || aF(aZ[0]) ? aZ : e.unique(aZ))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });

    function aF(aY) {
        return !aY || !aY.parentNode || aY.parentNode.nodeType === 11
    }
    e.each({
        parent: function (aY) {
            var aZ = aY.parentNode;
            return aZ && aZ.nodeType !== 11 ? aZ : null
        },
        parents: function (aY) {
            return e.dir(aY, "parentNode")
        },
        parentsUntil: function (aZ, aY, a0) {
            return e.dir(aZ, "parentNode", a0)
        },
        next: function (aY) {
            return e.nth(aY, 2, "nextSibling")
        },
        prev: function (aY) {
            return e.nth(aY, 2, "previousSibling")
        },
        nextAll: function (aY) {
            return e.dir(aY, "nextSibling")
        },
        prevAll: function (aY) {
            return e.dir(aY, "previousSibling")
        },
        nextUntil: function (aZ, aY, a0) {
            return e.dir(aZ, "nextSibling", a0)
        },
        prevUntil: function (aZ, aY, a0) {
            return e.dir(aZ, "previousSibling", a0)
        },
        siblings: function (aY) {
            return e.sibling(aY.parentNode.firstChild, aY)
        },
        children: function (aY) {
            return e.sibling(aY.firstChild)
        },
        contents: function (aY) {
            return e.nodeName(aY, "iframe") ? aY.contentDocument || aY.contentWindow.document : e.makeArray(aY.childNodes)
        }
    },


    function (aZ, aY) {
        e.fn[aZ] = function (a0, a2) {
            var a1 = e.map(this, aY, a0);
            if (!m.test(aZ)) {
                a2 = a0
            }
            if (a2 && typeof a2 === "string") {
                a1 = e.filter(a2, a1)
            }
            a1 = this.length > 1 ? e.unique(a1) : a1;
            if ((this.length > 1 || az.test(a2)) && V.test(aZ)) {
                a1 = a1.reverse()
            }
            return this.pushStack(a1, aZ, al.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function (aY, a0, aZ) {
            if (aZ) {
                aY = ":not(" + aY + ")"
            }
            return e.find.matches(aY, a0)
        },
        dir: function (a2, a0, aZ) {
            var aY = [],
                a1 = a2[a0];
            while (a1 && a1.nodeType !== 9 && (aZ === H || a1.nodeType !== 1 || !e(a1).is(aZ))) {
                if (a1.nodeType === 1) {
                    aY.push(a1)
                }
                a1 = a1[a0]
            }
            return aY
        },
        nth: function (aY, aZ, a0, a1) {
            aZ = aZ || 1;
            var a2 = 0;
            for (; aY; aY = aY[a0]) {
                if (aY.nodeType === 1 && ++a2 === aZ) {
                    break
                }
            }
            return aY
        },
        sibling: function (a0, aZ) {
            var aY = [];
            for (; a0; a0 = a0.nextSibling) {
                if (a0.nodeType === 1 && a0 !== aZ) {
                    aY.push(a0)
                }
            }
            return aY
        }
    });
    var h = / jQuery\d+="(?:\d+|null)"/g,
        o = /^\s+/,
        ap = /(<([\w:]+)[^>]*?)\/>/g,
        aJ = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
        ag = /<([\w:]+)/,
        W = /<tbody/i,
        M = /<|&#?\w+;/,
        s = /<script|<object|<embed|<option|<style/i,
        I = /checked\s*(?:[^=]|=\s*.checked.)/i,
        d = function (aZ, a0, aY) {
            return aJ.test(aY) ? aZ : a0 + "></" + aY + ">"
        },
        av = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    av.optgroup = av.option;
    av.tbody = av.tfoot = av.colgroup = av.caption = av.thead;
    av.th = av.td;
    if (!e.support.htmlSerialize) {
        av._default = [1, "div<div>", "</div>"]
    }
    e.fn.extend({
        text: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a0) {
                    var aZ = e(this);
                    aZ.text(aY.call(this, a0, aZ.text()))
                })
            }
            if (typeof aY !== "object" && aY !== H) {
                return this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(aY))
            }
            return e.text(this)
        },
        wrapAll: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (a0) {
                    e(this).wrapAll(aY.call(this, a0))
                })
            }
            if (this[0]) {
                var aZ = e(aY, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    aZ.insertBefore(this[0])
                }
                aZ.map(function () {
                    var a0 = this;
                    while (a0.firstChild && a0.firstChild.nodeType === 1) {
                        a0 = a0.firstChild
                    }
                    return a0
                }).append(this)
            }
            return this
        },
        wrapInner: function (aY) {
            if (e.isFunction(aY)) {
                return this.each(function (aZ) {
                    e(this).wrapInner(aY.call(this, aZ))
                })
            }
            return this.each(function () {
                var aZ = e(this),
                    a0 = aZ.contents();
                if (a0.length) {
                    a0.wrapAll(aY)
                } else {
                    aZ.append(aY)
                }
            })
        },
        wrap: function (aY) {
            return this.each(function () {
                e(this).wrapAll(aY)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!e.nodeName(this, "body")) {
                    e(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (aY) {
                if (this.nodeType === 1) {
                    this.appendChild(aY)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (aY) {
                if (this.nodeType === 1) {
                    this.insertBefore(aY, this.firstChild)
                }
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (aZ) {
                    this.parentNode.insertBefore(aZ, this)
                })
            } else {
                if (arguments.length) {
                    var aY = e(arguments[0]);
                    aY.push.apply(aY, this.toArray());
                    return this.pushStack(aY, "before", arguments)
                }
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (aZ) {
                    this.parentNode.insertBefore(aZ, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var aY = this.pushStack(this, "after", arguments);
                    aY.push.apply(aY, e(arguments[0]).toArray());
                    return aY
                }
            }
        },
        remove: function (aZ, aY) {
            for (var a1 = 0, a0;
            (a0 = this[a1]) != null; a1++) {
                if (!aZ || e.filter(aZ, [a0]).length) {
                    if (!aY && a0.nodeType === 1) {
                        e.cleanData(a0.getElementsByTagName("*"));
                        e.cleanData([a0])
                    }
                    if (a0.parentNode) {
                        a0.parentNode.removeChild(a0)
                    }
                }
            }
            return this
        },
        empty: function () {
            for (var aZ = 0, aY;
            (aY = this[aZ]) != null; aZ++) {
                if (aY.nodeType === 1) {
                    e.cleanData(aY.getElementsByTagName("*"))
                }
                while (aY.firstChild) {
                    aY.removeChild(aY.firstChild)
                }
            }
            return this
        },
        clone: function (aY) {
            var aZ = this.map(function () {
                if (!e.support.noCloneEvent && !e.isXMLDoc(this)) {
                    var a1 = this.outerHTML,
                        a0 = this.ownerDocument;
                    if (!a1) {
                        var a2 = a0.createElement("div");
                        a2.appendChild(this.cloneNode(true));
                        a1 = a2.innerHTML
                    }
                    return e.clean([a1.replace(h, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(o, "")], a0)[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (aY === true) {
                aT(this, aZ);
                aT(this.find("*"), aZ.find("*"))
            }
            return aZ
        },
        html: function (aY) {
            if (aY === H) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(h, "") : null
            } else {
                if (typeof aY === "string" && !s.test(aY) && (e.support.leadingWhitespace || !o.test(aY)) && !av[(ag.exec(aY) || ["", ""])[1].toLowerCase()]) {
                    aY = aY.replace(ap, d);
                    try {
                        for (var aZ = 0, a0 = this.length; aZ < a0; aZ++) {
                            if (this[aZ].nodeType === 1) {
                                e.cleanData(this[aZ].getElementsByTagName("*"));
                                this[aZ].innerHTML = aY
                            }
                        }
                    } catch (a1) {
                        this.empty().append(aY)
                    }
                } else {
                    if (e.isFunction(aY)) {
                        this.each(function (a2) {
                            var a3 = e(this),
                                a4 = a3.html();
                            a3.empty().append(function () {
                                return aY.call(this, a2, a4)
                            })
                        })
                    } else {
                        this.empty().append(aY)
                    }
                }
            }
            return this
        },
        replaceWith: function (aY) {
            if (this[0] && this[0].parentNode) {
                if (e.isFunction(aY)) {
                    return this.each(function (aZ) {
                        var a0 = e(this),
                            a1 = a0.html();
                        a0.replaceWith(aY.call(this, aZ, a1))
                    })
                }
                if (typeof aY !== "string") {
                    aY = e(aY).detach()
                }
                return this.each(function () {
                    var a0 = this.nextSibling,
                        aZ = this.parentNode;
                    e(this).remove();
                    if (a0) {
                        e(a0).before(aY)
                    } else {
                        e(aZ).append(aY)
                    }
                })
            } else {
                return this.pushStack(e(e.isFunction(aY) ? aY() : aY), "replaceWith", aY)
            }
        },
        detach: function (aY) {
            return this.remove(aY, true)
        },
        domManip: function (a9, aZ, a1) {
            var a7, a3, aY = a9[0],
                a8 = [],
                a4, a6;
            if (!e.support.checkClone && arguments.length === 3 && typeof aY === "string" && I.test(aY)) {
                return this.each(function () {
                    e(this).domManip(a9, aZ, a1, true)
                })
            }
            if (e.isFunction(aY)) {
                return this.each(function (bb) {
                    var ba = e(this);
                    a9[0] = aY.call(this, bb, aZ ? ba.html() : H);
                    ba.domManip(a9, aZ, a1)
                })
            }
            if (this[0]) {
                a6 = aY && aY.parentNode;
                if (e.support.parentNode && a6 && a6.nodeType === 11 && a6.childNodes.length === this.length) {
                    a7 = {
                        fragment: a6
                    }
                } else {
                    a7 = P(a9, this, a8)
                }
                a4 = a7.fragment;
                if (a4.childNodes.length === 1) {
                    a3 = a4 = a4.firstChild
                } else {
                    a3 = a4.firstChild
                }
                if (a3) {
                    aZ = aZ && e.nodeName(a3, "tr");
                    for (var a0 = 0, a2 = this.length; a0 < a2; a0++) {
                        a1.call(aZ ? a5(this[a0], a3) : this[a0], a0 > 0 || a7.cacheable || this.length > 1 ? a4.cloneNode(true) : a4)
                    }
                }
                if (a8.length) {
                    e.each(a8, D)
                }
            }
            return this;

            function a5(ba, bb) {
                return e.nodeName(ba, "table") ? (ba.getElementsByTagName("tbody")[0] || ba.appendChild(ba.ownerDocument.createElement("tbody"))) : ba
            }
        }
    });

    function aT(aY, a0) {
        var aZ = 0;
        a0.each(function () {
            if (this.nodeName !== (aY[aZ] && aY[aZ].nodeName)) {
                return
            }
            var a1 = e.data(aY[aZ++]),
                a2 = e.data(this, a1),
                a3 = a1 && a1.events;
            if (a3) {
                delete a2.handle;
                a2.events = {};
                for (var a4 in a3) {
                    for (var a5 in a3[a4]) {
                        e.event.add(this, a4, a3[a4][a5], a3[a4][a5].data)
                    }
                }
            }
        })
    }
    function P(a4, a1, a2) {
        var aZ, a0, aY, a3 = (a1 && a1[0] ? a1[0].ownerDocument || a1[0] : x);
        if (a4.length === 1 && typeof a4[0] === "string" && a4[0].length < 512 && a3 === x && !s.test(a4[0]) && (e.support.checkClone || !I.test(a4[0]))) {
            a0 = true;
            aY = e.fragments[a4[0]];
            if (aY) {
                if (aY !== 1) {
                    aZ = aY
                }
            }
        }
        if (!aZ) {
            aZ = a3.createDocumentFragment();
            e.clean(a4, a3, aZ, a2)
        }
        if (a0) {
            e.fragments[a4[0]] = aY ? aZ : 1
        }
        return {
            fragment: aZ,
            cacheable: a0
        }
    }
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },


    function (aY, aZ) {
        e.fn[aY] = function (a0) {
            var a3 = [],
                a5 = e(a0),
                a4 = this.length === 1 && this[0].parentNode;
            if (a4 && a4.nodeType === 11 && a4.childNodes.length === 1 && a5.length === 1) {
                a5[aZ](this[0]);
                return this
            } else {
                for (var a1 = 0, a2 = a5.length; a1 < a2; a1++) {
                    var a6 = (a1 > 0 ? this.clone(true) : this).get();
                    e.fn[aZ].apply(e(a5[a1]), a6);
                    a3 = a3.concat(a6)
                }
                return this.pushStack(a3, aY, a5.selector)
            }
        }
    });
    e.extend({
        clean: function (aZ, aY, a7, a4) {
            aY = aY || x;
            if (typeof aY.createElement === "undefined") {
                aY = aY.ownerDocument || aY[0] && aY[0].ownerDocument || x
            }
            var bb = [];
            for (var a5 = 0, a1;
            (a1 = aZ[a5]) != null; a5++) {
                if (typeof a1 === "number") {
                    a1 += ""
                }
                if (!a1) {
                    continue
                }
                if (typeof a1 === "string" && !M.test(a1)) {
                    a1 = aY.createTextNode(a1)
                } else {
                    if (typeof a1 === "string") {
                        a1 = a1.replace(ap, d);
                        var a6 = (ag.exec(a1) || ["", ""])[1].toLowerCase(),
                            a8 = av[a6] || av._default,
                            a9 = a8[0],
                            a0 = aY.createElement("div");
                        a0.innerHTML = a8[1] + a1 + a8[2];
                        while (a9--) {
                            a0 = a0.lastChild
                        }
                        if (!e.support.tbody) {
                            var ba = W.test(a1),
                                a2 = a6 === "table" && !ba ? a0.firstChild && a0.firstChild.childNodes : a8[1] === "<table>" && !ba ? a0.childNodes : [];
                            for (var a3 = a2.length - 1; a3 >= 0; --a3) {
                                if (e.nodeName(a2[a3], "tbody") && !a2[a3].childNodes.length) {
                                    a2[a3].parentNode.removeChild(a2[a3])
                                }
                            }
                        }
                        if (!e.support.leadingWhitespace && o.test(a1)) {
                            a0.insertBefore(aY.createTextNode(o.exec(a1)[0]), a0.firstChild)
                        }
                        a1 = a0.childNodes
                    }
                }
                if (a1.nodeType) {
                    bb.push(a1)
                } else {
                    bb = e.merge(bb, a1)
                }
            }
            if (a7) {
                for (var a5 = 0; bb[a5]; a5++) {
                    if (a4 && e.nodeName(bb[a5], "script") && (!bb[a5].type || bb[a5].type.toLowerCase() === "text/javascript")) {
                        a4.push(bb[a5].parentNode ? bb[a5].parentNode.removeChild(bb[a5]) : bb[a5])
                    } else {
                        if (bb[a5].nodeType === 1) {
                            bb.splice.apply(bb, [a5 + 1, 0].concat(e.makeArray(bb[a5].getElementsByTagName("script"))))
                        }
                        a7.appendChild(bb[a5])
                    }
                }
            }
            return bb
        },
        cleanData: function (a5) {
            var aY, a2, a3 = e.cache,
                a6 = e.event.special,
                a1 = e.support.deleteExpando;
            for (var aZ = 0, a4;
            (a4 = a5[aZ]) != null; aZ++) {
                a2 = a4[e.expando];
                if (a2) {
                    aY = a3[a2];
                    if (aY.events) {
                        for (var a0 in aY.events) {
                            if (a6[a0]) {
                                e.event.remove(a4, a0)
                            } else {
                                aM(a4, a0, aY.handle)
                            }
                        }
                    }
                    if (a1) {
                        delete a4[e.expando]
                    } else {
                        if (a4.removeAttribute) {
                            a4.removeAttribute(e.expando)
                        }
                    }
                    delete a3[a2]
                }
            }
        }
    });
    var aE = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        ac = /alpha\([^)]*\)/,
        w = /opacity=([^)]*)/,
        aw = /float/i,
        v = /-([a-z])/ig,
        aX = /([A-Z])/g,
        X = /^-?\d+(?:px)?$/i,
        y = /^-?\d/,
        aC = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        B = ["Left", "Right"],
        aP = ["Top", "Bottom"],
        ai = x.defaultView && x.defaultView.getComputedStyle,
        aW = e.support.cssFloat ? "cssFloat" : "styleFloat",
    U = function (aY, aZ) {
        return aZ.toUpperCase()
    };
    e.fn.css = function (aY, aZ) {
        return ah(this, aY, aZ, true, function (a1, a2, a0) {
            if (a0 === H) {
                return e.curCSS(a1, a2)
            }
            if (typeof a0 === "number" && !aE.test(a2)) {
                a0 += "px"
            }
            e.style(a1, a2, a0)
        })
    };
    e.extend({
        style: function (a0, a4, aY) {
            if (!a0 || a0.nodeType === 3 || a0.nodeType === 8) {
                return H
            }
            if ((a4 === "width" || a4 === "height") && parseFloat(aY) < 0) {
                aY = H
            }
            var aZ = a0.style || a0,
                a2 = aY !== H;
            if (!e.support.opacity && a4 === "opacity") {
                if (a2) {
                    aZ.zoom = 1;
                    var a3 = parseInt(aY, 10) + "" === "NaN" ? "" : "alpha(opacity=" + aY * 100 + ")";
                    var a1 = aZ.filter || e.curCSS(a0, "filter") || "";
                    aZ.filter = ac.test(a1) ? a1.replace(ac, a3) : a3
                }
                return aZ.filter && aZ.filter.indexOf("opacity=") >= 0 ? (parseFloat(w.exec(aZ.filter)[1]) / 100) + "" : ""
            }
            if (aw.test(a4)) {
                a4 = aW
            }
            a4 = a4.replace(v, U);
            if (a2) {
                aZ[a4] = aY
            }
            return aZ[a4]
        },
        css: function (aY, a5, aZ, a2) {
            if (a5 === "width" || a5 === "height") {
                var a0, a4 = aC,
                    a1 = a5 === "width" ? B : aP;

                function a3() {
                    a0 = a5 === "width" ? aY.offsetWidth : aY.offsetHeight;
                    if (a2 === "border") {
                        return
                    }
                    e.each(a1, function () {
                        if (!a2) {
                            a0 -= parseFloat(e.curCSS(aY, "padding" + this, true)) || 0
                        }
                        if (a2 === "margin") {
                            a0 += parseFloat(e.curCSS(aY, "margin" + this, true)) || 0
                        } else {
                            a0 -= parseFloat(e.curCSS(aY, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                if (aY.offsetWidth !== 0) {
                    a3()
                } else {
                    e.swap(aY, a4, a3)
                }
                return Math.max(0, Math.round(a0))
            }
            return e.curCSS(aY, a5, aZ)
        },
        curCSS: function (aZ, a7, a0) {
            var a2, aY = aZ.style,
                a1;
            if (!e.support.opacity && a7 === "opacity" && aZ.currentStyle) {
                a2 = w.test(aZ.currentStyle.filter || "") ? (parseFloat(RegExp.$1) / 100) + "" : "";
                return a2 === "" ? "1" : a2
            }
            if (aw.test(a7)) {
                a7 = aW
            }
            if (!a0 && aY && aY[a7]) {
                a2 = aY[a7]
            } else {
                if (ai) {
                    if (aw.test(a7)) {
                        a7 = "float"
                    }
                    a7 = a7.replace(aX, "-$1").toLowerCase();
                    var a8 = aZ.ownerDocument.defaultView;
                    if (!a8) {
                        return null
                    }
                    var a5 = a8.getComputedStyle(aZ, null);
                    if (a5) {
                        a2 = a5.getPropertyValue(a7)
                    }
                    if (a7 === "opacity" && a2 === "") {
                        a2 = "1"
                    }
                } else {
                    if (aZ.currentStyle) {
                        var a3 = a7.replace(v, U);
                        a2 = aZ.currentStyle[a7] || aZ.currentStyle[a3];
                        if (!X.test(a2) && y.test(a2)) {
                            var a4 = aY.left,
                                a6 = aZ.runtimeStyle.left;
                            aZ.runtimeStyle.left = aZ.currentStyle.left;
                            aY.left = a3 === "fontSize" ? "1em" : (a2 || 0);
                            a2 = aY.pixelLeft + "px";
                            aY.left = a4;
                            aZ.runtimeStyle.left = a6
                        }
                    }
                }
            }
            return a2
        },
        swap: function (a0, a1, aY) {
            var a2 = {};
            for (var aZ in a1) {
                a2[aZ] = a0.style[aZ];
                a0.style[aZ] = a1[aZ]
            }
            aY.call(a0);
            for (var aZ in a1) {
                a0.style[aZ] = a2[aZ]
            }
        }
    });
    if (e.expr && e.expr.filters) {
        e.expr.filters.hidden = function (a1) {
            var a0 = a1.offsetWidth,
                aY = a1.offsetHeight,
                aZ = a1.nodeName.toLowerCase() === "tr";
            return a0 === 0 && aY === 0 && !aZ ? true : a0 > 0 && aY > 0 && !aZ ? false : e.curCSS(a1, "display") === "none"
        };
        e.expr.filters.visible = function (aY) {
            return !e.expr.filters.hidden(aY)
        }
    }
    var C = A(),
        aK = /<script(.|\s)*?\/script>/gi,
        Z = /select|textarea/i,
        ay = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
        z = /=\?(&|$)/,
        L = /\?/,
        an = /(\?|&)_=.*?(&|$)/,
        ak = /^(\w+:)?\/\/([^\/?#]+)/,
        l = /%20/g,
        c = e.fn.load;
    e.fn.extend({
        load: function (a2, a0, a1) {
            if (typeof a2 !== "string") {
                return c.call(this, a2)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var aY = a2.indexOf(" ");
            if (aY >= 0) {
                var aZ = a2.slice(aY, a2.length);
                a2 = a2.slice(0, aY)
            }
            var a3 = "GET";
            if (a0) {
                if (e.isFunction(a0)) {
                    a1 = a0;
                    a0 = null
                } else {
                    if (typeof a0 === "object") {
                        a0 = e.param(a0, e.ajaxSettings.traditional);
                        a3 = "POST"
                    }
                }
            }
            var a4 = this;
            e.ajax({
                url: a2,
                type: a3,
                dataType: "html",
                data: a0,
                complete: function (a5, a6) {
                    if (a6 === "success" || a6 === "notmodified") {
                        a4.html(aZ ? e("<div />").append(a5.responseText.replace(aK, "")).find(aZ) : a5.responseText)
                    }
                    if (a1) {
                        a4.each(a1, [a5.responseText, a6, a5])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return e.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Z.test(this.nodeName) || ay.test(this.type))
            }).map(function (aY, a0) {
                var aZ = e(this).val();
                return aZ == null ? null : e.isArray(aZ) ? e.map(aZ, function (a1, a2) {
                    return {
                        name: a0.name,
                        value: a1
                    }
                }) : {
                    name: a0.name,
                    value: aZ
                }
            }).get()
        }
    });
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (aY, aZ) {
        e.fn[aZ] = function (a0) {
            return this.bind(aZ, a0)
        }
    });
    e.extend({
        get: function (aY, aZ, a1, a0) {
            if (e.isFunction(aZ)) {
                a0 = a0 || a1;
                a1 = aZ;
                aZ = null
            }
            return e.ajax({
                type: "GET",
                url: aY,
                data: aZ,
                success: a1,
                dataType: a0
            })
        },
        getScript: function (aZ, aY) {
            return e.get(aZ, null, aY, "script")
        },
        getJSON: function (aY, aZ, a0) {
            return e.get(aY, aZ, a0, "json")
        },
        post: function (aY, aZ, a1, a0) {
            if (e.isFunction(aZ)) {
                a0 = a0 || a1;
                a1 = aZ;
                aZ = {}
            }
            return e.ajax({
                type: "POST",
                url: aY,
                data: aZ,
                success: a1,
                dataType: a0
            })
        },
        ajaxSetup: function (aY) {
            e.extend(e.ajaxSettings, aY)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: aH.XMLHttpRequest && (aH.location.protocol !== "file:" || !aH.ActiveXObject) ?
            function () {
                return new aH.XMLHttpRequest()
            } : function () {
                try {
                    return new aH.ActiveXObject("Microsoft.XMLHTTP")
                } catch (aY) { }
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function (bd) {
            var a4 = e.extend(true, {},
            e.ajaxSettings, bd);
            var a0, bg, aY, a5 = bd && bd.context || a4,
                be = a4.type.toUpperCase();
            if (a4.data && a4.processData && typeof a4.data !== "string") {
                a4.data = e.param(a4.data, a4.traditional)
            }
            if (a4.dataType === "jsonp") {
                if (be === "GET") {
                    if (!z.test(a4.url)) {
                        a4.url += (L.test(a4.url) ? "&" : "?") + (a4.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!a4.data || !z.test(a4.data)) {
                        a4.data = (a4.data ? a4.data + "&" : "") + (a4.jsonp || "callback") + "=?"
                    }
                }
                a4.dataType = "json"
            }
            if (a4.dataType === "json" && (a4.data && z.test(a4.data) || z.test(a4.url))) {
                a0 = a4.jsonpCallback || ("jsonp" + C++);
                if (a4.data) {
                    a4.data = (a4.data + "").replace(z, "=" + a0 + "$1")
                }
                a4.url = a4.url.replace(z, "=" + a0 + "$1");
                a4.dataType = "script";
                aH[a0] = aH[a0] ||
                function (bk) {
                    aY = bk;
                    a7();
                    a2();
                    aH[a0] = H;
                    try {
                        delete aH[a0]
                    } catch (bl) { }
                    if (ba) {
                        ba.removeChild(a9)
                    }
                }
            }
            if (a4.dataType === "script" && a4.cache === null) {
                a4.cache = false
            }
            if (a4.cache === false && be === "GET") {
                var a6 = A();
                var bj = a4.url.replace(an, "$1_=" + a6 + "$2");
                a4.url = bj + ((bj === a4.url) ? (L.test(a4.url) ? "&" : "?") + "_=" + a6 : "")
            }
            if (a4.data && be === "GET") {
                a4.url += (L.test(a4.url) ? "&" : "?") + a4.data
            }
            if (a4.global && !e.active++) {
                e.event.trigger("ajaxStart")
            }
            var a3 = ak.exec(a4.url),
                aZ = a3 && (a3[1] && a3[1] !== location.protocol || a3[2] !== location.host);
            if (a4.dataType === "script" && be === "GET" && aZ) {
                var ba = x.getElementsByTagName("head")[0] || x.documentElement;
                var a9 = x.createElement("script");
                a9.src = a4.url;
                if (a4.scriptCharset) {
                    a9.charset = a4.scriptCharset
                }
                if (!a0) {
                    var a1 = false;
                    a9.onload = a9.onreadystatechange = function () {
                        if (!a1 && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            a1 = true;
                            a7();
                            a2();
                            a9.onload = a9.onreadystatechange = null;
                            if (ba && a9.parentNode) {
                                ba.removeChild(a9)
                            }
                        }
                    }
                }
                ba.insertBefore(a9, ba.firstChild);
                return H
            }
            var bc = false;
            var bi = a4.xhr();
            if (!bi) {
                return
            }
            if (a4.username) {
                bi.open(be, a4.url, a4.async, a4.username, a4.password)
            } else {
                bi.open(be, a4.url, a4.async)
            }
            try {
                if (a4.data || bd && bd.contentType) {
                    bi.setRequestHeader("Content-Type", a4.contentType)
                }
                if (a4.ifModified) {
                    if (e.lastModified[a4.url]) {
                        bi.setRequestHeader("If-Modified-Since", e.lastModified[a4.url])
                    }
                    if (e.etag[a4.url]) {
                        bi.setRequestHeader("If-None-Match", e.etag[a4.url])
                    }
                }
                if (!aZ) {
                    bi.setRequestHeader("X-Requested-With", "XMLHttpRequest")
                }
                bi.setRequestHeader("Accept", a4.dataType && a4.accepts[a4.dataType] ? a4.accepts[a4.dataType] + ", */*" : a4.accepts._default)
            } catch (bf) { }
            if (a4.beforeSend && a4.beforeSend.call(a5, bi, a4) === false) {
                if (a4.global && ! --e.active) {
                    e.event.trigger("ajaxStop")
                }
                bi.abort();
                return false
            }
            if (a4.global) {
                bh("ajaxSend", [bi, a4])
            }
            var a8 = bi.onreadystatechange = function (bk) {
                if (!bi || bi.readyState === 0 || bk === "abort") {
                    if (!bc) {
                        a2()
                    }
                    bc = true;
                    if (bi) {
                        bi.onreadystatechange = e.noop
                    }
                } else {
                    if (!bc && bi && (bi.readyState === 4 || bk === "timeout")) {
                        bc = true;
                        bi.onreadystatechange = e.noop;
                        bg = bk === "timeout" ? "timeout" : !e.httpSuccess(bi) ? "error" : a4.ifModified && e.httpNotModified(bi, a4.url) ? "notmodified" : "success";
                        var bm;
                        if (bg === "success") {
                            try {
                                aY = e.httpData(bi, a4.dataType, a4)
                            } catch (bl) {
                                bg = "parsererror";
                                bm = bl
                            }
                        }
                        if (bg === "success" || bg === "notmodified") {
                            if (!a0) {
                                a7()
                            }
                        } else {
                            e.handleError(a4, bi, bg, bm)
                        }
                        a2();
                        if (bk === "timeout") {
                            bi.abort()
                        }
                        if (a4.async) {
                            bi = null
                        }
                    }
                }
            };
            try {
                var bb = bi.abort;
                bi.abort = function () {
                    if (bi) {
                        bb.call(bi)
                    }
                    a8("abort")
                }
            } catch (bf) { }
            if (a4.async && a4.timeout > 0) {
                setTimeout(function () {
                    if (bi && !bc) {
                        a8("timeout")
                    }
                },
                a4.timeout)
            }
            try {
                bi.send(be === "POST" || be === "PUT" || be === "DELETE" ? a4.data : null)
            } catch (bf) {
                e.handleError(a4, bi, null, bf);
                a2()
            }
            if (!a4.async) {
                a8()
            }
            function a7() {
                if (a4.success) {
                    a4.success.call(a5, aY, bg, bi)
                }
                if (a4.global) {
                    bh("ajaxSuccess", [bi, a4])
                }
            }
            function a2() {
                if (a4.complete) {
                    a4.complete.call(a5, bi, bg)
                }
                if (a4.global) {
                    bh("ajaxComplete", [bi, a4])
                }
                if (a4.global && ! --e.active) {
                    e.event.trigger("ajaxStop")
                }
            }
            function bh(bl, bk) {
                (a4.context ? e(a4.context) : e.event).trigger(bl, bk)
            }
            return bi
        },
        handleError: function (aZ, aY, a0, a1) {
            if (aZ.error) {
                aZ.error.call(aZ.context || aZ, aY, a0, a1)
            }
            if (aZ.global) {
                (aZ.context ? e(aZ.context) : e.event).trigger("ajaxError", [aY, aZ, a1])
            }
        },
        active: 0,
        httpSuccess: function (aZ) {
            try {
                return !aZ.status && location.protocol === "file:" || (aZ.status >= 200 && aZ.status < 300) || aZ.status === 304 || aZ.status === 1223 || aZ.status === 0
            } catch (aY) { }
            return false
        },
        httpNotModified: function (aY, aZ) {
            var a1 = aY.getResponseHeader("Last-Modified"),
                a0 = aY.getResponseHeader("Etag");
            if (a1) {
                e.lastModified[aZ] = a1
            }
            if (a0) {
                e.etag[aZ] = a0
            }
            return aY.status === 304 || aY.status === 0
        },
        httpData: function (aY, a2, a3) {
            var aZ = aY.getResponseHeader("content-type") || "",
                a0 = a2 === "xml" || !a2 && aZ.indexOf("xml") >= 0,
                a1 = a0 ? aY.responseXML : aY.responseText;
            if (a0 && a1.documentElement.nodeName === "parsererror") {
                e.error("parsererror")
            }
            if (a3 && a3.dataFilter) {
                a1 = a3.dataFilter(a1, a2)
            }
            if (typeof a1 === "string") {
                if (a2 === "json" || !a2 && aZ.indexOf("json") >= 0) {
                    a1 = e.parseJSON(a1)
                } else {
                    if (a2 === "script" || !a2 && aZ.indexOf("javascript") >= 0) {
                        e.globalEval(a1)
                    }
                }
            }
            return a1
        },
        param: function (a0, a3) {
            var a1 = [];
            if (a3 === H) {
                a3 = e.ajaxSettings.traditional
            }
            if (e.isArray(a0) || a0.jquery) {
                e.each(a0, function () {
                    aY(this.name, this.value)
                })
            } else {
                for (var aZ in a0) {
                    a2(aZ, a0[aZ])
                }
            }
            return a1.join("&").replace(l, "+");

            function a2(a4, a5) {
                if (e.isArray(a5)) {
                    e.each(a5, function (a6, a7) {
                        if (a3 || /\[\]$/.test(a4)) {
                            aY(a4, a7)
                        } else {
                            a2(a4 + "[" + (typeof a7 === "object" || e.isArray(a7) ? a6 : "") + "]", a7)
                        }
                    })
                } else {
                    if (!a3 && a5 != null && typeof a5 === "object") {
                        e.each(a5, function (a6, a7) {
                            a2(a4 + "[" + a6 + "]", a7)
                        })
                    } else {
                        aY(a4, a5)
                    }
                }
            }
            function aY(a4, a5) {
                a5 = e.isFunction(a5) ? a5() : a5;
                a1[a1.length] = encodeURIComponent(a4) + "=" + encodeURIComponent(a5)
            }
        }
    });
    var T = {},
        R = /toggle|show|hide/,
        aO = /^([+-]=)?([\d+-.]+)(.*)$/,
        aj, aU = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ];
    e.fn.extend({
        show: function (a7, a0) {
            if (a7 || a7 === 0) {
                return this.animate(t("show", 3), a7, a0)
            } else {
                for (var aY = 0, a1 = this.length; aY < a1; aY++) {
                    var a4 = e.data(this[aY], "olddisplay");
                    this[aY].style.display = a4 || "";
                    if (e.css(this[aY], "display") === "none") {
                        var a6 = this[aY].nodeName,
                            a5;
                        if (T[a6]) {
                            a5 = T[a6]
                        } else {
                            var aZ = e("<" + a6 + " />").appendTo("body");
                            a5 = aZ.css("display");
                            if (a5 === "none") {
                                a5 = "block"
                            }
                            aZ.remove();
                            T[a6] = a5
                        }
                        e.data(this[aY], "olddisplay", a5)
                    }
                }
                for (var a2 = 0, a3 = this.length; a2 < a3; a2++) {
                    this[a2].style.display = e.data(this[a2], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (a4, a0) {
            if (a4 || a4 === 0) {
                return this.animate(t("hide", 3), a4, a0)
            } else {
                for (var aY = 0, a1 = this.length; aY < a1; aY++) {
                    var a3 = e.data(this[aY], "olddisplay");
                    if (!a3 && a3 !== "none") {
                        e.data(this[aY], "olddisplay", e.css(this[aY], "display"))
                    }
                }
                for (var aZ = 0, a2 = this.length; aZ < a2; aZ++) {
                    this[aZ].style.display = "none"
                }
                return this
            }
        },
        _toggle: e.fn.toggle,
        toggle: function (aZ, a0) {
            var aY = typeof aZ === "boolean";
            if (e.isFunction(aZ) && e.isFunction(a0)) {
                this._toggle.apply(this, arguments)
            } else {
                if (aZ == null || aY) {
                    this.each(function () {
                        var a1 = aY ? aZ : e(this).is(":hidden");
                        e(this)[a1 ? "show" : "hide"]()
                    })
                } else {
                    this.animate(t("toggle", 3), aZ, a0)
                }
            }
            return this
        },
        fadeTo: function (aZ, aY, a0) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: aY
            },
            aZ, a0)
        },
        animate: function (aZ, a0, a1, a2) {
            var aY = e.speed(a0, a1, a2);
            if (e.isEmptyObject(aZ)) {
                return this.each(aY.complete)
            }
            return this[aY.queue === false ? "each" : "queue"](function () {
                var a4 = e.extend({},
                aY),
                    a7, a5 = this.nodeType === 1 && e(this).is(":hidden"),
                    a3 = this;
                for (a7 in aZ) {
                    var a6 = a7.replace(v, U);
                    if (a7 !== a6) {
                        aZ[a6] = aZ[a7];
                        delete aZ[a7];
                        a7 = a6
                    }
                    if (aZ[a7] === "hide" && a5 || aZ[a7] === "show" && !a5) {
                        return a4.complete.call(this)
                    }
                    if ((a7 === "height" || a7 === "width") && this.style) {
                        a4.display = e.css(this, "display");
                        a4.overflow = this.style.overflow
                    }
                    if (e.isArray(aZ[a7])) {
                        (a4.specialEasing = a4.specialEasing || {})[a7] = aZ[a7][1];
                        aZ[a7] = aZ[a7][0]
                    }
                }
                if (a4.overflow != null) {
                    this.style.overflow = "hidden"
                }
                a4.curAnim = e.extend({},
                aZ);
                e.each(aZ, function (bd, bb) {
                    var be = new e.fx(a3, a4, bd);
                    if (R.test(bb)) {
                        be[bb === "toggle" ? a5 ? "show" : "hide" : bb](aZ)
                    } else {
                        var bc = aO.exec(bb),
                            ba = be.cur(true) || 0;
                        if (bc) {
                            var a8 = parseFloat(bc[2]),
                                a9 = bc[3] || "px";
                            if (a9 !== "px") {
                                a3.style[bd] = (a8 || 1) + a9;
                                ba = ((a8 || 1) / be.cur(true)) * ba;
                                a3.style[bd] = ba + a9
                            }
                            if (bc[1]) {
                                a8 = ((bc[1] === "-=" ? -1 : 1) * a8) + ba
                            }
                            be.custom(ba, a8, a9)
                        } else {
                            be.custom(ba, bb, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (aZ, a0) {
            var aY = e.timers;
            if (aZ) {
                this.queue([])
            }
            this.each(function () {
                for (var a1 = aY.length - 1; a1 >= 0; a1--) {
                    if (aY[a1].elem === this) {
                        if (a0) {
                            aY[a1](true)
                        }
                        aY.splice(a1, 1)
                    }
                }
            });
            if (!a0) {
                this.dequeue()
            }
            return this
        }
    });
    e.each({
        slideDown: t("show", 1),
        slideUp: t("hide", 1),
        slideToggle: t("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    },


    function (aY, aZ) {
        e.fn[aY] = function (a1, a0) {
            return this.animate(aZ, a1, a0)
        }
    });
    e.extend({
        speed: function (aY, a0, a1) {
            var aZ = aY && typeof aY === "object" ? aY : {
                complete: a1 || !a1 && a0 || e.isFunction(aY) && aY,
                duration: aY,
                easing: a1 && a0 || a0 && !e.isFunction(a0) && a0
            };
            aZ.duration = e.fx.off ? 0 : typeof aZ.duration === "number" ? aZ.duration : e.fx.speeds[aZ.duration] || e.fx.speeds._default;
            aZ.old = aZ.complete;
            aZ.complete = function () {
                if (aZ.queue !== false) {
                    e(this).dequeue()
                }
                if (e.isFunction(aZ.old)) {
                    aZ.old.call(this)
                }
            };
            return aZ
        },
        easing: {
            linear: function (a1, a0, aY, aZ) {
                return aY + aZ * a1
            },
            swing: function (a1, a0, aY, aZ) {
                return ((-Math.cos(a1 * Math.PI) / 2) + 0.5) * aZ + aY
            }
        },
        timers: [],
        fx: function (aZ, a0, aY) {
            this.options = a0;
            this.elem = aZ;
            this.prop = aY;
            if (!a0.orig) {
                a0.orig = {}
            }
        }
    });
    e.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            } (e.fx.step[this.prop] || e.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function (aZ) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var aY = parseFloat(e.css(this.elem, this.prop, aZ));
            return aY && aY > -10000 ? aY : parseFloat(e.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (a1, aY, a0) {
            this.startTime = A();
            this.start = a1;
            this.end = aY;
            this.unit = a0 || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var a2 = this;

            function aZ(a3) {
                return a2.step(a3)
            }
            aZ.elem = this.elem;
            if (aZ() && e.timers.push(aZ) && !aj) {
                aj = setInterval(e.fx.tick, 13)
            }
        },
        show: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            e(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (a3) {
            var a6 = A(),
                a1 = true;
            if (a3 || a6 >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var aZ in this.options.curAnim) {
                    if (this.options.curAnim[aZ] !== true) {
                        a1 = false
                    }
                }
                if (a1) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        var a4 = e.data(this.elem, "olddisplay");
                        this.elem.style.display = a4 ? a4 : this.options.display;
                        if (e.css(this.elem, "display") === "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        e(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var a5 in this.options.curAnim) {
                            e.style(this.elem, a5, this.options.orig[a5])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var a2 = a6 - this.startTime;
                this.state = a2 / this.options.duration;
                var aY = this.options.specialEasing && this.options.specialEasing[this.prop];
                var a0 = this.options.easing || (e.easing.swing ? "swing" : "linear");
                this.pos = e.easing[aY || a0](this.state, a2, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    e.extend(e.fx, {
        tick: function () {
            var aY = e.timers;
            for (var aZ = 0; aZ < aY.length; aZ++) {
                if (!aY[aZ]()) {
                    aY.splice(aZ--, 1)
                }
            }
            if (!aY.length) {
                e.fx.stop()
            }
        },
        stop: function () {
            clearInterval(aj);
            aj = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (aY) {
                e.style(aY.elem, "opacity", aY.now)
            },
            _default: function (aY) {
                if (aY.elem.style && aY.elem.style[aY.prop] != null) {
                    aY.elem.style[aY.prop] = (aY.prop === "width" || aY.prop === "height" ? Math.max(0, aY.now) : aY.now) + aY.unit
                } else {
                    aY.elem[aY.prop] = aY.now
                }
            }
        }
    });
    if (e.expr && e.expr.filters) {
        e.expr.filters.animated = function (aY) {
            return e.grep(e.timers, function (aZ) {
                return aY === aZ.elem
            }).length
        }
    }
    function t(aZ, aY) {
        var a0 = {};
        e.each(aU.concat.apply([], aU.slice(0, aY)), function () {
            a0[this] = aZ
        });
        return a0
    }
    if ("getBoundingClientRect" in x.documentElement) {
        e.fn.offset = function (a0) {
            var a2 = this[0];
            if (a0) {
                return this.each(function (a8) {
                    e.offset.setOffset(this, a0, a8)
                })
            }
            if (!a2 || !a2.ownerDocument) {
                return null
            }
            if (a2 === a2.ownerDocument.body) {
                return e.offset.bodyOffset(a2)
            }
            var aZ = a2.getBoundingClientRect(),
                a5 = a2.ownerDocument,
                a1 = a5.body,
                a6 = a5.documentElement,
                aY = a6.clientTop || a1.clientTop || 0,
                a7 = a6.clientLeft || a1.clientLeft || 0,
                a4 = aZ.top + (self.pageYOffset || e.support.boxModel && a6.scrollTop || a1.scrollTop) - aY,
                a3 = aZ.left + (self.pageXOffset || e.support.boxModel && a6.scrollLeft || a1.scrollLeft) - a7;
            return {
                top: a4,
                left: a3
            }
        }
    } else {
        e.fn.offset = function (aZ) {
            var a1 = this[0];
            if (aZ) {
                return this.each(function (ba) {
                    e.offset.setOffset(this, aZ, ba)
                })
            }
            if (!a1 || !a1.ownerDocument) {
                return null
            }
            if (a1 === a1.ownerDocument.body) {
                return e.offset.bodyOffset(a1)
            }
            e.offset.initialize();
            var a4 = a1.offsetParent,
                aY = a1,
                a7 = a1.ownerDocument,
                a5, a8 = a7.documentElement,
                a0 = a7.body,
                a9 = a7.defaultView,
                a3 = a9 ? a9.getComputedStyle(a1, null) : a1.currentStyle,
            a6 = a1.offsetTop,
            a2 = a1.offsetLeft;
            while ((a1 = a1.parentNode) && a1 !== a0 && a1 !== a8) {
                if (e.offset.supportsFixedPosition && a3.position === "fixed") {
                    break
                }
                a5 = a9 ? a9.getComputedStyle(a1, null) : a1.currentStyle;
                a6 -= a1.scrollTop;
                a2 -= a1.scrollLeft;
                if (a1 === a4) {
                    a6 += a1.offsetTop;
                    a2 += a1.offsetLeft;
                    if (e.offset.doesNotAddBorder && !(e.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(a1.nodeName))) {
                        a6 += parseFloat(a5.borderTopWidth) || 0;
                        a2 += parseFloat(a5.borderLeftWidth) || 0
                    }
                    aY = a4,
                    a4 = a1.offsetParent
                }
                if (e.offset.subtractsBorderForOverflowNotVisible && a5.overflow !== "visible") {
                    a6 += parseFloat(a5.borderTopWidth) || 0;
                    a2 += parseFloat(a5.borderLeftWidth) || 0
                }
                a3 = a5
            }
            if (a3.position === "relative" || a3.position === "static") {
                a6 += a0.offsetTop;
                a2 += a0.offsetLeft
            }
            if (e.offset.supportsFixedPosition && a3.position === "fixed") {
                a6 += Math.max(a8.scrollTop, a0.scrollTop);
                a2 += Math.max(a8.scrollLeft, a0.scrollLeft)
            }
            return {
                top: a6,
                left: a2
            }
        }
    }
    e.offset = {
        initialize: function () {
            var a4 = x.body,
                a5 = x.createElement("div"),
                aZ, a3, a1, a0, a2 = parseFloat(e.curCSS(a4, "marginTop", true)) || 0,
                aY = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            e.extend(a5.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            a5.innerHTML = aY;
            a4.insertBefore(a5, a4.firstChild);
            aZ = a5.firstChild;
            a3 = aZ.firstChild;
            a0 = aZ.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (a3.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (a0.offsetTop === 5);
            a3.style.position = "fixed",
            a3.style.top = "20px";
            this.supportsFixedPosition = (a3.offsetTop === 20 || a3.offsetTop === 15);
            a3.style.position = a3.style.top = "";
            aZ.style.overflow = "hidden",
            aZ.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (a3.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (a4.offsetTop !== a2);
            a4.removeChild(a5);
            a4 = a5 = aZ = a3 = a1 = a0 = null;
            e.offset.initialize = e.noop
        },
        bodyOffset: function (aY) {
            var a0 = aY.offsetTop,
                aZ = aY.offsetLeft;
            e.offset.initialize();
            if (e.offset.doesNotIncludeMarginInBodyOffset) {
                a0 += parseFloat(e.curCSS(aY, "marginTop", true)) || 0;
                aZ += parseFloat(e.curCSS(aY, "marginLeft", true)) || 0
            }
            return {
                top: a0,
                left: aZ
            }
        },
        setOffset: function (a2, a0, aZ) {
            if (/static/.test(e.curCSS(a2, "position"))) {
                a2.style.position = "relative"
            }
            var a4 = e(a2),
                a3 = a4.offset(),
                a5 = parseInt(e.curCSS(a2, "top", true), 10) || 0,
                aY = parseInt(e.curCSS(a2, "left", true), 10) || 0;
            if (e.isFunction(a0)) {
                a0 = a0.call(a2, aZ, a3)
            }
            var a1 = {
                top: (a0.top - a3.top) + a5,
                left: (a0.left - a3.left) + aY
            };
            if ("using" in a0) {
                a0.using.call(a2, a1)
            } else {
                a4.css(a1)
            }
        }
    };
    e.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var a0 = this[0],
                aZ = this.offsetParent(),
                a1 = this.offset(),
                aY = /^body|html$/i.test(aZ[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : aZ.offset();
            a1.top -= parseFloat(e.curCSS(a0, "marginTop", true)) || 0;
            a1.left -= parseFloat(e.curCSS(a0, "marginLeft", true)) || 0;
            aY.top += parseFloat(e.curCSS(aZ[0], "borderTopWidth", true)) || 0;
            aY.left += parseFloat(e.curCSS(aZ[0], "borderLeftWidth", true)) || 0;
            return {
                top: a1.top - aY.top,
                left: a1.left - aY.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var aY = this.offsetParent || x.body;
                while (aY && (!/^body|html$/i.test(aY.nodeName) && e.css(aY, "position") === "static")) {
                    aY = aY.offsetParent
                }
                return aY
            })
        }
    });
    e.each(["Left", "Top"], function (aY, a0) {
        var aZ = "scroll" + a0;
        e.fn[aZ] = function (a2) {
            var a3 = this[0],
                a1;
            if (!a3) {
                return null
            }
            if (a2 !== H) {
                return this.each(function () {
                    a1 = aQ(this);
                    if (a1) {
                        a1.scrollTo(!aY ? a2 : e(a1).scrollLeft(), aY ? a2 : e(a1).scrollTop())
                    } else {
                        this[aZ] = a2
                    }
                })
            } else {
                a1 = aQ(a3);
                return a1 ? ("pageXOffset" in a1) ? a1[aY ? "pageYOffset" : "pageXOffset"] : e.support.boxModel && a1.document.documentElement[aZ] || a1.document.body[aZ] : a3[aZ]
            }
        }
    });

    function aQ(aY) {
        return ("scrollTo" in aY && aY.document) ? aY : aY.nodeType === 9 ? aY.defaultView || aY.parentWindow : false
    }
    e.each(["Height", "Width"], function (aY, a0) {
        var aZ = a0.toLowerCase();
        e.fn["inner" + a0] = function () {
            return this[0] ? e.css(this[0], aZ, false, "padding") : null
        };
        e.fn["outer" + a0] = function (a1) {
            return this[0] ? e.css(this[0], aZ, false, a1 ? "margin" : "border") : null
        };
        e.fn[aZ] = function (a2) {
            var a1 = this[0];
            if (!a1) {
                return a2 == null ? null : this
            }
            if (e.isFunction(a2)) {
                return this.each(function (a4) {
                    var a3 = e(this);
                    a3[aZ](a2.call(this, a4, a3[aZ]()))
                })
            }
            return ("scrollTo" in a1 && a1.document) ? a1.document.compatMode === "CSS1Compat" && a1.document.documentElement["client" + a0] || a1.document.body["client" + a0] : (a1.nodeType === 9) ? Math.max(a1.documentElement["client" + a0], a1.body["scroll" + a0], a1.documentElement["scroll" + a0], a1.body["offset" + a0], a1.documentElement["offset" + a0]) : a2 === H ? e.css(a1, aZ) : this.css(aZ, typeof a2 === "string" ? a2 : a2 + "px")
        }
    });
    aH.jQuery = aH.$ = e
})(window);
jQuery.fn.extend({
    everyTime: function (a, c, b, d) {
        return this.each(function () {
            jQuery.timer.add(this, a, c, b, d)
        })
    },
    oneTime: function (a, c, b) {
        return this.each(function () {
            jQuery.timer.add(this, a, c, b, 1)
        })
    },
    stopTime: function (b, a) {
        return this.each(function () {
            jQuery.timer.remove(this, b, a)
        })
    }
});
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1000,
            das: 10000,
            hs: 100000,
            ks: 1000000
        },
        timeParse: function (a) {
            if (a == undefined || a == null) {
                return null
            }
            var b = this.regex.exec(jQuery.trim(a.toString()));
            if (b[2]) {
                var d = parseFloat(b[1]);
                var c = this.powers[b[2]] || 1;
                return d * c
            } else {
                return a
            }
        },
        add: function (a, e, h, f, g) {
            var b = 0;
            if (jQuery.isFunction(h)) {
                if (!g) {
                    g = f
                }
                f = h;
                h = e
            }
            e = jQuery.timer.timeParse(e);
            if (typeof e != "number" || isNaN(e) || e < 0) {
                return
            }
            if (typeof g != "number" || isNaN(g) || g < 0) {
                g = 0
            }
            g = g || 0;
            var c = jQuery.data(a, this.dataKey) || jQuery.data(a, this.dataKey, {});
            if (!c[h]) {
                c[h] = {}
            }
            f.timerID = f.timerID || this.guid++;
            var d = function () {
                if ((++b > g && g !== 0) || f.call(a, b) === false) {
                    jQuery.timer.remove(a, h, f)
                }
            };
            d.timerID = f.timerID;
            if (!c[h][f.timerID]) {
                c[h][f.timerID] = window.setInterval(d, e)
            }
            this.global.push(a)
        },
        remove: function (d, c, b) {
            var a = jQuery.data(d, this.dataKey),
                e;
            if (a) {
                if (!c) {
                    for (c in a) {
                        this.remove(d, c, b)
                    }
                } else {
                    if (a[c]) {
                        if (b) {
                            if (b.timerID) {
                                window.clearInterval(a[c][b.timerID]);
                                delete a[c][b.timerID]
                            }
                        } else {
                            for (var b in a[c]) {
                                window.clearInterval(a[c][b]);
                                delete a[c][b]
                            }
                        }
                        for (e in a[c]) {
                            break
                        }
                        if (!e) {
                            e = null;
                            delete a[c]
                        }
                    }
                }
                for (e in a) {
                    break
                }
                if (!e) {
                    jQuery.removeData(d, this.dataKey)
                }
            }
        }
    }
});
jQuery(window).bind("unload", function () {
    jQuery.each(jQuery.timer.global, function (a, b) {
        jQuery.timer.remove(b)
    })
});
jQuery.extend({
    easing: {
        easein: function (h, f, e, g, a) {
            return g * (f /= a) * f + e
        },
        easeinout: function (a, i, f, g, h) {
            if (i < h / 2) {
                return 2 * g * i * i / (h * h) + f
            }
            var e = i - h / 2;
            return -2 * g * e * e / (h * h) + 2 * g * e / h + g / 2 + f
        },
        easeout: function (h, f, e, g, a) {
            return -g * f * f / (a * a) + 2 * g * f / a + e
        },
        expoin: function (a, i, f, g, h) {
            var e = 1;
            if (g < 0) {
                e *= -1;
                g *= -1
            }
            return e * (Math.exp(Math.log(g) / h * i)) + f
        },
        expoout: function (a, i, f, g, h) {
            var e = 1;
            if (g < 0) {
                e *= -1;
                g *= -1
            }
            return e * (-Math.exp(-Math.log(g) / h * (i - h)) + g + 1) + f
        },
        expoinout: function (a, i, f, g, h) {
            var e = 1;
            if (g < 0) {
                e *= -1;
                g *= -1
            }
            if (i < h / 2) {
                return e * (Math.exp(Math.log(g / 2) / (h / 2) * i)) + f
            }
            return e * (-Math.exp(-2 * Math.log(g / 2) / h * (i - h)) + g + 1) + f
        },
        bouncein: function (h, f, e, g, a) {
            return g - jQuery.easing.bounceout(h, a - f, 0, g, a) + e
        },
        bounceout: function (h, f, e, g, a) {
            if ((f /= a) < (1 / 2.75)) {
                return g * (7.5625 * f * f) + e
            } else {
                if (f < (2 / 2.75)) {
                    return g * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + e
                } else {
                    if (f < (2.5 / 2.75)) {
                        return g * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + e
                    } else {
                        return g * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + e
                    }
                }
            }
        },
        bounceinout: function (h, f, e, g, a) {
            if (f < a / 2) {
                return jQuery.easing.bouncein(h, f * 2, 0, g, a) * 0.5 + e
            }
            return jQuery.easing.bounceout(h, f * 2 - a, 0, g, a) * 0.5 + g * 0.5 + e
        },
        elasin: function (e, j, g, h, i) {
            var k = 1.70158;
            var f = 0;
            var l = h;
            if (j == 0) {
                return g
            }
            if ((j /= i) == 1) {
                return g + h
            }
            if (!f) {
                f = i * 0.3
            }
            if (l < Math.abs(h)) {
                l = h;
                var k = f / 4
            } else {
                var k = f / (2 * Math.PI) * Math.asin(h / l)
            }
            return -(l * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * i - k) * (2 * Math.PI) / f)) + g
        },
        elasout: function (e, j, g, h, i) {
            var k = 1.70158;
            var f = 0;
            var l = h;
            if (j == 0) {
                return g
            }
            if ((j /= i) == 1) {
                return g + h
            }
            if (!f) {
                f = i * 0.3
            }
            if (l < Math.abs(h)) {
                l = h;
                var k = f / 4
            } else {
                var k = f / (2 * Math.PI) * Math.asin(h / l)
            }
            return l * Math.pow(2, -10 * j) * Math.sin((j * i - k) * (2 * Math.PI) / f) + h + g
        },
        elasinout: function (e, j, g, h, i) {
            var k = 1.70158;
            var f = 0;
            var l = h;
            if (j == 0) {
                return g
            }
            if ((j /= i / 2) == 2) {
                return g + h
            }
            if (!f) {
                f = i * (0.3 * 1.5)
            }
            if (l < Math.abs(h)) {
                l = h;
                var k = f / 4
            } else {
                var k = f / (2 * Math.PI) * Math.asin(h / l)
            }
            if (j < 1) {
                return -0.5 * (l * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * i - k) * (2 * Math.PI) / f)) + g
            }
            return l * Math.pow(2, -10 * (j -= 1)) * Math.sin((j * i - k) * (2 * Math.PI) / f) * 0.5 + h + g
        },
        backin: function (a, h, e, f, g) {
            var i = 1.70158;
            return f * (h /= g) * h * ((i + 1) * h - i) + e
        },
        backout: function (a, h, e, f, g) {
            var i = 1.70158 * 2;
            return f * ((h = h / g - 1) * h * ((i + 1) * h + i) + 1) + e
        },
        backinout: function (a, h, e, f, g) {
            var i = 1.70158;
            if ((h /= g / 2) < 1) {
                return f / 2 * (h * h * (((i *= (1.525)) + 1) * h - i)) + e
            }
            return f / 2 * ((h -= 2) * h * (((i *= (1.525)) + 1) * h + i) + 2) + e
        },
        linear: function (h, f, e, g, a) {
            return g * f / a + e
        }
    }
});
/* Build-0.6: color.core.js color.rgb.js color.huebased.js color.hsv.js color.hsl.js color.object.js color.parse.js color.related.js color.palette.css3.js color.css.js */
/*
* jQuery Colour 0.6
*
* Copyright (c) 2009 Adaptavist.com
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL (GPL-LICENSE.txt) licenses.
*
* Author: Mark Gibson (jollytoad at gmail dot com)
*
* http://www.adaptavist.com/display/jQuery/Colour+Library
*/
(jQuery.color || (function (a) {
    a.color = {
        isEqual: function (d, b) {
            if (d.length !== b.length) {
                return false
            }
            var c = d.length;
            while (c--) {
                if (d[c] !== b[c]) {
                    return false
                }
            }
            return true
        },
        fix: function (d, c) {
            var b = c.length;
            while (b--) {
                if (typeof d[b] === "number") {
                    switch (c.charAt(b)) {
                        case "i":
                            d[b] = Math.round(d[b]);
                            break;
                        case "o":
                            d[b] = Math.min(255, Math.max(0, Math.round(d[b])));
                            break;
                        case "1":
                            d[b] = Math.min(1, Math.max(0, d[b]));
                            break
                    }
                }
            }
            return d
        },
        self: function (b) {
            return b
        },
        alpha: function (b) {
            return b === undefined ? 1 : b
        },
        palette: {},
        fns: []
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.color.RGB = {
        fix: function (b) {
            b = a.color.fix(b, "ooo1");
            return b
        },
        toRGB: a.color.self,
        toHEX: function (b) {
            return "#" + (16777216 + b[0] * 65536 + b[1] * 256 + b[2]).toString(16).slice(-6)
        },
        toCSS: function (b) {
            if (a.color.alpha(b[3]) === 0) {
                return "transparent"
            }
            if (a.color.alpha(b[3]) < 1) {
                return "rgba(" + b.join(",") + ")"
            }
            return "rgb(" + Array.prototype.slice.call(b, 0, 3).join(",") + ")"
        },
        red: function (b) {
            return b[0]
        },
        green: function (b) {
            return b[1]
        },
        blue: function (b) {
            return b[2]
        },
        alpha: function (b) {
            return a.color.alpha(b[3])
        }
    };
    a.color.RGB.toString = a.color.RGB.toHEX;
    a.color.fns.push("RGB.toRGB", "RGB.toHEX", "RGB.toCSS", "RGB.red", "RGB.green", "RGB.blue", "RGB.alpha")
})(jQuery));
(jQuery.color && (function (a) {
    a.color.HueBased = {
        fix: function (b) {
            b[0] = (b[0] + 1) % 1;
            return a.color.fix(b, "1111")
        },
        complementary: function (b, c) {
            return [(b[0] + 0.5 + (c || 0)) % 1, b[1], b[2], b[3]]
        },
        analogous: function (b, c) {
            return [(b[0] + 1 + (c || 0)) % 1, b[1], b[2], b[3]]
        },
        hue: function (b) {
            return b[0]
        },
        alpha: function (b) {
            return a.color.alpha(b[3])
        }
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.color.HSV = a.extend({
        toHSV: a.color.self,
        toRGB: function (l) {
            var b = l[0] * 6,
                c = Math.floor(b),
                j = b - c,
                h = l[1],
                k = l[2] * 255,
                d = l[3],
                e = Math.round(k * (1 - h)),
                g = Math.round(k * (1 - j * h)),
                i = Math.round(k * (1 - (1 - j) * h));
            k = Math.round(k);
            switch (c % 6) {
                case 0:
                    return [k, i, e, d];
                case 1:
                    return [g, k, e, d];
                case 2:
                    return [e, k, i, d];
                case 3:
                    return [e, g, k, d];
                case 4:
                    return [i, e, k, d];
                case 5:
                    return [k, e, g, d]
            }
        },
        saturationV: function (b) {
            return b[1]
        },
        value: function (b) {
            return b[2]
        }
    },
    a.color.HueBased);
    a.color.RGB.toHSV = function (c) {
        var f = c[0] / 255,
            j = c[1] / 255,
            e = c[2] / 255,
            i = Math.min(f, j, e),
            k = Math.max(f, j, e),
            h = k - i;
        return [h === 0 ? 0 : (j === k ? (e - f) / h / 6 + (1 / 3) : e === k ? (f - j) / h / 6 + (2 / 3) : (j - e) / h / 6 + 1) % 1, h === 0 ? 0 : h / k, k, c[3]]
    };
    a.color.fns.push("HSV.toHSV", "HSV.toRGB", "RGB.toHSV", "HSV.complementary", "HSV.analogous", "HSV.hue", "HSV.saturationV", "HSV.value", "HSV.alpha")
})(jQuery));
(jQuery.color && (function (a) {
    a.color.HSL = a.extend({
        toHSL: a.color.self,
        toRGB: function (g) {
            var b = g[0],
                i = g[1],
                d = g[2],
                f = d < 0.5 ? d * (1 + i) : d + i - (d * i),
            e = 2 * d - f;

            function j(h) {
                var c = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
                return c < 1 / 6 ? e + (f - e) * 6 * c : c < 1 / 2 ? f : c < 2 / 3 ? e + (f - e) * 6 * (2 / 3 - c) : e
            }
            return [Math.round(255 * j(b + 1 / 3)), Math.round(255 * j(b)), Math.round(255 * j(b - 1 / 3)), g[3]]
        },
        saturationL: function (b) {
            return b[1]
        },
        lightness: function (b) {
            return b[2]
        }
    },
    a.color.HueBased);
    a.color.RGB.toHSL = function (c) {
        var h = c[0] / 255,
            k = c[1] / 255,
            f = c[2] / 255,
            j = Math.min(h, k, f),
            l = Math.max(h, k, f),
            i = l - j,
            e = l + j;
        return [i === 0 ? 0 : (k === l ? (f - h) / i / 6 + (1 / 3) : f === l ? (h - k) / i / 6 + (2 / 3) : (k - f) / i / 6 + 1) % 1, i === 0 ? 0 : e > 1 ? i / (2 - l - j) : i / e, e / 2, c[3]]
    };
    a.color.fns.push("HSL.toHSL", "HSL.toRGB", "RGB.toHSL", "HSL.complementary", "HSL.analogous", "HSL.hue", "HSL.saturationL", "HSL.lightness", "HSL.alpha")
})(jQuery));
(jQuery.color && jQuery.Color || (function (e) {
    e.Color = function (h, f, j) {
        if (typeof this === "function") {
            return new e.Color(h, f, j)
        }
        if (typeof h === "string" && e.color.parse) {
            if (!j) {
                j = h
            }
            h = e.color.parse(h)
        }
        if (h && h.length) {
            var g;
            g = this.length = h.length;
            while (g--) {
                this[g] = h[g]
            }
        }
        if (h) {
            this.space = f || h.space || "RGB";
            this.name = j || h.name
        }
    };

    function d(f, j) {
        var l = e.Color.isInstance(f) && f.space !== this.space ? this.to(f.space) : new e.Color(this),
        g = l.length,
        h = false;
        while (g--) {
            if (typeof f[g] === "number") {
                var k = j ? l[g] + f[g] : f[g];
                if (k !== l[g]) {
                    l[g] = k;
                    h = true
                }
            }
        }
        return h ? l.setName() : this
    }
    e.Color.fn = e.Color.prototype = {
        color: "0.6",
        util: function () {
            return e.color[this.space]
        },
        to: function (f) {
            return this["to" + f]()
        },
        fix: function () {
            return this.util().fix(this)
        },
        modify: function (f) {
            return d.call(this, f)
        },
        adjust: function (f) {
            return d.call(this, f, true)
        },
        setName: function (f) {
            this.name = f;
            return this
        },
        toString: function () {
            if (!this.space) {
                return ""
            }
            var f = this.util();
            return f.hasOwnProperty("toString") ? f.toString(this) : this.to("RGB").toString()
        },
        join: [].join,
        push: [].push
    };
    e.Color.isInstance = function (f) {
        return f && typeof f === "object" && f.color === e.Color.fn.color && f.space
    };
    e.Color.fnspace = {};

    function c(f, i, h, j, g) {
        return function () {
            var l = [f];
            Array.prototype.push.apply(l, arguments);
            var k = h.apply(i, l);
            return e.isArray(k) ? new e.Color(k, j, g ? f.name : undefined) : k
        }
    }
    function a(f, h) {
        var g = /^to/.test(h) ? h.substring(2) : false;
        return function () {
            var i = this,
                l = i.util();
            if (!l[h]) {
                i = i.to(e.Color.fnspace[h]);
                l = i.util()
            }
            var k = c(i, l, l[h], g || i.space, !!g),
                j = k.apply(i, arguments);
            if (g) {
                this[h] = function () {
                    return j
                };
                if (e.Color.isInstance(j)) {
                    i = this;
                    j["to" + this.space] = function () {
                        return i
                    }
                }
            } else {
                this[h] = k
            }
            return j
        }
    }
    function b() {
        var g = this.split("."),
            h = g[1],
            f = g[0];
        if (!e.Color.fnspace[h] && h !== "to" + f) {
            e.Color.fnspace[h] = f
        }
        if (!e.Color.fn[h]) {
            e.Color.fn[h] = a(this, h)
        }
    }
    e.each(e.color.fns, b);
    e.color.fns.push = function () {
        e.each(arguments, b);
        return Array.prototype.push.apply(this, arguments)
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.extend(a.color, {
        parse: function (b) {
            var c;
            if (typeof b === "string") {
                if ((c = /^\s*rgb(a)?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*(?:,\s*([0-9]+(?:\.[0-9]+)?)\s*)?\)\s*$/.exec(b)) && !c[1] === !c[5]) {
                    return [parseInt(c[2], 10), parseInt(c[3], 10), parseInt(c[4], 10), c[5] ? parseFloat(c[5]) : 1]
                }
                if ((c = /^\s*rgb(a)?\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*(?:,\s*([0-9]+(?:\.[0-9]+)?)\s*)?\)\s*$/.exec(b)) && !c[1] === !c[5]) {
                    return [parseFloat(c[2]) * 255 / 100, parseFloat(c[3]) * 255 / 100, parseFloat(c[4]) * 255 / 100, c[5] ? parseFloat(c[5]) : 1]
                }
                if ((c = /^\s*#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})\s*$/.exec(b))) {
                    return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16), 1]
                }
                if ((c = /^\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])\s*$/.exec(b))) {
                    return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16), 1]
                }
                if ((c = /^\s*hsl(a)?\(\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*(?:,\s*([0-9]+(?:\.[0-9]+)?)\s*)?\)\s*$/.exec(b)) && !c[1] === !c[5]) {
                    return [parseInt(c[2], 10) / 360, parseFloat(c[3]) / 100, parseFloat(c[4]) / 100, c[5] ? parseFloat(c[5]) : 1]
                }
                return a.color.named(b)
            }
            if (b && (b.length === 3 || b.length === 4)) {
                if (b.length === 3) {
                    b.push(1)
                }
                return b
            }
        },
        named: function (b) {
            var c;
            b = a.trim(b.toLowerCase());
            if (b === "transparent") {
                return [0, 0, 0, 0]
            }
            a.each(a.color.palette, function (d, e) {
                if (e[b]) {
                    c = e[b];
                    return false
                }
            });
            return c
        }
    })
})(jQuery));
(jQuery.Color && (function (a) {
    a.Color.fn.related = function (e) {
        var c = a.Color.fn.related.i18n,
            b = e || a.Color.fn.related.offset,
            d = Math.round(b * 360) + c.deg;
        return {
            "anal-": this.analogous(-b).setName(c.anal + " -" + d),
            anal0: this.analogous().setName(c.orig),
            "anal+": this.analogous(b).setName(c.anal + " +" + d),
            "comp-": this.complementary(-b).setName(c.split + " -" + d),
            comp0: this.complementary().setName(c.comp),
            "comp+": this.complementary(b).setName(c.split + " +" + d),
            "triad-": this.analogous(-1 / 3).setName(c.triad + " -120" + c.deg),
            triad0: this.analogous().setName(c.orig),
            "triad+": this.analogous(1 / 3).setName(c.triad + " +120" + c.deg)
        }
    };
    a.Color.fn.related.offset = 30 / 360;
    a.Color.fn.related.i18n = {
        deg: "?",
        anal: "Analogous",
        orig: "Original",
        split: "Split Complementary",
        comp: "Complementary",
        triad: "Triadic"
    }
})(jQuery));
(jQuery.color && (function (a) {
    a.color.palette.css3 = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        grey: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
})(jQuery));
(function (a) {
    a.fn.cssColor = function (b) {
        return a.Color(this.css(b))
    };
    a.Color.fn.applyCSS = function (b, c) {
        a(b).css(c, this.toCSS());
        return this
    }
})(jQuery);
(function (a) {
    a.fx.step.clip = function (h) {
        if (h.state == 0) {
            var j = /rect\(([0-9]{1,3})(px|em) ([0-9]{1,3})(px|em) ([0-9]{1,3})(px|em) ([0-9]{1,3})(px|em)\)/;
            h.start = j.exec(h.elem.style.clip.replace(/,/g, ""));
            h.end = j.exec(h.end.replace(/,/g, ""))
        }
        var f = new Array(),
            g = new Array(),
            b = h.start.length,
            c = h.end.length,
            i = h.start[d + 1] == "em" ? (parseInt($(h.elem).css("fontSize")) * 1.333 * parseInt(h.start[d])) : 1;
        for (var d = 1; d < b; d += 2) {
            f.push(parseInt(i * h.start[d]))
        }
        for (var e = 1; e < c; e += 2) {
            g.push(parseInt(i * h.end[e]))
        }
        h.elem.style.clip = "rect(" + parseInt((h.pos * (g[0] - f[0])) + f[0]) + "px " + parseInt((h.pos * (g[1] - f[1])) + f[1]) + "px " + parseInt((h.pos * (g[2] - f[2])) + f[2]) + "px " + parseInt((h.pos * (g[3] - f[3])) + f[3]) + "px)"
    }
})(jQuery);
(function (d) {
    function g() {
        this._settings = [];
        this._extensions = [];
        this.regional = [];
        this.regional[""] = {
            errorLoadingText: "Error loading",
            notSupportedText: "This browser does not support SVG"
        };
        this.local = this.regional[""];
        this._uuid = new Date().getTime();
        this._renesis = f("RenesisX.RenesisCtrl")
    }
    function f(i) {
        try {
            return !!(window.ActiveXObject && new ActiveXObject(i))
        } catch (j) {
            return false
        }
    }
    var e = "svgwrapper";
    d.extend(g.prototype, {
        markerClassName: "hasSVG",
        svgNS: "http://www.w3.org/2000/svg",
        xlinkNS: "http://www.w3.org/1999/xlink",
        _wrapperClass: c,
        _attrNames: {
            class_: "class",
            in_: "in",
            alignmentBaseline: "alignment-baseline",
            baselineShift: "baseline-shift",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorRendering: "color-rendering",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            vertAdvY: "vert-adv-y",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode"
        },
        _attachSVG: function (j, i) {
            var k = (j.namespaceURI == this.svgNS ? j : null);
            var j = (k ? null : j);
            if (d(j || k).hasClass(this.markerClassName)) {
                return
            }
            if (typeof i == "string") {
                i = {
                    loadURL: i
                }
            } else {
                if (typeof i == "function") {
                    i = {
                        onLoad: i
                    }
                }
            }
            d(j || k).addClass(this.markerClassName);
            try {
                if (!k) {
                    k = document.createElementNS(this.svgNS, "svg");
                    k.setAttribute("version", "1.1");
                    k.setAttribute("width", j.clientWidth);
                    k.setAttribute("height", j.clientHeight);
                    j.appendChild(k)
                }
                this._afterLoad(j, k, i || {})
            } catch (l) {
                if (d.browser.msie) {
                    if (!j.id) {
                        j.id = "svg" + (this._uuid++)
                    }
                    this._settings[j.id] = i;
                    j.innerHTML = '<embed type="image/svg+xml" width="100%" height="100%" src="' + (i.initPath || "") + 'blank.svg"/>'
                } else {
                    j.innerHTML = '<p class="svg_error">' + this.local.notSupportedText + "</p>"
                }
            }
        },
        _registerSVG: function () {
            for (var j = 0; j < document.embeds.length; j++) {
                var k = document.embeds[j].parentNode;
                if (!d(k).hasClass(d.svg.markerClassName) || d.data(k, e)) {
                    continue
                }
                var l = null;
                try {
                    l = document.embeds[j].getSVGDocument()
                } catch (m) {
                    setTimeout(d.svg._registerSVG, 250);
                    return
                }
                l = (l ? l.documentElement : null);
                if (l) {
                    d.svg._afterLoad(k, l)
                }
            }
        },
        _afterLoad: function (k, l, j) {
            var j = j || this._settings[k.id];
            this._settings[k ? k.id : ""] = null;
            var i = new this._wrapperClass(l, k);
            d.data(k || l, e, i);
            try {
                if (j.loadURL) {
                    i.load(j.loadURL, j)
                }
                if (j.settings) {
                    i.configure(j.settings)
                }
                if (j.onLoad && !j.loadURL) {
                    j.onLoad.apply(k || l, [i])
                }
            } catch (m) {
                alert(m)
            }
        },
        _getSVG: function (i) {
            i = (typeof i == "string" ? d(i)[0] : (i.jquery ? i[0] : i));
            return d.data(i, e)
        },
        _destroySVG: function (i) {
            var j = d(i);
            if (!j.hasClass(this.markerClassName)) {
                return
            }
            j.removeClass(this.markerClassName);
            if (i.namespaceURI != this.svgNS) {
                j.empty()
            }
            d.removeData(i, e)
        },
        addExtension: function (i, j) {
            this._extensions.push([i, j])
        }
    });

    function c(l, k) {
        this._svg = l;
        this._container = k;
        for (var j = 0; j < d.svg._extensions.length; j++) {
            var m = d.svg._extensions[j];
            this[m[0]] = new m[1](this)
        }
    }
    d.extend(c.prototype, {
        _width: function () {
            return (this._container ? this._container.clientWidth : this._svg.width)
        },
        _height: function () {
            return (this._container ? this._container.clientHeight : this._svg.height)
        },
        root: function () {
            return this._svg
        },
        configure: function (m, l) {
            if (l) {
                for (var k = this._svg.attributes.length - 1; k >= 0; k--) {
                    var n = this._svg.attributes.item(k);
                    if (!(n.nodeName == "onload" || n.nodeName == "version" || n.nodeName.substring(0, 5) == "xmlns")) {
                        this._svg.attributes.removeNamedItem(n.nodeName)
                    }
                }
            }
            for (var j in m) {
                this._svg.setAttribute(j, m[j])
            }
            return this
        },
        getElementById: function (i) {
            return this._svg.ownerDocument.getElementById(i)
        },
        change: function (i, j) {
            if (i) {
                for (var k in j) {
                    if (j[k] == null) {
                        i.removeAttribute(k)
                    } else {
                        i.setAttribute(k, j[k])
                    }
                }
            }
            return this
        },
        _args: function (k, n, o) {
            n.splice(0, 0, "parent");
            n.splice(n.length, 0, "settings");
            var l = {};
            var m = 0;
            if (k[0] != null && k[0].jquery) {
                k[0] = k[0][0]
            }
            if (k[0] != null && !(typeof k[0] == "object" && k[0].nodeName)) {
                l.parent = null;
                m = 1
            }
            for (var j = 0; j < k.length; j++) {
                l[n[j + m]] = k[j]
            }
            if (o) {
                d.each(o, function (p, q) {
                    if (typeof l[q] == "object") {
                        l.settings = l[q];
                        l[q] = null
                    }
                })
            }
            return l
        },
        title: function (i, m, k) {
            var j = this._args(arguments, ["text"]);
            var l = this._makeNode(j.parent, "title", j.settings || {});
            l.appendChild(this._svg.ownerDocument.createTextNode(j.text));
            return l
        },
        describe: function (i, m, k) {
            var j = this._args(arguments, ["text"]);
            var l = this._makeNode(j.parent, "desc", j.settings || {});
            l.appendChild(this._svg.ownerDocument.createTextNode(j.text));
            return l
        },
        defs: function (i, k, j) {
            var l = this._args(arguments, ["id"], ["id"]);
            return this._makeNode(l.parent, "defs", d.extend((l.id ? {
                id: l.id
            } : {}), l.settings || {}))
        },
        symbol: function (o, m, j, k, l, i, n) {
            var p = this._args(arguments, ["id", "x1", "y1", "width", "height"]);
            return this._makeNode(p.parent, "symbol", d.extend({
                id: p.id,
                viewBox: p.x1 + " " + p.y1 + " " + p.width + " " + p.height
            },
            p.settings || {}))
        },
        marker: function (m, l, j, o, k, q, n, i) {
            var p = this._args(arguments, ["id", "refX", "refY", "mWidth", "mHeight", "orient"], ["orient"]);
            return this._makeNode(p.parent, "marker", d.extend({
                id: p.id,
                refX: p.refX,
                refY: p.refY,
                markerWidth: p.mWidth,
                markerHeight: p.mHeight,
                orient: p.orient || "auto"
            },
            p.settings || {}))
        },
        style: function (i, m, k) {
            var j = this._args(arguments, ["styles"]);
            var l = this._makeNode(j.parent, "style", d.extend({
                type: "text/css"
            },
            j.settings || {}));
            l.appendChild(this._svg.ownerDocument.createTextNode(j.styles));
            if (d.browser.opera) {
                d("head").append('<style type="text/css">' + j.styles + "</style>")
            }
            return l
        },
        script: function (k, j, l, i) {
            var n = this._args(arguments, ["script", "type"], ["type"]);
            var m = this._makeNode(n.parent, "script", d.extend({
                type: n.type || "text/javascript"
            },
            n.settings || {}));
            m.appendChild(this._svg.ownerDocument.createTextNode(this._escapeXML(n.script)));
            if (!d.browser.mozilla) {
                d.globalEval(n.script)
            }
            return m
        },
        linearGradient: function (q, o, n, j, k, l, m, i) {
            var r = this._args(arguments, ["id", "stops", "x1", "y1", "x2", "y2"], ["x1"]);
            var p = d.extend({
                id: r.id
            },
            (r.x1 != null ? {
                x1: r.x1,
                y1: r.y1,
                x2: r.x2,
                y2: r.y2
            } : {}));
            return this._gradient(r.parent, "linearGradient", d.extend(p, r.settings || {}), r.stops)
        },
        radialGradient: function (o, m, k, l, n, p, s, q, i) {
            var t = this._args(arguments, ["id", "stops", "cx", "cy", "r", "fx", "fy"], ["cx"]);
            var j = d.extend({
                id: t.id
            },
            (t.cx != null ? {
                cx: t.cx,
                cy: t.cy,
                r: t.r,
                fx: t.fx,
                fy: t.fy
            } : {}));
            return this._gradient(t.parent, "radialGradient", d.extend(j, t.settings || {}), t.stops)
        },
        _gradient: function (n, o, j, l) {
            var p = this._makeNode(n, o, j);
            for (var k = 0; k < l.length; k++) {
                var m = l[k];
                this._makeNode(p, "stop", d.extend({
                    offset: m[0],
                    stopColor: m[1]
                },
                (m[2] != null ? {
                    stopOpacity: m[2]
                } : {})))
            }
            return p
        },
        pattern: function (o, p, r, j, u, m, q, i, t, l, n) {
            var k = this._args(arguments, ["id", "x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]);
            var s = d.extend({
                id: k.id,
                x: k.x,
                y: k.y,
                width: k.width,
                height: k.height
            },
            (k.vx != null ? {
                viewBox: k.vx + " " + k.vy + " " + k.vwidth + " " + k.vheight
            } : {}));
            return this._makeNode(k.parent, "pattern", d.extend(s, k.settings || {}))
        },
        mask: function (o, m, j, k, l, i, n) {
            var p = this._args(arguments, ["id", "x", "y", "width", "height"]);
            return this._makeNode(p.parent, "mask", d.extend({
                id: p.id,
                x: p.x,
                y: p.y,
                width: p.width,
                height: p.height
            },
            p.settings || {}))
        },
        createPath: function () {
            return new b()
        },
        createText: function () {
            return new h()
        },
        svg: function (o, j, k, s, l, p, q, r, t, i) {
            var n = this._args(arguments, ["x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]);
            var m = d.extend({
                x: n.x,
                y: n.y,
                width: n.width,
                height: n.height
            },
            (n.vx != null ? {
                viewBox: n.vx + " " + n.vy + " " + n.vwidth + " " + n.vheight
            } : {}));
            return this._makeNode(n.parent, "svg", d.extend(m, n.settings || {}))
        },
        group: function (i, k, j) {
            var l = this._args(arguments, ["id"], ["id"]);
            return this._makeNode(l.parent, "g", d.extend({
                id: l.id
            },
            l.settings || {}))
        },
        use: function (n, j, k, p, l, m, i) {
            var q = this._args(arguments, ["x", "y", "width", "height", "ref"]);
            if (typeof q.x == "string") {
                q.ref = q.x;
                q.settings = q.y;
                q.x = q.y = q.width = q.height = null
            }
            var o = this._makeNode(q.parent, "use", d.extend({
                x: q.x,
                y: q.y,
                width: q.width,
                height: q.height
            },
            q.settings || {}));
            o.setAttributeNS(d.svg.xlinkNS, "href", q.ref);
            return o
        },
        link: function (i, m, k) {
            var j = this._args(arguments, ["ref"]);
            var l = this._makeNode(j.parent, "a", j.settings);
            l.setAttributeNS(d.svg.xlinkNS, "href", j.ref);
            return l
        },
        image: function (n, j, k, p, l, m, i) {
            var q = this._args(arguments, ["x", "y", "width", "height", "ref"]);
            var o = this._makeNode(q.parent, "image", d.extend({
                x: q.x,
                y: q.y,
                width: q.width,
                height: q.height
            },
            q.settings || {}));
            o.setAttributeNS(d.svg.xlinkNS, "href", q.ref);
            return o
        },
        path: function (i, l, k) {
            var j = this._args(arguments, ["path"]);
            return this._makeNode(j.parent, "path", d.extend({
                d: (j.path.path ? j.path.path() : j.path)
            },
            j.settings || {}))
        },
        rect: function (o, j, k, p, l, m, n, i) {
            var q = this._args(arguments, ["x", "y", "width", "height", "rx", "ry"], ["rx"]);
            return this._makeNode(q.parent, "rect", d.extend({
                x: q.x,
                y: q.y,
                width: q.width,
                height: q.height
            },
            (q.rx ? {
                rx: q.rx,
                ry: q.ry
            } : {}), q.settings || {}))
        },
        circle: function (l, j, k, m, i) {
            var n = this._args(arguments, ["cx", "cy", "r"]);
            return this._makeNode(n.parent, "circle", d.extend({
                cx: n.cx,
                cy: n.cy,
                r: n.r
            },
            n.settings || {}))
        },
        ellipse: function (n, j, k, m, l, i) {
            var o = this._args(arguments, ["cx", "cy", "rx", "ry"]);
            return this._makeNode(o.parent, "ellipse", d.extend({
                cx: o.cx,
                cy: o.cy,
                rx: o.rx,
                ry: o.ry
            },
            o.settings || {}))
        },
        line: function (n, j, l, k, m, i) {
            var o = this._args(arguments, ["x1", "y1", "x2", "y2"]);
            return this._makeNode(o.parent, "line", d.extend({
                x1: o.x1,
                y1: o.y1,
                x2: o.x2,
                y2: o.y2
            },
            o.settings || {}))
        },
        polyline: function (i, j, l) {
            var k = this._args(arguments, ["points"]);
            return this._poly(k.parent, "polyline", k.points, k.settings)
        },
        polygon: function (i, j, l) {
            var k = this._args(arguments, ["points"]);
            return this._poly(k.parent, "polygon", k.points, k.settings)
        },
        _poly: function (m, n, l, j) {
            var o = "";
            for (var k = 0; k < l.length; k++) {
                o += l[k].join() + " "
            }
            return this._makeNode(m, n, d.extend({
                points: d.trim(o)
            },
            j || {}))
        },
        text: function (m, j, k, l, i) {
            var n = this._args(arguments, ["x", "y", "value"]);
            if (typeof n.x == "string" && arguments.length < 4) {
                n.value = n.x;
                n.settings = n.y;
                n.x = n.y = null
            }
            return this._text(n.parent, "text", n.value, d.extend({
                x: (n.x && a(n.x) ? n.x.join(" ") : n.x),
                y: (n.y && a(n.y) ? n.y.join(" ") : n.y)
            },
            n.settings || {}))
        },
        textpath: function (l, j, k, i) {
            var n = this._args(arguments, ["path", "value"]);
            var m = this._text(n.parent, "textPath", n.value, n.settings || {});
            m.setAttributeNS(d.svg.xlinkNS, "href", n.path);
            return m
        },
        _text: function (p, q, l, j) {
            var r = this._makeNode(p, q, j);
            if (typeof l == "string") {
                r.appendChild(r.ownerDocument.createTextNode(l))
            } else {
                for (var k = 0; k < l._parts.length; k++) {
                    var m = l._parts[k];
                    if (m[0] == "tspan") {
                        var n = this._makeNode(r, m[0], m[2]);
                        n.appendChild(r.ownerDocument.createTextNode(m[1]));
                        r.appendChild(n)
                    } else {
                        if (m[0] == "tref") {
                            var n = this._makeNode(r, m[0], m[2]);
                            n.setAttributeNS(d.svg.xlinkNS, "href", m[1]);
                            r.appendChild(n)
                        } else {
                            if (m[0] == "textpath") {
                                var o = d.extend({},
                                m[2]);
                                o.href = null;
                                var n = this._makeNode(r, m[0], o);
                                n.setAttributeNS(d.svg.xlinkNS, "href", m[2].href);
                                n.appendChild(r.ownerDocument.createTextNode(m[1]));
                                r.appendChild(n)
                            } else {
                                r.appendChild(r.ownerDocument.createTextNode(m[1]))
                            }
                        }
                    }
                }
            }
            return r
        },
        other: function (i, l, k) {
            var j = this._args(arguments, ["name"]);
            return this._makeNode(j.parent, j.name, j.settings || {})
        },
        _makeNode: function (j, m, k) {
            j = j || this._svg;
            var l = this._svg.ownerDocument.createElementNS(d.svg.svgNS, m);
            for (var m in k) {
                var i = k[m];
                if (i != null && i != null && (typeof i != "string" || i != "")) {
                    l.setAttribute(d.svg._attrNames[m] || m, i)
                }
            }
            j.appendChild(l);
            return l
        },
        add: function (i, k) {
            var j = this._args((arguments.length == 1 ? [null, i] : arguments), ["node"]);
            var l = this;
            j.parent = j.parent || this._svg;
            try {
                if (d.svg._renesis) {
                    throw "Force traversal"
                }
                j.parent.appendChild(j.node.cloneNode(true))
            } catch (m) {
                j.node = (j.node.jquery ? j.node : d(j.node));
                j.node.each(function () {
                    var n = l._cloneAsSVG(this);
                    if (n) {
                        j.parent.appendChild(n)
                    }
                })
            }
            return this
        },
        _cloneAsSVG: function (o) {
            var l = null;
            if (o.nodeType == 1) {
                l = this._svg.ownerDocument.createElementNS(d.svg.svgNS, this._checkName(o.nodeName));
                for (var j = 0; j < o.attributes.length; j++) {
                    var k = o.attributes.item(j);
                    if (k.nodeName != "xmlns" && k.nodeValue) {
                        if (k.prefix == "xlink") {
                            l.setAttributeNS(d.svg.xlinkNS, k.localName, k.nodeValue)
                        } else {
                            l.setAttribute(this._checkName(k.nodeName), k.nodeValue)
                        }
                    }
                }
                for (var j = 0; j < o.childNodes.length; j++) {
                    var m = this._cloneAsSVG(o.childNodes[j]);
                    if (m) {
                        l.appendChild(m)
                    }
                }
            } else {
                if (o.nodeType == 3) {
                    if (d.trim(o.nodeValue)) {
                        l = this._svg.ownerDocument.createTextNode(o.nodeValue)
                    }
                } else {
                    if (o.nodeType == 4) {
                        if (d.trim(o.nodeValue)) {
                            try {
                                l = this._svg.ownerDocument.createCDATASection(o.nodeValue)
                            } catch (n) {
                                l = this._svg.ownerDocument.createTextNode(o.nodeValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))
                            }
                        }
                    }
                }
            }
            return l
        },
        _checkName: function (i) {
            i = (i.substring(0, 1) >= "A" && i.substring(0, 1) <= "Z" ? i.toLowerCase() : i);
            return (i.substring(0, 4) == "svg:" ? i.substring(4) : i)
        },
        load: function (k, i) {
            i = (typeof i == "boolean" ? {
                addTo: i
            } : (typeof i == "function" ? {
                onLoad: i
            } : i || {}));
            if (!i.addTo) {
                this.clear(false)
            }
            var l = [this._svg.getAttribute("width"), this._svg.getAttribute("height")];
            var o = this;
            var j = function (p) {
                p = d.svg.local.errorLoadingText + ": " + p;
                if (i.onLoad) {
                    i.onLoad.apply(o._container || o._svg, [o, p])
                } else {
                    o.text(null, 10, 20, p)
                }
            };
            var m = function (p) {
                var q = new ActiveXObject("Microsoft.XMLDOM");
                q.validateOnParse = false;
                q.resolveExternals = false;
                q.async = false;
                q.loadXML(p);
                if (q.parseError.errorCode != 0) {
                    j(q.parseError.reason);
                    return null
                }
                return q
            };
            var n = function (q) {
                if (!q) {
                    return
                }
                if (q.documentElement.nodeName != "svg") {
                    var u = q.getElementsByTagName("parsererror");
                    var s = (u.length ? u[0].getElementsByTagName("div") : []);
                    j(!u.length ? "???" : (s.length ? s[0] : u[0]).firstChild.nodeValue);
                    return
                }
                var w = {};
                for (var r = 0; r < q.documentElement.attributes.length; r++) {
                    var v = q.documentElement.attributes.item(r);
                    if (!(v.nodeName == "version" || v.nodeName.substring(0, 5) == "xmlns")) {
                        w[v.nodeName] = v.nodeValue
                    }
                }
                o.configure(w, true);
                var t = q.documentElement.childNodes;
                for (var r = 0; r < t.length; r++) {
                    try {
                        if (d.svg._renesis) {
                            throw "Force traversal"
                        }
                        o._svg.appendChild(t[r].cloneNode(true));
                        if (t[r].nodeName == "script") {
                            d.globalEval(t[r].textContent)
                        }
                    } catch (p) {
                        o.add(null, t[r])
                    }
                }
                if (!i.changeSize) {
                    o.configure({
                        width: l[0],
                        height: l[1]
                    })
                }
                if (i.onLoad) {
                    i.onLoad.apply(o._container || o._svg, [o])
                }
            };
            if (k.match("<svg")) {
                n(d.browser.msie ? m(k) : new DOMParser().parseFromString(k, "text/xml"))
            } else {
                d.ajax({
                    url: k,
                    dataType: (d.browser.msie ? "text" : "xml"),
                    success: function (p) {
                        n(d.browser.msie ? m(p) : p)
                    },
                    error: function (p, r, q) {
                        j(r + (q ? " " + q.message : ""))
                    }
                })
            }
            return this
        },
        remove: function (i) {
            i = (i.jquery ? i[0] : i);
            i.parentNode.removeChild(i);
            return this
        },
        clear: function (i) {
            if (i) {
                this.configure({},
                true)
            }
            while (this._svg.firstChild) {
                this._svg.removeChild(this._svg.firstChild)
            }
            return this
        },
        toSVG: function (i) {
            i = i || this._svg;
            return (typeof XMLSerializer == "undefined" ? this._toSVG(i) : new XMLSerializer().serializeToString(i))
        },
        _toSVG: function (l) {
            var n = "";
            if (!l) {
                return n
            }
            if (l.nodeType == 3) {
                n = l.nodeValue
            } else {
                if (l.nodeType == 4) {
                    n = "<![CDATA[" + l.nodeValue + "]]>"
                } else {
                    n = "<" + l.nodeName;
                    if (l.attributes) {
                        for (var j = 0; j < l.attributes.length; j++) {
                            var k = l.attributes.item(j);
                            if (!(d.trim(k.nodeValue) == "" || k.nodeValue.match(/^\[object/) || k.nodeValue.match(/^function/))) {
                                n += " " + (k.namespaceURI == d.svg.xlinkNS ? "xlink:" : "") + k.nodeName + '="' + k.nodeValue + '"'
                            }
                        }
                    }
                    if (l.firstChild) {
                        n += ">";
                        var m = l.firstChild;
                        while (m) {
                            n += this._toSVG(m);
                            m = m.nextSibling
                        }
                        n += "</" + l.nodeName + ">"
                    } else {
                        n += "/>"
                    }
                }
            }
            return n
        },
        _escapeXML: function (i) {
            i = i.replace(/&/g, "&amp;");
            i = i.replace(/</g, "&lt;");
            i = i.replace(/>/g, "&gt;");
            return i
        }
    });

    function b() {
        this._path = ""
    }
    d.extend(b.prototype, {
        reset: function () {
            this._path = "";
            return this
        },
        move: function (j, k, i) {
            i = (a(j) ? k : i);
            return this._coords((i ? "m" : "M"), j, k)
        },
        line: function (j, k, i) {
            i = (a(j) ? k : i);
            return this._coords((i ? "l" : "L"), j, k)
        },
        horiz: function (j, i) {
            this._path += (i ? "h" : "H") + (a(j) ? j.join(" ") : j);
            return this
        },
        vert: function (i, j) {
            this._path += (j ? "v" : "V") + (a(i) ? i.join(" ") : i);
            return this
        },
        curveC: function (i, k, j, m, l, n, o) {
            o = (a(i) ? k : o);
            return this._coords((o ? "c" : "C"), i, k, j, m, l, n)
        },
        smoothC: function (m, i, l, k, j) {
            j = (a(m) ? i : j);
            return this._coords((j ? "s" : "S"), m, i, l, k)
        },
        curveQ: function (k, l, j, m, i) {
            i = (a(k) ? l : i);
            return this._coords((i ? "q" : "Q"), k, l, j, m)
        },
        smoothQ: function (j, k, i) {
            i = (a(j) ? k : i);
            return this._coords((i ? "t" : "T"), j, k)
        },
        _coords: function (r, k, m, l, n, o, p) {
            if (a(k)) {
                for (var q = 0; q < k.length; q++) {
                    var j = k[q];
                    this._path += (q == 0 ? r : " ") + j[0] + "," + j[1] + (j.length < 4 ? "" : " " + j[2] + "," + j[3] + (j.length < 6 ? "" : " " + j[4] + "," + j[5]))
                }
            } else {
                this._path += r + k + "," + m + (l == null ? "" : " " + l + "," + n + (o == null ? "" : " " + o + "," + p))
            }
            return this
        },
        arc: function (o, p, l, r, s, k, m, q) {
            q = (a(o) ? p : q);
            this._path += (q ? "a" : "A");
            if (a(o)) {
                for (var n = 0; n < o.length; n++) {
                    var j = o[n];
                    this._path += (n == 0 ? "" : " ") + j[0] + "," + j[1] + " " + j[2] + " " + (j[3] ? "1" : "0") + "," + (j[4] ? "1" : "0") + " " + j[5] + "," + j[6]
                }
            } else {
                this._path += o + "," + p + " " + l + " " + (r ? "1" : "0") + "," + (s ? "1" : "0") + " " + k + "," + m
            }
            return this
        },
        close: function () {
            this._path += "z";
            return this
        },
        path: function () {
            return this._path
        }
    });
    b.prototype.moveTo = b.prototype.move;
    b.prototype.lineTo = b.prototype.line;
    b.prototype.horizTo = b.prototype.horiz;
    b.prototype.vertTo = b.prototype.vert;
    b.prototype.curveCTo = b.prototype.curveC;
    b.prototype.smoothCTo = b.prototype.smoothC;
    b.prototype.curveQTo = b.prototype.curveQ;
    b.prototype.smoothQTo = b.prototype.smoothQ;
    b.prototype.arcTo = b.prototype.arc;

    function h() {
        this._parts = []
    }
    d.extend(h.prototype, {
        reset: function () {
            this._parts = [];
            return this
        },
        string: function (i) {
            this._parts[this._parts.length] = ["text", i];
            return this
        },
        span: function (j, i) {
            this._parts[this._parts.length] = ["tspan", j, i];
            return this
        },
        ref: function (i, j) {
            this._parts[this._parts.length] = ["tref", i, j];
            return this
        },
        path: function (j, i, k) {
            this._parts[this._parts.length] = ["textpath", i, d.extend({
                href: j
            },
            k || {})];
            return this
        }
    });
    d.fn.svg = function (j) {
        var i = Array.prototype.slice.call(arguments, 1);
        if (typeof j == "string" && j == "get") {
            return d.svg["_" + j + "SVG"].apply(d.svg, [this[0]].concat(i))
        }
        return this.each(function () {
            if (typeof j == "string") {
                d.svg["_" + j + "SVG"].apply(d.svg, [this].concat(i))
            } else {
                d.svg._attachSVG(this, j || {})
            }
        })
    };

    function a(i) {
        return (i && i.constructor == Array)
    }
    d.svg = new g()
})(jQuery);
(function (d) {
    d.each(["x", "y", "width", "height", "rx", "ry", "cx", "cy", "r", "x1", "y1", "x2", "y2", "stroke-width", "strokeWidth", "opacity", "fill-opacity", "fillOpacity", "stroke-opacity", "strokeOpacity", "font-size", "fontSize"], function (h, g) {
        var j = g.charAt(0).toUpperCase() + g.substr(1);
        d.fx.step["svg" + j] = d.fx.step["svg-" + g] = function (i) {
            var m = d.svg._attrNames[g] || g;
            var k = i.elem.attributes.getNamedItem(m);
            if (!i.set) {
                i.start = (k ? parseFloat(k.nodeValue) : 0);
                var n = i.options.curAnim["svg-" + g] || i.options.curAnim["svg" + j];
                if (/^[+-]=/.exec(n)) {
                    i.end = i.start + parseFloat(n.replace(/=/, ""))
                }
                d(i.elem).css(m, "");
                i.set = true
            }
            var l = (i.pos * (i.end - i.start) + i.start) + (i.unit == "%" ? "%" : "");
            (k ? k.nodeValue = l : i.elem.setAttribute(m, l))
        }
    });
    d.fx.step.svgViewBox = d.fx.step["svg-viewBox"] = function (g) {
        var h = g.elem.attributes.getNamedItem("viewBox");
        if (!g.set) {
            g.start = a(h ? h.nodeValue : "");
            var l = g.options.curAnim["svg-viewBox"] || g.options.curAnim.svgViewBox;
            g.end = a(l);
            if (/^[+-]=/.exec(l)) {
                l = l.split(" ");
                while (l.length < 4) {
                    l.push("0")
                }
                for (var k = 0; k < 4; k++) {
                    if (/^[+-]=/.exec(l[k])) {
                        g.end[k] = g.start[k] + parseFloat(l[k].replace(/=/, ""))
                    }
                }
            }
            g.set = true
        }
        var j = d.map(g.start, function (m, o) {
            return (g.pos * (g.end[o] - m) + m)
        }).join(" ");
        (h ? h.nodeValue = j : g.elem.setAttribute("viewBox", j))
    };

    function a(g) {
        var j = g.split(" ");
        for (var h = 0; h < j.length; h++) {
            j[h] = parseFloat(j[h]);
            if (isNaN(j[h])) {
                j[h] = 0
            }
        }
        while (j.length < 4) {
            j.push(0)
        }
        return j
    }
    d.fx.step.svgTransform = d.fx.step["svg-transform"] = function (n) {
        var k = n.elem.attributes.getNamedItem("transform");
        if (!n.set) {
            n.start = b(k ? k.nodeValue : "");
            n.end = b(n.end, n.start);
            n.set = true
        }
        var m = "";
        for (var g = 0; g < n.end.order.length; g++) {
            switch (n.end.order.charAt(g)) {
                case "t":
                    m += (n.start.translateX != n.end.translateX || n.start.translateY != n.end.translateY ? " translate(" + (n.pos * (n.end.translateX - n.start.translateX) + n.start.translateX) + "," + (n.pos * (n.end.translateY - n.start.translateY) + n.start.translateY) + ")" : "");
                    break;
                case "s":
                    m += (n.start.scaleX != n.end.scaleX || n.start.scaleY != n.end.scaleY ? " scale(" + (n.pos * (n.end.scaleX - n.start.scaleX) + n.start.scaleX) + "," + (n.pos * (n.end.scaleY - n.start.scaleY) + n.start.scaleY) + ")" : "");
                    break;
                case "r":
                    m += (n.start.rotateA != n.end.rotateA || n.start.rotateX != n.end.rotateX || n.start.rotateY != n.end.rotateY ? " rotate(" + (n.pos * (n.end.rotateA - n.start.rotateA) + n.start.rotateA) + "," + (n.pos * (n.end.rotateX - n.start.rotateX) + n.start.rotateX) + "," + (n.pos * (n.end.rotateY - n.start.rotateY) + n.start.rotateY) + ")" : "");
                    break;
                case "x":
                    m += (n.start.skewX != n.end.skewX ? " skewX(" + (n.pos * (n.end.skewX - n.start.skewX) + n.start.skewX) + ")" : "");
                case "y":
                    m += (n.start.skewY != n.end.skewY ? " skewY(" + (n.pos * (n.end.skewY - n.start.skewY) + n.start.skewY) + ")" : "");
                    break;
                case "m":
                    var l = "";
                    for (var h = 0; h < 6; h++) {
                        l += "," + (n.pos * (n.end.matrix[h] - n.start.matrix[h]) + n.start.matrix[h])
                    }
                    m += " matrix(" + l.substr(1) + ")";
                    break
            }
        } (k ? k.nodeValue = m : n.elem.setAttribute("transform", m))
    };

    function b(g, j) {
        g = g || "";
        if (typeof g == "object") {
            g = g.nodeValue
        }
        var k = d.extend({
            translateX: 0,
            translateY: 0,
            scaleX: 0,
            scaleY: 0,
            rotateA: 0,
            rotateX: 0,
            rotateY: 0,
            skewX: 0,
            skewY: 0,
            matrix: [0, 0, 0, 0, 0, 0]
        },
        j || {});
        k.order = "";
        var i = /([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g;
        var h = i.exec(g);
        while (h) {
            switch (h[1]) {
                case "translate":
                    k.order += "t";
                    k.translateX = parseFloat(h[2]);
                    k.translateY = (h[3] ? parseFloat(h[3]) : 0);
                    break;
                case "scale":
                    k.order += "s";
                    k.scaleX = parseFloat(h[2]);
                    k.scaleY = (h[3] ? parseFloat(h[3]) : k.scaleX);
                    break;
                case "rotate":
                    k.order += "r";
                    k.rotateA = parseFloat(h[2]);
                    k.rotateX = (h[3] ? parseFloat(h[3]) : 0);
                    k.rotateY = (h[4] ? parseFloat(h[4]) : 0);
                    break;
                case "skewX":
                    k.order += "x";
                    k.skewX = parseFloat(h[2]);
                    break;
                case "skewY":
                    k.order += "y";
                    k.skewY = parseFloat(h[2]);
                    break;
                case "matrix":
                    k.order += "m";
                    k.matrix = [parseFloat(h[2]), parseFloat(h[3]), parseFloat(h[4]), parseFloat(h[5]), parseFloat(h[6]), parseFloat(h[7])];
                    break
            }
            h = i.exec(g)
        }
        return k
    }
    d.each(["fill", "stroke"], function (h, g) {
        var j = g.charAt(0).toUpperCase() + g.substr(1);
        d.fx.step["svg" + j] = d.fx.step["svg-" + g] = function (i) {
            if (!i.set) {
                i.start = e(i.elem, g);
                var l = (i.end == "none");
                i.end = (l ? e(i.elem.parentNode, g) : f(i.end));
                i.end[3] = l;
                d(i.elem).css(g, "");
                i.set = true
            }
            var k = i.elem.attributes.getNamedItem(g);
            var m = "rgb(" + [Math.min(Math.max(parseInt((i.pos * (i.end[0] - i.start[0])) + i.start[0], 10), 0), 255), Math.min(Math.max(parseInt((i.pos * (i.end[1] - i.start[1])) + i.start[1], 10), 0), 255), Math.min(Math.max(parseInt((i.pos * (i.end[2] - i.start[2])) + i.start[2], 10), 0), 255)].join(",") + ")";
            m = (i.end[3] && i.state == 1 ? "none" : m);
            (k ? k.nodeValue = m : i.elem.setAttribute(g, m))
        }
    });

    function e(i, g) {
        var h;
        do {
            h = (i.attributes && i.attributes.getNamedItem(g) ? i.attributes.getNamedItem(g).nodeValue : "");
            if ((h != "" && h != "none") || d(i).hasClass("hasSVG")) {
                break
            }
        } while (i = i.parentNode);
        return f(h)
    }
    function f(h) {
        var g;
        if (h && h.constructor == Array && (h.length == 3 || h.length == 4)) {
            return h
        }
        if (g = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(h)) {
            return [parseInt(g[1], 10), parseInt(g[2], 10), parseInt(g[3], 10)]
        }
        if (g = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(h)) {
            return [parseFloat(g[1]) * 2.55, parseFloat(g[2]) * 2.55, parseFloat(g[3]) * 2.55]
        }
        if (g = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(h)) {
            return [parseInt(g[1], 16), parseInt(g[2], 16), parseInt(g[3], 16)]
        }
        if (g = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(h)) {
            return [parseInt(g[1] + g[1], 16), parseInt(g[2] + g[2], 16), parseInt(g[3] + g[3], 16)]
        }
        return c[d.trim(h).toLowerCase()] || c.none
    }
    var c = {
        "": [255, 255, 255, 1],
        none: [255, 255, 255, 1],
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        grey: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
})(jQuery);

/*
====================================
====================================
====================================
*/




/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};