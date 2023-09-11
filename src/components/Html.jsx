import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import CV from "./CV";

export default function Html({ formState, dynamicForm, skillForm, languageForm }) {
  return (
    <>
      <CV formState={formState} dynamicForm={dynamicForm} skillForm={skillForm} languageForm={languageForm}/>
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
    </>
  );
}
