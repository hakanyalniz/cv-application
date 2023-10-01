function ExpAndEduForm({
  handleDynamicChange,
  handleListChanges,
  removeInput,
  removeListItem,
  typeForm,
  setTypeForm,
  addAchievement,
}) {
  // typeForm is the different forms, such as experience or education
  // it is mentioned as inputForm somewhere else
  // Change it later on

  // the firstField and changeFieldFirst are only required because I didn't wish to
  // write the code to make one uppercase and other lower case with code
  // lowercase one is required for the handleDynamicChange to know which field to change
  // the other is required to display on DOM
  let firstField = "Input Field";
  let secondField = "Input Field";

  let changeFieldFirst = "Input Field";
  let changeFieldSecond = "Input Field";
  if (typeForm[0] && typeForm[0].id === "experience") {
    firstField = "Position";
    secondField = "Company";

    changeFieldFirst = "position";
    changeFieldSecond = "company";
  } else if (typeForm[0] && typeForm[0].id === "education") {
    firstField = "Field";
    secondField = "Location";

    changeFieldFirst = "field";
    changeFieldSecond = "location";
  }
  return (
    <form>
      {typeForm.map((dynamicInput, index) => (
        <div key={index}>
          <div className="formFieldSet">
            <div>
              <label>{firstField}</label>
              <br />
              <input
                type="text"
                id={changeFieldFirst}
                name={changeFieldFirst}
                value={dynamicInput.position}
                onChange={(event) =>
                  handleDynamicChange(
                    index,
                    // A position or field, this will decide which position to update
                    changeFieldFirst,
                    event,
                    typeForm,
                    setTypeForm
                  )
                }
              />
            </div>
            <div>
              <label>{secondField}</label>
              <br />
              <input
                type="text"
                id={changeFieldSecond}
                name={changeFieldSecond}
                value={dynamicInput.company}
                onChange={(event) =>
                  handleDynamicChange(
                    index,
                    changeFieldSecond,
                    event,
                    typeForm,
                    setTypeForm
                  )
                }
              />
            </div>
            <div>
              <label>Date</label>
              <br />
              <input
                type="date"
                id="date"
                name="date"
                value={dynamicInput.date}
                onChange={(event) =>
                  handleDynamicChange(
                    index,
                    "date",
                    event,
                    typeForm,
                    setTypeForm
                  )
                }
              />
            </div>
            <div>
              <label>Achievements</label>
              <button
                type="button"
                onClick={() => addAchievement(index, typeForm, setTypeForm)}
              >
                Add Achievement
              </button>
              <br />
              {dynamicInput.achievements.map(
                (achievement, achievementIndex) => (
                  <div
                    key={achievementIndex}
                    className="flex-container-achievement"
                  >
                    <input
                      type="text"
                      value={achievement}
                      onChange={(event) =>
                        handleListChanges(
                          index,
                          achievementIndex,
                          event,
                          typeForm,
                          setTypeForm
                        )
                      }
                    />
                    <button
                      type="button"
                      onClick={() =>
                        removeListItem(
                          index,
                          achievementIndex,
                          typeForm,
                          setTypeForm
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                )
              )}
            </div>
            <button
              type="button"
              onClick={() => removeInput(index, typeForm, setTypeForm)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </form>
  );
}

export default ExpAndEduForm;
