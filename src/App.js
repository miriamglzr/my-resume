import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Portfolio from './Portfolio';

function App () {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          {/*  <Route exact path='/resume' component={ForgotPassword} /> */}
          {/* <Route exact path='/portfolio' component={Register} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
