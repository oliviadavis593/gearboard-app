import React, { Component } from 'react';
import GearContext from '../../GearContext'
import Item from '../Item/Item';


class ItemList extends Component {
    static contextType = GearContext; 
    render() {

        const items = this.context.items; 

        return(
            <section className='gb-item-list__container'>
                <h2>Gear List</h2>
                <ul className='gb-item_list'>
                    {items.map(item => 
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