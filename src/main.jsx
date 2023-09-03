import React from "react";
import ReactDOM from "react-dom/client";
import FormSection from "./components/FormSection.jsx";
import CVSection from "./components/CVSection.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex-container">
      <FormSection />
      <CVSection />
    </div>
  </React.StrictMode>
);
