import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css.css";
import "./CardList.css";

import { MdOutlineSecurity } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { PiSecurityCameraDuotone } from "react-icons/pi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { TbWorldCode } from "react-icons/tb";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";

const CardList = () => {
  const [isLight, setIsLight] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);

  const handleToggle = () => {
    setIsLight((prev) => !prev);
  };

  const handleMouseEnter = (ref) => {
    if (ref.current) ref.current.play(); // Play video
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) ref.current.pause(); // Pause video
  };

  const cards = [
    {
      icon: <PiSecurityCameraDuotone />,
      title: "Information Security",
      description: "Protect your organization's sensitive data and system.",
      path: "Network-Information-Security"
    },
    {
      icon: <HiComputerDesktop />,
      title: "Consultancy Services",
      description:
        "Leverage our expertise and industry insights to optimize your IT infrastructure and processes.",
    
  path: "Consultancy-Service"      },
    {
      icon: <MdOutlineSecurity />,
      title: "Cyber Security",
      description: "Safeguard your digital assets from evolving cyber threats.",
      path: "Cyber-Security"
    },
    {
      icon: <AiOutlineCloudServer />,
      title: "Data Center Solutions, Virtualization, Servers, Storage, and Backup",
      description: "Transform your IT infrastructure.",
      path: "Data-Center-Solution"
    },
    {
      icon: <MdOutlineSettingsApplications />,
      title: "Collaboration Suites and Applications",
      description: "Enhance productivity and teamwork.",
      path: "Collaboration-Suites"
    },
    {
      icon: <TbWorldCode />,
      title: "Next Generation Managed Services Provider",
      description: "Entrust the management of your IT infrastructure.",
      path: "NextGeneration-Managed-Services"
    },
    {
      icon: <GiSatelliteCommunication />,
      title: "Unified Communication & PABX",
      description:
        "Streamline communication and collaboration within your organization.",
    
  path: "Unified-Communication-IPPABX"      },
    {
      icon: <FaNetworkWired />,
      title: "Enterprise Networking",
      description: "Build a robust and scalable network infrastructure.",
      path: "Enterprise-Networking"
    },
    {
      icon: <IoBulbOutline />,
      title: "Innovation Centre",
      description: "Center of Innovations at FIT drives cutting-edge solutions.",
      path: "Innovation-Centre"
    },
    {
      icon: <IoBulbOutline />,
      title: "Fintech Solutions",
      description: "The Solution facilitate more than 26 million transactions each day.",
      path: "Fintech-Solutions"
    },
    {
      icon: <IoBulbOutline />,
      title: "Digital Healthcare Solutions",
      description: "Digital Healthcare Solutions use technology to improve patient care",
      path: "Digital-Healthcare-Solutions"
    },
  ];

  return (
    <div className={`cardcontainer pb-8 bg-black ${isLight ? "light" : ""}`}>
      <h1 className="md:text-center md:mx-40 md:pt-16 md:pb-8 px-10 pt-8 leading-10 text-xl font-medium tracking-tight md:text-4xl lg:text-5xl text-white">
        Connect With Us For All Your Digitization, Security & Collaboration Needs
      </h1>

      <div className="flexcard flex-row justify-center flex-wrap my-8 relative">
        {cards.map((card, index) => (
          <div
            className="listcard md:w-1/4 w-[90%]"
            key={index}
            onMouseEnter={() => {
              if (index === 1) handleMouseEnter(videoRef1);
              else if (index === 2) handleMouseEnter(videoRef2);
              else if (index === 3) handleMouseEnter(videoRef3);
              else if (index === 4) handleMouseEnter(videoRef4);
              else if (index === 5) handleMouseEnter(videoRef5);
              else if (index === 7) handleMouseEnter(videoRef7);
              else if (index === 8) handleMouseEnter(videoRef8);
              else if (index === 9) handleMouseEnter(videoRef8);
              else if (index === 10) handleMouseEnter(videoRef8);
            }}
            onMouseLeave={() => {
              if (index === 1) handleMouseLeave(videoRef1);
              else if (index === 2) handleMouseLeave(videoRef2);
              else if (index === 3) handleMouseLeave(videoRef3);
              else if (index === 4) handleMouseLeave(videoRef4);
              else if (index === 5) handleMouseLeave(videoRef5);
              else if (index === 7) handleMouseLeave(videoRef7);
              else if (index === 8) handleMouseLeave(videoRef8);
              else if (index === 9) handleMouseLeave(videoRef8);
              else if (index === 10) handleMouseLeave(videoRef8);
            }}

          >
            <span className="icon">{card.icon}</span>

            {index === 0 && <CanvasEffect />}

            {index === 1 && (

              <div className="circuit">
                <video
                  ref={videoRef1}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="circuit3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            )}

            {index === 2 && (
              <div className="circuit">
                <video
                  ref={videoRef2}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="cyber.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {index === 3 && (
              <div className="circuit">
                <video
                  ref={videoRef3}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="Server.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {index === 4 && (
              <div className="circuit">
                <video
                  ref={videoRef4}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="Collaboration.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {index === 5 && (
              <div className="circuit">
                <video
                  ref={videoRef5}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="ManageService.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {index === 7 && (
              <div className="circuit">
                <video
                  ref={videoRef7}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="Network.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {index === 8 && (
              <div className="circuit">
                <video
                  ref={videoRef8}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="innovation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
{index === 9 && (
              <div className="circuit">
                <video
                  ref={videoRef8}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="innovation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {index === 10 && (
              <div className="circuit">
                <video
                  ref={videoRef8}
                  className="circuit-video"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="ManageService.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <Link to={`/service/${card.path}`}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  {[...Array(12)].map((_, index) => (
                    <div key={index} className={`tile tile-${index + 1}`}></div>
                  ))}
                </div>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Canvas 
const CanvasEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth / 3;
    canvas.height = window.innerHeight / 3;

    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const letterArray = letters.split("");
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00eb10";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          letterArray[Math.floor(Math.random() * letterArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.3,
      }}
    ></canvas>
  );
};

export default CardList;
