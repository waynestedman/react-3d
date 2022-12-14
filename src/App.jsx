// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ThreeComponent from './Example'

function App() {
  return (
    <div className="App">
      <ThreeComponent />
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ThreeJS + React</h1>
    </div>
  )
}

export default App
