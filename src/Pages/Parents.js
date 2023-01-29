import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parents = () => {
  const { count } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div className="bg-gray-200 w-2/6 mx-auto my-5 py-5">
        <div>
          <h1 className="text-gray-400 text-xl font-bold">Parants</h1>
          <h1 className="text-xl text-red-600 mb-10">{count}</h1>
        </div>
      </div>
      <Child />
    </div>
  );
};

export default Parents;
