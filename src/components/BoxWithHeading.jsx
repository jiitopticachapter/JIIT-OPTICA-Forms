import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import "./BoxWithHeading.css";

const BoxWithHeading = ({
  heading,
  description,
  type,
  quantity,
  placeholder,
  labels,
  dropdownConfig,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [otherValue, setOtherValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedOption(name === "other" ? "other" : value);
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const renderFormControls = () => {
    switch (type) {
      case "radio":
        return labels.map((label, index) => (
          <div key={index}>
            <Form.Check
              type="radio"
              label={label}
              name={`label`}
              className="form-radio"
            />
            {/* {label == "others" || label == "Other" || label == "other" ? (
              <div>
                <br />
                <Form.Control
                  type="text"
                  placeholder="Enter other option"
                  className="form-input"
                />
              </div>
            ) : (
              ""
            )} */}
          </div>
        ));
      case "checkbox":
        return labels.map((label, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={label}
            className="form-checkbox"
          />
        ));
      case "file":
        return <Form.Control type="file" className="form-file" />;
      case "dropdown":
        return dropdownConfig.map((dropdown, index) => (
          <div key={index} className="dropdown-container">
            <span className="dropdown-label">{dropdown.key}:</span>
            <Form.Control
              as="select"
              className="form-select"
              value={selectedOption || dropdown.options[0]}
              onChange={handleChange}
            >
              {dropdown.options.map((option, optionIndex) => (
                <option
                  style={{ fontSize: "20px" }}
                  key={optionIndex}
                  disabled={optionIndex === 0}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </Form.Control>
          </div>
        ));
      case "text":
      default:
        return Array.from({ length: quantity }, (_, index) => (
          <Form.Control
            key={index}
            type="text"
            placeholder={placeholder || `Enter ${heading} ${index + 1}`}
            className="form-input"
          />
        ));
    }
  };

  return (
    <Form.Group as={Col} className="box-with-heading mb-3">
      <div className="box-content">
        <Form.Label className="form-label">{heading}</Form.Label>
        {/* <Form.Control
          type={type}
          placeholder={placeholder}
          className="form-input"
        /> */}
        {renderFormControls()}
        {description ? (
          <Form.Text style={{ color: "rgba(255,255,255,0.7)" }}>
            {description}
          </Form.Text>
        ) : (
          ""
        )}
      </div>
    </Form.Group>
  );
};

export default BoxWithHeading;
