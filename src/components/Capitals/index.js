import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  setData = e => {
    const selectedCountry = countryAndCapitalsList.filter(
      item => item.id === e.target.value,
    )
    this.setState({country: selectedCountry[0].country})
    // this.setState({countryID: selectedCountry[0].id})
  }

  render() {
    const {country} = this.state

    return (
      <div className="container">
        <div className="countries-capitals">
          <h1>Countries and Capitals</h1>
          <div className="countries-list">
            <select onChange={this.setData}>
              {countryAndCapitalsList.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
