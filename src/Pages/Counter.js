import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type == "DECREMENT") {
      return state - action.payload;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-gray-400 w-2/6 mx-auto text-center">
      <h1 className="text-xl text-white">{state}</h1>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}
        className="btn m-5"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
        className="btn m-5"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
