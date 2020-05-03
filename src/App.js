import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Header from './components/Header'



function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>

      <div className='App__landing'>
          <Route path='/landing' component={Landing}/>
          <Route path='/login' component={Login} />
      </div>

      <main>
      </main>
    </div>
  );
}

export default App;
