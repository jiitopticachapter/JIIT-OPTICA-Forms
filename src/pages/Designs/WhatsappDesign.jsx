import React from "react";
import styled from "styled-components";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { MdChat, MdDonutLarge, MdArrowBack } from "react-icons/md";
import { Form, Button } from "react-bootstrap";
import {
  MdPerson,
  MdEmail,
  MdSchool,
  MdDateRange,
  MdFileUpload,
  MdPhone,
  MdOutlineInfo,
  MdCheckCircle,
  MdWarning,
  MdFiberManualRecord,
  MdArrowForward,
} from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import opticaLogo from "./../../assets/optica_logo.png";
import optica_o from "./../../assets/optica_o.png";
import whatsapp_bg from "./../../assets/whatsapp_bg.jpeg";
import FormDataComponent from "./FormFields.jsx";
import HandleSubmit from "../../utils/HandleSubmit.js";
import useError from "../../utils/ValidateError.js";
import { FormStylesInfo } from "../../utils/FormFieldsStyleInfo.js";

const WhatsAppDesign = () => {
  const { validateField } = useError();
  return (
    <WhatsAppLayout>
      <Sidebar>
        <TopSection2>
          <ProfileImage src={opticaLogo} alt="Optica Forms" />
          <h1
            style={{
              color: "#e1e9ee",
              textAlign: "center",
              borderTop: "2px solid #8696a0",
              width: "100%",
              padding: "10px",
            }}
          >
            Optica Forms
          </h1>
        </TopSection2>
        <SidebarHeader>
          <div style={{ color: "white", fontSize: "1.5rem" }}>Instructions</div>
          <BsThreeDotsVertical
            style={{ color: "#8696a0", fontSize: "1.5rem" }}
          />
        </SidebarHeader>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Follow the below instructions"
            disabled
          />
        </SearchBar>
        <SidebarHeader2>
          <FiSend
            color="#00a884"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "1.5rem",
            }}
          />{" "}
          {/* Add arrow icon */}
          <div style={{ color: "white", fontSize: "1.5rem" }}>Instructions</div>
        </SidebarHeader2>

        <InstructionList>
          <InstructionItem>
            <InstructionIcon>
              <MdFiberManualRecord />
            </InstructionIcon>
            <span>Fill out all fields accurately.</span>
          </InstructionItem>
          <InstructionItem>
            <InstructionIcon>
              <MdFiberManualRecord />
            </InstructionIcon>
            <span>Upload necessary documents.</span>
          </InstructionItem>
          <InstructionItem>
            <InstructionIcon>
              <MdFiberManualRecord />
            </InstructionIcon>
            <span>Ensure contact information is up-to-date.</span>
          </InstructionItem>
          <InstructionItem>
            <InstructionIcon>
              <MdFiberManualRecord />
            </InstructionIcon>
            <span>Click Submit to finalize your registration.</span>
          </InstructionItem>
        </InstructionList>

        {/* Optica logo and bottom text */}
        <OpticaBottom>
          <LogoImage src={optica_o} alt="Optica Logo" />
          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            @jiit-optica forms
          </span>
        </OpticaBottom>
      </Sidebar>

      {/* Main content (form area) */}
      <ContentArea onSubmit={(event) => HandleSubmit(event, validateField)}>
        <TopSection>
          <MdArrowBack style={{ color: "#8696a0", fontSize: "1.5rem" }} />
          <ProfileImage src={opticaLogo} alt="Optica Forms" />
          <div style={{ color: "#e1e9ee", fontSize: "1.2rem" }}>
            Optica Forms
          </div>
          <BsThreeDotsVertical
            style={{
              color: "#8696a0",
              fontSize: "1.5rem",
              position: "absolute",
              right: "10px",
              top: "8px",
            }}
          />
        </TopSection>
        <FormContainer
          style={{
            backgroundImage: `linear-gradient(rgba(55, 64, 69, 0.7), rgba(55, 64, 69, 0.7)), url(${whatsapp_bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div>
            {FormDataComponent(validateField, FormStylesInfo.WhatsAppApp)}

            {/* Submit Button on left, social icons on right */}
          </div>
        </FormContainer>
        <div
          className="text-center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            // position: "absolute",
            bottom: "0",
            paddingTop: "15px",
            left: "0",
            width: "100%",
            // backgroundColor: "#121b22",
          }}
        >
          <WhatsappButton type="submit">Submit</WhatsappButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SocialIconsContainer>
              <IconWrapper>
                <FaTwitter />
              </IconWrapper>
              <IconWrapper>
                <FaLinkedin />
              </IconWrapper>
              <IconWrapper>
                <FaInstagram />
              </IconWrapper>
              <IconWrapper>
                <FaGithub />
              </IconWrapper>
            </SocialIconsContainer>
          </div>
        </div>
        <OpticaBottom2>
          <LogoImage src={optica_o} alt="Optica Logo" />
          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            @jiit-optica forms
          </span>
        </OpticaBottom2>
      </ContentArea>
    </WhatsAppLayout>
  );
};

const WhatsAppLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #121b22;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto; // Adjust height for mobile
  }
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #202c33;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #374045;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none; // Remove border on mobile
    border-bottom: 1px solid #374045; // Add bottom border
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #2a373f;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarHeader2 = styled.div`
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #2a373f;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  background-color: #2a373f;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #374045;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background-color: #121b22;
  border: none;
  padding: 10px;
  width: 100%;
  color: #e1e9ee;
  outline: none;

  ::placeholder {
    color: #8696a0;
  }
`;

const InstructionList = styled.div`
  flex: 1;
  overflow-y: scroll;
  background-color: #202c33;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8696a0; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded edges for the scrollbar thumb */
  }

  ::-webkit-scrollbar-track {
    background-color: #2a373f; /* Color of the scrollbar track */
  }

  /* Custom scrollbar styles for Firefox and other browsers */
  scrollbar-width: thin;
  scrollbar-color: #8696a0 #2a373f;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

const InstructionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #374045;
  color: #e1e9ee;
  cursor: pointer;

  &:hover {
    background-color: #2a373f;
  }
`;

const InstructionIcon = styled.div`
  margin-right: 10px;
  color: #00a884;
`;

const ContentArea = styled.form`
  flex: 1;
  background-color: #1f2c34;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px; // Adjust padding for mobile
  }
