import React, { useState, useMemo } from "react";

const findPrime = (num) => {
  // console.log("I am inside the findPrime function");
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};

const Demo = () => {
  const [num, setNum] = useState("");
  const [isThemeDark, setIsThemeDark] = useState(false);
  const cachedValue = useMemo(() => findPrime(num), [num]);

  // console.log("Rendered Demo...");
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isThemeDark && "bg-gray-600 text-white")
      }
    >
    <div className=" border-2 p-4 m-2 border-lime-500 bg-border-lime-900">
        <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        className={
          "border-2 border-green-600 m-2 p-2 " +
          (isThemeDark && "bg-lime-600 text-black")
        }
      />
      <p className="font-bold text-xl m-2 "> output : {cachedValue} </p>
      <button
        className="border border-black rounded-lg m-2 p-2 bg-orange-700"
        onClick={() => {
          setIsThemeDark(!isThemeDark);
        }}
      >
        Click Me
      </button>
    
      
    </div>
    </div>
  );
};

export default Demo;
