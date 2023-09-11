import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  // const [dynamicForm, setDynamicForm] = useState([
  //   { id: "skill", skillName: "Skill", skillLevel: 0 },
  //   { id: "language", languageName: "Language", languageLevel: 0 },
  // ]);

  const [dynamicForm, setDynamicForm] = useState([
    { id: "skill", name: "Skill", level: 0 },
    { id: "language", name: "Language", level: 0 },
  ]);

  const addInput = (id) => {
    if (id === "skill") {
      setDynamicForm([
        ...dynamicForm,
        { id: "skill", name: "Skill", level: 0 },
      ]);
    } else if (id === "language") {
      setDynamicForm([
        ...dynamicForm,
        { id: "language", name: "Language", level: 0 },
      ]);
    }
  };

  const removeInput = (index) => {
    const updatedInputs = [...dynamicForm];
    updatedInputs.splice(index, 1);
    setDynamicForm(updatedInputs);
  };

  const handleDynamicChange = (index, field, event) => {
    const updatedInputs = [...dynamicForm];
    console.log(updatedInputs[index][field]);

    updatedInputs[index][field] = event.target.value;
    setDynamicForm(updatedInputs);
    // console.log(dynamicForm);
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
        dynamicForm={dynamicForm}
        addInput={addInput}
        removeInput={removeInput}
        handleFormChange={handleFormChange}
        handleDynamicChange={handleDynamicChange}
      />
      <CVSection formState={formState} dynamicForm={dynamicForm} />
    </div>
  );
}

export default CVFORMAIN;

// Form section needs more CSS.
// The Download button must be placed somewhere more appropriate.
// More forms need to be added so they can be linked to CV.
// A way of requesting more forms must be added to add multiple experiences, skills or language.
// Download just as an image instead of PDF?
