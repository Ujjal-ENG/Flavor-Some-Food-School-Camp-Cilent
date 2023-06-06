/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../../assets/json/registration.json';
import useAuth from '../../../hooks/useAuth';

function Register() {
    const { createUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [passwordShow, setPasswordShow] = useState(false);

    const onSubmit = (data) => {
        const { name, photoUrl, email, password } = data;
        createUser(name, photoUrl, email, password);
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
        <div className="grid grid-cols-1 md:grid-cols-2 my-container gap-7">
            <div className="min-h-screen shadow-xl  duration-200 transition-shadow ease-in-out  hover:shadow-2xl  flex justify-center items-center order-2 md:order-1">
                <div className="max-w-xl w-full mx-auto">
                    <div className="text-center font-bold text-gray-700 text-3xl mb-6">Sign up</div>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaUser className="h-6 w-6 text-gray-400" />
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    {...register('name', { required: true })}
                                />
                            </div>
                            {errors.name && <p className="text-sm text-red-600 mt-1">Name is required</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaEnvelope className="h-6 w-6 text-gray-400" />
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    {...register('email', { required: true })}
                                />
                            </div>
                            {errors.email && <p className="text-sm text-red-600 mt-1">Email is required</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaLock className="h-6 w-6 text-gray-400" />
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type={`${passwordShow ? 'text' : 'password'}`}
                                    placeholder="Your password"
                                    {...register('password', { required: true })}
                                />
                                {!passwordShow ? (
                                    <AiFillEyeInvisible className="absolute text-3xl right-4 top-1 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)} />
                                ) : (
                                    <AiFillEye className="absolute text-3xl right-4 top-1 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)} />
                                )}
                            </div>
                            {errors.password && <p className="text-sm text-red-600 mt-1">Password is required</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                                Photo URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaUser className="h-6 w-6 text-gray-400" />
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="photoUrl"
                                    type="text"
                                    placeholder="Link to your photo"
                                    {...register('photoUrl', { required: true })}
                                />
                            </div>
                            {errors.photoUrl && <p className="text-sm text-red-600 mt-1">Photo URL is required</p>}
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="btn btn-primary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="text-gray-500 text-center font-bold text-xl pb-2">
                        Already have an account?
                        <Link to="/login" className="text-blue-500 hover:text-blue-700">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Lottie options={defaultOptions} className="w-full md:max-w-3xl" />
            </div>
        </div>
    );
}

export default Register;
