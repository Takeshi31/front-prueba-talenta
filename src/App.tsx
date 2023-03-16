import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <form>
        <input placeholder='Lorem ipsum'></input>
        <button type='submit'>Enviar text</button>
      </form>

    </div>
  )
}

export default App
