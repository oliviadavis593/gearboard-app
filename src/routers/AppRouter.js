import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GearContext from '../GearContext'
import HomePage from '../views/Homepage';
import Landing from '../views/Landing';
import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import NewItemForm from '../components/NewItemForm/NewItemForm'
import EditItemForm from '../components/EditItemForm/EditItemForm'
import store from '../components/store/store'


class AppRouter extends Component  {

  state = {
    items: store.items
  }

  static contextType = GearContext;


 handleDeleteItem = itemId => {
   console.log(itemId)
   this.setState({
     items: this.state.items.filter(item => item.id !== itemId)
   })
 }

  render() {
    const contextValue = {
      items: this.state.items,
      deleteItem: this.handleDeleteItem,
      addItem: this.handleAddItem
    }
    return (
      <GearContext.Provider
      value={contextValue}
      >
        <div className="App">
  
        <div className="App__landing">
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </div>
  
        <main>
          <Switch>
            <Route exact path="/homepage" component={HomePage} />
            <Route path="/new-item" component={NewItemForm} />
            <Route path="/edit-item" component={EditItemForm} />
          </Switch>
        </main>
        
      </div>
      </GearContext.Provider>
    );
  }
}

export default AppRouter;