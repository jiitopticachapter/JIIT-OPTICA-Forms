import React from "react";
import { Routes, Route } from "react-router-dom";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage.jsx";
import DeadLine from "./pages/DeadLinePage/DeadLinePage.jsx";
import JaypeeGotLatent from "./pages/Designs/JaypeeGotLatentDesign.jsx";
import { Toaster } from "react-hot-toast";
import MacOSDesign from "./pages/Designs/MacOSDesign.jsx";
import WhatsAppDesign from "./pages/Designs/WhatsappDesign.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MacOSDesign />} />
        <Route path="/form-submitted" element={<ConfirmPage />} />
        <Route path="/deadline-passed" element={<DeadLine/>}/>
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
