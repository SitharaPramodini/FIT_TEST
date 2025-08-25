import React, { useEffect } from "react";

const DatacenterDivider = () => {

  return (
    <div>
      {/* WhyChoose */}
      <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
        <div className="lefthead md:w-1/2 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        GitHub Data Center Outage</h2>
            <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
            In October 2018, GitHub, a popular platform for software development and version control, experienced a significant outage due to a data center failure. The issue was caused by a malfunction in the primary data storage system. The outage underscored the critical need for comprehensive disaster recovery strategies and led to improvements in GitHub's data center operations and user communication protocols.            </p>
        </div>
        <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

        </div>
      </div>
    </div>
  );
};

export default DatacenterDivider;
