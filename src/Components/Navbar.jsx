import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false); // New state for visibility

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };

  useEffect(() => {
    // Trigger the navbar animation after page load
    setNavbarVisible(true);
  }, []);

  // = (e) => {
  //   e.preventDefault();
  //   // Change window location to trigger a full page reload
  //   window.location.href = e.target.closest('a').href;
  // };

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#020a1a]/60 backdrop-blur-sm dark:border-gray-700 transition-all duration-1000 ease-out ${navbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >

        <div className="flex flex-col px-3 py-2.5 lg:px-5 lg:pl-3 z-50">
          <div className="flex items-center justify-between">
            <Link to='/'>
              <img src="/logo.png" className="h-14 md:ml-12 " alt="Logo" />

            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-col">
              <ul className="flex flex-row items-center gap-5">
                <li className="relative group">
                  <Link to='/' className="text-white font-medium text-lg px-4 pb-2 cursor-pointer block">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                {/* Instead of raw '|' separator, add a CSS border on list items or a pseudo element */}
                <li aria-hidden="true" className="text-gray-400 select-none px-2">|</li>

                <li
                  className="relative group text-white font-medium text-lg px-4 pb-2 cursor-pointer"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  {isServicesDropdownOpen && (
                    <div className="absolute top-8 left-0 bg-gray-800 text-white rounded-md shadow-lg w-72 text-sm">
                      <ul className="flex flex-col p-4 space-y-1">
                        <li>
                          <Link to='/service/Network-Information-Security' className="hover:bg-gray-700 px-4 py-2 rounded-md block">
                            Network and Information Security
                          </Link>
                        </li>
                        <li>
                          <Link to='/service/Consultancy-Service' className="hover:bg-gray-700 px-4 py-2 rounded-md block">
                            Consultancy Services
                          </Link>
                        </li>

                        <Link onClick={() => setDrawerOpen(false)} to='/service/Cyber-Security'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Cyber Security
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Data-Center-Solution'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Data Center Solutions
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Collaboration-Suites'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Collaboration Suites
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/NextGeneration-Managed-Services'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Next Generation Managed Service
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Unified-Communication-IPPABX'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Unified Communication & PABX
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Enterprise-Networking'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Enterprise Networking
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Innovation-Centre'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Innovation Center
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Fintech-Solutions'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Fintech solutions
                          </li>
                        </Link>
                        <Link onClick={() => setDrawerOpen(false)} to='/service/Digital-Healthcare-Solutions'>
                          <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                            Digital Healthcare Solutions
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>

                <li aria-hidden="true" className="text-gray-400 select-none px-2">|</li>

                <li>
                  <Link to='/aboutus' className="relative group text-white font-medium text-lg px-4 pb-2 cursor-pointer block">
                    About us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                <li aria-hidden="true" className="text-gray-400 select-none px-2">|</li>

                <li>
                  <Link to='/FAQ' className="relative group text-white font-medium text-lg px-4 pb-2 cursor-pointer block">
                    FAQ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>

            </div>

            {/* Contact Button */}
            <div className="hidden md:flex flex-col items-end">
              <Link
                className="btn text-white bg-orange-800 hover:bg-orange-900 px-6 py-2 text-center rounded-lg transition duration-300 font-semibold text-base"
                to="/contact"
              >
                CONTACT US
              </Link>
            </div>



            {/* Mobile Drawer */}
            <div className="md:hidden ml-auto flex flex-col">
              <button
                onClick={toggleDrawer}
                type="button"
                className="p-2 text-white rounded-lg hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              {isDrawerOpen && (
                <div className="absolute top-12 right-0 bg-gray-800 text-white w-full shadow-lg">
                  <ul className="flex flex-col p-4 space-y-3">
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                        to="/"
                        onClick={() => setDrawerOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                        to="/aboutus"
                        onClick={() => setDrawerOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2 hover:bg-gray-700 rounded-lg w-full text-left"
                        onClick={toggleServicesDropdown}
                      >
                        Services
                      </button>
                      {isServicesDropdownOpen && (
                        <ul className="flex flex-col space-y-2 mt-2">
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Network-Information-Security'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Network and Information Security
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Consultancy-Service'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Consultancy Services
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Cyber-Security'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Cyber Security
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Data-Center-Solution'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Data Center Solutions
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Collaboration-Suites'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Collaboration Suites
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/NextGeneration-Managed-Services'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Next Generation Managed Service
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Unified-Communication-IPPABX'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Unified Communication & PABX
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Enterprise-Networking'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Enterprise Networking
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Innovation-Centre'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Innovation Center
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Fintech-Solutions'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Fintech solutions
                            </li>
                          </Link>
                          <Link onClick={() => setDrawerOpen(false)} to='/service/Digital-Healthcare-Solutions'>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded-md">
                              Digital Healthcare Solutions
                            </li>
                          </Link>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                        to="/FAQ"
                        onClick={() => setDrawerOpen(false)}
                      >
                        FAQ
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                        to="#"
                        onClick={() => setDrawerOpen(false)}
                      >
                        Awards
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        className="block px-4 py-2 text-white hover:bg-gray-700 rounded-lg transition duration-200"
                        to="/contact"
                        onClick={() => setDrawerOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </li>

                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
