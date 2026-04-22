import React from 'react'

function B({product,price}) {
  return (
    <div>
       <h2>This is B Component</h2>
       <p>{product} {price}</p>
    </div>
  )
}

export default B
