import "./App.css";

function App() {
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."

        />
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span> 
      </div>
    </div>
  );
}

export default App;
