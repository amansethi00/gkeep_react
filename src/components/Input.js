import {v4 as uuidv4} from "uuid";
import {ReactComponent as Delete} from "../svg/delete-24px.svg";

export function Input({
  input,
  showInput,
  userinput,
  setUserinput,
  setTodos,

  todos,
  setTags,
  tags,
}) {
  const inputTitleHandler = (event) => {
    setUserinput({
      ...userinput,
      title: event.target.value,
      id: uuidv4(),
    });
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
    if (userinput.description && userinput.title) {
      setTodos([userinput, ...todos]);
      setUserinput({edit: false, pin: false});
      showInput(!input);
    } else {
      alert("Please enter title and/or description");
    }
  };
  const closeButtonHandler = () => {
    showInput(!input);
    setUserinput({edit: false, pin: false});
  };
  const changeColor = (color) => {
    setUserinput({...userinput, color: color});
  };

  const pinbuttonhandler = () => {
    setUserinput({...userinput, pin: !userinput.pin});
  };
  //   console.log(tag);

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
        {/* <div className="tag-view">
          {userinput.tags.map((x) => {
            return <span className="tag-selected">#{x}</span>;
          })}
        </div> */}
        <div className="footer-input">
          <button onClick={addButtonHandler} className="button-add">
            Add Note
          </button>
          <div className="color-palette">
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
          <button className="button-input-pin" onClick={pinbuttonhandler}>
            {userinput.pin === false ? "Pin" : "Pinned"}
          </button>
          <select
            className="input-tags"
            onChange={(event) =>
              setUserinput({...userinput, tags: event.target.value})
            }
          >
            <option>Add tag</option>
            {tags.map((x) => {
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
