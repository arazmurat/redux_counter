import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
    this.decrementIfOdd = this.decrementIfOdd.bind(this)
    this.incrementAsync = this.incrementAsync.bind(this)
  }
  
  incrementIfOdd () {
    if(this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  decrementIfOdd () {
    if(this.props.value % 2 !== 0) {
      this.props.onDecrement();
    }
  }

  incrementAsync () {
    setTimeout(this.props.onIncrement, 2000);
  }

  timer=null;
  incrementTimer = () => {
    if(!this.timer) {
      this.timer=setInterval(this.props.onIncrement, 1000);
    } else {
      clearInterval(this.timer);
      this.timer=null;
    }
  }

  render() {
    const {value, onIncrement, onDecrement} = this.props
    return (
      <div className="container">
        <p>Counter Value: {value}</p>
        <button onClick={onIncrement}>INCREASE (+)</button>
        <button onClick={onDecrement}>DECREASE (-)</button>
        <button onClick={this.incrementIfOdd}>Increment If Odd</button>
        <button onClick={this.decrementIfOdd}>Decrement If Odd</button>
        <button onClick={this.incrementAsync}>Increment Async</button>
        <button onClick={this.incrementTimer}>Increment Timer</button>

      </div>
    )
  }
}
