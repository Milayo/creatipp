/* eslint-disable react/no-unescaped-entities */
import BaseHeroSection from "../common/herosection.jsx";
import loveballoon from "../../assets/loveballoon.png";
import SearchIcon from "../../assets/searchicon";

const HeroSection = () => {
  return (
    <BaseHeroSection>
      <img src={loveballoon} className="h-44 w-44" />
      <div className="flex gap-2 border border-purple-400 rounded-3xl px-3 py-2 bg-[#FFFFFF1A] mt-9">
        <div className="text-sm text-white">Updated weekly</div>
      </div>
      <div className="text-white max-w-[600px] text-center">
        <p className="text-7xl font-bold my-2">Creator showcase</p>
        <p className="text-base mt-2 font-medium">
          Dive into a world of diverse talents, and creative passion. Whether
          you're a seasoned supporter or a curious newcomer, find creators who
          resonate with your interests and support their journeys.
        </p>
      </div>
      <div className="relative flex mt-6 max-w-[360px] w-full">
        <input
          type="text"
          placeholder="Search creators"
          className="border border-[#D1D1DB] pr-[10.8%] rounded-md pl-4 py-2 focus:outline-none placeholder-[#121217]
          w-full text-sm"
        />
        <div className="absolute border-l border-[#EBEBEF] right-0 top-0 h-full w-[10.6%] flex items-center px-2">
          <SearchIcon />
        </div>
      </div>
    </BaseHeroSection>
  );
};

export default HeroSection;
