import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      {" "}
      <div className="bg-gray-200 w-2/6 mx-auto my-5 py-5">
        <div>
          <h1 className="text-gray-400 text-xl font-bold">Child</h1>
          <h1 className="text-xl text-red-600 mb-10">{count}</h1>
          <div>
            <button
              onClick={() => setCount(count - 1)}
              className="btn btn-info mx-5 capitalize"
            >
              Decrement
            </button>
            <button
              onClick={() => setCount((prvState) => prvState + 1)}
              className="btn btn-success capitalize"
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
