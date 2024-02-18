export class Controls {
  private _keys: Set<string>;
  constructor() {
    this._keys = new Set();

    this.addEventListeners();
  }

  public get keys() {
    return this._keys;
  }

  private addEventListeners() {
    document.addEventListener("keydown", (event) => {
      this._keys.add(event.key.toLowerCase());
    });
    document.addEventListener("keyup", (event) => {
      this._keys.delete(event.key.toLowerCase());
    });
  }
}
