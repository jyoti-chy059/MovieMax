import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Home from '../home';
import AllUpcoming from '../Containers/AllUpcoming';
import AllNowPlaying from '../Containers/AllNowPlaying';
import AllPopular from '../Containers/AllPopular';
import AllTopRated from '../Containers/AllTopRated';

const App = () => {
  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/upcoming" component={AllUpcoming} />
          <Route path="/nowPlaying" component={AllNowPlaying} />
          <Route path="/popular" component={AllPopular} />
          <Route path="/topRated" component={AllTopRated} />
          <Redirect from="/" to="/home" />
          <Redirect from="**" to="/home" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
