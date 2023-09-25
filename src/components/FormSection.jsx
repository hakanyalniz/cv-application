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
      <div className="form-title">CV Creator</div>
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
        <div className="formFieldSet">
          <Forms
            formType={PersonalInformation(handleFormChange)}
            legend="Personal Information"
          />
        </div>

        <div className="formFieldSet">
          <legend>Skills</legend>
          <button onClick={() => addInput("skill")}>Add Skill</button>
          <SkillAndLanguageForms
            typeForm={skillForm}
            setTypeForm={setSkillForm}
            handleDynamicChange={handleDynamicChange}
            removeInput={removeInput}
          />
        </div>

        <div className="formFieldSet">
          <legend>Languages</legend>
          <button onClick={() => addInput("language")}>Add Language</button>
          <SkillAndLanguageForms
            typeForm={languageForm}
            setTypeForm={setLanguageForm}
            handleDynamicChange={handleDynamicChange}
            removeInput={removeInput}
          />
        </div>

        <div className="formFieldSet">
          <legend>Experiences</legend>
          <button onClick={() => addInput("experience")}>Add Experience</button>
          <ExpAndEduForm
            typeForm={experienceForm}
            addAchievement={addAchievement}
            setTypeForm={setExperienceForm}
            handleDynamicChange={handleDynamicChange}
            handleListChanges={handleListChanges}
            removeInput={removeInput}
            removeListItem={removeListItem}
          />
        </div>

        <div className="formFieldSet">
          <legend>Education</legend>
          <button onClick={() => addInput("education")}>Add Education</button>
          <ExpAndEduForm
            typeForm={educationForm}
            addAchievement={addAchievement}
            setTypeForm={setEducationForm}
            handleDynamicChange={handleDynamicChange}
            handleListChanges={handleListChanges}
            removeInput={removeInput}
            removeListItem={removeListItem}
          />
        </div>
      </div>
    </div>
  );
}

export default FormSection;
