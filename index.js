class Vector {
  constructor(x,y) {
    this._x = x;
    this._y = y;
  }
  
  get x() {
    return this._x;
  }

  set x(val) {
    this._x = val
  }

  get y() {
    return this._y;
  }

  set y(val) {
    this._y = val
  }
  
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  
  set angle(angle) {
    var length = this.length;
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length
  }
  
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  set length(length) {
    var angle = this.angle;
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  clone() {
    return new this.constructor(this.x, this.y);
  }
  
  add(v2) {
    return new this.constructor(this.x + v2.x, this.y + v2.y);
  }

  subtract(v2) {
    return new this.constructor(this.x - v2.x, this.y - v2.y);
  }

  multiply(val) {
    return new this.constructor(this.x * val, this.y * val);
  }

  divide(val) {
    return new this.constructor(this.x / val, this.y / val);
  }

  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
  }
  
  subtractFrom(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
  }

  multiplyBy(val) {
    this.x *= val;
    this.y *= val;
  }

  divideBy(val) {
    this.x /= val;
    this.y /= val;
  }

  normalize() {
    var length = this.length;

    if (length === 0) {
      this.x = 1;
      this.y = 0;
    } else {
      this.divideBy(length);
    }
    return this;
  }

  limitMagnitude(max) {
    if (this.length > max) {
      this.normalize();
      this.multiplyBy(max);
    }
  }
  
  static getDistance(p1, p2) {
    var dx = p2.x - p1.x,
      dy = p2.y - p1.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
  
  static getAngleFromPoints(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  }
}

export default Vector;