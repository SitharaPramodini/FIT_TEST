import React, { useEffect } from "react";

const InnoIOT = () => {

    return (
        <div>
        <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-12 pt-16 ">
                <div className="lefthead md:w-2/5 w-full">
                    <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
                    Can you switch ON a light with your Smart Phone?
                    </p>
                    <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
                    Then we call it IoT
                    </h2>
                </div>
                <div className="hidden md:flex righthr w-3/5 flex-col justify-around pl-6">
                    <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

                </div>
            </div>
        <div className="innocontainer">
            <div className="innocard h-[350px] w-[300px]">
                <div className="content">
                    <div className="imgBx w-[100px] mt-12">
                        <img src="/innovation/controller.jpg" />
                    </div>
                    <div className="contentBx">
                        <h3> <h1 className="mb-4">Controllers<br></br></h1>
                            <span>WiFi Circuit Breaker 2P NO Mete. Available for 10A
                                to 80A current. Without Power Meter , Without
                                Leakage Protection Optional for 10A ,16A, 20A, 25A,
                                32A, 40A, 50A, 63A, 80A</span></h3>
                    </div>
                </div>
                <ul className="sci" >
                    <li>
                        <a href="">Discover Now</a>
                    </li>
                </ul>
            </div>
            <div className="innocard h-[350px] w-[300px]">
                <div className="content">
                    <div className="imgBx w-[100px] mt-12">
                        <img src="/innovation/switch.webp" />
                    </div>
                    <div className="contentBx">
                        <h3> <h1 className="mb-4">Switches<br></br></h1>
                            <span>US WiFi Touch Switch With Smart Life/Tuya App
                                Control Light Switch 1/2/3 Gang Support Alexa
                                Google Smart Home Customized</span></h3>
                    </div>
                </div>
                <ul className="sci" >
                    <li className="text-[#ff6000]">
                        <a href="">Discover Now</a>
                    </li>
                </ul>
            </div>
            <div className="innocard h-[350px] w-[300px]">
                <div className="content">
                    <div className="imgBx w-[100px] mt-12">
                        <img src="/innovation/sensor.webp"/>
                    </div>
                    <div className="contentBx">
                        <h3 ><h1 className="mb-4">Sensors<br></br></h1>
                            <span>Smart WiFi Door Sensor Smart Door Open/Closed
                                Detectors WiFi Window Sensor Work With Google
                                Home Alexa</span></h3>
                    </div>
                </div>
                <ul className="sci" >
                    <li className="text-[#ff6000]">
                        <a href="">Discover Now</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default InnoIOT;