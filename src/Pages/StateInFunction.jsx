import React, { useState } from 'react'

function StateInFunction() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h2>State in fucntion</h2>
         <h2>{count}</h2> 
         <button onClick={()=>setCount(count+1)}>Change State</button>     
    </div>
  )
}

export default StateInFunction
