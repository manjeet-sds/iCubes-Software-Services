const WorkStepCard = ({ image, heading, content }) => {
  return (
    <div
      className="relative w-[90%]  sm:w-[250px] sm:h-[290px] md:w-[290px] md:h-[262px] bg-white mt-20 lg:mt-10 rounded-[20px] border border-[#D9D9D9] flex-shrink-0 flex flex-col items-start text-left px-4 pb-1 sm:px-5 md:px-6 pt-10 sm:pt-11 md:pt-12 overflow-visible mb-2 mx-auto lg:max-w-[900px] xl:max-w-max"
      style={{ boxShadow: "0px 4px 4px 0px #0000000D" }}
    >
      <div className="absolute -top-8 right-5 sm:right-6 md:right-7 w-16 h-16 sm:w-20 sm:h-20 bg-[#00aeef] rounded-full flex items-center justify-center z-10 shadow-md">
        <img
          src={image}
          alt={heading}
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        />
      </div>

      <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#222222] mb-2">
        {heading}
      </h3>
      <p className="text-[#212121] text-[14px] leading-[24px] tracking-[0] font-medium pb-3 p-0.5">
        {content}
      </p>
    </div>
  );
};

export default WorkStepCard;
