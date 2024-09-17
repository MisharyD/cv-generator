import { useState } from "react";
import InformationForm from "./components/information-form";
import Cv from "./components/cv";
import "./styles/index.css";
import "./styles/reset.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    location: "",
    email: "",
    phoneNumber: "",
    about: "",
  });

  const [educationInfo, setEducationInfo] = useState(new Array());

  const [projectInfo, setProjectInfo] = useState(new Array());

  const [workExperienceInfo, setWorkExperienceInfo] = useState(new Array());

  const [skillsInfo, setSkillsInfo] = useState(new Array());

  const personalOperations = (function () {
    function handleChangePersonalInfo(newInfo) {
      setPersonalInfo((prev) => ({ ...prev, ...newInfo }));
    }

    return { handleChangePersonalInfo };
  })();

  const educationOperations = (function () {
    function addEducationSection(newSection) {
      setEducationInfo((prev) => [...prev, { id: Date.now(), ...newSection }]);
    }

    function deleteEducationSection(id) {
      setEducationInfo((prevState) =>
        prevState.filter((section) => section.id !== id),
      );
    }

    function changeEducationInfo(id, newInfo) {
      setEducationInfo((prevState) =>
        prevState.map((section) =>
          section.id === id ? { ...section, ...newInfo } : section,
        ),
      );
    }

    return { addEducationSection, deleteEducationSection, changeEducationInfo };
  })();

  const projectOperations = (function () {
    function addProjectSection(newSection) {
      setProjectInfo((prev) => [...prev, { id: Date.now(), ...newSection }]);
    }

    function deleteProjectSection(id) {
      setProjectInfo((prevState) =>
        prevState.filter((section) => section.id !== id),
      );
    }

    function changeProjectInfo(id, newInfo) {
      setProjectInfo((prevState) =>
        prevState.map((section) =>
          section.id === id ? { ...section, ...newInfo } : section,
        ),
      );
      console.log(projectInfo);
    }

    return { addProjectSection, deleteProjectSection, changeProjectInfo };
  })();

  const workExperienceOperations = (function () {
    function addWorkExperienceSection(newSection) {
      setWorkExperienceInfo((prev) => [
        ...prev,
        { id: Date.now(), ...newSection },
      ]);
    }

    function deleteWorkExperienceSection(id) {
      setWorkExperienceInfo((prevState) =>
        prevState.filter((section) => section.id !== id),
      );
    }

    function changeWorkExperienceInfo(id, newInfo) {
      setWorkExperienceInfo((prevState) =>
        prevState.map((section) =>
          section.id === id ? { ...section, ...newInfo } : section,
        ),
      );
    }

    return {
      addWorkExperienceSection,
      deleteWorkExperienceSection,
      changeWorkExperienceInfo,
    };
  })();

  const skillsOperations = (function () {
    function addSkillSection(newSection) {
      setSkillsInfo((prev) => [...prev, { id: Date.now(), ...newSection }]);
    }

    function deleteSkillSection(id) {
      setSkillsInfo((prevState) =>
        prevState.filter((section) => section.id !== id),
      );
    }

    function changeSkillInfo(id, newInfo) {
      setSkillsInfo((prevState) =>
        prevState.map((section) =>
          section.id === id ? { ...section, ...newInfo } : section,
        ),
      );
    }

    return { addSkillSection, deleteSkillSection, changeSkillInfo };
  })();

  return (
    <>
      <h1 className="text-4xl">CV Generator</h1>
      <div className="main">
        <InformationForm
          //personal section
          personalInfo={personalInfo}
          onChangePersonalInfo={personalOperations.handleChangePersonalInfo}
          //education section
          educationInfo={educationInfo}
          onChangeEducationInfo={educationOperations.changeEducationInfo}
          deleteEducationInfo={educationOperations.deleteEducationSection}
          addEducationSection={educationOperations.addEducationSection}
          //project section
          projectInfo={projectInfo}
          onChangeProjectInfo={projectOperations.changeProjectInfo}
          deleteProjectInfo={projectOperations.deleteProjectSection}
          addProjectSection={projectOperations.addProjectSection}
          //work experience section
          workExperienceInfo={workExperienceInfo}
          onChangeWorkExperienceInfo={
            workExperienceOperations.changeWorkExperienceInfo
          }
          deleteWorkExperienceInfo={
            workExperienceOperations.deleteWorkExperienceSection
          }
          addWorkExperienceSection={
            workExperienceOperations.addWorkExperienceSection
          }
          //skills section
          skillsInfo={skillsInfo}
          onChangeSkillsInfo={skillsOperations.changeSkillInfo}
          deleteSkillsInfo={skillsOperations.deleteSkillSection}
          addSkillsSection={skillsOperations.addSkillSection}
        />

        <Cv
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          projectInfo={projectInfo}
          workExperienceInfo={workExperienceInfo}
          skillsInfo={skillsInfo}
        />
      </div>
    </>
  );
}

export default App;
