import React from "react";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  validation,
  error
}) => {
  return (
    <div className="space-y-[6px] w-full">
      {label && (
        <label
          className="block text-[16px] font-normal sm:font-medium sm:text-[16px] sm:leading-[140%] sm:tracking-[0] align-middle text-[#222222]"
        >
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          rows={2}
          placeholder={placeholder}
          {...register(name, validation)}
          className={`block w-full px-4 py-2 border border-[#D6D6D6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#00aeef] placeholder-[#ACACAC] resize-y allow-recording`}
          style={{
            fontSize: "13px",
            fontWeight: 400,
          }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
          className={`block w-full px-4 py-2 border border-[#D6D6D6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#00aeef] placeholder-[#ACACAC] allow-recording`}
          style={{
            fontSize: "13px",
            fontWeight: 400,
          }}
        />
      )}

      {error && <p className="text-red-600 text-xs mt-0.5">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
