function Forms({ formType, legend }) {
  return (
    <form>
      <legend>{legend}</legend>
      {formType.map((inputElement) => {
        return inputElement;
      })}
    </form>
  );
}

export default Forms;
