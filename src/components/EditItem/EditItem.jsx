import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearContext from '../../GearContext'

export default class EditItem extends Component {

    static contextType = GearContext; 

    render() {
        const { id } = this.props; 
        return(
            <div>
                <Link to={`/edit/${id}`}>Edit Item</Link>
            </div>
        )
    }
}

