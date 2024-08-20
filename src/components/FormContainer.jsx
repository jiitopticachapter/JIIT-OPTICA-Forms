import React from "react";
import { Container } from "react-bootstrap";
import BoxWithHeading from "./BoxWithHeading";
import SubmitButton from "./SubmitButton";
import "./FormContainer.css";
import optica_logo from "./../assets/optica_logo.png";
import formDetails from "../formDetails";

const FormContainer = () => {
  return (
    <Container className="form-container">
      <h1 className="form-title">{formDetails.formHeading.heading}</h1>
      <p className="form-criteria">Eligibility Criteria:</p>
      <ul className="criteria-list">
        <li>2nd-year students only.</li>
        <li>No extensive experience is required.</li>
      </ul>
      <p className="info-text">
        To know more about Optica, check out our website and Instagram handle.
      </p>

      {/* {formDetails.formInputs.map((input, index) => {
        return (
          <BoxWithHeading
            key={index}
            heading={input.label}
            type={input.type}
            quantity={1}
            placeholder={input.placeholder}
            lables={input.labels}
          />
        );
      })} */}

      <BoxWithHeading
        heading="Full Name"
        // description="Your Answer"
        type="text"
        placeholder="Your Name"
        quantity={1}
      />

      <BoxWithHeading
        heading="Email"
        // description="Your Answer"
        type="email"
        placeholder="Your Email"
        quantity={1}
      />

      <BoxWithHeading
        heading="Enrollment Number"
        // description="Your Answer"
        type="text"
        placeholder="Your Enrollment Number"
        quantity={1}
      />

      <BoxWithHeading
        heading="Mobile Number"
        // description="Your Answer"
        type="text"
        placeholder="Your Mobile Number"
        quantity={1}
      />

      <BoxWithHeading
        heading="Branch"
        type="radio"
        labels={["CSE", "ECE", "IT", "BBA", "BIOTECH", "BCA", "Other"]}
      />

      <BoxWithHeading
        heading="Select One"
        type="radio"
        labels={["Day Scholar", "Hostler"]}
      />

      {/* <BoxWithHeading
        heading="Testing boxes"
        type="checkbox"
        labels={["box1", "box2"]}
      /> */}

      <BoxWithHeading
        heading="Resume (If Available)"
        type="file"
        description="Upload one supported file: PDF, document or image. (Max 10 MB)"
      />

      <BoxWithHeading
        heading="Select your department preference"
        type="dropdown"
        dropdownConfig={[
          { key: "dropdown1", options: ["Option 1", "Option 2", "Option 3"] },
          { key: "dropdown2", options: ["Choice A", "Choice B", "Choice C"] },
        ]}
      />

      <BoxWithHeading
        heading="Are you part of any other student hub? If yes, please list their names and your designation in that particular hub."
        type="text"
        placeholder="Your Answer"
        quantity={1}
      />

      <BoxWithHeading
        heading="Why do you want to join Optica?"
        type="text"
        placeholder="Your Answer"
        quantity={1}
      />

      <div className="form-footer">
        <SubmitButton label="Submit" />
        <img src={optica_logo} alt="jiitoptica" className="optica-logo" />
      </div>
    </Container>
  );
};

export default FormContainer;
