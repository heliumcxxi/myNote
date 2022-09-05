import "./App.scss";
import AddTask from "./components/AddTask";
import Display from "./components/Display";
import { useRef, useState, useEffect, useContext } from "react";

import CusCalendar from "./components/CusCalendar/CusCalendar";
import { TodoContext } from "./contexts/TodoContext";

const LOCAL_STORAGE_KEY = "taskApp.tasks";

function App() {
  const titleRef = useRef();
  const { newTodo, setNewTodo, todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTodos((prevTasks) => [...prevTasks, ...storedTasks]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <div className="calendarContainer">
        <CusCalendar />
      </div>
      <div className="taskContainer">
        <Display />
        <AddTask titleRef={titleRef} />
      </div>
    </div>
  );
}

export default App;
