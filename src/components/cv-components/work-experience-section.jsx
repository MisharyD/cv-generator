export default function WorkExperienceSection({ workExperienceInfo }) {
  return (
    <div className="work-experience-section">
      {workExperienceInfo.length !== 0 && 
      <h2 className="mb-[8px] mt-0 text-[24px] border-b-[1px] border-t-[0px] border-r-[0px] 
        border-l-[0px] border-solid border-[#434242]">
        Work Experience
      </h2>}
      {workExperienceInfo.map((section) => (
        <div key={section.id} className="work-experience-item flex flex-col mb-[16px] last:mb-[0px]">
          <div className="orgnization-date-container flex justify-between whitespace-pre-wrap">
            <div className="font-bold text-[18px] mb-[3px] whitespace-pre-wrap">{section.organization}</div>
            <div>{section.date}</div>
          </div>
          <div className="font-bold text-[16px] mb-[3px] whitespace-pre-wrap">{section.role}</div>
          <div className ="whitespace-pre-wrap">{section.description}</div>
        </div>
      ))}
    </div>
  );
}
