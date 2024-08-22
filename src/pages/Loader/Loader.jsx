import React from "react";
import "./Loader.css"; // Import the CSS for styling

const LoaderPage = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-page">
        <div className="spinner"></div>
        <p className="message">Submitting your form ...</p>
      </div>
    </div>
  );
};

export default LoaderPage;
