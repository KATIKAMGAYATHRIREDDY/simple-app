import React from "react";
import useAdd from "./useAdd";

function Two() {
  const [count, up, down, reset] = useAdd();
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Two;
