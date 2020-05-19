import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearContext from '../../GearContext'
import '../../styles/EditItemRoute.css'

export default class EditItem extends Component {

    static contextType = GearContext; 

    render() {
        const { id } = this.props; 
        return(
            <div>
                <Link to={`/edit/${id}`} className='gb-edit__route'>Edit Item</Link>
            </div>
        )
    }
}

