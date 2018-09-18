import React, { Component } from 'react';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loggedIn: false,
      clicks: 0
    }
  }
  

  updateClickCount() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  reset(){
    this.setState({
      clicks: 0
    });
  }

  render() {
    return (
      <div>
        
        <H1 />

        <H2 clickCount={this.state.clicks} onReset={this.reset.bind(this)}/>

          <H3 onClickProp={this.updateClickCount.bind(this)} />
          
      </div>
    );
  }
}

export default App;
