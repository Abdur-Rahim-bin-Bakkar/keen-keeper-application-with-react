import React, { useContext } from 'react';
import video from '../../assets/video.png'
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import { StateProviderContext } from '../../Contexts/Contexts';
import { RiDeleteBinLine } from 'react-icons/ri';

const HistoryCard = ({ his }) => {
    const { history, setHistory } = useContext(StateProviderContext)
    const handelDelete = () => {
        const filter = history.filter(hiss => hiss.count !== his.count )
        // console.log( his.count )
        setHistory(filter)
    }
    return (
        <div className='card p-3  bg-white mt-5 flex-row items-center justify-between'>
            <div className=" flex flex-row gap-5 items-center">

                <img className='w-10 h-10' src={his.type === 'text' ? text : his.type === 'video' ? video : call} alt="" />
                <div className="">
                    <p><span className='font-bold text-black text-lg'>{his.type} </span> with {his.friendName}</p>

                    <p>{his.monthName} {his.day}, {his.year}</p>
                </div>
            </div>
            <button onClick={handelDelete} className='btn btn-error'> <RiDeleteBinLine /> </button>
        </div>
    );
};

export default HistoryCard;