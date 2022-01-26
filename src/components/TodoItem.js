import { useState, useContext } from "react";
import { CrossIcon, CheckIcon } from "./Icons.js";
import TodoContext from "../context/TodoContext";
import { deleteTodo, toggleCompleteTodo } from "../services/firebase";

export default function TodoItem({ data: { completed, text, id } }) {
  const { todos, setTodos } = useContext(TodoContext);
  const [pending, setPending] = useState(false);

  const handleComplete = async () => {
    if (pending) return;
    setPending(true);
    await toggleCompleteTodo(id, !completed);
    const newList = todos.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setTodos(newList);
    setPending(false);
  };

  const handleDelete = async () => {
    if (pending) return;
    setPending(true);
    await deleteTodo(id);
    setTodos(todos.filter((data) => data.id !== id));
    setPending(false);
  };

  return (
    <li className={`${pending ? "container__list__pending" : undefined}`}>
      <div
        className={`container__list__confirm ${completed ? "active" : null}`}
        onClick={handleComplete}
      >
        {completed && <CheckIcon />}
      </div>
      <h1 className={`container__list__text ${completed ? "completed" : ""}`}>
        {text}
      </h1>
      <span className="container__list__delete" onClick={handleDelete}>
        <CrossIcon />
      </span>
    </li>
  );
}
