import Task from "./Task";
import styled from "styled-components";

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

export default function Display({ tasks, toggleTask }) {
  return (
    <Container>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </Container>
  );
}
