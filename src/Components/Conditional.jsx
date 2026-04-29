import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Conditional () {
  const [count, setCount] = useState(0)
  function handleAdd () {
    if (count == 5) {
      toast("Do Not Add items more than 5");
    } else {
      setCount(count + 1)
    }
  }

  function handleRemove(){
    if(count==0){
         toast.error("You can not add items less than 0");
    }
    else{
        setCount(count-1)
    }
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleAdd}>Add Data</button>
       <ToastContainer  position="top-center"/>
      <button onClick={handleRemove}>Remove Data</button>
    </div>
  )
}

export default Conditional
