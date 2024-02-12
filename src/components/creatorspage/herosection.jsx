/* eslint-disable react/no-unescaped-entities */
import BaseHeroSection from "../common/herosection.jsx";
import loveballoon from "../../assets/loveballoon.png";
import { Button } from "@lemonsqueezy/wedges";

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
      <div className="relative mt-6 max-w-[360px] w-full">
        <input
          type="text"
          placeholder="Search creators"
          className="border border-gray-300 rounded-md pl-4 pr-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200
          w-full"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l5-5m0 0l-5-5m5 5h-5M6 12h13"
          />
        </svg>
      </div>
    </BaseHeroSection>
  );
};

export default HeroSection;
