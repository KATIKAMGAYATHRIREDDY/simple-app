import React from 'react'

const CallApplyBind = () => {
    var salary = 70000;
    function getSalary(a,b){
        console.log(salary);
        console.log(this.salary);
        console.log(a,b);
    }
    var employee={
        salary : 50000
    }
    var employee2 = {
        salary : 20000
    }
    var employee3 = {
        salary : 90000
    }
    getSalary.call(employee,30,20);
    getSalary.apply(employee2,[40,50]);
    var newSalary = getSalary.bind(employee3,10,50);
    newSalary()
  return (
    <div>
    </div>
  )
}

export default CallApplyBind
