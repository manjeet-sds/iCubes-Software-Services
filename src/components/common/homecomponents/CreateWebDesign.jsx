import ScrollAnimate from "../ReusableComponents/scrollAnimate";

const CreateWebDesign = () => {
  const items = ["React js Developer", "Node.js Developer", "Next.js Developer", "Nuxt.js Developer", "PHP Developer", "Laravel Developer", "Python Developer", "AI Integration", "HTML/CSS Developer", "WordPress Developer", "Shopify Developer", "Android Developer", "iOS Developer", "Web Designer", "Logo Designer"];

  return (
    <div className="w-full bg-[#F6FBFF] py-12 px-4 md:px-10 text-center mt-20">
      <ScrollAnimate animationClass="animate__fadeInUp">
        <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-[650] text-[#000000] leading-tight mb-10 mt-2">
          CREATE UNLIMITED WEB DESIGN <br className="hidden md:block" />
          PROJECTS EVERY MONTH
        </h2>
      </ScrollAnimate>

      <ScrollAnimate animationClass="animate__fadeInUp" delay={0.2}>
        <h3 className="text-[20px] lg:text-[35px] font-semibold text-[#000000] leading-tight mb-10 mt-2">
          Hire one of our developers
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
              className="px-6 md:px-8 py-3 md:py-4 border border-[#00aeef] rounded-[20px] bg-white text-black text-[16px] md:text-[20px] lg:text-[24px] font-semibold"
            >
              {item}
            </button>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  );
};

export default CreateWebDesign;
