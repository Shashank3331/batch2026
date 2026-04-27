import React, { useState } from 'react'

function StateInFunction() {
    // const [count,setCount] = useState(0)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({email: email,password: password})
    }
  return (
    <div>
        {/* <h2>State in fucntion</h2>
         <h2>{count}</h2> 
         <button onClick={()=>setCount(count+1)}>Change State</button>      */}
         <form onSubmit={handleSubmit}>
            <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="[password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit"  />
         </form>
    </div>
  )
}

export default StateInFunction
