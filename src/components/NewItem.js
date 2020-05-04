import React, { Component } from 'react';

class NewItem extends Component {
    render() {
        return(
            <form>
                <h1>New Gear Item</h1>
                <div>
                    <label>Instrument Name</label>
                    <input 
                    type='text'
                    name='instrument-name'
                    placeholder='Fender Stratocaster'
                    required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                    name='description'
                    placeholder='What are the specs and features of your gear?'
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                    name='comments'
                    placeholder='What are the pros and cons of your gear?'
                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        )
    }
}

export default NewItem; 