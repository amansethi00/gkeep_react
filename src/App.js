import "./App.css";
import "./App.scss";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
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

  const inputTitleHandler = (event) => {
    setUserinput({...userinput, title: event.target.value, id: uuidv4()});
  };
  const inputDescriptionHandler = (event) => {
    setUserinput({...userinput, description: event.target.value});
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
  // console.log(userinput);
  // console.log(todos);

  function Pin({id, setTodo}) {
    const pinHandler = (id) => {
      setTodo((prev) => {
        prev.map((e) => (e.id === id ? {...e, pin: true} : e));
      });
      console.log(todos);
    };
    return (
      <div>
        <button onClick={() => pinHandler(id)}>Pinned</button>
      </div>
    );
  }
  const pinHandler = (id) => {
    setTodos((prev) =>
      prev.map((e) => (e.id === id ? {...e, pin: !e.pin} : e))
    );
  };
  console.log(todos);
  return (
    <div className="App">
      <div className="gkeep">
        <div className="sidebar">
          <h1>Tags</h1>
        </div>
        <div className="keep-container">
          {/* <h1>Google Keep</h1> */}

          {input === false ? (
            <div className="addNote" onClick={() => showInput(true)}>
              add note
            </div>
          ) : (
            <div className="input-div">
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
            </div>
          )}
          <ul>
            <div className="todo-view">
              {todos.map((prev) => {
                return (
                  <li key={prev.id}>
                    <div className="todo">
                      <div className="todo-title">{prev.title}</div>
                      <div className="todo-description">{prev.description}</div>
                      {/* <Pin id={prev.id} setTodo={setTodos} /> */}
                      <button onClick={() => pinHandler(prev.id)}>
                        {prev.pin !== true ? (
                          <span>Pin</span>
                        ) : (
                          <span>Pinned</span>
                        )}
                      </button>
                    </div>
                  </li>
                );
              })}
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
