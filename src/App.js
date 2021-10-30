import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Layout } from './components/layout/layout/Layout';

import { AllMeetups } from './pages/AllMeetups';
import { Favourites } from './pages/Favourites';
import { NewMeetup } from "./pages/NewMeetup";



function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/addMeetup">
          <NewMeetup/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
