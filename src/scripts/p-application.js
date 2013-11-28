var IApplication = RL.App.extend({
    itemsdata: null,
    data: null,
    items: null,
    _canvas: null,
    _timeLine: 0,
    _selectItem: null,

    constructor: function (data) {
        this.base();
        this.itemsdata = data;

        this._updateSize();

        this._canvas = $("#bcanvas");
        this._canvas = this._canvas[0];
        this._context = this._canvas.getContext("2d");

        this._canvas.width = $("#rootContainer").width();
        this._canvas.height = $("#rootContainer").height();

        for (var i = 0; i < data.length; i++) {
            var item = new Controls.ImageItem(this._context, data[i]);
            this._children.push(item);
        }
    },

    _updateSize: function () {

    },

    _updateMousePosition: function () {
        var x = RL.App.mouse.position.x;
        var y = RL.App.mouse.position.y;

        for (var i = 0; i < data.length; i++) {
            var left = data[i].Left;
            var top = data[i].Top;
            var itemtime = data[i].ItemTime;

            var period = IApplication.Current_Time - itemtime;

            if (IApplication.Current_Time > itemtime) {
                if (period > 5)
                    break;
            }
            else {
                if (period > -5)
                    break;
            }

            if (this._direction.V == "UP")
                top -= period;
            else if (this._direction.V == "DOWN")
                top += period;
            if (this._direction.H == "LEFT")
                left -= period;
            if (this._direction.H == "RIGHT")
                left += period;

            if (x > left
                    && x < left + IApplication.Item_Size
                    && y > top
                    && y < top + IApplication.Item_Size
            ) { }
            //{ _selectItem = ; }

        }

    },

    update: function () {
        this.base();
    },
    draw: function () {
        this._timeLine += 1;

        if (this._timeLine == IApplication.Current_Time * 60)
            IApplication.Current_Time += 1;

        if (this._timeLine == 600) {
            this._timeLine = 0;
            IApplication.Current_Time = 1;
        }

        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.base();
    }
},
{
    Current_Time: 1,
    Item_Scale: 1,
    Item_Additional_Scale: 0.01,
    Item_Size: 30
});