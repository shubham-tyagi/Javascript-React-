import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoInput from "./Components/TodoInput/TodoInput";
import { useState } from "react";

function App() {
  const [idNum, setIdNum] = useState(3);
  const [Todos, setTodos] = useState([
    { title: "Do Codding", id: "g1" },
    { title: "go to school", id: "g2" },
  ]);

  let onInputSubmitHandler = (inputData) => {
    setIdNum(idNum + 1);
    console.log(idNum);
    setTodos((prevState) => {
      return [{ title: inputData, id: "g" + idNum }, ...prevState];
    });
    console.log(inputData);
  };

  const onDeleteHandler = (deleteId) => {
    console.log(deleteId);
    setTodos((prevState) => {
      let newState = prevState.filter((todo) => todo.id !== deleteId);
      return newState;
    });
  };

  return (
    <div>
      <div className="cent">
        <div className="heading">TO-DO List</div>
        <TodoInput onInputSubmit={onInputSubmitHandler} />
        <TodoList todos={Todos} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default App;
