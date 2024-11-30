import React from "react";
import { Container, Button } from "react-bootstrap";
import "./ConfirmPage.css";
import optica_logo from "../../assets/optica_logo.png";
import { useNavigate } from "react-router-dom";
import switchingForm from "../../Utils/SwitchingForm-Sample-Main";
// import Stars from "../../components/Background/Starsbg";

const ConfirmPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <Stars speed={0.02} /> */}
      <div className="confirm-page">
        <Container className="confirm-page-container">
          <div className="confirm-content">
            <div className="success-animation">
              <img
                src={optica_logo}
                alt="Optica Logo"
                className="success-icon"
              />
            </div>
            {switchingForm.title != "Main" ? (
              <>
                <h3
                  style={{
                    color: "#ff5f57",
                    opacity: 0.8,
                    fontFamily: "'Courier New', Courier, monospace",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                  }}
                >
                  This is a sample preview
                </h3>
              </>
            ) : (
              ""
            )}
            <h1 className="confirm-title">Submission Successfull !!</h1>

            <p className="confirm-message">
              Your form has been submitted.
              <br />
              Thank you for registering.
              {/* We look forward to seeing you on
              November 9th at Jaypee's Got Latent. */}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ConfirmPage;
