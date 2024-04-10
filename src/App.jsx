import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSelector from './imageSelector/imageSelector'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        <p>Hello World</p>
        <ImageSelector />
      </div>
      </>
  )
}

export default App
