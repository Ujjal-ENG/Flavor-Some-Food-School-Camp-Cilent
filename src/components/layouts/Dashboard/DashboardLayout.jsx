/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { MdContactPhone } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                        <h1 className="text-4xl uppercase font-bold text-center py-2">Flavor | Flow</h1>
                        <h4 className="text-2xl uppercase tracking-widest font-bold text-center pt-2 pb-14">Restaurant</h4>

                        <div className="divider text-white" />
                        <li>
                            <NavLink to="/" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/our-menu" className="text-xl font-semibold uppercase hover:text-white">
                                <HiMenu />
                                Food Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order-food/salad" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillShopping />
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order-food/salad" className="text-xl font-semibold uppercase hover:text-white">
                                <MdContactPhone />
                                Contact
                            </NavLink>
                        </li>
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
