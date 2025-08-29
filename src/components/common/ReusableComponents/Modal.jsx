import React, { useEffect, useState } from "react";
import CustomInput from "../homecomponents/CustomInput";
import xicon from "../../../assets/xicon.svg";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState(null);

  async function onSubmit(data) {
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://icubessoftwaresservices.sdssoftltd.co.uk/mail/mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            work_email: data.work_email,
            phone: data.phone,
            timeline: data.timeline,
            requirements: data.requirements,
          }),
        }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();

      if (result.success) {
        reset();
        navigate("/thank-you");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black/80 z-40" />
      <div className="fixed inset-0 z-50 flex justify-center items-center px-6 md:px-10">
        <div className="relative w-full max-w-[709px] bg-white rounded-[18px] p-4 sm:p-6 lg:p-10 flex flex-col gap-6 lg:gap-6 shadow-[0px_0px_6px_0px_#00000040]">
          <button
            onClick={closeModal}
            className="absolute top-0 right-1 translate-x-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 md:w-[75px] md:h-[75px] bg-[#00aeef] rounded-full flex items-center justify-center"
          >
            <img src={xicon} alt="Close" className="w-6 sm:w-[48px]" />
          </button>

          <h2 className="text-3xl md:text-[50px] font-bold text-center">
            GET IN TOUCH
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <CustomInput
              type="text"
              placeholder="Name*"
              name="name"
              register={register}
              validation={{
                required: "Name is required",
                minLength: { value: 2, message: "Name is too short" },
                maxLength: { value: 30, message: "Name is too long" },
                pattern: {
                  value: /^[A-Za-z\s']+$/,
                  message: "Only letters, spaces, and apostrophes allowed",
                },
              }}
              error={errors["name"]}
            />

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <CustomInput
                type="email"
                placeholder="Work Email*"
                name="work_email"
                register={register}
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                  minLength: { value: 4, message: "Too short" },
                  maxLength: { value: 30, message: "Too long" },
                }}
                error={errors["work_email"]}
              />
              <CustomInput
                type="text"
                placeholder="Phone Number*"
                name="phone"
                register={register}
                validation={{
                  required: "Phone number is required",
                  validate: (value) => {
                    const digitCount = (value.match(/\d/g) || []).length;
                    const hasInvalidChars = /[^0-9+\-\s]/.test(value);
                    const hasLetters = /[a-zA-Z]/.test(value);

                    if (hasLetters) return "Only numbers are allowed (no letters)";
                    if (hasInvalidChars) return "Only digits, '+', '-', and spaces are allowed";
                    if (digitCount > 16) return "Maximum 16 digits are allowed";
                    return true;
                  },
                }}
                error={errors["phone"]}
              />
            </div>

            <CustomInput
              type="text"
              placeholder="Within weeks"
              label="How soon do you want to start the project?*"
              name="timeline"
              register={register}
              validation={{ required: "Start time is required" }}
              error={errors["timeline"]}
            />

            <CustomInput
              type="textarea"
              label="Share your requirements*"
              placeholder="(You can add links to your shareable materials if any)"
              name="requirements"
              register={register}
              validation={{ required: "Requirement is required" }}
              error={errors["requirements"]}
              classNames="resize-y min-h-[80px]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`cursor-pointer text-[18px] w-full font-semibold py-2 px-4 rounded-[100px] border transition-colors duration-300 ${
                isSubmitting
                  ? "bg-[#00aeef] text-white opacity-50 cursor-not-allowed"
                  : "bg-[#00aeef] text-white border-[#00aeef] hover:bg-white hover:text-[#00aeef]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {submitStatus === "error" && (
            <div className="text-red-600 text-center mt-4">
              Sorry, there was an error sending your enquiry. Please try again.
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
