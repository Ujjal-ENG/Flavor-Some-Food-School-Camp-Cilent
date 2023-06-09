/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();
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
    return [selectedClass, isLoading, refetch];
};

export default useSelectedClasses;
