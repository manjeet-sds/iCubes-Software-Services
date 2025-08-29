import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-auto pt-20 pb-13 bg-white flex items-center justify-center px-4 mx-auto mt-5">
      <div className="max-w-md w-full text-center space-y-8 -mt-10">
        <div className="flex justify-center">
          <div className="rounded-full bg-[#00aeef] p-4">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black">Thank You!</h1>
          <p className="text-lg text-black leading-relaxed">
            Your submission has been received. We appreciate your interest and will get back to you soon.
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#00aeef] border border-[#00aeef] hover:bg-white hover:text-[#00aeef] text-white text-lg font-medium"
            style={{
              width: "240px",
              height: "60px",
              borderRadius: "100px",
              transform: "rotate(0deg)",
              opacity: 1,
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
