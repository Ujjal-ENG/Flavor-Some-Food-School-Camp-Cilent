/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const PopularInstructorsCard = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get('https://flavorsome-food-school-server.vercel.app/popular-instructors').then(({ data }) => setClasses(data.data));
    }, []);

    return (
        <Marquee>
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
