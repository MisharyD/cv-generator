import { useState } from 'react'
import InformationForm from "./components/information-form"
import Cv from "./components/cv"
import './styles/index.css'
import './styles/reset.css'

function App() {

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    location: "",
    email: "",
    phoneNumber: "",
    about: ""
  });

  //it is an array to allows for multiple education sections
  const [educationInfo, setEducationInfo] = useState(new Array());

  const [projectInfo, setProjectInfo] = useState(new Array());

  const personalOperations = (function()
  {
    function handleChangePersonalInfo(newInfo)
    {
      setPersonalInfo(prev => ({ ...prev, ...newInfo }))
    }
   
    return {handleChangePersonalInfo}
  })()

  const educationOperations = (function()
  {
    function addEducationSection(newSection)
    {
      setEducationInfo(prev => [...prev, { id: Date.now(), ...newSection }]);
    }

  function deleteEducationSection(id)
    {
      setEducationInfo(prevState => prevState.filter(section => section.id !== id));
    }

  function changeEducationInfo(id, newInfo)
  {
    setEducationInfo(prevState =>
      prevState.map(section => (section.id === id ? { ...section, ...newInfo } : section))
    );
  }

    return {addEducationSection, deleteEducationSection, changeEducationInfo}
  })()

  const projectOperations = (function()
  {
    function addProjectSection(newSection)
    {
      setProjectInfo(prev => [...prev, { id: Date.now(), ...newSection }]);
    }

  function deleteProjectSection(id)
    {
      setProjectInfo(prevState => prevState.filter(section => section.id !== id));
    }

  function changeProjectInfo(id, newInfo)
  {
    setProjectInfo(prevState =>
      prevState.map(section => (section.id === id ? { ...section, ...newInfo } : section))
    );
    console.log(projectInfo)
  }

    return {addProjectSection, deleteProjectSection, changeProjectInfo}
  })()

  return (
    <>
      <h1 className='text-4xl '>CV Generator</h1>
      <div className='main'>
        <InformationForm 
        //personal section
        personalInfo = {personalInfo} onChangePersonalInfo={personalOperations.handleChangePersonalInfo}

        //education section
        educationInfo = {educationInfo} onChangeEducationInfo = {educationOperations.changeEducationInfo} 
        deleteEducationInfo = {educationOperations.deleteEducationSection} addEducationSection = {educationOperations.addEducationSection} 

        //project section
        projectInfo = {projectInfo} onChangeProjectInfo = {projectOperations.changeProjectInfo} 
        deleteProjectInfo = {projectOperations.deleteProjectSection} addProjectSection = {projectOperations.addProjectSection}
        />

        <Cv 
          personalInfo = {personalInfo} 
          educationInfo = {educationInfo}
          projectInfo = {projectInfo} 
        />
      </div>
    </>
  )
}

export default App
