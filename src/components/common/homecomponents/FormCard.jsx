import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { useNavigate } from "react-router-dom";

const FormCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const response = await fetch("https://icubessoftwaresservices.sdssoftltd.co.uk/mail/mail.php", {
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
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();

      if (result.success) {
        reset();
        navigate("/thank-you");
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  }

  return (
    <div className="bg-white border border-[#D6D6D6] w-full lg:w-[460px] p-6 sm:p-8 rounded-[18px]">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
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
              message: "Only letters, spaces, and apostrophes are allowed",
            },
          }}
          error={errors["name"]}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <CustomInput
            type="email"
            placeholder="Work Email*"
            name="work_email"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
              minLength: { value: 4, message: "Email is too short" },
              maxLength: { value: 30, message: "Email is too long" },
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
                if (hasInvalidChars)
                  return "Only digits, '+', '-', and spaces are allowed";
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
          validation={{
            required: "Start time is required",
            minLength: {
              value: 1,
              message: "Add Days, Weeks or Months in text",
            },
          }}
          error={errors["timeline"]}
        />

        <CustomInput
          type="textarea"
          label="Share your requirements*"
          placeholder="(You can also add links to your shareable materials if any)"
          name="requirements"
          register={register}
          validation={{
            required: "Requirement is required",
          }}
          error={errors["requirements"]}
          classNames="resize-y"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer lg:w-[386px] lg:h-[48px] w-full bg-[#00AEEF] text-white font-semibold py-2 px-4 rounded-2xl border border-[#00AEEF] hover:bg-white hover:text-[#00AEEF] transition-colors duration-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
