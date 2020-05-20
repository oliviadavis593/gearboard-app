import React, { Component } from 'react';
import GearContext from '../../GearContext';
import MainHeader from '../../views/MainHeader';
import TokenService from '../../services/token-service'
import config from '../../config';
import '../../styles/NewItem.css';



export default class NewItemForm extends Component {

    state = {
        error: null, 
    }
    
    static contextType = GearContext; 

    handleAddItem(event) {
        event.preventDefault()
        const { rating, gear_name, features, comments } = event.target; 
        const newItem = {
            rating: rating.value, 
            gear_name: gear_name.value, 
            features: features.value, 
            comments: comments.value, 
        }
        this.setState({ error: null })
        fetch(`${config.API_ENDPOINT}/api/items`, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(data => {
            rating.value = '' 
            gear_name.value = ''
            features.value = ''
            comments.value = ''
            this.context.addItem(data)
            this.props.history.push('/homepage')
        })
        .catch(error => {
            this.setState({ error })
        })
    }


   handleChange = event => {
       this.setState({
           item: {
               ...this.state.item, 
               [event.target.name]: event.target.value
           }
       })
   } 

    render() {
        const { error } = this.state
        return(
            <div>
                <header>
                    <MainHeader />
                </header>
                <main>
                    <form 
                    className='gb-new-item__form' 
                    onSubmit={e => {
                        this.handleAddItem(e)
                    }}
                    >
                        <div className='gb-add-item__error'>
                            { error && <p>{error.message}</p>}
                        </div>
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
    
                            <label htmlFor='features'>Features:</label>
                            <textarea
                            id='features'
                            type='textarea'
                            name='features'
                            required
                            onChange={this.handleChange}
                            >
                            </textarea>
    
                            <label htmlFor='comments'>Comments:</label>
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