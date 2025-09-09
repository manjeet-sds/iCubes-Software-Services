import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
// import icon4 from "../assets/icon4.svg";
// import icon5 from "../assets/icon5.svg";
// import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import backflipgymnastics from "../assets/backflipgymnastics.png";
import leisuresec from "../assets/leisuresec.png";
import ProjectCompleted from "../assets/ProjectCompleted.png";
import ReturningClient from "../assets/ReturningClient.png";
import CreateWebDesign from "../components/common/homecomponents/CreateWebDesign";
import FAQSection from "../components/common/homecomponents/FAQSection";
import FirstPage from "../components/common/homecomponents/FirstPage";
import HowItWorks from "../components/common/homecomponents/HowItWorks";
import TopClientReview from "../components/common/homecomponents/TopClientReview";
import ReadyCTA from "../components/common/ReusableComponents/ReadyCTA";
import ScrollAnimate from "../components/common/ReusableComponents/scrollAnimate";
import StatsCard from "../components/common/ReusableComponents/StatsCard";
import FromStartupstoSaaS from "../components/common/homecomponents/FromStartupstoSaaS";
import ClientSlider from "../components/common/homecomponents/ClientSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useEffect } from "react";
import OurServices from "../components/common/homecomponents/OurServices";

const Home = () => {
  const clientImages = [
    icon1,
    icon2,
    icon3,
    backflipgymnastics,
    leisuresec,
    icon7,
    icon8,
    icon9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    clientImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative bg-white max-w-[1600px] mx-auto">
      <div>
        <FirstPage />
      </div>
      <ClientSlider/>
      <OurServices/>
{/* 
         <div className="mt-16 px-2 sm:px-1 w-full">
        <h2 className="text-left text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-semibold text-black mb-8 ml-14">
          Our Prestigious Clients
        </h2>
        <Slider
          ref={sliderRef}
          dots={false}
          infinite={true}
          speed={1100}
          slidesToShow={6}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5500}
          arrows={false}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
          ]}
        >
          {clientImages.map((icon, index) => (
            <div key={index}>
              <ScrollAnimate delay={index * 0.2}>
                <div className="h-[60px] flex justify-center items-center">
                  <img
                    src={icon}
                    alt={`Company logo ${index + 1}`}
                    className="max-w-[80%] max-h-full object-contain "
                  />
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-16 h-16 flex items-center justify-center rounded-full border border-white/60 bg-white/40 backdrop-blur-md transition-all duration-200 hover:scale-110"
            aria-label="Previous"
          >
            <span style={{ color: '#187AC3' }} className="text-5xl font-bold">&#8592;</span>
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-16 h-16 flex items-center justify-center rounded-full border border-white/60 bg-white/40 backdrop-blur-md transition-all duration-200 hover:scale-110"
            aria-label="Next"
          >
            <span style={{ color: '#187AC3' }} className="text-5xl font-bold">&#8594;</span>
          </button>
        </div>
      </div> */}


      <TopClientReview />
      <FromStartupstoSaaS />

      <ReadyCTA
        className="mt-20 pt-2"
        bgColor="#5AADDD"
        textColor="#fff"
        buttonColor="#000000"
        buttonTextColor="#FFFFFF"
        heading="Ready to get started?"
        buttonText="Start A Project"
      />

      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 px-1">
        <ScrollAnimate animationClass="animate__fadeInUp" delay={0.1}>
          <StatsCard
            image={ProjectCompleted}
            number="1000+"
            label="PROJECTS COMPLETED"
            borderColor="#00aeef"
            numberColor="#00aeef"
          />
        </ScrollAnimate>

        <ScrollAnimate animationClass="animate__fadeInUp" delay={0.3}>
          <StatsCard
            image={ReturningClient}
            number="95%"
            label="RETURNING CLIENTS"
            borderColor="#187AC3"
            numberColor="#187AC3"
          />
        </ScrollAnimate>
      </div>

      <CreateWebDesign />
      <HowItWorks />
      {/* <FAQSection /> is removed by company */}
      <ReadyCTA
        bgColor="#00aeef"
        textColor="#FFFFFF"
        buttonColor="#FFFFFF"
        buttonTextColor="#00aeef"
        heading="Ready to get started?"
        buttonText="Start A Project"
      />
    </section>
  );
};

export default Home;
