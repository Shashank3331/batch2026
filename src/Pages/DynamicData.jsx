import React from 'react'
import data from '../Pages/data.js'

function DynamicData () {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Country</th>
            <th>education</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
           {data.map((val)=>{
              return(
                <tr>
                   <td>{val.id}</td>
                   <td>{val.name}</td>
                   <td>{val.country}</td>
                   <td>{val.education}</td>
                   <td><img src={val.avatar} alt="avatar" width={150}/></td>
                </tr>
              )
           })}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicData
