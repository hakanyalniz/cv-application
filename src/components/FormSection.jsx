import "../styles/FormSection.css";
import Forms from "./Forms";
import SkillAndLanguageForms from "./SkillAndLanguageForms";
import { PersonalInformation } from "./form_types/PersonalInformation";
import ExpAndEduForm from "./ExpAndEduForm";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function FormSection({
  handleFormChange,
  handleDynamicChange,
  handleListChanges,
  handleColorChange,
  addInput,
  addAchievement,
  removeInput,
  removeListItem,
  skillForm,
  setSkillForm,
  languageForm,
  setLanguageForm,
  experienceForm,
  setExperienceForm,
  educationForm,
  setEducationForm,
}) {
  return (
    <div className="form-section">
      <div className="menu">
        <button
          onClick={() => {
            const check = document.getElementById("CVCanvas");
            html2canvas(check, {
              scale: 2,
            }).then((canvas) => {
              canvas.toBlob(function (blob) {
                window.saveAs(blob, "my_CV.jpg");
              });
            });
          }}
        >
          Download
        </button>
        <button type="button" onClick={(e) => handleColorChange(e, "RESET")}>
          Default
        </button>
        <div className="color-picker">
          <input
            type="color"
            id="primary"
            name="primary"
            onChange={(e) => handleColorChange(e)}
          />
          <label htmlFor="primary">Primary</label>
        </div>
        <div className="color-picker">
          <input
            type="color"
            id="secondary"
            name="secondary"
            onChange={(e) => handleColorChange(e)}
          />
          <label htmlFor="secondary">Secondary</label>
        </div>
        <div className="color-picker">
          <input
            type="color"
            id="borders"
            name="borders"
            onChange={(e) => handleColorChange(e)}
          />
          <label htmlFor="borders">Border</label>
        </div>
      </div>
      <hr />
      <div className="forms">
        <Forms
          formType={PersonalInformation(handleFormChange)}
          legend="Personal Information"
        />
        <fieldset>
          <button onClick={() => addInput("skill")}>Add Skill</button>
          <legend>Skills</legend>
          <SkillAndLanguageForms
            typeForm={skillForm}
            setTypeForm={setSkillForm}
            handleDynamicChange={handleDynamicChange}
            removeInput={removeInput}
          />
        </fieldset>

        <fieldset>
          <button onClick={() => addInput("language")}>Add Language</button>
          <legend>Languages</legend>
          <SkillAndLanguageForms
            typeForm={languageForm}
            setTypeForm={setLanguageForm}
            handleDynamicChange={handleDynamicChange}
            removeInput={removeInput}
          />
        </fieldset>

        <fieldset>
          <button onClick={() => addInput("experience")}>Add Experience</button>
          <legend>Experiences</legend>
          <ExpAndEduForm
            typeForm={experienceForm}
            addAchievement={addAchievement}
            setTypeForm={setExperienceForm}
            handleDynamicChange={handleDynamicChange}
            handleListChanges={handleListChanges}
            removeInput={removeInput}
            removeListItem={removeListItem}
          />
        </fieldset>

        <fieldset>
          <button onClick={() => addInput("education")}>Add Education</button>
          <legend>Education</legend>
          <ExpAndEduForm
            typeForm={educationForm}
            addAchievement={addAchievement}
            setTypeForm={setEducationForm}
            handleDynamicChange={handleDynamicChange}
            handleListChanges={handleListChanges}
            removeInput={removeInput}
            removeListItem={removeListItem}
          />
        </fieldset>
      </div>
    </div>
  );
}

export default FormSection;
