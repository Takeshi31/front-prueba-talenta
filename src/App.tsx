import { SetStateAction, useEffect, useRef, useState } from 'react'

import ErrorComponent from './components/Error'
import FormComponent from './components/FormComponent'

import ListTextItems from './components/ListTextItems'
import { useListTextItems } from './hooks/useListTextItems'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputText, setInputText] = useState('')
  const { listText, sendText } = useListTextItems({inputText})
  const [error, setError] = useState('')
  const withoutInput = useRef(true)

  useEffect(() => {
    if (withoutInput.current) {
      withoutInput.current = inputText === ''
      return
    }

    if(inputText.length < 2) {
      setError('El texto debe tener al menos dos caracteres');
      console.log(error)

      return
    }

    setError('')
  }, [inputText])

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (!inputText) return
    sendText()
  }

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {

    if (event.target.value.toString().startsWith(' ')) {
      return
    }

    setInputText(event.target.value)
  }

  return (
    <>
      <header>
        <FormComponent
          inputText={inputText}
          inputRef={inputRef}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        {
          error && <ErrorComponent errorMessage={error}/>
        }
      </header>
      <main>
        {
          <ListTextItems listItems={listText} />
        }
      </main>

    </>
  ) 
}

export default App
