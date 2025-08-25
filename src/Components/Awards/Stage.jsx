import React, { useState, useEffect } from "react";
import './Stage.css';
import confetti from "canvas-confetti";


const Stage = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to store selected card

  const cards = [
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
    {
      title: "Award for Information security",
      description: "FIT is thrilled to be honored as the Fortinet Best Partner for Government Business. This recognition reflects our dedication to protecting government entities with advanced cybersecurity solutions",
      image: "curtain/trophy.png",
      video: "trophy.gif",
    },
  ];


  useEffect(() => {
    // Trigger confetti once to ensure canvas initialization
    confetti({
      particleCount: 1,
      ticks: 10, // Minimal confetti to initialize
    });
  }, []);

  const handleCardClick = (card) => {
    
    // Trigger confetti effects
    confetti({
      origin: { x: 0, y: 0.5 },
      particleCount: 50,
      zIndex: 1,
      spread: 60,
      ticks: 500,
      colors: ["#FFD700", "#FFC107"],
    });
    confetti({
      origin: { x: 1, y: 0.5 },
      particleCount: 50,
      zIndex: 1,
      spread: 60,
      ticks: 500,
      colors: ["#FFD700", "#FFC107"],
    });
    confetti({
      origin: { x: 0.5, y: 0.5 },
      particleCount: 50,
      zIndex: 1,
      spread: 60,
      ticks: 500,
      colors: ["#FFD700", "#FFC107"],
    });

    // Update state to display the selected card
    setSelectedCard(card);
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
                  <h2 className="text-orange-400 text-3xl">{selectedCard.title}</h2>
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
          {/* Sliding container */}
          <div className="animate-scroll flex">
            {cards.map((card, index) => (
              <button
                key={index}
                className="awardcard group flex flex-row"
                // onClick={handleConfetti} // Add click handler
                onClick={() => handleCardClick(card)}
              >
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="px-6 cursor-pointer h-24 w-auto"
                />
                <div className="flex flex-col w-1/2">
                  <h3 className="text-white">{card.title}</h3>
                  {/* <p className="text-white">{card.description}</p> */}
                </div>
              </button>
            ))}

            {/* Loop for seamless sliding */}
            {cards.map((card, index) => (
              <button
                key={`loop-${index}`}
                className="awardcard group flex flex-row"
                onClick={() => handleCardClick(card)} // Add click handler
              >
                <img
                  src={card.image}
                  alt={`Loop Card ${index + 1}`}
                  className="px-6 cursor-pointer h-24 w-auto"
                />
                <div className="flex flex-col w-1/2">
                  <h3 className="text-white">{card.title}</h3>
                  {/* <p className="text-black">{card.description}</p> */}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;