import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import CV from "./CV";

export default function Html({
  formState,
  dynamicForm,
  skillForm,
  languageForm,
  experienceForm,
  educationForm,
}) {
  return (
    <>
      <CV
        formState={formState}
        dynamicForm={dynamicForm}
        skillForm={skillForm}
        languageForm={languageForm}
        experienceForm={experienceForm}
        educationForm={educationForm}
      />
    </>
  );
}
