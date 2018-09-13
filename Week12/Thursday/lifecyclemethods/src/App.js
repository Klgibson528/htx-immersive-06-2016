import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
  }

  update(){

    this.setState({val: this.state.val + 1});
  }

  componentWillMount() {
    console.log('component will mount');
    
    
  }


  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.update}>
          <h1>{this.state.val}</h1>
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log('component did mount');
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount(){
    console.log('component unmounted');
    clearInterval(this.inc);
  }
}



class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    
  }

  mount(){
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>
          <h1>Mount</h1>
        </button>

        <button onClick={this.unmount.bind(this)}>
          <h1>UnMount</h1>
        </button>

        <div id="a"></div>
      </div>
    );
  }
}


export default Wrapper;




