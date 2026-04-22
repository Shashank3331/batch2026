import React from 'react'
import Child from './Child'
import A from './A'

function Parent () {
  const product = [{productName:"Headphone",price: 1599}]
  return (
    <div>
      <h2>This is Props</h2>
      <Child
        sample_data='I am on Earth 🌍'
        thought='Snack was bite Mr Sudheer 🐍'
      />
      <A  pn={product[0].productName} pr= {product[0].price} />
    </div>
  )
}

export default Parent
