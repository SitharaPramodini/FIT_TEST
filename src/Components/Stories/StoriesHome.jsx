import React, { useEffect, useState } from "react";
import './Stories.css'
const StoriesHome = () => {

    return (
        <div>
            <div className="absolute gooey"></div>

            <div className="card-grid absolute flex flex-row gap-x-12 items-center justify-center mt-28 ml-[31rem] animate-up-down">
  <div className="singlecard max-h-fit max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg w-[-webkit-fill-available]" src="story.jpg" alt="" />
    </a>
    <div className="px-5 py-1">
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">we have stories to inspire you. we have stories to inspire you</p>
    </div>
  </div>

  <div className="right-card flex flex-col gap-y-12">
    <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-[-webkit-fill-available]" src="story.jpg" alt="" />
      </a>
      <div className="px-5 py-1">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">we have stories to inspire you. we have stories to inspire you</p>
      </div>
    </div>
    <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-[-webkit-fill-available]" src="story.jpg" alt="" />
      </a>
      <div className="px-5 py-1">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">we have stories to inspire you. we have stories to inspire you</p>
      </div>
    </div>
  </div>
</div>


        </div>


    );
};

export default StoriesHome;
