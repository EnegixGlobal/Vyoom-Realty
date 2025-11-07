import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import VideoThumb from "../../assets/Contact/alexander.jpg";
import Cart1 from "../../assets/Contact/card1.png";
import Cart2 from "../../assets/Contact/card2.png";
import Cart3 from "../../assets/Contact/card3.png";
import Cart4 from "../../assets/Contact/card4.png";
import Vd from "../../assets/Contact/Vd.mp4";

const FirSection = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="w-full container mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-[606px] h-[360px] sm:h-[420px] md:h-[560px] relative overflow-hidden shadow-lg flex items-center">
            <video
              src={Vd}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Text + Form */}
          <div className="w-full md:flex-1 h-auto md:h-[560px] flex flex-col justify-center px-4 sm:px-6 md:px-8 py-8 md:py-10 bg-white">
            <h2 className="font-['Martel',serif] text-[32px] sm:text-[38px] md:text-[46px] font-bold tracking-[1px] leading-[40px] sm:leading-[50px] md:leading-[60px] text-[#0C141C] mb-4">
              Let&apos;s Build Something <br /> Remarkable Together
            </h2>

            <div className="flex-1 flex flex-col justify-center rounded-3xl shadow-[0_7px_35px_7px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_50px_12px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out p-[5%]">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
                Let&apos;s Get in Touch
              </h3>
              <p className="text-gray-600 text-base sm:text-[18px] tracking-[1px] sm:tracking-[2px] leading-[26px] sm:leading-[28px] mb-5">
                Let&apos;s bring your vision into life through innovative
                design.
              </p>

              <form className="space-y-3">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none w-full"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone No."
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none w-full"
                  />
                </div>

                {/* Message */}
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-yellow-600 focus:outline-none resize-none"
                ></textarea>

                {/* Button */}
                <button
                  type="submit"
                  className="w-1/2 bg-[#b58b49] text-white py-3 rounded-md hover:bg-[#a67a3c] transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 mt-8 sm:mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-10">
          {/* Left Side - Contact Card */}
          <div className="w-full md:w-[47%] h-auto md:h-[430px] flex items-center justify-center relative">
            <div
              className="w-full sm:w-[90%] bg-[#f7f7f7] rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.25)] overflow-clip p-[25px] sm:p-[33px] flex flex-col justify-center gap-6"
              style={{ willChange: "transform" }}
            >
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-[#c1975a] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                  <MapPin className="w-full h-full" />
                </span>
                <p className="text-base sm:text-[18px] md:text-[20px] font-normal leading-relaxed text-[#c1975a]">
                  #23, First Floor, Next to Sultan Travels, Sathgalli Circle,
                  Satellite Bus Stand, Ring Road, Mysuru – 570019, Karnataka,
                  India
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#c1975a] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                  <Mail className="w-full h-full" />
                </span>
                <p className="text-base sm:text-[18px] md:text-[20px] font-normal text-[#c1975a]">
                  vyoom.info@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#c1975a] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                  <Phone className="w-full h-full" />
                </span>
                <p className="text-base sm:text-[18px] md:text-[20px] font-normal text-[#c1975a]">
                  +91 93412 35607
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-[55%] h-[260px] sm:h-[340px] md:h-[430px] relative overflow-hidden flex items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29304.084253324083!2d85.27816907431638!3d23.351633000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="w-full px-4 md:px-8 lg:px-16 py-10">
        {/* 🔹 Heading */}
        <div className="mb-10 text-center">
          <h2 className="font-['Martel',serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] tracking-[1px] leading-[45px] sm:leading-[50px] md:leading-[55px] lg:leading-[60px] text-[#0C141C]">
            Why Connect With Us
          </h2>
        </div>

        {/* 🔹 Cards Section */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
          {/* 🔹 Card 1 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] h-[220px] bg-[#f7f7f7] rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-4 p-6">
            <img
              src={Cart1}
              alt="Building Icon"
              className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
              loading="lazy"
            />
            <p className="text-[#0C141C] text-center text-[14px] sm:text-[16px]">
              A passionate team of architects, planners, and interior experts.
            </p>
          </div>

          {/* 🔹 Card 2 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] h-[220px] bg-[#f7f7f7] rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-4 p-6">
            <img
              src={Cart2}
              alt="Interior Icon"
              className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
            />
            <p className="text-[#0C141C] text-center text-[14px] sm:text-[16px]">
              Designs that balance functionality, beauty, and sustainability.
            </p>
          </div>

          {/* 🔹 Card 3 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] h-[220px] bg-[#f7f7f7] rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-4 p-6">
            <img
              src={Cart3}
              alt="Plan Icon"
              className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
            />
            <p className="text-[#0C141C] text-center text-[14px] sm:text-[16px]">
              Transparent communication and timely project execution.
            </p>
          </div>

          {/* 🔹 Card 4 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] h-[220px] bg-[#f7f7f7] rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-4 p-6">
            <img
              src={Cart4}
              alt="Team Icon"
              className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
            />
            <p className="text-[#0C141C] text-center text-[14px] sm:text-[16px]">
              Deep understanding of architectural trends and client goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirSection;
