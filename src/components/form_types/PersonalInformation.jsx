export function PersonalInformation(handleFormChange) {
  const PersonalInformation = [
    <div>
      <label htmlFor="firstName">First name</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="lastName">Last name</label>
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="email">E-mail</label>
      <br />
      <input type="email" id="email" name="email" onChange={handleFormChange} />
    </div>,
    <div>
      <label htmlFor="phoneNumber">Phone Number</label>
      <br />
      <input
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        onChange={handleFormChange}
      />
    </div>,
    <div>
      <label htmlFor="cvIntroduction">Introduction</label>
      <br />
      <textarea
        id="introduction"
        name="cvIntroduction"
        rows="4"
        cols="55"
        onChange={handleFormChange}
      ></textarea>
    </div>,
  ];

  return PersonalInformation;
}
