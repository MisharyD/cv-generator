export default function Skills({skillsInfo})
{
    return (
        <div className="skills-section">
            <h2>Skills:</h2>
            {skillsInfo.map((section) => (
                <div key={section.id}>
                    Skill: {section.skillName} <br />
                    Description: {section.description} <br />
                </div>
            ))}
        </div>  
    )
}