import React from "react";
import { Container, Button } from "react-bootstrap";
import "./ConfirmPage.css";
import optica_logo from "../../assets/optica_logo.png";
import { useNavigate } from "react-router-dom";
import Stars from "../../components/Background/Starsbg";

const ConfirmPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Stars speed={0.02} />
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
            <h1 className="confirm-title">Submission Successful!</h1>
            <p className="confirm-message">
              Your form has been submitted. <br /> Will see you soon in Optica's
              Orientaion.
            </p>
            <Button
              variant="primary"
              className="back-home-button"
              onClick={handleBackToHome}
            >
              Back to Home
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ConfirmPage;
