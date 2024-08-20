import React from "react";
import { Container } from "react-bootstrap";
import BoxWithHeading from "./BoxWithHeading";
import SubmitButton from "./SubmitButton";
import "./FormContainer.css";
import optica_logo from "./../assets/optica_logo.png";

const FormContainer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const requiredFields = [
      "entry.160466415", // Full Name
      "entry.315258667", // Email
      "entry.64548622", // Enrollment Number
      "entry.495226908", // Mobile Number
      "entry.132863625", // Branch
      "entry.1502158801", // Select One
      "entry.1665027859", // Preference 1
      "entry.884192987", // Preference 2
      "entry.1138863528", // Student Hub Details
    ];

    for (let field of requiredFields) {
      if (!formData.get(field)) {
        alert("Please fill all required fields.");
        return;
      }
    }

    window.location.href = "/form-submitted";
  };

  return (
    <Container className="form-container">
      <h1 className="form-title">Optica Volunteer Recruitment</h1>
      <p className="form-criteria">Eligibility Criteria:</p>
      <ul className="criteria-list">
        <li>2nd-year students only.</li>
        <li>No extensive experience is required.</li>
      </ul>
      <p className="info-text">
        To know more about Optica, check out our website and Instagram handle.
      </p>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLScESBlH09SrmXiOS3OKPZjUoYqErOt6hzRjJxtXNtGIJWmrCg/formResponse"
        method="post"
        onSubmit={handleSubmit}
      >
        <BoxWithHeading
          heading="Full Name"
          name="entry.160466415"
          required={true}
          // description="Your Answer"
          type="text"
          placeholder="Your Name"
          quantity={1}
        />

        <BoxWithHeading
          heading="Email"
          name="entry.315258667"
          required={true}
          // description="Your Answer"
          type="email"
          placeholder="Your Email"
          quantity={1}
        />

        <BoxWithHeading
          heading="Enrollment Number"
          required={true}
          // description="Your Answer"
          name="entry.64548622"
          type="text"
          placeholder="Your Enrollment Number"
          quantity={1}
        />

        <BoxWithHeading
          heading="Mobile Number"
          required="true"
          // description="Your Answer"
          name="entry.495226908"
          type="text"
          placeholder="Your Mobile Number"
          quantity={1}
        />

        <BoxWithHeading
          heading="Branch"
          required="true"
          type="radio"
          name="entry.132863625"
          otherkey="entry.132863625.other_option_response"
          labels={["CSE", "ECE", "IT", "BBA", "BIOTECH", "BCA", "Other"]}
        />

        <BoxWithHeading
          heading="Select One"
          required="true"
          type="radio"
          name="entry.1502158801"
          labels={["Day Scholar", "Hosteller"]}
        />

        {/* <BoxWithHeading
        heading="Testing boxes"
        type="checkbox"
        labels={["box1", "box2"]}
      /> */}

        <BoxWithHeading
          heading="Select your department preferences"
          type="dropdown"
          required={true}
          dropdownNames={["entry.1665027859", "entry.884192987"]}
          dropdownConfig={[
            {
              key: "Preference 1",
              options: [
                "Department",
                "Management",
                "Technical",
                "PR",
                "Digital",
                "Marketing/Outreach",
                "Creative",
              ],
            },
            {
              key: "Preference 2",
              options: [
                "Department",
                "Management",
                "Technical",
                "PR",
                "Digital",
                "Marketing/Outreach",
                "Creative",
              ],
            },
          ]}
        />

        <BoxWithHeading
          heading="Are you part of any other student hub? If yes, please list their names and your designation in that particular hub."
          type="text"
          required={true}
          name="entry.1138863528"
          placeholder="Your Answer"
          quantity={1}
        />

        <BoxWithHeading
          heading="Why do you want to join Optica?"
          type="text"
          required={false}
          name="entry.216938608"
          placeholder="Your Answer"
          quantity={1}
        />

        <BoxWithHeading
          heading="Resume (If Available)"
          required={false}
          name="entry.1708441962"
          description="Paste your resume link (Gdrive or dropbox)"
          type="text"
          placeholder="Your Resume link"
          quantity={1}
        />

        <div className="form-footer">
          <SubmitButton label="Submit" />
          <img src={optica_logo} alt="jiitoptica" className="optica-logo" />
        </div>
      </form>
    </Container>
  );
};

export default FormContainer;
