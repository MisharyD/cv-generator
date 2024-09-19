import {useState} from "react"

export default function ProjectsForm({
  projectInfo,
  onChangeProjectInfo,
  deleteProjectInfo,
  addProjectSection,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 bg-white w-[80%] min-w-[400px] rounded-lg ml-[64px] p-4 px-7">
      <div
        className="flex justify-between items-center bg-white cursor-pointer"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        <div className="flex gap-[0.5rem]">
          <img src="src/assets/images/project.png" className="w-[40px]" alt="" />
          <h2 className="text-[28px] font-semibold flex items-center m-[0px] p-0">
            Projects
          </h2>
        </div>
        <span>{isFormOpen ? "▲" : "▼"}</span>
      </div>
      {isFormOpen && (
        <>
          <form className="flex flex-col gap-2 bg-white m-[0px] border-[0px] border-b-[1px] border-solid">
            <input
              type="text"
              name="name"
              placeholder="Project name"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={(e) => {
                const form = e.target.parentElement;
                const projectName = form.querySelector("input[name='name']").value;
                const date = form.querySelector("input[name='date']").value;
                const description = form.querySelector("textarea").value;

                addProjectSection({
                  name: projectName,
                  date: date,
                  description: description,
                });
                form.reset();
              }}
              className="my-4 bg-gray-100 cursor-pointer self-start p-2 rounded-lg"
            >
              Add Project Section
            </button>
          </form>

          {projectInfo.map((section) => (
            <div
              key={section.id}
              className="mb-3 border-[0px] border-b-[1px] border-solid last:border-b-0"
            >
              <div className="flex flex-col justify-between gap-[1rem]">
                <input
                  type="text"
                  className="p-1 border rounded"
                  value={section.name}
                  onChange={(e) =>
                    onChangeProjectInfo(section.id, { name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="p-1 border rounded"
                  value={section.date}
                  onChange={(e) =>
                    onChangeProjectInfo(section.id, { date: e.target.value })
                  }
                />
                <textarea
                  className="p-1 border rounded"
                  value={section.description}
                  onChange={(e) =>
                    onChangeProjectInfo(section.id, { description: e.target.value })
                  }
                ></textarea>
                <button
                  className="text-red-500 cursor-pointer self-start p-2 rounded-lg mb-4"
                  onClick={() => deleteProjectInfo(section.id)}
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