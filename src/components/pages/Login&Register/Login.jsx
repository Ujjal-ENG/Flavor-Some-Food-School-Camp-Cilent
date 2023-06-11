/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import animationData from '../../../assets/json/login.json';
import useAuth from '../../../hooks/useAuth';

function Login() {
    const { signInUser, singInGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(false);
    const from = location?.state?.from?.pathname || '/';

    const { register, handleSubmit } = useForm();
    const [passwordShow, setPasswordShow] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const { email, password } = data;
            await signInUser(email, password);
            Swal.fire({
                icon: 'success',
                text: 'User LoggedIn Successfully!!'
            });
            navigate(from);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            });
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            const { user } = await singInGoogle();
            Swal.fire({
                icon: 'success',
                text: 'User LoggedIn Successfully!!'
            });
            if (user) {
                await axios.post('http://localhost:8080/users', { name: user?.displayName, email: user?.email, image: user?.user?.photoURL });
                navigate(from);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            });
        }
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-container ">
            <Helmet>
                <title>F|Food|School - Login</title>
            </Helmet>
            <div className="shadow-2xl rounded-md flex flex-col justify-center py-12 sm:px-6 lg:px-8 order-2 md:order-1">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" data-aos="fade-up">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full " data-aos="fade-right">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            {...register('email', { required: true })}
                                            className="block w-full pl-10 py-5 sm:text-sm border-gray-400  rounded-md input input-bordered input-primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={passwordShow ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            {...register('password', { required: true })}
                                            className="input input-bordered input-primary   block w-full pl-10 py-5 sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {!passwordShow ? (
                                            <AiFillEyeInvisible className="absolute text-3xl right-4 top-3 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)} />
                                        ) : (
                                            <AiFillEye className="absolute text-3xl right-4 top-3 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-medium text-yellow-600 hover:text-yellow-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn btn-primary">
                                    {loading ? <span className="loading loading-spinner" /> : 'Login'}
                                </button>
                            </div>
                        </form>
                        <div className="text-sm pt-3">
                            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-400">
                                Are you New? Register Please..
                            </Link>
                        </div>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="w-full flex justify-center items-center mt-7">
                                {loading ? (
                                    <button className="btn btn-square">
                                        <span className="loading loading-spinner" />
                                    </button>
                                ) : (
                                    <GoogleButton onClick={handleGoogleSignIn} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
                <Lottie options={defaultOptions} className="w-full md:max-w-3xl" />
            </div>
        </div>
    );
}

export default Login;
