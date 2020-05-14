import React, { Component } from 'react';
import GearContext from '../../GearContext'
import EditItem from '../EditItem/EditItem'


export default class ItemPage extends Component {

    
    static defaultProps =  {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }

    static contextType = GearContext; 

    render() {
        const items = this.context.items; 
        const { itemId } = this.props.match.params
        const item = items.find(item => item.id === itemId)


        return(
            <section>
                <header>
                    <h1>Gear Item</h1>
                </header>
                <div className='item__rating'>
                    Rating: {item.rating}
                </div>
                <div className='item__description'>
                   Features: {item.features}
                </div>
                <div className='item__comment'>
                   Comments: {item.comments}
                </div>
                <EditItem />
                <div>
                <button
                    tag='button'
                    role='link'
                    className='gb-edit__goback-button'
                    onClick={() => this.props.history.goBack()} 
                >
                    Back
                </button>
                </div>
            </section>
        )
    }
}