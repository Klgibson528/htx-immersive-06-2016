import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
          <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/test" component={Test}/>
          <Redirect from="/old-form" to="/form"/>
          <Route path="/article/:slug" component={Article}/>
          <Route component={NoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

const Home = () => (
  <h1>home page</h1>
)


const Form = () => (
  <h1>Form page</h1>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

const Article = ({ match }) => (
  <div>
    <h3>Article Slug: {match.params.slug}</h3>
  </div>
)



class Test extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  nav(){
    this.history.push('/');
  }

  render() {
    return (
      <div>
        <button onClick={this.nav.bind(this)}>hello test</button>
      </div>
    );
  }
}











