import React,{createContext, useState} from 'react'
import New from './New';

export const store = createContext();
const ContextAPI = () => {
    const [data, setData] = useState('Data from Context API component');

  return (
    <store.Provider value={[data,setData]}>
        <New/> 
        {/* Not needed to pass data as props we can use it from store */}
    </store.Provider>
  )
}

export default ContextAPI
