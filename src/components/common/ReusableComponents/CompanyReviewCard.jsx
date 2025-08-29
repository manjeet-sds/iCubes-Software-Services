import React from "react";
import star from "../../../assets/star.png";

const CompanyReviewCard = ({
  rating,
  totalReviews,
  platformLogo,
  filledStars,
}) => {
  return (
    <div className="bg-white w-full min-w-[210px] max-w-[231px] h-auto rounded-[20px] border border-[#D9D9D9] shadow-md px-4 py-3 flex flex-col justify-between">
      {/* Top Section: Rating and Review Count */}
      <div className="flex justify-between items-start">
        <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[52px] font-bold leading-none">
          {rating}
        </div>

        <div className="text-right leading-none">
          <div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-semibold pr-2 sm:pr-3 md:pr-4.5">
            {totalReviews}
          </div>
          <div className="text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-500">
            Reviews
          </div>
        </div>
      </div>

      {/* Bottom Section: Platform Logo and Stars */}
      <div className="flex justify-between items-end mt-auto pt-4 ">
        <img
          src={platformLogo}
          alt="platform"
          className="w-[60px] sm:w-[70px] md:w-[70px] lg:w-[90px]"
        />

        <div className="flex gap-[2px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={star}
              alt="star"
              className={`w-[12px] sm:w-[12px] md:w-[14px] lg:w-[15px] xl:w-[16px] h-[12px] sm:h-[14px] md:h-[14px] lg:h-[15px] xl:h-[16px] ${
                i >= filledStars ? "opacity-30" : "opacity-100 mb-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyReviewCard;
