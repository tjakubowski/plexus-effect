/**
 * Returns random float number from min (included) to max (included)
 * @param min
 * @param max
 * @returns {string}
 */

Math.randomFloat = function (min, max) {
    return (Math.random() * (max - min) + min).toFixed(4);
};

/**
 * Returns random integer number from min (included) to max (included)
 * @param min
 * @param max
 * @returns {number}
 */
Math.randomInt = function (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

/**
 * Creates new, 2D vector at x and y
 * @param x
 * @param y
 * @returns {Vector2}
 * @constructor
 */
var Vector2 = function (x, y) {
    this.x = x;
    this.y = y;
    this.magnitude = null;

    var that = this;

    /**
     * Returns a magnitude of vector
     * @returns {number|*}
     * @constructor
     */
    this.Magnitude = function () {
        if(that.magnitude == null)
            that.magnitude = Math.sqrt(Math.pow(that.x, 2) + Math.pow(that.y, 2));
        return that.magnitude;
    };

    /**
     * Returns a new, normalized vector
     * @returns {Vector2}
     * @constructor
     */
    this.Normalize = function () {
        return new Vector2(that.x/that.Magnitude(), that.y/that.Magnitude());
    };

    /**
     * Adds vector v1 to existing one
     * @param v1
     * @constructor
     */
    this.Add = function (v1) {
        that.x += v1.x;
        that.y += v1.y;
    };

    /**
     * Multiplies a vector by number
     * @param number
     * @constructor
     */
    this.Multiply = function (number) {
        that.x *= number;
        that.y *= number;
    };

    return this;
};

// Static methods

/**
 * Returns a new vector pointing up
 * @type {Vector2}
 */
Vector2.up = new Vector2(0,1);

/**
 * Returns a new vector pointing down
 * @type {Vector2}
 */
Vector2.down = new Vector2(0,-1);

/**
 * Returns a new vector pointing left
 * @type {Vector2}
 */
Vector2.left = new Vector2(-1,0);

/**
 * Returns a new vector pointing right
 * @type {Vector2}
 */
Vector2.right = new Vector2(1,0);

/**
 * Returns a new vector pointing top right
 * @type {Vector2}
 */
Vector2.one = new Vector2(1,1);

/**
 * Returns a new vector pointing bottom left
 * @type {Vector2}
 */
Vector2.none = new Vector2(-1,-1);

/**
 * Returns a new vector pointing zero
 * @type {Vector2}
 */
Vector2.zero = new Vector2(0,0);

/**
 * Returns a number representing distance between v1 and v2
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @returns {number|*}
 * @constructor
 */
Vector2.Distance = function (v1, v2) {
    var x = v1.x-v2.x;
    var y = v1.y-v2.y;
    return (new Vector2(x, y)).Magnitude();
};

/**
 * Returns a number to compare distance fast between v1 and v2
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @returns {number|*}
 * @constructor
 */
Vector2.DistanceFast = function (v1, v2) {
    var x = v1.x-v2.x;
    var y = v1.y-v2.y;

    return Math.pow(x, 2) + Math.pow(y, 2);
};

/**
 * Returns a new vector located in the middle of v1 and v2 vectors
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @returns {Vector2}
 * @constructor
 */
Vector2.Between = function (v1, v2) {
    var x = v2.x - v1.x;
    var y = v2.y - v1.y;
    return new Vector2(v1.x + x/2, v1.y + y/2);
};

/**
 *  Returns a new vector representing a move from v1 to v2 vector
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @returns {Vector2}
 * @constructor
 */
Vector2.VectorTo = function (v1, v2) {
    var x = v2.x - v1.x;
    var y = v2.y - v1.y;
    return new Vector2(x, y);
};

/**
 *  Returns a new vector located in rectangle having a vertex in v1 and second one in v2
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @returns {Vector2}
 * @constructor
 */
Vector2.RandomBetween = function (v1, v2) {
    var x = Math.randomInt(v1.x, v2.x);
    var y = Math.randomInt(v1.y, v2.y);
    return new Vector2(x, y);
};

/**
 *  Returns a new vector located in range from v1
 * @param v1
 * @param range
 * @returns {Vector2}
 * @constructor
 */
Vector2.RandomInRange = function (v1, range) {
    var x = Math.randomInt(-range, range);
    var y = Math.randomInt(-range, range);
    return new Vector2(v1.x + x, v1.y + y);
};