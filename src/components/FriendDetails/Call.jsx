import React, { useContext, useState } from 'react';
import { IoMdVideocam } from 'react-icons/io';
import { MdAddIcCall, MdMessage } from 'react-icons/md';
import { StateProviderContext } from '../../Contexts/Contexts';

const Call = ({ friend }) => {
    const [count, setCount] = useState(0)
    const { history, setHistory } = useContext(StateProviderContext)
    console.log(history)
    const date = new Date()
    const day = date.getDate()
    const year = date.getFullYear()
    const monthName = date.toLocaleString('default', { month: 'long' });

    const handelVideo = () => {
        setHistory([...history, { type: "video", monthName, year, day, friendName: friend.name, id: friend.id ,count}])
        setCount(count + 1)
    }
    const handelCall = () => {
        setHistory([...history, { type: "call", monthName, year, day, friendName: friend.name, id: friend.id ,count}])
        setCount(count + 1)
    }
    const handelText = () => {
        setHistory([...history, { type: "text", monthName, year, day, friendName: friend.name, id: friend.id ,count}])
        setCount(count + 1)

    }
    return (
        <div className='mt-8 md:h-54 card bg-white p-4'>
            <h1 className='font-bold '>Quick Check-In</h1>
            <div className="grid md:grid-cols-3 gap-5 mt-5">
                <div onClick={handelCall} className="card bg-[#E9E9E970] text-center py-5 border justify-center items-center border-[#E9E9E9] ">

                    <MdAddIcCall className='text-xl mb-3' />
                    <h2 className='font-bold text-black'>Call</h2>
                </div>
                <div onClick={handelText} className="card bg-[#E9E9E970] text-center py-5 border border-[#E9E9E9] justify-center items-center">
                    <MdMessage className='text-xl mb-3' />
                    <h2 className='font-bold text-black'>Text</h2>
                </div>
                <div onClick={handelVideo} className="card bg-[#E9E9E970] text-center py-5 border border-[#E9E9E9]justify-center items-center">
                    <IoMdVideocam className='text-xl mb-3' />
                    <h2 className='font-bold text-black'>Video</h2>
                </div>
            </div>
        </div>
    );
};

export default Call;