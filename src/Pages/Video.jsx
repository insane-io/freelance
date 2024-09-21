import React from 'react';

const Video = () => {
  return (
    <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <video 
        height="600px" 
        width="1000px" 
        controls 
        style={{ border: '2px solid #000', borderRadius: '10px' }}
        poster="https://www.example.com/thumbnail.jpg"
      >
        <source src="https://temforge-vip-699.s3.eu-north-1.amazonaws.com/videos/7b6a4e12-0460-4e73-b7c1-77b06246bede_file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
