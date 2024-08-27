import React,{useState} from "react";
import Child from "./Child";

export default function Parent(){
  const [childData, setChildData] = useState("type something");
    const getValue = (e)=>{
      setChildData(e.target.value)
    }
  return(
        <div>
    Parent Block
      <br />
      {childData}
      <Child getValue={getValue} />
      </div>
    )
}