`;

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #374045;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 10px;
    display: none;
  }
`;
const TopSection2 = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  position: relative;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #374045;
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  //   height: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  background-color: #121b22;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 76vh;
  border-radius: 20px;
  overflow-y: auto;
  overflow-x: hidden;

  & > :only-child {
    margin: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8696a0;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2a373f;
  }

  scrollbar-width: thin;
  scrollbar-color: #8696a0 #2a373f;

  @media (max-width: 768px) {
    min-height: fit-content;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  min-width: 600px;
  max-width: 300px;
  align-items: center;
  margin-bottom: 15px;
  background-color: #202c33;
  padding: 10px;

  gap: 10px;
  border-radius: 30px;
  justify-content: center;

  &:focus-within {
    border: 2px solid #ffffff; /* Change border color on focus */
  }

  @media (max-width: 768px) {
    min-width: 370px;
    // max-width: 600px;
    // min-width: 100%; // Make input full width on mobile
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #e1e9ee;
  flex: 1;
  outline: none;
  padding: 5px;

  &::placeholder {
    color: #8696a0;
  }
`;

const OpticaBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #8696a0;
  padding: 8px;
  text-align: center;
  color: #00a884;

  @media (max-width: 768px) {
    display: none;
  }
`;

const OpticaBottom2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #8696a0;
  padding: 5px;
  margin-top: 25px;
  text-align: center;
  color: #00a884;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const WhatsappButton = styled(Button)`
  background: #00a884;
  border: none;
  padding: 0.75rem 3rem;
  color: #ffffff;
  font-weight: 500;
  width: fit-content;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    background: #78d9c7;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 10px; /* Space between icons */
  align-items: center; /* Center align the icons vertically */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #ffffff; /* White background for icons */
  color: #1f2c34; /* Dark color for icons */
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #00a884; /* Change background on hover */
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
  background: #ffffff;
  transition: background 0.3s, color 0.3s;

}`;

export default WhatsAppDesign;
