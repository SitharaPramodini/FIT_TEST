import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import '../transition.css'
import './Cardhover.css'
const ConnectingClients = () => {
    useEffect(() => {
        const cursor = document.querySelector(".blob");

        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            if (cursor) {
                cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="containerr">
            {/* Gradient Blob */}
            <div className="blob"></div>

            {/* Content Section */}
            <div className="content-parent flex flex-wrap flex-row md:py-16">
                <div className="flex md:w-1/4 w-full mx-auto">
                    <h2 className="m-4 text-2xl font-bold text-white md:text-2xl lg:text-3xl md:leading-[3rem]">Connecting Clients Worldwide With Reliable Expertise.</h2>
                </div>
                <div className="connectCard flex md:w-1/3 w-full mx-auto md:pb-0 pb-4 justify-center">
                    <div className="card2 w-[95%] h-auto rounded-lg border-4 border-gray-700 hover:border-gray-0 bg-none">
                        <div className="flex mt-3 flex-row justify-evenly items-center">
                        <h2 className="num mt-4 sm:px-4 text-3xl font-bold text-gray-600 md:text-4xl lg:text-7xl md:leading-[1.2] hover:text-orange-500">1</h2>
                        <div className="flex flex-col">
                                <h2 className="mt-4 text-2xl font-bold text-[#ff6000] md:text-lg lg:text-2xl md:leading-[1]">Premium Services</h2>
                                <p className="my-3 lg:text-md font-normal text-white md:text-sm lg:text-md md:leading-[1] pr-4">From the best tech experts in the field</p>
                                {/* <a href='#' className="flex flex-row items-center text-[#ff6000]">
                                    <p className="mb-6 text-xl font-normal  md:text-sm lg:text-lg md:leading-[1]">Continue Reading</p>
                                    <p className="arricon mb-6 font-mono text-[1rem] ml-4 mt-1">
                                        <FaArrowRightLong />
                                    </p>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="connectCard flex md:w-1/3 w-full mx-auto justify-center">
                    <div className="card2 w-[95%] h-auto rounded-lg border-4 border-gray-700 hover:border-gray-0 bg-none">
                        <div className="flex flex-row mt-4 justify-evenly items-center">
                            <h2 className="num mt-4 sm:px-4 text-3xl font-bold text-gray-600 md:text-4xl lg:text-7xl md:leading-[1.2] hover:text-orange-500">2</h2>
                            <div className="flex flex-col">
                                <h2 className="mt-4 text-2xl font-bold text-[#ff6000] md:text-lg lg:text-2xl md:leading-[1]">Affordable Prices</h2>
                                <p className="my-3 lg:text-md font-normal text-white md:text-sm lg:text-md md:leading-[1] pr-4">Cutting edge solutions offered</p>
                                {/* <a href='#' className="flex flex-row items-center text-[#ff6000]">
                                    <p className="mb-6 text-xl font-normal  md:text-sm lg:text-lg md:leading-[1]">Continue Reading</p>
                                    <p className="arricon mb-6 font-mono text-[1rem] ml-4 mt-1">
                                        <FaArrowRightLong />
                                    </p>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ConnectingClients;
