import {Footer} from "./Footer";
import {ReactComponent as Pin} from "../svg/push-pin.svg";

export function Todo({prev, todos, setTodos}) {
  const pinToggler = (id) => {
    let toToggle = todos.filter((x) => x.id === id);
    let others = todos.filter((x) => x.id !== id);
    if (toToggle[0].pin === false) {
      toToggle[0].pin = true;

      setTodos([...toToggle, ...others]);
    } else {
      toToggle[0].pin = false;
      setTodos([...toToggle, ...others]);
    }
  };
  return (
    <div className="todo" style={{backgroundColor: prev.color}}>
      <div className="todo-head">
        <div className="todo-title" id="title">
          {prev.title}
        </div>
        <div className="todo-description">{prev.description}</div>

        <span onClick={() => pinToggler(prev.id)}>
          <Pin className="pinned-pin" />
        </span>
      </div>
      {prev.tags?.length > 0 && (
        <div className="todo-tags-view">
          <span className="todo-tags">#{prev.tags}</span>
        </div>
      )}
      {/* <div className="todo-tags-view">
        <span className="todo-tags">#{prev.tag}</span>
      </div> */}
      <Footer setTodos={setTodos} id={prev.id} edit={prev.edit} />
    </div>
  );
}
