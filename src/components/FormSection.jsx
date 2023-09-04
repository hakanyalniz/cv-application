import "../styles/FormSection.css";
import Forms from "./forms";
import { PersonalInformation } from "./form_types/PersonalInformation";
import { Experience } from "./form_types/Experience";

function FormSection() {
  return (
    <div className="form-section">
      <div className="introduction"></div>
      <div className="forms">
        <Forms
          personalInformation={PersonalInformation}
          legend="Personal Information"
        />
        <Forms personalInformation={Experience} legend="Experience" />
      </div>
    </div>
  );
}

export default FormSection;
