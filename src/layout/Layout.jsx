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

  return (
    <>
      <MacOSDesign FormFieldsInfo={FormFieldsInfo} />
    </>
  );
};

export default Layout;
