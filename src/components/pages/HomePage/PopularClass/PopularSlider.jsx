/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

export default function PopularSlider({ classes }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                '@0.75': {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                '@1.00': {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                '@1.50': {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            }}
            modules={[Pagination]}
            className="mySwiper">
            {classes &&
                classes.map((data) => (
                    <SwiperSlide key={data._id}>
                        <div className="overflow-hidden bg-white rounded shadow-2xl">
                            <div className="p-5">
                                <div className="relative">
                                    <img className="object-cover w-96  h-40" src={data?.image} alt={data?.name} />
                                    <div className="absolute top-4 right-6">
                                        <span className="px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase bg-purple-500 rounded-full">Popular</span>
                                    </div>
                                </div>

                                <h1 className="mt-5 text-3xl font-bold text-center">{data?.name}</h1>
                                <div>
                                    <h5 className="text-2xl font-bold py-5">
                                        Instructor: <span className="text-primary">{data?.instructor}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}
