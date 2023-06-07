/* eslint-disable comma-dangle */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useStudent = () => {
    const { userInfo, privateLoad } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', userInfo?.email],
        enabled: !!userInfo?.email && !!localStorage.getItem('token') && !privateLoad,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/student/${userInfo?.email}`);
            return data.student;
        }
    });
    return [isStudent, isStudentLoading];
};

export default useStudent;
