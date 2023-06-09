import React from 'react';
import ExtraSections1 from './ExtraSections/ExtraSections1';
import ExtracSections2 from './ExtraSections/ExtracSections2';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import Slider from './SliderPart/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <PopularClass />
            <PopularInstructor />
            <ExtracSections2 />
            <ExtraSections1 />
        </div>
    );
};

export default Home;
