import React, { useState } from "react";
import "./App.css";
import One from "./Practise/Hooks/CustomeHooks/One";
import Sample from "./Practise/Sample";
import Closure from "./Practise/Closure";
import Two from "./Practise/Hooks/CustomeHooks/Two";
import Home from "./Practise/Router/Home";
import Parent from "./Practise/PassingProps/Parent";
import CopyConcept from "./Practise/CopyConcept";
import LetVarConst from "./Practise/LetVarConst";
import CallBack from "./Practise/CallBack";
import MapForEach from "./Practise/MapForEach";
import ContextAPI from "./Practise/Hooks/ContextAPI/ContextAPI";
import Hoisting from "./Practise/Hoisting";
import Axios from "./Practise/APICalls/Axios";
import Fetch from "./Practise/APICalls/Fetch";
import Promises from "./Practise/Promises";
import AsyncAwait from "./Practise/AsyncAwait";
import UseMemo from "./Practise/Hooks/UseMemo";
import UseRef from "./Practise/Hooks/UseRef";
import UseCallBack from "./Practise/Hooks/UseCallBack/UseCallBack";
import Memo from "./Practise/Memo/Memo";
import StrReverse from "./Practise/StrReverse";
import DupliArray from "./Practise/DupliArray";
import Timing from "./Practise/Timing";
import Merge from "./Practise/Merge";

function App() {
  return (
    <div className="App">
      {/* <h1>Passing Props</h1>
      <Parent/> */}
      {/* <h1>Some tricky concepts</h1>
      <Sample /> */}
      <h1>Merging Arrays</h1>
      <Merge/>
      {/* <h1>Shallow Copy & Deep Copy</h1>
      <CopyConcept /> */}
      {/* <h1>Let var and Const Concepts</h1>
      <LetVarConst/> */}
      {/* <h1>Closure Example</h1>
      <Closure /> */}
      {/* <h1>Routing</h1>
      <Home /> */}
      {/* <h1>Call Back concept</h1>
      <CallBack/> */}
      {/* <h1>Map, Filter and ForEach concepts</h1>
      <MapForEach/> */}
      {/* <h1>Hoisting</h1>
      <Hoisting/> */}
      {/* <h1>Promises Concept</h1>
      <Promises/> */}
      {/* <h1>Async await Concept</h1>
      <AsyncAwait/> */}
      {/* <h1>API Calling</h1>
      <Axios/>
      <Fetch/> */}
      {/* <h1>Memo concept</h1>
      <Memo/> */}
      {/* <h1>Hooks</h1>
      <UseMemo/>
      <UseRef/>
      <UseCallBack/> */}
      {/* <h1>Context API</h1>
      <ContextAPI/> */}
      {/* <h1>Custom Hooks</h1>
      <One />
      <Two /> */}
      {/* <h1>String Reverse</h1>
      <StrReverse/> */}
      {/* <h1>Array Duplicates</h1>
      <DupliArray/> */}
      {/* <h1>SetTimeout and SetInterval Concept</h1>
      <Timing/> */}
    </div>
  );
}

export default App;
