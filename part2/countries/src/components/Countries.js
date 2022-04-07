import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryView = ( {country} ) => {
  const parseLanguages = (country) =>
    Object.values(country.languages)

  return(
    <div key={country.ccn3}>
      <h2>{country.name.common}</h2>
      <div>Capital: {country.capital[0]}</div>
      <div>Area: {country.area} km<sup>2</sup></div>
      <div>Languages:
        <ul>
          {parseLanguages(country).map((language, i) => 
            {
              return (<li key={i + 1}>{language}</li>)
            }
          )}
        </ul>
      </div>
      <div>
        <span style={{fontSize: "10rem"}}>{country.flag}</span>
      </div>
      <div><Weather country={country} /></div>
      
    </div>
  )
}

const ViewButton = ( {country} ) => {
  const [showView, setShowView] = useState(false)
  let text = "view"
  if (showView === false) {
    text = "view"
  } else {
    text = "hide"
  }

  return(
    <>
      <button onClick={() => setShowView(!showView)}>{text}</button>
      <OptionalView country={country} showView={showView} />
    </>
  )
}

const OptionalView = ( {country, showView} ) => {
  if (showView === true) {
    return(<CountryView country={country} />)
  }
}


const Weather = ({ country }) => {
  const [weather, setWeather] = useState(['loading weather'])

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    const lat = country.latlng[0]
    const lon = country.latlng[1]
   
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [country])

  if (weather[0] === 'loading weather') {
    return(
      <div>{weather[0]}</div>
    )
  } else {
    return(
      <WeatherView weather={weather} />
    )
  }
}

const WeatherView = ({ weather }) => {
  const mpsToMph = (m) => Math.round(m * 2.2369 * 10) / 10
  const kToF = (k) => Math.round((1.8 * (k - 273) + 32) * 10) / 10

  const iconCode = weather.weather[0].icon
  const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

  return (
    <div>
      <h3>Weather</h3>
      <div>Temperature: {kToF(weather.main.temp)}{'\u00B0'} F</div>
      <div>Conditions: {weather.weather[0].description}</div>
      <div>
        <img src={icon} alt="" />
      </div>
      <div>Wind: {mpsToMph(weather.wind.speed)} mph</div>
      <br />
    </div>
  )
}

const CountryList = ( {countries} ) => {
  return(
    countries.map(country => {
      return(
        <div key={country.ccn3}>
          {country.name.common}
          <ViewButton country={country} />
        </div>
      )
      }
    )
  )
}

const Countries = ({ search, allCountries }) => {
  const filterCountries = () => {
    return(
      allCountries
        .filter(country => country.name.common
          .toLowerCase()
          .includes(search))
    )
  }

  const filteredCountries = filterCountries()

  if (filteredCountries.length === 1) {
    return <CountryView country={filteredCountries[0]} />
  } else if (filteredCountries.length <= 10) {
    return <CountryList countries={filteredCountries} />
  } else {
    return <p>Too many results, please be more specific</p>
  }
}

export default Countries