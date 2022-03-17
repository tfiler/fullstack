import { useState } from 'react'

const getRandomInt = (max, previous) =>  {
  let rand = null 

  do {
    rand = Math.round(Math.random() * max)
  } while (rand === previous)

  return rand
}

const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>{text}</button>
)

const TopAnecdote = ({points, anecdotes}) => {
  
  const getTopIndex = (points) => {
    const maxValue = Math.max(...points)
    const maxIndex = points.indexOf(maxValue)
    
    return(
      maxIndex
    )
  }

  return (
    <div>
      <p>{anecdotes[getTopIndex(points)]}</p>
      This anecdote has {points[getTopIndex(points)]} votes.
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(7).fill(0))

  const max = anecdotes.length-1


  const nextHandler = () => (
    setSelected(getRandomInt(max, selected))
  )

  const voteHandler = () =>  {
    //increase the vote count for selected in points
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} </p>
      This anecdote has {points[selected]} votes.
      <p>
        <Button clickHandler={nextHandler} text="next anecdote" />
        <Button clickHandler={voteHandler} text="vote" />
      </p>
      <h1>Anecdote with most votes</h1>
      <TopAnecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App
