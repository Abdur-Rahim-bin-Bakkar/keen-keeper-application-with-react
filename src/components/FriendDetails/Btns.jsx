import React from 'react';
import { BsArchive } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';

const Btns = () => {
    return (
        <div className='space-y-5 mt-5'>
            <div className="card bg-white p-4 text-center hover:-translate-y-1 duration-1000 cursor-pointer">
                <h1 className='text-xl font-bold flex justify-center items-center gap-3 '><IoMdNotifications /> Snooze 2 weeks</h1>
            </div>
            <div className="card bg-white p-4 text-center hover:-translate-y-1 duration-1000 cursor-pointer">
                <h1 className='text-xl font-bold flex justify-center items-center gap-3 '><BsArchive /> SArchive</h1>
            </div>
            <div className="card bg-white p-4 text-center hover:-translate-y-1 duration-1000 cursor-pointer text-error">
                <h1 className='text-xl font-bold flex justify-center items-center gap-3 '><RiDeleteBinLine /> Delete</h1>
            </div>


        </div>
    );
};

export default Btns;