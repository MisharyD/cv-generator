import PersonalForm from "./form-components/personal-form"
import EducationForm from "./form-components/personal-form"
import ProjectsForm from "./form-components/personal-form"
import WorkExperienceForm from "./form-components/personal-form"
import SkillsForm from "./form-components/personal-form"

export default function informationForm()
{
    return(
        <div className = "information-form">
            <PersonalForm />

            <EducationForm />

            <ProjectsForm />

            <WorkExperienceForm />

            <SkillsForm />
        </div>
    )
}