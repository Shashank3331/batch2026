import React, { useState } from 'react'

function Search() {
    const languages = ["Java","Python","Node","PHP","C","C++"]
    const [data,setData] = useState("")
    let filterData = languages.filter((items)=>{
      return items.toLowerCase().includes(data.toLowerCase())
})
  return (
    <div>
       <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
       {
        filterData.length >0 ? filterData.map((val)=><h1>{val}</h1>): <h2>No Data Found</h2>
       }
    </div>
  )
}

export default Search
