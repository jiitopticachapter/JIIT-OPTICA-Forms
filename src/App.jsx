import React from "react";
import { Routes, Route } from "react-router-dom";
// import FormPage from "./pages/FormPage/FormPage.jsx";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage.jsx";
// import CollegeSocietyForm from "./pages/Designs/FormDesign.jsx";
// import WhatsAppForm from "./pages/Designs/FormDesign2.jsx";
// import GameTheme from "./pages/Designs/GameTheme.jsx";
import JaypeeGotLatent from "./pages/Designs/FormDesign3.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<JaypeeGotLatent />} />
        <Route path="/form-submitted" element={<ConfirmPage />} />
      </Routes>
      {/* <CollegeSocietyForm /> */}
      {/* <JaypeeGotLatent /> */}
      <Toaster />
      {/* <Stage /> */}

      {/* <WhatsAppForm /> */}
      {/* <FormPage /> */}
      {/* <GameTheme /> */}
    </>
  );
};

export default App;
