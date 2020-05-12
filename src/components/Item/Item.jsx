import React, { Component } from 'react';
import GearContext from '../../GearContext';
import EditItem from '../EditItem/EditItem';


class Item extends Component {

    static contextType = GearContext; 

    render() {
        const { rating, gearName, description, comment } = this.props; 
        //console.log(this.context.deleteItem)
        return(
            <div className='item'>
                <h2 className='item__name'>
                    {gearName}
                </h2>
                <div className='item__rating'>
                    Rating: {rating}
                </div>
                <div className='item__description'>
                   description: {description}
                </div>
                <div className='item__comment'>
                   comment: {comment}
                </div>
                <EditItem 
                edit='Edit Item'
                />
                <div className='gb-list-delete__container'>
                    <button
                    className='gb-item__delete'
                    type='button'
                    onClick={() => this.context.deleteItem(this.props.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Item; 