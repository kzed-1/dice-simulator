import React from 'react';
import CounterIndex from './counter_index';


const Counter = ({faceCounts}) => {

    const faces = [];
    const counts = [];

    for (const [ faceValue, count ] of Object.entries(faceCounts)) {
        
        faces.push( <div key={faceValue} >{faceValue}</div> )
        counts.push( <CounterIndex key={faceValue} count={count} faceValue={faceValue}/>)
        
    }

    return (
        <div className="chipsDisplayContainer">
            {counts}
        </div>
    )

}

export default Counter;