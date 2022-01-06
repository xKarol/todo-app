import { useState } from "react";
import TodoContext from "../context/TodoContext";
import useTodos from "../hooks/useTodos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import Filter from "./Filter";
import { FILTER_ALL } from "../constants/filter";

export default function Todo({ theme, changeTheme }) {
  const [filter, setFilter] = useState(FILTER_ALL);
  const { todos, setTodos } = useTodos();

  return (
    <TodoContext.Provider value={{ todos, setTodos, setFilter, filter }}>
      <section className="container">
        <Header theme={theme} changeTheme={changeTheme} />
        <AddTodo />
        <TodosList />
        <Filter />

        <div className="container__dragInfo">
          <span>Drag and drop to reorder list</span>
        </div>
      </section>
      <span className="author">
        Challenge by <a href="http://frontendmentor.io/">Frontend Mentor</a>.
        Coded by <a href="https://github.com/xKarol">Karol</a>
      </span>
    </TodoContext.Provider>
  );
}
