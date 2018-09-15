import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import RecipeReviewCard from './RecipeReviewCard';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


const theme = getMuiTheme({
  palette: {primary1Color: red700}
});

class App extends React.Component {
  constructor(props) {
    super(props);
    
    
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
      <BrowserRouter history={this.history}>
      
        <div>
        <AppBar title="My AppBar" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/review">Recipe Review Card</Link></li>
            <li><Link to="/test">Test</Link></li>
          </ul>
          
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/form" component={Form}/>
            <Route path="/review" component={RecipeReviewCard}/>
            <Route path="/article/:slug" component={Article}/>
            <Route path="/test" component={Test}/>
            <Redirect from="/old-form" to="/form"/>
            <Route component={NoMatch}/>
            
          </Switch>
          <AppBar title="My AppBar" />
        </div>
        
        
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App

const Home = () => (<h2>Home</h2>);

const Form = () => (<Button variant="contained" color="primary">
Hello World
</Button>);

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
      <div><button onClick={this.nav.bind(this)}>redirting</button></div>
    );
  }
}





