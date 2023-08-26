// Write your code here
import {format} from 'date-fns'

import './index.css'

const Card = props => {
  const {det, click} = props
  const {title, date, tog, id} = det

  const star = () => {
    click(id)
  }

  const dt = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const img = tog
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="box">
      <div className="row">
        <p>{title}</p>
        <button className="b" type="button" data-testid="star" onClick={star}>
          <img src={img} alt="star" />
        </button>
      </div>
      <p className="p">Date {dt}</p>
    </li>
  )
}
export default Card
