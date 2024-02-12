import CardWithImage from "../common/cardwithimage";
import Nina from "../../assets/Nina.png";
import TitleBanner from "../common/titlebanner";

const MockData = [
  {
    sectionTitle: "Popular creators",
    creators: [
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
    ],
  },
  {
    sectionTitle: "Trending creators",
    creators: [
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
    ],
  },
  {
    sectionTitle: "Creators in Tech",
    creators: [
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
      {
        name: "Nina Ernser",
        bio: "making amazing music everyday for everyone...",
        supporters: "1.3k",
        occupation: "Music",
        img: Nina,
      },
    ],
  },
];

const Creators = () => {
  return (
    <div className="container mx-auto mt-[-227px] flex flex-col gap-24 items-center">
      {MockData.map((section, index) => (
        <div key={index} className="px-6 py-12 rounded-[48px] bg-[#FFFFFF0D] mx-auto">
          <TitleBanner>{section.sectionTitle}</TitleBanner>
          <div className="flex gap-4 flex-wrap mt-4">
            {section.creators.map((creator, idx) => (
              <CardWithImage
                key={idx}
                creatorname={creator.name}
                bio={creator.bio}
                supporters={creator.supporters}
                occupation={creator.occupation}
                img={creator.img}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Creators;
