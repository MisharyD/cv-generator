import PersonalSection from "./cv-components/personal-section";
import EducationSection from "./cv-components/education-section";
import ProjectsSection from "./cv-components/projects-section";
import WorkExperienceSection from "./cv-components/work-experience-section";
import SkillsSection from "./cv-components/skills-section";

export default function Cv({
  personalInfo,
  educationInfo,
  projectInfo,
  workExperienceInfo,
  skillsInfo,
}) {
  return (
    <div className="cv flex flex-col gap-4 bg-white w-[800px] h-[900px] ml-[50px] p-[24px] ">
      <PersonalSection personalInfo={personalInfo} />

      <EducationSection educationInfo={educationInfo} />

      <ProjectsSection projectInfo={projectInfo} />

      <WorkExperienceSection workExperienceInfo={workExperienceInfo} />

      <SkillsSection skillsInfo={skillsInfo} />
    </div>
  );
}
