import React, { Component } from 'react';
import GearContext from '../../GearContext'
import MainHeader from '../../views/MainHeader';
import '../../styles/NewItem.css'


export default class NewItemForm extends Component {
   
    static contextType = GearContext; 

    handleChange = event => {
        this.setState({
            items: {
                ...this.state.items,
                [event.target.items]: event.target.value 
            }
        })
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
                    onSubmit={() => this.context.addItem(this.props.items)}
                    >
                        <fieldset>
                            <legend><h2>Add New Gear</h2></legend>
                            
                            <label htmlFor='gear-name'>Gear Name:</label>
                            <input 
                            id='gear-name'
                            type='text'
                            name='gear-name'
                            required
                            />
    
                            <label htmlFor='description'>Description:</label>
                            <textarea
                            id='description'
                            type='textarea'
                            name='description'
                            required
                            >
                            </textarea>
    
                            <label htmlFor='comment'>Comment:</label>
                            <textarea
                            id='comment'
                            type='textarea'
                            name='comment'
                            >
                            </textarea>
    
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