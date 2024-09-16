export default function ProjectsForm({projectInfo, onChangeProjectInfo, deleteProjectInfo, addProjectSection}){
    return(
    <div>
        <h2>Projects:</h2>
        <form className="projectForm flex flex-col mb-4">
            <input
            type="text"
            name="name"
            placeholder="Project name"
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

                const projectName = form.querySelector("input[name='name']").value;
                const date  = form.querySelector("input[name='date']").value;
                const description = form.querySelector("textarea").value;

                addProjectSection({name:projectName, date:date, description:description});
                form.reset();
            }}
            >
            Add Project Section
            </button>
        </form>

        <h3>Previous Projects</h3>
        {projectInfo.map((section) => (
            <div key={section.id} className="project-item">
                <input
                type="text"
                name="name"
                value={section.name}
                onChange={(e) => onChangeProjectInfo(section.id, { name: e.target.value })}
                placeholder="Project name"
                />
                <input
                type="text"
                name="date"
                value={section.date}
                onChange={(e) => onChangeProjectInfo(section.id, { date: e.target.value })}
                placeholder="Date"
                />
                <textarea 
                name="description"
                value={section.description}
                onChange={(e) => onChangeProjectInfo(section.id, { description: e.target.value })}
                placeholder="Description"
                />
                <button onClick={() => deleteProjectInfo(section.id)}>Delete</button>
            </div>
            ))}
        </div>
    )
}