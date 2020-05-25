import React, { Component } from 'react';
import GearContext from '../../GearContext'
import Item from '../Item/Item';
import '../../styles/ItemList.css'


class ItemList extends Component {

    static contextType = GearContext; 
    
    render() {

        const items = this.context.items; 

        return(
            <section className='gb-item-list__container'>
                <ul className='gb-item_list'>
                    {items.map(item => 
                        <li key={item.id}>
                            <Item 
                            item_id={item.id}
                            gear_name={item.gear_name}
                            />
                        </li>    
                    )}
                </ul>
            </section>
        )
    }
}

export default ItemList; 
