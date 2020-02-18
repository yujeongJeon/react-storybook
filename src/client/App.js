import React, { Component, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

const Home = React.lazy(_ => import('./components/templates/Home'));

class App extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return(
      <Router>
        <Suspense fallback={ "Loading" }>
          <Switch>
            <Route path="/" name="Home" render={ props => <Home {...props} /> } />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;