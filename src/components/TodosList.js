import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem.js";
import { clearCompletedTodos } from "../services/firebase";
import { FILTER_ALL, FILTER_UNCOMPLETED } from "../constants/filter";

export default function TodosList() {
  const { todos, setTodos, filter } = useContext(TodoContext);

  const clearCompleted = async () => {
    const newList = todos.filter((data) => !data.completed);
    if (newList.length - todos.length >= 0) return;
    await clearCompletedTodos();
    setTodos(newList);
  };

  return (
    <ul className="container__list">
      {todos
        .filter((data) =>
          filter === FILTER_ALL
            ? data
            : filter === FILTER_UNCOMPLETED
            ? !data.completed
            : data.completed
        )
        .map((data) => (
          <TodoItem key={data.id} data={data} />
        ))}

      <div className="container__list__info">
        <span>{todos.filter((data) => !data.completed).length} items left</span>
        <span onClick={clearCompleted}>Clear Completed</span>
      </div>
    </ul>
  );
}
