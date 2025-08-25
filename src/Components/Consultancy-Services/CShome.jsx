import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CShome = () => {
  const { index } = useParams(); // Get index from the URL
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  // Determine the video source based on the index
  let videoSource = "";
  switch (index) {
    case "0":
      videoSource = "innovation.mp4";
      break;
    case "1":
      videoSource = "cyber.mp4";
      break;
    case "2":
      videoSource = "Server.mp4";
      break;
    default:
      videoSource = "Network.mp4"; // Fallback video source
      break;
  }

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
      {/* CShome */}
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
          <source src={videoSource} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex pt-48 w-full h-full bg-black bg-opacity-70">
          <div className="relative z-20 pt-0 text-center text-white">
            <h2 className="pt-2 text-3xl font-bold md:text-5xl md:leading-[1.2] px-3">
              Consultancy Service
            </h2>
            <p className="my-8 mx-8 font-normal text-md md:text-xl md:mx-52 md:leading-[1.6]">
              IT consultancy offers expert guidance, optimizing infrastructure, enhancing efficiency, reducing costs, and providing ongoing support for business goals.
            </p>

            <div className="hidden md:flex flex-col items-center">
              <Link
                className="btn h-8 pt-1 text-white bg-orange-800 px-6 py-2 text-center rounded-lg hover:bg-orange-900 transition duration-300"
                to="/#"
              >
                CONTACT US
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CShome;
