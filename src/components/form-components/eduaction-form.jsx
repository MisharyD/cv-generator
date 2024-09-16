
export default function EducationForm({educationInfo, onChangeEducationInfo, deleteEducationInfo, addEducationSection})
{
    return(
      <div>
        <h2>Education</h2>
        <form className="educationForm flex flex-col mb-4">
          <input
            type="text"
            name="institution"
            placeholder="Institution"
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
          />
          <textarea
            name="description"
            placeholder="Description"
            className="mb-2"
          />
          <button
            type="button"
            onClick={(e) => {
              const form = e.target.parentElement;

              const institution = form.querySelector("input[name='institution']").value;
              const date  = form.querySelector("input[name='date']").value;
              const description = form.querySelector("textarea").value;

              addEducationSection({institution:institution, date:date, description:description});
              form.reset();
            }}
          >
            Add Education Section
          </button>
        </form>

        <h3>Previous Education</h3>
        {educationInfo.map((section) => (
            <div key={section.id}>
              <input
                type="text"
                name="institution"
                value={section.institution}
                onChange={(e) => onChangeEducationInfo(section.id, { institution: e.target.value })}
                placeholder="Institution"
              />
              <input
                type="text"
                name="date"
                value={section.date}
                onChange={(e) => onChangeEducationInfo(section.id, { date: e.target.value })}
                placeholder="Date"
              />
              <textarea
                name="description"
                value={section.description}
                onChange={(e) => onChangeEducationInfo(section.id, { description: e.target.value })}
                placeholder="Description"
              />
              <button onClick={() => deleteEducationInfo(section.id)}>Delete</button>
            </div>
          ))}
      </div>
    )
}