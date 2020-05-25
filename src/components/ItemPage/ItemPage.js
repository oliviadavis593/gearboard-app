import React, { Component } from 'react';
import GearContext from '../../GearContext'
import EditItem from '../EditItem/EditItem'
import '../../styles/ItemPage.css'


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
        const { item_id } = this.props.match.params
        const item = items.find(item => item.id.toString() === item_id.toString()) || {}

        return(
                <section className='gb-item-page__container'>
                <header>
                    <h1>Gear Item</h1>
                </header>
                <div className='gb-item-info__container'>
                    <div className='item__rating'>
                        <h2>Rating</h2> 
                        <div className='gb-rating'>
                            {item.rating}
                        </div>
                    </div>
                    <div className='item__features'>
                        <h2>Features</h2> 
                        <div className='gb-features'>
                            {item.features}
                        </div>
                    </div>
                    <div className='item__comments'>
                        <h2>Comments</h2> 
                        <div className='gb-comments'>
                            {item.comments}
                        </div>
                    </div>
                    </div>
                <div className='gb-edit-btns__container'>
                    <div>
                        <EditItem 
                        id={item_id}
                        />
                    </div>
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