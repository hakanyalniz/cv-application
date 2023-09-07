function Forms({ formType, legend }) {
  return (
    <form>
      <fieldset>
        <legend>{legend}</legend>
        {formType.map((inputElement) => {
          return inputElement;
        })}
      </fieldset>
    </form>
  );
}

export default Forms;
