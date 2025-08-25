import React, {useState} from 'react'

const NewCollaboration = () => {
   const [expandedIndex, setExpandedIndex] = useState(null);
    
      const handleReadMoreClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
      };
    
      return (
        <div>  
        <div className="services flex md:flex-row flex-col ">
    {/* Left Section */}
    <div className="left md:w-1/2 w-full flex flex-col items-center">
    <div className="rowcard mt-4">
    <div
    className={`servicecard h-auto mx-auto ${expandedIndex === 0 ? "expanded" : ""
      }`}
    >
    <h4 className="text-[#ff6000] font-semibold">Do You Know Fact</h4>
    <p className="description">
      {expandedIndex === 0 ? "Ray Tomlinson sent the first email in 1971, marking the beginning of electronic communication and collaboration. " : "Ray Tomlinson sent the first email in 1971, marking the beginning of electronic communication and collaboration. ".split(".")[0] + "."}
    </p>
    <button
      className="readmore-btn"
      onClick={() => handleReadMoreClick(0)}
    >
      {expandedIndex === 0 ? "Read More" : "Read Less"}
    </button>
    </div>
    </div>
    </div>
    
    {/* Right Section */}
    <div className="right md:w-1/2 w-full flex flex-col items-center">
    <div className="rowcard mt-4">
    <div
    className={`servicecard h-auto mx-auto ${expandedIndex === 1 ? "expanded" : ""
      }`}
    >
    <h4 className="text-[#ff6000] font-semibold">Lesson from Past</h4>
    <p className="description">
      {expandedIndex === 1 ? "Accenture, a global professional services company, adopted Microsoft Teams to enhance collaboration among its 620,000+ employees worldwide. The company needed a unified platform to support its large-scale operations and diverse project teams.":"Accenture, a global professional services company, adopted Microsoft Teams to enhance collaboration among its 620,000+ employees worldwide. The company needed a unified platform to support its large-scale operations and diverse project teams.".split(".")[0] + "."}
    </p>
    <button
      className="readmore-btn"
      onClick={() => handleReadMoreClick(1)}
    >
      {/* {expandedIndex === 1 ? "Read Less" : "Read More"} */}
    </button>
    </div>
    </div>
    </div>
    </div></div>
      )}

export default NewCollaboration