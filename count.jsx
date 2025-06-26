import { useState } from "react";

export default function Count(){
    let [count,setCount]=useState(0);
    function Increase(){
        console.log(count);
        // setCount(count+1);

        // *************Callbacks**********
        setCount((curr)=>{
            return curr+1;
        });
        setCount((curr)=>{
            return curr+1;
        });
        setCount((curr)=>{
            return curr+1;
        });

      
    }
    return(
        <>
        <h1>This is our Counter</h1>
          <button onClick={Increase}>count {count}</button>
        </>
    )
}