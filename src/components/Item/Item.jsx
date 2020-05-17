import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import GearContext from '../../GearContext';
import config from '../../config'
import '../../styles/Item.css'



class Item extends Component {

    static contextType = GearContext; 

    handleClickDelete = e => {
        const item_id = this.props.id

        fetch(`${config.API_ENDPOINT}/api/items/${item_id}`, {
            method: 'DELETE',
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
        .then(() => {
            this.context.deleteItem(item_id)
            
        })
        .catch(error => {
            console.error({ error })
        })
    }


    render() {
        const { gear_name, id } = this.props; 
        return(
            <div className='gb-item'>
                <Link to={`/item/${id}`}>
                    <h2 className='gb-item__gear_name'>
                        {gear_name}
                    </h2>
                </Link>

                
                <div className='gb-list-delete__container'>
                    <button
                    className='gb-item__delete'
                    type='button'
                    onClick={() =>  this.handleClickDelete()}
                    >
                        {' '}
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Item; 

