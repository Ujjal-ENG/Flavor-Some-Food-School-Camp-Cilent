import React from 'react';

const SharedTitle = ({ title1, title2 }) => {
    return (
        <div className="max-w-5xl mx-auto py-10">
            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl ">
                {title1}
                <div className="relative inline-flex gap-3">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]" />
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">{title2}</h1>
                </div>
            </h1>
        </div>
    );
};

export default SharedTitle;
