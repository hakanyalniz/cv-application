function Forms({ personalInformation, legend }) {
  return (
    <form>
      <fieldset>
        <legend>{legend}</legend>
        {personalInformation.map((inputElement) => {
          return inputElement;
        })}
      </fieldset>
    </form>
  );
}

export default Forms;
