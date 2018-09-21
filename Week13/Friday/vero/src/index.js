import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    // const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{this.props.currentCountInStore}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
      </div>
    )
  }
}


// Action
const increaseAction = { type: 'increase' }

//ActionCreator 

// function increaseActionCreator (){
//     return increaseAction;
// }

// Reducer
function counter(state = { count: 0 }, action) {

  const count = state.count

  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    currentCountInStore: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
    // onIncreaseClick: () => dispatch(increaseActionCreator())
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)