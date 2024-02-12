import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Xlogo from "../../assets/Xsvg.jsx";
import LinkedinIcon from "../../assets/Linkedin.jsx";
import DiscordIcon from "../../assets/discord";
import TelegramIcon from "../../assets/telegram.jsx";

const socialLinks = [
  {
    Icon: Xlogo,
    path: "",
  },
  {
    Icon: LinkedinIcon,
    path: "",
  },
  {
    Icon: DiscordIcon,
    path: "",
  },
  {
    Icon: TelegramIcon,
    path: "",
  },
];
const footerLinks = [
  {
    title: "Home",
    Links: [
      {
        title: "Learn",
        path: "",
      },
      {
        title: "Developers",
        path: "",
      },
      {
        title: "Ecosystem",
        path: "",
      },
      {
        title: "Community",
        path: "",
      },
    ],
  },
  {
    title: "About",
    Links: [
      {
        title: "news",
        path: "",
      },
      {
        title: "resources",
        path: "",
      },
      {
        title: "Terms of use",
        path: "",
      },
      {
        title: "Privacy policy",
        path: "",
      },
    ],
  },
  {
    title: "Catergories",
    Links: [
      {
        title: "music",
        path: "",
      },
      {
        title: "Influencing",
        path: "",
      },
      {
        title: "Entertainment",
        path: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FFFFFF0D] rounded-[48px] p-8 container mx-auto mt-24">
        <div className="p-6 rounded-[16px] flex flex-col justify-between bg-[#FFFFFF0D] gap-8 flex-wrap sm:flex-row">
          <div className="flex flex-col gap-6">
            <img src={Logo} alt="logo" className="max-w-[183px]" />
            <p className="text-white font-normal text-lg">Follow Us</p>
            <div className="flex gap-4 items-center">
              {socialLinks.map((item, index) => (
                <a href={item.path} key={index}>
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>
          <>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h2 className="text-white font-bold">{section.title}</h2>
                <ul>
                  {section.Links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mt-3">
                      <Link
                        href={link.path}
                        className="text-[#FFFFFFCC] text-sm font-medium capitalize"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
          <div className="flex flex-col">
            <h4 className="text-white font-bold">Join the Community</h4>
            <div className="flex items-center mt-3">
              <input
                type="text"
                className="border border-[#FFFFFF33] rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500 h-full bg-transparent"
                placeholder="Email"
              />
              <button className="bg-white text-black rounded-r-md py-[7px] px-3 h-full text-sm font-normal">
                Join now
              </button>
            </div>
            <p className="text-white font-normal font-sm mt-6">
              Copyright © 2024 Creatipp
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
