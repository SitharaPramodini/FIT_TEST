import React, { useEffect } from "react";

const CyberBenefits = () => {

    return (
        <div className="relative pt-8 w-full h-auto bg-gray-800 text-white rounded-lg overflow-hidden">
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

            <div className="relative z-20 ">

                    <h2 className="animate-on-scroll md:px-48 px-1 text-title text-2xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">Benefits of Cybersecurity Awareness Training</h2>
      <div className="pl-32 pt-24">
            <ul className="item-list md:w-1/2 w-8/12 items-center ml-10">
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4>Reduced Risk of Cyber Incidents</h4>
                            <div className="slider">
                                <p>By educating employees about the latest cyber threats and prevention techniques, the likelihood of successful cyber-attacks is significantly reduced.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4>Enhanced Organizational Security Culture</h4>
                            <div className="slider">
                                <p>Our training fosters a culture of security awareness, making cybersecurity a shared responsibility across the organization.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4>Compliance with Regulations</h4>
                            <div className="slider">
                                <p>Many industries require regular cybersecurity training to comply with regulations. Our program helps ensure your organization meets these requirements.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4>Improved Incident Response</h4>
                            <div className="slider">
                                <p>Well-trained employees can respond more effectively to incidents, minimizing potential damage and recovery time.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4>Increased Employee Confidence</h4>
                            <div className="slider">
                                <p>With the knowledge and skills gained from our training, employees feel more confident and capable in their roles, contributing to overall organizational resilience.</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
                </div>
                </div>
            
        </div>
    );
};

export default CyberBenefits;
