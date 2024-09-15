/* eslint-disable react/prop-types */
import PersonalSection from "./cv-components/personal-section"
import EducationSection from "./cv-components/education-section"
import ProjectsSection from "./cv-components/projects-section"
import WorkExperienceSection from "./cv-components/work-experience-section"
import SkillsSection from "./cv-components/skills-section"


export default function Cv({personalInfo, educationInfo})
{
    return(
    <div className="cv">
        <PersonalSection personalInfo = {personalInfo} />

        <EducationSection educationInfo = {educationInfo}  />

        <ProjectsSection />

        <WorkExperienceSection />

        <SkillsSection />
    </div>
    )
}