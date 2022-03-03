const Hello = (props) => {
  return (
    <div>
      <p>hello {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const App = () =>  {
  const name = 'Peter';
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="george" />
      <Hello name={name} age={age} />
    </>
  );
}

export default App
