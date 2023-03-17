import { IText } from '../interfaces/text.interface'

export default function ListTextItems(props: { listItems: IText[] }) {
  const { listItems } = props
  return (
    listItems && <ul className="items">
      {
        listItems.map((textData: IText, index: number) => (
          <li className="textItem" key={`${index}-${textData.date}`}>
            <div className='textContainer'>
              <em>{textData.text}</em>
            </div>
          </li>
        ))
      }
    </ul>
  )
}