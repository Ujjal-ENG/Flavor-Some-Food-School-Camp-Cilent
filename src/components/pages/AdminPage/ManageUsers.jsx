/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MdEmojiPeople } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const ManageUsers = () => {
    const [isClicked, setIclicked] = useState(false);
    const [users, setUsers] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axiosSecure.get('/users-admin').then(({ data }) => {
            setIsLoading(false);
            return setUsers(data.data);
        });
    }, [isClicked]);

    const handeleInstrcutor = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'are your sure to make this Instructor?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make it!'
        });
        if (result.isConfirmed) {
            try {
                await axiosSecure.patch(`/users/admin/${id}`, { role: 'instructor' });
                Swal.fire('Updated!', 'The user has been updated to Instructor.', 'success');
                setIclicked(id);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                });
            }
        }
    };
    const handeleAdmin = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'are your sure to make this Admin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make it!'
        });
        if (result.isConfirmed) {
            try {
                await axiosSecure.patch(`/users/admin/${id}`, { role: 'admin' });
                Swal.fire('Updated!', 'The user has been updated to Admin.', 'success');
                setIclicked(id);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                });
            }
        }
    };
    return (
        <div>
            <SharedTitle title1="Manage " title2=" Users" />
            <Helmet>
                <title>F|Food|School - Manage Users</title>
            </Helmet>
            <div className="overflow-x-auto py-10">
                {loading && (
                    <div className="h-screen flex justify-center items-center">
                        <progress className="progress w-56" />
                    </div>
                )}
                <table className="table  table-zebra max-w-5xl mx-auto text-xl font-semibold text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
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
                                            onClick={() => handeleInstrcutor(el?._id)}
                                            disabled={isClicked === el?.id || el?.role === 'admin' || el?.role === 'instructor'}>
                                            <MdEmojiPeople size={30} />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className={`btn btn-circle btn-outline animate-pulse bg-success ${el?.role === 'admin' && 'animate-none'}`}
                                            onClick={() => handeleAdmin(el?._id)}
                                            disabled={isClicked === el?._id || el?.role === 'admin' || el?.role === 'instructor'}>
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
