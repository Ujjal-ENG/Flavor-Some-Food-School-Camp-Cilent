/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

    return (
        <div>
            <SharedTitle title1="My  " title2="Classes" />
            <Helmet>
                <title>F|Food|School - My Classes</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 -ml-0 md:-ml-60 py-10">
                {allClasses &&
                    allClasses.map((data) => {
                        return (
                            <div key={data._id} className={`overflow-hidden ${data?.availableSeats === 0 ? 'bg-red-500' : 'bg-white'} rounded shadow`}>
                                <div className="p-5">
                                    <div className="relative">
                                        <a href="#" title="" className="block ">
                                            <img className="object-cover w-full h-72" src={data?.image} alt={data?.name} />
                                        </a>

                                        <div className="absolute top-4 right-6">
                                            <span
                                                className={`px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase ${data?.status === 'pending' && 'bg-warning'} ${
                                                    data?.status === 'denied' && 'bg-error'
                                                } ${data?.status === 'approved' && 'bg-green-500'} rounded-full`}>
                                                {data?.status}
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
                                            Total Enrolled Students: <span className="text-primary">{data?.enrolledStudents || 0}</span>
                                        </h5>
                                        {(data?.status === 'denied' || data?.status === 'approved') && (
                                            <h5 className="text-xl font-bold py-2 text-red-500">
                                                FeedBack: <span className="text-primary">{data?.feedback || 'Everything is Okay!!'} </span>
                                            </h5>
                                        )}
                                    </div>
                                </div>
                                <Link
                                    to="/dashboard/my-classes/update-classes"
                                    state={data}
                                    type="button"
                                    className="btn btn-primary font-bold btn-block my-auto"
                                    disabled={data?.status === 'approved' && true}>
                                    Update Class
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default MyClasses;
