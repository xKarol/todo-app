import React from "react";
import { MoonIcon, CrossIcon } from "./Icons.js";
function Container() {
  return (
    <>
      <section className="container">
        <header className="container__header">
          <span className="container__logo">TODO</span>
          <MoonIcon />
        </header>
        <div className="container__input">
          <input type="radio" className="container__input__confirm" />
          <input type="text" placeholder="Create a new todo..." />
        </div>
        <ul className="container__list">
          <li>
            <input type="radio" className="container__list__confirm" />
            <h1 className="container__list__text">Jog around</h1>
            <CrossIcon />
          </li>
          <li>
            <input type="radio" className="container__list__confirm" />
            <h1 className="container__list__text">Jog around</h1>
            <CrossIcon />
          </li>
          <li>
            <input type="radio" className="container__list__confirm" />
            <h1 className="container__list__text">Jog around</h1>
            <CrossIcon />
          </li>
          <div className="container__list__info">
            <span>5 items left</span>
            <span>Clear Completed</span>
          </div>
        </ul>
      </section>
    </>
  );
}

export default Container;
