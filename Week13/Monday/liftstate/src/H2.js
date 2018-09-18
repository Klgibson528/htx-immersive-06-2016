import React from 'react';
import PropTypes from 'prop-types';

class H2 extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
           <div>

               <center>
                <h2>(Sibling) Click Counter: {this.props.clickCount}</h2>

                <center>
                    <button onClick={() => this.props.onReset()}>reset</button>
                </center>
            </center>
           </div> 
        );
    }
}


H2.propTypes = {
    
};

export default H2
