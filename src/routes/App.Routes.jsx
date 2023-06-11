/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import DashboardLayout from '../components/layouts/Dashboard/DashboardLayout';
import ManageClasses from '../components/pages/AdminPage/ManageClasses';
import ManageUsers from '../components/pages/AdminPage/ManageUsers';
import AllClasses from '../components/pages/HomePage/Classses/AllClasses';
import Home from '../components/pages/HomePage/Home';
import AllInstructors from '../components/pages/HomePage/Instructors/AllInstructors';
import AddaClass from '../components/pages/InstructorPage/AddaClass';
import MyClasses from '../components/pages/InstructorPage/MyClasses';
import UpdateClass from '../components/pages/InstructorPage/UpdatePage';
import Login from '../components/pages/Login&Register/Login';
import RegisterPage from '../components/pages/Login&Register/RegisterPage';
import MyEnrolledClasses from '../components/pages/StudentPage/MyEnrolledClasses';
import MySelectedClasses from '../components/pages/StudentPage/MySelectedClasses';
import PaymentDetails from '../components/pages/StudentPage/PaymentDetails';
import PaymentHistory from '../components/pages/StudentPage/PaymentHistory';
import AdminRoutes from './AdminRoutes';
import InstructorRoutes from './InstructorRoutes';
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
                path: '/all-instructors',
                element: <AllInstructors />
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
            },
            {
                path: '/dashboard/my-payment-history',
                element: (
                    <StudentRoutes>
                        <PaymentHistory />
                    </StudentRoutes>
                )
            },
            {
                path: '/dashboard/my-selected-classes/payment-details',
                element: (
                    <StudentRoutes>
                        <PaymentDetails />
                    </StudentRoutes>
                )
            },
            {
                path: '/dashboard/manage-classes',
                element: (
                    <AdminRoutes>
                        <ManageClasses />
                    </AdminRoutes>
                )
            },
            {
                path: '/dashboard/manage-users',
                element: (
                    <AdminRoutes>
                        <ManageUsers />
                    </AdminRoutes>
                )
            },
            {
                path: '/dashboard/add-a-class',
                element: (
                    <InstructorRoutes>
                        <AddaClass />
                    </InstructorRoutes>
                )
            },
            {
                path: '/dashboard/my-classes',
                element: (
                    <InstructorRoutes>
                        <MyClasses />
                    </InstructorRoutes>
                )
            },
            {
                path: '/dashboard/my-classes/update-classes',
                element: (
                    <InstructorRoutes>
                        <UpdateClass />
                    </InstructorRoutes>
                )
            }
        ]
    }
]);
