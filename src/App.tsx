import { useState } from 'react'
import './App.css'
import { EditForm } from './react/EditForm'
import { exampleForm, exampleObject, ExampleObject, exampleObjectConfiguration } from './tests'

function App() {

  const [exObj, setExObj] = useState<ExampleObject>(exampleObject)
  return (
    <>
      <EditForm config={exampleObjectConfiguration} form={exampleForm} onChange={setExObj} value={exObj} />
    </>
  )
}

export default App
