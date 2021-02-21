import "./App.css";
import {useState} from "react";

function App() {
  const [input, showInput] = useState(false);
  function inputHandler() {}
  return (
    <div className="App">
      <h1>Google Keep</h1>

      {input === false ? (
        <div className="click" onClick={() => showInput(true)}>
          add note
        </div>
      ) : (
        <div>
          {" "}
          <input
            onClick={inputHandler}
            placeholder="add title"
            className="input-title"
          ></input>
          <div>
            <textarea
              placeholder="add description"
              className="input-description"
            ></textarea>
          </div>
          <button onClick={() => showInput(false)}>Close</button>
        </div>
      )}

      {/* <div><input></input></div> */}
    </div>
  );
}

export default App;
