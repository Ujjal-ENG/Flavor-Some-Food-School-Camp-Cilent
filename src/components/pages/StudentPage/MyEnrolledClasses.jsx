/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const MyEnrolledClasses = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolled-classes'],
        enabled: !!userInfo?.email || !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/enrolled-classes/${userInfo?.email}`);
            return data.data;
        }
    });

    return (
        <div>
            <SharedTitle title1="My" title2="Enrolled Classes" />
            <Helmet>
                <title>F|Food|School - My Enrolled Classes</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 py-10">
                {enrolledClass.length <= 0 ? (
                    <SharedTitle title1="Your Have not" title2="Enrolled or Payment any Classes!!" />
                ) : (
                    enrolledClass.map((data) => (
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
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyEnrolledClasses;
