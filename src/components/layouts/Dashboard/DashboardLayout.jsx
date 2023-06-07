/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';

const DashboardLayout = () => {
    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isStudent] = useStudent();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="grid grid-cols-3">
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col md:hidden items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {isStudent && (
                            <>
                                {' '}
                                <li>
                                    <Link to="/dashboard/my-selected-classes" className="text-xl font-bold">
                                        My Selected Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/my-enrolled-classes" className="text-xl font-bold">
                                        My Selected Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-xl font-bold">
                                        Home
                                    </Link>
                                </li>
                            </>
                        )}
                        {isAdmin && (
                            <>
                                {' '}
                                <li>
                                    <Link to="/dashboard/manage-classes" className="text-xl font-bold">
                                        Manage Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manage-users" className="text-xl font-bold">
                                        Manage Users
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-xl font-bold">
                                        Home
                                    </Link>
                                </li>
                            </>
                        )}
                        {isInstructor && (
                            <>
                                {' '}
                                <li>
                                    <Link to="/dashboard/add-a-class" className="text-xl font-bold">
                                        Add a Class
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/my-classes" className="text-xl font-bold">
                                        My Class
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-xl font-bold">
                                        Home
                                    </Link>
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
