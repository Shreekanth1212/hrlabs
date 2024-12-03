import React, { useState } from 'react'

const Change = () => {
   const[val ,cval]= useState('')
   let arr=['sk','srk','msd']
  
const cl=()=>{
    let num=Math.floor(Math.random()*3);
 let a=arr[num]
   return   cval(a)
      
}


  return (
    <div><button onClick={cl}>change</button>
    <span>let start {val}</span></div>
  )
}

export default Change