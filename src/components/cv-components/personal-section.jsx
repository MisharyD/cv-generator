export default function PersonalSection({ personalInfo }) {
  const name = personalInfo ? personalInfo.name : "";
  const location = personalInfo ? personalInfo.location : "";
  const email = personalInfo ? personalInfo.email : "";
  const phoneNumber = personalInfo ? personalInfo.phoneNumber : "";
  const about = personalInfo ? personalInfo.about : "";

  return (
    <div className="personal-section flex flex-col items-center">
      <div className = "text-[32px] whitespace-pre-wrap">{name}</div>
      <div className="location-email-phone-number-container flex gap-[0.5rem] max-w-[400px] whitespace-pre-wrap">
        <div className="whitespace-pre-wrap">{location}</div>
        <div className="whitespace-pre-wrap">{location !== "" && "|  "} {email}</div>
        <div className="whitespace-pre-wrap"> {email !== "" && "|  "} {phoneNumber}</div>
      </div>
      <div className="mt-4 text-neutral-500 max-w-[400px] whitespace-pre-wrap">{about}</div>
    </div>
  );
}
