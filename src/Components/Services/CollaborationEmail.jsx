import React, { useEffect } from "react";

const CollaborationEmail = () => {

    return (
        <div>
            {/* col email heading */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
                <div className="lefthead md:w-1/3 w-full">
                    <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
                    Email Security solutions
                    </h2>
                </div>
                <div className="hidden md:flex righthr w-2/3 flex-col justify-around pl-6">
                    <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

                </div>
                <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
                    Elevate your email security with our comprehensive measures, including authentication protocols (SPF, DKIM, DMARC), encryption for secure transit, and anti-phishing tools. Our solution incorporates spam filtering, endpoint security, user training, and regular updates, offering a robust strategy to safeguard against unauthorized access and cyber threats. Protect sensitive information and enhance your organization’s security with our advanced email security solutions.
                    </p>

                  {/* col email dropdowns   */}
                  <ul className="item-list md:w-10/12 w-full items-center mx-auto mt-10">
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4 className="text-white">Barracuda</h4>
                            <div className="slider text-white">
                                <p>The Barracuda Email Security Gateway is an email security gateway that manages and filters all inbound and outbound email traffic to protect organizations from email-borne threats and data leaks. As a complete email management solution, the Barracuda Email Security Gateway lets organizations encrypt messages and leverage the cloud to spool email if mail servers become unavailable.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4 className="text-white">FortiMail</h4>
                            <div className="slider text-white">
                                <p>FortiMail safeguards organizations against the full spectrum of email-based threats such as phishing, ransomware, zero-day, and business email compromise (BEC) attacks. Our solution leverages FortiGuard AI-powered Security Services developed by FortiGuard Labs, providing cutting-edge security technology to prevent, detect, and respond to email-based threats in real time.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4 className="text-white">Check Point Harmony</h4>
                            <div className="slider text-white">
                                <p>Check Point Email Security uses cutting-edge Natural Language Processing (NLP) to prevent the most sophisticated attacks from ever reaching your end users.Protect your cloud email against all zero-day threats, compromised QR codes, and malicious attachments.Prevent more than 99% of phishing attempts, including the most evasive, sophisticated attacks.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4 className="text-white">Censornet</h4>
                            <div className="slider text-white">
                                <p>Censornet EMS is a robust email security solution designed to provide comprehensive protection against both traditional and emerging email threats, such as spam, viruses, phishing attacks, and more.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4 className="text-white">Bulk Email Solution</h4>
                            <div className="slider text-white">
                                <p>FortiMail</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label bg-[#fff0ff30] pl-10">
                            <h4 className="text-white">User Awareness and Training</h4>
                            <div className="slider text-white">
                                <p>Lucy</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default CollaborationEmail;
