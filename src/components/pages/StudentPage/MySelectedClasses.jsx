/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const MySelectedClasses = () => {
    const [loading, setIsLoading] = useState(false);
    // const [selectedClass, isLoading, refetch] = useSelectedClasses();
    const [axiosSecure] = useAxiosSecure();
    const { userInfo } = useAuth();
    const {
        data: selectedClass = [],
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['selected-classes'],
        enabled: !!userInfo?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/selected-classes/${userInfo?.email}`);
            return data.data;
        }
    });
    const handleDeleteClasses = async (id) => {
        setIsLoading(true);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/selected-classes/${id}`);
                if (data) {
                    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                    setIsLoading(false);
                    refetch();
                }
            }
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            });
        }
    };

    return (
        <div>
            <SharedTitle title1="My  " title2="Selected Classes" />
            <Helmet>
                <title>F|Food|School - My Selected Classes</title>
            </Helmet>
            {isLoading && (
                <div className="h-screen flex justify-center items-center">
                    <progress className="progress w-56" />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 py-10">
                {selectedClass.length <= 0 ? (
                    <SharedTitle title1="Your Have not" title2="Selected any Classes!!" />
                ) : (
                    selectedClass.map((data) => (
                        <div key={data._id} className={`overflow-hidden ${data?.availableSeats === 0 ? 'bg-red-500' : 'bg-white'} rounded shadow`}>
                            <div className="p-5">
                                <div className="relative">
                                    <a href="#" title="" className="block ">
                                        <img className="object-cover w-96 h-72" src={data?.image} alt={data?.name} />
                                    </a>

                                    <div className="absolute top-4 right-6">
                                        <span className="px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase bg-black rounded-full">${data?.price} </span>
                                    </div>
                                </div>

                                <h1 className="mt-5 text-3xl font-bold text-center">
                                    ClassName: <span className="text-primary">{data?.name}</span>
                                </h1>
                                <div>
                                    <h5 className="text-2xl font-bold py-5">
                                        Instructor: <span className="text-primary">{data?.instructor}</span>
                                    </h5>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    {loading ? (
                                        <button className="btn btn-square">
                                            <span className="loading loading-spinner" />
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-error font-bold  mt-5" onClick={() => handleDeleteClasses(data._id)}>
                                            Delete
                                        </button>
                                    )}
                                    <Link to="/dashboard/my-selected-classes/payment-details" state={data} type="button" className="btn btn-primary font-bold  mt-5">
                                        Payment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MySelectedClasses;
