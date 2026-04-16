import React, { createContext, useState } from 'react';
export const StateProviderContext = createContext()

const Contexts = ({children}) => {
    const [history, setHistory] = useState([])
    return (
        <StateProviderContext value={{history,setHistory}}>
            {children}
        </StateProviderContext>
    );
};

export default Contexts;