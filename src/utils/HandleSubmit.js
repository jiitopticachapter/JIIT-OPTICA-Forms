import React, { useState } from "react";
// import Data from "./Data.js";
import FormFieldsInfo from "./../data/FormFieldsInfo.json";
import { Errors } from "./ValidateError";
import { toast } from "react-hot-toast";
import switchingForm from "./FormType";

const HandleSubmit = async (
  event,
  validateField,
  id,
  setFormStatus,
  setLoader
) => {
  event.preventDefault();
  console.log("handle submit");

  // setNotification("");
  // setShowAlert(false);

  const formData = new FormData(event.target);
  let data = {};
  let formIsValid = true;
  console.log("checking... ", FormFieldsInfo);

  {
    FormFieldsInfo[id]?.formInfo?.map((field, index) => {
      let value = null;

      let isFile = null;

      if (field.type === "file") {
        const fileInput = formData.get(field.name);
        // value = fileInput && fileInput.files ? fileInput.files[0] : null;
        value = formData.get(field.name);
        // isFile = fileInput.type;
        data[field.name] = value;
        console.log(field.name, " ", value);
      } else if (field.type === "dropdown") {
        field.dropdownNames.forEach((name, index) => {
          value = formData.get(name);
          if (value === field.dropdownConfig[index].options[0]) {
            value = "";
            validateField(
              field.heading,
              name,
              value,
              field.errorMsg,
              field.required
            );
            formIsValid = false;
          } else {
            data[name] = value;
          }
          console.log(`${name}: ${value}`);
        });
      } else {
        value = formData.get(field.name);
        console.log(field.name, " ", value);
        data[field.name] = value;
      }

      if (field.required && field.type != "dropdown") {
        validateField(
          field.heading,
          field.name,
          value,
          field.errorMsg,
          field.required,
          field?.regex,
          field?.allowedFileTypes
        );
      }

      if (Errors[field.name]) {
        formIsValid = false;
      }
    });
  }

  if (!formIsValid) {
    toast.error("Please fill all required fields.");
    // setNotification("Please correct the errors in the form.");
    // alert("all filed required");
    console.log("error is: ", Errors);
    return;
  }

  data = {
    ...data,
    sheetNo: FormFieldsInfo[id]?.sheetNo,
    eventName: FormFieldsInfo[id]?.headerInfo?.heading,
    eventDate: FormFieldsInfo[id]?.deadline?.time,
    eventId: id,
  };

  console.log("data is: ", data);
  // return;
  setLoader(true);

  try {
    if (switchingForm.type === "Main") {
      const response = await fetch(`${import.meta.env.VITE_APP_SCRIPT_URI}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "no-cors",
      });
    }

    // console.log(response);

    // const result = await response;
    // console.log("result is: ", result);
    // if (result.status === "success") {
    // window.location.href = "/form-submitted"; // Redirect on success
    // } else {
    //   alert("Error submitting form. Please check all fields.");
    // }
    setFormStatus(false);
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form", error);
    alert("There is an issue while submitting the form. Please try again.");
  } finally {
    // setLoading(false);
    setLoader(false);
  }
};

export default HandleSubmit;
