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
        </div>
    );
};

export default MyClasses;
