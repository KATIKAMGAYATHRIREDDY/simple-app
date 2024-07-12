import React from "react";

export default function CallBack(){
    function one(val){
        val()
        console.log('After Call Back function')
    }
    function two(){
        console.log('Inside Call Back functions')
    }//this is a call back function
    one(two)//Now here passing two which is a function as an parameter to another function one

    return<></>
}
    