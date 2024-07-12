import React from "react";
export function Sample() {
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
    </div>
  );
}
export default Sample;
