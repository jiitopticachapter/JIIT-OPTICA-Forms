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

// import LatentData from "../../Components/DataStructure/Data.js";
// import HandleSubmit from "./../../Components/DataStructure/HandleSubmit.jsx";
// import useError from "./../../Components/DataStructure/ValidateError.jsx";
// // import { Errors } from "../../Components/DataStructure/ValidateError";
// import FormDataComponent from "./../../Components/DataStructure/FormFields.jsx";
// import { FormStylesInfo } from "./../../Components/DataStructure/FormFieldsStylesInfo.js";
import HandleSubmit from "./HandleSubmit.jsx";
import useError from "./ValidateError.jsx";
// import { Errors } from "../../Components/DataStructure/ValidateError";
import FormDataComponent from "./FormFields.jsx";
import { FormStylesInfo } from "./FormFieldsStyleInfo.js";
import Loader from "../Loader/Loader";

const LatentData = {
  instructionInfo: {
    heading: "Instructions",
    description: "Read the below instructions carefully:",
    instructions: [
      "Show Case your talent within 90 seconds.",
      "Chits will be provided to you for rating your performance.",
      "No offence will be tolerated on any jokes either by other participants or judges.",
      "Rs 4000 Cash Prize will be awarded to a single winner. If there is a tie then it will be decided by the mutual agreement of the respective players to either split the prize money or play a tie-breaker further.",
    ],
    checkboxStatus: {
      show: true,
      label: "I have read the instructions carefully.",
      errorMsg: "Please check the box.",
    },
  },
  formInfo: [
    {
      heading: "Name",
      name: "entry.name",
      required: true,
      type: "text",
      placeholder: "Enter your name",
      errorMsg: "Name is required.",
    },
    {
      heading: "Email",
      name: "entry.email",
      required: true,
      type: "email",
      placeholder: "Enter your email",
      errorMsg: "Email is required.",
      regex: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    },
    {
      heading: "Phone",
      name: "entry.phone",
      required: true,
      type: "text",
      placeholder: "Enter your phone number",
      errorMsg: "Phone number is required.",
      regex: "^[0-9]{10}$",
    },
    {
      heading: "Branch",
      name: "entry.branch",
      required: true,
      type: "radio",
      labels: [
        "Computer Science",
        "Information Technology",
        "Electronics & Communication",
        "EE VLSI",
        "ECE Adv Com.",
        "Mathematics & Computing",
        "BCA",
        "BBA",
        "MBA",
        "Others",
      ],
      otherKey: ".other_option_response",
      errorMsg: "Please select your branch.",
    },
    {
      heading: "Batch",
      name: "entry.batch",
      required: true,
      type: "text",
      placeholder: "Enter your batch",
      errorMsg: "Batch is required.",
      // regex: "^[0-9]{10}$",
    },
    {
      heading: "Are you single (relationship status)?",
      name: "entry.relationship_status",
      required: true,
      type: "radio",
      labels: ["Yes", "No"],
      otherKey: ".other_option_response",
      errorMsg: "Above field is required.",
    },
    {
      heading: "Do you have any sibling?",
      name: "entry.sibling",
      required: true,
      type: "radio",
      labels: ["Yes", "No"],
      otherKey: ".other_option_response",
      errorMsg: "Above field is required.",
    },

    {
      heading: "What would you do if your gender was reversed for one day?",
      name: "entry.gender_reveresed",
      required: true,
      type: "textarea",
      placeholder: "write your answer here ...",
      errorMsg: "Above field is required.",
    },
    {
      heading: "Most daring thing you have done?",
      name: "entry.daring_thing",
      required: true,
      type: "textarea",
      placeholder: "write your answer here ...",
      errorMsg: "Above field is required.",
    },
    {
      heading: "Your biggest achievement till date.",
      name: "entry.biggest_achievement",
      required: true,
      type: "textarea",
      placeholder: "write your answer here ...",
      errorMsg: "Above field is required.",
    },
    {
      heading: "Goals in your life (apart from academics).",
      name: "entry.life_goals",
      required: true,
      type: "textarea",
      placeholder: "write your answer here ...",
      errorMsg: "Above field is required.",
    },
  ],
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

// const iconMap = {
//   Name: <MdPerson style={{ color: "#666" }} />,
//   Email: <MdEmail style={{ color: "#666" }} />,
//   Phone: <MdPhone style={{ color: "#666" }} />,
//   default: <MdRemoveCircleOutline style={{ color: "#666" }} />,
// };

// const FormDataComponent = (validateField) => {
//   const [selectedRadio, setSelectedRadio] = useState({});
//   const [radioInputValue, handleRadioInputValue] = useState({});
//   const [selectedValues, setSelectedValues] = useState({});
//   const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
//   const handleRadioChange = (name, label) => {
//     setSelectedRadio((prevData) => ({ ...prevData, [name]: label }));
//   };

//   const handleSelectChange = (event, name) => {
//     const newValue = event.target.value;
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       [name]: newValue,
//     }));
//     console.log(selectedValues);
//   };

//   const handleCheckboxChange = (event, name) => {
//     const { value, checked } = event.target;

//     setSelectedCheckboxes((prevState) => {
//       const updatedCheckboxes = { ...prevState };

//       // Initialize the array for this name if it doesn't exist
//       if (!updatedCheckboxes[name]) {
//         updatedCheckboxes[name] = [];
//       }

//       if (checked) {
//         // Check if the value is already in the array before adding
//         if (!updatedCheckboxes[name].includes(value)) {
//           updatedCheckboxes[name].push(value);
//         }
//       } else {
//         // Remove the checkbox value from the array if unchecked
//         updatedCheckboxes[name] = updatedCheckboxes[name].filter(
//           (v) => v !== value
//         );

//         // Optionally delete the key if no values are left
//         if (updatedCheckboxes[name].length === 0) {
//           delete updatedCheckboxes[name];
//         }
//       }

//       console.log("Updated checkboxes: ", updatedCheckboxes);
//       return updatedCheckboxes;
//     });
//   };

//   return (
//     <>
//       {Data.formInfo.map((field, index) => {
//         if (field.type === "text" || field.type === "email") {
//           return (
//             <Form.Group key={index}>
//               <Form.Label style={{ color: "#e0e0e0" }}>
//                 {field.heading}
//               </Form.Label>
//               <ThemedInputWrapper>
//                 <IconWrapper2>
//                   {iconMap[field.heading] || iconMap.default}
//                 </IconWrapper2>
//                 <ThemedInput
//                   type={field.type}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   // required={field.required}
//                   onBlur={(e) =>
//                     validateField(
//                       field.heading,
//                       field.name,
//                       e.target.value,
//                       field.errorMsg,
//                       field.required,
//                       field.regex
//                     )
//                   }
//                 />
//               </ThemedInputWrapper>
//               {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
//             </Form.Group>
//           );
//         } else if (field.type === "radio") {
//           return (
//             <Form.Group key={index}>
//               <Form.Label style={{ color: "#e0e0e0" }}>
//                 {/* <MdList style={{ color: "#666" }} />  */}
//                 {field.heading}
//               </Form.Label>
//               <ThemedInputWrapper2>
//                 {field.labels.map((label, idx) => (
//                   <div key={idx}>
//                     {" "}
//                     <Form.Check
//                       type="radio"
//                       name={field.name}
//                       label={label}
//                       value={
//                         label == "Others"
//                           ? radioInputValue?.[field.name]
//                           : label
//                       }
//                       onChange={() => {
//                         handleRadioChange(field.name, label);
//                       }}
//                       required={field.required}
//                       style={{
//                         color: "#e0e0e0",
//                         marginBottom:
//                           idx === field.labels.length - 1 ? "0" : "0.5rem", // No margin for the last item
//                       }}
//                     />
//                     {label == "Others" &&
//                     selectedRadio[field.name] === "Others" ? (
//                       <div>
//                         <br />
//                         <Form.Control
//                           type="text"
//                           value={radioInputValue?.[field.name] || ""}
//                           onChange={(e) =>
//                             handleRadioInputValue((prevData) => ({
//                               ...prevData,
//                               [field.name]: e.target.value,
//                             }))
//                           }
//                           placeholder="Enter other option"
//                           className="form-input"
//                         />
//                       </div>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 ))}
//               </ThemedInputWrapper2>
//               {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
//             </Form.Group>
//           );
//         } else if (field.type === "dropdown") {
//           return (
//             <Form.Group key={index}>
//               <Form.Label style={{ color: "#e0e0e0" }}>
//                 {field.heading}
//               </Form.Label>

//               {field.dropdownConfig.map((dropdown, idx) => (
//                 <ThemedSelectWrapper key={idx}>
//                   <IconWrapper2>
//                     <MdList style={{ color: "#666" }} />
//                   </IconWrapper2>
//                   <ThemedSelect
//                     name={field.dropdownNames[idx]}
//                     required={field.required}
//                     // defaultValue={dropdown.options[0]}
//                     value={
//                       selectedValues[field.dropdownNames[idx]] ||
//                       dropdown.options[0]
//                     }
//                     onChange={(e) =>
//                       handleSelectChange(e, field.dropdownNames[idx])
//                     }
//                   >
//                     {dropdown.options.map((option, optIndex) => (
//                       <option
//                         key={optIndex}
//                         value={option}
//                         // disabled={optIndex === 0}
//                       >
//                         {option}
//                       </option>
//                     ))}
//                   </ThemedSelect>
//                 </ThemedSelectWrapper>
//               ))}
//               {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
//             </Form.Group>
//           );
//         } else if (field.type === "file") {
//           return (
//             <Form.Group key={index}>
//               <Form.Label style={{ color: "#e0e0e0" }}>
//                 {field.heading}
//               </Form.Label>
//               <ThemedInputWrapper>
//                 <IconWrapper2>
//                   <MdFileUpload style={{ color: "#666" }} />
//                 </IconWrapper2>

//                 <ThemedInput
//                   type="file"
//                   name={field.name}
//                   accept={field.allowedFileTypes.join(",")}
//                   // required={field.required}
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     console.log("calling for: ", file);
//                     validateField(
//                       field.heading,
//                       field.name,
//                       file ? true : false,
//                       field.errorMsg,
//                       field.required,
//                       field.allowedFileTypes
//                     );
//                   }}
//                 />
//               </ThemedInputWrapper>
//               {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
//             </Form.Group>
//           );
//         } else if (field.type === "textarea") {
//           return (
//             <Form.Group key={index}>
//               <Form.Label style={{ color: "#e0e0e0" }}>
//                 {field.heading}
//               </Form.Label>
//               <ThemedInputWrapper>
//                 <IconWrapper2>
//                   <MdList style={{ color: "#666" }} />{" "}
//                 </IconWrapper2>
//                 <ThemedTextarea
//                   name={field.name}
//                   // required={field.required}
//                   placeholder={field.placeholder}
//                 />
//               </ThemedInputWrapper>
//               {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
//             </Form.Group>
//           );
//         } else if (field.type === "checkbox") {
//           return (
//             <Form.Group key={index}>
//               <Form.Label style={{ color: "#e0e0e0" }}>
//                 {field.heading}
//               </Form.Label>
//               <ThemedInputWrapper2>
//                 <input
//                   type="text"
//                   name={field.name}
//                   value={selectedCheckboxes?.[field.name]?.join(", ") || ""}
//                   readOnly
//                   hidden
//                 />
//                 {field?.labels?.map((label, idx) => (
//                   <Form.Check
//                     key={idx}
//                     type="checkbox"
//                     // name={field.name}
//                     label={label}
//                     value={label}
//                     // required={field.required}
//                     onChange={(e) => handleCheckboxChange(e, field.name)}
//                     checked={selectedCheckboxes?.[field.name]?.includes(label)}
//                     style={{
//                       color: "#e0e0e0",
//                       marginBottom:
//                         idx === field.labels.length - 1 ? "0" : "0.5rem",
//                     }}
//                   />
//                 ))}
//               </ThemedInputWrapper2>
//               {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
//             </Form.Group>
//           );
//         }
//         return null;
//       })}
//       <Form.Group>
//         <Form.Check
//           type="checkbox"
//           label="I agree to the terms and conditions"
//           style={{ color: "#e0e0e0" }}
//         />
//       </Form.Group>
//     </>
//   );
// };

let showLoader = false;
const showLoaderfunction = (value) => {
  showLoader = value;
};

const JaypeeGotLatent = () => {
  const { validateField } = useError();

  return (
    <div
      style={{ padding: "1.5rem 0", minHeight: "100vh", background: "#121212" }}
    >
      {showLoader && <Loader />}
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
            <h3
              style={{
                backgroundColor: "#2c2c2c",
                borderRadius: "10px",
                padding: "10px 0px 15px 0px",
                textAlign: "center",
              }}
            >
              {LatentData.instructionInfo.heading}
            </h3>
            <Instructions>
              <TerminalCommand>
                <EventDetails>
                  <HighlightText>Date: </HighlightText> 9th November 2024 <br />
                  <HighlightText>Time: </HighlightText> 1:00 PM to 3:00 PM{" "}
                  <br />
                  <HighlightText>Venue: </HighlightText> LT-5 (JBS)
                </EventDetails>
                <br />
                {LatentData.instructionInfo.description} <br />
                <br />
                {LatentData.instructionInfo.instructions.map(
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
            <Form onSubmit={(event) => HandleSubmit(event, validateField)}>
              {FormDataComponent(validateField, FormStylesInfo.MacOSForm)}

              {/* <Form.Group>
                <Form.Label style={{ color: "#e0e0e0" }}>Name</Form.Label>
                <ThemedInputWrapper>
                  <IconWrapper2>
                    <MdPerson style={{ color: "#666" }} />
                  </IconWrapper2>
                  <ThemedInput type="text" placeholder="Enter your name" />
                </ThemedInputWrapper>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "#e0e0e0" }}>Email</Form.Label>
                <ThemedInputWrapper>
                  <IconWrapper2>
                    <MdEmail style={{ color: "#666" }} />
                  </IconWrapper2>

                  <ThemedInput type="email" placeholder="Enter your email" />
                </ThemedInputWrapper>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "#e0e0e0" }}>
                  Phone Number
                </Form.Label>
                <ThemedInputWrapper>
                  <IconWrapper2>
                    <MdPhone style={{ color: "#666" }} />
                  </IconWrapper2>

                  <ThemedInput
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </ThemedInputWrapper>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "#e0e0e0" }}>Branch</Form.Label>
                <ThemedSelectWrapper>
                  <IconWrapper2>
                    <MdSchool style={{ color: "#666" }} />
                  </IconWrapper2>

                  <ThemedSelect>
                    <option disabled>Please select an option</option>
                    <option>Computer Science</option>
                    <option>Information Technology</option>
                    <option>Electronics & Communication</option>
                    <option>Mechanical Engineering</option>
                  </ThemedSelect>
                </ThemedSelectWrapper>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "#e0e0e0" }}>Batch</Form.Label>
                <ThemedInputWrapper>
                  <IconWrapper2>
                    <MdDateRange style={{ color: "#666" }} />
                  </IconWrapper2>

                  <ThemedInput
                    type="text"
                    placeholder="Enter your batch year"
                  />
                </ThemedInputWrapper>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "#e0e0e0" }}>
                  Upload File
                </Form.Label>
                <ThemedInputWrapper>
                  <IconWrapper2>
                    <MdFileUpload style={{ color: "#666" }} />
                  </IconWrapper2>

                  <ThemedInput type="file" />
                </ThemedInputWrapper>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="I agree to the terms and conditions"
                  style={{ color: "#e0e0e0" }}
                />
              </Form.Group> */}

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
            <div
              style={{ textAlign: "center", fontSize: "15px", color: "#888" }}
            >
              For any query please contact:
              <br />
              <strong>Yash Mittal</strong>: +91 <em>8570940287</em>
              <br />
              <strong>Shantanu Pandey</strong>: +91 <em>9026152678</em>
            </div>
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

export default JaypeeGotLatent;
export { showLoaderfunction };
