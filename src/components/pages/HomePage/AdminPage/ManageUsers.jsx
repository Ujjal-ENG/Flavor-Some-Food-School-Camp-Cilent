/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';

import { MdEmojiPeople } from 'react-icons/md';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SharedTitle from '../../../layouts/shared/SharedTitle';

const ManageUsers = () => {
    const [isClicked, setIclicked] = useState(false);
    const [users, setUsers] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/users').then(({ data }) => setUsers(data.data));
    }, []);
    console.log(users);
    const handeleInstrcutor = (id) => {
        setIclicked((ps) => !ps);
    };
    const handeleAdmin = (id) => {
        setIclicked((ps) => !ps);
    };
    return (
        <div>
            <SharedTitle title1="Mange" title2="Users" />
            <div className="overflow-x-auto">
                <table className="table z-10 table-zebra max-w-5xl mx-auto text-xl font-semibold text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role of the User</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users &&
                            users.map((el) => (
                                <tr key={el?._id}>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className={`btn btn-circle btn-outline animate-pulse bg-info ${el?.role === 'admin' && 'animate-none'}`}
                                            onClick={handeleInstrcutor}
                                            disabled={isClicked || el?.role === 'admin'}>
                                            <MdEmojiPeople size={30} />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className={`btn btn-circle btn-outline animate-pulse bg-success ${el?.role === 'admin' && 'animate-none'}`}
                                            onClick={handeleAdmin}
                                            disabled={isClicked || el?.role === 'admin'}>
                                            <RiAdminFill size={30} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
