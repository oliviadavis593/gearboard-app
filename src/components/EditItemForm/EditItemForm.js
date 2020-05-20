import React, { Component} from 'react';
import GearContext from '../../GearContext'
import MainHeader from '../../views/MainHeader';
import TokenService from '../../services/token-service'
import config from '../../config';
import '../../styles/EditItem.css'

export default class EditItemForm extends Component {
    state = {
        rating: '',
        features: '',
        comment: '',
        gear_name: '',
        error: null
    }

    static defaultProps =  {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }

    static contextType = GearContext; 

    componentDidMount() {
        const item_id = this.props.match.params.item_id
        console.log("item_id", item_id)
        fetch(`${config.API_ENDPOINT}/api/items/${item_id}`, {
            method: 'GET',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(responseData => {
            this.setState({ 
                id: responseData.id,
                rating: responseData.rating, 
                gear_name: responseData.gear_name, 
                features: responseData.features, 
                comments: responseData.comments
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    handleChangeGearName = e => {
        this.setState({ gear_name: e.target.value })
    }

    handleChangeDescription = e => {
        this.setState({ features: e.target.value })
    }

    handleChangeComment = e => {
        this.setState({ comments: e.target.value })
    }

    handleChangeRating = e => {
        this.setState({ rating: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { item_id } = this.props.match.params
        const { id, rating, gear_name, features, comments } = this.state
        const newItem = { id, rating, gear_name, features, comments } 
        fetch(`${config.API_ENDPOINT}/api/items/${item_id}`, {
            method: 'PATCH',
            body: JSON.stringify(newItem),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            //return res.json()
        })
        .then(res => {
            this.context.updateItem(newItem)
            this.props.history.push('/homepage')
        })
        .catch(error => {
            console.error({ error })
            this.setState({ error })
        })
    }

    render() {
        
        return(
            <div>
                <header>
                    <MainHeader />
                </header>
                <main>
                    <form 
                    className='gb-edit-item__form'
                    onSubmit={this.handleSubmit}
                    >
                        <fieldset>
                            <legend><h2>Edit Gear Form</h2></legend>
                            <label htmlFor='gear-name'>Gear Name:</label>
                            <input 
                            id='gear-name'
                            type='text'
                            name='gear_name'
                            required
                            onChange={this.handleChangeGearName}
                            />
    
                            <label htmlFor='description'>Features:</label>
                            <textarea
                            id='features'
                            type='textarea'
                            name='features'
                            required
                            onChange={this.handleChangeDescription}
                            >
                            </textarea>
    
                            <label htmlFor='comment'>Comments:</label>
                            <textarea
                            id='comment'
                            type='textarea'
                            name='comments'
                            onChange={this.handleChangeComment}
                            >
                            </textarea>
                        
                        <label htmlFor='rating'>Rating:</label>
                        <select name='rating' id='gb-rating' onChange={this.handleChangeRating}>
                            <option value=''></option>
                            <option value='🎸'>🎸</option>
                            <option value='🎸🎸'>🎸🎸</option>
                            <option value='🎸🎸🎸'>🎸🎸🎸</option>
                            <option value='🎸🎸🎸🎸'>🎸🎸🎸🎸</option>
                            <option value='🎸🎸🎸🎸🎸'>🎸🎸🎸🎸🎸</option>
                        </select>
    
                        </fieldset>
    
                        <button
                        className='gb-edit__button'
                        >
                            Edit Gear
                        </button>
                    </form>
                    <div>
                        <button
                        tag='button'
                        role='link'
                        className='gb-edit__goback-button'
                        onClick={() => this.props.history.goBack()} 
                        >
                            Back
                        </button>
                    </div>
                </main>
            </div>
        )
    }
}