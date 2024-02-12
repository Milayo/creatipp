import React from "react";
import BaseHeroSection from "../common/herosection.jsx";
import SearchIcon from "../../assets/searchicon";
import FaqIcon from "../../assets/faq.png";

const Herosection = () => {
  return (
    <BaseHeroSection>
      <div className="rounded-2xl bg-[#FFFFFF0D] py-8 px-6 flex flex-col items-center container">
        <img src={FaqIcon} className="h-44 w-44" />
        <div className="text-white max-w-[600px] text-center mx-2">
          <p className="text-7xl font-bold my-2">Frequently Asked Questions</p>
          <p className="text-base mt-2 font-medium">
            Quick answers to questions you might have about Creatipp.
            <br /> Explore our FAQs for clarity.
          </p>
        </div>
        <div className="relative flex mt-6 max-w-[300px] sm:max-w-[360px] w-full">
          <input
            type="text"
            placeholder="Type keys to find answers"
            className="border border-[#D1D1DB] pr-[10.8%] rounded-md pl-4 py-2 focus:outline-none placeholder-[#121217]
          w-full text-sm"
          />
          <div className="absolute border-l border-[#EBEBEF] right-0 top-0 h-full w-[10.6%] flex items-center px-2">
            <SearchIcon />
          </div>
        </div>
      </div>
    </BaseHeroSection>
  );
};

export default Herosection;
