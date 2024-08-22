import React, { useEffect, useState } from "react";
import "./Notify.css";

const Notify = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      // Hide the notification after the specified duration
      const hideTimeout = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      // Reset the notification visibility when a new message comes in
      return () => {
        clearTimeout(hideTimeout);
      };
    }
  }, [message, duration, onClose]);

  return (
    <div className={`notification ${visible ? "show" : ""}`}>{message}</div>
  );
};

export default Notify;
