function DynamicForms({ dynamicForm, handleDynamicChange, removeInput }) {
  return (
    <form>
      {dynamicForm.map((dynamicInput, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter input"
            value={dynamicInput.name}
            onChange={(event) => handleDynamicChange(index, "name", event)}
          />
          <select
            value={dynamicInput.level}
            onChange={(event) => handleDynamicChange(index, "level", event)}
          >
            <option value="0">Select Level:</option>
            <option value="1">Beginner</option>
            <option value="2">Advanced</option>
            <option value="3">Competent</option>
            <option value="4">Expert</option>
          </select>
          <button type="button" onClick={() => removeInput(index)}>
            Remove
          </button>
        </div>
      ))}
    </form>
  );
}

export default DynamicForms;
