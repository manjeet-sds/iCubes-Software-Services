import React from "react";
import ScrollAnimate from "../ReusableComponents/scrollAnimate.jsx";

const ServiceCard = ({ icon, title, description }) => {
 return (
    <div className="relative bg-white shadow-md rounded-2xl overflow-hidden transition-all duration-300 sm:w-[321px] max-w-[321px] h-[400px] flex flex-col hover:-translate-y-2 hover:shadow-2xl group">
      {/* Top Image */}
      <img
        src={icon}
        alt={title}
        className="sm:w-[321px] h-[175px] object-cover rounded-t-2xl"
      />

      {/* Card Content */}
      <div className="p-6 text-left flex flex-col flex-grow">
        <div className="h-[66px] w-[250px] flex items-center">
          <h3 className="text-[24px] font-semibold mb-3 relative ">
            {title}
            {/* Animated underline */}
            {/* <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#00aeef] transition-all duration-300 group-hover:w-full"></span> */}
          </h3>
        </div>

        <p className="text-gray-600 text-sm font-medium leading-6 tracking-normal flex-grow overflow-hidden mb-2 ">
          {description}
        </p>
       
      </div>
       

      {/* Subtle gradient glow border effect
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#00aeef] to-[#00c6ff] opacity-30"></div>
      </div> */}
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      icon: "/images/programming.jpg",
      title: "Web Design & Development",
      description:
        "Beautifully designed, technically flawless. From corporate portals to e-commerce platforms we build websites that are fast, responsive, and optimized to turn visitors into customers.",
    },
    {
      icon: "/images/mobile.jpg",
      title: "Mobile App Design & Development",
      description:
        "From startup ideas to enterprise solutions,we design and develop mobile apps that combine sleek UX with robust performance — built to engage users and scale with demand.",
    },
    {
      icon: "/images/ai.jpg",
      title: "AI Web Development",
      description:
        "Integrate the future into your platforms. Our AI-driven web solutions deliver smarter personalization and predictive capabilities.",
    },
  ];

  return (
    <div className="bg-[#00aeef] py-12 px-6 w-[90%] mx-auto rounded-[30px] mt-15">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimate animationClass="animate__fadeInDown">
          <h2 className="text-[40px] md:text-[50px] font-bold text-white text-center mb-10">
            Our Services
          </h2>
        </ScrollAnimate>

        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-10 lg:gap-20 xl:gap-12 2xl:gap-20">
          {services.map((service, index) => (
            <ScrollAnimate
              key={index}
              animationClass="animate__fadeInUp"
              delay={index * 0.2}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;