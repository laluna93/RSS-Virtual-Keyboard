class KeyboardState {
  /**
   * @private
   * @type {boolean}
   */
  _capslog;

  get capslog() {
    return this._capslog;
  }

  set capslog(value) {
    this._capslog = value;
    if (this.onCapsLock) {
      this.onCapsLock(this._capslog);
    }
  }

  constructor() {
    this._capslog = false;
  }
}
const state = new KeyboardState();
export default state;
