import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" relative w-full bg-gradient-to-b from-[#111827] to-transparent text-white pt-20 pb-6 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/footer-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>

      <div className="flex md:flex-row flex-col w-full gap-y-12">
        {/* Logo and Contact Section */}
        <div className="flex flex-col md:w-1/4 w-11/12">
        <div className="flex items-center justify-start gap-4">
          <Link to='/'>
            <img src="/logo.png" className=" md:ml-12 my-2 w-20 pl-4 md:pl-0" alt="Logo" />
          </Link>
          <a href="https://ebadge.bestweb.lk/api/v1/clicked/fentonsit.lk/BestWeb/2025/Rate_Us">
          <img className="w-24 " src="https://ebadge.bestweb.lk/eBadgeSystem/domainNames/fentonsit.lk/BestWeb/2025/Rate_Us/image.png" alt="logo" width="150" height="150" />
          </a>
          </div>
          <div className="flex flex-col md:pl-11 pl-4 pr-2">
            <div className="flex flex-row items-center gap-3 pt-4">
              <div className="text-lg">
                <FaLocationDot />
              </div>
              <p className="text-[0.7rem]">
                JFI Tower III, 11th Floor, 75, Piyadasa Sirisena Mawatha,
                Colombo 10, Sri Lanka.
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 pt-4">
              <FaPhone />
              <a
                href="tel:+94112102102"
                className="text-[0.7rem] hover:text-blue-600 transition-colors duration-200"
              >
                +94 112 102 102
              </a>
            </div>
            <div className="flex flex-row items-center gap-3 pt-4">
              <div className="text-lg">
                <IoIosMail />
              </div>
              <a
                href="mailto:info@hayleysfentons.com"
                className="text-[0.7rem] hover:text-blue-600 transition-colors duration-200"
              >
                info@hayleysfentons.com
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-row md:w-1/2 w-full justify-around">
          <div className="flex flex-col md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              SERVICES
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li><a href="/service/NetworkInformationSecurity">Information Security</a></li>
              <li><a href="/service/ConsultancyService">Consultancy Services</a></li>
              <li><a href="/service/CyberSecurity">Cyber Security</a></li>
              <li><a href="/service/DataCenterSolution">Data Center Solutions</a></li>
              <li><a href="/service/CollaborationSuites">Collaboration Suites</a></li>
              <li><a href="/service/NextGenerationManagedServices">Managed Services</a></li>

            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col md:w-1/2 w-full px-4">
            {/* <h1 className="relative group text-white font-medium text-md pb-2">
              COMPANY
            </h1> */}
            <ul className="mt-9 list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li><a href="/service/UnifiedCommunicationIPPABX">Unified Communication & PABX</a></li>
              <li><a href="/service/EnterpriseNetworking">Enterprise Networking</a></li>
              <li><a href="/service/InnovationCentre">Innovation Center</a></li>
              <li><a href="/service/FintechSolutions">Fintech Solutions</a></li>
              <li><a href="/service/DigitalHealthcareSolutions">Digital Healthcare Solutions</a></li>
            </ul>
          </div>
        </div>

        {/* Business and Other Section */}
        <div className="flex flex-row md:w-1/2 w-full justify-around">
          <div className="flex flex-col pl-[5rem] md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              COMPANY
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li><a href="/aboutus">About</a></li>
              {/* <li>Services</li> */}
              <li><a href="/contact">Contact</a></li>
              <li><Link to={"/privacy-policy"}>Privacy</Link></li>
              <li>Legal</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="flex flex-col md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              OTHER
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li>Terms & Conditions</li>
              <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li> 
              <li>Legal</li>
              <li>Data Policy</li>
              <li>Support</li>
              <li>Developer Center</li>
            </ul>
          </div>
        </div>
      </div>
      <p class="mt-4 text-sm leading-6 text-center text-orange-500">
            {/* © SmartConnect Product. All rights reserved. */}
            COPYRIGHT © 2025 ALL RIGHTS RESERVED. CONCEPT & DESIGN BY FentonsIT
        </p>
    </div>
  );
};

export default Footer;
