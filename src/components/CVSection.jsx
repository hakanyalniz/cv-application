import "../styles/CVSection.css";
import Html from "./Html";

function CVSection({ formState, dynamicForm, skillForm, languageForm }) {
  return (
    <div className="CV-section">
      <div className="CV-wrapper">
        <Html formState={formState} dynamicForm={dynamicForm} skillForm={skillForm} languageForm={languageForm}/>
      </div>
    </div>
  );
}

export default CVSection;
