import React from "react";

const TitleBanner = ({ children }) => {
  return (
    <div className="bg-[#FFFFFF1A] flex gap-2 p-2 justify-center items-center text-3xl rounded-2xl text-white">
      {children}
    </div>
  );
};

export default TitleBanner;
