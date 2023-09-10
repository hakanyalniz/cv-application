function DynamicForms({ formType, legend }) {
  return (
    <form>
      {formType.map((inputElement) => {
        return inputElement;
      })}
    </form>
  );
}

export default DynamicForms;
