import "./App.css";
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

  // function toggleTask(id) {
  //   const newTodos = [...todos];
  //   const todo = newTodos.find((task) => task.id === id);
  //   todo.complete = !to.complete;
  //   setTodos(newTasks);
  // }

  // function handleAddTask(e) {
  //   const taskTitle = taskTitleRef.current.value;
  //   if (taskTitle === "") return;
  //   setTodos((prevTasks) => {
  //     return [
  //       ...prevTasks,
  //       {
  //         id: prevTasks + 1,
  //         taskTitle: taskTitle,
  //         complete: false,
  //       },
  //     ];
  //   });
  //   taskTitleRef.current.value = null;
  // }

  // function removeCompleted() {
  //   const newTasks = tasks.filter((task) => !task.complete);
  //   setTodos(newTasks);
  // }

  return (
    <>
      <CusCalendar />
      <Display />
      <AddTask titleRef={titleRef} />
    </>
  );
}

export default App;
