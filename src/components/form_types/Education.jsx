export function Education(handleChange) {
  const Education = [
    <div>
      <label htmlFor="educationField">Field</label>
      <br />
      <input
        type="text"
        id="educationField"
        name="educationField"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="placeOfEducation">Place of education</label>
      <br />
      <input
        type="text"
        id="placeOfEducation"
        name="placeOfEducation"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="educationDate">Date</label>
      <br />
      <input
        type="date"
        id="educationDate"
        name="educationDate"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="educationExperience">Key experiences</label>
      <br />
      <textarea
        id="educationExperience"
        name="educationExperience"
        onChange={handleChange}
      ></textarea>
    </div>,
  ];

  return Education;
}
