import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BoxWithHeading from "./BoxWithHeading.jsx";
import "./OutdatedForm.css";
import optica_logo from "./../assets/optica_logo.png";
// import formDetails from "../formDetails.js";
import Notify from "./NotificationBox/Notify.jsx";
import animationData0 from "../assets/Animation0.json";
import animationData1 from "../assets/Animation1.json";
import LoaderPage from "../pages/Loader/Loader.jsx";
import { Player } from "@lottiefiles/react-lottie-player";

const FormContainer = () => {
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationmsg, setNotification] = useState("");
  const handleNotificationClose = () => {
    setNotify(false); // Reset notification state
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);

  //   const requiredFields = [
  //     "entry.2092238618", // Full Name
  //     "entry.1556369182", // Email
  //     "entry.479301265", // Enrollment Number
  //     "entry.366439804", // Mobile Number
  //     "entry.588393791", // Branch
  //     // "entry.1753222212", // Select One
  //     // "entry.1133192386", // Preference 1
  //     // "entry.1738577120", // Preference 2
  //     // "entry.1089087003", // Why optica
  //   ];

  //   for (let field of requiredFields) {
  //     if (!formData.get(field)) {
  //       setNotify(true);
  //       setTimeout(() => setNotify(true), 0);
  //       return;
  //     }
  //   }
  //   setLoading(true);
  //   try {
  //     await fetch(
  //       "https://docs.google.com/forms/d/e/1FAIpQLSdGclVRoQJ06r4QpvbMxKcPg40bOJZOV6EeOo3vIwPdOQrbnw/formResponse",
  //       {
  //         method: "POST",
  //         body: formData,
  //         mode: "no-cors", // Prevent CORS issues (Google Forms don't return CORS headers)
  //       }
  //     );

  //     // Redirect to your custom success page after form submission
  //     window.location.href = "/form-submitted";
  //   } catch (error) {
  //     console.error("Error submitting form", error);
  //     alert("There was an issue submitting the form. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setNotification("");

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("entry.2092238618"), // Full Name
      email: formData.get("entry.1556369182"), // Email
      enrollment: formData.get("entry.479301265"), // Enrollment Number
      mobile: formData.get("entry.366439804"), // Mobile Number
      branch: formData.get("entry.588393791"), // Branch
    };

    const requiredFields = [
      "entry.2092238618", // Full Name
      "entry.1556369182", // Email
      "entry.479301265", // Enrollment Number
      "entry.366439804", // Mobile Number
      "entry.588393791", // Branch
      // "entry.1753222212", // Select One
      // "entry.1133192386", // Preference 1
      // "entry.1738577120", // Preference 2
      // "entry.1089087003", // Why optica
    ];

    for (let field of requiredFields) {
      if (!formData.get(field)) {
        setNotify(true);
        setTimeout(() => setNotify(true), 0);
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(data.email)) {
      setNotify(true);
      setNotification("Invalid email format.");
      return;
    }

    if (!mobileRegex.test(data.mobile)) {
      setNotify(true);
      setNotification("Invalid mobile number. It should be 10 digits.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwlC2N8f_c_etseMude8ZeR5gy78HxwAoRL4Z7yKSUb3QRwaEr6NNFkfMSmY0izO4vqLg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          mode: "no-cors",
        }
      );

      // console.log(response);

      // const result = await response;
      // console.log("result is: ", result);
      // if (result.status === "success") {
      window.location.href = "/form-submitted"; // Redirect on success
      // } else {
      //   alert("Error submitting form. Please check all fields.");
      // }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an issue submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="form-container">
      {/* <Player autoplay loop src={animationData0} className="lottie-player" /> */}
      {loading ? <LoaderPage /> : ""}
      {notify && (
        <Notify message={notificationmsg} onClose={handleNotificationClose} />
      )}
      <h1 className="form-title">Optica's Orientation Registeration Form</h1>
      <p className="form-criteria">Information regarding Orientation:</p>
      <ul className="criteria-list">
        <li>
          <strong>For 1st year students.</strong>
        </li>
        <li>Date: 20th september 2024</li>
        <li>Time: 5:00 PM</li>
        <li>Venue: LT-1</li>
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
          heading="Gmail Id"
          name="entry.1556369182"
          required={true}
          type="email"
          placeholder="Your gmail"
          quantity={1}
          errorMsg="Gmail is required."
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

        {/* <BoxWithHeading
          heading="Select One"
          required={true}
          type="radio"
          name="entry.1753222212"
          labels={["Day Scholar", "Hosteller"]}
          errorMsg="Please select one."
        /> */}

        {/* <BoxWithHeading
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
                "Digital/Cinematography",
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
        /> */}

        {/* <BoxWithHeading
          heading="Are you part of any other student hub? If yes, please list their names and your designation in that particular hub."
          type="text"
          required={false}
          name="entry.1437722345"
          placeholder="Your Answer"
          quantity={1}
          errorMsg="This field is required."
        /> */}

        {/* <BoxWithHeading
          heading="Why do you want to join Optica?"
          type="text"
          required={true}
          name="entry.1089087003"
          placeholder="Your Answer"
          quantity={1}
          errorMsg="This field is required."
        /> */}

        {/* <BoxWithHeading
          heading="Resume (If Available)"
          required={false}
          name="entry.2119262957"
          description="Paste your resume link (Gdrive or dropbox)"
          type="text"
          placeholder="Your Resume link"
          quantity={1}
        /> */}

        <div className="form-footer">
          <Button
            variant="outline-light"
            type="submit"
            className="submit-button"
          >
            Submit
          </Button>
          <img src={optica_logo} alt="jiitoptica" className="optica-logo" />
        </div>
      </form>
    </Container>
  );
};

export default FormContainer;
