import "../styles/FormSection.css";
import Forms from "./forms";
import { PersonalInformation } from "./form_types/PersonalInformation";
import { Experience } from "./form_types/Experience";
import { Education } from "./form_types/Education";

function FormSection({ handleFirstNameChange }) {
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
          formType={PersonalInformation(handleFirstNameChange)}
          legend="Personal Information"
        />
        <Forms formType={Experience} legend="Experience" />
        <Forms formType={Education} legend="Education" />
      </div>
    </div>
  );
}

export default FormSection;
