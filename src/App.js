import React, { useState } from "react";
import "./App.css";
import One from "./Practise/CustomeHooks/One";
import Sample from "./Practise/Sample";
import Simple from "./Practise/Simple";
import Two from "./Practise/CustomeHooks/Two";
import Home from "./Practise/Router/Home";
import Parent from "./Practise/PassingProps/Parent";
import CopyConcept from "./Practise/CopyConcept";
import LetVarConst from "./Practise/LetVarConst";
import CallBack from "./Practise/CallBack";
import MapForEach from "./Practise/MapForEach";

function App() {
  return (
    <div className="App">
      {/* <h1>Passing Props</h1>
      <Parent/> */}
      {/* <h1>Some tricky concepts</h1>
      <Sample /> */}
      {/* <h1>Shallow Copy & Deep Copy</h1>
      <CopyConcept /> */}
      {/* <h1>Let var and Const Concepts</h1>
      <LetVarConst/> */}
      {/* <h1>Closure Example</h1>
      <Simple /> */}
      {/* <h1>Custom Hooks</h1>
      <One />
      <Two /> */}
      {/* <h1>Routing</h1>
      <Home /> */}
      {/* <h1>Call Back concept</h1>
      <CallBack/> */}
      <h1>Map, Filter and ForEach concepts</h1>
      <MapForEach/>
    </div>
  );
}

export default App;
