import React from 'react';

const FixedSection = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full overflow-hidden h-screen">
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="../../../../assets/video_web.jsx.mp4" type="video/mp4" />
                    <h1>hell</h1>
                </video>
            </div>
        </div>
    );
};

export default FixedSection;
