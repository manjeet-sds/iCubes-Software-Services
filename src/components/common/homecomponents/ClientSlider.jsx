import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import icon1 from "../../../assets/icon1.jpg";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
// import icon4 from "../../../assets/icon4.svg";
// import icon5 from "../../../assets/icon5.svg";
// import icon6 from "../../../assets/icon6.png";
import icon7 from "../../../assets/icon7.png";
import icon8 from "../../../assets/icon8.png";
import icon9 from "../../../assets/icon9.png";
import img10 from "../../../assets/10.png";
import img11 from "../../../assets/11-2.png";
import img12 from "../../../assets/12-2.png";
import img13 from "../../../assets/13-2.png";
import img14 from "../../../assets/14.png";
import img16 from "../../../assets/16.png";
import img17 from "../../../assets/17.png";
import img18 from "../../../assets/18.png";
import img19 from "../../../assets/19.png";
import img21 from "../../../assets/21.png";
import backflipgymnastics from "../../../assets/backflipgymnastics.png";
import leisuresec from "../../../assets/leisuresec.png";

const clientImages = [
  icon1,
  icon2,
  icon3,
  backflipgymnastics,
  leisuresec,
  icon7,
  icon9,
  icon8,
  img10,
  img11,
  img12,
  img13,
  img14,
 
  img16,
  img17,
  img18,
  img19,

  img21,
];

const ClientSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    clientImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="mt-16 px-2 sm:px-1 w-full">
      <h2 className="text-left text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-semibold text-black mb-8 ml-14">
        Our prestigious clients
      </h2>

      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        speed={700}
        cssEase="ease-in-out"
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2500}
        arrows={false}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 640, settings: { slidesToShow: 2 } },
        ]}
      >
      {clientImages.map((icon, index) => (
  <div key={index} className="px-2">
    <div className="h-[60px] flex justify-center items-center rounded-xl overflow-hidden">
      <img
        src={icon}
        alt={`Client logo ${index + 1}`}
       className={`object-contain transition-opacity duration-500 opacity-0 ${
  icon === img10
    ? "h-[40px]"
    : icon === img11
    ? "h-[100px]"
    : icon === img13
    ? "h-[67px]"
    : "max-h-full"
} max-w-full`}

        loading="eager"
        decoding="async"
        onLoad={(e) => {
          e.target.style.opacity = "1";
        }}
      />
    </div>
  </div>
))}

      </Slider>

    {/* <div className="flex justify-center items-center gap-4 mt-6">
  <button
    onClick={() => sliderRef.current?.slickPrev()}
    className="hover:scale-110 transition"
    aria-label="Previous"
  >
    <span className="text-3xl md:text-5xl text-[#187AC3] font-bold leading-none">&#8592;</span>
  </button>
  <button
    onClick={() => sliderRef.current?.slickNext()}
    className="hover:scale-110 transition"
    aria-label="Next"
  >
    <span className="text-3xl md:text-5xl text-[#187AC3] font-bold leading-none">&#8594;</span>
  </button>
</div> */}

    </div>
  );
};

export default ClientSlider;