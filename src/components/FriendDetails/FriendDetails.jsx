import React, { use } from 'react';
import { useParams } from 'react-router';
import FriendDetCard from './FriendDetCard';
import Btns from './Btns';
import ConnectionDet from './ConnectionDet';
import Edit from './Edit';
const data = fetch('/data.json')
    .then(res => res.json())

const FriendDetails = () => {
    const friend = use(data)
    const id = useParams()
    const expectedFriend = friend.find(fri => fri.id === Number(id.id))

    return (
        <div className="bg-[#f8fafc] py-10">
            <div className='max-w-11/12 mx-auto'>
                <div className="grid md:grid-cols-12 gap-5">
                    <div className="md:col-span-4">
                        <FriendDetCard friend={expectedFriend} />
                        <Btns/>                                       
                    </div>

                    <div className="md:col-span-8">
                        <ConnectionDet friend={expectedFriend}  />
                        <Edit friend={expectedFriend} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;