/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import InstructorCard from './InstructorCard';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://flavorsome-food-school-server.vercel.app/all-instructors').then(({ data }) => {
            setLoading(false);
            return setAllInstructors(data.data);
        });
    }, []);

    return (
        <div className="pt-20">
            <SharedTitle title1="All  " title2="Instructors" />
            <Helmet>
                <title>F|Food|School - All Instructors</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 py-10">
                {loading && (
                    <div className="h-screen flex justify-center items-center">
                        <progress className="progress w-56" />
                    </div>
                )}
                {allInstructors && allInstructors.map((el) => <InstructorCard key={el._id} data={el} />)}
            </div>
        </div>
    );
};

export default AllInstructors;
