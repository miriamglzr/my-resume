import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Story from './Story';

function App () {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Story} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>

      {/* <Home /> */}
    </div>
  );
}

export default App;
