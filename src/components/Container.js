import React, { useState, useContext } from "react";
import { MoonIcon } from "./Icons.js";
import TodoItem from "./TodoItem.js";
import { TodoContext } from "./Provider.js";

function Container() {
  const [todos, setTodo] = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  console.log(todos);
  const addTodo = (e) => {
    e.preventDefault();
    setTodo((data) => [...data, { text: todoName, completed: false }]);
  };

  const clearCompleted = () => {
    const newList = todos.filter((data) => !data.completed);
    setTodo(newList);
  };

  return (
    <>
      <section className="container">
        <header className="container__header">
          <span className="container__logo">TODO</span>
          <MoonIcon />
        </header>
        <form className="container__input" onSubmit={(e) => addTodo(e)}>
          <input type="checkbox" disabled />
          <input
            type="text"
            placeholder="Create a new todo..."
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </form>
        <ul className="container__list">
          {todos.map((data, index) => (
            <TodoItem text={data.text} completed={data.completed} key={index} />
          ))}

          <div className="container__list__info">
            <span>
              {todos.filter((data) => !data.completed).length} items left
            </span>
            <span onClick={clearCompleted}>Clear Completed</span>
          </div>
        </ul>
        <div className="container__sort">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <div className="container__dragInfo">
          <span>Drag and drop to reorder list</span>
        </div>
      </section>
      <span className="author">
        Challenge by <a href="http://frontendmentor.io/">Frontend Mentor</a>.
        Coded by <a href="https://github.com/xKarol">Karol</a>
      </span>
    </>
  );
}

export default Container;
