import React, { useState } from "react";

// const allowedFileTypes = ["image/png", "image/jpeg", "application/pdf"];
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const mobileRegex = /^[0-9]{10}$/;

let Errors = {};
const useError = () => {
  const [error, setError] = useState({});

  const validateField = (
    heading,
    name,
    value,
    errorMsg,
    required,
    regex,
    allowedFileTypes
  ) => {
    if (typeof regex === "string") {
      regex = new RegExp(regex);
    }
    console.log("validate field called");
    console.log("errors are: ", Errors);

    // Required field check

    if (required && !value) {
      console.log("called for: ", heading);
      const newError = errorMsg || `${heading} is required.`;
      setError((prevData) => ({
        ...prevData,
        [name]: newError,
      }));
      Errors[name] = newError;
    }
    // Regex validation (for email, mobile, etc.)
    else if (required && regex && heading && !regex.test(value)) {
      if (!regex.test(value)) {
        const newError = `${heading} is not correct.`;
        setError((prevData) => ({
          ...prevData,
          [name]: newError,
        }));
        Errors[name] = newError;
      }
    }
    // File format validation
    else if (
      allowedFileTypes &&
      value &&
      value.type &&
      !allowedFileTypes.includes(value.type)
    ) {
      let newError = `Uploaded file is not in a valid format.`;
      if (value.name == "") newError = errorMsg;
      setError((prevData) => ({
        ...prevData,
        [name]: newError,
      }));
      Errors[name] = newError;
    }
    // Clear error if validation passes
    else {
      setError((prevData) => {
        const newData = { ...prevData };
        delete newData[name];
        return newData;
      });
      if (Errors[name]) {
        delete Errors[name]; // Remove from Errors object
      }
    }
  };

  return { error, validateField };
};

export default useError;
export { Errors };
