/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Parallax } from 'react-parallax';
import Typed from 'react-typed';
import img from '../../../assets/image/summercamp.png';

const ParallaxSection = () => {
    return (
        <Parallax strength={300} bgImage={img} className="h-[70vh] object-contain w-full">
            <div className="flex justify-center items-center h-screen w-full">
                <Typed
                    className="text-black text-center"
                    strings={[
                        "Discover a wide range of classes offered by various instructors. Whether you're looking to learn something new or enhance your skills, we have the perfect classes for you. Explore our diverse selection and embark on an exciting learning journey today!"
                    ]}
                    typeSpeed={30}
                    loop
                    style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginTop: '20px',
                        lineHeight: '40px'
                    }}
                />
            </div>
        </Parallax>
    );
};

export default ParallaxSection;
