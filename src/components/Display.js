import Task from "./Task";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200px;
  overflow: auto;
  width: 310px;
  margin: auto;
  border: 1px solid;
  border-radius: 5px;
`;

export default function Display({ toggleTask }) {
  const { todos } = useContext(TodoContext);
  return (
    <Container>
      {todos.map((task) => (
        <Task key={task.date} title={task.title} toggleTask={toggleTask} />
      ))}
    </Container>
  );
}
