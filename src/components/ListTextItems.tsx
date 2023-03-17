import { IText } from '../interfaces/text.interface'

export default function ListTextItems(props: { listItems: IText[] }) {
  const { listItems } = props
  return (
    listItems && <ul className="items">
      {
        listItems.map((textData: IText, index: number) => (
          <li className="textItem" key={`${index}-${textData.date}`}>
            <div className='textContainer'>
              <h4>{textData.date}</h4>
              <p>
                <em>{textData.text}</em>
              </p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}