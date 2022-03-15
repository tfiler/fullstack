import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Stat = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.compute()}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = () => (
    good + neutral + bad
  )

  const average = () => (
    (good - bad) / all()
  )

  const positive = () => (
    (good / all()) * 100
  )
  
  if (all() === 0) {
    return (
      <div>No feedback yet</div>
    )
  } else {
    return (
      <table>
        <tbody>
          <Stat text="Good" compute={() => good} />
          <Stat text="Neutral" compute={() => neutral} />
          <Stat text="Bad" compute={() => bad} />
          <Stat text="All" compute={() => all()} />
          <Stat text="Average" compute={() => average()} />
          <Stat text="Positive %" compute={() => positive()} />
      </tbody>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App
