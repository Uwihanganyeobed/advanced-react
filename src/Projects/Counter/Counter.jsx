import React, { useState } from "react";
import "./style.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset=()=>setCount(0);

  return (
    <>
      <div className="container">
        <h2>Counter App</h2>
        <h1 className="number">{count}</h1>
      </div>
      <div className="instructions">
        <h3>Please Read well These instructions</h3>
        <ol className="lists">
          <li>Press 0 for Resetting App to 0</li>
          <li>Press + for Add 1 to Count</li>
          <li>Press - for Add 1 to Count</li>
        </ol>
      </div>
      <section className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={reset} className="increment">
          0
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </section>
      <p className="myfooter">Copyright @ vargas Obed Developer</p>
    </>
  );
}

export default Counter;
