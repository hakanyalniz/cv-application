import CV from "./CV";

export default function Html({
  formState,
  dynamicForm,
  skillForm,
  languageForm,
  experienceForm,
  educationForm,
  colorSet,
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
        colorSet={colorSet}
      />
    </>
  );
}
