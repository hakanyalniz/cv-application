function Forms({ formType, legend }) {
  return (
    <form>
      <legend>{legend}</legend>
      {formType.map((inputElement, index) => {
        return <div key={index}>{inputElement}</div>;
      })}
    </form>
  );
}

export default Forms;
