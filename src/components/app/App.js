import React from 'react';
import TacoLog from '../../containers/log/TacoLog';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import About from '../../pages/About';
import Review from '../../pages/Review';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <main className={styles.App}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Search} />
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Review} />
          </Switch>
        </main>
      </>
    </Router> 
  );
}
