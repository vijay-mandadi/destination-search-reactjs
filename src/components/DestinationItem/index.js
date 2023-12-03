// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details

  return (
    <li>
      <img src={imgUrl} width="200px" height="150px" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
