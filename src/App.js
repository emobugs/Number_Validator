import "./App.css";

function App() {
<<<<<<< Updated upstream
=======
  const [inputValue, setInputValue] = useState("");
  const [isValidNumber, setValidNumber] = useState(false);
  
  const setValue = (e) => {
    setInputValue(e);
    checkIfValid(inputValue);
  }
  
  const checkIfValid = (e) => {
    !isNaN(e) && e !== "" ? setValidNumber(true) : setValidNumber(false);
  }

  const isValid = useMemo(() => {
    setInputValue(inputValue)}, [inputValue]);
  

>>>>>>> Stashed changes
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
