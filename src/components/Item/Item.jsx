import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import GearContext from '../../GearContext';
import PropTypes from 'prop-types';
import config from '../../config';
import '../../styles/Item.css';



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
            //return res.json()
        })
        .then(() => {
            this.context.deleteItem(item_id)
            
        })
        .catch(error => {
            console.error({ error })
        })
    }


    render() {
        const { gear_name, item_id } = this.props; 
        return(
           <BrowserRouter>
             <div className='gb-item'>
                <Link to={`/item/${item_id}`}>
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
           </BrowserRouter>
        )
    }
}

export default Item; 

Item.propTypes = {
    gear_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}