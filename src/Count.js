 import React, { useState } from 'react'






const Count = () => {
  const[count ,setcount]=useState(0);



  
    const inc=()=>{
       setcount(count=>count+1);
    }
    const dec=()=>{
      setcount(count=>count-1);
    }


  return (
    <div>
    <button onClick={inc}>increment</button>
    <span>{count}</span>
    <button onClick={dec}>decrement</button>
    </div>
  )
}

export default Count