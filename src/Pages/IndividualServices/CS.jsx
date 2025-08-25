import React, {useEffect, useState} from 'react'
import services from '../../ServiceData';
import { Link } from "react-router-dom";
import '../Services.css'
import ContactUs from '../../Components/Home-Components/ContactUs';
import Footer from '../../Components/Footer';
import Consultancy from '../../Components/Services/Consultancy';
import HealthCare from '../../Components/Services/HealthCare';


const CS = () => {
    const index = 1
    const serviceIndex = parseInt(index); // Convert the `index` to an integer

    useEffect(() => {
        // Scroll to the top
        window.scrollTo(0, 0);

        // Check if the page has been reloaded before
        if (!sessionStorage.getItem("hasReloaded")) {
            // Set the flag in sessionStorage to indicate that the page has been reloaded
            sessionStorage.setItem("hasReloaded", "true");

            // Reload the page after a short delay to ensure scroll happens first
            setTimeout(() => {
                window.location.reload();
            }, 0); // No delay, but gives time for scroll to happen before reload
        }
    }, [index]);


    // Get the service details based on the index
    const service = services[serviceIndex] || services[index]; // Default to the first service if index is out of bounds
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleReadMoreClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expansion
    };

    return (
        <div>
            {/* Services home*/}
            <div className="land flex w-full bg-slate-900 relative ">
                {/* Video Section */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    id="myVideo"
                >
                    <source src={service.videoSource} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>

                {/* Overlay Content */}
                <div className="relative z-10 flex justify-around py-48 w-full h-full bg-black bg-opacity-70">
                    <div className="relative z-20 pt-0 text-center text-white">
                        <h2 className="pt-2 mx-8 text-3xl font-bold md:text-5xl md:leading-[1.2] px-3">
                            {service.title}
                        </h2>
                        <p className="my-8 mx-8 font-normal text-md md:text-xl md:mx-52 md:leading-[1.6]">
                            {service.subtitle}
                        </p>

                        {/* <div className="md:flex flex-col items-center">
                            <Link
                                className="btn h-8 pt-1 text-white bg-orange-500 px-6 py-2 text-center rounded-lg hover:bg-orange-600 transition duration-300"
                                to="/#"
                            >
                                LEARN MORE
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>

            <Consultancy />
  

            <div className="services flex md:flex-row flex-col pb-10">
        <div className="left md:w-1/2 w-full flex flex-col items-center">
          {services[index].subservices?.map((subservice, index) => 
            index % 2 === 0 ? ( // Cards with even index go on the left
              <div className="rowcard mt-4 " key={index}>
                <div
                  className={`servicecard h-auto mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{subservice.name}</h4>
                  <p className="description">
                    {expandedIndex === index
                      ? subservice.description // Show full description if expanded
                      : subservice.description.split(".")[0] + "."}{" "}
                    {/* Only show the first sentence */}
                  </p>
                  <button
                    className="readmore-btn"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {/* {expandedIndex === index ? "Read Less" : "Read More"} */}
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="right md:w-1/2 w-full flex flex-col items-center">
        {services[index].subservices?.map((subservice, index) => 
            index % 2 !== 0 ? ( // Cards with odd index go on the right
              <div className="rowcard mt-4" key={index}>
                <div
                  className={`servicecard h-auto mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{subservice.name}</h4>
                  <p className="description">
                    {expandedIndex === index
                      ? subservice.description // Show full description if expanded
                      : subservice.description.split(".")[0] + "."}{" "}
                    {/* Only show the first sentence */}
                  </p>
                  <button
                    className="readmore-btn font-thin"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {/* {expandedIndex === index ? "Read Less" : "Read More"} */}
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

         
            <ContactUs />
            <Footer />
        </div>
    )
}

export default CS