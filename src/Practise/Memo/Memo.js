import React, { useState } from 'react'
import Todo from './Todo';

const Memo = () => {
    const [count, setCount] =  useState(0);
    const [todos, setTodos] = useState(['Task 1', 'Task2']);

    const increm = () => {
        setCount(() => count + 1);
        console.log("Count : ", count);
    }
  return (
    <div>
      {count}<br/>
      <button onClick={increm}>Counter Incrememt</button>
        <Todo todos={todos} />
    </div>
  )
}

export default Memo
