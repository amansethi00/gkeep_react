import {v4 as uuidv4} from "uuid";
import {ReactComponent as Delete} from "../svg/delete-24px.svg";
export function Input({
  input,
  showInput,
  userinput,
  setUserinput,
  setTodos,
  setPinnedTodos,
  todos,
}) {
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
  const changeColor = (color) => {
    setUserinput({...userinput, color: color});
  };
  return (
    <div>
      <div className="input-div" style={{backgroundColor: userinput.color}}>
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
        <button onClick={addButtonHandler} className="button-add">
          Add Note
        </button>

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
        <span onClick={closeButtonHandler} className="button-close">
          <Delete />
        </span>
      </div>
    </div>
  );
}
