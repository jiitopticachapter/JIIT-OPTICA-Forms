import React from "react";
import MacOSDesign from "../pages/Designs/MacOSDesign";
import WhatsAppDesign from "../pages/Designs/WhatsappDesign";
import { useParams } from "react-router-dom";
import MainFormFieldsInfo from "../data/FormFieldsInfo.json";
import SampleFormFieldsInfo from "../data/SampleFormFieldsInfo.json";
import switchingForm from "../utils/FormType.js";

let FormFieldsInfo =
  switchingForm.type == "Main"
    ? MainFormFieldsInfo
    : SampleFormFieldsInfo["id"];

const Layout = () => {
  const { id } = useParams();

  if (switchingForm.type === "Main") {
    FormFieldsInfo = MainFormFieldsInfo[id] || {};
  }

  if (!MainFormFieldsInfo[id]) {
    return <h1>404 - Not Found</h1>;
  }

  let curr_time = MainFormFieldsInfo[id]?.deadline?.time;
  const deadlineDate = new Date(curr_time);
  const currentDate = new Date();
  // console.log("curr date: ", currentDate, " prev date: ", deadlineDate);

  if (currentDate > deadlineDate) {
    return (
      <h1 className="text-center text-3xl font-bold text-red-500 mt-10">
        Forms Closed
      </h1>
    );
  }

  return (
    <>
      <MacOSDesign FormFieldsInfo={FormFieldsInfo} />
    </>
  );
};

export default Layout;
