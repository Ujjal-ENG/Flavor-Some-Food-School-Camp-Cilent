/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import InstructorCard from './InstructorCard';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/all-instructors').then(({ data }) => setAllInstructors(data.data));
    }, []);

    return (
        <div className="pt-20">
            <SharedTitle title1="All  " title2="Instructors" />
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 py-10">{allInstructors && allInstructors.map((el) => <InstructorCard key={el._id} data={el} />)}</div>
        </div>
    );
};

export default AllInstructors;
