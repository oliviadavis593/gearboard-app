import React from 'react';
import '../../styles/EditItem.css'

export default function EditItemForm() {
    return(
        <div>
            <main>
                <form className='gb-edit-item__form'>
                    <fieldset>
                        <legend><h2>Edit Gear Form</h2></legend>
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
                    className='gb-edit__button'
                    >
                        Edit Gear
                    </button>
                </form>
            </main>
        </div>
    )
}