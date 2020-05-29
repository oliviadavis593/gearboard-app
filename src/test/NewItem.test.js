import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewItem from '../components/NewItemForm/NewItemForm';


describe('Footer component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewItem />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NewItem />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})