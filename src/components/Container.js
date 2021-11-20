import React from "react";
import { MoonIcon } from "./Icons.js";
import TodoItem from "./TodoItem.js";
function Container() {
  return (
    <>
      <section className="container">
        <header className="container__header">
          <span className="container__logo">TODO</span>
          <MoonIcon />
        </header>
        <div className="container__input">
          <input type="checkbox" />
          <input type="text" placeholder="Create a new todo..." />
        </div>
        <ul className="container__list">
          <TodoItem completed={false} text="Jog around" />
          <TodoItem completed={true} text="Take a walk" />
          <TodoItem completed={true} text="Jog around" />

          <div className="container__list__info">
            <span>5 items left</span>
            <span>Clear Completed</span>
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
