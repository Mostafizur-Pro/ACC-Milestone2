import React, { useState } from "react";
import Child from "./Child";

const Parents = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="bg-gray-200 w-2/6 mx-auto my-5 py-5">
        <div>
          <h1 className="text-gray-400 text-xl font-bold">Parants</h1>
          <h1 className="text-xl text-red-600 mb-10">{count}</h1>
          {/* <div>
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
          </div> */}
        </div>
      </div>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parents;
