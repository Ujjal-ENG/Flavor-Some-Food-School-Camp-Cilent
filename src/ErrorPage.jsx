/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from './assets/json/page-not-found-error-404.json';

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-10 lg:mb-0">
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <p className="text-xl font-bold tracking-wider text-center mb-6">Sorry, the page you are looking for does not exist.</p>
            <div className="flex justify-center">
                <Link to="/" className="btn btn-wide font-bold text-xl btn-warning">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
