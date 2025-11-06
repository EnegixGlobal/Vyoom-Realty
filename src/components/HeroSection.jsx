import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-start h-screen text-white px-8 md:px-20 z-20">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Empowering <br />
        Communities, <br />
        Transforming Lives
      </h1>

      <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
        Karnataka Community Development Foundation <br />
        Empowering People Towards Sustainable Development, <br />
        Financial Independence & Social Empowerment.
      </p>

      <button className="bg-[#c1975a] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#b18646] transition">
        Join Us Today
      </button>
    </div>
  );
};

export default HeroSection;
