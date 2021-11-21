import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodo] = useState([]);
  return (
    <TodoContext.Provider value={[todos, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
