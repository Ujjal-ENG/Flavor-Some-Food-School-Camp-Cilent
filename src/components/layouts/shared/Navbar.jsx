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
    console.log(userInfo);
    const navItems = (
        <div className="uppercase text-xl md:text-2xl flex md:flex-row flex-col items-center gap-5">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
            <NavLink to="/our-menu" className={({ isActive }) => (isActive ? 'active' : 'default')}>
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
