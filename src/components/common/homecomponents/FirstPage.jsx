import React, { useState } from "react";
import FormCard from "./FormCard.jsx";
import Modal from "../ReusableComponents/Modal.jsx";
import whatappIcon from "../../../assets/whatapp.svg";

const FirstPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full px-4  xl:px-18 sm:px-10 pt-2 pb-8 mt-5 lg:mt-0 flex justify-center items-center">
      <div className="w-full  flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="leading-20 mb-2 animate__animated animate__fadeInDown">
             <div className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[60px] text-[#222222] font-semibold leading-tight">
              iCubes Software Services
            </div>
          
          </h1>

          <p className="text-[15px] sm:text-[18px] sm:tracking-[0] text-[#212121] max-w-[720px] mx-auto lg:mx-0 mb-6 font-medium animate__animated animate__fadeIn animate__delay-1s">
            First impressions are very important. Your website is your 1st
            communication channel. We blend style & technology to deliver
            cutting-edge websites that are beautiful, unique and perform equally
            well to give life to your business.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="text-white bg-[#00AEEF] border border-[#00AEEF] cursor-pointer px-6 py-3 rounded-2xl  text-base font-semibold w-[200px] sm:w-[240px] h-[50px] sm:h-[60px] text-[18px] sm:text-[20px]  hover:bg-white hover:text-[#00AEEF] transition-colors duration-300"
          >
            Get Started Now
          </button>
        </div>

        {/* Right Section: FormCard with animation */}
        <div className="w-full lg:w-[440px] h-auto flex justify-center lg:justify-end mt-10 lg:mt-0 animate__animated animate__fadeInRight animate__delay-1s">
          <FormCard />
        </div>
      </div>

      {/* WhatsApp Floating Button
      <a
        href="https://wa.me/447908776075"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${showModal ? "opacity-30 pointer-events-none" : "opacity-100"
          }`}
      >
        <img
          src={whatappIcon}
          alt="WhatsApp"
          className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] drop-shadow-lg hover:animate__animated hover:animate__bounce"
        />
      </a> */}

      {/* Modal */}
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default FirstPage;
