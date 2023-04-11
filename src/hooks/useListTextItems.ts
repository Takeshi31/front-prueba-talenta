import { useState } from "react";

import { IText } from "../interfaces/text.interface"

export default function useListTextItems({inputText}: {inputText: string}) {
  const [response, setResponse] = useState<IText[]>();
  const baseUrl = 'http://localhost:3000/'
  const endpointName = 'add-text'

  const sendText = async () => {
    await fetch(`${baseUrl}${endpointName}`, {
      method: 'POST',
      body: JSON.stringify({
        text: inputText
      })
    }).then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error(`Error code ${response.status}`);
    })
    .then(data => setResponse(data))
    .catch(err => console.error("ERROR: ", err.message))
  }
  return {listText: response as IText[], sendText};
}