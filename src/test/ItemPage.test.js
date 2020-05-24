import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ItemPage from '../components/ItemPage/ItemPage'


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<ItemPage />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ItemPage rating='🎸' features='features' comments='comments'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})