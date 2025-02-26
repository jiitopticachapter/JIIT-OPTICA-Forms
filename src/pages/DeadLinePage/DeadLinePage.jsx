import React from "react";
import { Container, Button } from "react-bootstrap";
import "./DeadLinePage.css";
import optica_logo from "../../assets/optica_logo.png";
import { useNavigate } from "react-router-dom";
import switchingForm from "../../Utils/SwitchingForm-Sample-Main";
// import Stars from "../../components/Background/Starsbg";

const DeadLine = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <Stars speed={0.02} /> */}
      <div className="deadline-page">
        <Container className="deadline-page-container">
          <div className="deadline-content">
            <div className="success-animation">
              <img
                src={optica_logo}
                alt="Optica Logo"
                className="success-icon"
              />
            </div>
            {switchingForm.type != "Main" ? (
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
            <h1 className="deadline-title">Form DeadLine Reached!</h1>

            <p className="deadline-message">
              Sorry, the deadline for form submission has been reached.
              <br />
              Thank you for your interest!
              
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DeadLine;
