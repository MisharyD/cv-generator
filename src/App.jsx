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

  function handleChangePersonalInfo(newInfo)
  {
    setPersonalInfo(prev => ({ ...prev, ...newInfo }))
  }

  function addEducationSection(newSection)
  {
    setEducationInfo(prev => [...prev, { id: Date.now(), ...newSection }]);
  }

  function deleteEducationSection(id)
  {
    setEducationInfo(prevState => prevState.filter(section => section.id !== id));
  }

  function ChangeEducationInfo(id, newInfo)
  {
    setEducationInfo(prevState =>
      prevState.map(section => (section.id === id ? { ...section, ...newInfo } : section))
    );
  }

  return (
    <>
      <h1 className='text-4xl '>CV Generator</h1>
      <div className='main'>
        <InformationForm 
        //personal section
        personalInfo = {personalInfo} onChangePersonalInfo={handleChangePersonalInfo}

        //education section
        educationInfo = {educationInfo} onChangeEducationInfo = {ChangeEducationInfo} 
        deleteEducationInfo = {deleteEducationSection} addEducationSection = {addEducationSection} 

        //
        />

        <Cv personalInfo = {personalInfo} 
        educationInfo = {educationInfo} />
      </div>
    </>
  )
}

export default App
