/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BiSelectMultiple } from 'react-icons/bi';
import { HiClipboardCheck } from 'react-icons/hi';
import { MdManageAccounts, MdOutlineManageAccounts } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Typed from 'react-typed';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const DashboardLayout = () => {
    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isStudent] = useStudent();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { userInfo } = useAuth();

    return (
        <>
            <div className="">
                <Navbar />
            </div>

            <div className="grid grid-cols-3 pt-24">
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
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-4">
                            {/* Sidebar content here */}
                            {isStudent && (
                                <>
                                    <Typed
                                        className="text-primary text-center"
                                        strings={['Student Dashboard']}
                                        typeSpeed={80}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            lineHeight: '70px',
                                            marginBottom: '10px'
                                        }}
                                    />
                                    <h1 className="text-center font-bold text-2xl">Hello</h1>
                                    <Typed
                                        className="text-[#4ADE80] text-center"
                                        strings={[userInfo?.displayName]}
                                        typeSpeed={80}
                                        backSpeed={90}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            lineHeight: '70px',
                                            marginBottom: '10px'
                                        }}
                                        loop
                                    />
                                    <li>
                                        <Link to="/dashboard/my-selected-classes" className="text-xl font-bold">
                                            <BiSelectMultiple size={24} />
                                            My Selected Classes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/my-enrolled-classes" className="text-xl font-bold">
                                            <HiClipboardCheck size={24} />
                                            My Enrolled Classes
                                        </Link>
                                    </li>
                                </>
                            )}
                            {isAdmin && (
                                <>
                                    <Typed
                                        className="text-primary text-center"
                                        strings={['Admin Dashboard']}
                                        typeSpeed={80}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            lineHeight: '70px',
                                            marginBottom: '10px'
                                        }}
                                    />
                                    <h1 className="text-center font-bold  text-2xl">Hello</h1>
                                    <Typed
                                        className="text-[#4ADE80] text-center"
                                        strings={[userInfo?.displayName]}
                                        typeSpeed={80}
                                        backSpeed={90}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            lineHeight: '70px',
                                            marginBottom: '10px'
                                        }}
                                        loop
                                    />
                                    <li>
                                        <Link to="/dashboard/manage-classes" className="text-xl font-bold">
                                            <MdOutlineManageAccounts size={24} />
                                            Manage Classes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-users" className="text-xl font-bold">
                                            <MdManageAccounts size={24} />
                                            Manage Users
                                        </Link>
                                    </li>
                                </>
                            )}
                            {isInstructor && (
                                <>
                                    <Typed
                                        className="text-primary text-center"
                                        strings={['Instructor Dashboard']}
                                        typeSpeed={80}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            lineHeight: '70px',
                                            marginBottom: '10px'
                                        }}
                                    />
                                    <h1 className="text-center font-bold  text-2xl">Hello</h1>
                                    <Typed
                                        className="text-[#4ADE80] text-center"
                                        strings={[userInfo?.displayName]}
                                        typeSpeed={80}
                                        backSpeed={90}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            lineHeight: '70px',
                                            marginBottom: '10px'
                                        }}
                                        loop
                                    />

                                    <li>
                                        <Link to="/dashboard/add-a-class" className="text-xl font-bold">
                                            <BiSelectMultiple size={24} />
                                            Add a Class
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/my-classes" className="text-xl font-bold">
                                            <HiClipboardCheck size={24} />
                                            My Class
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
            <Footer />
        </>
    );
};

export default DashboardLayout;
