/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';
import Modal from './Modal';

const ManageClasses = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [idFeedBack, setIdFeedBack] = useState(null);
    const [statusFilter, setStatusFilter] = useState('');
    const {
        data: classes = [],
        refetch,
        isLoading: loading
    } = useQuery({
        queryKey: ['classes'],
        enabled: !!userInfo?.email || !privateLoad || statusFilter,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-classes-admin?status=${statusFilter}`);
            return data.data;
        },
        retry: 3
    });

    const handleApprove = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will change the status Pending to Approve.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
            });
            if (result.isConfirmed) {
                const status = 'approved';
                await axiosSecure.patch(`/classes/${id}`, { status });
                Swal.fire('Update!', 'Your changed status has been sent.', 'success');

                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeny = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will to change the status Pending to Deny.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
            });
            if (result.isConfirmed) {
                const status = 'denied';
                await axiosSecure.patch(`/classes/${id}`, { status });
                Swal.fire('Update!', 'Your changed status has been sent.', 'success');

                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleFeedback = (id) => {
        // console.log(id);
        setIdFeedBack(id);
    };
    useEffect(() => {
        if (statusFilter) {
            // Enable the query when statusFilter is set
            refetch();
        }
    }, [statusFilter]);

    const handleChange = (e) => {
        setStatusFilter(e.target.value);
    };

    return (
        <div>
            <SharedTitle title1="Manage " title2=" Classes" />
            <Helmet>
                <title>F|Food|School - Manage Classes</title>
            </Helmet>
            <select id="statusFilter" value={statusFilter} onChange={handleChange} className="select select-primary w-full max-w-xs">
                <option disabled>Filter the Classes by Using Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="denied">Denied</option>
            </select>
            {loading && (
                <div className="h-screen flex justify-center items-center">
                    <progress className="progress w-56" />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12 py-10 ">
                {classes.length === 0 ? (
                    <h1 className="text-2xl font-bold tracking-wider py-10 text-red-500">No Data Available for this status!!</h1>
                ) : (
                    classes.map((data) => {
                        return (
                            <div className={`overflow-hidden ${data?.availableSeats === 0 ? 'bg-red-500' : 'bg-white'} rounded shadow-xl`}>
                                <div className="p-5">
                                    <div className="relative">
                                        <a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={data._id} href="#" title="" className="block">
                                            <img className="object-cover max-w-2xl w-full h-72" src={data?.image} alt={data?.name} />
                                        </a>

                                        <div className="absolute top-4 right-6">
                                            <span className="px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase bg-black rounded-full">${data?.price} </span>
                                        </div>
                                    </div>

                                    <h1 className="mt-5 text-3xl font-bold text-center">{data?.name}</h1>
                                    <div>
                                        <h5 className="text-2xl font-bold py-5">
                                            InstructorName: <span className="text-primary">{data?.instructor}</span>
                                        </h5>
                                        <h5 className="text-2xl font-bold py-5">
                                            InstructorEmail: <span className="text-primary">{data?.email}</span>
                                        </h5>
                                        <h6 className="text-xl font-bold py-2">
                                            AvailableSeats: <span className="text-primary">{data?.availableSeats}</span>
                                        </h6>
                                        <h6 className="text-xl font-bold py-2">
                                            Status: <span className={`text-primary ${data?.status === 'pending' && 'text-warning'} ${data?.status === 'denied' && 'text-error'}`}>{data?.status}</span>
                                        </h6>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto ">
                                        <button
                                            type="button"
                                            className="btn btn-primary font-bold  mt-5"
                                            disabled={data?.availableSeats === 0 || data?.status === 'denied' || (data.status === 'approved' && true)}
                                            onClick={() => handleApprove(data?._id)}>
                                            Approve
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-error font-bold  mt-5"
                                            disabled={data?.availableSeats === 0 || data?.status === 'denied' || (data.status === 'approved' && true)}
                                            onClick={() => handleDeny(data?._id)}>
                                            Deny
                                        </button>
                                        <label
                                            htmlFor="my_modal_7"
                                            type="button"
                                            className="btn btn-info font-bold  mt-5"
                                            onClick={() => {
                                                handleFeedback(data._id);
                                            }}
                                            disabled={data?.availableSeats === 0 || data.status === 'approved' || (data.status === 'pending' && true)}>
                                            FeedBack
                                        </label>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            <Modal id={idFeedBack} refetch={refetch} />
        </div>
    );
};

export default ManageClasses;
