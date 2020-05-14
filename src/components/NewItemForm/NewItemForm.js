import React, { Component } from 'react';
import GearContext from '../../GearContext'
import MainHeader from '../../views/MainHeader';
import '../../styles/NewItem.css'


export default class NewItemForm extends Component {
    state = {
        rating: '',
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
    
        const { rating, features, comments, gear_name } = this.state;
        const newItem = { rating, features, comments, gear_name };
    
        this.context.addItem(newItem);
        this.props.history.push('/homepage');
    }

    /*
    handleSubmit = e => {
        e.preventDefault();
    
        const { rating, description, comment, gearName } = this.state;
        const newItem = { 
            rating,
            description,
            comment,
            gearName,
            id: Math.floor(100 + Math.random() * 900)
        };
    
        this.context.addItem(newItem);
        this.props.history.push('/homepage');
    }
    */
    

    render() {
        //console.log(this.context.addItem)
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
                            name='gear_name'
                            required
                            onChange={this.handleChange}
                            />
    
                            <label htmlFor='description'>Features:</label>
                            <textarea
                            id='features'
                            type='textarea'
                            name='features'
                            required
                            onChange={this.handleChange}
                            >
                            </textarea>
    
                            <label htmlFor='comment'>Comments:</label>
                            <textarea
                            id='comments'
                            type='textarea'
                            name='comments'
                            onChange={this.handleChange}
                            >
                            </textarea>
    
                        <label htmlFor='rating'>Rating:</label>
                        <select name='rating' id='gb-rating' onChange={this.handleChange}>
                            <option value=''></option>
                            <option value='🎸'>🎸</option>
                            <option value='🎸🎸'>🎸🎸</option>
                            <option value='🎸🎸🎸'>🎸🎸🎸</option>
                            <option value='🎸🎸🎸🎸'>🎸🎸🎸🎸</option>
                            <option value='🎸🎸🎸🎸🎸'>🎸🎸🎸🎸🎸</option>
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