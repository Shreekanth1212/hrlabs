import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additem = ({newitem,setnewitem,handlesubmit}) => {
  return (
    <div><form className='addForm' onSubmit={(e)=>{handlesubmit(e)}}>
    <label htmlFor="addItem">Add Item</label>
    <input type="text"  placeholder='Add item' autoFocus id='addItem' value={newitem}  onChange={(e)=>setnewitem(e.target.value)} required/>
    <button type='submit'  aria-label='Add Item'><FaPlus/></button></form></div>
  )
}

export default Additem