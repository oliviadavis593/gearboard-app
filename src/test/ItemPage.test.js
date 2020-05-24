import React from 'react';
import ReactDOM from 'react-dom'
import ItemPage from '../components/ItemPage/ItemPage'


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<ItemPage />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})