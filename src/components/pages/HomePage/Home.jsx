import React from 'react';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import Slider from './SliderPart/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <PopularClass />
            <PopularInstructor />
        </div>
    );
};

export default Home;
