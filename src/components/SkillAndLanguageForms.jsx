function SkillAndLanguageForms({
  handleDynamicChange,
  removeInput,
  typeForm,
  setTypeForm,
}) {
  return (
    <form>
      {typeForm.map((dynamicInput, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter input"
            value={dynamicInput.name}
            onChange={(event) =>
              handleDynamicChange(index, "name", event, typeForm, setTypeForm)
            }
          />
          <select
            value={dynamicInput.level}
            onChange={(event) =>
              handleDynamicChange(index, "level", event, typeForm, setTypeForm)
            }
          >
            <option value="0">Select Level:</option>
            <option value="1">Beginner</option>
            <option value="2">Advanced</option>
            <option value="3">Competent</option>
            <option value="4">Expert</option>
          </select>
          {/* {console.log(index)} */}
          <button
            type="button"
            onClick={() => removeInput(index, typeForm, setTypeForm)}
          >
            Remove
          </button>
        </div>
      ))}
    </form>
  );
}

export default SkillAndLanguageForms;
