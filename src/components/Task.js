import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0.5rem;
`;
const Label = styled.label``;
const Input = styled.input``;

export default function Task({ title, toggleTask }) {
  // function handleTaskClick() {
  //   toggleTask(task.id);
  // }

  return (
    <Container>
      <Label>
        <Input
          type="checkbox"
          // checked={task.complete}
          // onChange={handleTaskClick}
        />
        {title}
      </Label>
    </Container>
  );
}
