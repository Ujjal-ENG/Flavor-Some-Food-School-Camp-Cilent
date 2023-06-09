/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassCard from './ClassCard';

const AllClasses = () => {
    const [classes, setAllClasses] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/classes').then(({ data }) => {
            setLoading(false);
            return setAllClasses(data.data);
        });
    }, []);

    return (
        <div className="pt-24">
            <Helmet>
                <title>F|Food|School - All Classes</title>
            </Helmet>
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold pt-5 leading-tight text-black sm:text-4xl lg:text-5xl">All Classes from the all Instructors</h2>
                <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-gray-600 lg:mx-0">
                    Discover a wide range of classes offered by various instructors. Whether you're looking to learn something new or enhance your skills, we have the perfect classes for you. Explore
                    our diverse selection and embark on an exciting learning journey today!
                </p>
            </div>
            {loading && (
                <div className="h-screen flex justify-center items-center">
                    <progress className="progress w-56" />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center py-10 gap-10">{classes && classes.map((classItem) => <ClassCard key={classItem._id} data={classItem} />)}</div>
        </div>
    );
};

export default AllClasses;
