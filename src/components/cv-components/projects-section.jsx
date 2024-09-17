export default function Projects({ projectInfo }) {
  return (
    <div className="project-section">
      <h2 className=" mb-[8px] text-[24px] border-b-[1px] border-t-[0px] border-r-[0px] 
        border-l-[0px] border-solid border-[#434242]" >
        Projects:
      </h2>
      {projectInfo.map((section) => (
        <div className = "project-item flex flex-col mb-[16px] last:mb-[0px]" key={section.id}>
          <div className="name-date-container flex justify-between">
            <div className="font-bold text-[18px]">{section.name}</div>
            <div>{section.date}</div>
          </div>
          <div className ="whitespace-pre-wrap ml-[8px]">{section.description}</div>
        </div>
      ))}
    </div>
  );
}
