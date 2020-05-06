import React from 'react';
import { Link } from 'react-router-dom'

export default function EditItem(props) {
    return(
        <div className='gb-editItem'>
            <Link to='/edititem'>{props.edit}</Link>
        </div>
    )
}