import React, {useEffect, useState} from 'react'
import services from "../../ServiceData"; // Import the services data
import InfoSecurity from '../../Components/Services/InfoSecurity';
import { Link } from "react-router-dom";
import Network from '../../Components/Services/Sliders/Network';
import InfoSec from "../../Components/Services/InfoSec";
import '../Services.css'
import ContactUs from '../../Components/Home-Components/ContactUs';
import Footer from '../../Components/Footer';
import NewCollaboration from '../../Components/Services/NewCollaboration';
import Coll from '../../Components/Services/Sliders/Coll';


const CollS = () => {
    const index = 4
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

            <div className="services flex md:flex-row flex-col pb-10">
          <div className="left md:w-1/2 w-full flex flex-col items-center h-auto">
            {services[index].includes.map((includes, index) =>
              // Cards with even index go on the left
              <div className="rowcard mt-4 h-auto" key={index}>
                <div
                  className={`servicecard md:h-40 h-auto mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{includes.name}</h4>
                  {includes.description && (
  <p className="description">
    {expandedIndex === index
      ? includes.description // Show full description if expanded
      : includes.description.split(".")[0] + "."}{" "}
    {/* Only show the first sentence */}
  </p>
)}

                </div>
              </div>

            )}
          </div>
          <div className="right md:w-1/2 w-full flex flex-col items-center pt-4">
            {services[index].includes.map((includes, index) =>
            
              <div className="mr-auto" key={index}>
                <div
                  className={`ml-4 md:h-44 h-auto md:mt-0 mt-10 mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  {includes.heading || includes.features && (
                    <div>
                  <h4 className="text-[#ff6000] font-semibold">{includes.heading}</h4>

                  <ul className="flex flex-row flex-wrap gap-y-4">
                    {includes.features.map((feature, i) => (
                      <li className="text-md mt-3 text-white list-disc ml-8" key={i}>{feature}</li>
                    ))}
                  </ul>
                  </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
    <div className="lefthead md:w-1/2 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        Worldly Known Fact 
                            </h2>
    </div>
    
    <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
        
    </div>
    </div>

        <NewCollaboration />


            <div className="services flex md:flex-row flex-col ">
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


            <Coll />
            <ContactUs />
            <Footer />
        </div>
    )
}


export default CollS