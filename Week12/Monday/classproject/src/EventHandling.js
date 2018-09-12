import React, { Component } from 'react';


class EventHandling extends Component {

    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        //this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){

        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }

  render() {

    
    return (
      <div>
        
        <button onClick={(e) => this.handleClick(e)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        
      </div>
    );
  }
}

export default EventHandling;
