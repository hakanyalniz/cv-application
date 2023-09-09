export function PersonalInformation(handleChange) {
  const PersonalInformation = [
    <div>
      <label htmlFor="firstName">First name</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="lastName">Last name</label>
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
      />
    </div>,
    <div>
      <label htmlFor="email">E-mail</label>
      <br />
      <input type="email" id="email" name="email" onChange={handleChange} />
    </div>,
    <div>
      <label htmlFor="phoneNumber">Phone Number</label>
      <br />
      <input
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        onChange={handleChange}
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
        onChange={handleChange}
      ></textarea>
    </div>,
  ];

  return PersonalInformation;
}
