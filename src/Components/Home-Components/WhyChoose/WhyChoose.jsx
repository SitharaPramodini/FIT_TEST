import React, { useEffect } from "react";
import './WhyChoose.css';
import whyImg from '/illustrate.jpg';

import { RiTeamLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";
import { PiHandshake } from "react-icons/pi";
import { IoChatbubbleOutline } from "react-icons/io5";

const WhyChoose = () => {
  // Function to handle when the element is in view or out of view
  const handleScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add 'visible' class when element enters the viewport
      } else {
        entry.target.classList.remove('visible'); // Remove 'visible' class when element leaves the viewport
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleScroll, options);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* WhyChoose */}
      <div className="home flex flex-row flex-wrap w-full bg-black px-4 pt-16">
        <div className="flex flex-col md:w-1/2 w-auto md:pl-8">
          <h2 className="animate-on-scroll text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl">
            WHY CHOOSE FIT
          </h2>          <h2 className="animate-on-scroll text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2]">Crafting Digital Solutions For Your Businesses</h2>
          <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1]">FIT is a leading, reliable ICT integrator in Sri Lanka.</p>
          <div className="list md:ml-12 pb-16">
            <div className="animate-on-scroll flex flex-row items-center mt-6">
              <div className="icons text-2xl font-bold leading-4 text-white md:text-3xl">
                <RiTeamLine />
              </div>
              <h3 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">
                Highly Trained & Qualified Technical Team
              </h3>            </div>
            <div className="animate-on-scroll flex flex-row items-center mt-6">
              <div className="icons text-2xl font-bold leading-4 text-white md:text-3xl">
                <FaRegCheckCircle />
              </div>
              <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Relentless Focus on Quality</h4>
            </div>
            <div className="animate-on-scroll flex flex-row items-center mt-6">
              <div className="icons text-2xl font-bold leading-4 text-white md:text-3xl">
                <TbUserQuestion />
              </div>
              <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Customer-Centric Approach</h4>
            </div>
            <div className="animate-on-scroll flex flex-row items-center mt-6">
              <div className="icons text-2xl font-bold leading-4 text-white md:text-3xl">
                <PiHandshake />
              </div>
              <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Tailored Solutions, Every Time</h4>
            </div>
            <div className="animate-on-scroll flex flex-row items-center mt-6">
              <div className="icons text-2xl font-bold leading-4 text-white md:text-3xl">
                <IoChatbubbleOutline />
              </div>
              <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Innovative Thinking, Innovative Solutions</h4>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 w-auto mt-12 md:mt-0">
          <div className="c-glitch" style={{ backgroundImage: `url(${whyImg})` }}>
            <div className="c-glitch__img" style={{ backgroundImage: `url(${whyImg})` }}></div>
            <div className="c-glitch__img" style={{ backgroundImage: `url(${whyImg})` }}></div>
            <div className="c-glitch__img" style={{ backgroundImage: `url(${whyImg})` }}></div>
            <div className="c-glitch__img" style={{ backgroundImage: `url(${whyImg})` }}></div>
            <div className="c-glitch__img" style={{ backgroundImage: `url(${whyImg})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
