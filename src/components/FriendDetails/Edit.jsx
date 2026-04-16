import React from 'react';

const Edit = ({friend}) => {
    const lastMeat = new Date(friend.last_contact_date) 
    const today = new Date()
    console.log(friend.last_contact_date)
    const def = Math.floor((today- lastMeat ) / (1000 * 60 * 60 * 24))
    console.log(def)
    return (
        <div className='card bg-white px-5 py-9 mt-5 md:h-45'>
            <div className="flex justify-between">
                <h1 className='font-bold text-lg'>Relationship Goal</h1>
                <button className='btn'>Edit</button>
            </div>
            <h3 className='mt-4'>Connect every <span className='font-bold '>{def} days</span></h3>
            
        </div>
    );
};

export default Edit;