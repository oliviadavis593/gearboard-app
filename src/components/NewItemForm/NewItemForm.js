import React, { Component } from 'react';
import GearContext from '../../GearContext'
import MainHeader from '../../views/MainHeader';
import '../../styles/NewItem.css'


export default class NewItemForm extends Component {
    state = {
        rating: 0,
        description: '',
        comment: '',
        gearName: ''
    }
   
    static contextType = GearContext; 

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    
        const { rating, description, comment, gearName } = this.state;
        const newItem = { rating, description, comment, gearName };
    
        this.context.addItem(newItem);
    }
    

    render() {
        console.log(this.context.addItem)
        return(
            <div>
                <header>
                    <MainHeader />
                </header>
                <main>
                    <form 
                    className='gb-new-item__form' 
                    onSubmit={this.handleSubmit}
                    >
                        <fieldset>
                            <legend><h2>Add New Gear</h2></legend>
                            
                            <label htmlFor='gear-name'>Gear Name:</label>
                            <input 
                            id='gear-name'
                            type='text'
                            name='gear-name'
                            required
                            onChange={this.handleChange}
                            />
    
                            <label htmlFor='description'>Description:</label>
                            <textarea
                            id='description'
                            type='textarea'
                            name='description'
                            required
                            onChange={this.handleChange}
                            >
                            </textarea>
    
                            <label htmlFor='comment'>Comment:</label>
                            <textarea
                            id='comment'
                            type='textarea'
                            name='comment'
                            onChange={this.handleChange}
                            >
                            </textarea>
    
                        <label htmlFor='rating'>Rating:</label>
                        <select name='rating' id='gb-rating'>
                            <option value='1'>🎸</option>
                            <option value='2'>🎸🎸</option>
                            <option value='3'>🎸🎸🎸</option>
                            <option value='4'>🎸🎸🎸🎸</option>
                            <option value='5'>🎸🎸🎸🎸🎸</option>
                        </select>
                        </fieldset>
    
                        <button
                        className='gb-add__button'
                        type='submit'
                        >
                            Add Gear
                        </button>
                    </form>
                </main>
            </div>
        )
    }
}