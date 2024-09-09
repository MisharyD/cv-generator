import { useState } from 'react'
import InformationForm from "./components/information-form"
import Cv from "./components/cv"
import './styles/App.css'
import './styles/reset.css'

function App() {

  return (
    <div className='main'>
      <h1>CV Generator</h1>

      <InformationForm>

      </InformationForm>
      <Cv>
    
      </Cv>
    </div>
  )
}

export default App
