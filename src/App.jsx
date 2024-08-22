import React from "react";
import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/form-submitted" element={<ConfirmPage />} />
      </Routes>
    </>
  );
};

export default App;
