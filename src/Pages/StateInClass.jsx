import { Component } from 'react'
import { ShoppingCart } from 'react-feather'

class StateInClass extends Component {
  constructor () {
    super()
    // State declaration
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
      handleClick(){
      this.setState({count: this.state.count+1})
    }
  render () {
    // De-structure the current state
    const {count} = this.state

    //   this.handleClick = ()=>{
    //   this.setState({count: count+1})
    // }
    return (
      <>
        <h1>State in Class based Component</h1>
       <div className="cart">
         <ShoppingCart stroke='#fff' className='icon' fill='#fff'/>
        <div className='count'>{count}</div>
       </div>
      
        <button onClick={this.handleClick}>
          Add to Cart
        </button>
          {/* Add button with events like inline arrow function */}
        <button onClick={() => this.setState({ count: count - 1 })}>
          Remove to Cart
        </button>
      </>
    )
  }
}

export default StateInClass
