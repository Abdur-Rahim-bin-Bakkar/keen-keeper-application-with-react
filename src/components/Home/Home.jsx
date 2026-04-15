import React, { useContext } from 'react';
import { StateProviderContext } from '../../Contexts/Contexts';

const Home = () => {
    const {data, setData} = useContext(StateProviderContext)
    console.log(data)
    return (
        <div>
            <h1>this is home page</h1>
            
        </div>
    );
};

export default Home;