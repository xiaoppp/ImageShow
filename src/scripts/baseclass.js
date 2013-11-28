var Base = function () { };
Base.prototype = {
    extend: function (a, c) {
        if (arguments.length > 1) {
            var j = this[a];
            if (j && (typeof c == "function") && (!j.valueOf || j.valueOf() != c.valueOf()) && /\bbase\b/.test(c)) {
                var d = c.valueOf();
                c = function () {
                    var i = this.base || Base.prototype.base;
                    this.base = j;
                    var k = d.apply(this, arguments);
                    this.base = i;
                    return k
                };
                c.valueOf = function (i) {
                    return (i == "object") ? c : d
                };
                c.toString = Base.toString
            }
            this[a] = c
        } else {
            if (a) {
                var e = Base.prototype.extend;
                if (!Base._prototyping && typeof this != "function") {
                    e = this.extend || e
                }
                var g = {
                    toSource: null
                };
                var f = ["constructor", "toString", "valueOf"];
                var b = Base._prototyping ? 0 : 1;
                while (h = f[b++]) {
                    if (a[h] != g[h]) {
                        e.call(this, h, a[h])
                    }
                }
                for (var h in a) {
                    if (!g[h]) {
                        e.call(this, h, a[h])
                    }
                }
            }
        }
        return this
    }
};

Base.extend = function (b, c) {
    var d = Base.prototype.extend;
    Base._prototyping = true;
    var f = new this;
    d.call(f, b);
    f.base = function () { };
    delete Base._prototyping;
    var e = f.constructor;
    var a = f.constructor = function () {
        if (!Base._prototyping) {
            if (this._constructing || this.constructor == a) {
                this._constructing = true;
                e.apply(this, arguments);
                delete this._constructing
            } else {
                if (arguments[0] != null) {
                    return (arguments[0].extend || d).call(arguments[0], f)
                }
            }
        }
    };
    a.extend = this.extend;
    a.prototype = f;
    a.valueOf = function (g) {
        return (g == "object") ? a : e.valueOf()
    };
    d.call(a, c);
    if (typeof a.init == "function") {
        a.init()
    }
    return a
};

