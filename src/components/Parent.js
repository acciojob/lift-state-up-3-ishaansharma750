import React,{useState} from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

const Parent = () => {
    let [selected,setSelected] = useState("")
  return (
    <div>
        <h3>Parent Component </h3>
        <ChildOne option={setSelected}/>
        <ChildTwo option ={setSelected}/>
        <p>Selected option : {selected}</p>
    </div>
  )
}

export default Parent