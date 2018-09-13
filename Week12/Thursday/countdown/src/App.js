import React, { Component } from 'react';
import Clock from './Clock'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       deadline: 'September 28, 2018',
       newDeadline: ''
    }
  }
  
  
  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (
      <div>
        
        <h1>Countdown to {this.state.deadline}</h1>


        <Clock deadline={this.state.deadline}  />

        <div>
          <input type="text" onChange={event => this.setState({newDeadline: event.target.value})}/>
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
