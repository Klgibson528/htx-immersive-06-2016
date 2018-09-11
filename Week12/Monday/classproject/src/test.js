import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Test extends Component {
  render() {
    let txt = this.props.txt;
    return (
        <div>
           return <h1>{txt}</h1> 
        </div>
    );
  }
}

Test.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
}

Test.defaultProps = {
    txt: "this is the default txt"
}
export default Test;
