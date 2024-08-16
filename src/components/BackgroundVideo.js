import React from 'react';

const BackgroundVideo = () => {
    return (
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}>
            <source src="../assets/images/backgroundvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default BackgroundVideo;
