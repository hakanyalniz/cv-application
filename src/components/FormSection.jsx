import "../styles/FormSection.css";
import Forms from "./Forms.jsx";

function FormSection() {
  const personalInformation = [
    "Personal Information",
    { firstInput: "First name", htmlFor: "fname", type: "text" },
    { secondInput: "Last name", htmlFor: "lname", type: "text" },
    { thirdInput: "E-mail", htmlFor: "email", type: "email" },
    { fourthInput: "Phone", htmlFor: "phone", type: "number" },
  ];
  return (
    <div className="form-section">
      <div className="introduction"></div>
      <div className="forms">
        <Forms personalInformation={personalInformation} />
        <Forms personalInformation={personalInformation} />
      </div>
    </div>
  );
}

export default FormSection;
