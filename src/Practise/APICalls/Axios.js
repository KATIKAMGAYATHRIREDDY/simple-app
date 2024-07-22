import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => 
            // Code for handling the response
            setData(response.data)
        ).catch((error) => {
            // Code for handling the error
            console.log('Error ',error);
        })
    },[]);

  return (
    <div>
        <h2>Using Axios</h2>
        {data.map(value => <li>{value.id}</li>)}
    </div>
  )
}

export default Axios
