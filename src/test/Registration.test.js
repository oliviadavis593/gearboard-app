import React from 'react';
import ReactDOM from 'react-dom'
import Registration from '../components/Registration/Registration'


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<Registration />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})