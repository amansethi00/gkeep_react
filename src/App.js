import "./App.css";
import "./App.scss";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

import {Input} from "./components/Input";
import {Todo} from "./components/Todo";
const todo = [
  {
    id: uuidv4(),
    title: "Title",
    description: "Description",
    complete: false,
    pin: false,
    label: "",
    bgColor: "",
    edit: false,
  },
];
function App() {
  const [input, showInput] = useState(false);
  const [userinput, setUserinput] = useState({edit: false, tag: []});
  const [todos, setTodos] = useState(todo);
  const [pinnedTodos, setPinnedTodos] = useState([]);
  const [tag, setTag] = useState({
    state: false,
    tags: ["todo", "add to class notes"],
  });
  // console.log(todos);
  // console.log(pinnedTodos);
  // console.log(tag);
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
            <Input
              input={input}
              showInput={showInput}
              userinput={userinput}
              setUserinput={setUserinput}
              setTodos={setTodos}
              setPinnedTodos={setPinnedTodos}
              todos={todos}
              setTag={setTag}
              tag={tag}
            />
          )}
          <ul>
            <div className="todo-view">
              {/* Pinned Notes */}
              {pinnedTodos.length > 0 ? <h2>Pinned Notes</h2> : <></>}
              <div className="todo-pinned">
                {pinnedTodos.map((prev) => {
                  return (
                    <li key={prev.id}>
                      <Todo
                        prev={prev}
                        setPinnedTodos={setPinnedTodos}
                        todos={todos}
                        pinnedTodos={pinnedTodos}
                        setTodos={setTodos}
                      />
                    </li>
                  );
                })}
              </div>
              <h2>Others</h2>
              <div className="todo-others">
                {/* Other notes */}
                {todos.map((prev) => {
                  return (
                    <li key={prev.id}>
                      <Todo
                        prev={prev}
                        setPinnedTodos={setPinnedTodos}
                        todos={todos}
                        pinnedTodos={pinnedTodos}
                        setTodos={setTodos}
                      />
                    </li>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="pin"></div>
    </div>
  );
}

export default App;
