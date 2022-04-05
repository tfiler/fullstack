const CountryFilter = ({ search, setSearch }) => {
  const handleSearchChange = (event) => 
    setSearch(event.target.value)

  return(
    <p>
      find countries
      <input 
        value={search}
        onChange={handleSearchChange}
      />
    </p>
  )
}

export default CountryFilter