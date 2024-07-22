import React,{useEffect, useRef, useState} from 'react'

const UseRef = () => {
  const [name, setName] =  useState("");
  const count = useRef(0);
  useEffect(()=>{
    count.current = count.current + 1;
  });
  //Use useRef to track application renders.
  return (
    <div>
      <h3>UseRef</h3>
      <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}} />
      <h5>Typing : {name}</h5>
      <h5>Component rendered {count.current} times</h5>
    </div>
  )
}

export default UseRef
