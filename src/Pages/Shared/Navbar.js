import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_2.png'
import Drawer from './Drawer';

const Navbar = () => {
    const desgin = "text-[#666666] text-[14px] hover:bg-[#e79800] hover:text-white px-4 py-3 font-bold"
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className='flex'>
                    <img className='h-10 xl:h-14
                    ' src={Logo} alt="" />

                </div>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-2">
                    <li>
                        <Link className={desgin}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={desgin}>
                            About Us
                        </Link>

                    </li>
                    <li  >
                        <Link className={desgin}>
                            Event
                        </Link>

                    </li>
                    <li  >
                        <Link className={desgin}>
                            Blog
                        </Link>

                    </li>
                    <li  >
                        <Link className={desgin}>
                            Course
                        </Link>
                    </li>
                    <li  >
                        <Link className={desgin}>
                            Teacher
                        </Link>
                    </li>
                    <li  >
                        <Link className={desgin}>
                            Gallery
                        </Link>
                    </li>
                    <li  >
                        <Link className={desgin}>
                            Contact us
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <Link className='text-white'>
                        <button className="btn btn-outline btn-info text-white">Strudent Login</button>

                    </Link>
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className={desgin}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={desgin}>
                                About Us
                            </Link>

                        </li>
                        <li  >
                            <Link className={desgin}>
                                Event
                            </Link>

                        </li>
                        <li  >
                            <Link className={desgin}>
                                Blog
                            </Link>

                        </li>
                        <li  >
                            <Link className={desgin}>
                                Course
                            </Link>
                        </li>
                        <li  >
                            <Link className={desgin}>
                                Teacher
                            </Link>
                        </li>
                        <li  >
                            <Link className={desgin}>
                                Gallery
                            </Link>
                        </li>
                        <li  >
                            <Link className={desgin}>
                                Contact us
                            </Link>
                        </li>
                        <Link className='text-white'>
                            <button className="btn btn-outline btn-info text-white">Strudent Login</button>

                        </Link>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default Navbar;
{/* <Link>
Parent
<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
</Link> */}