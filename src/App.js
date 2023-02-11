import "./App.css";

function App() {
<<<<<<< Updated upstream
=======
  const [inputValue, setInputValue] = useState("");
  const [isValidNumber, setValidNumber] = useState(false);



  const checkIfValid = (e) => {
    return !isNaN(e) && e !== "";
  }

  const isValid = useMemo(() =>
    checkIfValid(inputValue)
    , [inputValue]);

  const setValue = (e) => {
    setInputValue(e);
    setValidNumber(isValid);
  }

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          onChange={(e) => setValue(e.target.value)}
          className="input is-large"
          type="text"
          placeholder="Enter number..."

        />
        <span className="icon is-small is-right">
          <i className={`fas ${isValid ? "fa-check" : "fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
