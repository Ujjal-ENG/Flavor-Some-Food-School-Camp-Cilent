/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import AnimateSection from './AnimateSection';
import ExtraSections1 from './ExtraSections/ExtraSections1';
import ExtracSections2 from './ExtraSections/ExtracSections2';
import Gallery from './Gallery';
import Header from './Header';
import ParallaxSection from './ParallaxSection';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import Slider from './SliderPart/Slider';

const Home = () => {
    return (
        <div className="z-30">
            <Header />
            <div data-aos="fade-up">
                <Slider />
            </div>
            <AnimateSection>
                <PopularClass />
            </AnimateSection>
            <AnimateSection>
                <PopularInstructor />
            </AnimateSection>

            <Gallery />
            <AnimateSection>
                <ExtracSections2 />
            </AnimateSection>
            <ParallaxSection />
            <ExtraSections1 />
        </div>
    );
};

export default Home;
