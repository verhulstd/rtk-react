import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, toggleTodo } from "../store/todosSlice";
const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [val, setValue] = useState("");
  return (
    <div className="todos">
      <h1>Using todosSlice</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(val));
        }}>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>add todo</button>
      </form>
      <ul>
        {todos.map(({ id, todo, checked }) => (
          <li key={id}>
            <span className={checked ? "checked" : ""}>{todo}</span>
            <button
              onClick={() => {
                dispatch(toggleTodo(id));
              }}>
              📝
            </button>
            <button
              onClick={() => {
                dispatch(deleteTodo(id));
              }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
