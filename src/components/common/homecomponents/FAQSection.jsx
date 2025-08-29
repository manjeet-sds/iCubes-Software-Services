import FAQItem from "../ReusableComponents/FaqItem";
import ScrollAnimate from "../ReusableComponents/scrollAnimate";

const faqs = [
  {
    question: "Do you provide professional web designing services in nearby cities of the UK?",
    answer:
      "Yes, our web designing agency is based in the UK and provides customized website design solutions for different types of industries and businesses as well. From enhancing the user experience to building your website for leads, we have everything under one roof.",
  },
  {
    question: "I’m based in Birmingham - can you help me with the website development?",
    answer:
      "Yes, absolutely! We have a team of expert designers and developers that will provide you with tailored solutions for your business along with other digital marketing services like SEO as well.",
  },
  {
    question: "What type of websites do you build for your clients in Coventry?",
    answer:
      "Well, our aim is to provide you with the best website solutions. Our team is here to assist you in creating responsive, faster and websites with better UI. From corporate sites to e-commerce platforms, we are here for everyone.",
  },
  {
    question: "How can your Wolverhampton team help my business online?",
    answer:
      "Our website development agency in Wolverhampton is here to provide you with expert website solutions by making an ordinary platform faster, more reliable, and efficient with enhanced functionality. Our aim is not only to boost visibility but to drive customer engagement.",
  },
  {
    question: "Do you serve clients in Sheffield looking for professional websites?",
    answer:
      "Yes, we do work for clients based in Sheffield looking for experts that can help them to create a clean, modern and efficient platform. Not only that, our websites are backed by SEO and follow a holistic approach to provide the best for your users.",
  },
];

const FAQSection = () => {
  return (
    <div className="relative bg-[#187AC3] py-16 px-6 sm:px-12 md:px-24 text-white overflow-hidden">
      {/* Top-left decoration */}
      <div className="absolute top-[-30px] left-[-50px]">
        <div className="absolute rotate-[45deg] rounded-[10px] border-[1.5px] border-white z-10
                        w-[80px] h-[80px] top-[8px] left-[8px]
                        md:w-[120px] md:h-[120px] md:top-[20px] md:left-[20px] lg:w-[176px] lg:h-[176px]" />
        <div className="absolute rotate-[45deg] rounded-[10px] bg-[#0090E2] z-20
                        w-[78px] h-[78px] top-[0px] left-[10px]
                        lg:w-[174px] lg:h-[174px]  md:w-[118px] md:h-[118px] md:top-[0px] md:left-[22px]" />
      </div>

      {/* Right-mid decoration */}
      <div className="absolute top-[40%] right-[40px] md:right-[80px] lg:right-[120px] -translate-y-1/2">
        <div className="absolute rotate-[-45deg] rounded-[10px] border-[1.5px] border-white z-20
                        w-[80px] h-[80px] top-[4px] left-[10px]
                        md:w-[120px] md:h-[120px] md:top-[8px] md:left-[16px]
                        lg:w-[176px] lg:h-[176px] lg:top-[0px] lg:left-[25px]" />
        <div className="absolute rotate-[-45deg] rounded-[10px] bg-[#0090E2] z-10
                        w-[78px] h-[78px] top-[4px] left-[0px]
                        md:w-[118px] md:h-[118px] md:left-[0px]
                        lg:w-[174px] lg:h-[174px] lg:left-[0px]" />
      </div>

      {/* Heading */}
      <ScrollAnimate animationClass="animate__fadeInDown">
        <h2 className="text-[32px] sm:text-[40px] md:text-[45px] font-bold text-center mb-10">
          FAQs
        </h2>
      </ScrollAnimate>

      {/* FAQ Items */}
      <div className="space-y-6 pl-2 pr-14 mx-auto">
        {faqs.map((faq, idx) => (
          <ScrollAnimate
            key={idx}
            animationClass="animate__fadeInUp"
            delay={idx * 0.2}
          >
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isLast={idx === faqs.length - 1}
            />
          </ScrollAnimate>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
