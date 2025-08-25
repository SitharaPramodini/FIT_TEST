import React, { useState } from 'react';

const InnoStepper = () => {

    return (
        <div className="container flex md:flex-row gap-x-4 flex-col gap-y-8 justify-center mt-8 mb-4 mx-auto">
            <div className="consultcard  h-[25rem] w-[18rem] mx-auto">
                <div className="stepcontainer">
                    <div className="stepborder z-10 absolute" aria-hidden="true"></div>
                    <div className='stepcircle bg-[#26272a] w-16 h-16 z-10 absolute text-white flex justify-evenly items-center text-2xl font-bold'>01</div>
                </div>
                <div className="box">
                    <div className="content">
                        <h2 className='step'>01</h2>
                        <div className="iconcard mx-auto text-[1rem] font-medium mb-4 text-white ">
                            Audit Current Workflows
                        </div>
                        <p>Begin by evaluating your existing workflows to identify areas that are time-consuming, repetitive, or prone to errors. This helps in understanding what needs improvement and where digital solutions can be most effective</p>

                    </div>
                </div>
            </div>

            <div className="consultcard  h-[25rem] w-[18rem] mx-auto">
            <div className="stepcontainer">
                    <div className="stepborder z-10 absolute" aria-hidden="true"></div>
                    <div className='stepcircle bg-[#26272a] w-16 h-16 z-10 absolute text-white flex justify-evenly items-center text-2xl font-bold'>02</div>
                </div>
                <div className="box">
                    <div className="content">
                        <h2 className='step'>02</h2>
                        <div className="iconcard mx-auto text-[1rem] font-medium mb-4 text-white ">
                            Select the Right Tools
                        </div>
                        <p>Choose digital tools and software architecture that align with your workflow needs. This could include verity of modules, automation tools, or cloud-based solutions that facilitate seamless collaboration and data sharing</p>

                    </div>
                </div>
            </div>

            <div className="consultcard  h-[25rem] w-[18rem] mx-auto">
            <div className="stepcontainer">
                    <div className="stepborder z-10 absolute" aria-hidden="true"></div>
                    <div className='stepcircle bg-[#26272a] w-16 h-16 z-10 absolute text-white flex justify-evenly items-center text-2xl font-bold'>03</div>
                </div>
                <div className="box">
                    <div className="content">
                        <h2 className='step'>03</h2>
                        <div className="iconcard mx-auto text-[1rem] font-medium mb-4 text-white ">
                            Implement and Test
                        </div>
                        <p>Roll out the selected digital model in phases. Start with a pilot program to test the new system, gather feedback, and make necessary adjustments. This ensures a smooth transition and minimizes disruptions</p>

                    </div>
                </div>
            </div>



            <div className="consultcard  h-[25rem] w-[18rem] mx-auto">
            <div className="stepcontainer">
                    <div className="stepborder z-10 absolute" aria-hidden="true"></div>
                    <div className='stepcircle bg-[#26272a] w-16 h-16 z-10 absolute text-white flex justify-evenly items-center text-2xl font-bold'>04</div>
                </div>
                <div className="box">
                    <div className="content">
                        <h2 className='step'>04</h2>
                        <div className="iconcard mx-auto text-[1rem] font-medium mb-4 text-white ">
                            Monitor and Optimize
                        </div>
                        <p>Continuously monitor the performance of your digital workflows. Use analytics to track efficiency gains and identify any bottlenecks. Regularly update and optimize your processes to keep up with technological advancements and changing business needs</p>

                    </div>
                </div>
            </div>


        </div>
    )
}
export default InnoStepper;
