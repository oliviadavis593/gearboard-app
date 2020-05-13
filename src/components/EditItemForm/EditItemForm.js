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
        this.setState({ gearName: e.target.value })
    }

    handleChangeDescription = e => {
        this.setState({ description: e.target.value })
    }

    handleChangeComment = e => {
        this.setState({ comment: e.target.value })
    }

    handleChangeRating = e => {
        this.setState({ rating: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { rating, description, comment, gearName } = this.state;
        const editItem = { rating, description, comment, gearName };
    
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
                            name='gearName'
                            required
                            onChange={this.handleChangeGearName}
                            />
    
                            <label htmlFor='description'>Description:</label>
                            <textarea
                            id='description'
                            type='textarea'
                            name='description'
                            required
                            onChange={this.handleChangeDescription}
                            >
                            </textarea>
    
                            <label htmlFor='comment'>Comment:</label>
                            <textarea
                            id='comment'
                            type='textarea'
                            name='comment'
                            onChange={this.handleChangeComment}
                            >
                            </textarea>
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