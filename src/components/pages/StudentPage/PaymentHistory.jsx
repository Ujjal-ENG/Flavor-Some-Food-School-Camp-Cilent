/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const PaymentHistory = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory = [], isLoading: loading } = useQuery({
        queryKey: ['payment-history'],
        enabled: !!userInfo?.email && !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payments?email=${userInfo?.email}`);
            return data.data;
        }
    });

    return (
        <div>
            <SharedTitle title1="My  " title2="  Payment History" />
            <Helmet>
                <title>F|Food|School - My Payment History</title>
            </Helmet>
            <div className="-ml-0 md:-ml-32">
                <div className="overflow-x-auto">
                    {loading && (
                        <div className="h-screen flex justify-center items-center">
                            <progress className="progress w-56" />
                        </div>
                    )}
                    <table className="table text-xl text-center">
                        {/* head */}
                        <thead className="text-lg">
                            <tr>
                                <th />
                                <th>Email</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Payment</th>
                                <th>TxnID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {paymentHistory.length === 0 ? (
                                <SharedTitle title1="Your Have not" title2="Payment any Classes yet!!" />
                            ) : (
                                paymentHistory.map((el, idx) => (
                                    <tr key={el._id}>
                                        <td>{++idx}</td>
                                        <td>{el?.email}</td>
                                        <td>{moment(el?.date).format('MMMM Do YYYY')}</td>
                                        <td>{moment(el?.date).format('h:mm:ss a')}</td>
                                        <td className="font-semibold text-red-500">${el?.price}</td>
                                        <td className="font-semibold text-green-600">{el?.transactionsId}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
