import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddGuest } from './components/AddGuest';
import { EditGuest } from './components/EditGuest';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddGuest} exact />
        <Route path="/edit/:id" component={EditGuest} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
