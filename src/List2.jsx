import React from 'react'

import List3 from './List3';
const List2 = ({items,handleclick,deltetask}) => {
  return (
    <ul>
    {
        items.map((item)=>(
          <List3  item={item} handleclick={handleclick} deltetask={deltetask} key={item.id}/>
        ))
    }
    </ul>
  )
}

export default List2