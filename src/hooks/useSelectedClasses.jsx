/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClass = [], refetch } = useQuery({
        queryKey: ['selected-classes'],
        enabled: !!userInfo?.email && !!localStorage.getItem('token') && !privateLoad,
        queryFn: async () => {
            try {
                const { data } = await axiosSecure.get(`/selected-classes/${userInfo?.email}`);
                if (data.success) return data.data;
            } catch (error) {
                console.log(error);
            }
        }
    });
    return [selectedClass, refetch];
};

export default useSelectedClasses;
