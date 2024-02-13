const TitleBanner = ({ children, sm }) => {
  return (
    <div
      className={`${
        sm ? "text-2xl" : "text-3xl "
      } bg-[#FFFFFF1A] flex gap-2 p-2 justify-center items-center rounded-2xl text-white`}
    >
      {children}
    </div>
  );
};

export default TitleBanner;
