import "../styles/FormSection.css";
import Forms from "./forms";
import { PersonalInformation } from "./form_types/PersonalInformation";
import { Experience } from "./form_types/Experience";
import { Education } from "./form_types/Education";

function FormSection() {
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
          personalInformation={PersonalInformation}
          legend="Personal Information"
        />
        <Forms personalInformation={Experience} legend="Experience" />
        <Forms personalInformation={Education} legend="Education" />
      </div>
    </div>
  );
}

export default FormSection;
