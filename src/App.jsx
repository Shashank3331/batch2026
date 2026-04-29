import React from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import './App.css'
import hero from './assets/hero.png'
import DynamicData from './Pages/DynamicData'
import Portal from './Pages/Portal'
import SudheerKaDoubt from './Pages/SudheerKaDoubt'
import Parent from './Pages/Parent'
import StateInClass from './Pages/StateInClass'
import StateInFunction from './Pages/StateInFunction'
import SendStateAsProps from './Pages/SendStateAsProps'
import Conditional from './Components/Conditional'
import Search from './Components/Search'

export default function App () {
  let amount = 900
  return (
    <React.Fragment>
      <h1>CR (Class Representative) Mr Sudheer Kumar</h1>
      <img src={hero} alt="" />
      <p>The Fine Amount is increased by {amount}</p>
      <Header />
      <Child />
      <Portal/>
      <Parent/>
      <StateInClass/>
      <StateInFunction/>
      <SudheerKaDoubt/>
      <DynamicData/>
      <SendStateAsProps/>
      <Conditional/>
      <Search/>
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
