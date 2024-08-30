import React from 'react'

const Hoisting = () => {
    //functions created using function keyword can be hoisted but not the arrow functions
    sum();
    //console.log(add());
    //this is an arrow function so can't be used before defined
    //console.log(abc());
    //this is an arrow function so can't be used before defined
    const add=()=>{
        console.log('add');
    }
    var abc=()=>{
        console.log('var');
    }
    function sum()//can be hoisted
    {
    console.log('Sum func');
    }
        
  return (<></>)
}

export default Hoisting
