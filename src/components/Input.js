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
  setTag,
  tag,
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
      setTodos([...todos, userinput]);
      setUserinput({edit: false, tags: []});
      showInput(!input);
      setTag({...tag, state: false});
    } else {
      alert("Please enter title and/or description");
    }
  };
  const closeButtonHandler = () => {
    showInput(!input);
    setUserinput({edit: false, tags: []});
    setTag({...tag, state: false});
  };
  const changeColor = (color) => {
    setUserinput({...userinput, color: color});
  };
  const toggleTagButton = () => {
    setTag({...tag, state: !tag.state});
  };
  const addToTag = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTag({...tag, tags: [...tag.tags, event.target.value]});
    }
  };
  const addToTodo = (selectTag) => {
    console.log(selectTag);
    if (userinput.tags.filter((s) => s === selectTag).length === 0) {
      setUserinput({...userinput, tags: [...userinput.tags, selectTag]});
    }
  };
  console.log(userinput);
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
        <div className="tag-view">
          {userinput.tags.map((x) => {
            return <span className="tag-selected">#{x}</span>;
          })}
        </div>
        <div className="footer-input">
          {" "}
          <button onClick={addButtonHandler} className="button-add">
            Add Note
          </button>
          {tag.state === false ? (
            <button className="button-tag" onClick={toggleTagButton}>
              Add Tag
            </button>
          ) : (
            <button className="button-tag" onClick={toggleTagButton}>
              Close Tag
            </button>
          )}
          {tag.state ? (
            <div className="div-addTag">
              <label>Add label</label>
              <input onKeyDown={addToTag} className="input-tag"></input>
              {tag.tags.map((s) => (
                <button className="button-tag" onClick={() => addToTodo(s)}>
                  #{s}
                </button>
              ))}
            </div>
          ) : (
            <></>
          )}
          <div className="color-palette">
            {" "}
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
      </div>
    </div>
  );
}
