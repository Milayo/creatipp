import HeartLogo from "../../assets/heartlogo";
import MusicIcon from "../../assets/musicicon";

const Icons = {
  Music: <MusicIcon />,
};

const Badge = ({ title }) => {
  return (
    <div className="rounded-3xl gap-1 flex items-center py-1 px-2 border border-[#FFFFFF1A] bg-[#FFFFFF1A]">
      {Icons[title] || <HeartLogo />}
      <p className="text-sm font-medium text-[#FFFFFFCC]">{title}</p>
    </div>
  );
};

export default Badge;
