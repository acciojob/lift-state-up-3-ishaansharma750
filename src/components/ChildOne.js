import React from 'react'

const ChildOne = (props) => {
  return (
    <div>
        <h3>Child Component 1</h3>
        <button onClick={()=>props.option("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildOne