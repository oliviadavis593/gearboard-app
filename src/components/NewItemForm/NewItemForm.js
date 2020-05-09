import React from 'react';
import MainHeader from '../../views/MainHeader'
import '../../styles/NewItem.css'

export default function NewItemForm() {
    return(
        <div>
            <header>
                <MainHeader />
            </header>
            <main>
                <form className='gb-new-item__form' method='post'>
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

                    <select id='gb-rating'>
                        <option value='1'>🎸</option>
                        <option value='2'>🎸🎸</option>
                        <option value='3'>🎸🎸🎸</option>
                        <option value='4'>🎸🎸🎸🎸</option>
                        <option value='5'>🎸🎸🎸🎸🎸</option>
                    </select>
                    </fieldset>

                    <button
                    className='gb-add__button'
                    >
                        Add Gear
                    </button>
                </form>
            </main>
        </div>
    )
}