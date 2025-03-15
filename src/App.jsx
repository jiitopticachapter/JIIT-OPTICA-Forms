import React from "react";
import { Routes, Route } from "react-router-dom";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage.jsx";
import FormClosed from "./pages/FormClosedPage/FormClosed.jsx";
import { Toaster } from "react-hot-toast";
import MacOSDesign from "./pages/Designs/MacOSDesign.jsx";
import WhatsAppDesign from "./pages/Designs/WhatsappDesign.jsx";
import Layout from "./layout/Layout.jsx";
import LandingPage from "./pages/Landing/LandingPage.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<Layout />} />
        <Route path="/form-submitted" element={<ConfirmPage />} />
        <Route path="/deadline-passed" element={<FormClosed />} />
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
