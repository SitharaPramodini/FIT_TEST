import React from 'react';

import { FaRegLightbulb } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { FaHandHoldingHeart } from "react-icons/fa";

import './Solution.css';

const Solutions = () => {
    return (
        <div className="relative pt-14 w-full h-auto bg-gray-800 text-white rounded-lg overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                playsInline
                autoPlay
                muted
                loop
            >
                <source src="contact.mp4" type="video/mp4" />
                {/* Fallback message for browsers that don't support the video */}
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            {/* Content */}
            <div className="relative z-20">
                <p className="relative mt-12 text-sm text-center font-medium text-[#ff6000] md:text-xl md:leading-[1]">WHO WE ARE</p>
                <h2 className="relative pt-2 text-2xl text-center font-bold text-white md:text-4xl md:leading-[1.2] px-3">Crafting Tech Solutions for Your Success</h2>
                <p className="relative my-6 md:mx-28 mx-8 text-center text-white text-md md:text-xl">
                    We are the one-stop destination for all your engineering needs from renewable energy, ICT, MEP (Mechanical, Electrical, and Plumbing), Security and Surveillance, UPS (Uninterrupted Power Supply), Lighting, Facilities Management, Equipment Trading, and other critical engineering solutions
                </p>

                <div className="flex md:flex-row gap-x-24 flex-col gap-y-8 justify-center py-12 md:px-28">
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />

                    <div className="solution-card wallet ">
                        <div className="overlay"></div>
                        <div className="circle">
                            <FaRegLightbulb className="text-[3rem] text-white" />
                        </div>
                        <p className="font-semibold text-[#ff6000]">INNOVATIVENESS</p>
                        <p className="text-[15px] text-center text-[#a1a5a5]">Willingness and curiosity to experiment and create new products and solutions</p>
                    </div>

                    <div className="solution-card wallet ">
                        <div className="overlay"></div>
                        <div className="circle">
                            <SlEnergy className="text-[3rem] text-white" />
                        </div>
                        <p className="font-semibold text-[#ff6000]">ENERGY</p>
                        <p className="text-[15px] text-center text-[#a1a5a5]">Willingness to go the extra mile to deliver an exceptional service</p>
                    </div>

                    {/* <div className="solution-card wallet mx-auto">
                        <div className="overlay"></div>
                        <div className="circle">
                            <FaHandHoldingHeart className="text-[3rem] text-white" />
                        </div>
                        <p className="font-semibold text-[#ff6000]">EMPATHY</p>
                        <p className="text-[15px] text-center text-[#a1a5a5]">Vitae ex mattis consectetuer etiam natoque metus elit curabitur posuere netus ultrices</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
