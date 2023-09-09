import "../styles/CV.css";

function CV({ formState }) {
  return (
    <div id="CVCanvas" className="CVPage">
      <div className="left-navbar">
        <div className="name-title">
          <div className="fullName">
            {`${formState.firstName} ${formState.lastName}`}
          </div>
        </div>
        <div className="personal-information padding-within-elements">
          <div className="title border-bar">Personal Info</div>
          <div className="email">
            <div className="sub-title">E-Mail</div>
            {formState.email}
          </div>
          <div className="phone">
            <div className="sub-title">Phone</div>
            {formState.phoneNumber}
          </div>
        </div>
        <div className="skills padding-within-elements">
          <div className="title border-bar">Skills</div>
          <div>{formState.skill.skillName}</div>
          <div
            className={`skill-bar-1 bar-level-${formState.skill.skillLevel}`}
          >
            <span className="bar-1"></span>
          </div>
        </div>
        <div className="languages padding-within-elements">
          <div className="title border-bar">Languages</div>
          <div>{formState.language.languageName}</div>
          <div
            className={`skill-bar-1 bar-level-${formState.language.languageLevel}`}
          >
            <span className="bar-1"></span>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="introduction">{formState.cvIntroduction}</div>

        <div className="experience">
          <div className="title sub-title">Experience</div>
          <div className="experience-grid">
            <div className="experience-date">{formState.experienceDate}</div>
            <div className="experience-details">
              <div className="title">{formState.position}</div>
              <div className="title-location">{formState.company}</div>
              <ul>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  architecto?
                </li>
                <li>
                  Repellendus quod dicta nostrum hic neque at doloremque soluta
                </li>
                <li>
                  consectetur perspiciatis, libero vel reiciendis. Voluptatibus
                </li>
                <li>laboriosam vel iusto praesentium dolorum blanditiis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education">
          <div className="title sub-title">Education</div>
          <div className="education-grid">
            <div className="education-date">{formState.educationDate}</div>
            <div className="education-details">
              <div className="title">{formState.educationField}</div>
              <div className="title-location">{formState.placeOfEducation}</div>
              {formState.educationExperience}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
