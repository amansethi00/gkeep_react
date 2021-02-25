// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as Delete} from "../svg/delete-24px.svg";
import {ReactComponent as Edit} from "../svg/mode-24px.svg";
import {ReactComponent as Add} from "../svg/add-24px.svg";
// import {ReactComponent as Add} from "../svg/add-24px.svg";
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
  const editHandler = (id) => {
    setTodos((todo) =>
      todo.map((e) => (e.id === id ? {...e, edit: !e.edit} : e))
    );
  };

  return (
    <div className="footer">
      {/* <spanclassName="delete"> */}
      {/* <FontAwesomeIcon icon={faCoffee} /> */}

      {edit === false ? (
        <Edit className="delete-svg" onClick={() => editHandler(id)} />
      ) : (
        // <Add onClick={() => editHandler(id)} />
        <button className="button-edit" onClick={() => editHandler(id)}>
          <Add></Add>
        </button>
      )}

      <Delete onClick={() => clickHandler(id)} className="delete-svg" />
      {/* </spanclassName=> */}
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
      {/* <Add className="addLabel-icon">+</Add>
       */}
    </div>
  );
}
