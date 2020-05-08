import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormGenerator from '../components/FormGenerator';
import Header from '../views/Header';
import HomePage from '../views/Homepage';
import Landing from '../views/Landing';
import {
  //newGearFormFields,
  editGearFormFields,
  loginFormFields,
  //registrationFormFields,
} from '../forms';

function App() {
  const handleCLick = (event) => console.log('clicked');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Header />

      <div className="App__landing">
        <Route exact path="/" component={Landing} />
        <Route
          path="/login"
          component={(props) => (
            <FormGenerator title="Login" buttonLabel="Sign In" schema={loginFormFields} />
          )}
        />
        <Route
          path="/registration"
          component={(props) => (
            <FormGenerator
              title="Registration"
              buttonLabel="Register"
              handleSubmit={handleSubmit}
              schema={{
                fields: [
                  {
                    label: 'First Name',
                    name: 'first_name',
                    placeholder: 'Johnny Doe',
                    required: true,
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    placeholder: 'gearboard123@gmail.com',
                    required: true,
                  },
                  {
                    label: 'Password',
                    name: 'password',
                    required: true,
                  },
                  {
                    label: 'Confirm Password',
                    name: 're-password',
                    required: true,
                  },
                ],
                buttons: [
                  {
                    label: 'Demo',
                    onClick: handleCLick,
                  },
                ],
              }}
            />
          )}
        />
      </div>

      <main>
        <Switch>
          <Route exact path="/homepage" component={HomePage} />
          <Route
            path="/new-item"
            component={(props) => (
              <FormGenerator
                title="Add Gear"
                buttonLabel="Add"
                schema={{
                  fields: [
                    {
                      label: 'Gear Name',
                      name: 'gear_name',
                      placeholder: 'Gibson Les Paul',
                      required: true,
                    },
                    {
                      label: 'Description',
                      name: 'description',
                      placeholder: 'Something something',
                      required: true,
                      type: 'textarea',
                    },
                    {
                      label: 'Comment',
                      name: 'comment',
                      required: true,
                      type: 'textarea',
                    },
                  ],
                  selects: [
                    {
                      handleChange: handleChange,
                      options: [
                        {
                          label: '1',
                          value: '1',
                        },
                        {
                          label: '2',
                          value: '2',
                        },
                        {
                          label: '3',
                          value: '3',
                        },
                        {
                          label: '4',
                          value: '4',
                        },
                        {
                          label: '5',
                          value: '5',
                        },
                      ],
                    },
                  ],
                  buttons: [],
                }}
              />
            )}
          />
          <Route
            path="/edit-item"
            component={(props) => (
              <FormGenerator title="Edit Gear" buttonLabel="Change" schema={editGearFormFields} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
