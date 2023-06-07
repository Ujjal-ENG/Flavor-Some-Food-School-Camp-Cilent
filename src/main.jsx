/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'sweetalert2/dist/sweetalert2.css';
import 'swiper/swiper-bundle.css';
import AuthProvider from './context/AuthProvider';
import './index.css';
import { router } from './routes/App.Routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </AuthProvider>
);
