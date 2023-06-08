/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Swal from 'sweetalert2';
import useAdmin from '../../../../hooks/useAdmin';
import useAuth from '../../../../hooks/useAuth';
import useInstructor from '../../../../hooks/useInstructor';

const ClassCard = ({ data }) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { userInfo } = useAuth();
    const handleSelectClasses = (id) => {
        if (!userInfo && !isInstructor) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login First for Selecting the Course!!!'
            });
        } else {
            console.log(id);
        }
    };
    return (
        <div>
            <div className={`overflow-hidden ${data?.availableSeats === 0 ? 'bg-red-500' : 'bg-white'} rounded shadow`}>
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block ">
                            <img className="object-cover w-96 h-72" src={data?.image} alt={data?.name} />
                        </a>

                        <div className="absolute top-4 right-6">
                            <span className="px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase bg-black rounded-full">${data?.price} </span>
                        </div>
                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-center">{data?.name}</h1>
                    <div>
                        <h5 className="text-2xl font-bold py-5">
                            Instructor: <span className="text-primary">{data?.instructor}</span>
                        </h5>
                        <h5 className="text-xl font-bold py-2">
                            AvailableSeats: <span className="text-primary">{data?.availableSeats}</span>
                        </h5>
                    </div>
                    {/* TODO: button will also disable when the role is isAdmin or isInstructors */}
                    <button
                        type="button"
                        className="btn btn-primary font-bold btn-block mt-5"
                        disabled={(data?.availableSeats === 0 || isAdmin || isInstructor) && true}
                        onClick={() => handleSelectClasses(data._id)}>
                        Select Class!!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
