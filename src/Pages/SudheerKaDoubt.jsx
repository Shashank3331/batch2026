import React from 'react'
import data from './data.js'

function SudheerKaDoubt() {
  return (
    <div>
           {data.map((val)=> <h1>{val.id}</h1>)}      
    </div>
  )
}

export default SudheerKaDoubt
