import React from 'react'

const Timing = () => {
    function getTime(){
        const d = new Date();
        return d.toLocaleTimeString();
    }
    function displayAlert(){
        alert('SetTimeout Alert');
    }
    //setTimeout(displayAlert,3000);
    setInterval(getTime,1000);
  return (
    <div>
        SetInterval time  {setInterval(getTime,1000)}
    </div>
  )
}

export default Timing;
