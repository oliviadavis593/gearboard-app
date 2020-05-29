import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearContext from '../../GearContext';
import '../../styles/EditItemRoute.css';

export default class EditItem extends Component {

    static contextType = GearContext; 

    render() {
        const { id } = this.props; 
        return(
            //button that leads to the edit item form 
            <div>
                <Link to={`/edit/${id}`} className='gb-edit__route'>
                    <button>
                        Edit Item
                    </button>
                </Link>
            </div>
        )
    }
}

