export default function EducationSection({ educationInfo }) {
  return (
    <div className="education-section">
      <h2 className=" mb-[8px] text-[24px] border-b-[1px] border-t-[0px] border-r-[0px] border-l-[0px] border-solid border-[#434242]">Education:</h2>
      {educationInfo.map((section) => (
        <div key={section.id} className="education-item flex flex-col mb-[16px] last:mb-[0px]">
          <div className="institutuion-date-container flex justify-between">
            <div className="font-bold text-[18px]">{section.institution}</div>
            <div>{section.date}</div>
          </div>
          <div className ="whitespace-pre-wrap">{section.description}</div>
        </div>
      ))}
    </div>
  );
}
