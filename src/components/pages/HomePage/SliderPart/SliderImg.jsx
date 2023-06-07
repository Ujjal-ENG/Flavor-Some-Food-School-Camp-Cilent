/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import { motion } from 'framer-motion';
import React from 'react';

const SliderImg = ({ text, img, title }) => {
    return (
        <div>
            <section className="relative h-screen py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={img} alt={title} />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />

                <div className="absolute inset-0 block bg-black/60 md:hidden" />

                <motion.div
                    initial={{ y: 10000, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: 'spring',
                            damping: 25,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    // eslint-disable-next-line react/jsx-closing-bracket-location
                    className="relative top-48 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
                        <p className="mt-4 text-base text-gray-200">{text}</p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default SliderImg;
