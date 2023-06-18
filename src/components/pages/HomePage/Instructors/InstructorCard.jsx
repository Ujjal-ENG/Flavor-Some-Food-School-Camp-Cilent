/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import React from 'react';

const InstructorCard = ({ data }) => {
    return (
        <motion.div
            initial={{ y: 1000, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: 'spring',
                    damping: 25,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}>
            <div className="overflow-hidden card1 bg-white rounded shadow duration-300 transition-all ease-in-out hover:shadow-2xl">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block ">
                            <img className="object-cover w-96 h-72" src={data?.image} alt={data?.name} />
                        </a>
                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-center">{data?.name}</h1>
                    <h1 className="mt-5 text-xl font-bold text-primary text-center">{data?.email}</h1>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructorCard;
