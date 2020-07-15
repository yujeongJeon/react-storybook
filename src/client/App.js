import React, { Component, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { TodoList } from "./Todo";
import { TodoProvider } from "./providers/todo-provider";

const Home = React.lazy(_ => import('./components/templates/Home/Home'));

class App extends Component {
  constructor (props) {
    super (props);
  }

  // render () {
  //   return(
  //     <TodoProvider>
  //       <Router>
  //         <Suspense fallback={ "Loading" }>
  //           <Switch>
  //             <Route path="/" name="Home" render={ props => <Home {...props} /> } />
  //           </Switch>
  //         </Suspense>
  //       </Router>
  //     </TodoProvider>
  //   );
  // }

  render () {
    return (
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    )
  }
}

export default App;