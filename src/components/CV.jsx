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

        <div className="experience">
          <div className="title sub-title">Experience</div>
          <div className="experience-grid">
            <div className="experience-date">2010-2020</div>
            <div className="experience-details">
              <div className="title">Computer Scientist</div>
              <div className="title-location">Ipsum Computers</div>
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

            <div className="experience-date">2020-Present</div>
            <div className="experience-details">
              <div className="title">Engineer</div>
              <div className="title-location">Lorem Engineer</div>
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
            <div className="education-date">1990-2000</div>
            <div className="education-details">
              <div className="title">Masters in Lorem</div>
              <div className="title-location">Lorem School of Ipsum</div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              expedita neque nihil natus possimus quas pariatur ipsum, sequi
              sunt et, blanditiis incidunt modi cupiditate nam magni quidem
              quae! Neque, vitae?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
