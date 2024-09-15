export default function EducationSection({educationInfo})
{
    return (
        <div className="education-section">
            {educationInfo.map((section) =>(
            <div key = {section.id}>
                instituion:{section.institution}<br />
                date: {section.date} <br />
                about: {section.description} <br />
            </div>
            ))
            }
        </div>  
    )
}