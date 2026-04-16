import React from 'react';

const HeroCards = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>

            <div className="text-center px-4 py-5 card bg-white">
                <h1 className='text-black font-bold text-xl'>10</h1>
                <p>Your Friend</p>
            </div>
            <div className="text-center px-4 py-5 card bg-white">
                <h1 className='text-black font-bold text-xl'>10</h1>
                <p>Your Friend</p>
            </div>
            <div className="text-center px-4 py-5 card bg-white">
                <h1 className='text-black font-bold text-xl'>10</h1>
                <p>Your Friend</p>
            </div>
            <div className="text-center px-4 py-5 card bg-white">
                <h1 className='text-black font-bold text-xl'>10</h1>
                <p>Your Friend</p>
            </div>

        </div>
    );
};

export default HeroCards;