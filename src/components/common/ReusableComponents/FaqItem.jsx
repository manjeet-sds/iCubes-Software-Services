import { useState } from "react";
import plus from "../../../assets/plus.svg";
import minus from "../../../assets/minus.svg";

const FAQItem = ({ question, answer, isLast }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`py-4 w-full ${isLast ? "" : "border-b-[3px] border-white"}`}>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[30px] sm:leading-[42px] md:leading-[56px] lg:text-[24px] lg:leading-[56px] lg:tracking-[0%] pr-12">
          {question}
        </span>

        <img
          src={open ? minus : plus}
          alt={open ? "Collapse" : "Expand"}
          className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px] mr-2 sm:mr-4 md:mr-6 transition-transform duration-300 ease-in-out"
        />
      </div>

      {open && (
        <p className="text-white mt-3 font-[400] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:text-[20px] lg:leading-[32px]">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
