import React, { Component } from 'react';
import GearContext from '../../GearContext';
import config from '../../config'
import EditItem from '../EditItem/EditItem';


class Item extends Component {

    static contextType = GearContext; 

    handleClickDelete = e => {
        const itemId  = this.props.id

        fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if(!response.ok)
                return response.json().then(e => Promise.reject(e))
                return response.json()
        })
        .then(() => {
            this.context.deleteItem(itemId)
            //allows parent to perform extra behavior
            this.props.onDeleteItem(itemId)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const { rating, gearName, description, comment } = this.props; 
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
                    onClick={() => this.handleClickDelete()}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Item; 