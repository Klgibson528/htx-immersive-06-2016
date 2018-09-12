import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import {Button} from 'react-bootstrap';


class App extends Component {
  render() {

    const isValid = true;
    return (
      <div >

        <Products /> 

        {/* <h1>My rating app</h1>

        <Products />
        <Button bsStyle="primary" disabled={!isValid}>Default</Button> */}
      </div>
    );
  }
}

export default App;
