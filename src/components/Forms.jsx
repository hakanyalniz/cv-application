function Forms({ personalInformation, legend }) {
  return (
    <form>
      <fieldset>
        <legend>{legend}</legend>
        {personalInformation.map((inputElement) => {
          return (
            <div>
              <label htmlFor={inputElement.htmlFor}>
                {inputElement.labelContent}
              </label>
              <br />
              <input
                type={inputElement.type}
                id={inputElement.htmlFor}
                name={inputElement.htmlFor}
              />
            </div>
          );
        })}
      </fieldset>
    </form>
  );
}

export default Forms;
