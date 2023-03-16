import { useEffect, useState } from 'react'
import './App.css'
import dataResponse from '../mocks/response.json'

function sendText() {
  console.log('Click')
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <form className='form' onSubmit={sendText}>
          <input placeholder='Lorem ipsum'></input>
          <button type='submit' >Enviar text</button>
        </form>
      </header>
      <main>
        {
          <ul className="items">
            {
              dataResponse.map(textData => (
                <li className="textItem" key={textData.date}>
                  <div className='textContainer'>
                    <em>{textData.text}</em>
                  </div>
                </li>
              ))
            }
          </ul>
        }
      </main>

    </>
  )
}

export default App
