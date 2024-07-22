import React, { useState } from 'react'

const Promises = () => {
    const [promiseAll, setPromiseAll] = useState([]);
    const [promiseRace, setPromiseRace] = useState([]);
    const [promiseAllSet, setPromiseAllSet] = useState([]);
    const [promiseAny, setPromiseAny] = useState([]);
    const p1 = Promise.resolve('Promise resolved, Sample data');
    const p2 = 100;
    const p3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'Promise resolved with setTimeout');
    })
    const p4 = Promise.reject('Promise rejected');
    Promise.all([p1,p2,p3]).then(values => setPromiseAll(values));
    Promise.race([p3,p1,p2]).then(values => setPromiseRace(values));
    Promise.allSettled([p1,p2,p3,p4]).then(values=> setPromiseAllSet(values));
    Promise.any([p4,p3]).then(values => setPromiseAny(values))
  return (
    <div>
        <h4>Promise All</h4>
        {/* gives the result in an array, if any one promise is rejected the whole result will be rejected. */}
        {promiseAll.map(i => {
            return('['+i+']')
        })}
        <h4>Promise Race</h4>
        {/* gives the first result either it may be solved or rejected. */}
        {promiseRace}
        <h4>Promise All Settled</h4>
        {/* gives result of all promises either those are solved or rejected with their status and values */}
        {promiseAllSet.map(i => {
            return(
            <>
            {'Status ['+i.status+'] - Value ['+i.value+']'}
            <br/>
            </>)
        })}
        <h4>Promise Any</h4>
        {/* gives anyone promise that is resolved */}
        {promiseAny}
    </div>
  )
}

export default Promises
