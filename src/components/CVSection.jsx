import "../styles/CVSection.css";
import Html from "./Html";

function CVSection({
  formState,
  dynamicForm,
  skillForm,
  languageForm,
  experienceForm,
  educationForm,
}) {
  return (
    <div className="CV-section">
      <div className="CV-wrapper">
        <Html
          formState={formState}
          dynamicForm={dynamicForm}
          skillForm={skillForm}
          languageForm={languageForm}
          experienceForm={experienceForm}
          educationForm={educationForm}
        />
      </div>
    </div>
  );
}

export default CVSection;
