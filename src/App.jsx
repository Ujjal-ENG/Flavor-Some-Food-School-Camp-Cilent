import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
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
