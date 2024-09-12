import PersonalForm from "./form-components/personal-form"
import EducationForm from "./form-components/eduaction-form"
import ProjectsForm from "./form-components/projects-form"
import WorkExperienceForm from "./form-components/work-experience-form"
import SkillsForm from "./form-components/skills-form"

export default function InformationForm({personalInfo, onChangePersonalInfo})
{
    return(
        <div className = "information-form">
            <PersonalForm personalInfo = {personalInfo} onChangePersonalInfo = {onChangePersonalInfo} />
            
            <EducationForm />

            <ProjectsForm />

            <WorkExperienceForm />

            <SkillsForm />
        </div>
    )
}