import { Component } from 'react'
import { ShoppingCart } from 'react-feather'

class StateInClass extends Component {
  constructor () {
    super()
    // State declaration
    this.state = {
      count: 0
    }
  }
  render () {
    // De-structure the current state
    const {count} = this.state
    return (
      <>
        <h1>State in Class based Component</h1>
       <div className="cart">
         <ShoppingCart stroke='#fff' className='icon' fill='#fff'/>
        <div className='count'>{count}</div>
       </div>
        {/* Add button with events like inline arrow function */}
        <button onClick={() => this.setState({ count: count + 1 })}>
          Add to Cart
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Remove to Cart
        </button>
      </>
    )
  }
}

export default StateInClass
