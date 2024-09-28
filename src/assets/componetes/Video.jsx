import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className="container-video">
      <h1>Enchufe TV</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sj2Um7C2GWM"
        title="YouTube video player"
        frameBorder="10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
