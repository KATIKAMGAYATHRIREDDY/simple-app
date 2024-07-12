import React from "react";

export default function CopyConcept(){

    let arr1 = [1,2,3];
    let arr2 = arr1;
    //Shallow Copy with arrays
    arr2[1] = 4;

    let obj1 = {
        name: 'Ram',
        age:20
        }
    let obj2 = obj1;
    //Shallow copy with objects
    obj2.age = 10;

    let arr3 = [1,2,3];
    //Deep copy with arrays
    let arr4 = [...arr3];
    arr4[0] = 5;
    
    let obj3 = {
    name: 'Ram',
    age:20
    }
    //Deep copy with objets
    let obj4=Object.assign({},obj1);
    obj4.name= 'sai';
    
    return(
        <>
        <h2>Shallow Copy</h2>
        Original Array 1 = [1,2,3]
        <br/>
        arr1 = arr2<br/>
        Array 1 after copy = {arr1.map(v => {
            return ('['+v+']')
        })}
        <br/>
        Array 2 = 
        {arr2.map(v => {
            return ('['+v+']')
        })}
        <br/>
        <br/>
        Original object 1 = {'{'+obj1.name+','+ obj1.age+'}'}
        <br/>
        obj2=obj1;
        <br/>
        Object 1 after copy = {'{'+obj1.name+','+ obj1.age+'}'}
        <br/>
        Object 2 after copy = {'{'+obj2.name+','+ obj2.age+'}'}
        <br/>
        <br/>
        <h2>Deep Copy</h2>
        Original Array 3 = [1,2,3]<br/>
        arr3 = [...arr4]<br/>
        Array after copy =
        {arr3.map(v => {
            return ('['+v+']')
        })}
        <br/>
        Array 4 = 
        {arr4.map(v => {
            return ('['+v+']')
        })}
        <br/>
        <br/>
        Original object 3 = {'{'+obj3.name+','+ obj3.age+'}'}
        <br/>
        obj4=Object.assign({},obj3);
        <br/>
        Object 3 after copy = {'{'+obj3.name+','+ obj3.age+'}'}
        <br/>
        Object 4 after copy = {'{'+obj4.name+','+ obj4.age+'}'}
        </>
    )
}