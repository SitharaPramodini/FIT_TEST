import React from 'react';
import '../AboutUs-Components/ourvalue.css';

const CyberSplit = () => {
    return (
        <div className="home flex flex-col md:flex-row relative w-full h-auto bg-[#052137] text-white rounded-lg overflow-hidden py-8 mt-16">
            <div className=" cyberleft md:w-1/2 w-auto pl-8 md:px-12">
                <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-center text-[#ff6000]">
                Training Program Overview
                </h2>
                <p className="my-8 font-normal text-sm md:text-md md:leading-[1.6] text-white">
                Cybersecurity threats are constantly evolving, and even the most advanced technical defenses can be compromised by simple human mistakes. Phishing attacks, social engineering, and malware are just a few of the tactics that can exploit unsuspecting employees. Our training program aims to minimize these risks by fostering a culture of security awareness within your organization.
                </p>
                <ul className=" item-list w-11/12">
                    <li className="item">
                        <div className="label">
                            <h4>Understanding Cyber Threats</h4>
                            <div className="slider">
                                <p>Participants will gain a clear understanding of various cyber threats, including phishing, ransomware, social engineering, and malware. We provide real-world examples and case studies to illustrate the impact of these threats on businesses.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Best Practices for Cyber Hygiene</h4>
                            <div className="slider">
                                <p>We educate employees on best practices for maintaining good cyber hygiene. This includes proper password management, recognizing suspicious emails, safe browsing habits, and securing mobile devices.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Incident Response Protocols</h4>
                            <div className="slider">
                                <p>Training on how to respond to a cybersecurity incident is crucial. We teach employees the steps to take if they suspect a breach, how to report incidents, and the importance of timely action to mitigate damage.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Social Engineering Awareness</h4>
                            <div className="slider">
                                <p>Social engineering tactics can deceive even the most cautious individuals. Our training includes recognizing and resisting these manipulative tactics, ensuring employees are vigilant against attempts to exploit human psychology.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Data Protection and Privacy</h4>
                            <div className="slider">
                                <p>Employees will learn the importance of data protection and privacy, including how to handle sensitive information securely, compliance with data protection regulations, and the role of personal responsibility in safeguarding data.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Customized Training Modules</h4>
                            <div className="slider">
                                <p>We understand that each organization has unique needs. Our training modules can be customized to address specific challenges and scenarios relevant to your industry and operational environment.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="cyberright md:w-1/2 w-auto pl-8 md:px-12">
                <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-center text-[#ff6000]">
                Delivery Methods
                </h2>
                <p className="my-8 font-normal text-sm md:text-md md:leading-[1.6] text-white">
                Our training program is flexible and can be delivered through various methods to suit your organization’s needs:
                </p>
                <ul className="item-list w-11/12">
                    <li className="item">
                        <div className="label">
                            <h4>On-site Workshops</h4>
                            <div className="slider">
                                <p>Interactive on-site workshops allow for hands-on training and direct engagement with our cybersecurity experts. These sessions encourage active participation and real-time feedback.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Online Training Modules</h4>
                            <div className="slider">
                                <p>Our online training modules provide a convenient and scalable solution for organizations of all sizes. Employees can complete the training at their own pace, ensuring flexibility and accessibility.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Webinars and Virtual Sessions</h4>
                            <div className="slider">
                                <p>We offer live webinars and virtual training sessions that bring the expertise of our trainers to your remote workforce. These sessions are interactive and allow for real-time Q&A.</p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="label">
                            <h4>Ongoing Training and Refreshers</h4>
                            <div className="slider">
                                <p>Cybersecurity awareness is an ongoing effort. We provide regular refresher courses and updates to keep employees informed about the latest threats and best practices.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CyberSplit;
