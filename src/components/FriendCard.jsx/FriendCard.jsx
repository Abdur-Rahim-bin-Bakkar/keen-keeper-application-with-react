import React from 'react';
import { useNavigate } from 'react-router';

const FriendCard = ({friend}) => {
    const navigate = useNavigate()
    const handelFrinedDetails = ()=>{
        navigate(`/friend/${friend.id}`)
    }
    console.log(friend)
    return (
        <div onClick={handelFrinedDetails} className='card bg-white py-4 cursor-pointer text-center hover:scale-103 hover:-translate-y-1 duration-1000 shadow-2xl hover:shadow-amber-600'>
            <img src={friend.picture} className='max-w-25 rounded-full mx-auto border border-success hover:border-2 duration-1000 hover:scale-104' alt="" />
            <h2 className='text-xl font-bold my-3'>{friend.name}</h2>
            <p>{friend.days_since_contact}d ago</p>
            <div className="flex justify-center gap-3">
                {
                    friend.tags.map( tag => <span className='badge  bg-[#CBFADB] font-bold py-4 px-6 rounded-full'>{tag}</span>)
                }
            </div>

            <span className={`btn btn-sm rounded-full w-30 mx-auto my-3 text-white font-bold  ${friend.status === 'overdue' ? 'bg-[#EF4444]': friend.status === 'on-track' ? 'bg-[#244D3F]' : 'bg-[#EFAD44]'}`}>{friend.status}</span>
        </div>
    );
};

export default FriendCard;