import React, { Component } from 'react';


class MyState extends Component {
    constructor(props){
        super(props);
        this.state =  {
            myArray: [1, 2, 3, 3, 4, 5, ],
            count: 1,
            txt: "hello world"

        }
    }

  update(e){
      this.setState({txt: e.target.value})
  }

  render() {
    

    return (
      <div>
        <h1>{this.state.txt} {this.state.count}</h1><br />
        <input type="text" onChange={this.update.bind(this)}></input>
        {/* {this.state.myArray.map(t => t)} */}

        {/* {this.state.count} */}
      </div>
    );
  }
}

export default MyState;
