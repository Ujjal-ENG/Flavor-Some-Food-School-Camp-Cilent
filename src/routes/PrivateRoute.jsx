/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import animationData from '../assets/json/loading.json';
import { AuthContext } from '../context/AuthProvider';

function PrivateRoute({ children }) {
    const { userInfo, privateLoad } = useContext(AuthContext);
    const location = useLocation();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    if (location.pathname.includes('details') && !userInfo) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details!'
        });
    }

    if (privateLoad) {
        return (
            <div className="h-screen flex justify-center items-center">
                {/* <progress className="progress w-56" /> */}
                <Lottie options={defaultOptions} height={700} width={600} />
            </div>
        );
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
