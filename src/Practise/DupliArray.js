import React from 'react'

const DupliArray = () => {
    let arr = [1,2,3,2,5,1];
    function removeDuplicates(data){
        return data.filter((value,index) => data.indexOf(value) === index);
    }
    function getDuplicates(data){
        return data.filter((value,index) => data.indexOf(value) !== index);
    }
    console.log({} == {})
  return (
    <div>
      Origival array - {arr}<br/>
      array after removing duplicates is - {removeDuplicates(arr)}<br/>
      duplicates in array are - {getDuplicates(arr)}
    </div>
  )
}

export default DupliArray
