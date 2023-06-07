/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { userInfo, privateLoad } = useAuth();
    const { data: allClasses = [] } = useQuery({
        queryKey: ['all-classes'],
        enabled: !!userInfo?.email && !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/classes/${userInfo?.email}`);
            return data.data;
        }
    });
    console.log(allClasses);
    return (
        <div>
            <SharedTitle title1="My" title2="Classes" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 -ml-0 md:-ml-60">
                {allClasses &&
                    allClasses.map((data) => {
                        return (
                            <div className={`overflow-hidden ${data?.availableSeats === 0 ? 'bg-red-500' : 'bg-white'} rounded shadow`}>
                                <div className="p-5">
                                    <div className="relative">
                                        <a href="#" title="" className="block ">
                                            <img className="object-cover w-96 h-72" src={data?.image} alt={data?.name} />
                                        </a>

                                        <div className="absolute top-4 right-6">
                                            <span
                                                className={`px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase ${data?.status === 'pending' && 'bg-warning'} ${
                                                    data?.status === 'denied' && 'bg-error'
                                                } ${data?.status === 'approved' && 'bg-green-500'} rounded-full`}>
                                                ${data?.status}
                                            </span>
                                        </div>
                                    </div>

                                    <h1 className="mt-5 text-3xl font-bold text-center">{data?.name}</h1>
                                    <div>
                                        <h5 className="text-2xl font-bold py-5">
                                            Instructor: <span className="text-primary">{data?.instructor}</span>
                                        </h5>
                                        <h5 className="text-xl font-bold py-2">
                                            AvailableSeats: <span className="text-primary">{data?.availableSeats}</span>
                                        </h5>
                                        <h5 className="text-xl font-bold py-2">
                                            Total Enrolled Students: <span className="text-primary">0</span>
                                        </h5>
                                        {data?.status === 'denied' && (
                                            <h5 className="text-xl font-bold py-2 text-red-500">
                                                FeedBack: <span className="text-primary">{data?.feedback}</span>
                                            </h5>
                                        )}
                                    </div>

                                    <button type="button" className="btn btn-primary font-bold btn-block mt-5" disabled={data?.status === 'approved' && true}>
                                        Update Class
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default MyClasses;
