import { useState, useEffect } from "react";
import { getTodos } from "../services/firebase";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setPending(true);
      const todos = await getTodos();
      setTodos(todos);
      setPending(false);
    };
    getData();
  }, []);

  return { todos, setTodos, pending };
}
