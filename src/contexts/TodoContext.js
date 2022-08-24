import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    date: "",
    title: "",
    completed: false,
  });

  // useEffect(() => console.log(todos), [todos]);

  return (
    <TodoContext.Provider value={{ newTodo, setNewTodo, todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
