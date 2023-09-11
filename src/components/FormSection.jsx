import "../styles/FormSection.css";
import Forms from "./Forms";
import DynamicForms from "./DynamicForms";
import { PersonalInformation } from "./form_types/PersonalInformation";
import { Experience } from "./form_types/Experience";
import { Education } from "./form_types/Education";


function FormSection({
  handleFormChange,
  handleDynamicChange,
  addInput,
  removeInput,
  skillForm,
  setSkillForm,
  languageForm,
  setLanguageForm
}) {
  // const skillForms = dynamicForm.filter((form) => form.id === "skill");
  // // console.log(skillForms);
  // const languageForms = dynamicForm.filter((form) => form.id === "language");
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
          <DynamicForms
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
          <DynamicForms
            typeForm={languageForm}
            setTypeForm={setLanguageForm}
            handleDynamicChange={handleDynamicChange}
            removeInput={removeInput}
          />
        </fieldset>

        <Forms formType={Experience(handleFormChange)} legend="Experience" />
        <Forms formType={Education(handleFormChange)} legend="Education" />
      </div>
    </div>
  );
}

export default FormSection;
