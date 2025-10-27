import { useState } from 'react'
import Click from './Click'
import './App.css'

function App() {
 

  return (
    <>
      <div>
      <Click message="Playing!">
        Play Movie
      </Click>
      <Click message="Uploading!">
        Upload Image
      </Click>
    </div>
    </>
  )
}

export default App
