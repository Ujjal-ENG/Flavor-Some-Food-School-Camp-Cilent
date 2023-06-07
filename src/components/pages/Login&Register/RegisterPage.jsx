/* eslint-disable react/button-has-type */
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
import axios from 'axios';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import animationData from '../../../assets/json/registration.json';
import app from '../../../config/firebase';
import useAuth from '../../../hooks/useAuth';

const auth = getAuth(app);

function Register() {
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordShow2, setPasswordShow2] = useState(false);
    const { createUser, singInGoogle } = useAuth();
    const [loading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm();
    // const password = watch('password');
    // const confirmPassword = watch('confirmPassword');
    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const user = await createUser(data.email, data.password);
            await updateProfile(user.user, {
                displayName: data.name,
                photoURL: data.photoUrl
            });

            if (user) {
                Swal.fire({
                    icon: 'success',
                    text: 'User Registered Successfully!!'
                });
                await axios.post('http://localhost:8080/users', { name: user?.user?.displayName, email: user?.user?.email });

                await signOut(auth);
                navigate('/login');
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

    const handleGooglSignIn = async () => {
        try {
            const { user } = await singInGoogle();
            console.log(user);
            if (user) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User Successfully Registerd and LoggedIn!!'
                });
                await axios.post('http://localhost:8080/users', { name: user?.displayName, email: user?.email });
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
        <div className="grid grid-cols-1 md:grid-cols-2 my-container gap-7 ">
            <div className="min-h-screen shadow-xl duration-200 transition-shadow ease-in-out hover:shadow-2xl flex justify-center items-center order-2 md:order-1">
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
                                    type={passwordShow ? 'text' : 'password'}
                                    placeholder="Your password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                                    })}
                                />
                                {!passwordShow ? (
                                    <AiFillEyeInvisible className="absolute text-3xl right-4 top-1 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)} />
                                ) : (
                                    <AiFillEye className="absolute text-3xl right-4 top-1 cursor-pointer" onClick={() => setPasswordShow(!passwordShow)} />
                                )}
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-600 mt-1">
                                    Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaLock className="h-6 w-6 text-gray-400" />
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirmPassword"
                                    type={passwordShow2 ? 'text' : 'password'}
                                    placeholder="Confirm your password"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => value === getValues('password') || 'Passwords do not match'
                                    })}
                                />
                                {!passwordShow2 ? (
                                    <AiFillEyeInvisible className="absolute text-3xl right-4 top-1 cursor-pointer" onClick={() => setPasswordShow2(!passwordShow2)} />
                                ) : (
                                    <AiFillEye className="absolute text-3xl right-4 top-1 cursor-pointer" onClick={() => setPasswordShow2(!passwordShow2)} />
                                )}
                            </div>
                            {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>}
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
                            <button className="btn btn-primary  w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                {loading ? <span className="loading loading-spinner" /> : 'Sign up'}
                            </button>
                        </div>
                    </form>
                    <div className="text-gray-500 text-center font-bold text-xl pb-2">
                        Already have an account?
                        <Link to="/login" className="text-blue-500 hover:text-blue-700">
                            Log In
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

                        <div className="w-full flex justify-center items-center my-7">
                            {loading ? (
                                <button className="btn btn-square">
                                    <span className="loading loading-spinner" />
                                </button>
                            ) : (
                                <GoogleButton onClick={handleGooglSignIn} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" order-1 md:order-2">
                <Lottie options={defaultOptions} height={700} width={400} />
            </div>
        </div>
    );
}

export default Register;
