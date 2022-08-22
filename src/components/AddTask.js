import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const AddTask = ({ handleAddTask, removeCompleted, taskTitleRef }) => {
  const { setNewTodo, setTodos, newTodo } = useContext(TodoContext);

  return (
    <Container>
      <Input
        onChange={(event) =>
          setNewTodo((prevValue) => ({
            ...prevValue,
            title: event.target.value,
          }))
        }
        ref={taskTitleRef}
        type="text"
        placeholder="Add Task here"
      />
      <ButtonContainer>
        <Button
          onClick={() => {
            setTodos((prevValue) => [newTodo, ...prevValue]);
            setNewTodo({});
          }}
        >
          Add Task
        </Button>
        <Button onClick={removeCompleted}>Remove Completed</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  height: 100%;
  margin: 2rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 310px;
  border-radius: 5px;

  :focus {
    background-color: aliceblue;
    outline: none;
  }

  ::placeholder {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: var(--white-color);
  height: 3rem;
  width: 8rem;
  margin: 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s all;

  :hover {
    background-color: var(--lightGray-color);
    scale: 1.1;
    font-size: 12px;
    color: var(--white-color);
  }
`;

export default AddTask;
