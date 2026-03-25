const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function createStore(reducer) {
  let state;
  const listeners = [];

  state = reducer(state, { type: "", payload: 0 });

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener(state));
      return;
    },
    subscribe: (listener) => listeners.push(listener),
  };
}

function logState(state) {
  console.log(state);
}
const store = createStore(counterReducer);
store.subscribe(logState);

store.dispatch({ type: "INCREMENT", payload: 8 });
store.dispatch({ type: "DECREMENT", payload: 6 });
store.dispatch({ type: "INCREMENT", payload: 3 });
store.dispatch({ type: "DECREMENT", payload: 5 });
store.dispatch({ type: "INCREMENT", payload: 8 });
store.dispatch({ type: "DECREMENT", payload: 2 });
