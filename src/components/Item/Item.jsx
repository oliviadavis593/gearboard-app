import React, { Component } from 'react';
import EditItem from '../EditItem/EditItem'

class Item extends Component {
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
                <EditItem />
            </div>
        )
    }
}

export default Item; 