import React from "react";

export default function MapForEach(){
    let arr = [1,2,3];
    return(
        <>
        Original array = {"[" + arr + "]"}<br/>
        Using Map = 
        {arr.map(i => {
            return ('['+i * 5 +']') //returns a new array
        })}
        <br/>
        Original array = {"[" + arr + "]"}<br/>
        Using filter = 
        {arr.filter(v => v < 3).map(i =>{
            return ('['+i+']') //returns only the values which satisfies the condition given in filters
        })}
        <br/>
        Original array = {"[" + arr + "]"}<br/>
        Using ForEach,  
        {arr.forEach((v,i,a) => {
            a[i]=v*10 //original array will be updated
        })}
        Original array updates = {"[" + arr + "]"}
        </>
    )
}