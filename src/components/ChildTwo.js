import React from 'react'

const ChildTwo = (props) => {
  return (
    <div>
        <h3>Child Component 2</h3>
          {console.log(props)}
        <button onClick={()=>props.option("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildTwo