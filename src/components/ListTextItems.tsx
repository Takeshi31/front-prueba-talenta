import { useState, useEffect } from 'react';
import { IText } from '../interfaces/text.interface';

const baseUrl = 'http://localhost:3001/';
const endpointName = 'delete-text';

export default function ListTextItems(props: { listItems: IText[] }) {
  const { listItems } = props;
  const [items, setItems] = useState<IText[]>([]);

  useEffect(() => {
    setItems(listItems);
  }, [listItems]);

  function deleteText(id: number) {
    fetch(`${baseUrl}${endpointName}/${id.toString()}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error code ${response.status}`);
        }
      })
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((err) => console.error('ERROR: ', err.message));
  }

  return (
    items && (
      <ul className="items">
        {items.map((textData: IText, index: number) => (
          <li className="textItem" key={`${index}-${textData.date}`} onClick={() => deleteText(textData.id)}>
            <div className='textContainer'>
              <h4>{textData.date}</h4>
              <p>
                <em>{textData.text}</em>
              </p>
            </div>
          </li>
        ))}
      </ul>
    )
  );
}
