import React from 'react';

const GearContext = React.createContext({
    items: [],
    deleteItem: () => {},
    addItem: () => {},
    updateItem: () => {}
})

export default GearContext;