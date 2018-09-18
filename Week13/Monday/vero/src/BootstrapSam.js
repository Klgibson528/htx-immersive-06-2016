import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import  './App.css'

class BootstrapSam extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
          <div >
              <Grid fluid>
                <Row className="show-grid" style={{backgroundColor: 'pink'}}>
                <Col xs={12} md={8}>
                    here is my first column
                </Col>
                <Col xs={6} md={4}>
                    here is my second column
                </Col>
                </Row>


                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    first column
                    </Col>
                    <Col xs={6} md={4}>
                    second column
                    </Col>
                    <Col xsHidden md={4}>
                    third column hidden on small devices
                    </Col>
                </Row>
            </Grid>
          </div>  
        );
    }
}

export default BootstrapSam
