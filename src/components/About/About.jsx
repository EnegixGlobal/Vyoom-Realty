import React from "react";
import Img1 from "../../assets/Test/Img1.jpg";
import Img2 from "../../assets/Test/Img2.png";
import Men1 from "../../assets/Test/Men1.jpg";
import Men2 from "../../assets/Test/Men2.jpg";
import Men3 from "../../assets/Test/Men3.jpg";
import Png1 from "../../assets/Test/Png1.png";
import Png2 from "../../assets/Test/Png2.png";
import Png3 from "../../assets/Test/Png3.png";
import Png4 from "../../assets/Test/Png4.png";
import Banner from "../../assets/Test/Banner.jpg";

export const About = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* ------------------- Banner Section ------------------- */}
      <section className="relative w-full h-[60vh] md:h-[75vh]">
        <img
          src={Banner}
          alt="Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/70 flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-32">
          <h1 className="text-white font-['Martel',serif] text-3xl sm:text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
            Designing Spaces That Inspire
          </h1>
          <p className="text-white font-['Manrope'] mt-4 max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
            We believe in creating architecture that blends innovation,
            sustainability, and timeless elegance.
          </p>
        </div>
      </section>

      {/* ------------------- About Section ------------------- */}
      <section className="py-16 md:py-24 px-6 sm:px-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6 px-2 sm:px-4 md:px-6">
            <h2 className="text-[#c1975a] font-['Martel',serif] font-extrabold text-xl sm:text-2xl md:text-3xl tracking-[5px] uppercase text-center md:text-left">
              ABOUT VYOOM
            </h2>

            <h3 className="text-[#0c141c] font-['Martel',serif] font-bold text-[40px] sm:text-[50px] md:text-[64px] leading-[50px] sm:leading-[60px] md:leading-[72px] tracking-[1px] text-center md:text-left">
              Where Vision <br />
              Meets Design
            </h3>

            <p className="text-[#0c141c] font-['Manrope'] text-sm sm:text-base md:text-[17px] leading-[28px] md:leading-[32px] tracking-[0.5px] max-w-[500px] text-center md:text-left mx-auto md:mx-0">
              At Vyoom, architecture is more than just design — it’s a way to
              connect people, places, and possibilities. Our spaces are crafted
              with creativity, precision, and purpose to redefine modern living.
            </p>
          </div>

          {/* Right Image */}
          <div className="px-2 sm:px-4 md:px-6">
            <img
              src={Img1}
              alt="About"
              className="rounded-xl w-full object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ------------------- Vision & Core Values Section ------------------- */}
      <section className="py-20 px-6 sm:px-10 md:px-24 flex flex-col md:flex-row items-stretch justify-between gap-10">
        {/* Left: Vision & Mission */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="text-[#c1975a] font-['Martel',serif] font-extrabold text-xl sm:text-2xl tracking-[2px] mb-6 text-center md:text-left">
            OUR VISION & MISSION
          </h2>
          <img
            src={Img2}
            alt="Vision"
            className="rounded-xl w-full object-cover shadow-md mb-6"
          />
          <p className="text-[#0c141c] font-['Manrope'] text-sm sm:text-base leading-[28px] tracking-[0.5px] text-center md:text-left">
            To redefine modern living through innovative architecture that
            harmonizes with nature, technology, and human experience. We strive
            to create meaningful spaces that reflect sustainability, creativity,
            and human connection.
          </p>
        </div>

        {/* Right: Core Values */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="text-[#c1975a] font-['Martel',serif] font-extrabold text-xl sm:text-2xl tracking-[2px] mb-8 text-center md:text-left">
            OUR CORE VALUES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 h-full">
            {[Png1, Png2, Png3, Png4].map((icon, i) => (
              <div
                key={i}
                className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
              >
                <img
                  src={icon}
                  alt={`Value-${i}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                  loading="lazy"
                />
                <h3 className="font-['Martel',serif] font-extrabold text-lg sm:text-xl text-[#0c141c] mb-2">
                  INNOVATION
                </h3>
                <p className="font-['Manrope'] text-[#0c141c] text-sm sm:text-[15px] leading-6">
                  Pushing creative boundaries to redefine architectural
                  possibilities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- Our Team Section ------------------- */}
      <section className="py-20 px-6 sm:px-10 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-[#c1975a] font-['Martel',serif] font-extrabold text-xl sm:text-2xl tracking-[5px] uppercase">
            OUR TEAM
          </h2>
          <h3 className="text-[#0c141c] font-['Martel',serif] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Meet the Minds Behind Vyoom
          </h3>
          <p className="text-[#0c141c] font-['Manrope'] text-sm sm:text-base leading-[28px] max-w-md mx-auto md:mx-0">
            Our team of visionary architects and designers work together to
            shape innovative, functional, and beautiful spaces that redefine
            modern living.
          </p>
        </div>

        {/* Right: Team Members */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-8 sm:gap-10">
          {[
            { name: "Rahul Mehta", img: Men1 },
            { name: "Sneha Kapoor", img: Men2 },
            { name: "Alyan Patel", img: Men3 },
          ].map((person, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-[120px] sm:w-[140px]"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full shadow-md mb-3"
                loading="lazy"
              />
              <h4 className="font-['Martel',serif] font-extrabold text-base sm:text-lg text-[#0c141c] text-center">
                {person.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
