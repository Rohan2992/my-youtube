import React, { useState, useRef } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  var x = 0;
  const ref = useRef(0);
  return (
    <div className="m-4  w-96 h-96 border border-black ">
      <div className=" border-2 p-4 m-2 border-red-400 bg-red-100">
        <p>var: {x}</p>
        <button
          className="border border-red-900 my-2 p-2 bg-red-800 text-white"
          onClick={() => {
            x = x + 1;
            console.log("x : ", x);
          }}
        >
          Click Me
        </button>
      </div>
      <div className=" border-2 p-4 m-2 border-indigo-400 bg-indigo-100">
        <p>useState: {y}</p>
        <button
          className="border border-indigo-900 my-2 p-2 bg-indigo-800 text-white"
          onClick={() => {
            setY(y + 1);
            console.log("y : ", y);
          }}
        >
          Click Me
        </button>
      </div>
      <div className=" border-2 p-4 m-2 border-fuchsia-400 bg-fuchsia-100">
        <p>Ref: {ref.current}</p>
        <button
          className="border border-fuchsia-900 my-2 p-2 bg-fuchsia-800 text-white"
          onClick={() => {
            ref.current = ref.current+1
            console.log("Ref  : ",ref.current);
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Demo2;
