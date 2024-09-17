export default function SkillsForm({
  skillsInfo,
  onChangeSkillsInfo,
  deleteSkillsInfo,
  addSkillsSection,
}) {
  return (
    <div>
      <h2>Skills:</h2>
      <form className="skillsForm mb-4 flex flex-col">
        <input type="text" name="skillName" placeholder="Skill Name" />
        <textarea
          name="description"
          placeholder="Description"
          className="mb-2"
        />
        <button
          type="button"
          onClick={(e) => {
            const form = e.target.parentElement;

            const skillName = form.querySelector(
              "input[name='skillName']",
            ).value;
            const description = form.querySelector("textarea").value;

            addSkillsSection({ skillName, description });
            form.reset();
          }}
        >
          Add Skill Section
        </button>
      </form>

      <h3>Previous Skills</h3>
      {skillsInfo.map((section) => (
        <div key={section.id} className="skill-item">
          <input
            type="text"
            name="skillName"
            value={section.skillName}
            onChange={(e) =>
              onChangeSkillsInfo(section.id, { skillName: e.target.value })
            }
            placeholder="Skill Name"
          />
          <textarea
            name="description"
            value={section.description}
            onChange={(e) =>
              onChangeSkillsInfo(section.id, { description: e.target.value })
            }
            placeholder="Description"
          />
          <button onClick={() => deleteSkillsInfo(section.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
