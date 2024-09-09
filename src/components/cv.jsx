import PersonalSection from "./cv-components/personal-section"
import EducationSection from "./cv-components/education-section"
import ProjectsSection from "./cv-components/projects-section"
import WorkExperienceSection from "./cv-components/work-experience-section"
import SkillsSection from "./cv-components/skills-section"


export default function Cv()
{
    return(
    <div className="cv">
        <PersonalSection />

        <EducationSection />

        <ProjectsSection />

        <WorkExperienceSection />

        <SkillsSection />
    </div>
    )
}