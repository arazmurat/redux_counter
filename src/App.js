import React from "react";
import {connect} from "react-redux"
import Counter from "./components/Counter"


function App(props) {

  return (
    <Counter 
    value={props.value}
    onIncrement={props.onIncrement}
    onDecrement={props.onDecrement}
    />
    )
}

const mapStateToProps = (state) => {
  return {
    value:state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type:'INCREMENT'}),
    onDecrement: () => dispatch({type:'DECREMENT'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);