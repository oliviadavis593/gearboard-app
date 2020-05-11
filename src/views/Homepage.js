import React, { Component } from 'react';
import ItemList from '../components/ItemList/ItemList'
import GearContext from '../GearContext'
import MainHeader from './MainHeader'
import '../styles/Homepage.css'

class Homepage extends Component {
    static contextType = GearContext; 
    render() {
        return(
           <div>
               <header>
                   <MainHeader />
               </header>
               <ItemList />
           </div>
        )
    }
}

export default Homepage; 