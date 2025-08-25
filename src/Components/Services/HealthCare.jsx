import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const HealthCare = () => {

      const [expandedIndex, setExpandedIndex] = useState(null);
    
      const handleReadMoreClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
      };


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
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 ">
                <div className="lefthead md:w-2/5 w-full">
                    <h2 className="text-2xl pl-4 font-bold md:text-4xl md:leading-[1.2] text-[#ff6000]">
                    Services Offered by Fentons Information Technology (FIT)
                    </h2>
                </div>
                <div className=" hidden md:flex righthr w-3/5 flex-col justify-around pl-6">
                    <hr className="trans--grow hr1 h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
                </div>
                <div className="list md:ml-12 pb-16">
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Hospital Information Management System (HIMS) - Electronic Medical Record (EMR) / Electronic Health Records (EHR)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Practice Management System - Electronic Medical Record (EMR) / Electronic Health Records (EHR) </h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Laboratory Information Management System (LIMS)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">AI-Based Radiology Information Management System (RIS-PACS-VIEWER)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Telemedicine Solutions</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Patient Remote Monitoring Solutions</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Caregiver and Caretaker APPS</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">AI-based comprehensive Brain health, Kidney Disease & Eye Screening Solutions</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Remote ICU, OT, A&E and Ambulance Management</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Electronic Drug Database/Clinical Decision Support</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Revenue Cycle Management (RCM)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Quality Management System (QMS)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Quality Management System (QMS)</h4>
                    </div>
                </div>



            </div>

            <div>  
        <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
    <div className="lefthead md:w-1/2 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        Why Digital Healthcare Solutions?
                            </h2>
    </div>
    
    <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
        
    </div>
    <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
    These solutions are critical for improving patient access to care, enhancing the quality of healthcare services, reducing costs, and enabling better health management.    </p> 
    </div>

    <div className="services flex md:flex-row flex-col ">
{/* Left Section */}
<div className="left md:w-1/2 w-full flex flex-col items-center">
<div className="rowcard mt-4">
<div
className={`servicecard h-auto mx-auto ${expandedIndex === 0 ? "expanded" : ""
  }`}
>
<h4 className="text-[#ff6000] font-semibold">Interesting Fact</h4>
<p className="description">
  {expandedIndex === 0 ? "The first telemedicine application was developed in the 1960s by NASA to monitor the health of astronauts during space missions.":"The first telemedicine application was developed in the 1960s by NASA to monitor the health of astronauts during space missions.".split(".")[0] + "."}
</p>
<button
  className="readmore-btn"
  onClick={() => handleReadMoreClick(0)}
>
  {/* {expandedIndex === 0 ? "Read More" : "Read Less"} */}
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
  {expandedIndex === 1 ? "oDoc is a leading telemedicine platform in Sri Lanka that provides online medical consultations via smartphones. Launched in 2017, oDoc aims to make healthcare more accessible and affordable by connecting patients with qualified doctors through video calls, phone calls, and chat":"oDoc is a leading telemedicine platform in Sri Lanka that provides online medical consultations via smartphones. Launched in 2017, oDoc aims to make healthcare more accessible and affordable by connecting patients with qualified doctors through video calls, phone calls, and chat".split(".")[0] + "."}
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
</div></div>
        </div>
    );
};

export default HealthCare;
