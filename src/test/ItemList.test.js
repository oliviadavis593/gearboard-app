import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import ItemList from '../components/ItemList/ItemList'

describe('ItemList Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ItemList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ItemList gear_name='gear_name' id={2}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})