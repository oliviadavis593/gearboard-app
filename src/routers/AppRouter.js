import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../views/Header';
import HomePage from '../views/Homepage';
import Landing from '../views/Landing';
import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import NewItemForm from '../components/NewItemForm/NewItemForm'
import EditItemForm from '../components/EditItemForm/EditItemForm'

function App() {
  

  return (
    <div className="App">
      <Header />

      <div className="App__landing">
        <Route exact path="/" component={Landing} />
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/registration"
          component={Registration}
        />
      </div>

      <main>
        <Switch>
          <Route exact path="/homepage" component={HomePage} />
          <Route
            path="/new-item"
            component={NewItemForm}
          />
          <Route
            path="/edit-item"
            component={EditItemForm}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
