import React from "react";
import "./slider.css";

const EnterpriseSlide = () => {
  // Array with paths to 17 images
  const cards = [
    "/tech/enterprise/1.png",
    "/tech/enterprise/2.png",
    "/tech/enterprise/3.png",
    "/tech/enterprise/4.png",
    "/tech/enterprise/5.jpg",
    "/tech/enterprise/6.png",
    "/tech/enterprise/7.png"
  ];

  return (
    <div className="serviceslide flex flex-row flex-wrap justify-around bg-gradient-to-b from-black via-transparent to-[#111827]">
      {/* Slider container */}
      <div className="slider-container px-4 py-12">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-100"
          >
            <source src="principles/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2 className="animate-on-scroll text-title mt-4 text-3xl font-bold text-[#ff6000] md:text-5xl md:leading-[1.2] text-left">
          Our ICT Principles
        </h2>
        <p className="animate-on-scroll text-subtitle my-4 text-xl font-medium text-gray-200 md:text-xl md:leading-[1] text-left">
          By partnering with the best brands in the world, we provide engineering solutions in Sri Lanka
        </p>

        {/* Sliding container */}
        <div className="animate-scroll pt-10">
          {cards.map((card, index) => (
            <div key={index} className="scard group">
              <img src={card} alt={`Card ${index + 1}`} className="px-10"/>
            </div>
          ))}

          {/* Loop for seamless sliding */}
          {cards.map((card, index) => (
            <div key={`loop-${index}`} className="scard group">
              <img src={card} alt={`Loop Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSlide;
