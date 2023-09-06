function CV() {
  return (
    <div id="jspdf" className="CVPage">
      <div className="left-navbar">
        <div className="name-title">
          <div className="fullName">Example Example</div>
        </div>
        <div className="personal-information">
          <div className="title">Personal Info</div>
          <div className="email">example@live.com</div>
          <div className="phone">123 123 123</div>
        </div>
        <div className="skills">
          <div className="title">Skills</div>
          <div>Skill 1</div>
          <div>Skill 2</div>
          <div>Skill 3</div>
        </div>
        <div className="languages">
          <div className="title">Languages</div>
          <div>Language 1</div>
          <div>Language 2</div>
        </div>
      </div>
      <div className="main-body">
        <div className="introduction">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          tempore debitis. Ex quaerat magni optio, suscipit omnis atque rem
          natus quam nihil, quasi perferendis illo quae est expedita dolor nam?
        </div>

        <hr />

        <div className="experience">
          <div className="title">Experience</div>
          <div className="experience-1">Example</div>
          <div className="experience-2">Example</div>
          <div className="experience-3">Example</div>
        </div>

        <hr />

        <div className="education">
          <div className="title">Education</div>
          <div className="education-1"></div>
        </div>
      </div>
    </div>
  );
}

export default CV;
