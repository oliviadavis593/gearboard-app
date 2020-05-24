import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Registration from '../components/Registration/Registration'


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<Registration />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Registration />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})