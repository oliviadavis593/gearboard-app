import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import EditItemForm from '../components/EditItemForm/EditItemForm'

describe('EditItem component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EditItemForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<EditItemForm gear_name='test gear_name' features='test features' comments='test comments' rating='🎸' />)
            .toJSON()
           expect(tree).toMatchSnapshot();
    })
})