export function Experience(handleChange) {
  const Experience = [
    <div>
      <label htmlFor="position">Position</label>
      <br />
      <input
        type="text"
        id="position"
        name="position"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="company">Company</label>
      <br />
      <input type="text" id="company" name="company" onChange={handleChange} />
    </div>,
    <div>
      <label htmlFor="experienceDate">Date</label>
      <br />
      <input
        type="date"
        id="experienceDate"
        name="experienceDate"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="experienceAchievements">Achievements</label>
      <br />
      <input
        type="email"
        id="experienceAchievements"
        name="experienceAchievements"
        onChange={handleChange}
      />
    </div>,
  ];

  return Experience;
}
