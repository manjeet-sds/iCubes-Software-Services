import ScrollAnimate from "../ReusableComponents/scrollAnimate";

const FromStartupstoSaaS = () => {
  const items = ["Business & Corporate", "e-Commerce & Retail", "Artificial Intelligence (AI)", "Education & e-Learning", "News & Media", "Job & Career", "Creative & Design", "Technology & SaaS", "Forums & Communities", "Health & Wellness", "Travel & Hospitality", "Government & Non-profit", "Events & Entertainment", "Personal & Blogs", "Finance & Crypto", "Gaming", "Landing Pages & Microsites", "Directory & Listings", "Email & Communication", "Security & Identity"];

  return (
    <div className="w-full bg-[#F6FBFF] py-12 px-4 md:px-10 text-center mt-20">
      <ScrollAnimate animationClass="animate__fadeInUp">
        <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-[650] text-[#000000] leading-tight mb-10 mt-2">
          From Startups to SaaS 
        </h2>
      </ScrollAnimate>

      <ScrollAnimate animationClass="animate__fadeInUp" delay={0.2}>
        <h3 className="text-[20px] lg:text-[35px] font-semibold text-[#000000] leading-tight mb-10 mt-2">
         These are the website categories we do
        </h3>
      </ScrollAnimate>

      <div className="mt-6 mb-5 flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <ScrollAnimate
            key={index}
            animationClass="animate__fadeInUp"
            delay={index * 0.05}
          >
            <button
              className="px-6 md:px-8 py-3 md:py-4 border border-[#187AC3] rounded-[20px] bg-white text-black text-[16px] md:text-[20px] lg:text-[24px] font-semibold"
            >
              {item}
            </button>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  );
};

export default FromStartupstoSaaS;
