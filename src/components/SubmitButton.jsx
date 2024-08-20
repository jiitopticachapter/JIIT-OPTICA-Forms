import React from "react";
import { Button } from "react-bootstrap";
import "./SubmitButton.css";

const SubmitButton = ({ label }) => {
  return (
    <Button variant="outline-light" type="submit" className="submit-button">
      {label}
    </Button>
  );
};

export default SubmitButton;
