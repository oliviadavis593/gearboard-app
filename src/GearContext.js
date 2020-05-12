import React from 'react';

const GearContext = React.createContext({
    items: [],
    deleteItem: () => {},
    addItem: () => {}
})

export default GearContext;