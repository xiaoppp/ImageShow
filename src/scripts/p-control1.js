RL.Utils.registerNS("Controls");
Controls.ImageItem = RL.Component.extend({
    _itemdata: null,
    _image: null,
    _context: null,
    _isloaded: false,
    _isdrawn: false,
    _scale: 1,
    _isStopDraw: true,

    _direction: null,
    _imageURL: null,
    _left: 0,
    _top: 0,
    _size: 0,
    _itemTime: 0,

    constructor: function (context, data) {
        this._context = context;
        this._itemdata = data;

        this.loadDefaultData(this._itemdata);
    },

    loadDefaultData: function (pdata) {
        this._isStopDraw = true;
        this._scale = IApplication.Item_Scale;

        this._imageURL = pdata.ImageURL;
        this._left = pdata.Left;
        this._top = pdata.Top;
        this._size = pdata.Size;
        this._direction = pdata.Direction;
        this._itemTime = pdata.ItemTime;
    },

    update: function () {
        // draw if the currenttime == item time
        // initlize default value
        if (this._itemTime == IApplication.Current_Time) {
            this.loadDefaultData(this._itemdata);
            this._isStopDraw = false;
        }

        if (this._isStopDraw)
            return;
        if (!this._image) {
            this._image = new Image();
            this._image.src = this._imageURL;
        }
        if (this._image) {
            if (this._image.width > 0) {
                this._isloaded = true;
            }
        }
    },
    draw: function () {
        if (this._isStopDraw)
            return;

        var size = IApplication.Item_Size;

        this._context.save();

        if (this._isdrawn) {
            if (this._direction.V && this._direction.V == "UP")
                this._top -= 1;
            else if (this._direction.V && this._direction.V == "DOWN")
                this._top += 1;
            if (this._direction.H && this._direction.H == "LEFT")
                this._left -= 1;
            if (this._direction.H && this._direction.H == "RIGHT")
                this._left += 1;

            this._scale += IApplication.Item_Additional_Scale;
        }

         
                if (this._scale > 5.1) {
                    this._isStopDraw = true;
                }
         //stop condition
//        if (IApplication.Current_Time > this._itemTime) {
//            if (IApplication.Current_Time - this._itemTime > 5)
//                this._isStopDraw = true;
//        }
//        else {
//            if (IApplication.Current_Time - this._itemTime > -5)
//                this._isStopDraw = true;
//        }

        //we draw image here 
        if (this._isloaded && !this._isStopDraw) {
            this._context.drawImage(this._image, this._left, this._top, size * this._scale, size * this._scale);
            this._isdrawn = true;

            //border
            this._context.strokeStyle = "white"; // "#222";
            this._context.lineWidth = 1;
            this._context.strokeRect(this._left, this._top, size * this._scale, size * this._scale);
        }

        this._context.restore();
    }
});