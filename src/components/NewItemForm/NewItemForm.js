import React from 'react';

export default function NewItemForm() {
    return(
        <div>
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
                        <input 
                        id='description'
                        type='textarea'
                        name='description'
                        required
                        />

                        <label htmlFor='comment'>Comment:</label>
                        <input 
                        id='comment'
                        type='textarea'
                        name='comment'
                        />

                    <select id='gb-rating'>
                        <option value='1'>🎸</option>
                        <option value='2'>🎸🎸</option>
                        <option value='3'>🎸🎸🎸</option>
                        <option value='4'>🎸🎸🎸🎸</option>
                        <option value='5'>🎸🎸🎸🎸🎸</option>
                    </select>
                    </fieldset>

                    <button>
                        Add Gear
                    </button>
                </form>
            </main>
        </div>
    )
}