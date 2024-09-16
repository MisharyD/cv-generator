export default function WorkExperienceSection({workExperienceInfo})
{
    return (
        <div className="work-experience-section">
            <h2>Work Experience:</h2>
            {workExperienceInfo.map((section) => (
                <div key={section.id}>
                    Organization: {section.organization} <br />
                    Role: {section.role} <br />
                    Date: {section.date} <br />
                    Description: {section.description} <br />
                </div>
            ))}
        </div>
    );
}