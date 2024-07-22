import React, { useState } from 'react'

const AsyncAwait = () => {
    const [data, setData] = useState();

    function step1(value, error){
        return new Promise((resolve, reject) => {
        if(!error){
        resolve('value added with ten is '+(value + 10));
        }
        else{
        reject('Something went wrong!')
        }
        })
    }
    async function result() {
        let res = step1(10,false);
        return res;
    }
    console.log(result());//returns complete promise

    //using await inside async
    async function result1() {
        let res = await step1(10,false);
        return res;
    }
    result1().then(result => setData(result)).catch(error => console.log(error))

  return (
    <div>
      {'Data using async await - '+data}
    </div>
  )
}

export default AsyncAwait
