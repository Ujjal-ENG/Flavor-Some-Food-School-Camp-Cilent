import React from 'react';
import useAuth from '../hooks/useAuth';

const StudentRoutes = ({ children }) => {
    const { userInfo, privateLoad } = useAuth();
    return <div>StudentRoutes</div>;
};

export default StudentRoutes;
