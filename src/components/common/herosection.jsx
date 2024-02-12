import HeaderComponent from "./header";
const HeroSection = ({ children, isLanding }) => {
  return (
    <div
      className={`${
        isLanding ? "bg-landing-bg" : "bg-other-hero-bg"
      } bg-cover bg-center h-[900px] z-100`}
    >
      <HeaderComponent />
      <div className="flex justify-center flex-col items-center mt-9">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
