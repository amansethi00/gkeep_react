import {Footer} from "./Footer";
import {ReactComponent as Pin} from "../svg/push-pin.svg";
export function Todo({prev, setPinnedTodos, todos, pinnedTodos, setTodos}) {
  const pinToggler = (id) => {
    if (todos.filter((e) => e.id === id).length > 0) {
      setPinnedTodos([...todos.filter((e) => e.id === id), ...pinnedTodos]);
      setTodos((prev) => prev.filter((e) => e.id !== id));
    } else {
      setTodos([...pinnedTodos.filter((e) => e.id === id), ...todos]);
      setPinnedTodos((prev) => prev.filter((e) => e.id !== id));
    }
  };
  return (
    <div className="todo" style={{backgroundColor: prev.color}}>
      <div className="todo-head">
        <div className="todo-title">{prev.title}</div>
        <span onClick={() => pinToggler(prev.id)}>
          <Pin className="pinned-pin" />
        </span>
      </div>

      <div className="todo-description">{prev.description}</div>
      <Footer
        setTodos={
          todos.filter((e) => e.id === prev.id).length > 0
            ? setTodos
            : setPinnedTodos
        }
        id={prev.id}
      />
    </div>
  );
}
