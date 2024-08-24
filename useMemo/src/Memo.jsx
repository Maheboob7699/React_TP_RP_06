import React from "react";
import { useState, useMemo } from "react";


function MemoComponent(){

const [value, setValue] = useState(0);
const [minus, setMinus] = useState(100);


function IncreaseValue(){
    setValue(value + 1);
}

// function Multiply(){
//     console.log("garbage value");
    
//     return value*10;
 
// }

const MemoData = useMemo(
    function Multiply(){
        console.log("Garbage Data");
        
  return value*10;
    }
,[value])


function DecreaseValue(){
setMinus(minus - 1);
}


    return(

        <>

            <div>{MemoData}</div>
           <div>{value}</div>
           <button onClick={IncreaseValue}>Increment</button>

           <div>{minus}</div>
           <button onClick={DecreaseValue}>Increment</button>
      </>


    )
}

export default MemoComponent;