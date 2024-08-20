import React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "./Components/InputBox";
import FormContainer from "./Components/FormContainer";
import FormPage from "./pages/FormPage/FormPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </>
  );
};

export default App;
