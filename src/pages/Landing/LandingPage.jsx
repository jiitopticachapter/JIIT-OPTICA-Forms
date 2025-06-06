import React from "react";
import { Container, Button } from "react-bootstrap";
import "./../ConfirmPage/ConfirmPage.css";
import optica_logo from "../../assets/optica_logo.png";
import switchingForm from "../../utils/FormType.js";

const LandingPage = () => {
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
            <h1 className="confirm-title"> @jiit-optica forms</h1>

            <p className="confirm-message">
              Official forms of Optica JIIT Student Chapter.
              <br />
              Please access a valid form link to proceed.
              {/* We look forward to seeing you on
              November 9th at Jaypee's Got Latent. */}
            </p>
            <p
              className="footer-note"
              style={{
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.5)",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              If you were expecting a form, please contact the event organizer.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
