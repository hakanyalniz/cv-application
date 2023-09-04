import "../styles/FormSection.css";
import Forms from "./Forms";
import { PersonalInformation } from "./form_types/PersonalInformation";

function FormSection() {
  return (
    <div className="form-section">
      <div className="introduction"></div>
      <div className="forms">
        <Forms
          personalInformation={PersonalInformation}
          legend="Personal Information"
        />
        <Forms personalInformation={PersonalInformation} legend="Experience" />
      </div>
    </div>
  );
}

export default FormSection;
