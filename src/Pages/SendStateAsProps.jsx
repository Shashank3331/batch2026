import React, { useState } from 'react'
import GetStateData from './GetStateData'

function SendStateAsProps() {
    const [name ,setname] = useState("Abhay")
  return (
    <div>
         <GetStateData n = {name}/>
         <button onClick={()=>setname("Sudheer")}>Change Name</button>
    </div>
  )
}

export default SendStateAsProps
