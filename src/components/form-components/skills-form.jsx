import { useState } from "react";

export default function SkillsForm({
  skillsInfo,
  onChangeSkillsInfo,
  deleteSkillsInfo,
  addSkillsSection,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 bg-white w-[80%] min-w-[400px] rounded-lg ml-[64px] p-4 px-7">
      <div
        className="flex justify-between items-center bg-white cursor-pointer"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        <div className="flex gap-[0.5rem]">
          <img src="src/assets/images/skills.png" className="w-[40px] " alt="" />
          <h2 className="text-[28px] font-semibold flex items-center m-[0px] p-0">
            Skills
          </h2>
        </div>
        <span>{isFormOpen ? "▲" : "▼"}</span>
      </div>
      {isFormOpen && (
        <>
          <form className="flex flex-col gap-2 bg-white m-[0px] border-[0px] border-b-[1px] border-solid">
            <input
              type="text"
              name="skill"
              placeholder="Skill"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={(e) => {
                const form = e.target.parentElement;
                const skill = form.querySelector("input[name='skill']").value;
                const description = form.querySelector("input[name='description']").value;

                addSkillsSection({
                  skill: skill,
                  description:description
                });
                form.reset();
              }}
              className="my-4 bg-gray-100 cursor-pointer self-start p-2 rounded-lg"
            >
              Add Skill
            </button>
          </form>

          {skillsInfo.map((section) => (
            <div
              key={section.id}
              className="mb-3 border-[0px] border-b-[1px] border-solid last:border-b-0"
            >
              <div className="flex flex-col justify-between gap-[1rem]">
                <input
                  type="text"
                  className="p-1 border rounded"
                  value={section.skill}
                  onChange={(e) =>
                    onChangeSkillsInfo(section.id, { skill: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="p-1 border rounded"
                  value={section.description}
                  onChange={(e) =>
                    onChangeSkillsInfo(section.id, { description: e.target.value })
                  }
                />
                <button
                  className="text-red-500 cursor-pointer self-start p-2 rounded-lg mb-4"
                  onClick={() => deleteSkillsInfo(section.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
