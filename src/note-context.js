import {createContext, useContext, useReducer} from "react";
import {v4 as uuidv4} from "uuid";
export const NoteContext = createContext();

export function NoteProvider({children}) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TODO":
        return {...state, todos: action.newTodo.concat(state.todos)};
      default:
        return {...state};
    }
  };
  const [value, dispatch] = useReducer(reducer, {todos, tags});
  console.log(value);
  return (
    <NoteContext.Provider value={{value, dispatch}}>
      {children}
    </NoteContext.Provider>
  );
}
export function useNote() {
  return useContext(NoteContext);
}

const tags = [
  {id: 1, name: "Todo", active: false},
  {id: 2, name: "Class Notes", active: false},
];
const todos = [
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
