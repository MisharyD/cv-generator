export default function Skills({ skillsInfo }) {
  return (
    <div className="skills-section">
      {skillsInfo.length !== 0 && 
      <h2 className="mb-[8px] mt-0 text-[24px] border-b-[1px] border-t-[0px] border-r-[0px] 
        border-l-[0px] border-solid border-[#434242]">
        Skills
      </h2>}
      {skillsInfo.map((section) => (
        <div key={section.id} className="education-item flex mb-[16px] last:mb-[0px]">
         <div className="font-bold whitespace-pre-wrap">{section.skill}</div>
          <div className="whitespace-pre-wrap">{section.description}</div>
        </div>
      ))}
    </div>
  );
}
