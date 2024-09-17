export default function EducationSection({ educationInfo }) {
  return (
    <div className="education-section">
      {educationInfo.length !== 0 && 
      <h2 className=" mb-[8px] mt-0 text-[24px] border-b-[1px] border-t-[0px] 
      border-r-[0px] border-l-[0px] border-solid border-[#434242]">Education</h2> }
      {educationInfo.map((section) => (
        <div key={section.id} className="education-item flex flex-col mb-[16px] last:mb-[0px]">
          <div className="institutuion-date-container flex justify-between">
            <div className="font-bold text-[18px] whitespace-pre-wrap">{section.institution}</div>
            <div className="whitespace-pre-wrap">{section.date}</div>
          </div>
          <div className ="whitespace-pre-wrap">{section.description}</div>
        </div>
      ))}
    </div>
  );
}
