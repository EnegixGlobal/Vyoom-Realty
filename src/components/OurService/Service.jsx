import React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Banner from "../../assets/Test/Banner.jpg";
import { Star } from "lucide-react";
import Bg1 from "../../assets/Services/Pg1.jpeg";
import Dec from "../../assets/Services/Dec.jpeg";
import Bg5 from "../../assets/Services/Bg5.jpeg";
import Frontal from "../../assets/Services/Frontal.jpeg";
import Bg4 from "../../assets/Services/Bg4.jpeg";
import Arch from "../../assets/Services/Arch.jpeg";
import Bg3 from "../../assets/Services/Bg3.jpeg";
import Bg2 from "../../assets/Services/Bg2.jpeg";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Home Owner",
    text: "As a small business owner, I needed something simple yet professional. Cartelle delivered beyond my expectations—highly recommend!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Interior Designer",
    text: "Cartelle is the perfect balance of style and functionality. The design is stunning, and the shopping experience feels seamless—my customers love it!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    text: "Cartelle made setting up my online store so easy! The design is sleek, and customization was a breeze. My customers love the new look!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Neha Gupta",
    role: "Architect",
    text: "Cartelle made setting up my online store so easy! The design is sleek, and customization was a breeze. My customers love the new look!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Service = () => {
  const baseVelocity = -80;
  const [x, setX] = React.useState(0);

  useAnimationFrame((t, delta) => {
    setX((prev) => (prev + (baseVelocity * delta) / 1000) % -1500);
  });

  const text = "Designs That Inspire, Spaces That Endure";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.35 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 40, filter: "blur(15px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* ------------------- Banner Section ------------------- */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={Banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-[#ffffff1a] flex flex-col items-center justify-between py-10 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20 lg:px-32 backdrop-blur-[2px]">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#d6b87c] text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-semibold tracking-[2px]"
          >
            Our Services
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 1, ease: "easeOut" } },
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["Crafting", "Spaces"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="text-[#f5f2eb] font-['Martel',serif] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
              {["That", "Tell", "a", "Story"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="text-[#f5f2eb] font-['Martel',serif] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#f0ede6] font-['Manrope'] text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-xl leading-relaxed mt-4 sm:mt-8"
          >
            Architecter is more than construction — it's storytelling through space.
          </motion.p>
        </div>
      </section>

      {/* ------------------- Completed Projects ------------------- */}
      <div className="mt-20 lg:mt-36 px-4 sm:px-8 md:px-12 lg:px-16 w-full container mx-auto flex flex-col lg:flex-row items-center justify-around gap-10">
        <div className="max-w-full sm:max-w-md md:max-w-lg lg:w-[494px]">
          <motion.p
            className="font-['Manrope'] text-lg sm:text-xl md:text-2xl font-extrabold tracking-[6px] text-[#c1975a]"
            initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Completed Projects
          </motion.p>
          <motion.h2
            className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#0C141C] font-['Martel',serif] mt-4 flex flex-wrap"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {words.map((wordText, index) => (
              <motion.span key={index} variants={word} className="mr-2 inline-block">
                {wordText}
              </motion.span>
            ))}
          </motion.h2>
          <p className="font-['Manrope'] text-sm sm:text-base tracking-[3px] text-[#0C141C] mt-3 leading-relaxed">
            These completed works reflect our commitment to timeless design, meticulous detail, and architectural excellence that stands the test of time.
          </p>
        </div>
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[494px] h-auto">
          <img src={Bg1} alt="Completed project" loading="lazy" className="w-full h-auto rounded-md" />
        </div>
      </div>

      {/* ------------------- Image Section ------------------- */}
      <div className="mt-12 sm:mt-16 w-full container mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 px-4 sm:px-10 font-['Aboreto'] uppercase">
        {[{ img: Frontal, name: "Vyoom Heights – Bangalore" },
          { img: Dec, name: "Casa Elevate – Ahmedabad" },
          { img: Bg5, name: "Serene Retreat – Goa" }].map((item, i) => (
          <div key={i} className="relative group w-full sm:w-[80%] md:w-[45%] lg:w-[376px] h-[300px] sm:h-[403px] overflow-hidden shadow-lg">
            <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-[60px] sm:h-[81px] bg-white/30 backdrop-blur-sm">
              <h3 className="text-black text-base sm:text-xl font-semibold tracking-wide text-center">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------- On-Going Projects ------------------- */}
      <div className="w-full bg-white mt-16 sm:mt-20 container mx-auto px-4 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col justify-center p-4 sm:p-6">
            <motion.p
              className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold tracking-[3px] text-[#c1975a]"
              initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              On-Going <p className="mt-2 sm:mt-5">Projects</p>
            </motion.p>
            <motion.h2
              className="font-['Martel'] mt-4 sm:mt-8 uppercase text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Shaping the Future, One Space at a Time.
            </motion.h2>
          </div>

          {[{ img: Bg3, title: "Skyline Residence", desc: "Modern luxury redefined through open spaces, natural light, and sustainable materials." },
            { img: Arch, title: "Horizon Corp Tower", desc: "A next-generation office tower integrating green design, flexibility, and modern aesthetics." }].map((item, i) => (
            <div key={i} className="relative h-[220px] sm:h-[267px] overflow-hidden shadow-md group">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 p-4">
                <h2 className="text-white text-lg sm:text-2xl font-bold mb-3 animate-slideUp">{item.title}</h2>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base animate-slideUp max-w-[85%]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[{ img: Bg2, title: "Urban Courtyard", desc: "A community-centered housing project featuring landscaped courtyards and sustainable planning." },
            { img: Bg4, title: "Nature’s Nest Villas", desc: "Eco-luxury villas set amidst greenery, blending modern comfort with vernacular design." }].map((item, i) => (
            <div key={i} className="relative h-[220px] sm:h-[267px] overflow-hidden shadow-md group">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 p-4">
                <h2 className="text-white text-lg sm:text-2xl font-bold mb-3 animate-slideUp">{item.title}</h2>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base animate-slideUp max-w-[85%]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------- Testimonials ------------------- */}
      <div className="relative mt-20 px-4 sm:px-10">
        <section className="relative bg-[#f9f9f9] py-10 px-4 sm:px-6 md:px-10 overflow-hidden max-w-[90%] mx-auto rounded-md">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Adamina'] text-[#111111] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 font-['akatab'] text-sm sm:text-base">
              Our clients trust <span className="font-semibold">Vyoom Realty</span> for turning visions into reality.
            </p>
          </div>

          <div className="overflow-hidden w-full">
            <motion.div className="flex gap-4" style={{ x }}>
              {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 border border-gray-200 flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[35%] h-auto min-h-[260px] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={18} className={`${index < t.rating ? "fill-black text-black" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold leading-relaxed mb-6">{t.text}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <img src={t.img} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-700">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
