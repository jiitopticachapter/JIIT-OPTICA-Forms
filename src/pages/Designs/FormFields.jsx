import React, { useState } from "react";
import styled from "styled-components";
import {
  MdPerson,
  MdEmail,
  MdFileUpload,
  MdPhone,
  MdList,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { Errors } from "../../Utils/ValidateError";
import FormFieldsInfo from "../../Utils/FormFieldsInfo";
import { Form } from "react-bootstrap";
import eventpic from "../../assets/eventpic.jpeg";

const FormDataComponent = (validateField, formStyle) => {
  const iconMap = {
    Name: <MdPerson style={{ color: formStyle.icon.color || "#666" }} />,
    Email: <MdEmail style={{ color: formStyle.icon.color || "#666" }} />,
    Phone: <MdPhone style={{ color: formStyle.icon.color || "#666" }} />,
    default: (
      <MdRemoveCircleOutline
        style={{ color: formStyle.icon.color || "#666" }}
      />
    ),
  };
  const [selectedRadio, setSelectedRadio] = useState({});
  const [radioInputValue, handleRadioInputValue] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const handleRadioChange = (name, label) => {
    setSelectedRadio((prevData) => ({ ...prevData, [name]: label }));
  };

  const handleSelectChange = (event, name) => {
    const newValue = event.target.value;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
    console.log(selectedValues);
  };

  const handleCheckboxChange = (event, name) => {
    const { value, checked } = event.target;

    setSelectedCheckboxes((prevState) => {
      const updatedCheckboxes = { ...prevState };

      // Initialize the array for this name if it doesn't exist
      if (!updatedCheckboxes[name]) {
        updatedCheckboxes[name] = [];
      }

      if (checked) {
        // Check if the value is already in the array before adding
        if (!updatedCheckboxes[name].includes(value)) {
          updatedCheckboxes[name].push(value);
        }
      } else {
        // Remove the checkbox value from the array if unchecked
        updatedCheckboxes[name] = updatedCheckboxes[name].filter(
          (v) => v !== value
        );

        // Optionally delete the key if no values are left
        if (updatedCheckboxes[name].length === 0) {
          delete updatedCheckboxes[name];
        }
      }

      console.log("Updated checkboxes: ", updatedCheckboxes);
      return updatedCheckboxes;
    });
  };

  return (
    <>
      {/* <StyledImage src={eventpic} alt="Jaypee's Got Latent" /> */}
      <StyledTitle>JAYPEE'S GOT LATENT</StyledTitle>
      {/* <RequiredNote>Fields marked with an asterisk are required.</RequiredNote> */}
      {FormFieldsInfo.formInfo.map((field, index) => {
        if (field.type === "text" || field.type === "email") {
          return (
            <Form.Group key={index}>
              <Form.Label
                style={{
                  color: formStyle.labels.color || "#e0e0e0",
                  display: formStyle.labels.display || "",
                }}
              >
                {field.heading} {field.required ? <span>*</span> : ""}
              </Form.Label>
              <ThemedInputWrapper
                bgColor={formStyle.inputWrapper.bgColor}
                borderOnFocus={formStyle.inputWrapper.borderOnFocus}
                borderRadius={formStyle.inputWrapper.borderRadius}
                border={formStyle.inputWrapper.border}
              >
                <IconWrapper2
                  bgColor={formStyle.icon.bgColor}
                  color={formStyle.icon.Color}
                >
                  {iconMap[field.heading] || iconMap.default}
                </IconWrapper2>
                <ThemedInput
                  bgColor={formStyle.inputbox.bgColor}
                  color={formStyle.inputbox.Color}
                  borderRadius={formStyle.inputbox.borderRadius}
                  border={formStyle.inputbox.border}
                  placeholderColor={formStyle.inputbox.placeholderColor}
                  focusColor={formStyle.inputbox.onFocus.color}
                  focusBgColor={formStyle.inputbox.onFocus.bgColor}
                  focusBorder={formStyle.inputbox.onFocus.border}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  // required={field.required}
                  onBlur={(e) =>
                    validateField(
                      field.heading,
                      field.name,
                      e.target.value,
                      field.errorMsg,
                      field.required,
                      field.regex
                    )
                  }
                />
              </ThemedInputWrapper>
              {Errors?.[field.name] && <Error>{Errors[field.name]}</Error>}
            </Form.Group>
          );
        } else if (field.type === "radio") {
          return (
            <Form.Group key={index}>
              <Form.Label
                style={{
                  color: formStyle.labels.color || "#e0e0e0",
                  display: formStyle.labels.display || "",
                }}
              >
                {/* <MdList style={{ color: formStyle.icon.color || "#666" }} />  */}
                {field.heading} {field.required ? <span>*</span> : ""}
              </Form.Label>
              <ThemedInputWrapper2
                bgColor={formStyle.inputWrapper.bgColor}
                borderOnFocus={formStyle.inputWrapper.borderOnFocus}
                borderRadius={formStyle.inputWrapper.borderRadius}
                border={formStyle.inputWrapper.border}
              >
                {field.labels.map((label, idx) => (
                  <div key={idx}>
                    {" "}
                    <Form.Check
                      type="radio"
                      name={field.name}
                      label={label}
                      value={
                        label == "Others"
                          ? radioInputValue?.[field.name]
                          : label
                      }
                      onChange={() => {
                        handleRadioChange(field.name, label);
                      }}
                      required={field.required}
                      style={{
                        color: "#e0e0e0",
                        marginBottom:
                          idx === field.labels.length - 1 ? "0" : "0.5rem", // No margin for the last item
                      }}
                    />
                    {label == "Others" &&
                    selectedRadio[field.name] === "Others" ? (
                      <div>
                        <br />
                        <Form.Control
                          type="text"
                          value={radioInputValue?.[field.name] || ""}
                          onChange={(e) =>
                            handleRadioInputValue((prevData) => ({
                              ...prevData,
                              [field.name]: e.target.value,
                            }))
                          }
                          placeholder="Enter other option"
                          className="form-input"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </ThemedInputWrapper2>
              {Errors?.[field.name] && <Error>{Errors?.[field.name]}</Error>}
            </Form.Group>
          );
        } else if (field.type === "dropdown") {
          return (
            <Form.Group key={index}>
              <Form.Label
                style={{
                  color: formStyle.labels.color || "#e0e0e0",
                  display: formStyle.labels.display || "",
                }}
              >
                {field.heading} {field.required ? <span>*</span> : ""}
              </Form.Label>

              {field.dropdownConfig.map((dropdown, idx) => (
                <ThemedSelectWrapper
                  bgColor={formStyle.inputWrapper.bgColor}
                  borderOnFocus={formStyle.inputWrapper.borderOnFocus}
                  borderRadius={formStyle.inputWrapper.borderRadius}
                  border={formStyle.inputWrapper.border}
                  key={idx}
                >
                  <IconWrapper2
                    bgColor={formStyle.icon.bgColor}
                    color={formStyle.icon.Color}
                  >
                    <MdList style={{ color: formStyle.icon.color || "#666" }} />
                  </IconWrapper2>
                  <ThemedSelect
                    name={field.dropdownNames[idx]}
                    required={field.required}
                    // defaultValue={dropdown.options[0]}
                    value={
                      selectedValues[field.dropdownNames[idx]] ||
                      dropdown.options[0]
                    }
                    onChange={(e) =>
                      handleSelectChange(e, field.dropdownNames[idx])
                    }
                  >
                    {dropdown.options.map((option, optIndex) => (
                      <option
                        key={optIndex}
                        value={option}
                        disabled={optIndex === 0}
                      >
                        {option}
                      </option>
                    ))}
                  </ThemedSelect>
                </ThemedSelectWrapper>
              ))}
              {Errors?.[field.name] && <Error>{Errors?.[field.name]}</Error>}
            </Form.Group>
          );
        } else if (field.type === "file") {
          return (
            <Form.Group key={index}>
              <Form.Label
                style={{
                  color: formStyle.labels.color || "#e0e0e0",
                  display: formStyle.labels.display || "",
                }}
              >
                {field.heading} {field.required ? <span>*</span> : ""}
              </Form.Label>
              <ThemedInputWrapper
                bgColor={formStyle.inputWrapper.bgColor}
                borderOnFocus={formStyle.inputWrapper.borderOnFocus}
                borderRadius={formStyle.inputWrapper.borderRadius}
                border={formStyle.inputWrapper.border}
              >
                <IconWrapper2
                  bgColor={formStyle.icon.bgColor}
                  color={formStyle.icon.Color}
                >
                  <MdFileUpload
                    style={{ color: formStyle.icon.color || "#666" }}
                  />
                </IconWrapper2>

                <ThemedInput
                  bgColor={formStyle.inputbox.bgColor}
                  color={formStyle.inputbox.Color}
                  borderRadius={formStyle.inputbox.borderRadius}
                  border={formStyle.inputbox.border}
                  placeholderColor={formStyle.inputbox.placeholderColor}
                  focusColor={formStyle.inputbox.onFocus.color}
                  focusBgColor={formStyle.inputbox.onFocus.bgColor}
                  focusBorder={formStyle.inputbox.onFocus.border}
                  type="file"
                  name={field.name}
                  accept={field.allowedFileTypes.join(",")}
                  // required={field.required}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    console.log("calling for: ", file);
                    validateField(
                      field.heading,
                      field.name,
                      file ? true : false,
                      field.errorMsg,
                      field.required,
                      field.allowedFileTypes
                    );
                  }}
                />
              </ThemedInputWrapper>
              {Errors?.[field.name] && <Error>{Errors?.[field.name]}</Error>}
            </Form.Group>
          );
        } else if (field.type === "textarea") {
          return (
            <Form.Group key={index}>
              <Form.Label
                style={{
                  color: formStyle.labels.color || "#e0e0e0",
                  display: formStyle.labels.display || "",
                }}
              >
                {field.heading} {field.required ? <span>*</span> : ""}
              </Form.Label>
              <ThemedInputWrapper
                bgColor={formStyle.inputWrapper.bgColor}
                borderOnFocus={formStyle.inputWrapper.borderOnFocus}
                borderRadius={formStyle.inputWrapper.borderRadius}
                border={formStyle.inputWrapper.border}
              >
                <IconWrapper2
                  bgColor={formStyle.icon.bgColor}
                  color={formStyle.icon.Color}
                >
                  <MdList style={{ color: formStyle.icon.color || "#666" }} />{" "}
                </IconWrapper2>
                <ThemedTextarea
                  bgColor={formStyle.inputbox.bgColor}
                  color={formStyle.inputbox.Color}
                  borderRadius={formStyle.inputbox.borderRadius}
                  border={formStyle.inputbox.border}
                  placeholderColor={formStyle.inputbox.placeholderColor}
                  focusColor={formStyle.inputbox.onFocus.color}
                  focusBgColor={formStyle.inputbox.onFocus.bgColor}
                  focusBorder={formStyle.inputbox.onFocus.border}
                  name={field.name}
                  // required={field.required}
                  placeholder={field.placeholder}
                />
              </ThemedInputWrapper>
              {Errors?.[field.name] && <Error>{Errors?.[field.name]}</Error>}
            </Form.Group>
          );
        } else if (field.type === "checkbox") {
          return (
            <Form.Group key={index}>
              <Form.Label
                style={{
                  color: formStyle.labels.color || "#e0e0e0",
                  display: formStyle.labels.display || "",
                }}
              >
                {field.heading} {field.required ? <span>*</span> : ""}
              </Form.Label>
              <ThemedInputWrapper2
                bgColor={formStyle.inputWrapper.bgColor}
                borderOnFocus={formStyle.inputWrapper.borderOnFocus}
                borderRadius={formStyle.inputWrapper.borderRadius}
                border={formStyle.inputWrapper.border}
              >
                <input
                  type="text"
                  name={field.name}
                  value={selectedCheckboxes?.[field.name]?.join(", ") || ""}
                  readOnly
                  hidden
                />
                {field?.labels?.map((label, idx) => (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    // name={field.name}
                    label={label}
                    value={label}
                    // required={field.required}
                    onChange={(e) => handleCheckboxChange(e, field.name)}
                    checked={selectedCheckboxes?.[field.name]?.includes(label)}
                    style={{
                      color: "#e0e0e0",
                      marginBottom:
                        idx === field.labels.length - 1 ? "0" : "0.5rem",
                    }}
                  />
                ))}
              </ThemedInputWrapper2>
              {Errors?.[field.name] && <Error>{Errors?.[field.name]}</Error>}
            </Form.Group>
          );
        }
        return null;
      })}
      {/* {Data.instructionInfo.checkboxStatus.show ? (
        <Form.Group>
          <Form.Check
            type="checkbox"
            label={Data.instructionInfo.checkboxStatus.label}
            style={{ color: "#e0e0e0" }}
          />{" "}
          <Error>{Data.instructionInfo.checkboxStatus.errorMsg}</Error>
        </Form.Group>
      ) : (
        ""
      )} */}
    </>
  );
};

const StyledImage = styled.img`
  width: 100%; /* Adjust width as needed */
  max-width: 500px;
  height: auto;
  margin: 0 auto; /* Center the image */
  display: block; /* Ensures centered alignment if needed */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Soft shadow for better visual appeal */
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff; /* Pure white color */
  // color: #ff5f57;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem;
  // background: linear-gradient(90deg, #0066ff, #33ccff);
  background-clip: text;
  // color: transparent;
  -webkit-background-clip: text;
  // -webkit-text-fill-color: #ffffff;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    // color: #ff5f57;
    padding: 0rem;
  }
`;

const RequiredNote = styled.p`
  font-size: 1rem;
  color: #ff5f57; /* Red color for visibility */
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  &::before {
    content: "*";
    margin-right: 4px;
  }
`;

const ThemedInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #666;
  background: ${({ bgColor }) => bgColor || "#2c2c2c"};
  border-radius: ${({ borderRadius }) => borderRadius || "10px"};
  padding: 1rem;
  border: ${({ border }) => border || "2px solid #2c2c2c"};
  margin-bottom: 1.5rem;
  //   transition: border 0.1s;

  &:focus-within {
    border: ${({ borderOnFocus }) =>
      borderOnFocus || "1px solid #ffffff"}; /* Change border color on focus */
  }
`;

const ThemedInputWrapper2 = styled.div`
  border: 1px solid #666;
  background: ${({ bgColor }) => bgColor || "#2c2c2c"};
  border-radius: ${({ borderRadius }) => borderRadius || "10px"};
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: ${({ border }) => border || "2px solid #2c2c2c"};
  //   transition: border 0.3s;

  &:focus-within {
    border: ${({ borderOnFocus }) => borderOnFocus || "1px solid #ffffff"};
  }
`;

const IconWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ bgColor }) => bgColor || "#aaaaaa"}; 
  color: ${({ color }) => color || "#333333"};
  transition: background 0.3s, color 0.3s;


}`;

const ThemedInput = styled(Form.Control)`
  background: ${({ bgColor }) => bgColor || "transparent"};
  border: ${({ border }) => border || "none"};
  color: ${({ color }) => color || "#ffffff"};
  flex: 1;
  margin-left: 14px;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#aaaaaa"};
  }
  &:focus {
    box-shadow: none;
    background-color: ${({ focusBgColor }) => focusBgColor || ""};
    border: ${({ focusBorder }) => focusBorder || "none"};
    color: ${({ focusColor }) => focusColor || ""};
  }
`;

const ThemedTextarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: ${({ border }) => border || "none"};
  background: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ color }) => color || "#ffffff"};
  resize: none;
  flex: 1;
  margin-left: 14px;
  overflow: hidden;
  // height: 40px;
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#aaaaaa"};
  }
  &:focus {
    // border-color: #ffffff;
    outline: none;
    // border: 1px solid #666;
    // border-radius: 20px;
    background-color: ${({ focusBgColor }) => focusBgColor || "#ffffff"};
    color: ${({ focusColor }) => focusColor || "#000"};
  }
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

const ThemedSelectWrapper = styled(ThemedInputWrapper)`
  display: flex;
  align-items: center;
`;

const Error = styled.p`
  color: #ff5f57;
`;

export default FormDataComponent;
