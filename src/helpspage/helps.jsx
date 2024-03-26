/* eslint-disable react/no-unescaped-entities */
import BaseHeroSection from "../components/common/herosection";
import darkman from "../assets/darkman.png";
import vr from "../assets/vr.png";
import younglady from "../assets/younglady.png";

import './help.css'


const HelpSection = () => {
  return (
    <BaseHeroSection>
      <div className="help-hero">
      <div className=" text-white max-w-[600px] text-center">
        <p className="text-7xl font-bold my-2">Help Center </p>
        <p className="text-base mt-2 font-medium">
          Need a hand? We got you covered!
        </p>
        <p className="text-base mt-2 font-medium">
          Dive into our help section for all your queries and solutions
        </p>
      </div>
      <div className="relative mt-6 max-w-[360px] w-full">
        <input
          type="text"
          placeholder="Search for articles"
          className="border border-gray-300 rounded-md pl-4 pr-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200
          w-full"
        />
        <svg xmlns="http://www.w3.org/2000/svg"  className="absolute right-3 top-3 h-5 w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="#8A8AA3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
         
       
      </div>
      </div>
      <div className="help-section">
<div className="help-section-1">
<div className="img-section">
    <img className="img" src={darkman} />
  </div>


<div className="section-text">
<p className="text-lg text-white"> Creatipp Crowdfunding</p>
  <p className="text-sm text-white">  Explore the basics of Creatipp crowdfunding</p>
  <button></button>

</div>
</div>
<div className="help-section-2">
  <div className="img-section">
    <img className="img" src={vr} />
  </div>

<div className="section-text">
<p className="text-lg text-white"> Creatipp Crowdfunding</p>
  <p className="text-sm text-white">   Explore the basics of Creatipp crowdfunding</p>
  <button></button>
</div>
</div>
<div className="help-section-3">
  <div className="img-section">
    <img className="img"  src={younglady}/>
  </div>

<div className="section-text">
  <p className="text-lg text-white"> Creatipp Crowdfunding</p>
  <p className="text-sm text-white"> Explore the basics of Creatipp crowdfunding</p>
  <button></button>
</div>
</div>
      </div>
      
       
    </BaseHeroSection>
  );
};

export default HelpSection;
