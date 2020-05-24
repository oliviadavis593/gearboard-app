import React from 'react';
import ReactDOM from 'react-dom'
import Item from '../components/Item/Item'


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<Item gear_name='whatever' id={2}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})