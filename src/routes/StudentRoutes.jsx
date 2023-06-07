import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useStudent from '../hooks/useStudent';

const StudentRoutes = ({ children }) => {
    const { userInfo, privateLoad } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const { pathname } = useLocation();

    if (userInfo && isStudent) {
        return children;
    }
    if (privateLoad || isStudentLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return <Navigate to="/login" state={{ from: pathname }} />;
};
export default StudentRoutes;
