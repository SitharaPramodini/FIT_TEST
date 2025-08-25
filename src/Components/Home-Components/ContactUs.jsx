import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";


const ContactUs = () => {

    return (
        <section className="flex md:flex-row flex-col bg-gray-900">
            <div className="md:w-1/2 w-full p-8">
                <div className="left-anim">
                    <p className="relative mt-8 text-sm font-medium text-[#ff6000] md:text-xl md:leading-[1]">GET IN TOUCH</p>
                    <h2 className="relative pt-2 text-3xl font-bold text-white md:text-5xl md:leading-[1.2]">Transform your tech ecosystems with us</h2>
                    <p className="relative my-12 text-white text-lg">Strengthen your operations, reinforce security, and increase your competitive Edge with FIT</p>
                </div>
                <div className="w-full sm:w-1/4 mb-6 animicon">
                    <ul className="list-none">
                        <li className="flex">
                            <a
                                href="tel:+94112102102"
                                className="socialicon hover:bg-[#ff6200d4] text-white bg-[#ff6000] p-3 mr-3 rounded-full"
                                aria-label="Call us on WhatsApp"
                            >
                                <span className="w-6 h-6 text-2xl font-bold text-white" aria-hidden="true">
                                    <FaWhatsapp />
                                </span>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1JMjLYCWtr/?mibextid=wwXIfr"
                                className="socialicon hover:bg-[#ff6200d4] text-white bg-[#ff6000] p-3 mr-3 rounded-full"
                                aria-label="Visit our Facebook page"
                            >
                                <span className="w-6 h-6 text-2xl font-bold text-white" aria-hidden="true">
                                    <FaFacebookF />
                                </span>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/fentons-information-technology/posts/?feedView=all"
                                className="socialicon hover:bg-[#ff6200d4] text-white bg-[#ff6000] p-3 mr-3 rounded-full"
                                aria-label="Visit our Instagram profile"
                            >
                                <span className="w-6 h-6 text-2xl font-bold text-white" aria-hidden="true">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md md:w-1/2 w-full">
                <form action="#" className="space-y-3">
                    <div className="anim flex flex-row">
                        <div className="w-1/2 pr-2">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
                            <input type="text" id="name" className="  border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name" required />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label for="company" className="block mb-2 text-sm font-medium text-gray-300">Your company</label>
                            <input type="text" id="company" className="  border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="company" required />
                        </div>
                    </div>
                    <div className="anim flex flex-row">
                        <div className="w-1/2 pr-2">
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-300">Your phone</label>
                            <input type="phone" id="phone" className=" border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="+94" required />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                            <input type="email" id="email" className=" border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                    </div>
                    <div className="anim ">
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="anim sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className="anim md:flex flex-col items-start">
                        <Link
                            className="btn text-white bg-orange-800 px-6 py-2 text-center rounded-lg hover:bg-orange-900 transition duration-300"
                            to="/#"
                        >
                            CONTACT US
                        </Link>
                    </div>

                </form>
            </div>
        </section>

    );
};

export default ContactUs;