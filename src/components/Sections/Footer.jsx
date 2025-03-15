import React from "react";
import MainFormFieldsInfo from "./../../data/FormFieldsInfo.json";
import { useParams } from "react-router-dom";

const Footer = () => {
  const { id } = useParams();
  let FormFieldsInfo = MainFormFieldsInfo[id]?.footerInfo || {};

  return (
    <div style={{ textAlign: "center", fontSize: "15px", color: "#888" }}>
      {FormFieldsInfo?.contactus?.heading
        ? FormFieldsInfo?.contactus?.heading
        : "For any query please contact:"}
      <br />
      <strong>
        {FormFieldsInfo?.contactus?.person1?.name
          ? FormFieldsInfo?.contactus?.person1?.name
          : "Sai Raj Singh"}
      </strong>
      :{" "}
      <em>
        {FormFieldsInfo?.contactus?.person1?.Phno
          ? FormFieldsInfo?.contactus?.person1?.Phno
          : "7439557090"}
      </em>
      <br />
      <strong>
        {FormFieldsInfo?.contactus?.person2?.name
          ? FormFieldsInfo?.contactus?.person2?.name
          : "Shantanu Pandey"}
      </strong>
      :{" "}
      <em>
        {FormFieldsInfo?.contactus?.person2?.Phno
          ? FormFieldsInfo?.contactus?.person2?.Phno
          : "9026152678"}
      </em>
    </div>
  );
};

export default Footer;
