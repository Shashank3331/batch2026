import React from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import './App.css'

export default function App () {
  let amount = 900
  return (
    <React.Fragment>
      {/* <h1>Lorem ipsum dolor sit amet.</h1> */}
      <p>The Fine Amount is increased by {amount}</p>
      <Header />
      <Child />
      <Footer />

    </React.Fragment>
  )
}

// export default App

// import { Component } from "react"
// export default class App extends Component{
//   render(){
//     return(
//       <div>
//         <h1>This  is class  based component</h1>
//       </div>
//     )
//   }
// }

class Child extends React.Component {
  render () {
    const textStyle = {
      color: '#fff',
      backgroundColor: 'black',
      padding: '10px',
      textAlign: 'center'
    }
    return (
      <>
        <h3 style={textStyle}>This is Child Component</h3>
      </>
    )
  }
}
