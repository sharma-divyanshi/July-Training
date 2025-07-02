import { useState } from "react";

export default function Object(){
    const [data,setData]=useState({name:"divi", age:21});
    return(
        <>
 {/* method one */}
        <input type="text" placeholder="enter name" value={data.name}
        onChange={(e)=>{ setData({name:e.target.value,age:data.age})}}/>
{/* easy method two */}
        <input type="text" placeholder="enter age" value={data.age}
        onChange={(e)=>{ setData({...data,age:e.target.value})}}/>
        <h1>Name: {data.name}</h1>
        <h1>Age: {data.age}</h1>
        </>
    )
}