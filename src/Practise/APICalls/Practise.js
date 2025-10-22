import React, { useEffect, useState } from "react";

const NewFetch = () => {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4];
  const [list, setList] = useState([
    { id: 1, name: "kgr", age: 26 },
    { id: 2, name: "svsr", age: 30 },
    { id: 3, name: "akhila", age: 25 },
    { id: 4, name: "teja", age: 28 },
  ]);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("response not fetching");
      }
      const result = await response.json();
      setUser(result);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Handle checkbox toggle
  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Delete all checked items
  const handleDelete = () => {
    setList(list.filter((item) => !checkedItems[item.id]));
    setCheckedItems({});
  };

  return (
    <>
      <ul>
        {/* check box */}
        {list.map((li) => (
          <li key={li.id}>
            <input
              type="checkbox"
              checked={!!checkedItems[li.id]}
              onChange={() => handleCheck(li.id)}
            />{" "}
            | {li.name} | {li.age}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>del</button>
      <br />

      {/* just numbers display */}
      {numbers.map((num, index) => (
        <li key={index} style={{ display: "none" }}>
          {num}
        </li>
      ))}
      <br />

      {/* count increment & list display */}
      <div style={{ justifyContent: "space-evenly", display: "flex" }}>
        <button onClick={handleClick}>Click me!</button>
        <p>{count}</p>
        <button onClick={handleReset}>Reset me!</button>
      </div>
      {count > 199 && user.map((u) => <li key={u.id}>{u.title}</li>)}
      <ul>
        {user.slice(0, count).map((u) => (
          <li key={u.id}>{u.title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewFetch;
