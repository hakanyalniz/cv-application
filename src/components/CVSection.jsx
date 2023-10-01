import "../styles/CVSection.css";
import Html from "./Html";
import React from "react";

function CVSection({
  formState,
  dynamicForm,
  skillForm,
  languageForm,
  experienceForm,
  educationForm,
  colorSet,
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
          colorSet={colorSet}
        />
      </div>
      <div className="footer">
        <p>
          <a href="https://github.com/hakanyalniz">
            Hakan Yalnız <img src="/github-mark-white.svg" alt="GitHub logo" />{" "}
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default CVSection;
