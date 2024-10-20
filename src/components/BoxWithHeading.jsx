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
  name,
  checkboxesNames,
  dropdownNames,
  otherkey,
  required,
  errorMsg,
}) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [error, setError] = useState("");

  const validateField = (value) => {
    if (required && !value) {
      setError(`${errorMsg}`);
    } else {
      setError("");
    }
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };
  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleSelectChange = (event, index) => {
    console.log("called ----------------");
    const newValue = event.target.value;
    setSelectedValues((prevValues) =>
      prevValues.map((value, i) => (i === index ? newValue : value))
    );

    console.log(selectedValues);
  };

  const renderFormControls = () => {
    switch (type) {
      case "radio":
        return labels.map((label, index) => (
          <div key={index}>
            <Form.Check
              type="radio"
              label={label}
              name={name}
              value={
                label == "others" || label == "Other" || label == "other"
                  ? "__other_option__"
                  : label
              }
              // checked={
              //   selectedRadio === label || selectedRadio === "_other_option_"
              // }
              onChange={handleRadioChange}
              className="form-radio"
            />
            {(label == "others" || label == "Other" || label == "other") &&
            selectedRadio == "__other_option__" ? (
              <div>
                <br />
                <Form.Control
                  type="text"
                  name={otherkey}
                  placeholder="Enter other option"
                  className="form-input"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ));
      case "checkbox":
        return labels.map((label, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={label}
            value={label}
            name={checkboxesNames[index]}
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
              name={dropdownNames[index]}
              defaultValue="Department"
              value={selectedValues[index]}
              onChange={(e) => handleSelectChange(e, index)}
            >
              {dropdown.options.map((option, optionIndex) => (
                <option
                  // selected={optionIndex === 0}
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
            name={name}
            placeholder={placeholder || `Enter ${heading} ${index + 1}`}
            onBlur={(e) => validateField(e.target.value)}
            className="form-input"
          />
        ));
    }
  };

  return (
    <Form.Group as={Col} className="box-with-heading mb-3">
      <div className="box-content">
        <Form.Label className="form-label">
          {heading} {required ? "*" : ""}
        </Form.Label>
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
        {error && <p className="error-message">{error}</p>}
      </div>
    </Form.Group>
  );
};

export default BoxWithHeading;
