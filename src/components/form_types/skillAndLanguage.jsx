export function skillAndLanguage(handleChange) {
  const skillAndLanguage = [
    <fieldset>
      <legend>Skill</legend>
      <div>
        <input
          type="text"
          id="skill"
          name="skill"
          placeholder="Enter skill"
          onChange={(e) => {
            handleChange(e, "skillName");
          }}
        />
        <div className="custom-select" style={{ width: 200 }}>
          <select
            name="skill"
            onChange={(e) => {
              handleChange(e, "skillLevel");
            }}
          >
            <option value="0">Select Level:</option>
            <option value="1">Beginner</option>
            <option value="2">Advanced</option>
            <option value="3">Competent</option>
            <option value="4">Expert</option>
          </select>
        </div>
      </div>
    </fieldset>,
    <fieldset>
      <legend>Language</legend>
      <div>
        <input
          type="text"
          id="language"
          name="language"
          placeholder="Enter language"
          onChange={(e) => {
            handleChange(e, "languageName");
          }}
        />
        <div className="custom-select" style={{ width: 200 }}>
          <select
            name="language"
            onChange={(e) => {
              handleChange(e, "languageLevel");
            }}
          >
            <option value="0">Select Level:</option>
            <option value="1">Beginner</option>
            <option value="2">Advanced</option>
            <option value="3">Competent</option>
            <option value="4">Expert</option>
          </select>
        </div>
      </div>
    </fieldset>,
  ];

  return skillAndLanguage;
}
