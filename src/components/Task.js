import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function Task({ title, completed, id, date }) {
  const { setTodos, todos } = useContext(TodoContext);

  const handleClick = () => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[index].completed = !completed;
    setTodos(newTodos);
  };

  return (
    <Container>
      <Label>
        <Input type="checkbox" checked={completed} onChange={handleClick} />
        {date.slice(1, 11)} {title}
      </Label>
    </Container>
  );
}

const Container = styled.div`
  margin: 0.5rem;
`;
const Label = styled.label``;
const Input = styled.input``;
