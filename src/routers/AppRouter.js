import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GearContext from '../GearContext'
import HomePage from '../views/Homepage';
import Landing from '../views/Landing';
import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import NewItemForm from '../components/NewItemForm/NewItemForm'
import EditItemForm from '../components/EditItemForm/EditItemForm'
import ItemPage from '../components/ItemPage/ItemPage'
import Error from '../Error'
import config from '../config'



class AppRouter extends Component  {

  state = {
    items: [],
    error: null, 
  }

  static contextType = GearContext;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/items`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(items => {
        this.setState({ items })
      })
      .catch(error => {
        console.error({ error })
      })
  }


 handleDeleteItem = item_id => {
   this.setState({
     items: this.state.items.filter(item => item.id !== item_id)
   })
 }

 handleAddItem = item => {
  this.setState({ items: [...this.state.items, item]})
}

handleUpdateItem = updatedItem => {
  const newItem = this.state.items.map(i => 
    (i.id === updatedItem.id)
      ? updatedItem
      : i
    )
    this.setState({
      items: newItem
    })
}

  render() {
    const contextValue = {
      items: this.state.items,
      deleteItem: this.handleDeleteItem,
      addItem: this.handleAddItem,
      updateItem: this.handleUpdateItem
    }
    return (
        <GearContext.Provider
      value={contextValue}
      >
        <Error>
          <div className="App">
    
          <div className="App__landing">
            <Route exact path="/" component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
          </div>

          <main>
            <Switch>
              <Route exact path='/homepage' component={HomePage} />
              <Route path='/new-item' component={NewItemForm} />
              <Route path='/edit/:item_id' component={EditItemForm} />
              <Route path='/item/:item_id' component={ItemPage} />
            </Switch>
          </main>
          
        </div>
        </Error>
      </GearContext.Provider>
    );
  }
}

export default AppRouter;