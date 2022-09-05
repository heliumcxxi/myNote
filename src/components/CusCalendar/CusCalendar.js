import { useContext } from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";
import { TodoContext } from "../../contexts/TodoContext";

const CusCalendar = () => {
  const { setNewTodo } = useContext(TodoContext);

  return (
    <div className="container">
      <Calendar
        onChange={(value) => {
          setNewTodo((x) => ({ ...x, date: JSON.stringify(value) }));
        }}
      />
    </div>
  );
};

export default CusCalendar;
