import React, { Component} from 'react';
import GearContext from '../../GearContext'
import MainHeader from '../../views/MainHeader';
import '../../styles/EditItem.css'

export default class EditItemForm extends Component {
    state = {
        rating: '',
        description: '',
        comment: '',
        gearName: ''
    }

    static defaultProps =  {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }

    static contextType = GearContext; 

    handleChangeGearName = e => {
        this.setState({ gear_name: e.target.value })
    }

    handleChangeDescription = e => {
        this.setState({ features: e.target.value })
    }

    handleChangeComment = e => {
        this.setState({ comments: e.target.value })
    }

    handleChangeRating = e => {
        this.setState({ rating: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { rating, features, comment, gear_name } = this.state;
        const editItem = { rating, features, comment, gear_name };
    
        this.context.updateItem(editItem);
        this.props.history.push('/homepage');
    }

    render() {
        
        return(
            <div>
                <header>
                    <MainHeader />
                </header>
                <main>
                    <form 
                    className='gb-edit-item__form'
                    onSubmit={this.handleSubmit}
                    >
                        <fieldset>
                            <legend><h2>Edit Gear Form</h2></legend>
                            <label htmlFor='gear-name'>Gear Name:</label>
                            <input 
                            id='gear-name'
                            type='text'
                            name='gear_name'
                            required
                            onChange={this.handleChangeGearName}
                            />
    
                            <label htmlFor='description'>Features:</label>
                            <textarea
                            id='features'
                            type='textarea'
                            name='features'
                            required
                            onChange={this.handleChangeDescription}
                            >
                            </textarea>
    
                            <label htmlFor='comment'>Comments:</label>
                            <textarea
                            id='comment'
                            type='textarea'
                            name='comments'
                            onChange={this.handleChangeComment}
                            >
                            </textarea>
                        
                        <label htmlFor='rating'>Rating:</label>
                        <select name='rating' id='gb-rating' onChange={this.handleChangeRating}>
                            <option value=''></option>
                            <option value='🎸'>🎸</option>
                            <option value='🎸🎸'>🎸🎸</option>
                            <option value='🎸🎸🎸'>🎸🎸🎸</option>
                            <option value='🎸🎸🎸🎸'>🎸🎸🎸🎸</option>
                            <option value='🎸🎸🎸🎸🎸'>🎸🎸🎸🎸🎸</option>
                        </select>
    
                        </fieldset>
    
                        <button
                        className='gb-edit__button'
                        >
                            Edit Gear
                        </button>
                    </form>
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
                </main>
            </div>
        )
    }
}