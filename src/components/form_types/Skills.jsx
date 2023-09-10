export function Skills(handleSkillChange) {
  const Skills = [
    <div>
      <input
        type="text"
        id="skill"
        name="skill"
        placeholder="Enter skill"
        onChange={(e) => {
          handleSkillChange(e, "skillName");
        }}
      />
      <div className="custom-select" style={{ width: 200 }}>
        <select
          name="skill"
          onChange={(e) => {
            handleSkillChange(e, "skillLevel");
          }}
        >
          <option value="0">Select Level:</option>
          <option value="1">Beginner</option>
          <option value="2">Advanced</option>
          <option value="3">Competent</option>
          <option value="4">Expert</option>
        </select>
      </div>
    </div>,
  ];

  return Skills;
}
