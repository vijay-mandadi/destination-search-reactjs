// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {input: ''}

  changeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {input} = this.state
    const results = destinationsList.filter(each =>
      each.name.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input type="search" onChange={this.changeInput} value={input} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          width="17px"
          height="17px"
        />
        <ul>
          {results.map(each => (
            <DestinationItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
