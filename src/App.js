import "./App.css";
import AddTask from "./components/AddTask";
import Display from "./components/Display";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "taskApp.tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskTitleRef = useRef();

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
        { id: uuidv4(), taskTitle: taskTitle, complete: false },
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
