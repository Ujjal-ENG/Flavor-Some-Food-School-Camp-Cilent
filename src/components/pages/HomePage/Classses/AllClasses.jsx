/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const AllClasses = () => {
    const [classes, setAllClasses] = useState([]);
    useEffect(() => {
        axios.get('popularClass.json').then(({ data }) => {
            return setAllClasses(data.classes);
        });
    }, []);
    return (
        <div className="pt-24">
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center py-10 gap-10">{classes && classes.map((classItem) => <ClassCard key={classItem.id} data={classItem} />)}</div>
        </div>
    );
};

export default AllClasses;
