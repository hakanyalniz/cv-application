import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  const [firstName, setFirstName] = useState("FirstName");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  return (
    <div className="flex-container">
      <FormSection handleFirstNameChange={handleFirstNameChange} />
      <CVSection firstName={firstName} />
    </div>
  );
}

export default CVFORMAIN;
