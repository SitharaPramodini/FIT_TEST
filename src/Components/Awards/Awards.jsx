import React, { useState } from "react";
import './Stage.css';
import confetti from "canvas-confetti";


const Awards = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to store selected card

  const cards = [
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "A trophy is a tangible, decorative item used to remind of a specific achievement, serving as recognition or evidence of merit. Trophies are most commonly awarded for sporting events,[1] ranging from youth sports to professional level athletics. Additionally, trophies are presented for achievements in Academic, Arts and Entertainment, Business, Military, Professional awards, Community Service, Hunting, and Environmental accomplishments.",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the clicked card as selected

    confetti({
      origin: {
        x: 0,
        y: 0.5,
      }, // Position, 0.5 is center
      particleCount: 50, // Amount
      zIndex: 1, // Default is 100
      spread: 60, // Angle. 360 shoots in all directions
      ticks: 500, // Time until particles fall. Default is 200
    });
    confetti({
      origin: {
        x: 1,
        y: 0.5,
      }, // Position, 0.5 is center
      particleCount: 50, // Amount
      zIndex: 1, // Default is 100
      spread: 60, // Angle. 360 shoots in all directions
      ticks: 500, // Time until particles fall. Default is 200
    });
    confetti({
      origin: {
        x: 0.5,
        y: 0.5,
      }, // Position, 0.5 is center
      particleCount: 50, // Amount
      zIndex: 1, // Default is 100
      spread: 60, // Angle. 360 shoots in all directions
      ticks: 500, // Time until particles fall. Default is 200
    });
  };


  

  return (
    <div className="sticky w-full bg-gradient-to-b from-[#111827] to-transparent text-white pt-20 pb-10 overflow-hidden">
      <header>
        <div className="wrapper">
          <div className="layer1">
            <div className="curtain animated slideOutLeft"></div>
            <div className="curtain animated slideOutRight"></div>
          </div>
          <div className="layer2 ">
            {/* Conditional rendering: show the image if a card is selected */}
            {selectedCard ? (
              <div className="flex flex-row m-auto w-full pt-10">
                <img
                  src={selectedCard.video}
                  alt="Selected Card"
                  className="selected-card-animation w-1/2"
                />
                <div className="flex flex-col w-1/2">
                  <h2 className="text-white text-3xl">{selectedCard.title}</h2>
                  <p className="text-white pr-48 py-16 leading-7">{selectedCard.description}</p>
                </div>
              </div>
            ) : (
              <h2 className="awardheader animate-on-scroll px-72 text-center text-title mt-[-5rem] text-3xl font-bold text-white md:text-5xl md:leading-[1.2]">
                Recognition for Our Achievements
              </h2>
              
            )}
          </div>
        </div>
        <div className="secret"></div>
        {/* <button >Confetti</button> */}
      </header>
      <div>
        <div className="slider-container px-4 py-2 opacity-50">
          <div className="flex flex-row w-ful justify-around">
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
            <div className="awardscard w-[7%] bg-white h-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;