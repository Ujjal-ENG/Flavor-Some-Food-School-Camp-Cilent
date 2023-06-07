import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';

const InstructorRoutes = ({ children }) => {
    const { userInfo, privateLoad } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const { pathname } = useLocation();

    if (userInfo && isInstructor) {
        return children;
    }
    if (privateLoad || isInstructorLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return <Navigate to="/login" state={{ from: pathname }} />;
};
export default InstructorRoutes;
