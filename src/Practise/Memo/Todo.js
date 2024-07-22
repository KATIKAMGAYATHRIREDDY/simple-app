import React,{memo} from 'react'

const Todo = ({todos}) => {
  console.log('Child Render!');
  return (
    <div>
      Todo App
      {todos.length > 0 && todos.map((item, index)=>{
        return (<p key={index}>{item}</p>)
      })}
    </div>
  )
}

export default memo(Todo)
