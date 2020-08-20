import React from 'react';
import { 
   BrowserRouter,
   Switch,
   Route,
   } from 'react-router-dom';

import './stylesheet/stylesheet.css';
import { Home } from './components/Home';
import { AddGuest } from './components/AddGuest';
import { EditGuest } from './components/EditGuest';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/add" component={AddGuest} exact />
              <Route path="/edit/:id" component={EditGuest} exact />
          </Switch>
        </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
