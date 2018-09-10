import React, { Component } from 'react';

import Products from './Products';

class App extends Component {
  render() {

    let newName = this.props.names + " Fisher";
    return (
      <div>
        {this.props.names}
        <Products name={newName} />
        <Products name={this.props.names} />
        <Products name={this.props.names} />
        <Products name={this.props.names} />
        <Products name={this.props.names} />
      </div>
    );
  }
}

export default App;
