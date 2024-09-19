import { useState } from "react";
import InformationForm from "./components/information-form";
import Cv from "./components/cv";
import "./styles/index.css";
import "./styles/reset.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

  const downloadPdf = () => 
    {
      const cvElement = document.querySelector(".cv");
      html2canvas(cvElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");

      const imgWidth = 595.28;
      const pageHeight = 841.89;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("cv.pdf");
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-[1rem] mb-10">
          <h1 className="text-4xl">CV Generator</h1>
          <img src="src/assets/images/cv.png" className="w-[50px] self-center" alt=""/>
        </div>
        <button className="p-4 px-4 text-[18px] bg-white rounded-lg w-min h-min flex gap-[0.5rem] items-center" onClick={downloadPdf}>
          <div>Download</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 24 24"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
        </button>
      </div>
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
