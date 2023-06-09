/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { Link, NavLink } from 'react-router-dom';
import animationData from '../../../assets/json/logo.json';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';

const Navbar = () => {
    const { userInfo, logOutUser } = useAuth();
    const [isStudent] = useStudent();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    const navItems = (
        <div className="uppercase text-xl md:text-2xl flex md:flex-row flex-col items-center gap-5">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
            <NavLink to="/all-instructors" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Instructors
            </NavLink>
            <NavLink to="/all-classes" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Classes
            </NavLink>

            {userInfo && (
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="md:w-14 rounded-full ">
                            <img alt={userInfo?.displayName} src={userInfo?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 md:flex justify-center items-center hidden  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60 space-y-5">
                        <li>
                            {isStudent && (
                                <Link to="/dashboard/my-selected-classes" className="justify-between text-center btn btn-block">
                                    Dashboard
                                </Link>
                            )}
                            {isAdmin && (
                                <Link to="/dashboard/manage-classes" className="justify-between text-center btn btn-block">
                                    Dashboard
                                </Link>
                            )}
                            {isInstructor && (
                                <Link to="/dashboard/add-a-class" className="justify-between text-center btn btn-block">
                                    Dashboard
                                </Link>
                            )}
                        </li>

                        <li>
                            <button type="button" className="btn btn-primary btn-block text-black" onClick={() => logOutUser()}>
                                Logout
                            </button>
                        </li>
                    </ul>
                    <div className="md:hidden  flex-col flex justify-center items-center gap-3">
                        <Link to="/dashboard/user-home" className="justify-between text-center btn btn-block">
                            Dashboard
                        </Link>

                        <button type="button" className="btn btn-primary btn-block text-black" onClick={() => logOutUser()}>
                            Logout
                        </button>
                    </div>
                </div>
            )}
            {!userInfo && (
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    Login
                </NavLink>
            )}
            {/* {isStudent && (
                <Link to="/dashboard/my-selected-classes" type="button" className="btn relative">
                    <HiShoppingBag className="text-5xl" />
                    <div className="badge badge-primary absolute top-0 -right-3 font-bold text-xl">+{selectedClass.length || 0}</div>
                </Link>
            )} */}

            <div>
                <label htmlFor="themeToggle" className="swap swap-rotate">
                    <input type="checkbox" id="themeToggle" checked={theme === 'dark' ? 'light' : 'dark'} onChange={toggleTheme} className="hidden" />

                    {/* sun icon */}
                    <svg className={`swap-on fill-current w-10 h-10 ${theme === 'dark' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}

                    <svg className={`swap-on fill-current w-10 h-10 ${theme === 'light' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </div>
    );

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData
    };
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 88 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <div>
            <div
                className={`z-10 mb-10 navbar w-full px-10  duration-200 transition-all ${
                    isScrolled ? 'ease-out fixed bg-opacity-100 mx-auto bg-black' : 'fixed  bg-slate-500 py-3 ease-in bg-opacity-30'
                }`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-white text-2xl font-bold">Flavorsome</h1>
                        <div className="md:w-32 h-full">
                            <Lottie options={defaultOptions} />
                        </div>
                        <h1 className="text-white text-2xl font-bold">School</h1>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
