import {v4 as uuidv4} from "uuid";

export function Sidebar({tags, setTags}) {
  const toggleActiveTodo = (id) => {
    tags.filter((x) => x.active === true).length === 0
      ? setTags((x) =>
          x.map((element) =>
            element.id === id ? {...element, active: !element.active} : element
          )
        )
      : setTags((x) =>
          x.map((element) =>
            element.id === id
              ? {...element, active: !element.active}
              : {...element, active: false}
          )
        );
  };
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([
        ...tags,
        {id: uuidv4(), name: event.target.value, active: false},
      ]);
      event.target.value = "";
    }
  };
  return (
    <div className="sidebar">
      <h1>Tags</h1>
      {tags.map((x) => (
        <li onClick={() => toggleActiveTodo(x.id)}>{x.name}</li>
      ))}
      <div>
        <h3>Add Tag</h3>
        <input type="text" onKeyDown={addTags}></input>
      </div>
    </div>
  );
}
