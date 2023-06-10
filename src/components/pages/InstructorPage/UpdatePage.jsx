/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AiFillFileAdd } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const UpdateClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const [loading, setIsLoading] = useState(false);
    const { userInfo } = useAuth();
    const { state } = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const price = parseInt(data.price, 10);
            const availableSeats = parseInt(data.availableSeats, 10);
            data.price = price;
            data.availableSeats = availableSeats;
            data.status = 'pending';
            data.image = state?.image;

            const response = await axiosSecure.patch(`/classes-instructor/${state?._id}`, data);

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    text: 'Class Updated Successfully!!'
                });
                navigate(-1);
                reset();
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };
    return (
        <div>
            <SharedTitle title1="Update A  " title2="Class" />
            <Helmet>
                <title>F|Food|School - Update A Class</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className=" bg-slate-200 max-w-3xl p-10  rounded-md w-full space-y-9">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Class Name*</span>
                    </label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-3xl"
                        required
                        defaultValue={state?.name}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Instructor Name*</span>
                        </label>
                        <input
                            {...register('instructor', { required: true })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-3xl"
                            required
                            readOnly
                            defaultValue={userInfo?.displayName}
                        />
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text font-bold text-black">Instructor Email*</span>
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full "
                            required
                            readOnly
                            defaultValue={userInfo?.email}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Available Seats*</span>
                        </label>
                        <input
                            {...register('availableSeats', { required: true })}
                            type="number"
                            placeholder="Type here"
                            min={1}
                            max={5}
                            className="input input-bordered input-primary w-full max-w-3xl"
                            required
                            defaultValue={state?.availableSeats}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Price*</span>
                        </label>
                        <input
                            {...register('price', { required: true })}
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-3xl"
                            required
                            defaultValue={state?.price}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Preview Image*</span>
                        </label>
                        <img src={state?.image} alt="preview" className="object-cover w-full h-32" />
                    </div>
                </div>

                {loading ? (
                    <button type="button" className="btn">
                        <span className="loading btn-primary loading-spinner" />
                        loading
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        Update Item
                        <AiFillFileAdd className="ml-3" size={24} />
                    </button>
                )}
            </form>
        </div>
    );
};

export default UpdateClass;
