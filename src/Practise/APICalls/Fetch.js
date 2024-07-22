import React,{useEffect, useState} from 'react'

const Fetch = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(
        // Code for handling the response
        response => response.json()	
        ).then(result => setData(result))
        .catch((error) => {
            // Code for handling the error
            console.log('Error',error);
        });
    },[])

  return (
    <div>
        <h2>Using Fetch</h2>
        {data.map(value => <li>{value.title}</li>)}
    </div>
  )
}

export default Fetch
