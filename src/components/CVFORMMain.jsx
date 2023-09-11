import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  const [skillForm, setSkillForm] = useState([
    { id: "skill", name: "Skill", level: 0 },
  ]);
  const [languageForm, setLanguageForm] = useState([
    { id: "language", name: "Language", level: 0 },
  ]);

  const addInput = (id) => {
    if (id === "skill") {
      // setDynamicForm([
        setSkillForm([
        ...skillForm,
        { id: "skill", name: "Skill", level: 0 },
      ]);
    } else if (id === "language") {
      // setDynamicForm([
        setLanguageForm([
        ...languageForm,
        { id: "language", name: "Language", level: 0 },
      ]);
    }
  };

  const removeInput = (index, inputType, setInputType) => {
    const updatedInputs = [...inputType];
    updatedInputs.splice(index, 1);
    setInputType(updatedInputs);
  };

  const handleDynamicChange = (index, field, event, inputType, setInputType) => {
    const updatedInputs = [...inputType];

    updatedInputs[index][field] = event.target.value;
    setInputType(updatedInputs);
  };

  const [formState, setFormState] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    cvIntroduction: "Introduction",
    position: "Position",
    company: "Company",
    experienceDate: "Date",
    experienceAchievements: "Achievements",
    placeOfEducation: "Location of Education",
    educationDate: "Date",
    educationField: "Field",
    educationExperience: "Experience",
  });

  function handleFormChange(e, objectName) {
    const value = e.target.value;
    let valueName = e.target.name;
    setFormState({ ...formState, [valueName]: value });
  }

  return (
    <div className="flex-container">
      <FormSection
        addInput={addInput}
        removeInput={removeInput}
        handleFormChange={handleFormChange}
        handleDynamicChange={handleDynamicChange}
        skillForm={skillForm}
        setSkillForm={setSkillForm}
        languageForm={languageForm}
        setLanguageForm={setLanguageForm}
      />

      <CVSection formState={formState} skillForm={skillForm} languageForm={languageForm}/>
    </div>
  );
}

export default CVFORMAIN;

// Form section needs more CSS.
// The Download button must be placed somewhere more appropriate.
// More forms need to be added so they can be linked to CV.
// A way of requesting more forms must be added to add multiple experiences, skills or language.
// Download just as an image instead of PDF?
