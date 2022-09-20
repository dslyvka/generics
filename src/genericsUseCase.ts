type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

const makeState = <T>(initialState: T) => {
  let state = initialState;

  const getState = () => state;

  const setState = (newState: T) => {
    state = newState;
  };

  return {
    getState,
    setState,
  };
};

// const animationState = makeState<TAnimationState>("qweqwe"); => error;
const animationState1 = makeState<TAnimationState>("playing");
const animationState2 = makeState<TAnimationState>("paused");

// const httpState = makeState<THttpState>("aqwq"); => error;
const httpState1 = makeState<THttpState>("request");
const httpState2 = makeState<THttpState>("success");
const httpState3 = makeState<THttpState>("error");

export {};
