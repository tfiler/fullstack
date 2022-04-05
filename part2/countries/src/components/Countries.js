import { useState } from 'react'

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
      <div><span style={{fontSize: "10rem"}}>{country.flag}</span></div>
      </div>
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