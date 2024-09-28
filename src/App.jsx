import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './assets/componetes/Cards'
import Video from './assets/componetes/Video'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cards/>
     <Video/>
   
      <h1>Vite + React</h1>
   
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
    </>
  )
}

export default App


