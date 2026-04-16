import React from 'react';
import History from '../components/History/History';

const Timeline = () => {
    return (
        <div className='bg-[#f8fafc] py-15'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-4xl font-bold'>Timeline </h1>


                <History/>
            </div>

        </div>
    );
};

export default Timeline;