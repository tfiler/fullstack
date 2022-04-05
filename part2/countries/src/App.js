import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFilter from './components/CountryFilter'
import Countries from './components/Countries'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, [])

  return(
    <div>
      <CountryFilter 
        search={search}
        setSearch={setSearch}
      />

      <Countries
        search={search}
        allCountries={allCountries}
      />
    </div>
  )
} 

export default App
