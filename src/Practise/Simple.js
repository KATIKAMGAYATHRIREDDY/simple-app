import React from "react";

function Simple() {
  //   Closure:
  // Accessing variables of a function even its execution completes or out of its scope.
  const value = 20;
  //Template Literals
  console.log(`Hi Guys ${value}`);
  function outside() {
    var a = 10;
    function inside() {
      console.log(a);
    }
    return inside;
  }
  var res = outside();
  res();
  return <div></div>;
}

export default Simple;
