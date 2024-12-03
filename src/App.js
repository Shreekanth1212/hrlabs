
import React, { useState } from 'react'

import List from './List';
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {


  const [items, setitem] = useState(() => {
    const storedItems = localStorage.getItem("todo"); // Retrieve the data
    return storedItems ? JSON.parse(storedItems) : []; // Parse or fallback to an empty array
  });
  
const [newitem,setnewitem]=useState('')
const handleclick=(id)=>{
const listitem=items.map((item)=>
item.id===id?{...item,checked:!item.checked}:item)
setitem(listitem)
localStorage.setItem("todo",JSON.stringify(listitem))
}
const deltetask=(id)=>{
   const listitem=items.filter((item)=> item.id!==id)
   setitem(listitem)
   localStorage.setItem("todo",JSON.stringify(listitem))
}
const handlesubmit=(e)=>{
  e.preventDefault()
  console.log(newitem);

  additem(newitem)
  setnewitem("")
  console.log("submit");
}
const additem=(e)=>{
const idno=items.length?items.length+1:1
const add={id:idno,checked:false,item:e}
const list =[...items, add];
setitem(list);
localStorage.setItem("todo",JSON.stringify(list))


console.log(add);
}
const [search,setsearch]=useState("")


  return (
    <div className="App">
     <Additem  newitem={newitem} setnewitem={setnewitem} handlesubmit={handlesubmit}/>
    <Searchitem search={search} setsearch={setsearch}/>
     <List items={items.filter((item) =>
      item.item.toLowerCase().includes(search.toLowerCase())
    )} handleclick={handleclick} deltetask={deltetask} />
    </div>
  );
}

export default App;
