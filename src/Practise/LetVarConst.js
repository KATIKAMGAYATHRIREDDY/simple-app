import React from "react";

export default function LetVarConst(){
    // let -> block scoped stmt
    // const -> block-scoped local variable
    // var->function scoped
    let x = 10;
    if(x==10){
    let x = 20;
    console.log(x); //prints 20
    }
    console.log(x); //prints 10;

    //const myName; //throws error as const needs to be initialized
    //const myName='John';
    //const myName='Doe'; //throws  error as const variable can not be reassigned
    //var myName='Doe'; //throws error as myName is reserved for constant above,

    return(
        <>
        </>
    )
}