import React from "react";
import { CrossIcon, CheckIcon } from "./Icons.js";
const TodoItem = ({ completed, text }) => {
  const completeTodo = () => {
    
  }
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
        <h1 className="container__list__text">{text}</h1>
        <CrossIcon />
      </li>
    </>
  );
};

export default TodoItem;