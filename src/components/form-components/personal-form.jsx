export default function PersonalForm({ personalInfo, onChangePersonalInfo }) {
  const name = personalInfo ? personalInfo.name : "";
  const location = personalInfo ? personalInfo.location : "";
  const email = personalInfo ? personalInfo.email : "";
  const phoneNumber = personalInfo ? personalInfo.phoneNumber : "";
  const about = personalInfo ? personalInfo.about : "";

  return (
    <>
      <h2>Personal Information</h2>
      <form className="personalForm flex flex-col max-w-[400px]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => onChangePersonalInfo({ name: e.target.value })}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => onChangePersonalInfo({ location: e.target.value })}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChangePersonalInfo({ email: e.target.value })}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) =>
            onChangePersonalInfo({ phoneNumber: e.target.value })
          }
        />
        <textarea
          name="about"
          placeholder="About"
          value={about}
          onChange={(e) => onChangePersonalInfo({ about: e.target.value })}
        ></textarea>
      </form>
    </>
  );
}
