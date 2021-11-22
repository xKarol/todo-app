import React, { useContext } from "react";
import { CrossIcon, CheckIcon } from "./Icons.js";
import { TodoContext } from "./Provider.js";
import { db } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const TodoItem = ({ completed, text, id }) => {
  const [todos, setTodo] = useContext(TodoContext);
  const completeTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, { completed: !completed });
    const newList = todos.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setTodo(newList);
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    const newList = todos.filter((data) => data.id !== id);
    setTodo(newList);
  };

  return (
    <>
      <li>
        <div className="container__list__confirm">
          {completed && <CheckIcon />}
          <input
            type="checkbox"
            className="container__confirm"
            checked={completed}
            onChange={() => completeTodo(id)}
          />
        </div>
        <h1 className={`container__list__text ${completed ? "completed" : ""}`}>
          {text}
        </h1>
        <span
          className="container__list__delete"
          onClick={() => deleteTodo(id)}
        >
          <CrossIcon />
        </span>
      </li>
    </>
  );
};

export default TodoItem;
