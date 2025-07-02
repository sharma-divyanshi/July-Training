import React, { useEffect, useState } from 'react'

const Func = () => {
    const[num,setNum]=useState(0);

    function Increase(){
       setNum(num+1);
    }

    useEffect(()=>{
       alert("I will render once")
    },[])

    useEffect(()=>{
        alert("I will always render");
     })
     
     useEffect(()=>{
        alert("I will render when num will change")
     },[num])
    
     // comment out the func render in app.jsx to see the results
     useEffect(()=>{
        return()=>{
        alert("I will show when func will be remove")}
     })
  return (
    <div>
      <h1>Hey I am func</h1>
      <button onClick={Increase}>count {num}</button>
    </div>
  )
}

export default Func
