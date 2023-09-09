import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  const [formState, setFormState] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    cvIntroduction: "Introduction",
    skill: { skillName: "Skill", skillLevel: 0 },
    language: { languageName: "Language", languageLevel: 0 },
    position: "Position",
    company: "Company",
    experienceDate: "Date",
    experienceAchievements: "Achievements",
    placeOfEducation: "Location of Education",
    educationDate: "Date",
    educationField: "Field",
    educationExperience: "Experience",
  });

  function handleChange(e, objectName) {
    const value = e.target.value;
    let valueName = e.target.name;

    if (typeof formState[valueName] == "object") {
      setFormState({
        ...formState,
        [valueName]: { ...formState[valueName], [objectName]: value },
      });
    } else {
      setFormState({ ...formState, [valueName]: value });
    }
  }

  return (
    <div className="flex-container">
      <FormSection handleChange={handleChange} />
      <CVSection formState={formState} />
    </div>
  );
}

export default CVFORMAIN;

// Form section needs more CSS.
// The Download button must be placed somewhere more appropriate.
// More forms need to be added so they can be linked to CV.
// A way of requesting more forms must be added to add multiple experiences, skills or language.
// Download just as an image instead of PDF?
