import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import PopularSlider from './PopularSlider';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/all-classes').then(({ data }) => setClasses(data.data));
    }, []);
    console.log(classes);
    return (
        <div>
            <SharedTitle title1="Popular" title2="Classes" />
            <PopularSlider classes={classes} />
        </div>
    );
};

export default PopularClass;
