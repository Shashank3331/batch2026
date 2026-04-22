// import React from 'react'

// function Child (props) {
//     const {sample_data,thought} = props
//   return (
//     <div>
//       <h2>{sample_data}</h2>
//       <p>{thought}</p>
//     </div>
//   )
// }

// export default Child



import React, { Component } from 'react'

export class Child extends Component {
  render() {
    // de-structure the props
    const {sample_data,thought} = this.props
    return (
      <div>
        <p>This is class based component</p>
           <h2>{sample_data}</h2>
           <h3>{thought}</h3>
      </div>
    )
  }
}
export default Child

