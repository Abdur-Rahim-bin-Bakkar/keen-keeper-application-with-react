import React, { useContext } from 'react';
import { StateProviderContext } from '../../Contexts/Contexts';
import HistoryCard from './HistoryCard';

const History = () => {
    const { history, setHistory } = useContext(StateProviderContext)
    console.log(history)
    const handelChange = (e) => {
        const selectedType = e.target.value
        const newRecord = [...history].sort((a, b) => {
            if (a.type === selectedType) return -1;
            if (b.type === selectedType) return 1;
            console.log(selectedType)
            return 0;
        });
        setHistory(newRecord)
    }
    return (
        <div className='mt-5'>
            <select onChange={handelChange} defaultValue="Pick a color" className="select">
                <option disabled={true}>Select any Type</option>
                <option>call</option>
                <option>video</option>
                <option>text</option>
            </select>
            <div className="">

                {
                    history.map((his, i) => <HistoryCard key={i} his={his} />)
                }
            </div>
        </div>
    );
};

export default History;