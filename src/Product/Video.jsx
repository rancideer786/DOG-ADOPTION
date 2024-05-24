import React from 'react';
import Vid from './slide1.mp4'
const Video = () => {
  return (
    <video controls width="100%">
      <source src={Vid} type="video/mp4" />
      <source src="./slide1.mp4" type="video/webm" />
    </video>
  );
};

export default Video;
