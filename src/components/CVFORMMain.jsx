import FormSection from "./FormSection.jsx";
import CVSection from "./CVSection.jsx";
import { useState } from "react";

function CVFORMAIN() {
  const [formState, setFormState] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    cvIntroduction: "Introduction",
    position: "Position",
    company: "Company",
    experienceDate: "Date",
    experienceAchievements: "Achievements",
    placeOfEducation: "Location of Education",
    educationDate: "Date",
    educationField: "Field",
    educationExperience: "Experience",
  });

  // const [lastName, setLastName] = useState("Last Name");
  // const [email, setEmail] = useState("Email");
  // const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  // const [cvIntroduction, setCvIntroduction] = useState("Introduction");
  // const [position, setPosition] = useState("Position");
  // const [company, setCompany] = useState("Company");
  // const [experienceDate, setExperienceDate] = useState("Date");
  // const [experienceAchievements, setExperienceAchievements] =
  //   useState("Achievements");
  // const [placeOfEducation, setPlaceOfEducation] = useState(
  //   "Location of Education"
  // );
  // const [educationDate, setEducationDate] = useState("Date");
  // const [educationField, setEducationField] = useState("Field");
  // const [educationExperience, setEducationExperience] = useState("Experience");

  function handleChange(e) {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  }

  return (
    <div className="flex-container">
      <FormSection handleChange={handleChange} />
      <CVSection formState={formState} />
    </div>
  );
}

export default CVFORMAIN;
