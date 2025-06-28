import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import {
  MdClose,
  MdMinimize,
  MdFullscreen,
  MdPerson,
  MdEmail,
  MdSchool,
  MdDateRange,
  MdFileUpload,
  MdPhone,
  MdCheckCircle,
  MdOutlineAssignment,
  MdList,
  MdToggleOn,
  MdToggleOff,
  MdRemoveCircleOutline,
  MdTextFields,
} from "react-icons/md";
import optica_logo from "./../../assets/optica_logo.png";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import HandleSubmit from "../../utils/HandleSubmit.js";
import useError from "../../utils/ValidateError.js";
import { Errors } from "../../utils/ValidateError.js";
import FormDataComponent from "./FormFields.jsx";
import { FormStylesInfo } from "../../utils/FormFieldsStyleInfo.js";
import HCVERMA from "./../../assets/HCVERMA.jpeg";
import Loader from "../Loader/Loader.jsx";
import Footer from "../../components/Sections/Footer.jsx";
import { useParams } from "react-router-dom";
import { useFormContext } from "../../utils/FormContext.jsx";

const MacOSDesign = ({ FormFieldsInfo }) => {
  const { validateField } = useError();
  const { id } = useParams();

  const { loader, setFormStatus, setLoader } = useFormContext();

  return (
    <div
      style={{ padding: "1.5rem 0", minHeight: "100vh", background: "#121212" }}
    >
      {loader && <Loader />}
      <MacOSWindow>
        <MacOSHeader>
          <ControlButton color="#ff5f57" />
          <ControlButton color="#ffbd2e" />
          <ControlButton color="#28c940" />
          <div
            style={{ marginLeft: "auto", fontSize: "1.2rem", color: "#e0e0e0" }}
          >
            OPTICA FORMS
          </div>
        </MacOSHeader>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <Sidebar>
            <SidebarLogo src={optica_logo} alt="College Logo" />
            <div style={{ textAlign: "justify", padding: "15px" }}>
              <p>
                Are you someone who <strong>dreams big</strong>,{" "}
                <strong>thinks different</strong>, and wants to
                <strong> make an impact</strong>? Then <strong>Optica</strong>{" "}
                is the place for you!
              </p>

              <p>
                We’re an independent, student-powered society blending{" "}
                <strong>creativity, physics, and tech</strong> — from hosting{" "}
                <em>Jaypee’s Got Talent</em>, to unforgettable guest talks like{" "}
                <strong>H.C. Verma sir</strong>, to pulling off{" "}
                <strong>JSCOP 7.0</strong> with massive success — we’ve built a
                legacy.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                🚀 And now, we're recruiting!! 🚀
              </p>

              <p>Join Optica family and you’ll get the chance to:</p>

              <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.8" }}>
                <li>Organize flagship events in science, tech, and innovation</li>
                <li>Host impactful CSE workshops, tech events, and hackathons</li>
                <li>
                 Build a strong network in physics, optics, and cutting-edge technology
                </li>
                <li>Be part of a creative, collaborative, and enthusiastic community</li>
                <li>Turn your boldest ideas — from research to real-world tech — into lasting impact</li>
              </ul>
            </div>
            <h3
              style={{
                backgroundColor: "#2c2c2c",
                borderRadius: "10px",
                padding: "10px 0px 15px 0px",
                textAlign: "center",
              }}
            >
              {FormFieldsInfo?.instructionInfo?.heading}
            </h3>

            <Instructions>
              <TerminalCommand>
                {/* <EventDetails>
                  "The Story of Uncommon Decisions" by Prof. H.C. Verma followed
                  by an interaction with students
                  <br />
                  <br />
                  <HighlightText>Date: </HighlightText> 11th January 2025 <br />
                  <HighlightText>Time: </HighlightText> 9:30 AM to 12:00 PM{" "}
                  <br />
                  <HighlightText>Venue: </HighlightText> Auditorium (JIIT){" "}
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                  <br />
                </EventDetails> */}
                {/* <br /> */}
                {FormFieldsInfo?.instructionInfo?.description} <br />
                <br />
                {FormFieldsInfo?.instructionInfo?.instructions.map(
                  (instruction, index) => (
                    <div key={index}>
                      <span style={{ color: "#aaaaaa" }}>
                        {`Instruction-${index + 1}/~`}
                        <br />$
                      </span>{" "}
                      {instruction}
                      <br />
                      <br />
                    </div>
                  )
                )}
                <EventDetails>
                  Join our Whatsapp Group for further updates:
                  {/* <br /> */}
                  <a
                    href="https://chat.whatsapp.com/HCLBNElKfVU117LwiJv1M5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "yellow" }}
                  >
                    Click here
                  </a>
                  <br />
                </EventDetails>
                {/* <br /> */}
                {/* <br /> */}
              </TerminalCommand>
            </Instructions>
            <Tagdiv
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                backgroundColor: "#2c2c2c",
                left: 0,
                textAlign: "center",
                color: "#AAAAAA",
                opacity: 0.5,
              }}
            >
              @jiit-optica forms
            </Tagdiv>
          </Sidebar>
          <Content>
            <Form
              onSubmit={(event) =>
                HandleSubmit(event, validateField, id, setFormStatus, setLoader)
              }
            >
              {FormDataComponent(validateField, FormStylesInfo.MacOSForm)}
              <div
                className="text-center mt-5"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <MacOSButton type="submit">Submit</MacOSButton>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <SocialIconsContainer>
                    {/* <IconWrapper>
                    <FaTwitter />
                  </IconWrapper> */}
                    <IconWrapper
                      href="https://www.linkedin.com/company/jiitopticachapter/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </IconWrapper>
                    <IconWrapper
                      href="https://www.instagram.com/jiitopticachapter?igsh=MWVqeGQ5bmRwMHc5eg=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </IconWrapper>
                    <IconWrapper
                      href="https://github.com/jiitopticachapter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </IconWrapper>
                  </SocialIconsContainer>
                </div>
              </div>
            </Form>
            <br /> <br />
            <Footer />
          </Content>
          <Tagdiv2
            style={{
              //   position: "absolute",
              //   bottom: "0",
              width: "100%",
              backgroundColor: "#2c2c2c",
              //   left: 0,
              textAlign: "center",
              color: "#AAAAAA",
              opacity: 0.5,
            }}
          >
            @jiit-optica forms
          </Tagdiv2>
        </div>
      </MacOSWindow>
    </div>
  );
};

