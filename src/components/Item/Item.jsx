import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import GearContext from '../../GearContext';



class Item extends Component {

    static contextType = GearContext; 

    render() {
        const { gear_name, id } = this.props; 
        return(
            <div className='item'>
                <Link to={`/item/${id}`}>
                    <h2 className='item__name'>
                        {gear_name}
                    </h2>
                </Link>

                
                <div className='gb-list-delete__container'>
                    <button
                    className='gb-item__delete'
                    type='button'
                    onClick={() => this.context.deleteItem(this.props.id)}
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

