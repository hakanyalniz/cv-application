import "../styles/CV.css";

function CV({
  formState,
  dynamicForm,
  skillForm,
  languageForm,
  experienceForm,
  educationForm,
}) {
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
          {skillForm.map((input, index) => {
            return (
              <>
                <div>{input.name}</div>
                <div className={`skill-bar-1 bar-level-${input.level}`}>
                  <span className="bar-1"></span>
                </div>
              </>
            );
          })}
        </div>
        <div className="languages padding-within-elements">
          <div className="title border-bar">Languages</div>
          {languageForm.map((input, index) => {
            return (
              <>
                <div>{input.name}</div>
                <div className={`skill-bar-1 bar-level-${input.level}`}>
                  <span className="bar-1"></span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="main-body">
        <div className="introduction">{formState.cvIntroduction}</div>

        <div className="experience">
          <div className="title sub-title">Experience</div>
          {experienceForm.map((input, index) => {
            return (
              <>
                <div className="experience-grid">
                  <div className="experience-date">{input.date}</div>
                  <div className="experience-details">
                    <div className="title">{input.position}</div>
                    <div className="title-location">{input.company}</div>
                    <ul>
                      {input.achievements.map((listItem) => {
                        return <li>{listItem}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="education">
          <div className="title sub-title">Education</div>
          {educationForm.map((input, index) => {
            return (
              <>
                <div className="education-grid">
                  <div className="education-date">{input.date}</div>
                  <div className="education-details">
                    <div className="title">{input.field}</div>
                    <div className="title-location">{input.location}</div>
                    <ul>
                      {input.achievements.map((listItem) => {
                        return <li>{listItem}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CV;
