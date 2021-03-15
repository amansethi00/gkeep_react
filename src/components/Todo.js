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
  const toggleEditTitle = (id) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id ? {...item, editTitle: !item.editTitle} : item
      )
    );
  };
  const toggleEditDescription = (id) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id
          ? {...item, editDescription: !item.editDescription}
          : item
      )
    );
  };

  const editTitleHandler = (event) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === prev.id ? {...item, title: event.target.value} : item
      )
    );
    if (event.key === "Enter") {
      toggleEditTitle(prev.id);
    }
  };
  const editeEscriptionHandler = (event) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === prev.id ? {...item, description: event.target.value} : item
      )
    );
    if (event.key === "Enter") {
      toggleEditDescription(prev.id);
    }
  };

  return (
    <div className="todo" style={{backgroundColor: prev.color}}>
      <div className="todo-head">
        {prev.editTitle ? (
          <div className="todo-title">
            <input
              onKeyDown={editTitleHandler}
              defaultValue={prev.title}
            ></input>
          </div>
        ) : (
          <div className="todo-title" onClick={() => toggleEditTitle(prev.id)}>
            {prev.title}
          </div>
        )}
        {prev.editDescription ? (
          <div className="todo-description">
            <textarea
              onKeyDown={editeEscriptionHandler}
              className="edit-description"
              defaultValue={prev.description}
            ></textarea>
          </div>
        ) : (
          <div
            className="todo-description"
            onClick={() => toggleEditDescription(prev.id)}
          >
            {prev.description}
          </div>
        )}
        <span onClick={() => pinToggler(prev.id)}>
          <Pin className="pinned-pin" />
        </span>
      </div>
      {prev.tags?.length > 0 && (
        <div className="todo-tags-view">
          <span className="todo-tags">#{prev.tags}</span>
        </div>
      )}
      <Footer setTodos={setTodos} id={prev.id} edit={prev.edit} />
    </div>
  );
}
