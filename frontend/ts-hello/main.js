var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drow = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Ne more biti manjše od 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getY = function () {
        return this._y;
    };
    return Point;
}());
var point = new Point(1, 2); // TO JE OBJEKT !! instanca od klasa
var x = point.x;
point.x = 10;
point.drow();
