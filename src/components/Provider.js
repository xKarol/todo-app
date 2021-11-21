import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: "Karol",
      completed: false,
    },
    { id: 2, text: "test", completed: true },
  ]);
  return (
    <TodoContext.Provider value={[todos, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
