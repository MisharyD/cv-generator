export default function Projects({ projectInfo }) {
  return (
    <div className="project-section">
      <h2>Projects:</h2>
      {projectInfo.map((section) => (
        <div key={section.id}>
          Project name:{section.name}
          <br />
          date: {section.date} <br />
          about: {section.description} <br />
        </div>
      ))}
    </div>
  );
}
