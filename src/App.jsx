/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import animationData from './assets/json/PreLoader.json';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100
        });
    }, []);

    const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

    useEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
        };

        if (!isLoading) {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <Lottie options={defaultOptions} className="w-full md:max-w-xl" />
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto">
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer />
        </>
    );
};

export default App;
