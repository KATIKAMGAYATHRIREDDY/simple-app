import React,{ useState, useCallback } from 'react'
import Todo from './Todo';

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  //useCallBack hook will memorise a callBack function

  return (
    <div>
        <h3>UseCallBack</h3>
        {/* useCallback hook to prevent the function from being recreated unless necessary. */}
        <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default UseCallBack
