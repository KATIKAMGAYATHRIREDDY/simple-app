import { useEffect, useState } from "react";

const Test = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const respo = await res.json();
      console.log(respo);
      setValue(respo);
    };
    data();
  }, []);
  return (
    <>
      {value && value.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default Test;
