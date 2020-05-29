import React, { Component } from 'react';
import ItemList from '../components/ItemList/ItemList';
import GearContext from '../GearContext';
import MainHeader from './MainHeader';
import Footer from '../components/Footer/Footer';
import '../styles/Homepage.css';

class Homepage extends Component {
    static contextType = GearContext; 
    render() {
        return(
           <div>
               <header>
                   <MainHeader />
               </header>
               <ItemList />
                <Footer />
           </div>
        )
    }
}

export default Homepage; 