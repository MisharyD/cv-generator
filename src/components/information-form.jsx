import PersonalForm from "./form-components/personal-form"
import EducationForm from "./form-components/eduaction-form"
import ProjectsForm from "./form-components/projects-form"
import WorkExperienceForm from "./form-components/work-experience-form"
import SkillsForm from "./form-components/skills-form"

export default function InformationForm({
    //personal section
    personalInfo, onChangePersonalInfo,
    
    //education section
    educationInfo, onChangeEducationInfo, deleteEducationInfo, addEducationSection,

    //project section
    projectInfo, onChangeProjectInfo, deleteProjectInfo, addProjectSection,

    //work experience section
    workExperienceInfo, onChangeWorkExperienceInfo, deleteWorkExperienceInfo, addWorkExperienceSection,

    //skills section
    skillsInfo, onChangeSkillsInfo, deleteSkillsInfo, addSkillsSection
})
{
    return(
        <div className = "information-form">
            <PersonalForm personalInfo = {personalInfo} onChangePersonalInfo = {onChangePersonalInfo} />
            
            <EducationForm 
                educationInfo={educationInfo} 
                onChangeEducationInfo={onChangeEducationInfo} 
                deleteEducationInfo={deleteEducationInfo} 
                addEducationSection={addEducationSection} 
            />

            <ProjectsForm
                projectInfo={projectInfo} 
                onChangeProjectInfo={onChangeProjectInfo} 
                deleteProjectInfo={deleteProjectInfo} 
                addProjectSection={addProjectSection} 
            />

            <WorkExperienceForm
                workExperienceInfo={workExperienceInfo} 
                onChangeWorkExperienceInfo={onChangeWorkExperienceInfo} 
                deleteWorkExperienceInfo={deleteWorkExperienceInfo} 
                addWorkExperienceSection={addWorkExperienceSection} 
            />

            <SkillsForm
                skillsInfo={skillsInfo} 
                onChangeSkillsInfo={onChangeSkillsInfo} 
                deleteSkillsInfo={deleteSkillsInfo} 
                addSkillsSection={addSkillsSection} 
            />
        </div>
    )
}