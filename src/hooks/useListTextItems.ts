import { useState } from "react";

import { IText } from "../interfaces/text.interface"

export function useListTextItems({inputText}: {inputText: string}) {
  const [response, setResponse] = useState<IText[]>();
  const baseUrl = 'http://localhost:3000/'
  const endpointName = 'add-text'
  const params = new URLSearchParams({
    text: inputText
  })

  const sendText = () => {
    fetch(`${baseUrl}${endpointName}?${params}`, {
      method: 'GET'
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