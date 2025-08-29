import React from "react";
import ReviewImage1 from "../../../assets/ReviewImage1.png";
import ReviewImage2 from "../../../assets/ReviewImage2.png";
import Google from "../../../assets/Google1.png";
import trustpilot from "../../../assets/trustpilot.svg";
import star from "../../../assets/star.png";
import Ahmad from "../../../assets/Ahmad.png";
import Ryan from "../../../assets/Ryan.png";
import CompanyReviewCard from "../ReusableComponents/CompanyReviewCard";
import ClientReviewCard from "../ReusableComponents/ClientReviewCard";
import ScrollAnimate from "../ReusableComponents/scrollAnimate";

const TopClientReview = () => {
  return (
    <div className="container mx-auto mt-16 sm:mt-23 mb-12 sm:mb-16 px-4 text-center">
      <ScrollAnimate animationClass="animate__fadeInDown">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12">
          TOP CLIENTS REVIEWS
        </h2>
      </ScrollAnimate>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-7 xl:gap-10 md:ml-2 xl:pl-0">
        {/* Left Section: Image + Cards + Circle */}
        <ScrollAnimate animationClass="animate__fadeInLeft">
          <div className="relative flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Orange Circles – hidden on small screens */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
              <div className="absolute w-[244px] h-[244px] bg-[#00aeef] opacity-30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-[142px] h-[142px] bg-[#00aeef] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Image Section */}
            <div className="flex flex-col gap-4 w-full md:pl-2 xl:pl-0 lg:w-[226px] z-10">
              <img
                src={ReviewImage1}
                alt="ReviewImage1"
                className="w-[226px] h-[201px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] object-cover"
              />
              <img
                src={ReviewImage2}
                alt="ReviewImage2"
                className="w-[226px] h-[173px] transform scale-x-[-1] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] object-cover"
              />
            </div>

            {/* Rating Cards */}
            <div className="flex flex-col justify-center gap-4 z-10 lg:mt-17 md:mt-22.5">
              <CompanyReviewCard
                rating="4.8"
                totalReviews="241"
                platformLogo={Google}
                filledStars={5}
              />
              <div className="bg-white w-full min-w-[210px] max-w-[231px] h-auto rounded-[20px] border border-[#D9D9D9] shadow-md px-4 py-3 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[52px] font-bold leading-none">
                    4.1
                  </div>
                  <div className="text-right leading-none">
                    <div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-semibold pr-2 sm:pr-3 md:pr-4.5">
                      124
                    </div>
                    <div className="text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-500">
                      Reviews
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-auto pt-4 mb-2">
                  <img
                    src={trustpilot}
                    alt="platform"
                    className="w-[60px] sm:w-[70px] md:w-[70px] lg:w-[90px]"
                  />
                  <div className="flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={star}
                        alt="star"
                        className={`w-[12px] sm:w-[12px] md:w-[14px] lg:w-[15px] xl:w-[16px] h-[12px] sm:h-[14px] md:h-[14px] lg:h-[15px] xl:h-[16px] opacity-100 `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Client Review Cards */}
        <ScrollAnimate animationClass="animate__fadeInUp" delay={0.3}>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 xl:gap-8 mt-6 lg:mt-0">
            <ClientReviewCard
              image={Ryan}
              name="Yann Djo Bi"
              reviewText="Great Team to work with they were easy to work with, and willing to work with the budget and deliver outstanding results. Will recommend them."
              filledStars={5}
            />
            <ClientReviewCard
              image={Ahmad}
              name="Richard Sherman"
              reviewText="Wonderful experience! Very skilled team and very responsive to all questions."
              filledStars={5}
            />
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default TopClientReview;
