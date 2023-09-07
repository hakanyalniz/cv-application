import "../styles/CV.css";

function CV({ firstName }) {
  return (
    <div id="jspdf" className="CVPage">
      <div className="left-navbar">
        <div className="name-title">
          <div className="fullName">{firstName}</div>
        </div>
        <div className="personal-information padding-within-elements">
          <div className="title border-bar">Personal Info</div>
          <div className="email">
            <div className="sub-title">E-Mail</div>
            example@live.com
          </div>
          <div className="phone">
            <div className="sub-title">Phone</div>
            123 123 123
          </div>
        </div>
        <div className="skills padding-within-elements">
          <div className="title border-bar">Skills</div>
          <div>Skill 1</div>
          <div className="skill-bar-1">
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>

          <div>Skill 2</div>
          <div className="skill-bar-2">
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>

          <div>Skill 3</div>
          <div className="skill-bar-3">
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>
        </div>
        <div className="languages padding-within-elements">
          <div className="title border-bar">Languages</div>
          <div>Language 1</div>
          <div className="skill-bar-1">
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>
          <div>Language 2</div>
          <div className="skill-bar-2">
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            <span className="bar-4"></span>
          </div>
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
