import {Todo} from "./Todo.js";
export function Main({todos, setTodos, tags}) {
  return (
    <div className="todo-view">
      {tags.filter((x) => x.active === true).length === 0 ? (
        <div>
          {todos.filter((x) => x.pin === true).length > 0 && (
            <div>
              <h2>Pinned</h2>
              <ul>
                <div className="todo-others">
                  {todos
                    .filter((x) => x.pin === true)
                    .map((prev) => {
                      return (
                        <li key={prev.id}>
                          <Todo prev={prev} todos={todos} setTodos={setTodos} />
                        </li>
                      );
                    })}
                </div>
              </ul>
            </div>
          )}
          <h2>Others</h2>
          {/* Other notes */}
          <ul>
            <div className="todo-others">
              {todos
                .filter((x) => x.pin === false)
                .map((prev) => {
                  return (
                    <li key={prev.id}>
                      <Todo prev={prev} todos={todos} setTodos={setTodos} />
                    </li>
                  );
                })}
            </div>
          </ul>
        </div>
      ) : (
        <ul>
          <div>
            {todos
              .filter(
                (x) => x.tags === tags.filter((x) => x.active === true)[0].name
              )
              .map((prev) => {
                return (
                  <li key={prev.id}>
                    <Todo prev={prev} todos={todos} setTodos={setTodos} />
                  </li>
                );
              })}
          </div>
        </ul>
      )}
    </div>
  );
}
