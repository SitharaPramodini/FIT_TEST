// services.js

const services = [
  {
    videoSource: "/matrix.mp4",
    title: "Network and Information Security",
    subtitle:
      "Network and Information Security is essential for protecting the integrity, confidentiality, and availability of information. It involves implementing measures to guard against cyber threats, unauthorized access, data breaches, and other vulnerabilities.",
    subservices: [
      {
        name: "•	Network Security ​",
        description: `o	Next Generation Firewalls – Perimeter & internal
o	IPS, URL Filtering, DNS Filtering, Malware Filtering, IoT Detection`,
      },
      {
        name: "•	Cloud Security​",
        description: `o	Virtual Firewalls, Cloud Native Firewalls, DDoS Detection
o	Cloud WAAP, WAF, Application & Server Load Balancing`,
      },
      {
        name: "•	Secure Access Security​",
        description: `o	Secure SDWAN, SASE, ZTNA, SWG, CASB
o	Centralized Management`,
      },
      {
        name: "•	Endpoint, Data and Identity Security​​​",
        description: `o	EPP, EDR, XDR, NAC, IoT Security
o	NDR, email Security and Sandboxing
o	Data Loss Prevention (DLP)
o	Identity Access Management (IAM), Privileged Access Management (PAM)
`,
      },
      {
        name: "•	Operational Technology Security​",
        description: `o	Ruggedized Equipment 
          o	OT Security Services and Security Operations`,
      },
      {
        name: "•	Security Operations​​​",
        description: `o	Security Incident & Event Management (SIEM)
o	Security Orchestration, Automation and Response (SOAR)
o	Gen AI powered SecOps`,
      },
    ],
    details:
      "We help businesses create and implement cutting-edge strategies to innovate and stay ahead of the competition.",
  },
  {
    videoSource: "/circuit3.mp4",
    title: "Consultancy Service",
    subtitle:
      "IT Consultancy Services involve providing expert advice and strategic guidance to businesses to help them optimize their IT infrastructure, streamline operations, and achieve their goals. This includes everything from assessing current systems, recommending improvements, planning and implementing new technologies, and providing ongoing support.",
    subservices: [
      // {
      //   name: "Next Generation Firewall – Perimeter / Internal​",
      //   description:
      //     "A Next Generation Firewall (NGFW) offers advanced security by integrating traditional firewall capabilities with ",
      // },
    ],
    details:
      "Our cybersecurity solutions safeguard your organization from evolving threats and vulnerabilities.",
  },
  {
    videoSource: "/cyber.mp4",
    title: "Cyber Security",
    subtitle:
      "Cyber Security involves protecting computer systems, networks, and data from digital attacks, unauthorized access, damage, or theft. It includes various practices and technologies designed to safeguard the integrity, confidentiality, and availability of information.",
    subservices: [
      {
        name: "Cloud Security Posture​ Assessment​",
        description:
          "The Cloud Security Posture Assessment (CSPA) is a thorough evaluation designed to scrutinize and improve the security framework of your cloud infrastructure. This service identifies vulnerabilities, misconfigurations, and potential threats, ensuring your cloud environment is secure and compliant with industry standards.",
      },
      {
        name: "Vulnerability Assessments & Penetration Testing​",
        description:
          "Our services in Vulnerability Assessments & Penetration Testing provide a detailed examination of your digital infrastructure to identify and fortify potential security weaknesses. By understanding and mitigating vulnerabilities, we help strengthen your organization’s resilience against cyber threats.",
      },
      {
        name: "Security Analytics & Reporting (MS365 Azure)​",
        description:
          "Our Security Analytics & Reporting service for MS365 and Azure environments offers comprehensive insights into your security landscape. Utilizing advanced analytics tools, we provide real-time visibility into potential threats, user activities, and system vulnerabilities.",
      },
      {
        name: "Security Policy & Procedure Development​",
        description:
          "We offer tailored Security Policy & Procedure Development services to enhance your organization’s cybersecurity framework. Our customized policies and procedures ensure alignment with industry standards and regulatory requirements, covering all aspects of data protection, access controls, and incident response.",
      },
      {
        name: "Security Audit & Compliance​",
        description:
          "Our Security Audit & Compliance service ensures your organization’s cybersecurity measures meet industry standards and regulatory requirements. We provide detailed assessments and actionable recommendations to enhance your security posture and ensure compliance.",
      },
      {
        name: "Cyber Incident Response & Emergency Support​",
        description:
          "Our Cyber Incident Response & Emergency Support service offers rapid and decisive action in the event of a cybersecurity incident. We provide comprehensive support to contain and remediate incidents, ensuring swift recovery and enhanced future defences.",
      },
      {
        name: "End User Security Assessment​",
        description:
          "Our End User Security Assessment focuses on the human element of the cybersecurity. By evaluating and improving security awareness among your workforce, we help reduce susceptibility to social engineering attacks and enhance overall security resilience.",
      },
      {
        name: "FIT Cybersecurity Awareness​",
        description:
          "FIT offers a comprehensive Cybersecurity Awareness Training program designed to empower your workforce with the knowledge and skills needed to combat cyber threats. Our interactive sessions cover essential topics such as recognizing phishing attacks, practicing safe online habits, and understanding incident response protocols. Delivered through on-site workshops, online modules, and webinars, our training ensures flexibility and accessibility for all employees. By fostering a culture of security awareness, we help reduce the risk of cyber incidents, enhance compliance with regulations, and improve overall organizational resilience. Partner with FIT to protect your digital assets and build a vigilant, informed workforce. ",
      },
      {
        name: "Consultation & Advisory​",
        description:
          "Our Cybersecurity Consultation & Advisory service provides strategic guidance to improve your cybersecurity posture. We offer tailored recommendations and support to address your organization’s unique security challenges, ensuring effective risk management and regulatory compliance.",
      },
    ],
    sub2: [
      {
        name: "Threat Assessment and Analysis​",
        description:
          "Our service provides centralized management of event logs, ensuring real-time monitoring and response to potential security incidents. This proactive approach helps minimize the impact of threats and enhances overall security.",
      },
      {
        name: "Vulnerability Management​",
        description:
          "We offer robust email security solutions to protect your organization against email-based threats such as phishing and malware. Our multi-layered approach ensures secure communication channels and compliance with industry regulations.",
      },
      {
        name: "Incident Response and Recovery​",
        description:
          "Our Endpoint Security & Protection service ensures the safety of your organization’s devices and data. Utilizing advanced technologies, we protect against malware and other threats, providing continuous monitoring and threat detection.",
      },
      {
        name: "Security Monitoring and Management​",
        description:
          "Our Firewall Management & Monitoring service includes IDS/IPS to secure your network perimeter. We provide comprehensive management and real-time monitoring to detect and prevent unauthorized access and malicious activities.",
      },
      {
        name: "Security Training and Awareness Programs​",
        description:
          "We offer Managed Cloud Security services to safeguard your cloud infrastructure. Our tailored approach ensures compliance with industry standards and provides robust protection for your cloud-based assets.",
      },
      {
        name: "Compliance and Risk Management​",
        description:
          "Our IAM solution provides a secure framework for managing user identities and access controls. We implement advanced technologies to ensure efficient and secure user access, protecting against unauthorized access and potential breaches.",
      },
    ],
    sub3: [
      {
        name: "Empowering Your Workforce with Cybersecurity Knowledge​",
        description:
          "In today’s digital age, human error remains one of the most significant vulnerabilities in cybersecurity. At FIT, we recognize that a well-informed workforce is the first line of defense against cyber threats. Our Cybersecurity Awareness Training program is meticulously designed to equip your employees with the knowledge and skills needed to identify, prevent, and respond to cyber threats effectively.",
      },
      {
        name: "Why Cybersecurity Awareness Training?​",
        description:
          "Cybersecurity threats are constantly evolving, and even the most advanced technical defenses can be compromised by simple human mistakes. Phishing attacks, social engineering, and malware are just a few of the tactics that can exploit unsuspecting employees. Our training program aims to minimize these risks by fostering a culture of security awareness within your organization.",
      },
    ],
    details:
      "We offer robust server infrastructure to ensure your business runs smoothly with high availability and scalability.",
  },
  {
    videoSource: "/Server.mp4",
    title: "Data Centre, Server Storage and Backup, Virtualization and Cloud",
    subtitle:
      "A data center is the beating heart of modern IT infrastructure—a centralized hub where critical applications, data, and IT resources are hosted, managed, and secured. Whether physical or virtual, a data center serves as the backbone of every organization's digital operation, powering everything from enterprise applications and databases to cloud services and virtual desktops.",
    subservices: [
      {
        name: "•	Next-Generation On-Premises Servers ​",
        description:
          "Scalable, energy-efficient servers for AI, big data, and critical workloads with full data control",
      },
      {
        name: "•	Intelligent Enterprise Storage Solutions​​​",
        description:
          "Fast, reliable hybrid and all-flash storage powered by AI for efficiency.",
      },
      {
        name: "•	Dynamic Virtualization Platforms ​​​​​",
        description:
          "Agile platforms for seamless workload management and multi-cloud integration.",
      },
      {
        name: "•	Resilient Backup and Disaster Recovery Ecosystems ​​​​​",
        description:
          "Automated solutions ensuring data protection and quick disaster recovery.",
      },
      {
        name: "•	Elastic Public Cloud Infrastructure ​​​​​",
        description:
          "Scalable, cost-effective platforms for global growth and innovation",
      },
    ],
    infrastructure: [
      {
        name: "Software-Centric Design",
        description:
          "HCI uses a hypervisor to virtualize and manage compute, storage, and networking as a unified system.",
      },
      {
        name: "Integrated Storage",
        description:
          "HCI replaces traditional SANs and NAS with software-defined storage, simplifying management and enhancing performance.",
      },
      {
        name: "Scalability & Cost Efficiency",
        description:
          "HCI lowers costs by consolidating IT functions and allows scalable growth by adding nodes as business demands.",
      },
      {
        name: "Simplified Management",
        description:
          "Centralized management tools offer a single interface for resource oversight, reducing administrative tasks and minimizing configuration errors.",
      },
    ],
  },
  {
    videoSource: "/Collaboration.mp4",
    title: "Collaboration Suites and Applications",
    subtitle:
      "Collaboration suites and business applications designed to enhance communication, productivity, and operational efficiency. It includes secure email platforms as well as enterprise tools for contact centers, CRM, ERP, LMS, HR, and document management. Cloud services for scalable IT infrastructure and database support to ensure data security and performance is vital. With modern communication tools, business intelligence, and industry-specific solutions, we empower organizations to streamline workflows, drive growth, and stay competitive in a digital-first world. ",
    subservices: [
      // {
      //   name: "Next Generation Firewall – Perimeter / Internal​",
      //   description:
      //     "A Next Generation Firewall (NGFW) offers advanced security by integrating traditional firewall capabilities with ",
      // },
    ],
    includes: [
      {
        name: "Email Collaboration Services and suites​",
        // description: "",
        // heading: "",
        // features: [""],
      },
      {
        name: "Enterprise Collaboration, Business Intelligence & CRM​",
        description:
          "Empowering businesses with modern tools to drive efficiency and growth, we provide:",
        // heading: "What can we do with MDM ?",
        features: [
          "Contact Center Solutions for seamless customer interactions and support.",
          "Unified Communication Tools such as instant messaging, video conferencing, file sharing, and project management platforms.",
          "Business Management Applications like ERP, CRM, LMS, student management, HR solutions, and digitized document management systems.",
          "Hospitality management to optimize operations and customer experiences.",
          "Microsoft Modern Work Solutions leveraging Teams, SharePoint, Power BI, and Copilot for intelligent collaboration and analytics.",
        ],
      },
      {
        name: "Cloud Solutions and Services​",
        description:
          "Robust cloud services, enabling businesses to host applications, store data securely, and scale IT resources effortlessly. It support hybrid and multi-cloud environments to meet diverse business needs.",
        // heading: "",
        // features: [""],
      },
      {
        name: "Database Support Services​",
        description:
          "Database support services ensure high availability, performance optimization, backup management, and security compliance for critical business databases, providing seamless data management and operational continuity.",
        // heading: "",
        // features: [""],
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/ManageService.mp4",
    title: "Next Generation Managed Services Provider",
    subtitle:
      "Next-Generation Managed Services Providers (MSPs) go beyond traditional IT support to offer advanced services such as cloud computing, cybersecurity, data analytics, and proactive system management. They focus on leveraging cutting-edge technologies to improve business operations and drive digital transformation.",
    subservices: [
      {
        name: "•	IT infrastructure Managed Services (MS)​",
        description: "o	Data Center and Enterprise Networks MS",
      },
      {
        name: "24x7x365 Infrastructure Monitoring & L1 Support through Network Operation Center (NOC)​ ​​",
        description: "o	Real Time monitoring (On-Prem & MaaS)",
      },
      {
        name: "•	Help Desk and EUC Managed Service​​​",
        description: "o	On-site and remote Helpdesk Support",
      },
      {
        name: "•	Network Operation Center (NOC)​​​",
        description:
          "o	Operate, manage, monitor, and control IT infrastructure 24x7 round-the-clock",
      },
      {
        name: "•	Managed Security Service Provider (MSSP)​​​",
        description:
          "o	Security Incident Response, SIEM/ SOAR, NG Endpoint, SECaaS",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/Network.mp4",
    title: "Unified Communications and IP PABX",
    subtitle:
      "PABX (Private Automatic Branch Exchange) systems manage internal phone networks within an organization. Unified Communication integrates multiple communication tools like voice, video, messaging, and collaboration into a single platform, enabling seamless interaction.",
    subservices: [
      {
        name: "Why PABX?​",
        description:
          " Businesses need efficient communication systems to improve productivity, enhance collaboration, and reduce costs. Unified Communication ensures seamless interaction across various devices and locations, supporting remote and hybrid work models.",
      },
    ],
    includes: [
      {
        name: "Finance and Banking​",
        description:
          "Ensuring smooth & secure financial services by delivering dependable ICT systems that support banking operations, secure financial transactions, safeguard data, & elevate customer service standards. ",
        heading: "",
        features: [
          "People’s Bank Head Office",
          "Siyapatha Finance ",
          "Singer Finance",
          "Regional Development Bank",
          "Bank of Ceylon",
        ],
      },
      {
        name: "Transportation ​",
        description:
          "Deliver innovative and reliable solutions that enhance connectivity, security, and operational efficiency through advanced communication systems and robust network and surveillance infrastructures tailored to the needs of critical transportation hubs.",
        // heading: "What can we do with MDM ?",
        features: [
          "Bandaranaike International Airport (BIA)",
          "Sri Lanka Ports Authority",
        ],
      },
      {
        name: "Government​",
        description:
          "Enabling seamless operations & service delivery for essential public services by facilitating efficient administration, data management, communication & security.",
        heading: "",
        features: [
          "Ministry of Defense Block 1&2, Block 3, Block 4",
          "Western Provincial Council",
          "Sri Lanka Parliament",
          "DS Office Gampaha",
          "Ministry of Health",
        ],
      },
      {
        name: "Retail and Hospitality​",
        description:
          "Facilitating businesses to boost overall efficiency within the retail & hospitality sectors, to enhance customer services, manage operations & ensure connectivity.",
        heading: "",
        features: [
          "Hilton Colombo, Yala and Weerawila",
          "Singer PLC ",
          "Anilana Hotels and Resorts",
          "Marriott Hotels & Spa",
          "Sheraton Hotel Kosgoda",
          "Araliya Hotels Unawatuna & Nuwara Eliya",
        ],
      },
      {
        name: "Education​",
        description: "",
        heading: "",
        features: [
          "University of Peradeniya",
          "Visual Arts",
          "Ministry of Education (School Wi-Fi Project)",
        ],
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/Network.mp4",
    title: "Enterprise Networking and WI-FI",
    subtitle:
      "Enterprise Networking and Wi-Fi solutions are essential for establishing and maintaining robust, secure, and high-performance networks within organizations. This includes LAN, WAN, and wireless networks.",
    subservices: [
      {
        name: "Wide Area Networking – Edge, Internet, ISP​",
        description: "",
      },
      {
        name: "Local Area Networks – Core, Distribution & Access​",
        description: "",
      },
      {
        name: "Wi-Fi On Prem and Cloud Managed – Indoor, Outdoor, Industrial​",
        description: "",
      },
      {
        name: "Data Centre Networking​",
        description: "",
      },
      {
        name: "Network Monitoring & Management​",
        description: "",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/innovation.mp4",
    title: "Innovation Centre",
    subtitle:
      "At Center of Innovation Make your vision a Reality. Transform your business idea into a cutting-edge digital solution!",
    subservices: [
      {
        name: "CashApp​",
        description: "Hassel-free petty cash management for your company.",
      },
      {
        name: "GPS Tracking",
        description:
          "Track your vehicle anytime, anywhere with one single login. Our 4G-enabled tracking devices ensure a high speed data rate toward your data accessibility,",
      },
      {
        name: "Asset Tracking",
        description:
          "Tracking and optimize their physical assets, including equipment, tools, and machinery.Application assists with work orders, maintenance schedules,managing equipment rentals etc",
      },
      {
        name: "Call Recording",
        description:
          "Record all kinds of Analog, Digital and SIP-based PABX/Calls to a mp3 file and relevant reports",
      },
      {
        name: "Call Billing",
        description:
          "Captures call records, including date, time, duration, and parties involved. This manage costs and optimize time",
      },
      {
        name: "CRM",
        description:
          "Manage customers and provide valuable insights and improving communication across sales, marketing and service teams",
      },
      {
        name: "Custormized SoftPhones",
        description:
          "Software based phone application that allows features like unique branding, and specialized functionalities, enhancing user experience and operational efficiency. This flexibility ensures the softphone integrates seamlessly with existing systems and workflows.",
      },
      {
        name: "Missed Call Manager App",
        description:
          "Efficiently tracks and manages missed calls, providing automated responses and follow-ups. It ensures no call goes unanswered, helping businesses capture leads, engage customers, and improve overall communication efficiency",
      },
      {
        name: "Linen Management",
        description:
          "Streamlines the tracking, distribution, and inventory of linens in facilities such as hospitals and hotels. It ensures efficient usage, reduces losses, and maintains hygiene standards by automating processes and providing real-time data on linen availability and condition.",
      },
      {
        name: "Incentives Manager for SAP HANA",
        description:
          "Baed on SAP HANA reports, application streamlines the process managing and monitoring incentive programs. It helps organizations motivate employees by offering rewards for achieving specific goals, such as performance benchmarks or sales targets. This software enhances productivity, boosts morale, and aligns individual actions with business objectives",
      },
      {
        name: "Debtor Manager for SAP HANA",
        description:
          "Based on SAP HANA reports, The Application helps businesses efficiently track and manage outstanding invoices. It automates the process of sending invoices, monitoring payments, and following up on overdue accounts. This ensures timely payments, improves cash flow, and reduces the risk of bad debts, ultimately enhancing financial stability.",
      },
      {
        name: "GPS Based Mobile Attendance",
        description:
          "Attendance application leverages geolocation technology to accurately track and record employee attendance. By using real-time location data, it ensures employees are present at designated work sites or offices when clocking in and out. This system enhances accountability, reduces time theft, and simplifies attendance management for remote and on-site workers",
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/Network.mp4",
    title: "Fintech Solutions",
    subtitle:
      "Nucleas Software was founded with a vision to making financial services access easy and enriching worldwide. Today, Nucleas Software power the operations of over 200 Financial institutions across 50 countries. The Solution facilitate more than 26 million transactions each day, managing over $200 Billion of loans and enabling more than 300,000 users logging in daily.",
    subservices: [
      {
        name: "•	FinnOne Neo – Digital Lending Platform​",
        description: `o	Globally acclaimed lending solutions across retail, corporate & microfinance for end-to-end digitization of the lending lifecycles from origination, servicing & collections.
o	Equipped with Content and collateral management modules for complete automation
o	Built in Mobility and Channel Modules enable Financial institutions to offer seamless digital lending via agent facing and end customer offerings.
`,
      },
      {
        name: "•	FinAxia – End to end integrated Transactions Banking Suite​",
        description: `o	FinnAxia manages Receivables, Payments, Liquidity, Financial Supply Chain and corporate Trade Optimally.
o	Achieve operational excellence by digitizing processes enabling total transparency, faster time to market and straight through processing with the corperate customer front end.
`,
      },
    ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
  {
    videoSource: "/Collaboration.mp4",
    title: "Digital Healthcare Solutions",
    subtitle:
      "Digital Healthcare Solutions use technology to improve patient care, enhance the efficiency of healthcare delivery, and provide better access to medical services",
//     subservices: [
//       {
//         name: "•	FinnOne Neo – Digital Lending Platform​",
//         description: `o	Globally acclaimed lending solutions across retail, corporate & microfinance for end-to-end digitization of the lending lifecycles from origination, servicing & collections.
// o	Equipped with Content and collateral management modules for complete automation
// o	Built in Mobility and Channel Modules enable Financial institutions to offer seamless digital lending via agent facing and end customer offerings.
// `,
//       },
//       {
//         name: "•	FinAxia – End to end integrated Transactions Banking Suite​",
//         description: `o	FinnAxia manages Receivables, Payments, Liquidity, Financial Supply Chain and corporate Trade Optimally.
// o	Achieve operational excellence by digitizing processes enabling total transparency, faster time to market and straight through processing with the corperate customer front end.
// `,
//       },
//     ],
    details:
      "Our team specializes in creating custom network solutions tailored to your business needs, ensuring optimal performance and security.",
  },
];

export default services;
