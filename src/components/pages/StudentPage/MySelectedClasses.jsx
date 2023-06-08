import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const MySelectedClasses = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClass = [] } = useQuery({
        queryKey: ['selected-classes'],
        enabled: !!userInfo?.email && !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/selected-classes/${userInfo?.email}`);
            return data.data;
        }
    });
    console.log(selectedClass);
    return (
        <div>
            <SharedTitle title1="My" title2="Selected Classes" />
        </div>
    );
};

export default MySelectedClasses;
