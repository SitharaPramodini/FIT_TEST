import React, { useEffect, useState } from "react";
import './consultancy.css';

import { FaLocationDot } from "react-icons/fa6";
import { MdQuestionAnswer, MdReviews } from "react-icons/md";
import { } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";


const Consultancy = () => {
    
    const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

    return (
        <div>
            {/* topic */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#161616] md:px-24 px-4 py-16">
                <div className="flex flex-col">
                    <h4 className=" text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl text-center">Dependable Tech - Capable Hands</h4>
                    <h2 className=" text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">Optimize IT systems, reduce costs, and improve business efficiency.</h2>
                    <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1] text-center">Expert IT consultancy services that optimize infrastructure, enhance efficiency, reduce costs, and provide strategic technology solutions.</p>
                </div>
            </div>

            {/* slited topic */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-24 pb-8">
                <div className="lefthead md:w-1/3 w-full">
                    <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
                        Consultancy Service
                    </h2>
                </div>
                <div className="hidden md:flex righthr w-2/3 flex-col justify-around pl-6">
                    <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

                </div>
                <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
                    IT Consultancy Services involve providing expert advice and strategic guidance to businesses to help them optimize their IT infrastructure, streamline operations, and achieve their goals. This includes everything from assessing current systems, recommending improvements, planning and implementing new technologies, and providing ongoing support.                </p>
            </div>

            {/* consultcard md:min-w-[21%] min-w-[85%] h-[240px]s */}
            <div className="container mx-auto flex md:flex-row gap-x-8 flex-col gap-y-8 justify-center mt-8 mb-4">
                <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <SiGoogleanalytics />
                            </div>
                            <p>Digital Transformation</p>

                        </div>
                    </div>
                </div>

                <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <FaLocationDot />
                            </div>
                            <p>Cybersecurity assessment programs</p>

                        </div>
                    </div>
                </div>

                <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div className="box">
                        <div className="content">
                            <h2>03</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <MdQuestionAnswer />
                            </div>
                            <p>IT Service Management</p>

                        </div>
                    </div>
                </div>



                <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div className="box">
                        <div className="content">
                            <h2>04</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <MdReviews />
                            </div>
                            <p>Project Management</p>

                        </div>
                    </div>
                </div>



            </div>

            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-24 pb-8">
                <div className="lefthead md:w-1/3 w-full">
                    <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
                        Why IT Consultancy Service?
                    </h2>
                </div>
                <div className="hidden md:flex righthr w-2/3 flex-col justify-around pl-6">
                    <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

                </div>
                <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
                    Businesses require IT consultancy to navigate the complex and ever-changing technological landscape. Expert consultants can identify inefficiencies, recommend cost-effective solutions, and ensure that technology aligns with business objectives.</p>
            </div>


            <div className="services flex md:flex-row flex-col ">
      {/* Left Section */}
      <div className="left md:w-1/2 w-full flex flex-col items-center">
        <div className="rowcard mt-4">
          <div
            className={`servicecard h-auto mx-auto ${expandedIndex === 0 ? "expanded" : ""
              }`}
          >
            <h4 className="text-[#ff6000] font-semibold">Do You Know Fact</h4>
            <p className="description">
              {expandedIndex === 0 ? "John von Neumann, who advised companies on the use of early computers in the 1950s, performed the first documented IT consultancy. His work laid the foundation for modern computing and IT consultancy." : "John von Neumann, who advised companies on the use of early computers in the 1950s, performed the first documented IT consultancy. His work laid the foundation for modern computing and IT consultancy.".split(".")[0] + "."}
            </p>
            <button
              className="readmore-btn"
              onClick={() => handleReadMoreClick(0)}
            >
              {/* {expandedIndex === 0 ? "Read Less" : "Read More"} */}
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right md:w-1/2 w-full flex flex-col items-center">
        <div className="rowcard mt-4">
          <div
            className={`servicecard h-auto mx-auto ${expandedIndex === 1 ? "expanded" : ""
              }`}
          >
            <h4 className="text-[#ff6000] font-semibold">Lesson from Past</h4>
            <p className="description">
              {expandedIndex === 1 ? "General Electric (GE), which hired IT consultants to revamp its IT infrastructure. This consultancy led to the implementation of cloud solutions, significantly reducing IT costs and increasing efficiency across GE's global operations." : "General Electric (GE), which hired IT consultants to revamp its IT infrastructure. This consultancy led to the implementation of cloud solutions, significantly reducing IT costs and increasing efficiency across GE's global operations.".split(".")[0] + "."}
            </p>
            <button
              className="readmore-btn"
              onClick={() => handleReadMoreClick(1)}
            >
              {/* {expandedIndex === 1 ? "Read Less" : "Read More"} */}
            </button>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Consultancy;
