/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import AuthProvider from './context/AuthProvider';
import './index.css';
import { router } from './routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);
