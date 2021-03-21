import "./App.css";
import "./App.scss";
import {useState} from "react";
import {Input} from "./components/Input";
import {Sidebar} from "./components/Sidebar";
import {Main} from "./components/Main";
function App() {
  const [input, showInput] = useState(false);
  return (
    <div className="App">
      <div className="gkeep">
        <Sidebar />
        <div className="keep-container">
          {input === false ? (
            <div className="addNote" onClick={() => showInput(true)}>
              add note
            </div>
          ) : (
            <Input showInput={showInput} />
          )}
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
