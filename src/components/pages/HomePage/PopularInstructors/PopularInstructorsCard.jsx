/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const PopularInstructorsCard = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/popular-instructors').then(({ data }) => {
            setLoading(false);
            return setClasses(data.data);
        });
    }, []);

    return (
        <Marquee>
            {loading && (
                <div className="h-screen flex justify-center items-center">
                    <progress className="progress w-56" />
                </div>
            )}
            {classes &&
                classes.map((data) => (
                    <div key={data?._id} className="card w-96 bg-base-100 shadow-xl mx-20 mt-10 mb-20">
                        <figure>
                            <img src={data?.image} alt="Shoes" className="object-cover w-full h-96" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                {data?.name}
                                <div className="badge badge-secondary">Popular</div>
                            </h2>
                        </div>
                    </div>
                ))}
        </Marquee>
    );
};

export default PopularInstructorsCard;
