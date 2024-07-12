import React from "react";
export function Child({ setChildData }) {
  return (
    <div>
      Child Block
      <br />
      <input
        type="button"
        value={"Click"}
        onClick={() => setChildData("Updated with Child Data")}
      />
      <br />
    </div>
  );
}
export default Child;
