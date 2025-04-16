import React from "react";
import MacOSDesign from "../pages/Designs/MacOSDesign";
import WhatsAppDesign from "../pages/Designs/WhatsappDesign";
import { useParams } from "react-router-dom";
import MainFormFieldsInfo from "../data/FormFieldsInfo.json";
import SampleFormFieldsInfo from "../data/SampleFormFieldsInfo.json";
import switchingForm from "../utils/FormType.js";
import FormClosed from "../pages/FormClosedPage/FormClosed.jsx";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import { useFormContext } from "../utils/FormContext.jsx";

let FormFieldsInfo =
  switchingForm.type == "Main"
    ? MainFormFieldsInfo
    : SampleFormFieldsInfo["id"];

const Layout = () => {
  const { id } = useParams();
  const { formStatus } = useFormContext();

  if (switchingForm.type === "Main") {
    FormFieldsInfo = MainFormFieldsInfo[id] || {};
  }

  if (!MainFormFieldsInfo[id]) {
    return <NotFound />;
  }

  let curr_time = MainFormFieldsInfo[id]?.deadline?.time;
  const deadlineDate = new Date(curr_time);
  const currentDate = new Date();
  // console.log("curr date: ", currentDate, " prev date: ", deadlineDate);

  if (currentDate > deadlineDate) {
    return <FormClosed />;
  }

  return (
    <>
      {formStatus ? (
        <MacOSDesign FormFieldsInfo={FormFieldsInfo} />
      ) : (
        <ConfirmPage />
      )}
    </>
  );
};

export default Layout;
