import React from 'react'
import B from './B'

function A({pn,pr}) {
  return (
    <div>
        <h1>Product Name is {pn} and Price is {pr}</h1>
        <B product ={pn} price = {pr}/>
    </div>
  )
}

export default A
