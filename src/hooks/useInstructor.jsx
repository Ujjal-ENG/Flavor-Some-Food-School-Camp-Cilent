/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', userInfo?.email],
        enabled: !!userInfo?.email && !!localStorage.getItem('token') && !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/instructor/${userInfo?.email}`);
            return data.admin;
        }
    });
    return [isAdmin, isInstructorLoading];
};

export default useInstructor;
