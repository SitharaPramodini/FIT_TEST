import React, { useEffect, useState, useRef } from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

// Card Component to avoid duplication
const Card = ({ icon, title, description, delay }) => (
  <div className={`card mx-auto p-8 rounded-xl card-animate delay-${delay}`}>
    <div className="icon flex text-[#ff6000] justify-center items-center mx-auto text-7xl pb-5">
      {icon}
    </div>
    <h2 className="text-center font-bold text-2xl pb-4">
      <span>{title.split(" ")[0]}</span> <span>{title.split(" ")[1]}</span>
    </h2>
    <p className="text-center text-md mb-8">{description}</p>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-">
      <Link
        className="btn text-sm text-white bg-orange-500 px-6 py-2 text-center rounded-lg hover:bg-orange-600 transition duration-300"
        to="/#"
      >
        READ MORE
      </Link>
    </div>
  </div>
);

const Discover = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Refs for the card container (no need for cursorRef if not used in this component)
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when element is in view
          } else {
            setIsVisible(false); // Undo animation when element is out of view
          }
        });
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const target = cardRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="home1 h-auto w-full bg-black py-12">
      <div className="justify-center">
        <h1 className="pl-4 text-5xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white max-w-fit">
          <span className={`typewriter pb-4 ${isVisible ? "animate" : ""}`}>
            Discover what’s happening on{" "}
            <span className="text-blue-600 dark:text-[#ff6000]">FentonsIT</span>
          </span>
        </h1>
        <p className="mb-10 pl-4 text-white text-2xl">
          Examine resources for realizing your vision.
        </p>
        <div
          ref={cardRef}
          className={`card-container flex md:flex-row flex-col md:justify-evenly w-full gap-4 ${
            isVisible ? "cards-visible" : ""
          }`}
        >
          <Card
            icon={<MdOutlineMiscellaneousServices />}
            title="Services Offered"
            description="At FIT, through our comprehensive suite of ICT solutions, we thrive to leverage our expertise to cater to your Digitalization, Security & Collaboration Needs. Our Team boasts a set of highly qualified engineers adapt in diverse technologies ensuring proficiency in delivering top notch solutions & support across the IT realm."
            delay={1}
          />
          <Card
            icon={<FaUsers />}
            title="About Us"
            description="FIT is a proud member of Hayleys PLC, a company with over 140 years of engineering excellence. We offer comprehensive solutions for Digitalization, Security, and Collaboration needs for the current digital-centric world."
            delay={2}
          />
          <Card
            icon={<FaUserTie />}
            title="Client Stories"
            description="Our FIT CyberSecurity Services (FCS) and Fentons Managed Security Services (FMSS) offerings provide you with strong support against evolving Cyber threats, offering a comprehensive suite of solutions designed to safeguard your digital assets and ecosystem as a whole."
            delay={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
