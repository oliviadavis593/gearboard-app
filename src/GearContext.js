import React from 'react';

const GearContext = React.createContext({
    items: [],
    deleteItem: () => {}
})

export default GearContext;