const MacOSWindow = styled.div`
  background: #121212;
  color: #e0e0e0;
  width: 97%;
  //   max-width: 1200px;
  border-radius: 20px;

  padding: 0;
  margin: 0rem auto;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Sidebar = styled.div`
  width: 420px;
  background: #1c1c1c;
  border-right: 1px solid #444;
  padding: 2rem 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    border-right: none;
    border-bottom: 1px solid #444;
  }
`;

const SidebarLogo = styled.img`
  width: 90%; /* Increased logo size */
  margin: 1rem;
  align-self: center;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const HighlightText = styled.span`
  color: #ffffff;
  font-weight: bold;
`;

const EventDetails = styled.div`
  background-color: #222;
  padding: 10px;
  border-radius: 5px;
  // margin-top: 20px;
  color: #ffffff;
  font-size: 18px;
  // text-align: center;
`;

const LuxButton = styled(Button)`
  background: #282828;
  color: #ffffff;
  border: none;
  margin: 1rem 0;
  width: 100%;
  text-align: left;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: #444;
    color: #ffffff;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2.5rem 3rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MacOSHeader = styled.div`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #333;
`;

const ControlButton = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background: ${(props) => props.color};
  cursor: pointer;
`;

const ThemedInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #666;
  background: #2c2c2c;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  transition: border 0.3s;

  &:focus-within {
    border: 1px solid #ffffff; /* Change border color on focus */
  }
`;

const ThemedInputWrapper2 = styled.div`
  border: 1px solid #666;
  background: #2c2c2c;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  transition: border 0.3s;

  &:focus-within {
    border: 1px solid #ffffff; /* Change border color on focus */
  }
`;

const ThemedInput = styled(Form.Control)`
  background: transparent;
  border: none;
  color: #ffffff;
  flex: 1;
  margin-left: 14px;

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    box-shadow: none;
  }
`;

const ThemedSelectWrapper = styled(ThemedInputWrapper)`
  display: flex;
  align-items: center;
`;

const ThemedSelect = styled(Form.Select)`
  background: transparent;
  border: none;
  color: #ffffff;
  flex: 1;
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    box-shadow: none;
  }
`;

const MacOSButton = styled(Button)`
  background: #ffffff;
  border: none;
  padding: 0.75rem 3rem;
  color: black;
  font-weight: 500;
  width: fit-content;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    background: #444444;
  }
`;
const TerminalCommand = styled.pre`
  background: #2c2c2c;
  border-radius: 10px;
  padding: 1rem;
  color: #e0e0e0;
  line-height: 1.6;
  font-weight: bold;
  font-size: 1rem;
  overflow: auto;
  white-space: pre-wrap;
  // font-family: "Courier New", Courier, monospace;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const Instructions = styled.div`
  //   margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 10px; /* Space between icons */
  align-items: center; /* Center align the icons vertically */
`;

const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #ffffff; /* White background for icons */
  color: #333333; /* Dark color for icons */
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #2C2C2C; /* Change background on hover */
    color: white; /* Change icon color on hover */
  }

  svg {
    width: 20px;
    height: 20px;
  }
}`;

const IconWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #aaaaaa;
  color: #333333;
  transition: background 0.3s, color 0.3s;

}`;

const Tagdiv = styled.div`

@media (max-width: 768px) {
    display: none;
  }

}`;
const Tagdiv2 = styled.div`

@media (min-width: 768px) {
    display: none;
  }

}`;

const Error = styled.p`
  color: #ff5f57;
`;

const ThemedTextarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #2c2c2c;
  color: #fff;
  resize: none;
  flex: 1;
  margin-left: 14px;
  overflow: hidden;
  // height: 40px;
  &:focus {
    border-color: #ffffff;
    outline: none;
    border: 1px solid #666;
    background-color: #ffffff;
    color: #000;
  }
`;

export default MacOSDesign;
