/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import useStudent from '../../../hooks/useStudent';

const DashboardLayout = () => {
    const [isStudent] = useStudent();
    console.log(isStudent);
    return (
        <div className="grid grid-cols-3">
            <div className="drawer col-span-1  drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu p-4 w-80 bg-primary text-base-content">
                        <h1 className="text-4xl uppercase font-bold text-center py-2">Flavorsome | Food</h1>
                        <h4 className="text-2xl uppercase tracking-widest font-bold text-center pt-2 pb-14">School</h4>

                        <div className="divider text-white" />
                        {isStudent && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/my-selected-classes" className="text-xl font-semibold uppercase hover:text-white">
                                        <AiFillHome />
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="text-xl font-semibold uppercase hover:text-white">
                                        <AiFillHome />
                                        Home
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <div className="col-span-2">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
