export function Languages(handleFormChange) {
  const Languages = [
    <div>
      <input
        type="text"
        id="language"
        name="language"
        placeholder="Enter language"
        onChange={(e) => {
          handleFormChange(e, "languageName");
        }}
      />
      <div className="custom-select" style={{ width: 200 }}>
        <select
          name="language"
          onChange={(e) => {
            handleFormChange(e, "languageLevel");
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

  return Languages;
}
