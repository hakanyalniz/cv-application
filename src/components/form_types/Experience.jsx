export function Experience(handleFormChange) {
  const Experience = [
    <div>
      <label htmlFor="position">Position</label>
      <br />
      <input
        type="text"
        id="position"
        name="position"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="company">Company</label>
      <br />
      <input
        type="text"
        id="company"
        name="company"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="experienceDate">Date</label>
      <br />
      <input
        type="date"
        id="experienceDate"
        name="experienceDate"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="experienceAchievements">Achievements</label>
      <br />
      <input
        type="email"
        id="experienceAchievements"
        name="experienceAchievements"
        onChange={handleFormChange}
      />
    </div>,
  ];

  return Experience;
}
