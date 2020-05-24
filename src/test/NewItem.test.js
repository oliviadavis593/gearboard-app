import React from 'react';
import ReactDOM from 'react-dom'
import NewItem from '../components/NewItemForm/NewItemForm'


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewItem />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})