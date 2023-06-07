/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import SliderImg from './SliderImg';

export default function Slider() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
                delay: 5500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
                <section className="relative h-screen py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                    <div className="absolute inset-0">
                        <img
                            className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
                            alt=""
                        />
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
                        className="relative top-48 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                            <p className="mt-4 text-base text-gray-200">
                                Get ready to embark on a culinary journey that will awaken your senses and ignite your passion for food. Our menu is a carefully curated selection of culinary
                                masterpieces, each one showcasing the skill and creativity of our talented chefs. Join us as we take you on a gastronomic adventure like no other.
                            </p>

                            <form action="#" method="POST" className="mt-8 lg:mt-12">
                                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                                    <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                                        <div className="relative text-gray-400 focus-within:text-gray-600">
                                            <label htmlFor="email" className="sr-only" />
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter email address"
                                                className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                                        Get instant access
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <SliderImg
                    img="https://images.pexels.com/photos/8523491/pexels-photo-8523491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Join us for a Fun-Filled Food Adventure"
                    text={
                        "Embark on a thrilling food adventure with us! Our restaurant offers a unique dining experience filled with fun and excitement. From interactive cooking workshops to themed dining events, there's always something exciting happening here. Join us and discover a world of culinary delights that will leave you craving for more."
                    }
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderImg
                    img="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    title="Experience Delicious Delights and Culinary Creativity"
                    text="Get ready to experience a symphony of flavors and culinary creativity at our restaurant. Our talented chefs combine the finest ingredients to create mouthwatering dishes that are as visually stunning as they are delicious. Come and immerse yourself in a culinary experience that will awaken your senses and leave you craving for more."
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderImg
                    img="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    title="Indulge in Fresh and Tasty Summer Treats"
                    text="Beat the summer heat with our refreshing and delicious treats. From fruity sorbets to creamy gelato, our summer menu is filled with irresistible desserts that will cool you down and satisfy your sweet tooth. Indulge in the taste of summer and treat yourself to a delightful culinary experience."
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderImg
                    img="https://images.unsplash.com/photo-1520095972714-909e91b038e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    title="FlavorsCelebrate Summer with Irresistible Food and Flavors"
                    text="It's time to celebrate the vibrant spirit of summer with our irresistible food and flavors. From juicy grilled meats to fresh seafood and crisp salads, our menu is designed to capture the essence of the season. Join us in savoring the tastes of summer and creating unforgettable memories filled with laughter, good company, and delectable cuisine."
                />
            </SwiperSlide>
        </Swiper>
    );
}
