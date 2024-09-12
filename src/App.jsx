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

  function onChangePersonalInfoChnage(e)
  {
    const key = e.target.name 
    const value = e.target.value
    setPersonalInfo({...personalInfo, [key] :value})
  }

  return (
    <>
      <h1 className='text-4xl '>CV Generator</h1>
      <div className='main'>
        <InformationForm personalInfo = {personalInfo} onChangePersonalInfo={onChangePersonalInfoChnage} />
        <Cv personalInfo = {personalInfo} />
      </div>
    </>
  )
}

export default App
