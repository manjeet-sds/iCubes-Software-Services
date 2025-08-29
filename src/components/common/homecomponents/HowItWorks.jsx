import design from "../../../assets/Design.png";
import development from "../../../assets/development.svg";
import monitor from "../../../assets/monitor.svg";
import planning from "../../../assets/Planning.png";
import ScrollAnimate from "../ReusableComponents/scrollAnimate.jsx";
import WorkStepCard from "../ReusableComponents/WorkStepCard.jsx";

const steps = [
  {
    heading: "Planning",
    image: planning,
    content:
      "After receiving your concept, we plan our first interaction with you. Our team members will get in touch with you to hear your interests, and who you want.",
  },
  {
    heading: "Design",
    image: design,
    content:
      "A quality and unique design are always coming up with the scope for further improvements. We will provide you with designs for your homepage and inner pages to give life to your business.",
  },
  {
    heading: "Development",
    image: development,
    content:
      "The layout of the design is then converted into a user-friendly website using the best and latest tools and technologies, and content management systems.",
  },
  {
    heading: "Testing",
    image: monitor,
    content:
      "We take all the necessary measures for testing the final product before delivering it to the client to make sure that there are absolutely no issues or bugs.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full mb-10">
      <div className="max-w-7xl mx-auto mt-15 text-center px-2 sm:px-6 md:px-12 lg:px-6 flex justify-center flex-col items-center">
           <ScrollAnimate animationClass="animate__fadeInDown">
        <h2 className="text-[50px] font-bold text-[#000000] mb-2">
          HOW IT WORKS?
        </h2>
    </ScrollAnimate>
     
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-6 md:gap-x-5 lg:gap-x-6 mt-8">
          {steps.map((step, index) => (
            <ScrollAnimate
              key={index}
              animationClass="animate__fadeInUp"
              delay={index * 0.2}
            >
              <WorkStepCard
                heading={step.heading}
                image={step.image}
                content={step.content}
              />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </div>
  );
};


export default HowItWorks;
