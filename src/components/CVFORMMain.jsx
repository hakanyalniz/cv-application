import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  /**
   * State for CV color settings.
   * @property {string} colors.primary - Primary color, left navbar.
   * @property {string} colors.secondary - Secondary color, the main body.
   * @property {string} colors.borders - Border color, for sub titles and horizontal dividing lines.
   */
  const [colorSet, setColorSet] = useState({
    colors: {
      primary: "#696781",
      secondary: "#f5f3ff",
      borders: "#413f4f",
    },
  });

  /**
   * Handles color changes.
   * @param {Event} e - The event object.
   * @param {string} mode - The default button, when clicked sends in RESET as string, which turns the color scheme to default.
   */
  const handleColorChange = (e, mode) => {
    if (mode == "RESET") {
      setColorSet({
        colors: {
          primary: "#696781",
          secondary: "#f5f3ff",
          borders: "#413f4f",
        },
      });
      return;
    }
    /**
     * The colorName variable is primary, secondary or border.
     * The color variable is the hexcode.
     * The updatedColor variable is an object with the current colorSet, later on colors is accessed through it and updated.  */
    const colorName = e.target.name;
    const color = e.target.value;
    const updatedColor = { ...colorSet };

    updatedColor.colors[colorName] = color;
    setColorSet(updatedColor);
  };

  /**
   * Represents the state for experience form fields.
   * Contains an object, which has properties such as id and position. These properties create the form field when they are looped over in ExpAndEduForm.jsx
   * @type {Array}
   */
  const [experienceForm, setExperienceForm] = useState([
    {
      id: "experience",
      position: "Position",
      company: "Company",
      date: "Date",
      achievements: [""],
    },
  ]);

  /**
   * Represents the state for education form fields.
   * Contains an array, which has an object, which has properties such as id and field. These properties create the form field when they are looped over in ExpAndEduForm.jsx
   * The changes done are proccessed by addInput, which then are displayed on the CV.jsx by mapping through them.
   * @type {Array}
   */
  const [educationForm, setEducationForm] = useState([
    {
      id: "education",
      field: "Field",
      location: "Location",
      date: "Date",
      achievements: [""],
    },
  ]);

  /**
   * Represents the state for skill form fields.
   * Contains an array, which has an object, which has properties suich as id and name. These properties create the form field when they are looped over in ExpAndEduForm.jsx
   * The changes done are proccessed by addInput, which then are displayed on the CV.jsx by mapping through them.
   * skillForm and languageForm are similar
   * @type {Array}
   */
  const [skillForm, setSkillForm] = useState([
    { id: "skill", name: "Skill", level: 0 },
  ]);
  const [languageForm, setLanguageForm] = useState([
    { id: "language", name: "Language", level: 0 },
  ]);

  /**
   * Adds a new input field based on the provided ID.
   * @param {string} id - The ID of the input field to add.
   */
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

  /**
   * Adds a new achievement to an inputType.
   * This is called from ExpAndEduForm.jsx.
   * It is typically called as: addAchievement(index, typeForm, setTypeForm).
   * typeForm decides whether it is education or experience. typeForm can be experienceForm or educationForm.
   * @param {number} index - The index, which is received from typeForm when mapping over it.
   * @param {object} inputType - The input type to modify. Can be educationForm or experienceForm.
   * @param {function} setInputType - The state setter function.
   */
  const addAchievement = (index, inputType, setInputType) => {
    const updatedInputForm = [...inputType];
    updatedInputForm[index].achievements.push("");
    setInputType(updatedInputForm);
  };

  /**
   * Removes an input field based on the provided index.
   * @param {number} index - The index of the input field to remove.
   * @param {object} inputType - The input type to modify. Can be educationForm, experienceForm, skillForm or languageForm.
   * @param {function} setInputType - The state setter function.
   */
  const removeInput = (index, inputType, setInputType) => {
    const updatedInputs = [...inputType];
    updatedInputs.splice(index, 1);
    setInputType(updatedInputs);
  };

  /**
   * Removes a list item (achievement) from an input type.
   * @param {number} index - The index of the input type.
   * @param {number} achievementIndex - The index of the achievement to remove.
   * @param {object} inputType - The input type to modify. Can be educationForm or experienceForm.
   * @param {function} setInputType - The state setter function.
   */
  const removeListItem = (index, achievementIndex, inputType, setInputType) => {
    const updatedInputs = [...inputType];
    updatedInputs[index].achievements.splice(achievementIndex, 1);
    setInputType(updatedInputs);
  };

  /**
   * Handles dynamic changes in input fields (e.g., skill and language fields). Mainly used for skill and language fields, one's that can dynamically change.
   * @param {number} index - The index of the input field to update.
   * @param {string} field - The field to update (e.g., "name", "level").
   * @param {Event} event - The event triggering the change.
   * @param {object} inputType - The input type to modify. Used for skill and language fields.
   * @param {function} setInputType - The state setter function.
   */
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

  /**
   * Handles changes in list items (e.g., experience achievements or education achivements).
   * @param {number} experienceIndex - The index of the experience form.
   * @param {number} achievementIndex - The index of the achievement to update.
   * @param {Event} event - The event triggering the change.
   * @param {object} inputType - The input type to modify. Can be educationForm or experienceForm.
   * @param {function} setInputType - The state setter function.
   */
  const handleListChanges = (
    experienceIndex,
    achievementIndex,
    event,
    inputType,
    setInputType
  ) => {
    console.log(inputType);
    const updatedExperienceForm = [...inputType];
    updatedExperienceForm[experienceIndex].achievements[achievementIndex] =
      event.target.value;
    setInputType(updatedExperienceForm);
  };

  /**
   * Represents the state for form-related fields.
   * These ones do not dynamically change in number (for example, there is always one firstName and email) and are static. Dynamically changing forms are handled seperately.
   * Contains an object, which has properties suich as firstName and email. These properties create the form field in FormSection and they use PersonalInformation.jsx for form details.
   * handleFormChange is used to handle change, which are reflected on CV.jsx, which accesses them through formState.
   * @type {Object}
   */
  const [formState, setFormState] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    cvIntroduction: "Introduction",
  });

  /**
   * Handles changes in form fields (e.g., first name, last name), only "static" fields.
   * @param {Event} e - The event triggering the change.
   * @param {Deprecated} objectName - Is not used. Remove later.
   */
  function handleFormChange(e, objectName) {
    const value = e.target.value;
    let valueName = e.target.name;
    setFormState({ ...formState, [valueName]: value });
  }

  /**
   * Represents the state for day/night mode.
   * @type {boolean}
   */
  const [dayNight, setDayNight] = useState(false);

  /**
   * Handles changes in day/night mode. Then adds the class stated in index.css, to html body.
   */
  function handleDayNightChange() {
    const htmlBody = document.querySelector("body");
    setDayNight(!dayNight);

    if (dayNight === true) {
      // this is night
      htmlBody.classList.remove("light-color-mode");
      htmlBody.classList.add("dark-color-mode");
    } else {
      // this is day
      htmlBody.classList.remove("dark-color-mode");
      htmlBody.classList.add("light-color-mode");
    }
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
        handleColorChange={handleColorChange}
        handleDayNightChange={handleDayNightChange}
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
        colorSet={colorSet}
      />
    </div>
  );
}

export default CVFORMAIN;

// DONE - Form section needs more CSS.
// DONE - The Download button must be placed somewhere more appropriate.
// DONE - More forms need to be added so they can be linked to CV.
// DONE - A way of requesting more forms must be added to add multiple experiences, skills or language.
// DONE - Download just as an image instead of PDF?

// DONE - Make a day version
// DONE - Create a button that switches from day to night version

// Clean up the code
// Comment the code to make it easier to manage
