import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Registration from '../components/Registration'
import Header from '../components/Header';
import HomePage from '../components/Homepage';
import NewItem from '../components/NewItem';




function App() {
  return (
    <div className='App'>
      <Header />

      <div className='App__landing'>
          <Route path='/landing' component={Landing}/>
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
      </div>

      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/newitem' component={NewItem}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
