const StatsCard = ({
  image,
  number,
  label,
  borderColor = "#EC7408",
  numberColor = "#EC7408",
}) => {
  return (
    <div
      className="bg-white px-4 sm:px-6 md:px-3 lg:px-1 py-5 lg:py-3 rounded-[30px]
  xl:pl-10 flex justify-between items-center space-x-3 sm:space-x-4 md:space-x-4 lg:space-x-2 border w-[280px] sm:w-full  lg:w-[480px] xl:w-[603px] h-[160px] sm:h-[180px] md:h-[190px] lg:h-[203px]"
      style={{ borderColor }}
    >
      <img
        src={image}
        alt={label}
        className="w-[70px] sm:w-[90px] md:w-[100px] xl:w-[128px]"
      />
      <div className="md:w-[73%]">
        <h3
          className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[80px] font-bold"
          style={{ color: numberColor }}
        >
          {number}
        </h3>
        <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[30px] font-semibold text-[#222222] mt-1 sm:mt-1.5 md:mb-3">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
