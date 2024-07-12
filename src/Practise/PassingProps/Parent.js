import React,{useState} from "react";
import Child from "./Child";

export default function Parent(){
  const [childData, setChildData] = useState("Parent Data");
    return(
        <div>
    Parent Block
      <br />
      {childData}
      <Child setChildData={setChildData} />
      </div>
    )
}