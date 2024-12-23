 import React from 'react'
 import { FaTrashAlt } from "react-icons/fa";
const List3 = ({item,handleclick,deltetask}) => {
  
  return (
    <li className='item' key={item.id}>
    <input type="checkbox" checked={item.checked}  onChange={()=>handleclick(item.id)} />
    <label htmlFor="">{item.item}</label>
    <FaTrashAlt role='button' tabIndex='0' onClick={()=>deltetask(item.id)} />
    </li>
  )
}

export default List3