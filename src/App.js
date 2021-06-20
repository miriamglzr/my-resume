import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';

function App () {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path='/resume' component={ForgotPassword} />
            <Route exact path='/portfolio' component={Register} />
            <Route exact path='/contact' component={ResetPassword} /> */}
        </Switch>
      </Router>

      <Home />
    </div>
  );
}

export default App;
