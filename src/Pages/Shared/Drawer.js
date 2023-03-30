import React from 'react';
import Navbar from './Navbar';
import logo from '../../assets/logo_2.png';
import { Outlet } from 'react-router-dom';

const Drawer = () => {
    const desgin = "text-[#666666] text-[14px] hover:bg-[#e79800] hover:text-white px-4 py-3 font-bold"
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <img className='h-18 px-5 py-5' src={logo} alt="" />
                    <li>Search Course</li>
                    <input type="text" placeholder="Keyword...." className="input w-full max-w-xs" />
                    <div className="divider"></div>
                    <h1>Archives</h1>
                    <li><a>january 2023</a></li>
                    <li><a>February 2023</a></li>
                    <li><a>March 2023</a></li>
                    <li><a>April 2023</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Drawer;