import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  const [experienceForm, setExperienceForm] = useState([
    {
      id: "experience",
      position: "Position",
      company: "Company",
      date: "Date",
      achievements: [""],
    },
  ]);

  const [educationForm, setEducationForm] = useState([
    {
      id: "education",
      field: "Field",
      location: "Location",
      date: "Date",
      achievements: [""],
    },
  ]);

  const [skillForm, setSkillForm] = useState([
    { id: "skill", name: "Skill", level: 0 },
  ]);
  const [languageForm, setLanguageForm] = useState([
    { id: "language", name: "Language", level: 0 },
  ]);

  const addInput = (id) => {
    if (id === "skill") {
      setSkillForm([...skillForm, { id: "skill", name: "Skill", level: 0 }]);
    } else if (id === "language") {
      setLanguageForm([
        ...languageForm,
        { id: "language", name: "Language", level: 0 },
      ]);
    } else if (id === "experience") {
      setExperienceForm([
        ...experienceForm,
        {
          id: "experience",
          position: "Position",
          company: "Company",
          date: "Date",
          achievements: [""],
        },
      ]);
    } else if (id === "education") {
      setEducationForm([
        ...educationForm,
        {
          id: "education",
          field: "Field",
          location: "Location",
          date: "Date",
          achievements: [""],
        },
      ]);
    }
  };

  const addAchievement = (index, inputType, setInputType) => {
    const updatedInputForm = [...inputType];
    updatedInputForm[index].achievements.push("");
    setInputType(updatedInputForm);
  };

  const removeInput = (index, inputType, setInputType) => {
    const updatedInputs = [...inputType];
    updatedInputs.splice(index, 1);
    setInputType(updatedInputs);
  };

  const removeListItem = (index, achievementIndex, inputType, setInputType) => {
    const updatedInputs = [...inputType];
    updatedInputs[index].achievements.splice(achievementIndex, 1);
    setInputType(updatedInputs);
  };

  // For skill and language fields, one's that can dynamically change
  const handleDynamicChange = (
    index,
    field,
    event,
    inputType,
    setInputType
  ) => {
    const updatedInputs = [...inputType];

    updatedInputs[index][field] = event.target.value;
    setInputType(updatedInputs);
  };

  const handleListChanges = (
    experienceIndex,
    achievementIndex,
    event,
    inputType,
    setInputType
  ) => {
    const updatedExperienceForm = [...inputType];
    updatedExperienceForm[experienceIndex].achievements[achievementIndex] =
      event.target.value;
    setInputType(updatedExperienceForm);
  };

  const [formState, setFormState] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    cvIntroduction: "Introduction",
  });

  // For the above states, only "static" fields
  function handleFormChange(e, objectName) {
    const value = e.target.value;
    let valueName = e.target.name;
    setFormState({ ...formState, [valueName]: value });
  }

  return (
    <div className="flex-container">
      <FormSection
        addInput={addInput}
        addAchievement={addAchievement}
        removeInput={removeInput}
        removeListItem={removeListItem}
        handleFormChange={handleFormChange}
        handleDynamicChange={handleDynamicChange}
        handleListChanges={handleListChanges}
        skillForm={skillForm}
        setSkillForm={setSkillForm}
        languageForm={languageForm}
        setLanguageForm={setLanguageForm}
        experienceForm={experienceForm}
        setExperienceForm={setExperienceForm}
        educationForm={educationForm}
        setEducationForm={setEducationForm}
      />

      <CVSection
        formState={formState}
        skillForm={skillForm}
        languageForm={languageForm}
        experienceForm={experienceForm}
        educationForm={educationForm}
      />
    </div>
  );
}

export default CVFORMAIN;

// Form section needs more CSS.
// The Download button must be placed somewhere more appropriate.
// DONE - More forms need to be added so they can be linked to CV.
// DONE - A way of requesting more forms must be added to add multiple experiences, skills or language.
// DONE - Download just as an image instead of PDF?
