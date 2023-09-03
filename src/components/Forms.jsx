function Forms({ personalInformation }) {
  const [legendName, firstObj, secondObj, thirdObj, fourthObj] =
    personalInformation;

  return (
    <form>
      <fieldset>
        <legend>{legendName}</legend>
        <div>
          <label htmlFor={firstObj.htmlFor}>{firstObj.firstInput}</label>
          <br />
          <input
            type={firstObj.type}
            id={firstObj.htmlFor}
            name={firstObj.htmlFor}
          />
        </div>

        <div>
          <label htmlFor={secondObj.htmlFor}>{secondObj.secondInput}</label>
          <br />
          <input
            type={secondObj.type}
            id={secondObj.htmlFor}
            name={secondObj.htmlFor}
          />
        </div>

        <div>
          <label htmlFor={thirdObj.htmlFor}>{thirdObj.thirdInput}</label>
          <br />
          <input
            type={thirdObj.type}
            id={thirdObj.htmlFor}
            name={thirdObj.htmlFor}
          />
        </div>

        <div>
          <label htmlFor={fourthObj.htmlFor}>{fourthObj.fourthInput}</label>
          <br />
          <input
            type={fourthObj.type}
            id={fourthObj.htmlFor}
            name={fourthObj.htmlFor}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default Forms;
