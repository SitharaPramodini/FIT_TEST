import React from "react";

import { MdEmail } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const Collaboration = () => {

    return (
        <div>
            {/* icewrap */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
        <div className="lefthead md:w-2/5 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        IceWarp Email</h2>
            <p className="my-4 font-medium text-lg md:text-lg md:leading-[1.6] text-white">
            Email – Collaboration – Office,  All in a single package
            </p>
        </div>
        <div className="hidden md:flex righthr w-3/5 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
        </div>
        <p className="my-2 font-normal text-md md:text-md md:leading-[1.6] text-white">
        Your company or organization deserves the most convenient browser-based solution, and we have just what you need. Our comprehensive offerings include Business email, TeamChat for project teamwork, real-time office document collaboration and online meetings. All in our secure cloud and for half the usual cost.
        Elevate your productivity and communication seamlessly with our all-encompassing platform.
                    </p>
      </div>


            {/* cards */}
            <div className="cardrows flex flex-col ">
                <div className="container flex md:flex-row gap-x-8 flex-col gap-y-8 justify-center mt-8 mb-4">
                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>01</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <MdEmail />
                                </div>
                                <p>Email</p>
                                <h6 className="text-sm text-gray-400 italic">Secure business email</h6>

                            </div>
                        </div>
                    </div>

                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>02</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <FaUserFriends  />
                                </div>
                                <p className="text-md">TeamChat</p>
                                <h6 className="text-sm text-gray-400 italic">Dynamic team collaboration</h6>

                            </div>
                        </div>
                    </div>

                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>03</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <FaVideo  />
                                </div>
                                <p>Conference</p>
                                <h6 className="text-sm text-gray-400 italic">For a large audience</h6>

                            </div>
                        </div>
                    </div>



                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>04</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <IoDocumentText  />
                                </div>
                                <p>Documents</p>
                                <h6 className="text-sm text-gray-400 italic">For Real-time collaboration</h6>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="container flex md:flex-row gap-x-8 flex-col gap-y-2 justify-center mt-8 mb-4">
                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>05</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <FaMobileScreen  />
                                </div>
                                <p>MDM</p>
                                <h6 className="text-sm text-gray-400 italic">Mobile with Security</h6>
                            </div>
                        </div>
                    </div>

                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>06</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <HiMiniClipboardDocumentCheck  />
                                </div>
                                <p>Compliance</p>
                                <h6 className="text-sm text-gray-400 italic">As per RBI and SEBI Mandate</h6>

                            </div>
                        </div>
                    </div>

                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>07</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <MdMarkEmailRead  />
                                </div>
                                <p>Email Security</p>
                                <h6 className="text-sm text-gray-400 italic">Endpoint secured gateway with ATP</h6>

                            </div>
                        </div>
                    </div>



                    <div className="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                        <div className="box">
                            <div className="content">
                                <h2>08</h2>
                                <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                    <IoSettings  />
                                </div>
                                <p>Hybrid</p>
                                <h6 className="text-sm text-gray-400 italic">Seamless Co-existence</h6>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* head */}
            <div className="home md:flex flex-row flex-wrap justify-around bg-[#161616] md:px-24 px-4 pb-16 pt-4">
                <div className="md:flex flex-col">
                    <h2 className="animate-on-scroll text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">Over 50 Million Users and 50,000 Customers Worldwide Including,</h2>

                    <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1] text-center">
                        <ul className="flex md:flex-row flex-col gap-x-4 list-disc md:justify-around justify-start md:px-40 px-4">
                            <li>Email Advance security with DLP</li>
                            <li>MDM</li>
                            <li>Advance Archive (Legal Holder)</li>
                        </ul>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Collaboration;
