import React from 'react'
import data from '../Pages/data.js'

function DynamicData () {
  return (
    <div>
      {data.map(value => (
        <>
          <h2>
            {value.id} {value.name} {value.country} {value.education}
          </h2>
          <img src={value.avatar} width={150} />
        </>
      ))}
    </div>
  )
}

export default DynamicData
