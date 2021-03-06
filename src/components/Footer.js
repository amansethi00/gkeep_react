import {ReactComponent as Delete} from "../svg/delete-24px.svg";
import "./index.css";
export function Footer({id, setTodos, edit}) {
  const clickHandler = (id) => {
    setTodos((todo) => todo.filter((e) => e.id !== id));
  };
  const changeColor = (id, color) => {
    setTodos((todo) =>
      todo.map((element) =>
        element.id === id ? {...element, color: color} : element
      )
    );
  };
  return (
    <div className="footer">
      <Delete onClick={() => clickHandler(id)} className="delete-svg" />
      <span
        onClick={() => changeColor(id, "#fbbf24")}
        className="color color-1 "
      ></span>
      <span
        onClick={() => changeColor(id, "#a3e635")}
        className="color color-2"
      ></span>
      <span
        onClick={() => changeColor(id, "#60a5fa")}
        className="color color-3"
      ></span>
      <span
        onClick={() => changeColor(id, "#f472b6")}
        className="color color-4"
      ></span>
    </div>
  );
}
