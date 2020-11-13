import React from 'react';
import { useState } from 'react';
const Test = () => {
    const [arr,setValue] = useState(["afsd","safddsf","asdfdsf"]);

    const addValue = ()=>{
        setValue([...arr,"someNew"]);
    }
return ( <div>
    <button onClick={addValue} >add</button>
    <div>{arr.map(function(value){
return <div>{value}</div>
})}</div></div>);
}
 
export default Test;