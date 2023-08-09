// Write your code here
import DestinationItem from '../DestinationItem/index'

import './index.css'

const DestinationSearch = props => {
  const {destinationsList, onChangeValue} = props

  const onChangeDestination = event => {
    const searchInput1 = event.target.value

    onChangeValue(searchInput1)
  }
  return (
    <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="input"
          onChange={onChangeDestination}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
      </div>
      <ul className="destination-container">
        {destinationsList.map(eachItem => (
          <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
