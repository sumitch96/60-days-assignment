import  React ,{ useRef } from 'react'
import './App.css'
import DynamicForm from './DynamicForm'
import CustomSubmissionFrom from './CustomSubmissionForm'
import ValidationForm from './ValidationForm'

function App() {

  return (
    <>
    <h1> Dynamic Form Submission</h1>
    <h2> Dynamic From Input Fource</h2>
    <DynamicForm/>
    <h2> Real-time Input Validation</h2>
    <ValidationForm/>
    <h2> Custom From Submission</h2>
    <CustomSubmissionFrom/>
    
    </>
  )
}

export default App
