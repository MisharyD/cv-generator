import { useState } from "react";

export default function PersonalForm({ personalInfo, onChangePersonalInfo }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const name = personalInfo ? personalInfo.name : "";
  const location = personalInfo ? personalInfo.location : "";
  const email = personalInfo ? personalInfo.email : "";
  const phoneNumber = personalInfo ? personalInfo.phoneNumber : "";
  const about = personalInfo ? personalInfo.about : "";

  return (
    <div className="flex flex-col gap-4 bg-white w-[80%] min-w-[400px] rounded-lg ml-[64px] p-4 px-7">
      <div
        className="flex justify-between items-center bg-white cursor-pointer"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        <h2 className="text-[28px] font-semibold flex items-center m-[0px] p-0">
          Personal Information
        </h2>
        <span>{isFormOpen ? "▲" : "▼"}</span>
      </div>

      {isFormOpen && (
        <form className="personalForm flex flex-col max-w-[400px] gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => onChangePersonalInfo({ name: e.target.value })}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              onChangePersonalInfo({ location: e.target.value })
            }
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onChangePersonalInfo({ email: e.target.value })}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) =>
              onChangePersonalInfo({ phoneNumber: e.target.value })
            }
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="about"
            placeholder="About"
            value={about}
            onChange={(e) => onChangePersonalInfo({ about: e.target.value })}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      )}
    </div>
  );
}