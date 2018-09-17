import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, Button, Alert } from 'react-bootstrap';
import MyForm from './MyForm';


class App extends Component {
  
  
  render() {
    let myArray = [1, 2, 3, 4];

    return (
      
      <div>

        <MyForm />
        {/* <Grid fluid> 

          <Row style={{backgroundColor: 'pink'}}>
            <Col  mdOffset={2} md={2} style={{ textAlign :'center', backgroundColor: 'yellow'}}>
            
             my first section
            </Col>

            <Col mdPull={2} md={4} style={{ textAlign :'center', backgroundColor: 'aqua'}}>
            
            second section
            </Col>

            <Col md={4}  style={{ textAlign :'center'}}>
             third section
             <Button bsStyle="danger" >Default</Button>

             <Alert bsStyle="warning">
              <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
              good.
            </Alert>
            </Col>

          </Row>
        </Grid> */}
      </div>
      
      // <div className="App">
      //   <header className="App-header">
          
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro App" style={styles.starStyle} style={{color: 'red'}}>
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>

      //   {
      //       myArray.map(index =>{
      //         return <div>my index: {index}</div>
      //       })
      //   }
      //   <MethodName />
      // </div>
      
    );
  }
}

export default App;

const styles = {
  starStyle:{
      color: 'orange'
  }
}



const MethodName = () => (
  <div className="div">
    {
      
        <div>hello world</div>
      
    }
    
  </div>
)



