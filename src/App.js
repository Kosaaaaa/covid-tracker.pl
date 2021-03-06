import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Info from './pages/Info';
import firebase from 'firebase/app';
import "firebase/analytics";
import firebaseConfig from './utils/firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/info" component={Info} exact />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
