import "../styles/FormSection.css";
import Forms from "./Forms";
import SkillAndLanguageForms from "./SkillAndLanguageForms";
import { PersonalInformation } from "./form_types/PersonalInformation";
import { Experience } from "./form_types/Experience";
import { Education } from "./form_types/Education";
import ExperienceForm from "./ExperienceForm";

function FormSection({
  handleFormChange,
  handleDynamicChange,
  handleListChanges,
  addInput,
  addAchievement,
  removeInput,
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
      <div className="introduction">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in saepe
        nesciunt optio, debitis, commodi reprehenderit inventore neque, ut iusto
        cupiditate quod obcaecati excepturi dolorem? Reprehenderit fugit fuga
        sint cumque.
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

          {/* {dynamicForm
            .filter((input) => input.id === "skill") // Filter only items with id "skill"
            .map((filteredInput, index) => (
              <DynamicForms
                key={index} // Don't forget to add a unique key
                dynamicForm={[filteredInput]} // Pass only the filtered "skill" item
                handleDynamicChange={handleDynamicChange}
                removeInput={removeInput}
              />
            ))} */}
          {/* <DynamicForms
            dynamicForm={dynamicForm}
            handleDynamicChange={handleDynamicChange}
            removeInput={removeInput}
          /> */}
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
          <ExperienceForm
            typeForm={experienceForm}
            addAchievement={addAchievement}
            setTypeForm={setExperienceForm}
            handleDynamicChange={handleDynamicChange}
            handleListChanges={handleListChanges}
            removeInput={removeInput}
          />
        </fieldset>

        <fieldset>
          <button onClick={() => addInput("education")}>Add Education</button>
          <legend>Education</legend>
          <ExperienceForm
            typeForm={educationForm}
            addAchievement={addAchievement}
            setTypeForm={setEducationForm}
            handleDynamicChange={handleDynamicChange}
            handleListChanges={handleListChanges}
            removeInput={removeInput}
          />
        </fieldset>
      </div>
    </div>
  );
}

export default FormSection;
