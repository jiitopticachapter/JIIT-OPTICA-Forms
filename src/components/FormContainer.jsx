import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BoxWithHeading from "./BoxWithHeading";
import SubmitButton from "./SubmitButton";
import "./FormContainer.css";
import optica_logo from "./../assets/optica_logo.png";
import formDetails from "../formDetails";
import Notify from "./NotificationBox/Notify";
import LoaderPage from "../pages/Loader/Loader.jsx";

const FormContainer = () => {
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleNotificationClose = () => {
    setNotify(false); // Reset notification state
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const requiredFields = [
      "entry.2092238618", // Full Name
      "entry.1556369182", // Email
      "entry.479301265", // Enrollment Number
      "entry.366439804", // Mobile Number
      "entry.588393791", // Branch
      "entry.1753222212", // Select One
      "entry.1133192386", // Preference 1
      "entry.1738577120", // Preference 2
      "entry.1089087003", // Why optica
    ];

    for (let field of requiredFields) {
      if (!formData.get(field)) {
        setNotify(true);
        setTimeout(() => setNotify(true), 0);
        return;
      }
    }
    setLoading(true);
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdGclVRoQJ06r4QpvbMxKcPg40bOJZOV6EeOo3vIwPdOQrbnw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Prevent CORS issues (Google Forms don't return CORS headers)
        }
      );

      // Redirect to your custom success page after form submission
      window.location.href = "/form-submitted";
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an issue submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="form-container">
      {loading ? <LoaderPage /> : ""}
      {notify && (
        <Notify
          message="Please fill all fields!"
          onClose={handleNotificationClose}
        />
      )}
      <h1 className="form-title">{formDetails.formHeading.heading}</h1>
      <p className="form-criteria">Eligibility Criteria:</p>
      <ul className="criteria-list">
        <li>2nd-year students only.</li>
        <li>No extensive experience is required.</li>
      </ul>
      <p className="info-text">
        To know more about Optica, check out our{" "}
        <a
          href="https://jiitopticachapter.com"
          style={{ color: "#ccc", fontWeight: "bolder" }}
        >
          website
        </a>{" "}
        and{" "}
        <a
          href="https://www.instagram.com/jiitopticachapter/"
          style={{ color: "#ccc", fontWeight: "bolder" }}
        >
          Instagram handle
        </a>
        .
      </p>

      <form onSubmit={handleSubmit}>
        <BoxWithHeading
          heading="Full Name"
          name="entry.2092238618"
          required={true}
          type="text"
          placeholder="Your Name"
          quantity={1}
          errorMsg="Name is required."
        />

        <BoxWithHeading
          heading="Email"
          name="entry.1556369182"
          required={true}
          type="email"
          placeholder="Your Email"
          quantity={1}
          errorMsg="Email is required."
        />

        <BoxWithHeading
          heading="Enrollment Number"
          required={true}
          name="entry.479301265"
          type="text"
          placeholder="Your Enrollment Number"
          quantity={1}
          errorMsg="Enrollment Number is required."
        />

        <BoxWithHeading
          heading="Mobile Number"
          required={true}
          name="entry.366439804"
          type="text"
          placeholder="Your Mobile Number"
          quantity={1}
          errorMsg="Mobile Number is required."
        />

        <BoxWithHeading
          heading="Branch"
          required={true}
          type="radio"
          name="entry.588393791"
          otherkey="entry.588393791.other_option_response"
          labels={["CSE", "ECE", "IT", "BBA", "BIOTECH", "BCA", "Other"]}
          errorMsg="Please select your branch."
        />

        <BoxWithHeading
          heading="Select One"
          required={true}
          type="radio"
          name="entry.1753222212"
          labels={["Day Scholar", "Hosteller"]}
          errorMsg="Please select one."
        />

        <BoxWithHeading
          heading="Select your department preferences"
          type="dropdown"
          required={true}
          dropdownNames={["entry.1133192386", "entry.1738577120"]}
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
          errorMsg="Please select your department preferences."
        />

        <BoxWithHeading
          heading="Are you part of any other student hub? If yes, please list their names and your designation in that particular hub."
          type="text"
          required={false}
          name="entry.1437722345"
          placeholder="Your Answer"
          quantity={1}
          errorMsg="This field is required."
        />

        <BoxWithHeading
          heading="Why do you want to join Optica?"
          type="text"
          required={true}
          name="entry.1089087003"
          placeholder="Your Answer"
          quantity={1}
          errorMsg="This field is required."
        />

        <BoxWithHeading
          heading="Resume (If Available)"
          required={false}
          name="entry.2119262957"
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
