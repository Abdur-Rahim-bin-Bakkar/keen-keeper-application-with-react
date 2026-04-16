import React from 'react';
import { ImStatsBars } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Links = () => {
  const activeClass = ({ isActive }) =>
        isActive ? 'btn bg-[#244D3F] text-white font-bold' : 'flex items-center';

    return (
        <>
            {/* Home */}
            <NavLink to="/" end className={activeClass}>
                <IoHomeOutline /> Home
            </NavLink>

            {/* Timeline */}
            <NavLink to="/timeline" className={activeClass}>
                <RiTimeLine /> TimeLine
            </NavLink>

            {/* Stats */}
            <NavLink to="/stats" className={activeClass}>
                <ImStatsBars /> Stats
            </NavLink>
        </>
    );
};

export default Links;