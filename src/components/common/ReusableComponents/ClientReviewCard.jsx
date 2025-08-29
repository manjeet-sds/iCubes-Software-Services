import React from "react";
import star from "../../../assets/star.png";
import quatationMark from "../../../assets/quatationMark.svg";

const ClientReviewCard = ({ image, name, reviewText, filledStars = 5 }) => {
  return (
    <div className="relative w-[280px] sm:w-[340px] sm:h-[410px] h-auto border border-[#D6D6D6] rounded-[20px] bg-white shadow-md p-6 flex flex-col">
      {/* Top Section: Profile + Quotation */}
      <div className="flex justify-between items-start">
        <div className="w-[100px] h-[100px] border-[2px] border-[#D6D6D6] rounded-full flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-[86px] h-[86px] rounded-full object-cover"
          />
        </div>
        <svg
          class="sm:w-[101px] sm:h-[76px] w-[80px] h-[60px]"
          viewBox="0 0 101 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M80.1448 75.4C73.1448 75.4 67.3448 73.1 62.7448 68.5C58.3448 63.9 56.1448 57.3 56.1448 48.7C56.1448 39.5 58.7448 30.4 63.9448 21.4C69.3448 12.4 76.8448 5.39999 86.4448 0.399981L93.3448 10.9C82.9448 18.1 76.7448 27.2 74.7448 38.2C76.5448 37.4 78.6448 37 81.0448 37C86.6448 37 91.2448 38.8 94.8448 42.4C98.4448 46 100.245 50.6 100.245 56.2C100.245 61.8 98.3448 66.4 94.5448 70C90.7448 73.6 85.9448 75.4 80.1448 75.4ZM24.9448 75.4C17.9448 75.4 12.1448 73.1 7.54483 68.5C3.14483 63.9 0.944825 57.3 0.944825 48.7C0.944825 39.5 3.54482 30.4 8.74482 21.4C14.1448 12.4 21.6448 5.39999 31.2448 0.399981L38.1448 10.9C27.7448 18.1 21.5448 27.2 19.5448 38.2C21.3448 37.4 23.4448 37 25.8448 37C31.4448 37 36.0448 38.8 39.6448 42.4C43.2448 46 45.0448 50.6 45.0448 56.2C45.0448 61.8 43.1448 66.4 39.3448 70C35.5448 73.6 30.7448 75.4 24.9448 75.4Z"
            fill="#00AEEF"
          />
        </svg>
      </div>

      {/* Review Text */}
      <div className="mt-4 mb-[70px] px-2">
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black font-[500] text-left">
          {reviewText}
        </p>
      </div>

      {/* Name & Stars - Pinned to Bottom Left */}
      <div className="absolute bottom-6 left-6">
        <p className="font-semibold text-[18px] sm:text-[20px] text-left">
          {name}
        </p>
        <div className="flex mt-1 gap-[2px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={star}
              alt="star"
              className={`w-[24px] h-[24px] ${
                i >= filledStars ? "opacity-30" : "opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
