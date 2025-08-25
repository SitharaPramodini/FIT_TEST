import React, { useEffect, useRef } from "react";
import "./InnoTechnology.css";

const InnoTechnology = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add("links__list-active"); // Add class to trigger animation
                }
            },
            { threshold: 0.3 } // Animation triggers when 30% of the component is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row relative w-full h-auto bg-gradient-to-b from-black via-[#020a1a] to-black text-white rounded-lg overflow-hidden pt-16">
            <div className="cyberleft md:w-1/2 w-auto pl-8 md:px-12">
                <h4 className="text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl">
                    OUR TECHNOLOGY
                </h4>
                <h2 className="text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2]">
                    At Center of Innovation
                </h2>
                <p className="text-subtitle my-4 text-xl font-thin text-white md:text-xl md:leading-[1.8]">
                    Our strong passion to modern tech trends and best practices drive in the
                    development of top-notch solutions that are perfectly tailored to provide high
                    quality and affordable software to growing startup and enterprise companies in
                    the world.
                </p>
            </div>
            <div className="cyberright md:w-1/2 w-auto pl-8 md:px-12">
                <div className="links">
                    <ul ref={sectionRef} className="links__list" style={{ "--item-total": 6 }}>
                        <li className="links__item circ1" style={{ "--item-count": 1 }}>
                            <a className="links__link" href="#">
                                <div className="links__icon" viewBox="0 0 32 32">
                                    <img src="/Innoprojects/angular.png" alt="Angular" />
                                </div>
                                <span className="links__text">Angular</span>
                            </a>
                        </li>
                        <li className="links__item circ2" style={{ "--item-count": 2 }}>
                            <a className="links__link" href="#">
                                <div className="links__icon" viewBox="0 0 31 32">
                                    <img src="/Innoprojects/.net.png" alt=".NET" />
                                </div>
                                <span className="links__text">.NET Core</span>
                            </a>
                        </li>
                        <li className="links__item circ3" style={{ "--item-count": 3 }}>
                            <a className="links__link" href="#">
                                <div className="links__icon" viewBox="0 0 32 32">
                                    <img src="/Innoprojects/java.png" alt="Java" />
                                </div>
                                <span className="links__text">JAVA</span>
                            </a>
                        </li>
                        <li className="links__item circ4" style={{ "--item-count": 4 }}>
                            <a className="links__link" href="#">
                                <div className="links__icon" viewBox="0 0 32 32">
                                    <img src="/Innoprojects/python.webp" alt="Python" />
                                </div>
                                <span className="links__text">Python</span>
                            </a>
                        </li>
                        <li className="links__item circ5" style={{ "--item-count": 5 }}>
                            <a className="links__link" href="#">
                                <div className="links__icon" viewBox="0 0 22 32">
                                    <img src="/Innoprojects/react.webp" alt="React" />
                                </div>
                                <span className="links__text">React Js</span>
                            </a>
                        </li>
                        <li className="links__item circ6" style={{ "--item-count": 6 }}>
                            <a className="links__link" href="#">
                                <div className="links__icon" viewBox="0 0 22 32">
                                    <img src="/Innoprojects/php.png" alt="PHP" />
                                </div>
                                <span className="links__text">PHP</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InnoTechnology;
