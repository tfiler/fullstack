import React from 'react'

const PersonForm = (props) => {
  const handleNameChange = (event) => {
    props.setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (props.persons.some(person => person.name === props.newName)) {
      window.alert(`The name ${props.newName} is already present`)
    } else {
      const personObject = {
        name: props.newName,
        number: props.newNumber,
        id: props.persons.length + 1
      }
  
      props.setPersons(props.persons.concat(personObject))
      props.setNewName('')
    }
  }
  
  return(
    <form onSubmit={addPerson}>
      <div>
        name: 
        <input 
          value={props.newName} 
          onChange={handleNameChange}
        />
      </div>
      <div>
        number:
        <input 
          value={props.newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm