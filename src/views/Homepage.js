import React, { Component } from 'react';
import ItemList from '../components/ItemList/ItemList'
import '../styles/Homepage.css'

class Homepage extends Component {
    render() {
        return(
           <div>
               <ItemList />
           </div>
        )
    }
}

export default Homepage; 