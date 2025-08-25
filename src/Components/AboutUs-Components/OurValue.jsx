import React from 'react';
import './ourvalue.css';

const OurValue = () => {
    return (
        <div className="flex flex-col md:flex-row relative w-full h-auto bg-[#052137] text-white rounded-lg overflow-hidden pb-8">
            <div className="flex md:w-1/2 w-auto justify-center md:pr-12 ">
            <img src='innovation.png' className='w-full h-[30rem]'></img>
            </div>
            <div className="md:w-1/2 w-auto pl-8 md:pl-0">
                <p className="relative mt-12 text-sm text-left font-medium text-[#ff6000] md:text-xl md:leading-[1]">OUR VALUE</p>
                <h2 className="relative pt-2 text-2xl text-left font-bold text-white md:text-4xl md:leading-[1.2]">Driving innovation through teamwork</h2>
                <p className="relative my-6 text-left text-white text-md md:text-lg">
                    Hayleys FIT is backed by a powerhouse of seasoned tech professionals and a globally experienced leadership team.
                </p>
                <ul className="item-list w-11/12">
                    <li className="item">
                        <div className="label">
                            <h4>Empowering Tomorrow’s Innovations</h4>
                            <div className="slider">
                                <p>Our solutions are meticulously crafted to elevate your business, navigating the labyrinth of IT complexities effortlessly.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Unlocking potential with tailored solutions for your business's success explain shortly this one</h4>
                            <div className="slider">
                                <p>suggests that the company offers personalized services designed to meet the unique needs of each client. By customizing solutions, the company helps businesses maximize their potential and achieve their goals efficiently. This description conveys a focus on providing bespoke strategies and support for business growth.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Transforming challenges into opportunities with expert IT solutions</h4>
                            <div className="slider">
                                <p>showcases the company's ability to handle complex issues and turn them into successes using their IT expertise. It emphasizes the company's proactive approach to problem-solving and its commitment to helping businesses thrive by navigating and overcoming obstacles with effective, innovative solutions.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OurValue;
