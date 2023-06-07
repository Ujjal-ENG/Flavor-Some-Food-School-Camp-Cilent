/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', userInfo?.email],
        enabled: !!userInfo?.email && !!localStorage.getItem('token') && !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/admin/${userInfo?.email}`);
            return data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
