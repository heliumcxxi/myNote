import { useContext } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
import { TodoContext } from "../../contexts/TodoContext";

const Container = styled.div`
  width: 300px;
  padding: 2rem;
  margin: auto;
  height: 300px;
`;

const CusCalendar = () => {
  const { setNewTodo } = useContext(TodoContext);

  return (
    <Container>
      <Calendar
        onChange={(value) => {
          setNewTodo((x) => ({ ...x, date: JSON.stringify(value) }));
        }}
      />
    </Container>
  );
};

export default CusCalendar;
