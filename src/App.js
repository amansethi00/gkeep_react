import "./App.css";
import "./App.scss";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {ReactComponent as Pin} from "./svg/push-pin.svg";
import {Footer} from "./components/Footer";
const todo = [
  {
    id: uuidv4(),
    title: "Title",
    description: "Description",
    complete: false,
    pin: false,
    label: "",
    bgColor: "",
  },
];
function App() {
  const [input, showInput] = useState(false);
  const [userinput, setUserinput] = useState("");
  const [todos, setTodos] = useState(todo);
  const [pinnedTodos, setPinnedTodos] = useState([]);
  const inputTitleHandler = (event) => {
    setUserinput({...userinput, title: event.target.value, id: uuidv4()});
  };
  const inputDescriptionHandler = (event) => {
    setUserinput({
      ...userinput,
      description: event.target.value,
      id: uuidv4(),
      pin: false,
    });
  };
  const addButtonHandler = () => {
    if (userinput !== "") {
      setTodos([...todos, userinput]);
      setUserinput("");
      showInput(!input);
    }
  };
  const closeButtonHandler = () => {
    showInput(!input);
    setUserinput("");
  };

  const pinHandler = (id) => {
    setPinnedTodos([...todos.filter((e) => e.id === id), ...pinnedTodos]);
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };
  const unpinhandler = (id) => {
    setTodos([...pinnedTodos.filter((e) => e.id === id), ...todos]);
    setPinnedTodos((prev) => prev.filter((e) => e.id !== id));
  };
  const changeColor = (color) => {
    setUserinput({...userinput, color: color});
  };
  console.log(todos);
  console.log(pinnedTodos);
  return (
    <div className="App">
      <div className="gkeep">
        <div className="sidebar">
          <h1>Tags</h1>
        </div>
        <div className="keep-container">
          {input === false ? (
            <div className="addNote" onClick={() => showInput(true)}>
              add note
            </div>
          ) : (
            <div
              className="input-div"
              style={{backgroundColor: userinput.color}}
            >
              <input
                onChange={inputTitleHandler}
                placeholder="Title"
                className="input-title"
              ></input>
              <div>
                <textarea
                  placeholder="add a note..."
                  className="input-description"
                  onChange={inputDescriptionHandler}
                ></textarea>
              </div>
              <button onClick={addButtonHandler}>Add</button>
              <button onClick={closeButtonHandler}>Close</button>

              <span
                onClick={() => changeColor("#fbbf24")}
                className="color color-1 "
              ></span>
              <span
                onClick={() => changeColor("#a3e635")}
                className="color color-2"
              ></span>
              <span
                onClick={() => changeColor("#60a5fa")}
                className="color color-3"
              ></span>
              <span
                onClick={() => changeColor("#f472b6")}
                className="color color-4"
              ></span>
            </div>
          )}
          <ul>
            <div className="todo-view">
              {/* Pinned Notes */}
              {pinnedTodos.length > 0 ? <h2>Pinned Notes</h2> : <></>}
              <div className="todo-pinned">
                {pinnedTodos.map((prev) => {
                  return (
                    <li key={prev.id}>
                      <div
                        className="todo"
                        style={{backgroundColor: prev.color}}
                      >
                        <div className="todo-head">
                          <div className="todo-title">{prev.title}</div>
                          <span onClick={() => unpinhandler(prev.id)}>
                            <Pin className="pinned-pin" />
                          </span>
                        </div>

                        <div className="todo-description">
                          {prev.description}
                        </div>
                        <Footer setTodos={setPinnedTodos} id={prev.id} />
                      </div>
                    </li>
                  );
                })}
              </div>
              <h2>Others</h2>
              <div className="todo-others">
                {/* Other notes */}
                {todos
                  .filter((x) => x.pin === false)
                  .map((prev) => {
                    return (
                      <li key={prev.id}>
                        <div
                          className="todo"
                          style={{backgroundColor: prev.color}}
                        >
                          <div className="todo-head">
                            <span onClick={() => pinHandler(prev.id)}>
                              <Pin className="todo-pin" />
                            </span>
                          </div>
                          <div className="todo-title">{prev.title}</div>
                          <div className="todo-description">
                            {prev.description}
                          </div>
                          <Footer setTodos={setTodos} id={prev.id} />
                        </div>
                      </li>
                    );
                  })}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="pin"></div>
      {/* <div className="todo">
        <div className="todo-title"> Title</div>
        <div className="todo-description">Description</div>
      </div> */}
    </div>
  );
}

export default App;
