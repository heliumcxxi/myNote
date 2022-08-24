import Task from "./Task";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function Display({}) {
  const { todos } = useContext(TodoContext);

  return (
    <Container>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.title}
          date={todo.date}
          completed={todo.completed}
        />
      ))}
    </Container>
  );
}

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
