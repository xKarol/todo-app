import React, { useState, useEffect, useContext } from "react";
import { MoonIcon, SunIcon } from "./Icons.js";
import TodoItem from "./TodoItem.js";
import { TodoContext } from "./Provider.js";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Container({ theme, setTheme }) {
  const [todos, setTodo] = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  const [filter, setFilter] = useState(1);
  const todosCollectionRef = collection(db, "todos");

  const addTodo = async (e) => {
    e.preventDefault();

    const databaseAdd = async () => {
      const item = await addDoc(todosCollectionRef, {
        text: todoName,
        completed: false,
      });
      setTodo((data) => [
        { id: item.id, text: todoName, completed: false },
        ...data,
      ]);
    };
    if (todoName) {
      databaseAdd();
      setTodoName("");
    }
  };

  const clearCompleted = async () => {
    const todosRef = collection(db, "todos");
    const q = query(todosRef, where("completed", "==", true));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    results.forEach(async (result) => {
      const docRef = doc(db, "todos", result.id);
      await deleteDoc(docRef);
    });
    const newList = todos.filter((data) => !data.completed);
    setTodo(newList);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <>
      <section className="container">
        <header className="container__header">
          <span className="container__logo">TODO</span>
          <span
            className="container__theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </span>
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
          {todos
            .filter((data) =>
              filter === 1
                ? data
                : filter === 2
                ? !data.completed
                : data.completed
            )
            .map(({ text, completed, id }) => (
              <TodoItem text={text} completed={completed} id={id} key={id} />
            ))}

          <div className="container__list__info">
            <span>
              {todos.filter((data) => !data.completed).length} items left
            </span>
            <span onClick={clearCompleted}>Clear Completed</span>
          </div>
        </ul>
        <div className="container__sort">
          <span
            className={filter === 1 ? "active" : undefined}
            onClick={() => setFilter(1)}
          >
            All
          </span>
          <span
            className={filter === 2 ? "active" : undefined}
            onClick={() => setFilter(2)}
          >
            Active
          </span>
          <span
            className={filter === 3 ? "active" : undefined}
            onClick={() => setFilter(3)}
          >
            Completed
          </span>
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
