export default function WorkExperienceForm({workExperienceInfo, onChangeWorkExperienceInfo, deleteWorkExperienceInfo, addWorkExperienceSection})
{
    return(
    <div>
        <h2>Work Experience:</h2>
        <form className="workExperienceForm flex flex-col mb-4">
            <input
            type="text"
            name="organization"
            placeholder="Organization"
            />
            <input
            type="text"
            name="role"
            placeholder="Role"
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

                const organization = form.querySelector("input[name='organization']").value;
                const role  = form.querySelector("input[name='role']").value;
                const date = form.querySelector("input[name='date']").value;
                const description = form.querySelector("textarea").value;

                addWorkExperienceSection({organization, role, date, description});
                form.reset();
            }}
            >
            Add Work Experience Section
            </button>
        </form>

        <h3>Previous Work Experiences</h3>
        {workExperienceInfo.map((section) => (
            <div key={section.id} className="work-experience-item">
                <input
                type="text"
                name="organization"
                value={section.organization}
                onChange={(e) => onChangeWorkExperienceInfo(section.id, { organization: e.target.value })}
                placeholder="Organization"
                />
                <input
                type="text"
                name="role"
                value={section.role}
                onChange={(e) => onChangeWorkExperienceInfo(section.id, { role: e.target.value })}
                placeholder="Role"
                />
                <input
                type="text"
                name="date"
                value={section.date}
                onChange={(e) => onChangeWorkExperienceInfo(section.id, { date: e.target.value })}
                placeholder="Date"
                />
                <textarea 
                name="description"
                value={section.description}
                onChange={(e) => onChangeWorkExperienceInfo(section.id, { description: e.target.value })}
                placeholder="Description"
                />
                <button onClick={() => deleteWorkExperienceInfo(section.id)}>Delete</button>
            </div>
            ))}
        </div>
    )
}