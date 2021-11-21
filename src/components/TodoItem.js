import React, { useContext } from "react";
import { CrossIcon, CheckIcon } from "./Icons.js";
import { TodoContext } from "./Provider.js";

const TodoItem = ({ completed, text, id }) => {
  const [todos, setTodo] = useContext(TodoContext);

  const completeTodo = () => {
    const newList = todos.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setTodo(newList);
  };

  const deleteTodo = () => {
    console.log("x");
    const newList = todos.filter((data) => data.id !== id);
    console.log(newList);
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
            onChange={completeTodo}
          />
        </div>
        <h1 className={`container__list__text ${completed && "completed"}`}>
          {text}
        </h1>
        <span onClick={deleteTodo}>
          <CrossIcon />
        </span>
      </li>
    </>
  );
};

export default TodoItem;
