import React from 'react'

const Persons = (props) => {
  return(
    <div>
      {props.persons
        .filter(person => person.name.includes(props.filterValue))
        .map(person => <div key={person.id}>{person.name} {person.number}</div>)
      }
    </div>
  )
}

export default Persons