import { memo } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h5>My Todos</h5>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todo);