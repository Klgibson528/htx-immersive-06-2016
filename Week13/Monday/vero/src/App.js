import React, { Component } from 'react';
import BS from './BootstrapSam'

// <div className="App">
      //   <BS />
      // </div>

      const BigBreakLine = () => {
        return(
          <div>
            <br/><br/><br/><br/><br/>
          </div>
        );
      };
      class H1 extends Component {
        render() {
          return (
            <div>
              <BigBreakLine/>
              <center>
                <h1>Passing State In ReactJS</h1>
              </center>
            </div>
          );
        }
      }
      class H2 extends Component {
        render() {
          return(
            <div>
              <center>
                <h2>(Sibling) Click Counter: {this.props.clickCount}</h2>
              </center>
            </div>
          );
        }
      }
      class H3 extends Component {
        render() {
          return(
            <div>
              <center>
                <button onClick={() => this.props.onClickProp()}>Click Me</button>
              </center>
            </div>
          );
        }
      }
      class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            loggedIn: false,
            clicks: 0
          };
          this.updateClickCount = this.updateClickCount.bind(this);
        }
      updateClickCount() {
          this.setState({
            clicks: this.state.clicks + 1
          });
        }
      render() {
          return (
            <div className="App">
              <H1/>
              <H2 clickCount={this.state.clicks}/>
              <H3 onClickProp={() => this.updateClickCount()}/>
            </div>
          );
        }
      }
      export default App;
