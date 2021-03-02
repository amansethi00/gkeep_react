import "./App.css";
import "./App.scss";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

import {Input} from "./components/Input";
import {Sidebar} from "./components/Sidebar";
import {Main} from "./components/Main";
const todo = [
  {
    id: uuidv4(),
    title: "Title",
    description: "Description",
    pin: false,

    editTitle: false,
    editDescription: false,
    tags: "",
  },
  {
    id: uuidv4(),
    title: "Pinned Title",
    description: "Pinned Description",
    pin: true,
    editTitle: false,
    editDescription: false,
    tags: "",
  },
  {
    id: uuidv4(),
    title: "Class Notes Title",
    description: "Class Notes Description",
    pin: false,
    editTitle: false,
    editDescription: false,
    tags: "Class Notes",
  },
  {
    id: uuidv4(),
    title: "Todo Title",
    description: "Todo Description",
    pin: false,
    editTitle: false,
    editDescription: false,
    tags: "Todo",
  },
];

function App() {
  const [input, showInput] = useState(false);
  const [userinput, setUserinput] = useState({
    editTitle: false,
    editDescription: false,
    tags: [],
    pin: false,
  });
  const [todos, setTodos] = useState(todo);
  const [tags, setTags] = useState([
    {id: 1, name: "Todo", active: false},
    {id: 2, name: "Class Notes", active: false},
  ]);
  return (
    <div className="App">
      <div className="gkeep">
        <Sidebar setTags={setTags} tags={tags} />
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
              todos={todos}
              tags={tags}
            />
          )}
          <Main setTodos={setTodos} todos={todos} tags={tags} />
        </div>
      </div>
    </div>
  );
}

export default App;
