import "./App.css";
import AddTask from "./components/AddTask";
import Display from "./components/Display";
import { useRef, useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import CusCalendar from "./components/CusCalendar/CusCalendar";
import { TodoContext } from "./contexts/TodoContext";

const LOCAL_STORAGE_KEY = "taskApp.tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const taskTitleRef = useRef();

  const { newTodo, setNewTodo, todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks((prevTasks) => [...prevTasks, ...storedTasks]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id) {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.complete = !task.complete;
    setTasks(newTasks);
  }

  function handleAddTask(e) {
    const taskTitle = taskTitleRef.current.value;
    if (taskTitle === "") return;
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: prevTasks + 1,
          taskTitle: taskTitle,
          complete: false,
        },
      ];
    });
    taskTitleRef.current.value = null;
  }

  function removeCompleted() {
    const newTasks = tasks.filter((task) => !task.complete);
    setTasks(newTasks);
  }

  return (
    <>
      <CusCalendar />
      <Display tasks={tasks} toggleTask={toggleTask} />
      <AddTask
        handleAddTask={handleAddTask}
        removeCompleted={removeCompleted}
        taskTitleRef={taskTitleRef}
      />
    </>
  );
}

export default App;
