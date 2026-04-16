import React from 'react';
import logo from '../../assets/logo-xl.png'
import facebook from '../../assets/facebook.png'
import twiter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] py-14'>
            <div className="max-w-11/12 mx-auto">
                    <img src={logo} alt="" className='w-50 mx-auto' />
                    <p style={{color:'white'}} className='text-[#ffffff] text-center mt-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className="">
                        <h1 className='text-white font-bold mt-3 text-2xl text-center'>Social Links</h1>
                        <div className="flex justify-center gap-4 mt-4">
                            <span className='w-13 h-13 rounded-full bg-white flex justify-center items-center hover:scale-110 duration-1000 hover:bg-success cursor-pointer'>
                                <img src={facebook} alt="" />
                            </span>
                            <span className='w-13 h-13 rounded-full bg-white flex justify-center items-center hover:scale-110 duration-1000 hover:bg-success cursor-pointer'>
                                <img src={twiter} alt="" />
                            </span>
                            <span className='w-13 h-13 rounded-full bg-white flex justify-center items-center hover:scale-110 duration-1000 hover:bg-success cursor-pointer'>
                                <img src={instagram} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="border-t border-[#ffffff30] mt-8 pt-6 md:flex justify-between">
                        <p style={{color:'white'}} className='text-white text-center md:text-start'>© 2026 KeenKeeper. All rights reserved.</p>
                        <ul className='flex items-center gap-3 text-white justify-center mt-4 md:mt-0 md:justify-start'>
                            <li className='cursor-pointer hover:text-success duration-1000'>Privacy Policy</li>
                            <li className='cursor-pointer hover:text-success duration-1000'>Terms of Service</li>
                            <li className='cursor-pointer hover:text-success duration-1000'>Cookies</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Footer;