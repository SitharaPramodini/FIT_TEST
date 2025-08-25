import React, { useRef, useState } from "react";

const MiddlePage = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      {/* MiddlePage */}
      <div className="land flex w-full bg-slate-900 relative h-screen">
        {/* Video Section */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          id="myVideo"
        >
          <source src="fitvideo.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
