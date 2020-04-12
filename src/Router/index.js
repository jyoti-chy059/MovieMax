import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Home from '../home';
import AllUpcoming from '../Containers/AllUpcoming';

const App = () => {
  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/upcoming" component={AllUpcoming} />
          <Redirect from="/" to="/home" />
          <Redirect from="**" to="/home" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
