import React from 'react';
import { FaPlus } from 'react-icons/fa';
import HeroCards from './HeroCards';

const Hero = () => {
    return (
        <div className='max-w-11/12 mx-auto pt-10 pb-5'>
            <h1 className='text-2xl text-center font-bold'>Friends to keep close in your life</h1>
            <p className='mt-3 text-center md:max-w-[55%] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>


            <div className="flex justify-center mt-5">
                <button className='btn bg-[#244D3F] text-white font-bold hover:-translate-y-1 duration-1000 hover:bg-success'><FaPlus/> Add a Friend</button>
            </div>

            <HeroCards/>
        </div>
    );
};

export default Hero;