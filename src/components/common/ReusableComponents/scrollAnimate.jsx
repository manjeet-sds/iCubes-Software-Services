// ScrollAnimate.jsx
import { useEffect, useRef, useState } from "react";

const ScrollAnimate = ({ children, animationClass = "animate__fadeInUp", delay = 0 }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate__animated ${inView ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
