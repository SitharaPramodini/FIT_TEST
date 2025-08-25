import React, {useState} from 'react'

const Fintech = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>  <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
    <div className="lefthead md:w-1/2 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        Why Fintech Solutions? 
                            </h2>
    </div>
    
    <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
        
    </div>
    <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
    Fintech solutions are essential for modernizing financial services, enhancing customer experience, reducing operational costs, and ensuring regulatory compliance.
    </p> 
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
  {expandedIndex === 0 ? "In 2009, an unknown person or group of people using the pseudonym Satoshi Nakamoto introduced Bitcoin, the first decentralized cryptocurrency. It revolutionized the financial industry by introducing block chain technology":"In 2009, an unknown person or group of people using the pseudonym Satoshi Nakamoto introduced Bitcoin, the first decentralized cryptocurrency. It revolutionized the financial industry by introducing block chain technology".split(".")[0] + "."}
</p>
<button
  className="readmore-btn"
  onClick={() => handleReadMoreClick(0)}
>
  {/* {expandedIndex === 0 ? "Read More" : "Read Less"} */}
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
  {expandedIndex === 1 ? "M-Pesa, launched in 2007 by Safaricom and Vodafone, is a mobile phone-based money transfer, financing, and microfinancing service. It allows users to deposit, withdraw, transfer money, pay for goods and services, and access credit and savings, all via their mobile phones Source":"M-Pesa, launched in 2007 by Safaricom and Vodafone, is a mobile phone-based money transfer, financing, and microfinancing service. It allows users to deposit, withdraw, transfer money, pay for goods and services, and access credit and savings, all via their mobile phones Source".split(".")[0] + "."}
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

export default Fintech