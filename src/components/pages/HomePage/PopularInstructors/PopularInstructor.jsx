import React from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import PopularInstructorsCard from './PopularInstructorsCard';

const PopularInstructor = () => {
    return (
        <div>
            <SharedTitle title1="Popular " title2="Instructors" />
            <PopularInstructorsCard />
        </div>
    );
};

export default PopularInstructor;
