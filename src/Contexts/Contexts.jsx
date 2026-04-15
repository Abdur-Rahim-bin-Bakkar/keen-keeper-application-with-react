import React, { createContext, useState } from 'react';
export const StateProviderContext = createContext()

const Contexts = ({children}) => {
    const [data, setData] = useState('data')
    return (
        <StateProviderContext value={{data,setData}}>
            {children}
        </StateProviderContext>
    );
};

export default Contexts;