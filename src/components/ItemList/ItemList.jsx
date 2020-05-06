import React, { Component } from 'react';
import Item from '../Item/Item'
import STORE from '../store/store'

class ItemList extends Component {
    render() {
        return(
            <section className='ItemList'>
                <h2>Gear List</h2>
                <ul className='ItemList__list'>
                    {STORE.items.map(item => 
                        <Item 
                        key={item.id}
                        {...item}
                        />    
                    )}
                </ul>
            </section>
        )
    }
}

export default ItemList; 