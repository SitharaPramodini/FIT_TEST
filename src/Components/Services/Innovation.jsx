import React, { useRef } from "react";
import './Innovation.css';
import InnoStepper from "./InnoStepper";

const Innovation = () => {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        if (videoRefs.current[index]) videoRefs.current[index].play();
    };

    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) videoRefs.current[index].pause();
    };

    return (
        <div>
            <section>
                <div className="innocontainer">
                    {/* First Video Card */}
                    <div
                        className="innocard pb-[14rem] w-[300px] h-[300px]"
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                    >
                        <div className="circuit">
                            <video
                                ref={(el) => (videoRefs.current[0] = el)}
                                className="circuit-video rounded-lg"
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/innovation/digital.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="content">
                            <div className="imgBx w-full mt-12">
                                {/* Add image if needed */}
                            </div>
                            <div className="contentBx">
                                <h3>
                                    <h1 className="mb-4">Digital Transformation</h1>
                                    <span>
                                        Unlock the future of your business with digital transformation! Embrace cutting-edge technology to streamline operations, enhance customer experiences, and drive innovation. Transform your vision into reality and stay ahead in the digital age.
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="">Discover Now</a>
                            </li>
                        </ul>
                    </div>

                    {/* Second Video Card */}
                    <div
                        className="innocard pb-[14rem] w-[300px] h-[300px]"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                    >
                        <div className="circuit">
                            <video
                                ref={(el) => (videoRefs.current[1] = el)}
                                className="circuit-video rounded-lg"
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/innovation/software.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="content">
                            <div className="imgBx w-full mt-12">
                                {/* <img src="/innovation/sa.png" alt="Software Application" /> */}
                            </div>
                            <div className="contentBx">
                                <h3>
                                    <h1 className="mb-4">Software Application</h1>
                                    <span>
                                        Elevate your business with our innovative software applications! From streamlining operations to enhancing customer engagement, our solutions are designed to drive efficiency and growth. Experience the power of technology tailored to your needs.
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="">Discover Now</a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Video Card */}
                    <div
                        className="innocard pb-[14rem] w-[300px] h-[300px]"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                    >
                        <div className="circuit">
                            <video
                                ref={(el) => (videoRefs.current[2] = el)}
                                className="circuit-video rounded-lg"
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/innovation/iot.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="content">
                            <div className="imgBx w-full mt-12">
                                {/* Add image if needed */}
                            </div>
                            <div className="contentBx">
                                <h3>
                                    <h1 className="mb-4">IOT</h1>
                                    <span>
                                        Make your life smarter, safer, and more efficient. From smart homes to connected cities, IoT is revolutionizing the way we live and work. Join the IoT revolution today and experience the power of connectivity with smart applications and devices!
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="">Discover Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#161616] md:px-24 px-4 py-16">
                <div className="flex flex-col">
                    <h4 className=" text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl text-center">
                        We Call it Digital Transformation
                    </h4>
                    <h2 className="text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">
                        For your very specific industry, we have highly-tailored Workflow solutions.
                    </h2>
                    <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1] text-center">
                        It's Just a Forward Path
                    </p>
                </div>
            </div>
            <InnoStepper />

            {/* Application Stack Topic */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
                <div className="lefthead md:w-1/2 w-full">
                    <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
                        Let your business drive through a
                    </p>
                    <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
                        Selective Software Application Stack
                    </h2>
                </div>
                <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
                    <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500 border-none" />
                </div>
            </div>
        </div>
    );
};

export default Innovation;