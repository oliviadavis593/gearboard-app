import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Item from '../components/Item/Item';


describe.only('Item component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<Item gear_name='whatever' id={2}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Item gear_name='test gear_name' id={1}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})