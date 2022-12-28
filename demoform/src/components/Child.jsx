import React from 'react'

const Child = (props) => {
  return (
    <div>
        <button onClick={()=>props.greet("Bala")}>display</button>
    </div>
  )
}

export default Child