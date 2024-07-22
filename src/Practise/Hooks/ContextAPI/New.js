import React,{useContext} from 'react'
import { store } from './ContextAPI';
const New = () => {
    const [data,setData] = useContext(store);
  return (
    <>Inside child component, {data}</>
  )
}

export default New
