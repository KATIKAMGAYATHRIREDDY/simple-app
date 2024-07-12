import { useState } from "react";
function useAdd() {
  const [count, setCount] = useState(0);
  const up = () => {
    setCount(count + 1);
  };
  const down = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, up, down, reset];
}
export default useAdd;
