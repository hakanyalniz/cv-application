import "../styles/FormSection.css";

function FormSection() {
  return (
    <div className="form-section">
      <div className="introduction"></div>
      <div className="forms">
        <form>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
