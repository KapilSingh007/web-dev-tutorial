import './App.css';

function App() {

  function handleChange(e){
    console.log(e)
  }
  function handleClick(e){
    console.log(e)
    alert('Submit button is clicked')
  }
  function handleFormSubmit(e){
    e.preventDefault()
    alert('Form is submitted')
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit= {handleFormSubmit}>

        <button onClick = {handleClick}>Click</button>
        </form>
        <div><input type= 'text' onChange={handleChange}/></div>
      </header>
    </div>
  );
}

export default App;
