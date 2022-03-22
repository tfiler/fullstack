import React from 'react'

const Course = ({ course }) => {
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <li>{part.name}, {part.exercises} exercises</li>
  )
}

const Header = ({ name }) => (
  <h2>{ name }</h2>
)

const Content = ({ parts }) => {
  return(
    <div>
      <ul>
        {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
      </ul>
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => 
    s + p.exercises, 0
  )

  return(
    <p>There are a total of {total} exercises</p>
  )
}

export default Course