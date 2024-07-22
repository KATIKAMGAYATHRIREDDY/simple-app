import React,{useMemo} from 'react'

const UseMemo = () => {
    //React’s useMemo hook is a memoization function that caches 
    //a value returned by an expensive function. The goal of the 
    //optimization concept is that the execution of the expensive function 
    //runs only on the first render invoked, or it executes only when a referenced 
    //input parameter has changed its value.
    const num1 = 10;
    const num2 = 4;
    useMemo(()=>{
        console.log('UseMemo', num1 + num2)
       },[num1,num2])        
    return (
    <div>
      <h3>UseMemo</h3>
    </div>
  )
}

export default UseMemo
