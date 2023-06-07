import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
