import { db } from "../config/firebase.config";
import {
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  query,
  getDocs,
  doc,
  where,
} from "firebase/firestore";

export async function getTodos() {
  const todos = await getDocs(collection(db, "todos"));
  return todos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function addTodo(text) {
  return await addDoc(collection(db, "todos"), { text: text });
}

export async function deleteTodo(id) {
  return await deleteDoc(doc(db, "todos", id));
}

export async function toggleCompleteTodo(id, completed) {
  return await updateDoc(doc(db, "todos", id), { completed: completed });
}
export async function clearCompletedTodos() {
  const q = query(collection(db, "todos"), where("completed", "==", true));
  const snapshot = await getDocs(q);
  snapshot.docs.map(async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id));
  });
}
