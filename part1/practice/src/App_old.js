import { useState } from 'react'

//React component
const Hello = ({ name, age }) => { //destructure from passed props
  //Helper function
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0) //returns value and update func
  
  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  ) */

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () =>  setCounter(0)

  const name = 'Peter'
  const age = 10
  //Note: event handlers will run code placed directly in them,
  //make sure to put it in a reference to a function
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="george" age={26 + 10} />
      <Hello name={name} age={age} />
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
      <p>{counter}</p>
    </>
  )
}

export default App
