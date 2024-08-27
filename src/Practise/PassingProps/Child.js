import React from "react";
export function Child({ getValue }) {
  return (
    <div>
      Child Block
      <br />
      <input onChange={getValue}/>
      <br />
    </div>
  );
}
export default Child;
