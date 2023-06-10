import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import PopularSlider from './PopularSlider';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get('https://flavorsome-food-school-server.vercel.app/all-classes-popular').then(({ data }) => setClasses(data.data));
    }, []);
    // console.log(classes);
    return (
        <div>
            <SharedTitle title1="Popular " title2="Classes" />
            <PopularSlider classes={classes} />
        </div>
    );
};

export default PopularClass;
