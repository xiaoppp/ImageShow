
RL = {};
RL.Utils = Base.extend({},
{
    // register a name space to window object
    registerNS: function (a) {
        var b = a.split(".");
        var d = window;
        for (var c = 0; c < b.length; c++) {
            if (typeof d[b[c]] == "undefined") {
                d[b[c]] = new Object()
            }
            d = d[b[c]]
        }
    },
    map: function (a, d, b, c, e) {
        return c + (e - c) * ((a - d) / (b - d))
    },
    lerp: function (b, c, a) {
        return ((c - b) * a) + b
    },
    TWO_PI: Math.PI * 2,
    HALF_PI: Math.PI / 2
});
RL.Point = Base.extend({
    x: 0,
    y: 0,
    constructor: function (b, a) {
        this.x = b;
        this.y = a
    }
});
RL.Rect = Base.extend({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    constructor: function (c, d, b, a) {
        this.x = c;
        this.y = d;
        this.width = b;
        this.height = a
    },
    contains: function (a) {
        return a.x >= this.x && a.x <= this.x + this.width && a.y >= this.y && a.y <= this.y + this.height
    },
    toString: function () {
        return [this.x, this.y, this.width, this.height].toString()
    }
});
RL.Mouse = Base.extend({
    isDown: false,
    isInWindow: false,
    position: null,
    constructor: function (b, a, c) {
        this.isDown = b;
        this.isInWindow = a;
        this.position = c
    }
});


RL.Component = Base.extend({
    _children: null,
    constructor: function () {
        this._children = $([])
    },
    update: function () {
        this._children.each(function () {
            this.update()
        })
    },
    draw: function () {
        this._children.each(function () {
            this.draw()
        })
    },
    removeChild: function (b) {
        for (var a = 0; a < this._children.length; a++) {
            if (this._children[a] == b) {
                this._children.splice(a, 1);
                return
            }
        }
    }
});

RL.CanvasComponent = RL.Component.extend({
    _context: null,
    zIndex: 0,
    constructor: function (a) {
        this.base();
        this._context = a
    },
    draw: function () {
        this._children.sort(function (c, d) {
            return c.zIndex - d.zIndex
        });
        this.base()
    }
});

RL.App = RL.Component.extend({
    constructor: function () {
        this.base();
        RL.App.lastTime = new Date().getTime();
        RL.App.mouse = new RL.Mouse(false, false, new RL.Point(0, 0));
        RL.App.lastMouse = new RL.Mouse(false, false, new RL.Point(0, 0));

        with ($(d.body)) {
            //everyTime(1000 / 100, "render", $.proxy(this.render, this));
            everyTime(1000 / 60, "render", $.proxy(this.render, this));
            mousemove($.proxy(this.updateMouseMove, this));
            mousedown($.proxy(this.updateMouseDown, this));
            mouseup($.proxy(this.updateMouseUp, this));
            mouseenter($.proxy(this.updateMouseMove, this));
            mouseleave($.proxy(this.updateMouseLeave, this));
        }
    },
    render: function () {
        RL.App.lastTime = RL.App.now;
        RL.App.now = new Date().getTime();
        if (this.isPaused) {
            return;
        }
        this.update();
        this.draw();
    },
    updateMouseMove: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(RL.App.lastMouse.isDown, true, new RL.Point(a.pageX, a.pageY))
    },
    updateMouseDown: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(true, true, new RL.Point(a.pageX, a.pageY))
    },
    updateMouseUp: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(false, true, new RL.Point(a.pageX, a.pageY))
    },
    updateMouseLeave: function (a) {
        RL.App.lastMouse = RL.App.mouse;
        RL.App.mouse = new RL.Mouse(RL.App.lastMouse.isDown, false, RL.App.lastMouse.position)
    }
},
{
    mouse: null,
    lastMouse: null,
    lastTime: null,
    now: null
});


