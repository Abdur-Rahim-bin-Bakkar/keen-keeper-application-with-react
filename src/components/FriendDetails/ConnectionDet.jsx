import React from 'react';

const ConnectionDet = ({ friend }) => {
    const date = new Date(friend.next_due_date)
    const day = date.getDate()
    const year = date.getFullYear()
    const monthName = date.toLocaleString('default', { month: 'long' });
    console.log()
    return (
        <div className='grid md:grid-cols-3 gap-5 mt-5 md:mt-0 '>
            <div className="card bg-white p-5 text-center md:h-40 items-center justify-center">
                <h1 className='text-xl font-bold'>62</h1>
                <p>Days Since Connect</p>
            </div>
            <div className="card bg-white p-5 text-center md:h-40 items-center justify-center">
                <h1 className='text-xl font-bold'>{friend.goal}</h1>
                <p>Goal (Days)</p>
            </div>
            <div className="card bg-white p-5 text-center md:h-40 items-center justify-center">
                <h1 className='text-xl font-bold'>{monthName} {day} ,{year}</h1>
                <p>Next Duet</p>
            </div>

        </div>
    );
};

export default ConnectionDet;