import { useState } from "react";
import Modal from "../ReusableComponents/Modal.jsx";
import ScrollAnimate from "./scrollAnimate.jsx";

const ReadyCTA = ({
  bgColor = "#FFD930",
  textColor = "#000000",
  buttonColor = "#000000",
  buttonTextColor = "#FFFFFF",
  heading = "Ready to get started?",
  buttonText = "Start A Project",
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full py-12 md:py-16 md:h-[147px] flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <ScrollAnimate animationClass="animate__fadeInUp" delay={0.2}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
          <h2
            className="text-center md:text-left text-[24px] sm:text-[28px] md:text-[40px] font-semibold"
            style={{
              color: textColor,
              fontFamily: "Poppins",
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            {heading}
          </h2>

          <button
           className="flex justify-center items-center rounded-2xl 
           text-[14px] sm:text-[16px] md:text-[22px] font-semibold shadow-md cursor-pointer
           w-[240px] h-[60px] transition-all duration-300 ease-in-out border"

            style={{
              backgroundColor: isHovered ? "#FFFFFF" : buttonColor,
              color: isHovered ? "#000000" : buttonTextColor,
              borderColor: isHovered ? "#000000" : buttonColor,
              fontFamily: "Poppins",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
            onClick={() => setShowModal(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {buttonText}
          </button>
        </div>
      </ScrollAnimate>

      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default ReadyCTA;
