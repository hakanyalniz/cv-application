import "../styles/FormSection.css";
import Forms from "./Forms.jsx";

function FormSection() {
  const personalInformation = [
    { labelContent: "First name", htmlFor: "fname", type: "text" },
    { labelContent: "Last name", htmlFor: "lname", type: "text" },
    { labelContent: "E-mail", htmlFor: "email", type: "email" },
    { labelContent: "Phone", htmlFor: "phone", type: "number" },
  ];
  return (
    <div className="form-section">
      <div className="introduction"></div>
      <div className="forms">
        <Forms
          personalInformation={personalInformation}
          legend="Personal Information"
        />
        <Forms personalInformation={personalInformation} legend="Experience" />
      </div>
    </div>
  );
}

export default FormSection;
