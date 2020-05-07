import React from 'react';
import { Link } from 'react-router-dom'

export default function EditItem(props) {
    return(
        <div className='gb-edit_item'>
            <Link to='/edit-item'>{props.edit}</Link>
        </div>
    )
}