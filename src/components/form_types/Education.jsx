export function Education(handleFormChange) {
  const Education = [
    <div>
      <label htmlFor="educationField">Field</label>
      <br />
      <input
        type="text"
        id="educationField"
        name="educationField"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="placeOfEducation">Place of education</label>
      <br />
      <input
        type="text"
        id="placeOfEducation"
        name="placeOfEducation"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="educationDate">Date</label>
      <br />
      <input
        type="date"
        id="educationDate"
        name="educationDate"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="educationExperience">Key experiences</label>
      <br />
      <textarea
        id="educationExperience"
        name="educationExperience"
        rows="4"
        cols="55"
        onChange={handleFormChange}
      ></textarea>
    </div>,
  ];

  return Education;
}
