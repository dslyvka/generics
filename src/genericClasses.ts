type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

class State<T> {
  private _state: T;

  constructor(initialState: T) {
    this._state = initialState;
  }

  get state() {
    return this._state;
  }
  set state(newState: T) {
    this._state = newState;
  }
}

const animationState = new State<TAnimationState>("playing");
const httpState = new State<THttpState>("request");

export {};
