import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormGenerator from '../components/FormGenerator';
import Header from '../views/Header';
import HomePage from '../views/Homepage';
import Landing from '../views/Landing';
import { addGearFormFields, loginFormFields, registrationFormFields } from '../forms';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App__landing">
        <Route exact path="/" component={Landing} />
        <Route
          path="/login"
          component={(props) => (
            <FormGenerator title="Login" buttonLabel="Sign In" fields={loginFormFields} />
          )}
        />
        <Route
          path="/registration"
          component={(props) => (
            <FormGenerator
              title="Registration"
              buttonLabel="Register"
              fields={registrationFormFields}
            />
          )}
        />
      </div>

      <main>
        <Switch>
          <Route exact path="/homepage" component={HomePage} />
          <Route
            path="/newitem"
            component={(props) => (
              <FormGenerator title="Add Gear" buttonLabel="Add" fields={addGearFormFields} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
