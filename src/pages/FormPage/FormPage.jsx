import React from "react";
import FormContainer from "../../Components/FormContainer.jsx";
import Stars from "../../Components/Background/Stars";
import stars_bg from "../../assets/stars_bg.png";

const FormPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${stars_bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }}>
        {/* <Stars speed={0.02} /> */}
        <FormContainer />
      </div>
    </div>
  );
};

export default FormPage;
