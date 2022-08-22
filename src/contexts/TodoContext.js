import { useState, createContext, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    date: "",
    title: "",
    completed: false,
  });

  useEffect(() => console.log(todos), [todos]);

  return (
    <TodoContext.Provider value={{ newTodo, setNewTodo, todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
