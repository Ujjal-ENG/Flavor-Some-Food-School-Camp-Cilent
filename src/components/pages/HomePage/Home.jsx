import React from 'react';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import Slider from './SliderPart/Slider';
import ExtraSections1 from './ExtraSections/ExtraSections1';

const Home = () => {
    return (
        <div>
            <Slider />
            <PopularClass />
            <PopularInstructor />
            <ExtraSections1 />
        </div>
    );
};

export default Home;
