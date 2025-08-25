import React, {useState} from 'react'

const InfoSec = () => {


    const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>  <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
    <div className="lefthead md:w-1/2 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        Worldly Known Fact 
                            </h2>
    </div>
    
    <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
        
    </div>
    </div>

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
  {expandedIndex === 0 ? "The term phishing was coined in the mid-1990s by hackers who were fishing for passwords and financial data from a sea of internet users. The first known mention of phishing was in 1996, and the technique has evolved significantly over the years" : "The term phishing was coined in the mid-1990s by hackers who were fishing for passwords and financial data from a sea of internet users. The first known mention of phishing was in 1996, and the technique has evolved significantly over the years".split(".")[0] + "."}
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
  {expandedIndex === 1 ? " In 2013, Target Corporation experienced a massive data breach, affecting 40 million credit and debit card accounts. Following the breach, Target invested heavily in cyber security measures and hired experts to overhaul its security infrastructure, significantly improving its defenses and restoring customer confidence. Source " : " In 2013, Target Corporation experienced a massive data breach, affecting 40 million credit and debit card accounts. Following the breach, Target invested heavily in cyber security measures and hired experts to overhaul its security infrastructure, significantly improving its defenses and restoring customer confidence. Source ".split(".")[0] + "."}
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
  )
}

export default InfoSec