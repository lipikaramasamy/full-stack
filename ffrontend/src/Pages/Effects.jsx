import React,{ useEffect , useState} from 'react'
import {use} from 'react'

const Effects = () => {
    const[count , setCount]=useState(0);
    const[like,setLike]=useState(0);
    const[data,setData]=useState([]);

    useEffect(() => {
        console.log("component Re-render")
    },[count])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>res.json())
        .then((users)=>setData(users))
    },[])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick = {()=>setCount(count+1)}>+</button>
        <h1>{like}</h1>
        <button onClick = {()=>setLike(like+1)}>💕</button>
    </div>
  )
}

export default Effects