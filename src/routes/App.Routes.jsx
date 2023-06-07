/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import DashboardLayout from '../components/layouts/Dashboard/DashboardLayout';
import AllClasses from '../components/pages/HomePage/Classses/AllClasses';
import Home from '../components/pages/HomePage/Home';
import Login from '../components/pages/Login&Register/Login';
import RegisterPage from '../components/pages/Login&Register/RegisterPage';
import MyEnrolledClasses from '../components/pages/StudentPage/MyEnrolledClasses';
import MySelectedClasses from '../components/pages/StudentPage/MySelectedClasses';
import PrivateRoutes from './PrivateRoute';
import StudentRoutes from './StudentRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-classes',
                element: <AllClasses />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard/my-selected-classes',
                element: (
                    <StudentRoutes>
                        <MySelectedClasses />
                    </StudentRoutes>
                )
            },
            {
                path: '/dashboard/my-enrolled-classes',
                element: (
                    <StudentRoutes>
                        <MyEnrolledClasses />
                    </StudentRoutes>
                )
            }
        ]
    }
]);
