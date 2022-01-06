import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";
import Loader from "./Loader.js";
import { addTodo } from "../services/firebase";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const { setTodos } = useContext(TodoContext);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text.length || loading) return;
    setLoading(true);
    const item = await addTodo(text);
    setTodos((prevState) => [
      { id: item.id, text: text, completed: false },
      ...prevState,
    ]);
    setLoading(false);
    setText("");
  };
  
  return (
    <form className="container__input" onSubmit={(e) => handleAdd(e)}>
      <input type="checkbox" disabled />
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {loading && <Loader className="container__input__loader" />}
    </form>
  );
}
