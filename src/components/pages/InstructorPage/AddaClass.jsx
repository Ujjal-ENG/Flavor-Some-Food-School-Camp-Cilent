/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AiFillFileAdd } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const imgBBKEY = import.meta.env.VITE_IMGBB_SECRET_KEY;

const AddaClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const [loading, setIsLoading] = useState(false);
    const { userInfo } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const imgHoistingUrl = `https://api.imgbb.com/1/upload?key=${imgBBKEY}`;
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const fromData = new FormData();

            const price = parseInt(data.price, 10);
            const availableSeats = parseInt(data.availableSeats, 10);
            data.price = price;
            data.availableSeats = availableSeats;
            data.status = 'pending';

            fromData.append('image', data.image[0]);

            const res = await axios.post(imgHoistingUrl, fromData);
            console.log(res);
            if (res) {
                const imgURL = res.data.data.display_url;
                data.image = imgURL;
                const response = await axiosSecure.post('/classes', data);
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Classes added Successfully!!'
                    });
                    reset();
                    setIsLoading(false);
                }
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };
    return (
        <div>
            <SharedTitle title1="Add A  " title2="New Class" />
            <Helmet>
                <title>F|Food|School - Add A Class</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className=" bg-slate-200 max-w-3xl p-10  rounded-md w-full space-y-9">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Class Name*</span>
                    </label>
                    <input {...register('name', { required: true })} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-3xl" required />
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
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Price*</span>
                        </label>
                        <input {...register('price', { required: true })} type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-3xl" required />
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-bold text-black">Class Image*</span>
                    </label>
                    <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>

                {loading ? (
                    <button type="button" className="btn">
                        <span className="loading btn-primary loading-spinner" />
                        loading
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        Add Item
                        <AiFillFileAdd className="ml-3" size={24} />
                    </button>
                )}
            </form>
        </div>
    );
};

export default AddaClass;
