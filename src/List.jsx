
import List2 from "./List2";


const List = ({items,handleclick,deltetask}) => {






  return (
    <div>
    {items.length?(  <List2  items={items} handleclick={handleclick} deltetask={deltetask} />):(<p>No data</p>)}</div>
  )
}

export default List