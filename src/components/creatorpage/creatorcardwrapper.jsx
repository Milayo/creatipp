const CreatorCardWrapper = ({ children }) => {
  return (
    <div className="p-4 border border-[#FFFFFF1A]  rounded-3xl flex-1 bg-gradient-to-br from-[#FFFFFF14] to-[#FFFFFF14] bg-black min-w-80">
      {children}
    </div>
  );
};

export default CreatorCardWrapper;
