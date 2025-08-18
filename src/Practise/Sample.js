import React from "react";
export function Sample() {
  // var a = 10;
  // {
  //   var a = -10;
  // }
  // let b = a;
  // {
  //   let b = -20;
  //   console.log(b);
  // }
  // console.log(b)
  // console.log(a)
  // c= 25
  // var c;
  // console.log(c);
  let users = [
    {
      name: 'ram',
      age: 21,
    },
    {
      name: 'ramu',
      age: 20,
    },
    {
      name: 'ravi',
      age: 22,
    },
    {
      name: 'raju',
      age: 24,
    },
  ];
  console.log('Initial Array==>', users);
  users.forEach(user => {
    if (user.name === 'ram') {
      user.name = 'Sita';
    }
  });
  console.log('Users Updated Array==>', users);
  let newArray = users.map(i => {
    if (i.name === 'ram') {
      return { ...i, name: 'Sita' };
    }
    return i;
  });
  console.log('New Array==>', newArray);
  return (
    <div>
      Strings with Arithmatic Operations
      <br />
      String("5") + Integer(3)  = {"5" + 3}
      <br />
      String("5") - Integer(3)  = {"5" - 3}
      <br />
      String("5") * Integer(3)  = {"5" * 3}
      <br />
      String("5") / Integer(3)  = {"5" / 3}
      <br />
      <br />
      Difference between === and ==
      <br />
      5 === "5" is {(5 === "5").toString()}
      <br />
      5 == "5" is {(5 == "5").toString()}
      <br />
      <br />
      Type of NaN is {' '}
      {typeof NaN}
      <br /><br />
      Esay way to convert String to Integer
      <br />
      use + before string +"12" now typeof 12 is {typeof +"12"}
      <br />
      <br />
      NaN === NaN is {(NaN === NaN).toString()}
      <br /><br />
      {'1<2<3'} is {(1<2<3).toString()}
      <br />
      {'3>2>1'} is {(3>2>1).toString()}
      <br/>

    </div>
  );
}
export default Sample;
