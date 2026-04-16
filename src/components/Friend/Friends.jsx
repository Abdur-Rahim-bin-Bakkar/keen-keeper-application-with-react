import React, { use } from 'react';
import FriendCard from '../FriendCard.jsx/FriendCard';
const data = fetch('/data.json')
                .then(res => res.json())
const Friends = () => {
    const friends = use(data)
    console.log(friends)
    return (
        <div className='max-w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl '>Your Friend</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">

                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}/>)
                }
            </div>
        </div>
    );
};

export default Friends;