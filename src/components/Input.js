import {ReactComponent as Delete} from "../svg/delete-24px.svg";
import {useNote} from "../note-context";
import {useState} from "react";
export function Input({showInput}) {
  const {value, dispatch} = useNote();
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    pin: false,
    color: "white",
    tag: null,
  });
  const closeButtonHandler = () => {
    showInput(false);
    setNewTodo({
      title: "",
      description: "",
      pin: false,
      color: "white",
      tag: null,
    });
  };
  console.log(newTodo);
  return (
    <div>
      <div className="input-div" style={{backgroundColor: newTodo.color}}>
        <input
          onChange={(event) =>
            setNewTodo((prev) => ({...prev, title: event.target.value}))
          }
          placeholder="Title"
          className="input-title"
        ></input>
        <div>
          <textarea
            placeholder="add a note..."
            className="input-description"
            onChange={(event) =>
              setNewTodo((prev) => ({...prev, description: event.target.value}))
            }
          ></textarea>
        </div>
        <div className="footer-input">
          <button
            onClick={dispatch({type: "SET_TODO", newTodo})}
            className="button-add"
          >
            Add Note
          </button>
          <div className="color-palette">
            <span
              onClick={() =>
                setNewTodo((prev) => ({...prev, color: "#fbbf24"}))
              }
              className="color color-1 "
            ></span>
            <span
              onClick={() =>
                setNewTodo((prev) => ({...prev, color: "#a3e635"}))
              }
              className="color color-2"
            ></span>
            <span
              onClick={() =>
                setNewTodo((prev) => ({...prev, color: "#60a5fa"}))
              }
              className="color color-3"
            ></span>
            <span
              onClick={() =>
                setNewTodo((prev) => ({...prev, color: "#f472b6"}))
              }
              className="color color-4"
            ></span>
            <span onClick={closeButtonHandler} className="button-close">
              <Delete />
            </span>
          </div>
          <button
            className="button-input-pin"
            onClick={() => setNewTodo((prev) => ({...prev, pin: !prev.pin}))}
          >
            {newTodo.pin === false ? "Pin" : "Pinned"}
          </button>
          <select
            className="input-tags"
            onChange={(event) =>
              setNewTodo((prev) => ({...prev, tag: event.target.value}))
            }
          >
            <option>Add tag</option>
            {value.tags.map((x) => {
              return (
                <option value={x.name} key={x.name}>
                  {x.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
